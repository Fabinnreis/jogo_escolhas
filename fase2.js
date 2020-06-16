function iniciarFase2(){
    var fase2 = prompt("Ao saber do ocorrido, Yone se junta com Kenshiro e Kentaro na saga para salvar a sua família. O primeiro destino é sua casa, onde aconteceu o sequestro. \n\n 1- Ir até a casa atrás de pistas\n 2- Buscar ajuda\n");
    if(fase2 == 1){
            iniciarFase3();
        } else if(fase2 == 2){
            alert("Você não encontrou ajuda e a família de Yoni não pode mais ser encontrada!");
            alert("Fim de jogo");
            introducao();
        }else{
            alert("Entrada inválida! Tente novamente");
            iniciarFase2();
        }
}