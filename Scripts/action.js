$(function () {
    $('#commonHeader').load('https://MGNCapstone.github.io/Headers/CommonHeader.html', function () {
        alert('should have worked');
    });

    //Top Navigation for all pages
    //Top Navigation Element
    var navRoot = document.createElement("DIV");
    navRoot.className = "row no-padding top-nav text-left hide-horizontal-scroll";
    navRoot.styleSheets = "Content/padding.css";

    //Home Button
    var btn0Container = document.createElement("DIV");
    btn0Container.className = "col-md-4 col-sm-6 text-left margin-bottom-15";
    btn0Container.style = "overflow-x:hidden";

    var btn0 = document.createElement("a");
    btn0.href = '#';
    btn0.id = "showResume";
    btn0.className = "text-white font-18 top-nav-link";
    btn0.innerHTML = "Team MGN - Indiana University Southeast CS Capstone";
    btn0.onclick = function () { window.location.replace("Home.html"); };
    btn0Container.appendChild(btn0);
    
    //Show/Hide table body content
    $('.expando').click(function () {
        var bodyId = $(this).data('body');
        var thisId = $(this).data('element');
        var isVisible = $(this).data('bool');
        
        if (isVisible) {
            $('#' + bodyId).hide(500);
            $('#' + thisId).html('expand');
            $(this).data('bool', false);
        }
        else {
            $('#' + bodyId).show(500);
            $('#' + thisId).html('collapse');
            $(this).data('bool', true);
        }
    });
    
    $('.resume-click').click(function () {
        var resumeLocation = $(this).data('resume');
        $('#embed-resume').attr({ data: resumeLocation });
    });



});
