function mapa(){
    const frutas = new Map();

    frutas.set("Maçã", 500);
    frutas.set("Banana", 300);
    frutas.set("Laranja", 200);
    //frutas.set("Pera", 200);
    frutas.set("Pera", 400)
    
    let preco = frutas.get("Pera"); 
    console.log(preco);

    console.log(frutas.size)

    console.log(frutas.has("Banana"))
    frutas.forEach ((valor, chave) => console.log(`${chave} = R$${valor},00`))

    for (const x of frutas.keys()){
        console.log(x)
    }    

     for (const x of frutas.values()){
        console.log(x)
    }    
    
}
mapa();