//Elaborar um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja. Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x.

//EXEMPLO:
//Preço: R$60,00
//À vista: R$54,00
//Ou 3x de: R$20,00




let preco = 100; 
let aVista = 10;
let totalAvista =40;

totalAvista = (preco - (aVista /100 )* preco);

console.log(`Preço: R$${preco},00`);

console.log(`Total a vista com desconto de 10%: R$${totalAvista},00`);

console.log(`Ou em 3x sem juros: R$${preco / 3},00`);







               


                                               //Solução alternativa
//let precoProduto = 100;

//console.log(`Preço do produto: R${precoProduto},00`);

//console.log('formas de pagamento: Á vista com 10% de desconto ou parcelado em até 3x no cartão.');

//console.log(`Á vista R$${precoProduto / 10 - precoProduto}`);

//console.log(`Dividido em 3x: R$${ precoProduto / 3},00`);
