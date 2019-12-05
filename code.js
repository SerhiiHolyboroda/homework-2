//завдання 1
 function big(){
  let arr = prompt('Введіть числа').split(' ');
    for(let i = 0; i < arr.length;i++){
    let max = arr[i]
    if(arr[i] < arr[i+1]){
       max = arr[i+1];
       console.log(max)
       }
    }
 }
big();
//завдання 1


//завдання 3
let f =()=>{
     
let arr11 = prompt('').slice(' ');
    for(let i = 0; i<arr11.length; i++){
    if(arr11[i] % 2 != 0  ){console.log(arr11[i])}
    }
}
f();
 //завдання 3

//let f1 =()=>{
//   let b = prompt('Введіть числа ').slice(' ');
//    let n = prompt('введіть кількість чисел');
//    let q = prompt('введіть знаменник прогресії');
//     
//    for( let Bn  ; n < 0 ; n--   ){
//        Bn = b*(q**n-1);
//        console.log(Bn)
//        
//    }
//}
//f1();
 