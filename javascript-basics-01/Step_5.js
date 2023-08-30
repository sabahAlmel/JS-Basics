let first,second
document.querySelector("#validate").onclick=function(){
    first=document.querySelector("#first_number").value
    second=document.querySelector("#second_number").value
    let result=first*second;
    alert("The result is: "+result);
}