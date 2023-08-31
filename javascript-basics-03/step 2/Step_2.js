let show=document.querySelector("#show")
let hide=document.querySelector("#hide")
let text = document.querySelector('#texte')
show.onclick=tog;
hide.onclick=tog;

function tog(e){
    if(e.target.id === 'hide'){
        text.style.display="none"
    }else{
        text.style.display="block"
    }
}