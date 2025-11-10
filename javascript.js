const display = document.getElementById('display');
const botoes = document.querySelectorAll('.botao');

let expressao = '';

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    const valor = botao.textContent.trim();

    if (valor === 'C') {
      expressao = '';
      display.textContent = '0';
    } 
    else if (valor === '=') {
      try {
       
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
    
      const ultimoNumero = expressao.split(/[\+\-×÷−]/).pop();
      if (valor === '.' && ultimoNumero.includes('.')) return;

      expressao += valor;
      display.textContent = expressao;
    }
  });
});
