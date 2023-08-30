let div=document.createElement("div")
let name=document.querySelector("#name")
name.oninput=function(){
    div.textContent=name.value
    document.body.append(div)
}