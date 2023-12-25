$(document).ready(function(){
  // 文字色変化ボタンがクリックされたときの処理
  $('#change-color').click(function(){
    // IDが'target'の要素の文字色を変更する
    $('#target').css('color', 'red'); // 例として赤色に変更
  });
  // 文字内容変化ボタンがクリックされたときの処理
　$('#change-text').click(function(){
  　// IDが'target'の要素のテキスト内容を変更する
  　$('#target').text('Hello!'); // 'こんにちは！'を'Hello!'に変更
　});
　// フェードアウトボタンがクリックされたときの処理
 $('#fade-out').click(function(){
  // IDが'target'の要素をフェードアウトする
   $('#target').fadeOut(1000); // デフォルトの速度でフェードアウト
 });
 　// フェードインボタンがクリックされたときの処理
 $('#fade-in').click(function(){
  // IDが'target'の要素をフェードいんする
   $('#target').fadeIn(1000); // デフォルトの速度でフェードin
 });
});