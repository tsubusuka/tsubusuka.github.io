document.getElementById('dateForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const dateInput = document.getElementById('dateInput').value;
    const formattedDate = dateInput.split('-').join('-');  // YYYY-MM-DD 形式
    const relativeUrl = `./diary/${formattedDate}.html`;
    
    fetch(relativeUrl)
        .then(response => {
            if (response.ok) {
                window.location.href = relativeUrl;
            } else {
                document.getElementById('message').textContent = "その日付の日記は存在しません";
            }
        })
        .catch(error => {
            console.error('Error fetching the diary page:', error);
            document.getElementById('message').textContent = "エラーが発生しました";
        });
});
