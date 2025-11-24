let table = 0;
let currentIndex = 0;
let questions = [];
let correct = 0;
let total = 0;

function startLearning() {
    table = parseInt(document.getElementById("tableInput").value);
    if (!table) {
        alert("Bạn chưa nhập bảng cửu chương!");
        return;
    }

    questions = [];
    for (let i = 1; i <= 9; i++) questions.push(`${table} x ${i}`);
    
    currentIndex = 0;
    showFlashcard();
    document.getElementById("learningButtons").classList.remove("hidden");
}

function showFlashcard() {
    document.getElementById("flashcard").classList.remove("hidden");
    document.getElementById("flashcard").innerText = questions[currentIndex];
}

function showAnswer() {
    const q = questions[currentIndex];
    const parts = q.split(" x ");
    document.getElementById("flashcard").innerText = q + " = " + (parts[0] * parts[1]);
}

function nextQuestion() {
    currentIndex++;
    if (currentIndex >= questions.length) currentIndex = 0;
    showFlashcard();
}

function startTest() {
    table = parseInt(document.getElementById("tableInput").value);
    if (!table) {
        alert("Bạn chưa nhập bảng cửu chương!");
        return;
    }

    questions = [];
    for (let i = 1; i <= 9; i++) questions.push(`${table} x ${i}`);
    questions.sort(() => Math.random() - 0.5);

    currentIndex = 0;
    correct = 0;
    total = 0;

    document.getElementById("testSection").classList.remove("hidden");
    showFlashcard();
}

function checkAnswer() {
    const q = questions[currentIndex];
    const parts = q.split(" x ");
    const answer = parts[0] * parts[1];
    const userAnswer = parseInt(document.getElementById("answerInput").value);

    total++;
    if (userAnswer === answer) correct++;

    currentIndex++;
    if (currentIndex >= questions.length) {
        finishTest();
        return;
    }

    showFlashcard();
    document.getElementById("answerInput").value = "";
}

function finishTest() {
    document.getElementById("resultBox").classList.remove("hidden");
    document.getElementById("resultBox").innerText =
        `Bạn trả lời đúng ${correct}/${total} câu`;

    document.getElementById("testSection").classList.add("hidden");
}
