for (const filter of allsFiltros){
    filter.addEventListener("click",()=>{
        mostrarProductos(productos.filter(p=>{
            if(filter.id.includes(p.tipo)){
                return p.tipo == filter.id
            }
            if(filter.id.includes(p.marca)){
                return p.marca == filter.id
            }
        }))
    })
}

const productosValidos = ["gorra", "campera", "buzo", "remera","pantalon", "malla", "zapatilla"];
const marcasValidas =["adidas", "nike", "vans", "puma"];
const generosValidos=["hombre", "mujer"];
const tallesValidosLetras=["s","m","l","xl"];
const tallesValidosNumeros=[38,39,40,41,42,43];

let carritoDeCompras=[];
let contenidoCarrito= document.getElementById("carritoContenedor");
let contadorCarrito=document.getElementById("contadorCarrito");
let totalCarrito=document.getElementById("totalCompra");


let containerProductos= document.getElementById ("productosPadre");

let allsFiltros= document.getElementsByClassName("inputsFiltros");
let tipoDeProductoFilter= document.getElementById("filtroTipoProducto");
let marcaFilter= document.getElementById("filtroMarca")
let generoFilter= document.getElementById("filtroGenero");

let arrayFiltrado=[]
let filtrosArray=[]


document.addEventListener("DOMContentLoaded", mostrarProductos(productos)); //carga los productos en el dom 

crearFiltros(productosValidos, tipoDeProductoFilter); //llama a la funcion crear filtros  y los crea en el DOM
crearFiltros(marcasValidas, marcaFilter);                   


function mostrarProductos(array){
    containerProductos.innerHTML="";
    array.forEach(producto =>{
        let divProductos = document.createElement ("div");
        divProductos.className ="contenedorProductos";                      //crea un div con un h3,h4 y un boton de agregar al carro por cada producto.
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
        containerProductos.appendChild(divProductos);
        
        let btnAgregar =document.getElementById(`${producto.id}`)
        
        btnAgregar.addEventListener("click",()=>{
            agregarAlCarrito(producto.id)
        })
    })
};



function agregarAlCarrito(id){
    let repetido=carritoDeCompras.find(item=> item.id == id);
    if(repetido){
        repetido.cantidad = repetido.cantidad + 1;
        document.getElementById(`unidades${repetido.id}`).innerHTML = `<p id=${repetido.id} class="cantidadEnCarro">Cantidad: ${repetido.cantidad}</p>`;
        actualizarCarrito();
    }else{
        let productoAgregado = productos.find(articulo=>articulo.id== id)
        carritoDeCompras.push(productoAgregado);
        actualizarCarrito()
        let div = document.createElement("div");
        div.className= "productoEnCarrito"
        div.innerHTML=`
        <p class="nombreEnCarro">${productoAgregado.nombre}</p>
        <img src="${productoAgregado.img}" class="imagenesEnCarrito"/>
        <p class="precioEnCarro">$${productoAgregado.precio}</p>
        <p id=unidades${productoAgregado.id} class="cantidadEnCarro">Unidades: ${productoAgregado.cantidad}</p>
        <button class="btnEliminar" id=botonEliminar${productoAgregado.id}>Quitar</button>
        `
        contenidoCarrito.appendChild(div);

        let btnEliminar= document.getElementById(`botonEliminar${productoAgregado.id}`);
        btnEliminar.addEventListener("click", ()=>{
            btnEliminar.parentElement.remove();
            carritoDeCompras=carritoDeCompras.filter(l=> l.id != productoAgregado.id);
            actualizarCarrito();
            localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
        })
    }
    
    localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
};


function actualizarCarrito(){
    contadorCarrito.innerText=carritoDeCompras.reduce((acc,el)=>acc + el.cantidad,0);
    totalCarrito.innerText=`Total compra: $${carritoDeCompras.reduce ((acc,el)=> acc + (el.precio * el.cantidad),0)}`;
}

function recuperar(){
    let recuperarLS=JSON.parse(localStorage.getItem("carrito"));
    if(recuperarLS){
        recuperarLS.forEach(element=>{
            agregarAlCarrito(element.id);
        });
    }
}
recuperar();



function crearFiltros(array, contenedorEnHtml){
    array.forEach(p=>{
        let divFiltros= document.createElement ("div");
        divFiltros.className= "contenedorFiltros";                   //recorre el array de marcasvalidas o productosvalidos(segun el filtro) y crea botones para filtrar(label e input)
        divFiltros.innerHTML +=`<label class="descripFiltro">${p}</label>                
        <input type="radio" class="inputsFiltros" name="filters" id=${p} </input>`;
        contenedorEnHtml.appendChild(divFiltros);
    })
};



for (const filter of allsFiltros){
    filter.addEventListener("click",()=>{
        mostrarProductos(productos.filter(p=>{
            if(filter.id.includes(p.tipo)){
                return p.tipo == filter.id
            }
            if(filter.id.includes(p.marca)){
                return p.marca == filter.id
                
            }
        }))
    })
}
