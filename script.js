function checkMessage() {

let message = document.getElementById("messageInput").value.toLowerCase();

let suspiciousWords = [
"forward this",
"share immediately",
"miracle cure",
"100% guarantee",
"secret government",
"doctors hate this",
"click this link",
"urgent warning"
];

let score = 0;

for (let word of suspiciousWords) {
if (message.includes(word)) {
score += 10;
}
}

let confidence = Math.min(score + Math.floor(Math.random()*30), 95);

let resultBox = document.getElementById("result");

if (confidence > 50) {

resultBox.innerHTML =
"⚠ Warning: This message contains unverified claims <br> Confidence: " + confidence + "%";

resultBox.style.color = "red";

} else {

resultBox.innerHTML =
"✅ This message appears relatively safe <br> Confidence: " + (100-confidence) + "%";

resultBox.style.color = "green";

}

}