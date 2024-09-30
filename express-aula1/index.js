const express =  require('express')
const app = express()
//variavel ambiente
const port = 3000

const path = require("path")

//dirname é uma variavel para indicar o caminho
const basepath =  path.join(__dirname) 

app.use(
    express.urlencoded({ //converter para formar url
extended: true, //copiar parametros dos objetos filhos
    })
)
app.use(express.json())

const checkAuth = function(req,res,next){
    req.authStatus = true 
    if(req.authStatus){
        console.log('Está logado!')
    } else {
        console.log('Não está logado, faça login!')
    }
}
app.use(checkAuth)
app.get('users/add', (req, res)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  => {
    res.sendFile(`${basepath}/forms.html`)
})
app.post('/users/save', (req, res) => {
    console.log(req.body)
    const name = req.body.name
    const email = req.body.email

    console.log(name)
    console.log(email)
})
//retorna um valor
app.get('/users/:id', (req, res) => {

    //resgatar parametros do url
    const id = req.params.id

    //resgatar o usuario do banco
    console.log(`Estamos buscando o usuario: $(id)`) 

    //senfile:trasferir arquivos//basepath: especifica a pasta raiz
    res.sendFile(`${basepath}/users.html`) 
})

app.get('/', (req, res) =>{
res.sendFile(`${basepath}/index.html`)
})

app.listen(port, () => {
    console.log(`App está rodando na porta ${port}`)
})