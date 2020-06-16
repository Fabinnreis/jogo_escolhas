function iniciarFase6(){
    var fase6 = prompt("O samurai corre atrás de Shaka que, ao perceber a aproximação de Yone, enfeitiça as estátuas, dando-as vida.\n\n1 – perseguir shaka\n2 – enfrentar dragões\n");
    if(fase6 == 1){
        alert("Yone foi cercado e morto pelos dragões!");
        alert("Fim de jogo");
        introducao();
        } else if(fase6 == 2){
            iniciarFase7();
        }else{
            alert("Entrada inválida! Tente novamente");
            iniciarFase6();
        }
    }