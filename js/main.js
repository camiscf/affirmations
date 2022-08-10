document.getElementById("fetch").addEventListener("click", fetchPhrase);

function fetchPhrase(){
    fetch('/affirmation_api/js/affirmations.txt')
        .then(response => response.text())
        .then(data => {
            const line = data.split('\n')[Math.floor(Math.random() * data.split('\n').length)];
            document.getElementById("affirmation").innerHTML = line;
        })

}