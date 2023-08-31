let img=document.querySelectorAll("img")
for(let i=0;i<img.length;i++){
    img[i].onmouseenter=function(){
        this.src="images/image"+(i+1)+"_2.jpg";
    }
    img[i].onmouseleave=function(){
        this.src="images/image"+(i+1)+".jpg"
    }
}