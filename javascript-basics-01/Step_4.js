var name,surname,city;
document.querySelector("#validate").addEventListener("click",function(){
    name=document.querySelector("#name").value
    surname=document.querySelector("#surname").value
    city=document.querySelector("#city").value
    alert("name: "+name+"\nsurname: "+surname+"\ncity: "+city)
}
)
