const apiKey = 'your-api-key-here'; // Replace with your actual API key
const apiUrl = 'https://api.example.com/data'; // Replace with the actual API URL

const params = new URLSearchParams({
    query: 'example', // Replace with actual query parameters
    limit: 10,
    sort: 'desc',
}).toString();

fetch(`${apiUrl}?${params}`, {
    method: 'GET', // Change to 'POST', 'PUT', 'DELETE' as needed
    headers: {
        'Authorization': `Bearer ${apiKey}`, // Some APIs use `Bearer`, others might use `x-api-key`
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Fetch error:', error));