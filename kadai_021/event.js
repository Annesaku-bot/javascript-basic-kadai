const addBtn = document.getElementById('btn');

addBtn.addEventListener('click', () => {
    setTimeout(() => {
        document.getElementById('text').textContent = 'ボタンをクリックしました';
    }, 2000); 
});