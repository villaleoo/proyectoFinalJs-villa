
/*const artDeCompra=0

artDeComra=prompt("ingrese el id")
const cursos = [
    {nombre: 'Javascript', precio: 15000, id: 10},
    {nombre: 'ReactJS', precio: 22000, id: 11},
]

const resultado = cursos.find((el) => el.id === artDeCompra)
const resultado2 = cursos.find((el) => el.nombre === "DW")

console.log(resultado.nombre)
*/
let prueba=0;
const cursos = [
    {nombre: 'Javascript', precio: 15000,id:20},
    {nombre: 'ReactJS', precio: 22000, id:21},
    {nombre: 'AngularJS', precio: 22000,id:22},
    {nombre: 'Desarrollo Web', precio: 16000,id:23},
]

const resultado = cursos.filter((el) => el.nombre.includes('JS'))
const resultado2 = cursos.filter((el) => el.precio < 14000)



const lorin = cursos.some((el) => el.nombre != "VueJS");
//console.log (lorin)

prueba=prompt("ingresa 20")

let sarasa= aber()

console.log(sarasa)
function aber (){
    cursos.find((el) => el.id === prueba)
    return el.id
}



function chango(carritoCompra){
    carritoCompra.forEach((s) =>{
        alert(`Producto: ${s.tipo}. Nombre: ${s.nombre} -> $${s.precio} (en su Carrito)`)});
total= carritoCompra.reduce((acc,el)=> acc + el.precio, 0);            /*esto acumula (en la variable total) el precio de los productos añadidos a carritoCompra */
alert(`El total de su compra es de $${total}`);                         /*muestra por alert la variable total */
}



//////joseDATEE


const productosFiltrados = [
    {
      id,
      marca
    }
  ]
  
  let productosFiltradosId = [];
  
  
  
  productosFiltradosIds = productosFiltrados.map(p => p.id);
  
  do {
  
  } while( productosFiltradosIds.include(idIngresado) );


  productosFiltradosIds.include(artDeCompra)


/////proximas funciones
let continuarQuitando="";


alert("A continuacion verá la lista de su compra.Con el valor ID de cada producto podrá QUITAR dicho articulo de su compra.");
function quitandoCarritoCompras(){
  reducirCarritoDeCompras=prompt(`Si desea retirar un articulo, igrese el ID del producto a quitar.Para continuar, solo desista de este mensaje.`);
  productosDelCarritoIds= carritoDeCompras.map (c => c.id);
  if(productosDelCarritoIds.indexOf(reducirCarritoDeCompras)>=0){
      productosDelCarritoIds.splice(productosDelCarritoIds.indexOf(reducirCarritoDeCompras),1);
      const productoQuitado= carritoDeCompras.find((f)=>f.id == reducirCarritoDeCompras);
      alert(`${productoQuitado.nombre} removido con éxito.`);
      do{
      continuarQuitando=prompt("Desea quitar algo mas? si/no");
      }while((continuarQuitando!="si")||(continuarQuitando!="no"))
      
  }
}






let checksBoxs = document.querySelectorAll(".aplicarFiltro");
let bontonesFiltro = document.getElementById ("botonFilterTipo");



bontonesFiltro.addEventListener("click", function(){
    checksBoxs.forEach(()=>{
        if(document.getElementById("zapatillas").checked){
            mostrarProductos(productos.filter(el=> el.tipo=="zapatilla"));
        }
        else if(document.getElementById("remeras").checked){
            mostrarProductos(productos.filter(el=> el.tipo=="remera"));
        }
        else if (document.getElementById("pantalones").checked){
            mostrarProductos(productos.filter(el=>el.tipo=="pantalon"));
        }
        else if (document.getElementById("buzos").checked){
            mostrarProductos(productos.filter(el=>el.tipo== "buzo"));
        }
        else if (document.getElementById("camperas").checked){
            mostrarProductos(productos.filter(el=>el.tipo=="campera"));
        }
        else if (document.getElementById("mallas").checked){
            mostrarProductos(productos.filter(el=>el.tipo=="malla"));
        }
        else if(document.getElementById("gorras").checked){
            mostrarProductos(productos.filter(el=>el.tipo=="gorra"));
        }
        else{
            mostrarProductos(productos)
        }
    })
  })




  for (const filter of filtrosTipo){
    filter.addEventListener("click",()=>{                                               //recorre todos los inputs asignados a los filtros POR TIPO DE PRODUCTO. si
        let categoria = productos.filter(item=>item.tipo == filter.id)                  // "clikearon" en un input,analiza que el id del boton (el nombre de id
        mostrarProductos(categoria)                                                     // de los inputs los toma de los tipo de productos que hay), 
    })                                                                                  //coincida con el tipo de producto filtrado(.filter). Si coincide, muestra 
};                                                                                      // el tipo de producto por el cual coincidieron.



if(filtrosArray=productos.filter(item=>item.marca == filter.id)){
    console.log("panchitooo")
    mostrarProductos(filtrosArray);
}
if (filtrosArray=productos.filter(item=>item.genero == filter.id)){
    mostrarProductos(filtrosArray);
}
if(filtrosArray=productos.filter(item=>item.talles == filter.id)){
    mostrarProductos(filtrosArray);
