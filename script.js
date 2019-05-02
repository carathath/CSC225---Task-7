$('.button').on("click", function(){
    var input = $('#input').val();
    if(!input){
        alert("Don't try an be sneaky...")
        return;
    }

    $("div#tasks").append('<p>'+ input +'</p>');
})