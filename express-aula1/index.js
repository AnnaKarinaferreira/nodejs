const express =  require('express')
const app = express()
const port = 3000 //variavel ambiente

const path = require("path")
const basepath =  path.join(__dirname, 'Aula1') //dirname é uma variavel para indicar o caminho
const checkAuth = function(req,res,next){
    req.authStatus = true 
    if(req.authStatus){
        console.log('Está logado!')
    } else {
        console.log('Não está logado, faça login!')
    }
}
app.use(checkAuth)

app.get('/', (req, res) =>{
res.sendFile(`${basepath}/index.html`)
})

app.listen(port, () => {
    console.log(`App está rodando na porta ${port}`)
})