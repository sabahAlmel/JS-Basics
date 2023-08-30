let age;
document.querySelector("#validate").onclick=function(){
    age=document.querySelector("#age").value
    if(age > 18){
        alert("you are over 18")
    }
    else{
        alert("you are under 18")
    }
}
