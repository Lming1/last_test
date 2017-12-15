console.log('my-note app.js');

// memo
$(function () {
    if(localStorage.getItem('note')) {
        $('#memo').val(localStorage.getItem('note'));
    }
});

// btn-newnote 적용
$(".btn-newnote").on("click", function(){
    window.localStorage.clear();
    location.reload();
    console.log("new note");
    return false;
});

$(".btn-download").on("click",function(){
  console.log("note download");
});

// savenote
$('.btn-savenote').click( function() {
    var note = $('#memo').val();
    localStorage.setItem('note', note);
    console.log("save note");
    return false;
});

// fullscreen
$(".btn-fullscreen").click(function () {
    console.log("fullscreen");
});
