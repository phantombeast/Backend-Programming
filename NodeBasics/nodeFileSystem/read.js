const fs=require('fs');

fs.readFile('helo.txt',
    (err,data)=> {
        if (err)
            throw new Error('Could not be read');
            console.log('done');
            console.log(data.toString());
    }


)
console.log('Almost done')