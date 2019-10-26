function changeBold(){
 var text = document.getElementById("message");
 if (text.style.fontWeight != "bold") {
     text.style.fontWeight="bold"
 } 
  else {
      text.style.fontWeight="normal"
    } 
 }

function changeItalic(){
    var text= document.getElementById("message");
if(text.style.fontStyle !="italic"){
    text.style.fontStyle="italic"
}
else{
    text.style.fontStyle="normal"
}
 }
 function changeUnderline(){
     var text =document.getElementById("message");
     if(text.style.textDecoration != "underline"){
         text.style.textDecoration="underline"
     } 
     else{
         text.style.textDecoration="none"
 }  
}


function changeSize(event){
    var text = document.getElementById("message");
    text.style.fontSize=event.value;
}
function changestyle(event){
    var text=document.getElementById("message");
    text.style.fontFamily=event.value;
}