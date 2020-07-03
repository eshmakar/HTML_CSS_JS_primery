jQuery('document').ready(function () {
    // jQuery('div').remove(); /*удаление данных div*/
    // jQuery('body').append('<a href="google.com">Гугл</a>');
    // var p_clon = jQuery('body').clone(); jQuery('body').append(p_clon); /*клонирует и вставляет*/

    // alert(Math.floor(Math.random() * (89518944994 - 89179320074)) + 89179320074);
    // $('body').append(Math.floor(Math.random() * (89518944994 - 89179320074)) + 89179320074);
    // $('body').append('</br>');
    // $('body').append(Math.floor(Math.random() * (89518944994 - 89179320074)) + 89179320074);
    // $('body').append('</br>');
    // $('body').append('</br>');
    //

  /*  for (var i = 5; i > 0; i--) {
        alert('Чтобы продолжить, нажите еще ' + i + ' раз на кнопку ОК');
    }*/


  $('input').on('keyup', function () {
        var value1, value2;
        value1 =$('#val1').val();
        value2 = $('#val2').val();
        value3 = value1**value2;
       // alert("Результат: "+ value3);
       $('#znachenie').html(value3);/!* выводит сразу внизу результат*!/
    });


});
