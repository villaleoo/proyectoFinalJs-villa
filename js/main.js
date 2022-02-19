function obtenerProducto(id, tipo, marca, nombre, genero, talles, precio,img,cantidad) {
    return {
        id,
        tipo,
        marca,
        nombre,
        genero,
        talles,
        precio,
        img,
        cantidad,
    }
};

const producto0= obtenerProducto(1,"zapatilla","adidas","Racer TR21","unisex","41,42,43",13400,`../img/productos/racert21adidas.jpg`,1);
const producto1= obtenerProducto(2,"zapatilla","adidas","Marimekko NMD_R1","unisex", "41,42,43", 24000,`../img/productos/nmdadidasjpg.jpg`,1);
const producto2= obtenerProducto(3,"zapatilla","nike","Air Max EXCEE","unisex","41,42,43",18500,`../img/productos/airmaxexceenikejpg.jpg`,1);
const producto3= obtenerProducto(4,"zapatilla","nike","Revolution 5","unisex","41,42,43",10900,`../img/productos/revolution5nike.jpg`,1);
const producto4= obtenerProducto(5,"zapatilla","vans","Old Skool","unisex","41,42,43",14000,`../img/productos/oldskolvans.jpg`,1);
const producto5= obtenerProducto(6,"zapatilla","vans","Checkerboard Classic","unisex","41,42,43",8500,`../img/productos/checkvans.jpg`,1);
const producto6= obtenerProducto(7,"zapatilla","puma","X-Ray 2 Square","unisex","41,42,43",12500,`../img/productos/xraypuma.jpg`,1);
const producto7= obtenerProducto(8,"zapatilla","puma","Graviton Pro","unisex","41,42,43",10600,`../img/productos/gravitonpuma.jpg`,1);
const producto8= obtenerProducto(9,"pantalon","adidas","Essentials Logo","hombre","M,L,XL",8500,`../img/productos/essentialslogo.jpg`,1);
const producto9= obtenerProducto(10,"pantalon","adidas","Entrenamiento Boca Jrs","unisex","M,L,XL",10000,`../img/productos/bocapantalon.jpg`,1);
const producto10= obtenerProducto(11,"pantalon","nike","Entrenamiento San Lorenzo","unisex","M,L,XL",11000,`../img/productos/caslapantalon.jpg`,1);
const producto11= obtenerProducto(12,"pantalon","nike","Moda Nsw Club","unisex","M,L,XL",9500,`../img/productos/nswpantalon.jpg`,1);
const producto12= obtenerProducto(13,"pantalon","vans","Chino Slim Jogger","hombre","M,L,XL",10600,`../img/productos/chinoslimvans.jpg`,1);
const producto13= obtenerProducto(14,"pantalon","vans","Relaxed Cargo","hombre","M,L,XL",13200,`../img/productos/relaxedvans.jpg`,1);
const producto14= obtenerProducto(15,"pantalon","puma","Classic Cargo","hombre","M,L,XL",8900,`../img/productos/cargopuma.jpg`,1);
const producto15= obtenerProducto(16,"pantalon","puma","Mercedes f1 Slim","mujer","M,L,XL",11400,`../img/productos/mercedespuma.jpg`,1);
const producto16= obtenerProducto(17,"remera","adidas","Adicolor 3 tiras","unisex","M,L,XL",7000,`../img/productos/adicoloradidas.jpg`,1);
const producto17= obtenerProducto(18,"remera","adidas","Primeblue","hombre","M,L,XL",6000,`../img/productos/primeblueadidas.jpg`,1);
const producto18= obtenerProducto(19,"remera","nike","Retro mod 3","mujer","M,L,XL",6200,`../img/productos/mood3nike.jpg`,1);
const producto19= obtenerProducto(20,"remera","nike","Basic Tee","unisex","M,L,XL",3700,`../img/productos/basicteenike.jpg`,1);
const producto20= obtenerProducto(21,"remera","vans","Classic logo","unisex","M,L,XL",4300,`../img/productos/classiclogovans.jpg`,1);
const producto21= obtenerProducto(22,"remera","vans","Full patch","unisex","M,L,XL",3900,`../img/productos/fullpatchvans4.jpg`,1);
const producto22= obtenerProducto(23,"remera","puma","Favorite SS","unisex","M,L,XL",5000,`../img/productos/favoritepuma.jpg`,1);
const producto23= obtenerProducto(24,"buzo","adidas","Capucha Camo","unisex","M,L,XL",14000,`../img/productos/capuchacamoadidas.jpg`,1);
const producto24= obtenerProducto(25,"buzo","adidas","Estampado leopardo","mujer","M,L,XL",9000,`../img/productos/leopardoadidas.jpg`,1);
const producto25= obtenerProducto(26,"buzo","nike","Sportwear club","unisex","M,L,XL",12000,`../img/productos/sportwearnike.jpg`,1);
const producto26= obtenerProducto(27,"buzo","nike","Sportwear JDI","unisex","M,L,XL",10500,`../img/productos/buzonike2.jpg`,1);
const producto27= obtenerProducto(28,"buzo","vans","Standard hoodie","unisex","M,L,XL",13000,`../img/productos/buzovans1.jpg`,1);
const producto28= obtenerProducto(29,"buzo","vans","Patched Po 2","unisex","M,L,XL",9000,`../img/productos/buzovans2.jpg`,1);
const producto29= obtenerProducto(30,"buzo","puma","Downtown capucha","unisex","M,L,XL",10000,`../img/productos/buzopuma1.jpg`,1);
const producto30= obtenerProducto(31,"buzo","puma","Classic c/capucha","unisex","M,L,XL",11400,`../img/productos/buzopuma2.jpg`,1);
const producto31= obtenerProducto(32,"campera","adidas","Plumon Helionic","mujer","M,L,XL",29000,`../img/productos/camperaadidas1.jpg`,1);
const producto32= obtenerProducto(33,"campera","adidas","Varilite Soft","hombre","M,L,XL",25000,`../img/productos/camperaadidas2.jpg`,1);
const producto33= obtenerProducto(34,"campera","nike","NSW Fleece","unisex","M,L,XL",13000,`../img/productos/camperanike1.jpg`,1);
const producto34= obtenerProducto(35,"campera","nike","NSW Core Amplify","unisex","M,L,XL",8800,`../img/productos/camperanike2.jpg`,1);
const producto35= obtenerProducto(36,"campera","vans","Abrigo Woodcrest","hombre","M,L,XL",20000,`../img/productos/camperavans1.jpg`,1);
const producto36= obtenerProducto(37,"campera","vans","Classic Zip Hoodie","mujer","M,L,XL",7700,`../img/productos/camperavans2.jpg`,1);
const producto37= obtenerProducto(38,"campera","puma","BMW Motosport","hombre","M,L,XL",23000,`../img/productos/camperapuma1.jpg`,1);
const producto38= obtenerProducto(39,"campera","puma","First MILE","unisex","M,L,XL",17800,`../img/productos/camperapuma2.jpg`,1);
const producto39= obtenerProducto(40,"gorra","adidas","Daily Trainning","unisex","M,L",1700,`../img/productos/gorraadidas1.jpg`,1);
const producto40= obtenerProducto(41,"gorra","adidas","3D Adicolor","unisex","M,L",4000,`../img/productos/gorraadidas2.jpg`,1);
const producto41= obtenerProducto(42,"gorra","nike","Heritage 86","unisex","M,L",2700,`../img/productos/gorranike1.jpg`,1);
const producto42= obtenerProducto(43,"gorra","nike","Nike SB","unisex","M,L",4000,`../img/productos/gorranike2.jpg`,1);
const producto43= obtenerProducto(44,"gorra","vans","Salton II","unisex","M,L",4800,`../img/productos/gorravans1.jpg`,1);
const producto44= obtenerProducto(45,"gorra","vans","Splitz","unisex","M,L",5800,`../img/productos/gorravans2.jpg`,1);
const producto45= obtenerProducto(46,"gorra","puma","Juvenil Peanuts","unisex","M,L",2700,`../img/productos/gorrapuma1.jpg`,1);
const producto46= obtenerProducto(47,"gorra","puma","Neymar JR","unisex","M,L",3500,`../img/productos/gorrapuma2.jpg`,1);
const producto47= obtenerProducto(48,"malla","adidas","Nature CLX","hombre","M,L",8000,`../img/productos/mallaadidas.jpg`,1);
const producto48= obtenerProducto(49,"malla","nike","Challenge Wild","hombre","M,L",8200,`../img/productos/mallanike.jpg`,1);
const producto49= obtenerProducto(50,"malla","vans","Ampster boadshort","hombre","M,L",7500,`../img/productos/mallavans.jpg`,1);
const producto50= obtenerProducto(51,"malla","puma","Short de baño PUMA","hombre","M,L",4800,`../img/productos/mallapuma.jpg`,1);

