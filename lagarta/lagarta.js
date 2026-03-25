async function lagarta(){
    let lagarta = "( )( )( )( )(●'◡'●)";
    let espaco = "  ";
    let contraido = "(((())))(●'◡'●)";
    
    function sleep(ms){
        return new Promise( resolve => setTimeout (resolve,ms));
    }
    
    for(let i = 0; i < 20; i++){
        lagarta = espaco + lagarta;
        console.log(lagarta);
        await sleep (500);
        console.clear();
        contraido = espaco + contraido;
        console.log(contraido);
        await sleep (500);
        console.clear();

    }
}
 /* lagarta = espaco + lagarta;
 contraido = espaco + contraido;
 console.log(1 % 2 == 0? lagarta: contraido)
 await sleep (1000);
 console.clear(); */