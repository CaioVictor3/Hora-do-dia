function carregar(){
    var msg = window.document.querySelector('div#msg');
    var img = window.document.querySelector('img#imagem');
    var data = new Date();
    var hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} horas!`

    if(hora >=0 && hora<12){
        //Bom dia
        img.src = 'fotomanha.png'
        document.body.style.background = 'rgb(252, 255, 92)';
    } else if(hora>=12 && hora<18){
        //Boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = 'rgb(255, 184, 92)';
    } else{
        //Boa noite
        img.src = 'fotonoite.png';
        document.body.style.background = 'rgb(85, 65, 36)';
    }

}


