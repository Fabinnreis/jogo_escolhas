function fase1(){
    var fase1 = prompt("Yone treinava com seu Kenshiro Sensei na vila Yoshinogari, quando recebe a visita inesperada de seu irmão Kentaro, muito nervoso, com a notícia de que sua família acabara de ser sequestrada. \n\n 1- Resgatar a família \n 2- Não fazer nada \n");
        if(fase1 == 1){
            iniciarFase2();
        } else if(fase1 == 2){
            alert("Só Deus sabe o que aconteceu com a família de Yone");
            alert("Fim de jogo");
            introducao();
        }else{
            alert("Entrada inválida! Tente novamente");
            iniciarJogo();
        }
}