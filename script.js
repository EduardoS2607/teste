const questions = [
{
    question: "Qual foi nossa primeira viagem para outro Estado?",
    options: ["Rio de Janeiro", "Curitiba", "Minas Gerais", "Santa Catarina"],
    answer: 1, 
    answerText: "Essa eu sabia que você ia acertar, como esquecer todo nosso rolê kkkk Perder avião, pegar trem chei de mala e chegar la de ônibus",
    images: ["img/curitiba1.jpg", "img/curitiba2.jpg", "img/curitiba3.jpg"],
    // videos: ["img/video.mp4"]  // Exemplo de imagens
},
{
    question: "Qual nossa primeira viagem com os amigos?",
    options: ["Paraty", "Arraial do Cabo", "Brotas", "Ubatuba"],
    answer: 0,  
    answerText: "Ahhh Paraty, o que levamos de você é Douglas brigando com a Ellen e Flamengo campeão da Libertadores em plena praia do RJ",
    images: ["img/paraty1.jpg", "img/paraty2.jpg", "img/paraty3.jpg"],
    videos: []
},
{
    question: "E qual foi o ano da nossa primeira virada de ano juntos (Praia) ?",
    options: ["2016-17", "2017-18", "2018-19", "2019-20"],
    answer: 1,  // Resposta correta é "Titanic"
    answerText: "2017-18 o ano que fomos para Caragua, como foi legal. Aquela casa toda deformada kkkk onde triscavamos ela quebrava",
    images: ["img/anonovo1.jpg", "img/anonovo3.jpg", "img/anonovo2.jpg"], 
    videos: [] // Exemplo de imagens
},
{
    question: "Alugamos um Corolla para viajar, para onde foi?",
    options: ["Brotas", "Ubatuba", "Arraial do Cabo", "Paraty"],
    answer: 2,  // Resposta correta é "Titanic"
    answerText: "Arraial \n Tivemos que deixar o Douglas pelo caminho, pra ele não chamar a Ellen kkkk como esquecer",
    images: ["img/arraial1.jpg", "img/arraial2.jpg", "img/arraial3.jpg"], 
    videos: [] // Exemplo de imagens
},
{
    question: "Essa viagem saiu um pedido de casamento",
    options: ["Capitólio", "Rio de Janeiro", "Arraial do Cabo", "Paraty"],
    answer: 0,  // Resposta correta é "Titanic"
    answerText: "Mais uma inesquecível pra conta, teve pedido de casamento, rolê de lancha, viagem com a familia e tantos mais kkk",
    images: ["img/capitolio1.jpg", "img/capitolio2.jpg", "img/capitolio3.jpg", "img/capitolio4.jpg", "img/capitolio5.jpg"], 
    videos: ["img/capitolio6.mp4"] // Exemplo de imagens
},
{
    question: "Nossa primeira viagem no Nordeste ?",
    options: ["João pessoa", "Recife", "Maceió", "Salvador"],
    answer: 1,  // Resposta correta é "Titanic"
    answerText: "Paramos em Recife primeiro e seguimos por todo litoral... Maragogi, São Miguel dos Milagres, Maceió. Ohhh Maravilha!!!",
    images: ["img/maceio7.jpg", "img/maceio6.jpg", "img/maceio4.jpg", "img/maceio3.jpg", "img/maceio2.jpg"], 
    videos: ["img/maceio1.mp4"] // Exemplo de imagens
},
{
    question: "Quando falamos viagem em grupo, lembramos de?",
    options: ["Brotas", "Ubatuba", "Angra dos Reis", "Guarujá"],
    answer: 2,  // Resposta correta é "Titanic"
    answerText: "Estava facil né, café da manhã, almoço e janta na mesa juntinhos, role de lancha, JetSky, cachaça na piscina, foi tanta coisa kkkk",
    images: ["img/angra6.jpg", "img/angra2.jpg", "img/angra3.jpg", "img/angra4.jpg", "img/angra5.jpg"], 
    videos: ["img/angra1.mp4"] // Exemplo de imagens
},
// Mais perguntas...
{
    question: "Depois de tanto esforço, vai liberar o anel né?",
    options: ["Sim", "Não"],
    answer: 0,  // Resposta correta é "Sim"
    answerText: "",
    images: []
}
];
  
let currentQuestionIndex = 0;
let correctAnswers = 0;

document.getElementById("start-btn").addEventListener("click", startQuiz);

function startQuiz() {
document.getElementById("start-screen").style.display = "none";
document.getElementById("question-screen").style.display = "block";
displayQuestion();
startCountdown();
}

function displayQuestion() {
const currentQuestion = questions[currentQuestionIndex];
document.getElementById("question-text").innerText = currentQuestion.question;

const answersContainer = document.getElementById("answers");
answersContainer.innerHTML = '';

currentQuestion.options.forEach((option, index) => {
    const answerElement = document.createElement("div");
    answerElement.classList.add("answer-option");
    answerElement.innerText = option;
    answerElement.addEventListener("click", () => selectAnswer(index));
    answersContainer.appendChild(answerElement);
});
}

