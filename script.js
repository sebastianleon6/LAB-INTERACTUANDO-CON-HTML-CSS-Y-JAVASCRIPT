document.getElementById("titulo").innerHTML = "Contador"

let contador = 0;

document.getElementById("boton-1-agregar").addEventListener("click", function(event){
    event.preventDefault(); 

    contador = contador + 1;
    
     const li = document.createElement(`li`);
        li.textContent = contador;
        document.getElementById(`lista-numeros`).appendChild(li)
        if (contador >= 10){
            document.getElementById("boton-1-agregar").disabled = true;
        }
            
});
