const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inventory = [];

function displayMenu() {
  console.log('\n==== Controle de Estoque ====');
  console.log('1. Adicionar Item ao Estoque');
  console.log('2. Listar Itens em Estoque');
  console.log('3. Atualizar Quantidade de um Item');
  console.log('4. Excluir Item do Estoque');
  console.log('5. Sair');
}

function addItem() {
  rl.question('Digite o nome do item: ', (name) => {
    rl.question('Digite a quantidade em estoque: ', (quantity) => {
      inventory.push({ name, quantity: parseInt(quantity) });
      console.log('Item adicionado ao estoque com sucesso.');
      displayMenu();
      askForChoice();
    });
  });
}

module.exports = { addItem };


function listItems() {
  console.log('\nItens em Estoque:');
  inventory.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - Quantidade: ${item.quantity}`);
  });
  displayMenu();
  askForChoice();
}

function updateQuantity() {
  rl.question('Digite o número do item que deseja atualizar: ', (index) => {
    if (index >= 1 && index <= inventory.length) {
      rl.question('Digite a nova quantidade: ', (newQuantity) => {
        inventory[index - 1].quantity = parseInt(newQuantity);
        console.log('Quantidade atualizada com sucesso.');
        displayMenu();
        askForChoice();
      });
    } else {
      console.log('Número de item inválido.');
      displayMenu();
      askForChoice();
    }
  });
}

function deleteItem() {
  rl.question('Digite o número do item que deseja excluir: ', (index) => {
    if (index >= 1 && index <= inventory.length) {
      inventory.splice(index - 1, 1);
      console.log('Item excluído do estoque com sucesso.');
    } else {
      console.log('Número de item inválido.');
    }
    displayMenu();
    askForChoice();
  });
}

function askForChoice() {
  rl.question('Escolha uma opção: ', (choice) => {
    switch (choice) {
      case '1':
        addItem();
        break;
      case '2':
        listItems();
        break;
      case '3':
        updateQuantity();
        break;
      case '4':
        deleteItem();
        break;
      case '5':
        rl.close();
        break;
      default:
        console.log('Opção inválida. Por favor, escolha uma opção válida.');
        displayMenu();
        askForChoice();
        break;
    }
  });
}

displayMenu();
askForChoice();
