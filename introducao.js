function introducao(){
    
    
    
    //cria uma caixa para exibir os elementos
    var caixa = document.createElement('div');
    //cria uma caixa para exibir os elementos
    var paragrafo = document.createElement('p');
    //cria o texto de introdução 
    var textoIntro = document.createTextNode("Yone vs dragões - na saga do tempo é uma narrativa de ficção e de feitos heroicos que se inicia na província Fukuoka, no Japão feudal, e o seu desenrolar acontece entre a vila Yoshinogari, nos tempos feudais, e no bairro da Liberdade, em 2100. A família do Samurai é sequestrada pelo seu ex-parceiro de dojo e ele precisa descobrir um jeito de salvá-la. Viagem no tempo, bruxaria? Como nosso herói fará para salvar sua família no futuro? \n\n" + "Digite 1 para Iniciar Jogo \n" + "Digite 2 para sair do jogo \n");
    //cria botao de escolha
    var botaoEscolha1 = document.createElement('button');
    //insere texto no botao
    botaoEscolha1.value = "Teste";
    var botaoEscolha2 = document.createElement('button');
     
    //adiciona paragrafo na caixa
    caixa.appendChild(paragrafo);
    //adiciona o texto  no parágrafo
    paragrafo.appendChild(textoIntro);
    //adiciona botao de escolha
    caixa.appendChild(botaoEscolha1);
    caixa.appendChild(botaoEscolha2);

    document.body.appendChild(caixa);
    

    var intro = prompt("Yone vs dragõesaaa - na saga do tempo é uma narrativa de ficção e de feitos heroicos que se inicia na província Fukuoka, no Japão feudal, e o seu desenrolar acontece entre a vila Yoshinogari, nos tempos feudais, e no bairro da Liberdade, em 2100. A família do Samurai é sequestrada pelo seu ex-parceiro de dojo e ele precisa descobrir um jeito de salvá-la. Viagem no tempo, bruxaria? Como nosso herói fará para salvar sua família no futuro? \n\n" + "Digite 1 para Iniciar Jogo \n" + "Digite 2 para sair do jogo \n");

    if (intro == 1){
        fase1();
    }else if (intro == 2){
        alert("Que pena! Volte se quiser!");
        introducao();
    }else{
        alert("Entrada inválida! Tente novamente");
        introducao();
    }

}
introducao();