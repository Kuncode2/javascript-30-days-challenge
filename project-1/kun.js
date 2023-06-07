// const questions = [
//     {
//         question: "which is larget animal in the world?" ,
//         answers: [
//             {text: "shark" , correct: false},
//             {text: "Blue whale" , correct: true},
//             {text: "Elephant" , correct: false},
//             {text: "Giraffe" , correct: false}  
//         ]
//     },
//     {
        
//             question: "Which planet is known as the 'Red Planet'?",
//             answers: [
//                 {"text": "Mars", "correct": true},
//                 {"text": "Jupiter", "correct": false},
//                 {"text": "Venus", "correct": false},
//                 {"text": "Saturn", "correct": false}
//          ]   
//     },
//     {
//         question: "Who painted the Mona Lisa?",
//         answers: [
//             {"text": "Leonardo da Vinci", "correct": true},
//             {"text": "Pablo Picasso", "correct": false},
//             {"text": "Vincent van Gogh", "correct": false},
//             {"text": "Michelangelo", "correct": false}
//         ]
//     },
    
//     {
//         question: "Which country is known for the Taj Mahal?",
//         answers: [
//             {"text": "India", "correct": true},
//             {"text": "China", "correct": false},
//             {"text": "Egypt", "correct": false},
//             {"text": "Italy", "correct": false}
//         ]
//     }
    
// ];

// const questionElement = document.getElementById("question");
// const answerButtons = document.getElementById("answer-buttons");
// const nextButton = document.getElementById("next-btn");

// let currentQuestionIndex = 0;

// function startQuiz(){
//     resetstate()
//     currentQuestionIndex=0;
//     score=0;
//     nextButton.innerHTML = "Next";
//     showQuestion();
// }

// function showQuestion(){
//     let currentQuestion = questions[currentQuestionIndex];
//     let questionNo = currentQuestionIndex + 1; 
//     questionElement.innerHTML = questionNo + ". " +currentQuestion.question;

//     currentQuestion.answers.forEach(answer =>{
//         const button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("btn");
//         answerButtons.appendChild(button);
//         if(answer.correct){
//             button.dataset.correct = answer.correct
//         }
//         button.addEventListener("click",selectAnswer);
//     });
// }
// function resetstate(){
//     nextButton.style.display = 'none';
//     while(answerButtons.firstChild){
//         answerButtons.removeChild(answerButtons.firstChild);
//     }
// }
// function selectAnswer(e){
//     const selectedBtn = e.target;
//     const isCorrect = selectedBtn.dataset.correct === "true";
//     if(isCorrect){
//         selectedBtn.classList.add("correct");
//         score++;
//     }else{
//         selectedBtn.classList.add("incorrect");
//     }
//     Array.from(answerButtons.children).forEach(button =>{
//         if(button.dataset.correct === "true"){
//             button.classList.add("correct");
//         }
//         button.disabled = true;
//     })
//     nextButton.style.display = "block";
// }

// function showScore(){
//     resetstate();
//     questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
//     nextButton.innerHTML = "Play again";
//     nextButton.style.display = "block";
// }
// function handleNextButton(){
//     currentQuestionIndex++;
//     if(currentQuestionIndex < questions.length){
//         showQuestion();
//     } else{
//         showScore();
//     }
// }

// nextButton.addEventListener("click",() =>{
//     if(currentQuestionIndex < questions.length){
//         handleNextButton();
//     }else{
//         startQuiz();
//     }

// })
// startQuiz();