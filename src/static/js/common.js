$(document).ready(function(){
    $('.tooltip__delete').click(function(){
        $(this).parents('li').remove();
    });
});
