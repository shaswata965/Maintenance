$("input:checkbox").on('click',function(){
    let selector = $(this).val();
    setTimeout(function ()
    {
        $('.'+selector).toggleClass('show');
    },500);
});

