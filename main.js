//Nullish Coalescing Operators

// const idade = 0;

// document.body.innerText = 'Sua idade é: ' + (idade || 'Nao informado');

// para o JS ->  0, " " , [] , false, undefined, null => false
// entao o ?? é mais seguro de usar do que o || pois ele considera o valor 0 

//OBJETOS 

// const user = {
//     nome: 'Kamilla',
//     idade: 35,
//     nickname: 'Kami',
//     andress: {
//         rua: 'Rua Itapoan',
//         numero: 777,
//     },
// };

//metodos de objetos

// document.body.innerText = ('peso' in user) //false
// document.body.innerText = Object.keys(user) //retorna os vetores com as chaves do objeto
// document.body.innerText = Object.values(user) // retorna os valores do objeto
// document.body.innerText = JSON.stringify(Object.values(user))
// document.body.innerText = JSON.stringify(Object.entries(user));


//Desestruturação: 

// function mostrarIdade(user){
//     return user.idade;
// }
//desestruturando a funcao acima
// function mostrarIdade({idade}){
//     return idade;   //
// }

// // const andress = user.andress 
// const { andress, idade: age,  nickname= 'kakami' } = user; //setando valores deffault para variaveis

// document.body.innerText = JSON.stringify({andress, age,  nickname});
// document.body.innerText = mostrarIdade(user); 

//REST OPERATOR = OPERADOR DE RESTO
// const { nome, ...rest } = user;
// document.body.innerText = JSON.stringify(rest);

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const first = array[0];
// const second = array[1];
// const [first, , third, ...rest] = array; //pulando o second

// document.body.innerText = JSON.stringify({first, third, rest});


//Short Syntax

// const nome = 'Diego';
// const idade = 27;

// const user = {
//     nome,
//     idade,
// }

// document.body.innerText = JSON.stringify(user);


//Optional Chaaining

// const user = {
//         nome: 'Kamilla',
//         idade: 35,
//         nickname: 'Kami',
//         andress: {
//             rua: 'Rua Itapoan',
//             numero: 777,
//             cep: {
//                 code: 41750166,
//                 cidade: 'Salvador',
//             },
//             showFullAddress(){
//                 return 'ok';
//             }
//         },
//     };

    // document.body.innerText = user.andress?.cep?.code ?? 'Nao informado';

    // o . acessa o atributo do objeto user, e a ? pergunta SE ele existe dentro dos atributos do objeto.

    // document.body.innerText = user.andress?.showFullAddress?.()

    // const key = 'nome';

    // document.body.innerText = user[key]



    //METODOS DE ARRAY

    const arrays = [1, 2, 3, 4, 5,  ];

    //percorreando o array

    // for(const i of arrays) {
    //     document.body.innerText += i;
    // }


    //1- forEach

    //Com o forEach retorna mas nao consigo da um retorno de dentro da metodo
    // arrays.forEach(item => {
    //     document.body.innerText += item;
    // })


    //2- map

    //Com o map consigo ter um retorno de dentrpo do metodo. o Map sempre retorna o array com o mesmo tamnaho do valor original, ou seja so posso usar o map quando quero tranformar um array em outro mudando alguma coisa dentro desses itens.
    // const novoArray = arrays.map(item =>{
    //     return item * 2;
    // })

    // document.body.innerText = JSON.stringify(novoArray)
    

    // const novoArray = arrays.map(item =>{
    //     if(item % 2 === 0){
    //         return item *10;
    //     }
    //     return item;
    // })


    // 3 - filter - 

    // const novoArray = arrays.filter(item => item % 2 === 0) // filtrando nunmeros pares 
    // const novoArray = arrays
    // .filter(item => item % 2 !== 0) // filtrando numeros impares
    // .map(item => item *10) // percorre os elementos impares e multiplica cada um por 10

    // document.body.innerText = JSON.stringify(novoArray)


    // 4 - every - retorna um booleano (true or false) - caso TODOS(every) os itens satisfaçam a condição

    // const todosOsItensSaoNumeros = arrays.every(item => typeof item ==='number');


    // document.body.innerText = JSON.stringify(todosOsItensSaoNumeros)


    // 5 - Some - tambem retorna um booleano, porem verifica se apenas um item satisfaz a condição

    // const peloMenosUmItemNaoEUmNumero = arrays.some(item => {
    //     return typeof item !=='number';
    // })
    
    // document.body.innerText = JSON.stringify(peloMenosUmItemNaoEUmNumero)


    // 6 - find - serve para encontrar um item do array (encontra o primeiro item que satisfaça a condição)

    // const par = arrays.find(item=> item % 2 ===0) // retorna o ITEM

    // document.body.innerText = JSON.stringify(par)


    // const par = arrays.findIndex(item=> item % 2 ===0) // retorna o INDICE

    // document.body.innerText = JSON.stringify(par)


    // 7 - REDUCE - cria uma nova estrutura de dados 

    // const soma = arrays.reduce((acc, item)=> {
    //     return acc + item
    // }, 0)

    // document.body.innerText = JSON.stringify(soma)


    //Promisses

    