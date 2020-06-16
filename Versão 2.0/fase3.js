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
