// Solution goes here
var checkPass = "";
var checkPassConfirm = $("#pass-confirm").val();
var green = "rgb(195, 238, 130)";
var red = "rgb(247, 183, 183)";
var endCheck = {pasConf:false,pass:false,name:false,email:false};


function validateEmail(email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if( !emailReg.test( email )|| email == ""  ) {

        return false;
    } else {

        return true;
    }
}

function nameLength(name) {
    var maxLength = /^[a-zA-Z]{3,15}?$/;
    if( !maxLength.test( name ) ) {

        return false;
    } else {

        return true;
    }
}
function passwordStatusCheck(password){
    var Check = /^[a-zA-Z0-9]{5,25}?$/;
    if( !Check.test( password )) {

        return false;
    } else {

        return true;
    }

}
///////////////cheat on click//////////////////
$("body").click(function(){

});
//function calling///////////////////
$("#pass-confirm").keyup(passConf);
$("#pass").keyup(pass);
$("#email").keyup(email);
$("#display-name").keyup(displayName);

$("#pass-confirm").focusout(passConf);
$("#pass").focusout(pass);
$("#email").focusout(email);
$("#display-name").focusout(displayName);

$("#reset").click(reset);

////////////////////////////////////////////////////////////
function passConf(){
    //console.log("greg");
    var passwordStatus = $("#pass-confirm").val();

    if (passwordStatusCheck(passwordStatus) ==true){
        checkPassConfirm = passwordStatus;
        $("#pass-confirm").css("background-color",green);
        endCheck.pasConf = true;

    }else{
        $("#pass-confirm").css("background-color",red);
        endCheck.pasConf = false;

    }
    
    
}
function pass(){
    var passwordStatus = $("#pass").val();

    if (passwordStatusCheck(passwordStatus) ==true){
        checkPass = passwordStatus;
        $("#pass").css("background-color",green);
        endCheck.pass = true;
    }else{
        $("#pass").css("background-color",red);
        endCheck.pass = false;

    }
    
}

///////////email/////////////////////

function email(){
    var emailStatus = $("#email").val();

    if (validateEmail(emailStatus) ==true){
        console.log("true for you");

        $("#email").css("background-color",green);
        endCheck.email = true;
    }else{
        $("#email").css("background-color",red);
        endCheck.email = false;
    } 

    
}
function displayName(){
    var emailStatus = $("#display-name").val();

    if (nameLength(emailStatus) == true){
 
        $("#display-name").css("background-color",green);
        endCheck.name = true ;

    }else{
        $("#display-name").css("background-color",red);
        endCheck.name = false ; 
    }

}

$("#send").click(function(){

    if(checkPass == checkPassConfirm&&checkPass !== ""&& endCheck.pasConf == true && endCheck.pass == true && endCheck.email == true && endCheck.name == true   ){
        console.log("greg");
        alert("correct login !?")

    }else{
        console.log(endCheck);

        alert("is ge stom of wadde!?")
    }
});
function reset(){
    $("#display-name").css("background-color","white");
    $("#email").css("background-color","white");
    $("#pass-confirm").css("background-color","white");
    $("#pass").css("background-color","white");

}