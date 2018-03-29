const express = require('express')
const path = require('path')

const app = express()

var todos = []
var fs=require('fs');

var content=fs.readFileSync('/todos');
var data=JSON.parse(content)
console.log(data);
// var arrayObject;
// fs.readFile('/todos1.json','utf-8',(err,data)=>{
//         if (err) throw err
//
//          arrayObject=JSON.parse(data);
//         arrayObject.todos1.push({
//             "name":"pulkir",
//             "age":21,
//             "college":"niec"
//         });
// })
// console.log(arrayObject);
//
// fs.writeFile('/todos1.json',JSON.stringify(arrayObject),'utf-8',(err)=>{
//     if (err) throw err
//
//     console.log('Done!!');
// })

app.use('/', express.static(path.join(__dirname, 'public_html')))

app.get('/todos', (req, res) => {
    res.send(todos)
})

app.get('/addtodo', (req, res) => {
    todos.push(req.query.newtodo)
    res.send('success')
})

app.listen(3333, () => {
    console.log('Server started on http://localhost:3333')
})