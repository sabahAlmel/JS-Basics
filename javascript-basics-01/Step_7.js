let shoes,year;
document.querySelector("#validate").onclick=function(){
    shoes=document.querySelector("#shoe_size").value
    year=document.querySelector("#year").value
    calculate(shoes,year)
}
function calculate(shoes,year){
    shoes*=2
    shoes+=5
    shoes*=50
    shoes-=year
    shoes+=1766
    alert("result is: "+shoes)
}