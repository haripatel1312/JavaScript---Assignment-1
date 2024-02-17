const wordsArray1 = ['Adventure', 'Mystery', 'Fantasy', 'Sci-Fi', 'Romance'];
const wordsArray2 = ['brave hero', 'clever detective', 'magical creature', 'space explorer', 'loving couple'];
const wordsArray3 = ['discovered', 'solved', 'encountered', 'explored', 'celebrated'];
const wordsArray4 = ['ancient artifact', 'hidden treasure', 'alien planet', 'enchanted forest', 'true love'];
const wordsArray5 = ['with courage', 'with wit', 'with magic', 'among the stars', 'happily ever after'];

let choices = ['', '', '', '', ''];

function showChoices() {
    document.getElementById('btn1').textContent = choices[0] || 'Word/Phrase 1';
    document.getElementById('btn2').textContent = choices[1] || 'Word/Phrase 2';
    document.getElementById('btn3').textContent = choices[2] || 'Word/Phrase 3';
    document.getElementById('btn4').textContent = choices[3] || 'Word/Phrase 4';
    document.getElementById('btn5').textContent = choices[4] || 'Word/Phrase 5';
}

function generateStory() {
    const story = choices.join(' ');
    document.getElementById('storyOutput').textContent = `Once upon a time, ${story}.`;
}

    document.getElementById('btn1').addEventListener('click', function () {
    choices[0] = wordsArray1[Math.floor(Math.random() * wordsArray1.length)];
    showChoices();
});

    document.getElementById('btn2').addEventListener('click', function () {
        choices[1] = wordsArray2[Math.floor(Math.random() * wordsArray2.length)];
        showChoices();
    });

    document.getElementById('btn3').addEventListener('click', function () {
        choices[2] = wordsArray3[Math.floor(Math.random() * wordsArray3.length)];
        showChoices();
    });

    document.getElementById('btn4').addEventListener('click', function () {
        choices[3] = wordsArray4[Math.floor(Math.random() * wordsArray4.length)];
        showChoices();
    });

    document.getElementById('btn5').addEventListener('click', function () {
        choices[4] = wordsArray5[Math.floor(Math.random() * wordsArray5.length)];
        showChoices();
    });

    document.getElementById('btnGenerate').addEventListener('click', generateStory);