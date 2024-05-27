document.getElementById('commandForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const commandInput = document.getElementById('commandInput').value.trim();
    const messageElement = document.getElementById('message');
    let url = '';

    // 日付形式の正規表現 (YYYY/MM/DD)
    const datePattern = /^\d{4}\/\d{2}\/\d{2}$/;

    if (datePattern.test(commandInput)) {
        // 日付形式の場合
        const formattedDate = commandInput.split('/').join('-');  // YYYY-MM-DD 形式
        url = `/diary/${formattedDate}.html`;
    } else {
        // 特殊コマンドの場合
        url = `/special/${commandInput}.html`;
    }

    fetch(url)
        .then(response => {
            if (response.ok) {
                window.location.href = url;
            } else {
                messageElement.textContent = "指定された日付は存在しません";
            }
        })
        .catch(error => {
            console.error('Error fetching the page:', error);
            messageElement.textContent = "エラーが発生しますた";
        });
});
