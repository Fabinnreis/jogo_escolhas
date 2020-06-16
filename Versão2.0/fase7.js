function iniciarFase7(){
    var fase7 = prompt("Yone enfrenta os dragões e vence. Entra no templo e encontra Shaka mantendo sua família prisioneira.\n\n1 – lutar com shaka\n2 – resgatar família\n");
    if(fase7 == 1){
        fimDeJogo();
        } else if(fase7 == 2){
            alert("Yone foi morto enquanto tentava resgatar a família!");
            alert("Fim de jogo");
            introducao();
        }else{
            alert("Entrada inválida! Tente novamente");
            iniciarFase7();
        }
    }
