const api_url = "https://api.quotable.io/random";

async function getRandomQuote() {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
    displayQuote(data);
}

function displayQuote(quoteData) {
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');

    quoteElement.textContent = quoteData.content;
    authorElement.textContent = `- ${quoteData.author}`;
}

document.getElementById('new-quote').addEventListener('click', getRandomQuote);

// Fetch a quote when the page loads
getRandomQuote();
