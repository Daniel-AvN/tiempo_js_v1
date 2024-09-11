let min = document.getElementById('min');
let seg = document.getElementById('seg');

const boton1 = document.getElementById('b1');
const boton2 = document.getElementById('b2');

// boton1.addEventListener('click', ()=>{

//     const timeout = setTimeout(() => {
//         valor.textContent = 20 //depues de 5seg el value es 20
//     }, 1000); //1000 miliseconds= 1 second, es el tiempo

// })

// boton2.addEventListener('click', ()=>{
//     clearTimeout(timeout); //para el timeout
// })

let timeout

boton1.addEventListener('click', ()=>{

    let cs=0
    let minutos=0

     timeout = setInterval(() => { 

        
        if(cs>59){
            cs = 0
            min.textContent = ++minutos 
        }
        if(minutos<9){
          min.textContent =`0${++minutos} `
        }
        if(minutos>=59){
            min.textContent =`${minutos} `
          }
        if(cs<60){
            min.textContent =`00 `
            }
        
        if(cs<9){
        seg.textContent =`0${++cs} `
        }
        else{
            seg.textContent = ++cs 
        }


        
    }, 1000);

    // let cs=0
    // let timeout = setInterval(() => { //realiza una accion cada vez q pase el tiempo
    //     valor.textContent = ++cs // cada seg se actualiza el contador
    // }, 1000); //1000 miliseconds= 1 second, es el tiempo

})

boton2.addEventListener('click', ()=>{
    clearInterval(timeout); //termina el timeout
})

