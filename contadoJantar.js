
// Elaborar um programa que leia o valor de um jantar. Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago e que seja dinâmico e aceite alteração de valores .
// EXEMPLO: 
// Valor do jantar: R$80,00
// Taxa do garçom: R$8,00
// Total a pagar: R$88,00


let valorJantar = 80;
let taxadoGarcom = 8;
let total = 0;

total = valorJantar + ((taxadoGarcom / 100) * valorJantar);


console.log(`Valor do jantar: R$${valorJantar},00`);
console.log(`Taxa do garçon: R$${taxadoGarcom /100 * valorJantar},00`);
console.log(`Total a pagar: R$${total},00`);


               //Solução alternativa funcional
//console.log('Valor do jantar:  R$' + valorJantar +',00');
//console.log('Taxa do garçom: R$' + (taxadoGarcom / 100) * valorJantar + ',00' );
//console.log('Valor a pagar: R$' + total + ',00') ;
