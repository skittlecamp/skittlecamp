(function(){
  var words = ['Кровь', 'Брат', 'Умри', 'Отец', 'Друзья', 'Трахай', 'Сайт', 'Девушка', 'Ствол', 'Голова', 'Дом', 'Охота', 'Безумие', 'Джунгли', 'Убивай', 'Соси', 'Зачем', 'Смотри', 'Теряй', 'Человек', 'Мама', 'Беги'], i = 0;
  setInterval(function(){
    $('#changerificwordspanid').fadeOut(function(){
      $(this).html(words[i=(i+1)%words.length]).fadeIn();
    });
  }, 1000);

})();