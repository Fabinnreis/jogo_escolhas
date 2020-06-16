function iniciarFase4(){
    var fase4 = prompt("No caminho, Yone e Kenshiro encontraram diversos inimigos e armadilhas, mas conseguiram chegar ao templo Amaterasu. Chegando ali, batalharam equilibradamente com Shaka. Porém, quando Yone estava prestes a derrotar seu inimigo, este jogou uma bomba de fumaça sumindo com a sua família através de um portal que se fechou logo em seguida.\nYone, ao ver que o portal fora fechado, fica desesperado, então seu sensei Kenshiro o informa que aquele portal é um portal do tempo e que conhece um feitiço capaz de abri-lo novamente.\n\n1 – porcurar outras formas de encontrar shaka\n2 – entrar no portal\n");
    if(fase4 == 1){
        alert("O portal fechou e não foi possivel encontrar Shaka");
            alert("Fim de jogo");
            introducao();
        } else if(fase4 == 2){
            iniciarFase5();
        }else{
            alert("Entrada inválida! Tente novamente");
            iniciarFase4();
        }
    }