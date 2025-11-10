const display = document.getElementById('display');
const botoes = document.querySelectorAll('.botao');

let expressao = '';

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    const valor = botao.textContent.trim();

    if (valor === '=') {
      try {
        // Substitui os símbolos por operadores válidos do JS
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
    } else if (valor === 'C') {
      // Limpar (opcional, caso queira adicionar botão "C")
      expressao = '';
      display.textContent = '0';
    } else {
      // Adiciona números ou operadores à expressão
      expressao += valor;
      display.textContent = expressao;
    }
  });
});
