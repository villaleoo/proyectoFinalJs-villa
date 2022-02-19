for (const filter of allsFiltros){   
    let {tipo, marca, genero}= productos             
    filter.addEventListener("click",()=>{  
        filter.id.includes(tipo) && mostrarProductos(tipo)
    })
}








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




