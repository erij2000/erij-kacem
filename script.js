let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
const ques = [
    { Q: 'What is my ultimate career ambition?', options: ['Quantum Researcher', 'Cybersecurity Architect', 'Pre-Quantum Cyber Architect', 'Data Scientist'] },
    { Q: 'Which of the following fields am I most passionate about?', options: ['Traditional Computing', 'Quantum Computing and Cybersecurity', 'Graphic Design', 'Robotics Engineering'] },
    { Q: 'What year did I complete my high school Baccalaureate in Science?', options: ['2020', '2021', '2022', '2023'] },
    { Q: 'During my academic journey, which significant challenge did I face in 2022?', options: ['Adapting to university life', 'National exams preparation', 'Contracting COVID during the Reo MED School exam', 'Learning a new programming language'] },
    { Q: 'What creative hobbies bring me joy outside of technology?', options: ['Cooking and gardening', 'Drawing, piano, and writing', 'Traveling and photography', 'Swimming and hiking'] },
    { Q: 'What personal value do I hold in the highest regard?', options: ['Honesty and integrity', 'Flexibility and humor', 'Risk-taking and independence', 'Loyalty and tradition'] },
    { Q: 'Which tools and platforms do I use to learn about Artificial Intelligence?', options: ['Udemy, Coursera, and NVIDIA', 'Khan Academy and Microsoft Office', 'LinkedIn Learning and Blender', 'Figma and Adobe Creative Suite'] },
    { Q: 'What city did I move to for my studies at IIT University?', options: ['Tunis', 'Sousse', 'Monastir', 'Sfax'] },
    { Q: 'What was a turning point in my educational journey?', options: ['Choosing a career in medicine', 'Enrolling in preparatory school for engineering', 'Studying law full-time', 'Teaching at a university'] },
    { Q: 'What is my approach to combining innovation and cybersecurity?', options: ['Blending traditional methods with quantum technology', 'Following strict, pre-established guidelines', 'Relying solely on classical computing systems', 'Avoiding emerging technologies for stability'] },
    
];

const ans = [
    'Pre-Quantum Cyber Architect', 
    'Quantum Computing and Cybersecurity', 
    '2021', 
    'Contracting COVID during the Reo MED School exam', 
    'Drawing, piano, and writing', 
    'Honesty and integrity', 
    'Udemy, Coursera, and NVIDIA', 
    'Sfax', 
    'Enrolling in preparatory school for engineering', 
    'Blending traditional methods with quantum technology'
];


const question = document.querySelector('#ques');
const next = document.querySelector('#nxt');
const opt = document.querySelectorAll('.box2');
const tryAgainButton = document.querySelector('.btn');
const winMessage = document.querySelector('.win');
const congratulationsMessage = document.querySelector('.congratulations');
const quizBox = document.querySelector('.box');
let answersGiven = [];
let m = 0;


function displayQuestion() {
    question.innerHTML = ques[m].Q;
    opt.forEach((item, index) => {
        item.innerHTML = ques[m].options[index];
        item.parentElement.style.backgroundColor = 'gray'; 
    });

    next.style.display = 'none'; 
    winMessage.style.display = 'none'; 
    tryAgainButton.style.display = 'none'; 
}


next.addEventListener('click', () => {
    m += 1;
    if (m === ques.length) {
      
        quizBox.style.display = 'none'; 
        displayResults(); 
    } else {
        displayQuestion(); 
    }
});


tryAgainButton.addEventListener('click', () => {
    m = 0;
    answersGiven = [];
    quizBox.style.display = 'block'; 
    winMessage.style.display = 'none'; 
    tryAgainButton.style.display = 'none'; 
    displayQuestion(); 
});


opt.forEach(item => {
    item.addEventListener('click', (e) => {
        let value = e.target.innerText;
        answersGiven[m] = value; 
        next.style.display = 'flex'; 
    });
});

function displayResults() {
    let score = 0;
    let resultHTML = '<h2>Your Score:</h2><ul>';
    
    answersGiven.forEach((answer, index) => {
        if (answer === ans[index]) {
            score++;
            resultHTML += `<li><strong>Question ${index + 1}:</strong> Correct! - Your answer: ${answer}</li>`;
        } else {
            resultHTML += `<li><strong>Question ${index + 1}:</strong> Incorrect. The correct answer was: ${ans[index]}</li>`;
        }
    });
    
    resultHTML += `</ul><h3>Total Score: ${score} / ${ques.length}</h3>`;
    resultHTML += '<div class="balloons">🎈🎉 Congratulations! 🎉🎈</div>';
    congratulationsMessage.innerHTML = resultHTML;
    congratulationsMessage.style.display = 'block'; 
}


displayQuestion();



const text = `As an ambitious student in IT engineering, I am driven by a passion for exploring the cutting-edge intersections of technology and science. My primary focus lies in artificial intelligence and quantum physics—two transformative fields that hold the potential to revolutionize our understanding of both technology and the universe. I am deeply fascinated by "physique quantique," and I aspire to one day bridge the gap between quantum phenomena and its applications in information technology. Cybersecurity is another cornerstone of my objectives, as I aim to master protecting data and systems in a rapidly evolving digital landscape.

Beyond technical expertise, I am dedicated to personal growth, consistently seeking to learn, innovate, and adapt to new technologies. My long-term vision includes pursuing a doctorate to contribute groundbreaking research in my fields of interest, while also developing practical solutions that impact society positively. Moreover, I hope to share my knowledge with others through education and mentorship, inspiring future generations to explore the limitless possibilities of technology. My journey is fueled by curiosity, determination, and the desire to make a meaningful difference, both as an engineer and as a lifelong learner.`;

let index = 0;

function typeEffect() {
    const paragraph = document.getElementById('typing-effect');
    if (index < text.length) {
        paragraph.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50); 
    }
}

document.addEventListener('DOMContentLoaded', typeEffect);
