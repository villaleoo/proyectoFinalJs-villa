for (const filter of allsFiltros){
    filter.addEventListener("click",()=>{
        productos.filter(p=>{
            if(filter.id.includes(p.tipo)){
                console.log(p)
            }
            if(filter.id == p.marca){
                console.log(p)
            }
            if((filter.id == p.genero)&&(p.genero=="unisex")){
                console.log(p)
            }
        })
    })
} 