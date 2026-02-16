document.getElementById("test-form").addEventListener("submit", function (e) {
    e.preventDefault();

    let totalScore = 0;

    for (let i = 1; i <= 7; i++) {
        let selected = document.querySelector(`input[name="q${i}"]:checked`);
        const message = document.getElementById("message");

        if (!selected) {
            message.textContent = "Please answer all questions before submitting.";
            message.style.color = "red";
            return;
        }
        totalScore += parseInt(selected.value);
    }

    localStorage.setItem("test-score", totalScore); 
    window.location.href = "result-page.html";

});
