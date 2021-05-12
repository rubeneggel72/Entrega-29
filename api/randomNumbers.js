import { fork } from 'child_process';

const ls = fork("./child/randomNumber.js");

class RandomNumbers {
    constructor() {}

    async listar(cant) {
        let numb = await(
        
        ls.on('exit', (code)=>{
        
        
            console.log(`child_process exited with code ${code}`);
        
        )
        
        ls.on('message', (cant)=>{
        
             console.log(`PARENT: message from child process is ${cant}`);
        
             count = parseInt(msg) + 1;
             console.log("PARENT: +1 from parent");
        
             ls.send(cant);
        
        }) 
        
        return numerosAleatorios || {error : 'no pudo obtener los numeros aleatorios'}
         }

}
        
export default RandomNumbers