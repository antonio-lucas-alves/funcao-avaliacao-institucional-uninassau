# Função para usar no console e responder rapidamente a avaliação institucional uninassau.

    O questionário é mt grande e chato de responder, e no fim não serve de bulhunfas, mas da umas horas complementares, então por que não responeder o mais rapido possivel xD.

### Uso:

     Copie o código abaixo e jogue no console da página com o questionário aberto, repita em todos os questionários.

```javascript
function responderQuestionarioUninassau(option) {
  const listGroups = document.querySelectorAll('ul');

  listGroups.forEach((list) => {
    const listItems = list.querySelectorAll('li');

    const thirdLi = listItems[option - 1];
    const radios = thirdLi.querySelectorAll('input[type="radio"]');

    radios.forEach((radio) => {
      radio.click();
    });
  });
}

function clicarNoBotao() {
  var botao = document.getElementById('VanillaTheme_wt6_block_wtMainContent_wt17');

  botao.click();
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function executar() {
  responderQuestionarioUninassau(3);
  await delay(5000);
  clicarNoBotao();
}

executar();
```

![exemplo](https://github.com/antonio-lucas-alves/funcao-avaliacao-institucional-uninassau/blob/main/exemplo.jpeg)
