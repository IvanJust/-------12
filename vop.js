console.log("Задание 1");
let n = prompt("Введите размерность таблицы умножения:");
function tabl(N){
    let mas = [], l = 1, itog = [];
    for(let i = 0; i < N; i++){
        //console.log("1");
        itog[i] = [];
    }
    for(let j = 0; j < N; j++){
        itog[j] = [];
        for(let i = 0; i < N; i++){
            itog[j][i] = (i +1) * (j + 1)
        }
        console.log(itog[j]); 
    }
    return console.log( itog)
} 
tabl(n);