function selectAnswer(selectedIndex) {
const currentQuestion = questions[currentQuestionIndex];
const answerElements = document.querySelectorAll(".answer-option");

// Marcar a resposta selecionada
answerElements.forEach((element, index) => {
    element.classList.remove("selected");
    if (index === selectedIndex) {
        element.classList.add("selected");
    }
});

const nextButton = document.getElementById("next-btn");
nextButton.disabled = false;
nextButton.addEventListener("click", () => {
    showCorrectAnswer(selectedIndex);
});
}
function showCorrectAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const answerElements = document.querySelectorAll(".answer-option");
  
    // Remover qualquer destaque anterior
    answerElements.forEach((element) => {
        element.classList.remove("correct");
    });
  
    // Marcar a resposta correta de verde
    answerElements[currentQuestion.answer].classList.add("correct");
  
    // Verificar se a resposta selecionada está correta
    if (selectedIndex === currentQuestion.answer) {
        correctAnswers++;
    }
    setTimeout(() => {
        showAnswerScreen(currentQuestion);
        console.log("Após 2 segundos");
      }, 1000);
    // Exibir a tela de resposta
  
    // Avançar para a próxima pergunta ao clicar no botão
    const nextAnswerButton = document.getElementById("next-answer-btn");
    nextAnswerButton.onclick = () => {
        document.getElementById("answer-screen").style.display = "none";
  
        if (currentQuestionIndex < questions.length - 2) {
            // Avançar para a próxima pergunta normal
            currentQuestionIndex++;
            displayQuestion();
            document.getElementById("question-screen").style.display = "block";
        } else {
            // Se for a última pergunta antes do "Sim ou Não", exibir confirmação
            showFinalConfirmation();
        }
    };
  }

  function showAnswerScreen(currentQuestion) {
    // Mostrar a tela de resposta
    document.getElementById("answer-screen").style.display = "block";
    document.getElementById("question-screen").style.display = "none";
    document.getElementById("result-screen").style.display = "none";

    // Exibir texto da resposta
    document.getElementById("answer-text").innerText = currentQuestion.answerText;

    const mediaContainer = document.getElementById("answer-media");
    mediaContainer.innerHTML = ''; // Limpar qualquer mídia anterior

    // Adicionar vídeos
    if (Array.isArray(currentQuestion.videos) && currentQuestion.videos.length > 0) {
        currentQuestion.videos.forEach((videoUrl) => {
            const videoElement = document.createElement("video");
            videoElement.src = videoUrl;
            videoElement.controls = true;
            videoElement.alt = "Vídeo da resposta";
            videoElement.style.cursor = "pointer"; // Indica que pode clicar
            videoElement.addEventListener("click", () => openModal(videoUrl, "video"));
            mediaContainer.appendChild(videoElement);
        });
    }

    // Adicionar imagens
    if (Array.isArray(currentQuestion.images) && currentQuestion.images.length > 0) {
        currentQuestion.images.forEach((imageUrl) => {
            const imgElement = document.createElement("img");
            imgElement.src = imageUrl;
            imgElement.alt = "Imagem da resposta";
            imgElement.style.cursor = "pointer"; // Indica que pode clicar
            imgElement.addEventListener("click", () => openModal(imageUrl, "image"));
            mediaContainer.appendChild(imgElement);
        });
    }
}

function openModal(mediaUrl, type) {
    const modal = document.getElementById("media-modal");
    const modalImage = document.getElementById("modal-image");
    const modalVideo = document.getElementById("modal-video");

    if (type === "image") {
        modalImage.src = mediaUrl;
        modalImage.style.display = "block";
        modalVideo.style.display = "none";
    } else if (type === "video") {
        modalVideo.src = mediaUrl;
        modalVideo.style.display = "block";
        modalImage.style.display = "none";
    }

    modal.style.display = "flex"; // Exibir o modal
}

// Fechar o modal
document.getElementById("close-modal").addEventListener("click", () => {
    const modal = document.getElementById("media-modal");
    modal.style.display = "none";

    // Parar o vídeo se ele estiver sendo exibido
    const modalVideo = document.getElementById("modal-video");
    modalVideo.pause();
    modalVideo.src = "";
});



function showFinalConfirmation() {
const currentQuestion = questions[questions.length - 1];

// Exibir a tela de confirmação de resultados (Sim ou Não)
document.getElementById("question-screen").style.display = "block";
document.getElementById("answer-screen").style.display = "none";
document.getElementById("result-screen").style.display = "none";

document.getElementById("question-text").innerText = currentQuestion.question;

const answersContainer = document.getElementById("answers");
answersContainer.innerHTML = '';

currentQuestion.options.forEach((option, index) => {
    const answerElement = document.createElement("div");
    answerElement.classList.add("answer-option");
    answerElement.innerText = option;
    answerElement.addEventListener("click", () => selectConfirmationAnswer(index));
    answersContainer.appendChild(answerElement);
});
}

function selectConfirmationAnswer(selectedIndex) {
const currentQuestion = questions[questions.length - 1];

if (selectedIndex === 0) {  // Se for "Sim"
    showResult();
} else {  // Se for "Não"
    alert("Você precisa responder 'Sim' para continuar e desbloquar um presente.");
}
}

function showResult() {
document.getElementById("question-screen").style.display = "none";
document.getElementById("answer-screen").style.display = "none";
document.getElementById("result-screen").style.display = "block";
document.getElementById("correct-answers").innerText = correctAnswers;
}
const targetDate = new Date('2025-02-20T00:00:00'); // Data alvo para a contagem regressiva

// Função para atualizar a contagem regressiva
function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
        document.getElementById("countdown").innerText = "O grande dia chegou!";
        return; // Parar a contagem regressiva quando a data alvo for alcançada
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerText = 
        `Contagem regressiva: ${days}d ${hours}h ${minutes}m ${seconds}s`;

    setTimeout(updateCountdown, 1000); // Atualiza a contagem a cada 1 segundo
}

// Inicia a contagem regressiva ao carregar a página
window.onload = function() {
    updateCountdown();
    document.getElementById("start-btn").addEventListener("click", startQuiz);
};

function startQuiz() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("question-screen").style.display = "block";
    displayQuestion();
    startCountdown();
}