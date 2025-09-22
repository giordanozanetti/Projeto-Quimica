// function checkAnswer(question, answear) {
//     let inputSelected = document.querySelector(input[name="q${question}"]:checked);
//     feedback.style.display = "block";

//     if (inputSelected?.value == answear) {
//         feedback.innerHTML = '<p class="correct back">✅ Parabéns! Resposta correta!</p>';
//         info.style.display = 'flex';

//         let options = document.querySelectorAll(input[name="q${question}"]);

//         for (let i = 0; i < options.length; i++) {
//             options[i].disabled = true;
//         };

//         document.querySelector(#respond${question}).disabled = true;

//         if (question == questions.length) {
//             setTimeout(() => {
//                 document.querySelector("#quiz-complete").classList.add('show');
//             }, 2000)
//         } else {
//             setTimeout(() => {
//                 document.querySelector(#question${question + 1}).classList.add('show');
//             }, 2500);
//         }
//     } else if (inputSelected == null) {
        
//     } else {
        
//     }
// }









function verifica(questao, resposta) {
    let resposta_selecionada = document.querySelector(`input[name="${questao}"]:checked`);
    let numero = parseInt(questao[1])

    if (resposta_selecionada?.id == resposta) {
        document.querySelector(`#info${numero}`).classList.add('some');
        document.querySelector(`#pergunta_${numero}`).classList.add('some');
        document.querySelector(`#titulo${numero}`).classList.add('some');
        
        document.querySelector(`#info${numero+1}`).classList.add('aparece');
        document.querySelector(`#pergunta_${numero+1}`).classList.add('aparece');
        document.querySelector(`#titulo${numero+1}`).classList.add('aparece');
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