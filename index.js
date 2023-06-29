let currentQues=0;
let score=0;
let highscore=0;
let userName="";
const scores=[];
let x;

let selectedOption="";

//start quiz
document.getElementById("start-btn").addEventListener("click",startQuiz);

function startQuiz()
{
    userName=prompt("Enter username:");
    if(userName)
    {   document.getElementById("username").innerText=userName;
    document.getElementById("quiz-container").style.display="block";
    document.getElementById("start-page").style.display="none";
    loadQuestion();
    }

    
    else{
        alert("Please enter username!");
    }

}


function loadQuestion()
{
    const questionObj=quizData[currentQues];
    document.getElementById("question").innerText=questionObj.question;
    for(let i=0;i<4;i++)
    {   
        const btn=document.getElementById("btn"+i);
        btn.style.background="transparent";
        btn.innerText=questionObj.options[i];
        btn.disabled=false;
        btn.style.opacity=1;
        btn.style.cursor="default";
    }
    document.getElementById("message").innerText="";
    document.getElementById("next-btn").style.display="none";
}
// async function loadQuizData()//async allows us to fetch data from json
// {
//     const res= await fetch("quizData.json");//await for waiting to load data from json
//     console.log("loading");
//     quizData=await res.json();
//     loadQuestion();
// }
//(is this func will work ie json then in startQuiz() loadQuizData will come instead of loadQuestion)



//for options click

for(let i=0;i<4;i++)
{
    document.getElementById("btn"+i).addEventListener("click",function(event){
        selectedOption=event.target;

    if(quizData[currentQues].answer==selectedOption.innerText)
    {
        console.log("correct");
        score++;
        document.getElementById("score").innerText=score;
        selectedOption.className="option-btn correct";
        document.getElementById("message").innerText="Correct Answer !";
    }
    else {
        console.log("incorrect");
        selectedOption.className="option-btn wrong";
        document.getElementById("message").innerText="Wrong Answer !";}

    for(let j=0;j<4;j++)
    {
        document.getElementById("btn"+j).disabled=true; //so we can cant on any other button
        document.getElementById("btn"+j).style.opacity=0.5;
        document.getElementById("btn"+j).style.cursor="not-allowed";
    }
    selectedOption.style.opacity=1;
    document.getElementById("next-btn").style.display="block";
    x=i;
    // document.getElementById("next-btn").addEventListener("click",function(){

    // });



});

}

//next ques
document.getElementById("next-btn").addEventListener("click",function(){
    document.getElementById("btn"+x).classList.remove("wrong");
    document.getElementById("btn"+x).classList.remove("correct");


    currentQues++;
    if(currentQues<quizData.length){
        //next ques
        loadQuestion();
        const progress=(currentQues/quizData.length)*100;
        document.getElementById("progress-bar-text").innerText=Math.round(progress)+"%";
        console.log('${progress}%');
        document.getElementById("progress-bar-fill").style.width=(progress+"%");
    }
    else{

        //end quiz
        endQuiz();
    }
});

function endQuiz()
{
    document.getElementById("quiz-container").style.display="none";
    document.getElementById("score-container").style.display="block";
    document.getElementById("score-text").innerText=score;

       //const scores=localStorage.getItem("scores")
    //    highscores.push({username:userName,
    //     score:score,
    //     date: new Date().toISOString()
    // })
    // highScores.push({
    //     username: userName,
    //     score: score,
    //     date: new Date().toISOString(),
    //   });
    //   highScores.sort((a, b) => new Date(b.date) - new Date(a.date));
    //   localStorage.setItem("highScores", highScores);
      

    currentQues=0;
    selectedOption="";
    if(score>highscore){
        highscore=score;

    }
    
    score=0;
    const progress=(currentQues/quizData.length)*100;
    document.getElementById("progress-bar-text").innerText=Math.round(progress)+"%";
    console.log('${progress}%');
    document.getElementById("progress-bar-fill").style.width=(progress+"%");

 
    
}

document.getElementById("restart-btn").addEventListener("click",function(){
    document.getElementById("score").innerText=score;
    document.getElementById("score-container").style.display="none";
    document.getElementById("start-page").style.display="block";

});

document.getElementById("highscore-btn").addEventListener("click",function(){
    document.getElementById("highscore-page").style.display="block";
    document.getElementById("start-page").style.display="none";
    document.getElementById("highscores").innerText= highscore;
    // .map(
    //   (item) =>
    //     `<p>${item.username}: ${item.score} (on ${new Date(
    //       item.date
    //     ).toLocaleDateString()} at ${new Date(
    //       item.date
    //     ).toLocaleTimeString()})</p>`
    // )
    //.join("");
    // document.getElementById("highscores").innerHTML = highScores
    // .map(
    //   (item) =>
    //     `<p>${item.username}: ${item.score} (on ${new Date(
    //       item.date
    //     ).toLocaleDateString()} at ${new Date(
    //       item.date
    //     ).toLocaleTimeString()})</p>`
    // )
    // .join("");
        

});

