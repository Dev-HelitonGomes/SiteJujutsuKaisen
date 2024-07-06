//Map = Mapeamento de array
const personagens = [
    {
        id: 1,
        nome: "Yuji Itadori",
        imagem: "https://i.pinimg.com/564x/d3/c0/04/d3c0043bd5bcc4df884da5ca6d68c7a6.jpg",
        descricao: "Yuji Itadori é o protagonista de Jujutsu Kaisen, um estudante com força física extraordinária que se torna um feiticeiro jujutsu após engolir um dedo de Sukuna, um poderoso espírito amaldiçoado.  Determinado a salvar vidas e honrar o legado de seu avô, Yuji luta contra maldições enquanto tenta controlar o poder de Sukuna dentro de sí. Sua coragem e altruísmo fazem dele um herói resiliente e  cativante.",
        habilidades: ["●Força Sobre-Humana", "●Escolhido do Black Flash", "●Energia Reversa"]
    },
    {
        id: 2,
        nome: "Megumi Fushiguro",
        imagem: "https://i.pinimg.com/564x/3b/8c/ab/3b8cabd94976c6a057d3983fc13eab56.jpg",
        descricao: "Megumi Fushiguro é um dos protagonistas do anime e mangá Jujutsu Kaisen. Ele é um estudante do Colégio Técnico de Jujutsu de Tóquio e um talentoso feiticeiro jujutsu. Conhecido por sua personalidade calma e reservada, Megumi é um aliado próximo de Yuji Itadori e Nobara Kugisaki, formando um trio de jovens feiticeiros que enfrentam várias ameaças no mundo das maldições.",
        habilidades: ["●Dez sombras", "●Expansão de Domínio", "●Manipulação de ferramentas Amaldiçoadas"]
    },
    {
        id: 3,
        nome: "Nobara Kugisaki",
        imagem: "https://i.pinimg.com/564x/42/a7/a4/42a7a490d0135afbeae98e9ef24c1b73.jpg",
        descricao: "Nobara é retratada como uma pessoa confiante, franca e às vezes sarcástica. Ela é habilidosa no uso de uma técnica de jujutsu que envolve o uso de um martelo e pregos amaldiçoados para derrotar maldições. Seu estilo de luta é único e centrado em sua destreza física e inteligência tática.",
        habilidades: ["●Técnica Do Boneco De Palha", "●Ressonância", "●Grampo de Cabelo"]
    },
    {
        id: 4,
        nome: "Satoru Gojo",
        imagem: "https://i.pinimg.com/564x/00/2c/b7/002cb7e11e2fb3cb1c08e7b6528eca2a.jpg",
        descricao: "Gojo é conhecido por sua personalidade brincalhona e descontraída, contrastando fortemente com sua habilidade excepcional em combate. Ele possui uma técnica de jujutsu chamada Ilimitado, que lhe confere controle total sobre o espaço. Isso o torna praticamente invencível em batalha e um dos feiticeiros mais poderosos do mundo fictício de Jujutsu Kaisen.",
        habilidades: ["●Seios Olhos", "●Ilimitado", "●Expansão de Dominio"]
    },
    {
        id: 5,
        nome: "Ryomen Sukuna",
        imagem: "https://i.pinimg.com/564x/ce/e7/b0/cee7b0b9b829482210c743f4d31be002.jpg",
        descricao: "Na história, Sukuna é um antigo feiticeiro amaldiçoado que foi derrotado e selado dentro de uma relíquia chamada Dedo de Sukuna. Este objeto é encontrado pelo protagonista Yuji Itadori, que acidentalmente ingere o dedo, tornando-se hospedeiro de Sukuna. Sukuna é retratado como extremamente cruel, impiedoso e sedento por poder. Ele possui habilidades de combate e controle sobre as maldições que o tornam uma ameaça imensa para os personagens principais. Sua presença na história adiciona uma camada de tensão e perigo constante, pois ele representa uma ameaça tanto para os humanos quanto para os feiticeiros.",
        habilidades: ["●Santuário", "●Expansão de Dominio", "●Técnica de Fogo"]
    },
    {
        id: 6,
        nome: "Toji Zenin",
        imagem: "https://i.pinimg.com/564x/a9/96/cc/a996cc06ec0dadc4f99e0b0c01c88bd7.jpg",
        descricao: "Toji é um dos ÚNICOS personagens que não usam energia amaldiçoada devido a sua RESTRIÇÃO CELESTIAL. A falta de Energia Amaldiçoada no corpo de Toji, faz com que ele desenvolva todos os seus sentidos, Tornando ele um predador perigoso para qualquer maldição ou feiticeiro.",
        habilidades: ["●Restrição Celestial", "●Físico Sobre-humano", "●Manipulação de Ferramentas Amaldiçoadas"]
    },
    {
        id: 7,
        nome: "Naobito Zenin",
        imagem: "https://i.pinimg.com/736x/0e/7a/91/0e7a917d7aa852a67a9a65740cf85229.jpg",
        descricao: "Naobito Zenin, líder atual do Clã Zenin em “Jujutsu Kaisen”, é um feiticeiro de Grau 1 e desempenha um papel central no Incidente de Shibuya. Mesmo estando sob efeitos do álcool, ele faz o máximo para conter os antagonistas.",
        habilidades: ["●Técnica de Projeção", "●Dominio simples", "●combate corpo a corpo"]
    },
    {
        id: 8,
        nome: "Maki Zenin",
        imagem: "https://i.pinimg.com/564x/ab/0a/3e/ab0a3eed002dd57e4951f46ff1373467.jpg",
        descricao: "Maki é uma pessoa muito teimosa e direta. Ela é obstinada e se motiva a escapar dos laços de sua família de feiticeiros. Por toda a sua vida, ela foi maltratada e rebaixada por ser uma mulher e uma não feiticeira pela família Zenin.",
        habilidades: ["●Manipulação de ferramentas Amaldiçoadas", "●Restrição Celestial", "●Fisico Sobre-Humano"]
    },
    {
        id: 9,
        nome: "Toge Inumaki",
        imagem: "https://i.pinimg.com/564x/d2/84/a0/d284a03ba413f5a2a9d1141931be1261.jpg",
        descricao: "Toge é membro de uma importante Família do universo Jujutsu, o Clã Inumaki. Eles possuem a técnica amaldiçoada conhecida como Fala Amaldiçoada, que ressoa através de um selo chamado Cobras e Presas.",
        habilidades: ["●Fala Amaldiçoada", "●combate corpo a corpo", "●experiencia em combate",]
    },
    {
        id: 10,
        nome: "Yuta Okkotsu",
        imagem: "https://i.pinimg.com/564x/57/bb/1f/57bb1f28414a29c822cfebad57b9853b.jpg",
        descricao: "Yuta Okkotsu é um personagem secundário em Jujutsu Kaisen, mas estrelou Jujutsu Kaisen 0, um filme que cronologicamente se passa 1 ano antes de Itadori Yuji comer o primeiro dedo de Ryomen Sukuna. Inicialmente, Yuta era só um humano “normal”, que havia sido amaldiçoado e assombrado por Rika Orimoto, sua namoradinha de infância.",
        habilidades: ["●Técnica de cópia", "●Imensa Energia Amaldiçoada", "●Expansão de Dominio"]
    },
]



