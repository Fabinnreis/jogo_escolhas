function introducao(){
    var intro = prompt("Yone vs dragões - na saga do tempo é uma narrativa de ficção e de feitos heroicos que se inicia na província Fukuoka, no Japão feudal, e o seu desenrolar acontece entre a vila Yoshinogari, nos tempos feudais, e no bairro da Liberdade, em 2100. A família do Samurai é sequestrada pelo seu ex-parceiro de dojo e ele precisa descobrir um jeito de salvá-la. Viagem no tempo, bruxaria? Como nosso herói fará para salvar sua família no futuro? \n\n" + "Digite 1 para Iniciar Jogo \n" + "Digite 2 para sair do jogo \n");

    if (intro == 1){
        iniciarJogo();
    }else if (intro == 2){
        alert("Que pena! Volte se quiser!");
        introducao();
    }else{
        alert("Entrada inválida! Tente novamente");
        introducao();
    }
}
function iniciarJogo(){
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

function iniciarFase3(){
    var fase3 = prompt("Ali, eles iniciam as buscas por pistas de quem seria o responsável pelo sumiço de sua família. Depois de uma varredura pela residência, eles descobrem que o seu ex-parceiro de dojo, Shaka, está por traz do sequestro. O motivo: Shaka acha que Yone roubou seu lugar de futuro sensei no dojo e decidiu se vingar.\n Shaka havia deixado um recado que, caso Yone quisesse encontrar sua família, este deveria ir até o Templo Amaterasu, localizado na floresta Kunenan, para libertar a sua família.\n\n1 – Ir para o templo amaterasu\n2 – treinar antes de ir pro templo\n");
    if(fase3 == 1){
            iniciarFase4();
        } else if(fase3 == 2){
            alert("Você não encontrou shaka e a família de Yoni não pode mais ser encontrada!");
            alert("Fim de jogo");
            introducao();
        }else{
            alert("Entrada inválida! Tente novamente");
            iniciarFase3();
        }
    }

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

    function fimDeJogo(){
        alert("Ocorre o duelo final entre Yone e Shaka. O Samurai vence, liberta sua família, volta para sua vila natal e é honrado com elevação de grau no seu dojo. Virando assim um herói Samurai.");
        alert("Parabéns você zerou o jogo!");
        introducao();
    }


introducao();
