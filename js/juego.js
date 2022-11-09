let cara = 0;
let sello = 0;
let jugador=prompt("Ingrese el nombre del jugador");
let cont=0;
let total=0;
let totalapuesta=0
let moneda = document.querySelector(".moneda");
let girarBtn = document.querySelector("#flip-button");
let reinicioBtn = document.querySelector("#reinicio-button");
let apuestaInput = document.querySelector("#apuesta");
let opcionInput = document.querySelector("#opciones");


girarBtn.addEventListener("click", () => {
    
    if(apuestaInput.value !='' && opcionInput.value!=''){

        let i = Math.floor(Math.random() * 2);
        cont++;

    moneda.style.animation = "none";
    
    let opcUsuario=parseInt(opcionInput.value)
   
    let apuestaUsu=parseInt(apuestaInput.value)
   
    totalapuesta+=apuestaUsu;
    
    if(i){
        
        moneda.style.animation = "spin-cara 2s forwards";
        setTimeout(function(){
           
            if(i===opcUsuario){
                total+=apuestaUsu*2;
                alert(` felicidade ${jugador} ganaste la moneda cayo en cara. ganaste ${apuestaUsu*2}. tu total es de: ${total}`);
                
                
            } else{
                total-=apuestaUsu;
                alert(` que mal has perdido ${jugador} la moneda cayo en cara. perdiste ${apuestaUsu} tu total es de: ${total}`);
              
            }
        }, 2000);
        cara++;

    }
    else{
        moneda.style.animation = "spin-sello 2s forwards";
        setTimeout(function(){
            if(i===opcUsuario){
                total+=apuestaUsu*2;
                alert(`felicidade ${jugador} ganaste la moneda cayo en sello. ganaste ${apuestaUsu*2}. tu total tienes: ${total}`);
               
            } else{
                total-=apuestaUsu;
                alert(`  que mal has perdido ${jugador} la moneda cayo en sello. perdiste ${apuestaUsu} tu total tienes: ${total}`);
                
            }
        }, 2000);
        sello++;
    }
    setTimeout(updateStats, 2000);
    disableButton();
    }else{
        alert(' porfavor digite un valor apostar')
    }
    
});
function updateStats(){
 document.querySelector("#cant-count").textContent = `jugadas: ${cont}`;
document.querySelector("#dinero-count").textContent = `dinero: ${total}`;
document.querySelector("#cant-sello").textContent = `sello: ${cara}`;
document.querySelector("#cant-cara").textContent = `cara: ${sello}`;

}

function disableButton(){
   girarBtn.disabled = true;
    setTimeout(function(){
       girarBtn.disabled = false;
    },3000);
}
reinicioBtn.addEventListener("click",() => {
    alert(` ${jugador} estas son la cantidad de partidas: ${cont} y dinero final: ${total}`)
    .then((result) => {
        
            window.location.href = "./index.html";
            
        
      })
      
    
})
// let respuesta=true;
// let apostar = parseInt(document.getElementById('apostar'));
// let eleccion = document.getElementById('eleccion').value;
// const rta = document.getElementById('respuesta').value;
// const btn=document.getElementById("button");
// let saldo=0;
// // en eleccion 1 es cara y 2 sello
// let aleatorio = parseInt((Math.random() * 2) + 1);
   
//     // si cae 0 gana si cae 1 pierde
//     button.addEventListener('click', (e)=>{
       

// while(respuesta==true){
//     if(aleatorio==1 && eleccion==1){ 
//         alert("La maquina cayo cara y tu elejiste cara");
//         rta.innerHTML = 
//         `
//         <h2>USTED A GANADO :)</h2>
//         `
//         saldo = saldo + apostar;
//         alert(`Y el saldo es de: ${saldo}`);

//     }else if(aleatorio==1 && eleccion==2){
//         alert("La maquina cayo cara y tu elejiste sello");
//        rta.innerHTML = 
//         `
//         <h2>USTED A PERDIDO JIJIJA :(</h2>
//         `
//          saldo = saldo - apostar;
//    alert(`Y el saldo es de: ${saldo}`);

//     }else if(aleatorio==2 && eleccion==1){
//         alert("La maquina cayo sello y tu elejiste cara");
//         rta.innerHTML = 
//       `
//         <h2>USTED A PERDIDO JIJIJA :(</h2>
//         `
//             saldo = saldo - apostar;
//         alert(`Y el saldo es de: ${saldo}`);

//     }else if(aleatorio==2 && eleccion==2){
//         alert("La maquina cayo sello y tu elejiste sello");
//         rta.innerHTML = 
//         `
//         <h2>USTED A GANADO :)</h2>
//         `
//         saldo = saldo + apostar;
//         alert(`Y el saldo es de: ${saldo}`);
//     }
   
// }

// respuesta = confirm("Desea seguir jugando?");
    
      
// });


//esto es sin html osea simplemente se piden los datos desde alertas

// let seguir=true;
//     let saldo=0;
//     let jugador=prompt("Ingrese el nombre del jugador");
//     saldo=parseInt(prompt(`Cuanto deseas recargar para jugar`));
//     while(seguir==true){
//         let eleccion=prompt(`${jugador} Elige 1.cara 2.sello`);
//         let apuesta=parseInt(prompt(`De tu saldo actual ${saldo} ¿cuanto deseas apostar?`));
//         let moneda = Math.floor((Math.random() * 2) + 1);
//       if(moneda==1 && eleccion==1){
//         saldo=saldo+(apuesta*2);
//         window.alert(`El lanzamiento fue cara escogiste cara tú ganas!!!, tu nuevo saldo es ${saldo} `);
//       }
//       else if(moneda==2 && eleccion==2){
//         saldo=saldo+(apuesta*2);
//         window.alert(`El lanzamiento fue sello escogiste sello tú ganas!!!, tu nuevo saldo es ${saldo} `);
//       }

//       else if(moneda==1 && eleccion==2){
//         saldo=saldo-apuesta;
//         window.alert(`El lanzamiento fue cara escogiste sello perdiste jijija!!!, tu nuevo saldo es ${saldo} `);
//       }

//       else if(moneda==2 && eleccion==1){
//         saldo=saldo-apuesta;
//         window.alert(`El lanzamiento fue sello escogiste cara tú pediste jijija!!!, tu nuevo saldo es ${saldo} `);
//       }
    
//       seguir=confirm("Quiere seguir jugando");

//     }
