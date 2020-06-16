function iniciarFase5(){
    var fase5 = prompt("Ao passar pelo portal, o samurai e seu mestre desembarcam em uma viela no bairro da Liberdade, em São Paulo, onde estava acontecendo uma festa conhecida como Festa das Flores.\nSaindo da viela, Yone consegue avistar seu inimigo Shaka entrando em um templo com duas estatuas de dragão na entrada.\n\n1 – entrar no templo\n2 – esperar o shaka sair do templo\n");
    if(fase5 == 1){
        iniciarFase6();
        } else if(fase5 == 2){
            alert("Shaka cansou de esperar e matou a família de yone!");
            alert("Fim de jogo");
            introducao();
        }else{
            alert("Entrada inválida! Tente novamente");
            iniciarFase5();
        }
    }
