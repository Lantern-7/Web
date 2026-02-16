        const score = parseInt(localStorage.getItem("test-score"));
        const maxScore = 14;
        const percentage = Math.round((score / maxScore) * 100);

        const resultText = document.getElementById("resultText");
        const percentageText = document.getElementById("percentageText");
        const resultImage = document.getElementById("resultImage");

        percentageText.textContent = "Human Score: " + percentage + "%";

        if (percentage >= 70) {
            resultText.textContent = "You are Human! ✅";
            resultText.style.color = "green";
            resultImage.src = "human.jpg";
        } 
        else if (percentage >= 40) {
            resultText.textContent = "You are a Human – Robot Hybrid!";
            resultText.style.color = "orange";
            resultImage.src = "hybrid.jpg";
        } 
        else {
            resultText.textContent = "Robot detected! ❌";
            resultText.style.color = "red";
            resultImage.src = "robot-2.jpg";
        }    


        function goBack() {
    window.location.href = "Test-page.html"; 
}


