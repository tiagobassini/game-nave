

function start() {

    $("#inicio").hide();

    $("#fundoGame").append("<div id ='jogador' class='anima1' ></div>");
    $("#fundoGame").append("<div id ='inimigo1' class='anima2' ></div>");
    $("#fundoGame").append("<div id ='inimigo2' ></div>");
    $("#fundoGame").append("<div id ='amigo' class='anima3'></div>");



    //Principais variaveis do jogo
    var jogo = {}

    var TECLA = {
        W: 87,
        S: 83,
        D: 68
    }

    jogo.pressionou = [];

    //Verifica se o usuário pressionou alguma tecla	
    $(document).keydown(function (e) {
        jogo.pressionou[e.which] = true;
    });


    $(document).keyup(function (e) {
        jogo.pressionou[e.which] = false;
    });

    //Iniciando o game Loop
    jogo.timer = setInterval(loop, 30);



    //Função de loop do jogo
    function loop() {

        movefundo();
        movejogador();

    }

    //Função que movimenta o fundo do jogo
    function movefundo() {

        esquerda = parseInt($("#fundoGame").css("background-position"));
        $("#fundoGame").css("background-position", esquerda - 2);

    }


    //Função para movimentar o Jogador 
    function movejogador() {

        if (jogo.pressionou[TECLA.W]) {
            var topo = parseInt($("#jogador").css("top"));
            $("#jogador").css("top", topo - 10);

        }

        if (jogo.pressionou[TECLA.S]) {

            var topo = parseInt($("#jogador").css("top"));
            $("#jogador").css("top", topo + 10);
        }

        if (jogo.pressionou[TECLA.D]) {

            //Chama função Disparo	
        }

    }

}


