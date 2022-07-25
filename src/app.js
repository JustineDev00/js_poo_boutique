export class App{
start = () =>{
    window.onpopstate = (evt) => {
        console.log(evt);
    }
} 
}