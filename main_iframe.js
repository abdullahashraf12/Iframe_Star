$(document).ready(function () {
    $(".popup").hide();
    $(".openpop").mouseenter(function (e) {
        	$("#iframe_id").show();

        e.preventDefault();
        $("iframe").attr("src", $(this).attr('href'));
        $(".links").fadeOut('slow');
        $(".popup").fadeIn('slow');
    });

    $("#iframe_id").mouseleave(function () {
        $(".popup").fadeOut('slow');
        $(".links").fadeIn('slow');

            
    });
});
