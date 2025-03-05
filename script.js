document.getElementById('notifyBtn')?.addEventListener('click', () => {
    alert('You will be notified when the product is back in stock!');
});

// Fetch data from the backend
fetch("https://aec-ubbb.onrender.com/api/test")  // Use your Render backend URL
    .then(response => response.json())
    .then(data => {
        console.log("Response from backend:", data);
        document.getElementById('backendMessage').innerText = data.message;
    })
    .catch(error => console.error("Error fetching from backend:", error));