personagens.map((obj) => {

    const button = document.createElement("button");                                  //um button
    const texto = document.createElement("div")                                   //criando tag para receber o texto
    const filhoDoTexto = document.createTextNode(obj.nome)                        //aqui estou fazendo com que os textos do array sejam selecionados
    const tagImagem = document.createElement("img")                             //criando tag "img"
    const scrollContainer = document.querySelector(".scroll-container")         //selecionando a classe "scroll-container"

    button.addEventListener("click", function () {
        const descripition = document.querySelector(".textDescripition")
        const img = document.querySelector(".ImgYuji")
        const textoH2 = document.querySelector(".h2")
        // const textosUl = document.querySelector(".classMark")
        const ul1 = document.querySelector(".ul1")
        const ul2 = document.querySelector(".ul2")
        const ul3 = document.querySelector(".ul3")

        descripition.textContent = obj.descricao
        img.src = obj.imagem
        textoH2.textContent = obj.nome
        // textosUl.textContent = obj.habilidades[0]
        ul1.textContent = obj.habilidades[0]
        ul2.textContent = obj.habilidades[1]
        ul3.textContent = obj.habilidades[2]

    })

    tagImagem.src = obj.imagem                                                  //fazendo com que seja selecionada cada "obj" com "imagem"
    button.appendChild(tagImagem);                                                                 //fazendo com que a  "tagImagem" seja filho da div.
    texto.appendChild(filhoDoTexto);                                                            //fazendo com que a "texto" seja pai do "filhoTexto"
    button.appendChild(texto);                                                                     //fazendo com que a div seja pai do "texto"
    scrollContainer.appendChild(button);
    tagImagem.classList = "classImagem"                                         //colocando classe na tag de imagem
    button.classList = "divClass"                                                  //colocando classe na tag div
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function pesquisaPersonagem(event) {
    if (event.key === "Enter") {

        const scrollContainer = document.querySelector(".scroll-container")
        const buttons = scrollContainer.querySelectorAll("button")
        buttons.forEach(botao => botao.remove())//forEach só pode ser usada porque ela é um array de botões e forEach é similar ao map.                     

        personagens.map((obj) => {
            //O primeiro "TO lowercase" esta transformando para minusculo os nomes dos feiticeiros.
            //o includes este verificando se a string YUjI existe dentro do nome feiticeiros.
            //o segundo tolowercase esta transformando "YUjI" em minusculo

            //event.target.value (valor do meu input)
            //event.target.value.ToLowerCase (valor do meu input convertido em letra minúscula independetemente se digitarem letra maiúscula)
            if (obj.nome.toLowerCase().includes(event.target.value.toLowerCase())) {
                console.log("batata")
                const button = document.createElement("button");                                  
                const texto = document.createElement("div")                                   
                const filhoDoTexto = document.createTextNode(obj.nome)                      
                const tagImagem = document.createElement("img")                             
                const scrollContainer = document.querySelector(".scroll-container")         

                button.addEventListener("click", function () {
                    const descripition = document.querySelector(".textDescripition")
                    const img = document.querySelector(".ImgYuji")
                    const textoH2 = document.querySelector(".h2")
                    const textosUl = document.querySelector(".classMark")

                    descripition.textContent = obj.descricao
                    img.src = obj.imagem
                    textoH2.textContent = obj.nome
                    textosUl.textContent = obj.habilidades

                })

                tagImagem.src = obj.imagem                                            
                button.appendChild(tagImagem);                                                                 
                texto.appendChild(filhoDoTexto);                                                            
                button.appendChild(texto);                                                                    
                scrollContainer.appendChild(button);
                tagImagem.classList = "classImagem"                                         
                button.classList = "divClass"
            }

        })
    }

}