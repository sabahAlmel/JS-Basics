let img=document.querySelectorAll("img")
for(let i=0;i<img.length;i++){
    img[i].onmouseover=function(){
        this.src="images/image"+(i+1)+"_2.jpg"
    }
}
