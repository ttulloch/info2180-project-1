/* Add your JavaScript to this file */

window.onload = function(){
    var message = document.getElementsByClassName("message")[0];
    var btn = document.querySelector("button");
    var email=document.getElementById("email");
    btn.addEventListener("click", function(i){
        i.preventDefault();
        var email = document.getElementById("email").value;
        if (document.getElementById("email").value === ""){
            textMsg.innerHTML = "Please enter a valid email address";
            
        } else {
            textMsg.innerHTML = "Successful.Thank you, your email address:" + email + "has been added to our mailing list!";
            
        }


    });




}
