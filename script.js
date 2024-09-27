document.getElementById('submitVerse').addEventListener('click', function() {
    const verseInput = document.getElementById('verseInput').value;
    document.getElementById('displayVerse').innerText = verseInput;
    document.getElementById('verseInput').value = ''; // Clear input after submission
});
