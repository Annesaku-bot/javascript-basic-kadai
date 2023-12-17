//jQuery 「load」「scroll」のイベント処理を使用して以下の文字列をコンソールに表示してください。
//HTMLドキュメントが読み込み完了したときに「loadイベントが発生しました」とコンソールに出力する

$(document).ready(function() {
  console.log("loadイベントが発生しました");
});

//画面をスクロールしたときに「scrollイベントが発生しました」とコンソールに出力する

$(window).scroll(function() {
  console.log("scrollイベントが発生しました");
});