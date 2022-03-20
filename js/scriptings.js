const productosValidos = ["gorra", "campera", "buzo", "remera","pantalon", "malla", "zapatilla"];
const marcasValidas =["adidas", "nike", "vans", "puma"];
const generosValidos=["hombre", "mujer"];
const tallesValidosLetras=["s","m","l","xl"];
const tallesValidosNumeros=[38,39,40,41,42,43];
let stock=[]

let carritoDeCompras=[];
let contenidoCarrito= document.getElementById("carritoContenedor");
let contadorCarrito=document.getElementById("contadorCarrito");
let totalCarrito=document.getElementById("totalCompra");
let botonComprar=  document.getElementById("finalizar")



let containerProductos= document.getElementById ("productosPadre");


let tipoDeProductoFilter= document.getElementById("filtroTipoProducto");
let marcaFilter= document.getElementById("filtroMarca")
let generoFilter= document.getElementById("filtroGenero");


document.addEventListener("DOMContentLoaded", obtenerProductos())


crearFiltros(productosValidos, tipoDeProductoFilter,"tipo"); //llama a la funcmion crear filtros  y los crea en el DOM
crearFiltros(marcasValidas, marcaFilter, "marca");
crearFiltros (generosValidos, generoFilter, "genero");


async function obtenerProductos(){
    const respuesta= await fetch('./json/data.json');
    stock = await respuesta.json();
    mostrarProductos(stock);
};

function crearFiltros(array, contenedorEnHtml, tipoDeFiltro){
    
    array.forEach(p=>{
        let divFiltros= document.createElement ("div");
        divFiltros.className= "contenedorFiltros";         //recorre el array de marcasvalidas o productosvalidos(segun el filtro) y crea botones para filtrar(label e input)
        divFiltros.innerHTML +=`<label class="descripFiltro">${p}</label>                
        <input type="radio" name="filters" data-target=${tipoDeFiltro} class='botonFiltro' value=${p} </input>`; //con data-target diferencio cada input por categorias (tipo,marca,genero,talle,precio), mientras que con value le asigno a cada input un valor unico que puede tomar cada categoria (remera,buzo,adidas,nike)
        contenedorEnHtml.appendChild(divFiltros);
        
    })
    let botonesFiltro=document.getElementsByClassName ('botonFiltro');
    
    for (let i = 0;i < botonesFiltro.length; i++) {          //recorre la variable botonesFiltro que contiene todos los inputs generados 
        botonesFiltro[i].addEventListener('click',(evento)=>{ //por cada input recorrido se le asigna el evento "click"
            let productosFiltrados = stock.filter(item => {  //se crea una variable productosFiltrados donde almacene el stock de productos filtrados
                let filtro = evento.target.dataset.target  //utilizando target llamamos a el valor data-target de cada input creado(y clickeado) y se guarda en el array filtro
                if(filtro == 'genero'){        //si el valor que toma filtro es igual a 'genero'(o sea se clickeo en un input que tiene como dataset "genero") ......
                    return item[filtro] === evento.target.value || item[filtro] == 'unisex'     //...... que me retorne el/los items (filtrados) que sean iguales al valor que toma "evento" ó los items de la variable filtro que sean iguales a "unisex"
                } 
                return item[filtro] === evento.target.value //si no coincide con "genero" que me retorne el/los items del array filtro que coincida con el valor que toma evento(valor que se obtiene al hacer click por el dataset)
                
            })
            mostrarProductos(productosFiltrados) //se genera el array productosFiltrados en base a que lo que se clikea coincida con el tipo/marca/genero y se llama a la funcion mostrarProductos para que lo muestre
        })
        
    }
};

function mostrarProductos(array){
    containerProductos.innerHTML="";
    array.forEach(producto =>{                             //recorre cada producto para crear con cada uno de ellos lo siguiente
        let divProductos = document.createElement ("div");
        divProductos.className ="contenedorProductos";               //esta funcion crea un div con un h4,h3,imagenes y un boton de agregar al carrito por cada producto y los muestra en el html
        divProductos.innerHTML += `<div class="img-productos">              
        <img src="${producto.img}">
        </div> 
        <div class="info-productos">
        <h4 class="nombreProductos">${producto.nombre}</h4>
        <h3 class="precioProductos">$${producto.precio}</h3>
        </div>
        <div class="btnComprar">
        <button type="button" id="${producto.id}" class="addCarrito btn btn-outline-success">Agregar al carrito</button>
        </div>`;
        containerProductos.appendChild(divProductos);       //esto inserta el div creado (con sus hijos) al contenedor de productos del html
        
        let btnAgregar =document.getElementById(`${producto.id}`); 
        
        btnAgregar.addEventListener("click",()=>{                   //este evento llama a la funcion "agregar al carrito", cuando se clikea en un boton creado 
            agregarAlCarrito(producto.id)
            Toastify({
                text: `"${producto.nombre}" fue añadido con éxito. 🛒`,
                duration: 2500,
                style:{
                    background: "green"
                },
                gravity: "bottom"
            }).showToast();            //anteriormente. Notese que se identifica por ID el boton clikeado. El ID diferencia c/u de los botones llamados "agregar al carrito"
        })
    })
};

