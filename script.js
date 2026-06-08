function showLesson() {
    document.getElementById("lesson").style.display = "block";

    document.getElementById("lesson").scrollIntoView({
        behavior: "smooth"
    });
}

function loadHTML() {
    document.getElementById("codeBox").value =
`<h1>Hello World</h1>
<p>My first webpage.</p>`;
}

function runCode() {
    let code = document.getElementById("codeBox").value;
    document.getElementById("output").srcdoc = code;
}

function checkQuiz() {

    let answer = document.querySelector(
        'input[name="q1"]:checked'
    );

    if (!answer) {
        document.getElementById("result").innerHTML =
        "Please select an option.";
        return;
    }

    if (answer.value == "b") {
        document.getElementById("result").innerHTML =
        "✅ Correct!";
    } else {
        document.getElementById("result").innerHTML =
        "❌ Wrong! Try again.";
    }
}