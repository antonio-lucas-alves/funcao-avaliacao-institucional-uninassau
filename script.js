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
