$.getJSON("http://data.ny.gov/resource/s22a-k4ev.json", function (data) {
    console.log(data);
    $(data).each(function (i, d) {
        $("#textResults").append(d.county + "<div class = 'crappyBar' style = 'width:" + d.count_state + "px;'></div><br/>");
    });
    
    $(".crappyBar").hover(function () {
        $(this).css("background", "#FF3399");
        $("#flyout").text("Total Projects: " + $(this).css("width"));
        $("#flyout").css("left", parseInt($(this).css("left")) + parseInt($(this).css("width")) + "px");
    }, function(){
        $(this).css("background", "#29A3A3");
        $("#flyout").text("");
    });

});