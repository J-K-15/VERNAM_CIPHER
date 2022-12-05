var PLAIN_TEXT_LEN = 8;
var current_encryption = "";


function XOR(a, b) {
    if((a == "0" && b == "0"))
        return "0";
    else if((a == "0" && b == "1"))
        return "1";
    else if((a == "1" && b == "0"))
        return "1";
    else if((a == "1" && b == "1"))
        return "0";
    return "0";
}



function Vernam_Encrypt() {
    plaintext = document.getElementById("p").value;
    key = document.getElementById("key").value;
    if(plaintext.length < 1){ alert("please enter some plaintext (binary only)"); return; }
    if(key.length < plaintext.length){ alert("key must be atleast the length of plaintext"); return; }
    ciphertext = "";
    for(i=0; i<plaintext.length; i++){
        ciphertext += XOR(plaintext.charAt(i), key.charAt(i));
    }
    document.getElementById("c").value = ciphertext;
}

function Vernam_Decrypt(f){
    ciphertext = document.getElementById("c").value;
    key = document.getElementById("key").value;
    if(ciphertext.length < 1){ alert("please enter some ciphertext (binary only)"); return; }
    if(key.length < ciphertext.length){ alert("key must be atleast the length of ciphertext"); return; }
    plaintext = "";
    for(i=0; i<ciphertext.length; i++){
        plaintext += XOR(ciphertext.charAt(i), key.charAt(i));
    }
    document.getElementById("p").value = plaintext;
}
 
function Vernam_RandSequence(len){ 
    var keylen = len; 
    ret=""; 
    for(i=0; i<keylen; i++) {
        ret += (Math.ceil(Math.random()*1000000))%2; 
    } 
    return ret;
}


function Vernam_RandKey(){
    plaintext = document.getElementById("p").value;
    ciphertext = document.getElementById("c").value;
    var keylen;
    if (plaintext.length > ciphertext.length) {
	keylen = plaintext.length;
    }
    else {
	keylen = ciphertext.length;
    }
    document.getElementById("key").value = Vernam_RandSequence(keylen); 
}

