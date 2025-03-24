$(function () {
  $('#change-color').on('click', function () {
    // クリックするとターゲット（文字色）がピンクに
    $('#target').css('color','pink');
  });
  $('#target').on('click', function () {
    $('#change-text').on('click', function() {
      // クリックするとターゲット（文字）がHelloに
      $('#target').text('Hello'); 
    });
  });

  // フェードアウト機能
  $('#fade-out').on('click', function() {
    $('#target').fadeOut();
  });
  // フェードイン機能
  $('#fade-in').on('click', function() {
    $('#target').fadeIn();
  });
});
