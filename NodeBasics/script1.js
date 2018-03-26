window.onload=function () {

    var input=document.getElementById('inp');
    var btn=document.getElementById('print');
    var item=document.getElementById('list');


    // btn.onclick=function () {
    //     var N=parseInt(input.value);
    //     var x=''
    //
    //     for(var i=1;i<=N;i++){
    //         var o='';
    //         if(i%3==0){o=o+'fizz'}
    //         if(i%5==0){o=o+'bizz'}
    //         if(o===''){o=o+i;}
    //
    //         x=x+ `<li>${o}</li>`
    //     }
    //     item.innerHTML=x;
    //     console.timeEnd('script1')
    // }

    btn.onclick=function () {
        console.time('script1');
        var N=parseInt(input.value);
        //var x=''

        for(var i=1;i<=N;i++){
            var o='';
            if(i%3==0){o=o+'fizz'}
            if(i%5==0){o=o+'bizz'}
            if(o===''){o=o+i;}

            //x=x+ `<li>${o}</li>`
            var items=document.createElement('li');
            items.innerHTML=o;
            item.appendChild(items);

        }

        //item.innerHTML=x;
        console.timeEnd('script1')
    }
}