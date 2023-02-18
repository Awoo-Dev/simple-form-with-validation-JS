'use strict'//This line enables strict mode, which helps catch errors in JavaScript code.
//
//This code adds an event listener to the window object that will run when the window has finished loading. 
//It then sets the display of a box with a class of "dashed" to none. It also adds an event listener to a 
//form with an id of "formulario" that will run when the form is submitted. The code then grabs the value from 
//three input fields with ids of "name", "lastname", and "age". It then checks if each value is valid, and if it
//is, it logs the values and sets the display of the box with a class of "dashed" to block. The code then grabs 
//three elements with ids of "p_nombre", "p_apellido", and "p_edad" and sets their innerHTML values to those from the input fields.





window.addEventListener("load", function(){

console.log("ready")

var form=document.querySelector("#formulario");
var box_dash=document.querySelector(".dashed");

box_dash.style.display="none"
form.addEventListener('submit', function(){
    console.log("catched!");


    var nombre= document.querySelector("#name").value;
    var apellido=document.querySelector("#lastname").value;
    var edad= parseInt(document.querySelector("#age").value) 
   


    if (nombre.trim()==null || nombre.trim().length ==0) {

        alert("el nombre no es valido");
        document.getElementById("name").style.border = "2px solid red";
        return false;
        
    }

    if (apellido.trim()==null || apellido.trim().length ==0) {

        alert("el apellido no es valido");
        document.getElementById("lastname").style.border = "2px solid red";
        return false;
        
    }
    if (edad==null || edad <=0 || isNaN(edad)) {

        alert("el nombre no es valido");
        document.getElementById("age").style.border = "2px solid red";
        return false;
        
    }

    

    console.log(nombre, apellido, edad);
    box_dash.style.display="block"

    var p_nombre=document.querySelector("#p_nombre span");
    var p_apellido=document.querySelector("#p_apellido span");
    var p_edad=document.querySelector("#p_edad span");

    p_nombre.innerHTML=nombre;
    p_apellido.innerHTML=apellido;
    p_edad.innerHTML=edad;

})



});

