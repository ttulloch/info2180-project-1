/* Add your JavaScript to this file */

window.onload = function(){

    var btn = document.querySelector("button");
    var message = document.getElementsByClassName("message")[0];
    var email=document.getElementById("email");
    btn.addEventListener("click", function(i){
        i.preventDefault();
        var email = document.getElementById("email").value;
        if (document.getElementById("email").value = ""){
            textMsg.innerHTML = "Successful.Thank you for adding your email address" + email + "has been added to our mailing list!";
        } else {
            textMsg.innerHTML = "Please enter a valid email address";
        }


    });




}
