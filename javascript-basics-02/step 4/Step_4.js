document.querySelector("[name='button']").onclick=function(){
    let result=confirm("you want to delete?")
    if(result){
       document.querySelector("#name").value=""
       document.querySelector("#surname").value=""
       document.querySelector("#city").value=""
    }
}

