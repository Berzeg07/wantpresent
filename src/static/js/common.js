$(document).ready(function(){
    $('.tooltip__delete').click(function(){
        $(this).parents('li').remove();
    });
    $(".inp_phone").mask("+7(999)999-99-99");
});
