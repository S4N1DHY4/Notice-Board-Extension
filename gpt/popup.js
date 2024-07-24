document.getElementById('send').addEventListener('click', async () => {
    const input = document.getElementById('input').value;
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = 'Loading...';

    const apiKey = 'your api key'; // Replace with your actual OpenAI API key

    if (!apiKey || apiKey.startsWith('sk-None')) {
        outputDiv.innerHTML = '<pre>Error: Invalid API key. Please replace "YOUR_OPENAI_API_KEY" with a valid OpenAI API key.</pre>';
        return;
    }

    try {
        const response = await fetch('https://api.openai.com/v1/embeddings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'text-embedding-ada-002',
                input: input
            })
        });

        if (response.ok) {
            const data = await response.json();
            const embedding = data.data[0].embedding;
            outputDiv.innerHTML = `<pre>${JSON.stringify(embedding, null, 2)}</pre>`;
        } else {
            const error = await response.json();
            outputDiv.innerHTML = `<pre>Error: ${JSON.stringify(error, null, 2)}</pre>`;
        }
    } catch (error) {
        outputDiv.innerHTML = `<pre>Error: ${error.message}</pre>`;
    }
});
