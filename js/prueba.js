function actualizarCarrito(){      //esta funcion actualiza el contador del carrito y el total de la compra
    if(carritoDeCompras.length>=1){
        contenidoCarrito.style.display='flexbox'
        totalCarrito.style.display= 'flexbox'
        botonComprar.style.display='inline-block'
    }else{
        botonComprar.style.display='none'
        totalCarrito.style.display= 'none'
    }
    contadorCarrito.innerText=carritoDeCompras.reduce((acc,el)=>acc + el.cantidad,0); //esto actualiza el contador del carrito
    botonComprar.innerText=`Comprar💲`;
    let total= carritoDeCompras.reduce ((acc,el)=> acc + (el.precio * el.cantidad),0);
    totalCarrito.innerText=`Total compra: $${total}`;//esto actualiza el precio, iterando sobre el array del carrito y por cada elemento encontrado multiplicar su precio por la cantidad
};




<div id="carritoContenedor" class="dropdown-menu contenedorCarrito" aria-labelledby="navbarCollapse">
            <div class="totalCarrito"  id="totalCompra"></div>
            <a class="btnComprar" id="finalizar"></a>
          </div>
    
    
    
    