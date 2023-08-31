document.querySelector("[name='button']").onclick=function(){
    let pass=document.querySelector("#password")
    let comf=document.querySelector("#confirmation")
    if(pass.value !== comf.value){
        pass.style.border="2px solid red"
        comf.style.border="2px solid red"
    }
    else{
        pass.style.border="2px solid black"
        comf.style.border="2px solid black"
    }
}
