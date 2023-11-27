// btnというidを持つHTML要素を取得し、定数に代入する
const addBtn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
addBtn.addEventListener('click', () => {
  document.getElementById('text').innerText = 'ボタンをクリックしました';
});