const productos=[
    producto0,
    producto1 ,
    producto2 ,
    producto3 ,
    producto4 ,
    producto5 ,
    producto6 ,
    producto7 ,
    producto8 ,
    producto9 ,
    producto10 ,
    producto11 ,
    producto12 ,
    producto13 ,
    producto14 ,
    producto15 ,
    producto16 ,
    producto17 ,
    producto18 ,
    producto19 ,
    producto20 ,
    producto21,
    producto22 ,
    producto23 ,
    producto24 ,
    producto25 ,
    producto26 ,
    producto27 ,
    producto28 ,
    producto29 ,
    producto30 ,
    producto31 ,
    producto32 ,
    producto33 ,
    producto34 ,
    producto35 ,
    producto36 ,
    producto37 ,
    producto38 ,
    producto39 ,
    producto40 ,
    producto41 ,
    producto42 ,
    producto43 ,
    producto44 ,
    producto45 ,
    producto46 ,
    producto47 ,
    producto48 ,
    producto49 ,
    producto50 ,
];

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
        
        let btnAgregar =document.getElementById(`${producto.id}`) 
        
        btnAgregar.addEventListener("click",()=>{                   //este evento llama a la funcion "agregar al carrito", cuando se clikea en un boton creado 
            agregarAlCarrito(producto.id)                           //anteriormente. Notese que se identifica por ID el boton clikeado. El ID diferencia c/u de los botones llamados "agregar al carrito"
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
        let productoAgregado = productos.find(articulo=>articulo.id== id); //busca en el array de productos el producto que coincida con el ID del boton clikeado para "añadir al carrito"
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
    })
}



