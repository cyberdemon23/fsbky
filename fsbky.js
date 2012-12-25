$(document).ready(function() {
    $('#headerDiv').load('Header.html');
    $('#navigationDiv').load('Navigation.html');
    $('#noticeDiv').load('Notice.html');
    if($("#tabs").length > 0){
        $( "#tabs" ).tabs();
    }
 });