function agregarAlCarrito(id){                                              //agrega al array del carrito el producto que coincide con el id del boton clikeado
    let repetido=carritoDeCompras.find(item=> item.id == id);        //busca en el array del carrito el id del "nuevo producto añadido" y verifica si ya habia en el carrito un producto con ese ID
    if(repetido){
        repetido.cantidad += 1;                  //si hay un producto con ese ID, a la "cantidad" que habia de ese producto, le suma 1 (un producto adicional)
        document.getElementById(`unidades${repetido.id}`).innerHTML = `<p id=unidades${repetido.id} class="cantidadEnCarro">Cantidad: ${repetido.cantidad}</p>`; //le cambia la vista en el HTML , por ejemplo de "unidades:1" a "unidades:2"
        actualizarCarrito(); //llama a la funcion actualizar carrito para que se modifique el total de la compra y el contador del carrito
    }else{
        let productoAgregado = stock.find(articulo=>articulo.id== id); //busca en el array de productos el producto que coincida con el ID del boton clikeado para "añadir al carrito"
        carritoDeCompras=[...carritoDeCompras,productoAgregado];  //cuando encuentra el producto asociado al ID del boton, lo pushea (agrega) al array del carrito de compras
        actualizarCarrito();
        mostrarCarrito(productoAgregado);//llama a la funcion mostrar carrito para que muestre el div con imagen,precio y nombre del producto agregado al array del carrito
    }
    localStorage.setItem("carrito", JSON.stringify(carritoDeCompras)); //guarda los cambios efectuados en nuestro carrito en el localstorage para que en caso de refrescar la pagina quede almacenado alli
};

function mostrarCarrito(productoAgregado){  //"crea" los productos  dentro del carrito, similar a la funcion mostrarProductos pero esta dedicada a los productos del carrito

    let {nombre, precio, id, cantidad, img}= productoAgregado;  //destructuracion de la variable productoAgregado para obtener los elementos nombre,id,precio,etc.
    
    let div = document.createElement("div");        
    div.className= "productoEnCarrito"                          //en estas lineas se crea c/u de los productos agregados al array del carrito con su boton de QUITAR
    div.innerHTML=`
    <p class="nombreEnCarro">${nombre}</p>
    <img src="${img}" class="imagenesEnCarrito"/>
    <p class="precioEnCarro">$${precio}</p>
    <p id=unidades${id} class="cantidadEnCarro">Unidades: ${cantidad}</p>
    <button class="btnEliminar" id=botonEliminar${id}>Quitar</button>
    `
    contenidoCarrito.appendChild(div);
    
    let btnEliminar= document.getElementById(`botonEliminar${productoAgregado.id}`);
    btnEliminar.addEventListener("click", ()=>{                   //se crea el evento que al clikear en el boton "QUITAR" remueve el producto añadido al array del carrito
        if(productoAgregado.cantidad == 1){                        // condiciona que si hay solo 1 unidad del producto a QUITAR, remueva todo el div de ese producto
            btnEliminar.parentElement.remove();             //esto remueve todo el div del producto EN EL DOM
            carritoDeCompras=carritoDeCompras.filter(l=> l.id != productoAgregado.id);  //esto quita el producto del array carrito,lo que hace es DEJAR(filtrar) los productos que sean distintos al ID del producto que se clikeo
            actualizarCarrito(); 
            localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
        }else{
            productoAgregado.cantidad=productoAgregado.cantidad - 1  //condiciona que si hay mas de 1 unidad del producto agregado, al hacer click SOLO LE RESTE 1 A LA CANTIDAD (no remueva todo el div como en el IF)
            document.getElementById(`unidades${productoAgregado.id}`).innerHTML= `<p id=unidades${productoAgregado.id} class="cantidadEnCarro">Unidades: ${productoAgregado.cantidad}</p>` //esto hace que cambie el valor de la cantidad (-1 cantindades) en el DOM
            actualizarCarrito()
            localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
        }
        Toastify({
            text: `${nombre} fue removido con éxito. ✔`,
            duration: 2000,
            style:{
                background: "#DE170B"
            },
            gravity: "bottom"
        }).showToast();
    })
};
function actualizarCarrito(){      //esta funcion actualiza el contador del carrito y el total de la compra
    if(carritoDeCompras.length>=1){
        contenidoCarrito.style.display='flexbox'
        totalCarrito.style.display= 'flexbox'
        botonComprar.style.display='inline-block'
    }else{
        botonComprar.style.display='none'
    }
    contadorCarrito.innerText=carritoDeCompras.reduce((acc,el)=>acc + el.cantidad,0); //esto actualiza el contador del carrito
    botonComprar.innerText=`Comprar💲`;
    let total= carritoDeCompras.reduce ((acc,el)=> acc + (el.precio * el.cantidad),0);
    totalCarrito.innerText=`Total compra: $${total}`;//esto actualiza el precio, iterando sobre el array del carrito y por cada elemento encontrado multiplicar su precio por la cantidad
};

botonComprar.addEventListener('click', ()=>{
    let total= carritoDeCompras.reduce ((acc,el)=> acc + (el.precio * el.cantidad),0);
    Swal.fire({
        title: 'Esta seguro que desea realizar la compra?',
        text: "Una vez aceptado se emitirá su factura n° 2347.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: `Confirmar pago $${total}🔒`,
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Compra realizada con éxito.',
                `Se ha emitido su factura n° 2347.MUCHAS GRACIAS POR SU COMPRA 🙌.`,
                'success'
                )
                carritoDeCompras=[]
                localStorage.clear()
                actualizarCarrito()
                setTimeout(()=>{
                    contenidoCarrito.innerHTML = ''
                    actualizarCarrito(), 3000
                })
            }
        })
    
})

function recuperar(){ //esta funcion permite guardar en storage los movimientos/eventos que se van realizando en el sitio
    let recuperarLS=JSON.parse(localStorage.getItem("carrito")); //esto crea el espacio llamado "carrito" en el storage
    recuperarLS &&
    recuperarLS.forEach(element=>{
        mostrarCarrito(element)
        carritoDeCompras.push(element)
        actualizarCarrito()
    })
};
recuperar(); 