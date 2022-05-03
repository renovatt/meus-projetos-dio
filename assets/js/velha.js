
var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');

mudarJogador('X');

function escolherQuadrado(id){
    if(vencedor !== null){
        return;
    }

    var box = document.getElementById(id);
    if(box.innerHTML !== '-'){
        return;
    }

    box.innerHTML = jogador;
    box.style.color = '#000';

    if(jogador === 'X'){
        jogador = 'O';
    } else {
        jogador = 'X';
    }
    mudarJogador(jogador);
    checaVencedor();
}

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor(){
    var box1 = document.getElementById(1);
    var box2 = document.getElementById(2);
    var box3 = document.getElementById(3);
    var box4 = document.getElementById(4);
    var box5 = document.getElementById(5);
    var box6 = document.getElementById(6);
    var box7 = document.getElementById(7);
    var box8 = document.getElementById(8);
    var box9 = document.getElementById(9);

    if(checaSequencia(box1, box2, box3)){
        mudaCorQuadrado(box1, box2, box3);
        mudarVencedor(box1);
        return;
    }

    if(checaSequencia(box4, box5, box6)){
        mudaCorQuadrado(box4, box5, box6);
        mudarVencedor(box4);
        return;
    }

    if(checaSequencia(box7, box8, box9)){
        mudaCorQuadrado(box7, box8, box9);
        mudarVencedor(box7);
        return;
    }

    if(checaSequencia(box1, box4, box7)){
        mudaCorQuadrado(box1, box4, box7);
        mudarVencedor(box1);
        return;
    }

    if(checaSequencia(box2, box5, box8)){
        mudaCorQuadrado(box2, box5, box8);
        mudarVencedor(box2);
        return;
    }

    if(checaSequencia(box3, box6, box9)){
        mudaCorQuadrado(box3, box6, box9);
        mudarVencedor(box3);
        return;
    }

    if(checaSequencia(box1, box5, box9)){
        mudaCorQuadrado(box1, box5, box9);
        mudarVencedor(box1);
        return;
    }

    if(checaSequencia(box3, box5, box7)){
        mudaCorQuadrado(box3, box5, box7);
        mudarVencedor(box3);
    }
}

function mudarVencedor(box){
    vencedor = box.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudaCorQuadrado(box1, box2, box3){
    box1.style.background = '#0f0';
    box2.style.background = '#0f0';
    box3.style.background = '#0f0';
}

function checaSequencia(box1, box2, box3){
    var igual = false;

    if(box1.innerHTML !== '-' && box1.innerHTML === box2.innerHTML && box2.innerHTML === box3.innerHTML){
    igual = true;
    }
    return igual;
}

function reiniciar(){
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for(var i = 1; i <= 9; i++){
        var box = document.getElementById(i);
        box.style.background = '#eee';
        box.style.color = '#eee';
        box.innerHTML = '-';
    }
    mudarJogador('X');
}