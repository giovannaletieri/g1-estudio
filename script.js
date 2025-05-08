function responder(pergunta, resposta) {
    const resultado = document.getElementById('resultado'+ pergunta);

    resultado.textContent = '';
  
    if (pergunta === 1) {
      if (resposta === 'estudo') {
        resultado.textContent = 'Provavelmente, o final do ensino médio não foi fácil para ninguém.';
        resultado.style.color = 'green';
      } else {
        resultado.textContent = 'Quem me dera... Mas a matéria acumulada não ajudava muito.';
        resultado.style.color = 'red';
      }
    }

    if (pergunta === 2) {
        if (resposta === 'ciclista') {
          resultado.textContent = 'Sim! Vi uma pessoa passando em uma bicicleta e no mesmo momento tive a ideia que eu precisava.';
          resultado.style.color = 'green';
        } else {
          resultado.textContent = 'Apesar de terem muitas árvores pelo caminho, ainda não me ajudaram tanto assim...';
          resultado.style.color = 'red';
        }
    }
    
    if (pergunta === 3) {
      if (resposta === 'terraco') {
        resultado.textContent = 'Isso! Achei bem diferente e a vista é maravilhosa.';
        resultado.style.color = 'green';
       } else {
        resultado.textContent = 'Não! É bem legal realmente mas o terraço foi mais inesperado';
        resultado.style.color = 'red';
      }
    }

    if (pergunta === 4) {
      if (resposta === 'nao') {
        resultado.textContent = 'É compreensível, realmente pode se tornar algo perigoso em certas circunstâncias.';
       } else {
        resultado.textContent = 'Que legal!!';
      }
    }

    if (pergunta === 5) {
      if (resposta === 'ux') {
        resultado.textContent = 'Bem, isso aqui é um site programado por mim, então é por aí né.';
        resultado.style.color = 'green';
       } else {
        resultado.textContent = 'Acho muito legal, no momento não é a primeira opção, mas nunca se sabe né.';
        resultado.style.color = 'red';
      }
    }

    if (pergunta === 6) {
      if (resposta === 'desenho') {
        resultado.textContent = 'Sim! E realmente ficou longe de estar bom...';
        resultado.style.color = 'green';
       } else {
        resultado.textContent = 'As colagens começaram um pouco depois...';
        resultado.style.color = 'red';
      }
    }
}