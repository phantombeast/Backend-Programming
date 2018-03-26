// console.log('hello')
//
// if(typeof window!=='undefined')
//     console.log(window);
// if(typeof document!==undefined)
//     console.log(document);
// console.log(process);
//
// if(typeof global!=='undefined')
//     console.log(global)

// process.argv.forEach(function (val, index, array) {
//     console.log(index + ': ' + val);
// });

// if( process.argv.length> 2){
//     let N=parseInt(process.argv[2]);
//     for(let i=1;i<=N;i++){
//         console.log(i)
//     }
// }
//for
// if( process.argv.length>2){
//     let N=parseInt(process.argv[2]);
//     for(let i=1;i<=N;i++){
//
//         if(i%3==0 && i%5==0){
//             console.log(' fizzbizz')
//         }
//         else if(i%5==0){console.log('buzz')}
//         else if(i%3==0){console.log('fizz ')}
//         else{
//             console.log(i);
//         }
//     }
// }

// var val=document.getElementById("inpVal");
// var btn=document.getElementById("btn");
// var div=document.getElementById('div');
// btn.onclick=function () {
//
//     var v= document.getElementById('inpVal').setAttribute('value',50);
//     var li=div.createElement('li');
//     var ol=li.createElement('ol');
//
//     ol.setAttribute('value',v);
//
// }
// window.onload(function () {
//     let btnPrint=document.getElementById('print');
//     let inpBoox=document.getElementById('inp');
//     let list= document.getElementById('input');
// })
// if(process.argv.length>2){
// let i=process.argv[2];
// let j=process.argv[3];
// let k=process.argv[4];
// process.argv[0]='node';
// console.log(process.argv);
// }

let total=0;
for(let i=2;i<process.argv.length;i++){
    total=total+parseInt(process.argv[i]);
}

console.log(total);