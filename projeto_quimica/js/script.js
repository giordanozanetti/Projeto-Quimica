let perguntas = document.querySelectorAll(".question");
function verifica(questao, resposta) {
    let resposta_selecionada = document.querySelector(`input[name="${questao}"]:checked`);
    let numero = parseInt(questao[1])
    function none() {
        
        document.querySelector(`#acerto${numero}`).style.display = 'none';
        document.querySelector(`#info${numero}`).style.display = 'none';
        document.querySelector(`#pergunta_${numero}`).style.display = 'none';
        document.querySelector(`#titulo${numero}`).style.display = 'none';
        document.querySelector(`#infos_start`).style.display ='none'
    }
    function show() {
        document.querySelector(`#info${numero + 1}`).classList.add('aparece');
        document.querySelector(`#pergunta_${numero + 1}`).classList.add('aparece');
        document.querySelector(`#titulo${numero + 1}`).classList.add('aparece');
        document.querySelector(`#infos_start`).classList.add('aparece');

    }
    if (resposta_selecionada?.id == resposta) {

        document.querySelector(`#responda${numero}`).style.display = 'none'
        document.querySelector(`#erro${numero}`).style.display = 'none'

        document.querySelector(`#info${numero}`).style.display = 'flex';
        document.querySelector(`#pergunta_${numero}`).style.display = 'flex';
        document.querySelector(`#titulo${numero}`).style.display = 'flex';
        document.querySelector(`#infos_start`).style.document = 'flex';


        document.querySelector(`#info${numero}`).classList.remove('aparece');
        document.querySelector(`#pergunta_${numero}`).classList.remove('aparece');
        document.querySelector(`#titulo${numero}`).classList.remove('aparece');
        document.querySelector(`#infos_start`).classList.remove('aparece');
        document.querySelector(`#infos_start`).style.display = 'flex';
        document.querySelector(`#acerto${numero}`).style.display = 'flex';

        document.querySelector(`#infos_start`).classList.add('some');
        document.querySelector(`#info${numero}`).classList.add('some');
        document.querySelector(`#pergunta_${numero}`).classList.add('some');
        document.querySelector(`#titulo${numero}`).classList.add('some');
        document.querySelector(`#acerto${numero}`).classList.add('some')


        setTimeout(none, 800)
        if (numero < perguntas.length) {
            setTimeout(show, 800)
        }
        else {
            document.querySelector(`#parabens`).classList.add('aparece');
        }
    }
    else if (resposta_selecionada == null) {
        document.querySelector(`#acerto${numero}`).style.display = 'none'
        document.querySelector(`#responda${numero}`).style.display = 'flex'
        document.querySelector(`#erro${numero}`).style.display = 'none'
    } else {
        document.querySelector(`#acerto${numero}`).style.display = 'none'
        document.querySelector(`#responda${numero}`).style.display = 'none'
        document.querySelector(`#erro${numero}`).style.display = 'flex'
    }

}
;