$(".add-tag").click(function () {

    if($(this).hasClass('fa-circle-plus')) {
        $(this).removeClass('fa-circle-plus');
        $(this).addClass('fa-circle-minus');
    } else {
        $(this).removeClass('fa-circle-minus');
        $(this).addClass('fa-circle-plus');
    }
    
})