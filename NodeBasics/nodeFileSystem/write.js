const fs=require('fs');

fs.writeFile('hello.txt','hello wordl',

    (err)=>{ if(err) throw err
        console.log('File Written')
}
    )
console.log('file done');