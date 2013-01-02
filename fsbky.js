$(document).ready(function() {
    $('#headerDiv').load('Header.html');
    $('#navigationDiv').load('Navigation.html', function() {
        setSelectedNavItem();;
      });
    $('#noticeDiv').load('Notice.html');
    if($("#tabs").length > 0){
        $( "#tabs" ).tabs();
    }
 });

function setSelectedNavItem(){
    if(document.URL.indexOf("index.html") > -1){
        $('#navHome').addClass('selectedNavItem');
    }
    else if(document.URL.indexOf("Products.html") > -1){
        $('#navProducts').addClass('selectedNavItem');
    }
    else if(document.URL.indexOf("CurrentLocations.html") > -1){
        $('#navLocations').addClass('selectedNavItem');
    }
    else if(document.URL.indexOf("PrivacyPolicy.html") > -1){
        $('#navPrivacy').addClass('selectedNavItem');
    }
    else if(document.URL.indexOf("Help.html") > -1){
        $('#navHelp').addClass('selectedNavItem');
    }
    else if(document.URL.indexOf("Leadership.html") > -1){
        $('#navLeadership').addClass('selectedNavItem');
    }
    else if(document.URL.indexOf("DialABank.html") > -1){
        $('#navDial').addClass('selectedNavItem');
    }
    else if(document.URL.indexOf("Holidays.html") > -1){
        $('#navHolidays').addClass('selectedNavItem');
    }
    else if(document.URL.indexOf("Specials.html") > -1){
        $('#navSpecials').addClass('selectedNavItem');
    }
    else{
           $('#navHome').addClass('selectedNavItem');
    }

}