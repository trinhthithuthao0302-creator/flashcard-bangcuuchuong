let table = 0;
let currentIndex = 0;
let questions = [];
let correct = 0;
let total = 0;

function hideAllSections() {
    document.getElementById("flashcard").classList.add("hidden");
    document.getElementById("learningButtons").classList.add("hidden");
    document.getElementById("testSection").classList.add("hidden");
    document.getElementById("resultBox").classList.add("hidden");
}

function startLearning() {
    table = parseInt(document.getElementById("tableInput").value);
    if (!table) {
        alert("Bạn chưa nhập bảng cửu chương!");
        return;
    }

    hideAllSections(); // Ẩn mọi khu vực không liên quan

    questions = [];
    for (let i = 1; i <= 9; i++) questions.push(`${table} x ${i}`);

    currentIndex = 0;

    document.getElementById("flashcard").classList.remove("hidden");
    document.getElementById("learningButtons").classList.remove("hidden");

    showFlashcardLearning();
}

function showFlashcardLearning() {
    document.getElementById("flashcard").innerText = questions[currentIndex];
}

function showAnswer() {
    const q = questions[currentIndex];
    const parts = q.split(" x ");
    document.getElementById("flashcard").innerText =
        q + " = " + (parts[0] * parts[1]);
}

function nextQuestion() {
    currentIndex++;
    if (currentIndex >= questions.length) currentIndex = 0;
    showFlashcardLearning();
}

function startTest() {
    table = parseInt(document.getElementById("tableInput").value);

    if (!table) {
        alert("Bạn chưa nhập bảng cửu chương!");
        return;
    }

    hideAllSections();  
    document.getElementById("resultBox").innerText = ""; // Xóa kết quả cũ

    questions = [];
    for (let i = 1; i <= 9; i++) questions.push(`${table} x ${i}`);
    questions.sort(() => Math.random() - 0.5); // xáo trộn

    currentIndex = 0;
    correct = 0;
    total = 0;

    document.getElementById("testSection").classList.remove("hidden");
    showFlashcardTest();
}

function showFlashcardTest() {
    document.getElementById("flashcard").classList.remove("hidden");
    document.getElementById("flashcard").innerText = questions[currentIndex];
}

function checkAnswer() {
    const q = questions[currentIndex];
    const parts = q.split(" x ");
    const answer = parts[0] * parts[1];
    const userAnswer = parseInt(document.getElementById("answerInput").value);

    total++;
    if (userAnswer === answer) correct++;

    currentIndex++;
    document.getElementById("answerInput").value = "";

    if (currentIndex >= questions.length) {
        finishTest();
        return;
    }

    showFlashcardTest();
}

function finishTest() {
    document.getElementById("resultBox").classList.remove("hidden");
    document.getElementById("resultBox").innerText =
        `Bạn trả lời đúng ${correct}/${total} câu`;

    document.getElementById("testSection").classList.add("hidden");
}

