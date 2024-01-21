// function validate() {
//     var username=document.getElementById("username").value;
//     var password=document.getElementById("password").value;
//     if(username== ''||password== ''){
//         alert("usrname or password is empty");
//     }
//     else{
//         alert("valid data");
//     }
// }
function ValidateEmail() {
    var inputText = document.getElementById("email").value;
    var mailformat= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.match(mailformat)){
        alert("valid email address!");
        return true;
    }
    else{
        alert("you have entered an invalid email address !");
        return false;
    }
    
}
