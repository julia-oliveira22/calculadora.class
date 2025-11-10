const display = document.getElementById('display');
const botoes = document.querySelectorAll('.botao');

let expressao = '';

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    const valor = botao.textContent.trim();

    if (valor === 'C') {
      // Limpa o visor e a expressão
      expressao = '';
      display.textContent = '0';
    } 
    else if (valor === '=') {
      try {
        // Troca os símbolos pelos operadores corretos do JavaScript
        const resultado = eval(
          expressao
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
            .replace(/−/g, '-')
        );

        display.textContent = resultado;
        expressao = resultado.toString();
      } catch {
        display.textContent = 'Erro';
        expressao = '';
      }
    } 
    else {
      // Adiciona o número ou operador à expressão
      expressao += valor;
      display.textContent = expressao;
    }
  });
});