function actualizarCarrito(){      //esta funcion actualiza el contador del carrito y el total de la compra
    contadorCarrito.innerText=carritoDeCompras.reduce((acc,el)=>acc + el.cantidad,0); //esto actualiza el contador del carrito
    totalCarrito.innerText=`Total compra: $${carritoDeCompras.reduce ((acc,el)=> acc + (el.precio * el.cantidad),0)}`; //esto actualiza el precio, iterando sobre el array del carrito y por cada elemento encontrado multiplicar su precio por la cantidad
}

function recuperar(){ //esta funcion permite guardar en storage los movimientos/eventos que se van realizando en el sitio
    let recuperarLS=JSON.parse(localStorage.getItem("carrito")); //esto crea el espacio llamado "carrito" en el storage
    recuperarLS &&
    recuperarLS.forEach(element=>{
        mostrarCarrito(element)
        carritoDeCompras.push(element)
        actualizarCarrito()
    })
}
recuperar(); 



function crearFiltros(array, contenedorEnHtml){
    array.forEach(p=>{
        let divFiltros= document.createElement ("div");
        divFiltros.className= "contenedorFiltros";         //recorre el array de marcasvalidas o productosvalidos(segun el filtro) y crea botones para filtrar(label e input)
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



//spread linea 186, AND, en funcion recuperar, destructuracion en linea 195