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

    ////Resume Button
    //var btn1Container = document.createElement("DIV");
    //btn1Container.className = "col-md-2 col-sm-4 text-left margin-bottom-15";

    //var btn1 = document.createElement("a");
    //btn1.href = '#';
    //btn1.id = "showResume";
    //btn1.className = "text-white font-18 top-nav-link";
    //btn1.innerHTML = "View Resumes";
    //btn1.onclick = function () { window.location.replace("Resumes.html"); };
    //btn1Container.appendChild(btn1);

    ////Developer Crew Button
    //var btn2Container = document.createElement("DIV");
    //btn2Container.className = "col-md-2 col-sm-4 text-left margin-bottom-15";

    //var btn2 = document.createElement("a");
    //btn2.href = "#"
    //btn2.id = 'meetTheDevelopers';
    //btn2.className = "text-white font-18 top-nav-link";
    //btn2.innerHTML = "Team Members";
    //btn2.onclick = function () { window.location.replace("DeveloperCrew.html"); };
    //btn2Container.appendChild(btn2);

    navRoot.appendChild(btn0Container);
    //navRoot.appendChild(btn1Container);
    //navRoot.appendChild(btn2Container);

    //document.body.prepend(btn0Container);
    
    ////THIS IS NOT CURRENTLY NEEDED BUT LEFT FOR POSSIBLE FUTURE REF
    //On document load, add click function to 'resume-click' class elements 
    //use this to get data-resume value, which is the directory to the clicked for resume
    $('.resume-click').click(function () {
        var resumeLocation = $(this).data('resume');
        $('#embed-resume').attr({ data: resumeLocation });
    });



});