document.getElementById("restart-btn-2").addEventListener("click",function(){
   
    document.getElementById("highscore-page").style.display="none";
    document.getElementById("start-page").style.display="block";


});

let quizData=[
    {
      "question": "Who invented the theory of relativity?",
      "options": ["Isaac Newton","Albert Einstein","Galileo Galilei","Nikola Tesla"],
      "answer": "Albert Einstein"
    },
    {
      "question": "What is the largest continent in the world?",
      "options": ["Africa","Europe","Asia","North America"],
      "answer": "Asia"
    },
    {
      "question": "Who painted the Mona Lisa?",
      "options": [
        "Vincent van Gogh",
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Salvador Dalí"
      ],
      "answer": "Leonardo da Vinci"
    },
    {
      "question": "What is the chemical symbol for gold?",
      "options": [
        "Go",
        "Au",
        "Ag",
        "Fe"
      ],
      "answer": "Au"
    },
    {
      "question": "Which country is famous for the Taj Mahal?",
      "options": [
        "India",
        "China",
        "Egypt",
        "Brazil"
      ],
      "answer": "India"
    },
    {
      "question": "Who is the author of the Harry Potter book series?",
      "options": [
        "J.R.R. Tolkien",
        "J.K. Rowling",
        "George R.R. Martin",
        "Stephen King"
      ],
      "answer": "J.K. Rowling"
    },
    {
      "question": "What is the currency of Japan?",
      "options": [
        "Yen",
        "Euro",
        "Dollar",
        "Pound"
      ],
      "answer": "Yen"
    },
    {
      "question": "Who painted the Sistine Chapel ceiling?",
      "options": [
        "Michelangelo",
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Vincent van Gogh"
      ],
      "answer": "Michelangelo"
    },
    {
      "question": "What is the largest desert in the world?",
      "options": [
        "Sahara Desert",
        "Gobi Desert",
        "Kalahari Desert",
        "Atacama Desert"
      ],
      "answer": "Sahara Desert"
    },
    {
      "question": "Who is known as the \"Father of Computer Science\"?",
      "options": ["Alan Turing","Steve Jobs","Bill Gates","Tim Berners-Lee"],
      "answer": "Alan Turing"
    },
    {
      "question": "Who invented the telephone?",
      "options": ["Thomas Edison","Alexander Graham Bell","Albert Einstein","Nikola Tesla"],
      "answer": "Alexander Graham Bell"
    },
    {
      "question": "What year was the first iPhone released?",
      "options": ["2005", "2007", "2008", "2010"],
      "answer": "2007"
    },
    {
      "question": "What is the capital of Spain?",
      "options": ["Barcelona", "Madrid", "Valencia", "Seville"],
      "answer": "Madrid"
    },
    {
      "question": "Which planet is known as the Red Planet?",
      "options": ["Mars", "Mercury", "Venus", "Jupiter"],
      "answer": "Mars"
    },
    {
      "question": "What is the tallest mountain in the world?",
      "options": ["K2", "Mount Everest", "Kilimanjaro", "Mount Fuji"],
      "answer": "Mount Everest"
    },
    {
      "question": "What is the largest ocean on Earth?",
      "options": [
        "Atlantic Ocean",
        "Indian Ocean",
        "Arctic Ocean",
        "Pacific Ocean"
      ],
      "answer": "Pacific Ocean"
    },
    {
      "question": "What is the largest mammal in the world?",
      "options": ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
      "answer": "Blue Whale"
    },
    {
      "question": "Which country is home to the kangaroo?",
      "options": ["New Zealand", "South Africa", "Australia", "Canada"],
      "answer": "Australia"
    },
    {
      "question": "Which chemical element has the symbol 'O'?",
      "options": ["Oxygen", "Osmium", "Oganesson", "Oxalate"],
      "answer": "Oxygen"
    },
    {
      "question": "What is the capital of Australia?",
      "options": ["Sydney", "Melbourne", "Perth", "Canberra"],
      "answer": "Canberra"
    },
    {
      "question": "Who wrote the novel 'Moby-Dick'?",
      "options": [
        "Herman Melville",
        "Mark Twain",
        "Ernest Hemingway",
        "Charles Dickens"
      ],
      "answer": "Herman Melville"
    },
    {
      "question": "Who was the first man to walk on the moon?",
      "options": [
        "Buzz Aldrin",
        "Neil Armstrong",
        "Michael Collins",
        "Yuri Gagarin"
      ],
      "answer": "Neil Armstrong"
    },
    {
      "question": "In which year did World War II end?",
      "options": ["1942", "1945", "1948", "1950"],
      "answer": "1945"
    },
    {
      "question": "What is the square root of 144?",
      "options": ["12", "14", "16", "18"],
      "answer": "12"
    },
    {
      "question": "Which is the highest waterfall in the world?",
      "options": [
        "Niagara Falls",
        "Victoria Falls",
        "Angel Falls",
        "Iguazu Falls"
      ],
      "answer": "Angel Falls"
    }
  ];