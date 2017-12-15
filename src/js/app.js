console.log('my-note app.js');


// btn-newnote 적용

$(".btn-newnote").on("click", function(){
    console.log("new note");
    return false;
});

// savenote
$('.btn-savenote').click( function() {
    console.log("save note");
    return false;
});

// fullscreen
$(".btn-fullscreen").click(function () {
    console.log("fullscreen");
});
