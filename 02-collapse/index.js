/* Я комментарий, который ждал тебя здесь. Удали меня и напиши хороший код! */

var tagg = document.getElementsByClassName('collapsible__button')


for (i = 0; i < tagg.length; i++) {
    tagg[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if(content.style.display == "none"){
            content.style.display = "block"
        }else{
            content.style.display = "none"
        }

    })
}