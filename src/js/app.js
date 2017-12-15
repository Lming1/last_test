console.log('my-note app.js');
// var FileSaver = require('file-saver');

// memo
$(function () {
    if(localStorage.getItem('note')) {
        $('#memo').val(localStorage.getItem('note'));
    }
    //about note
    $('.btn-about').paulund_modal_box();
});

// btn-newnote 적용
$('.btn-newnote').on("click", function(){
    window.localStorage.clear();
    location.reload();
    console.log("new note");
    return false;
});

// download note
$('.btn-download').on("click",function(){
  console.log("note download");
  try {
        var b = new Blob([localStorage.getItem('note')],{type:"text/plain;charset=utf-8"});
        saveAs(b,"test.txt");
      }catch(e){
        window.open("data:"+"text/plain;charset=utf-8"+"," + encodeURIComponent(localStorage.getItem('note')), '_blank','');
      }
});

// savenote
$('.btn-savenote').click( function() {
    var note = $('#memo').val();
    localStorage.setItem('note', note);
    console.log("save note");
    return false;
});

// fullscreen
$('.btn-fullscreen').click(function () {
    console.log("fullscreen");
    if (screenfull.enabled) {
		screenfull.request();
	}
});
