$(function () {
    $('#commonHeader').load('https://MGNCapstone.github.io/Headers/CommonHeader.html', function () {
        alert('should have worked');
    });

    //Top Navigation for all pages
    //Top Navigation Element
    var navRoot = document.createElement("DIV");
    navRoot.className = "row top-nav text-left pad-top-20";
    navRoot.styleSheets = "Content/padding.css";

    //Home Button
    var btn0Container = document.createElement("DIV");
    btn0Container.className = "col-md-2 col-sm-4 text-left margin-bottom-15";

    var btn0 = document.createElement("a");
    btn0.href = '#';
    btn0.id = "showResume";
    btn0.className = "text-white font-18 top-nav-link";
    btn0.innerHTML = "MGN Team";
    btn0.onclick = function () { window.location.replace("Home.html"); };
    btn0Container.appendChild(btn0);

    //Resume Button
    var btn1Container = document.createElement("DIV");
    btn1Container.className = "col-md-2 col-sm-4 text-left margin-bottom-15";

    var btn1 = document.createElement("a");
    btn1.href = '#';
    btn1.id = "showResume";
    btn1.className = "text-white font-18 top-nav-link";
    btn1.innerHTML = "View Resumes";
    btn1.onclick = function () { window.location.replace("Resumes.html"); };
    btn1Container.appendChild(btn1);

    //Developer Crew Button
    var btn2Container = document.createElement("DIV");
    btn2Container.className = "col-md-2 col-sm-4 text-left margin-bottom-15";

    var btn2 = document.createElement("a");
    btn2.href = "#"
    btn2.id = 'meetTheDevelopers';
    btn2.className = "text-white font-18 top-nav-link";
    btn2.innerHTML = "Team Members";
    btn2.onclick = function () { window.location.replace("DeveloperCrew.html"); };
    btn2Container.appendChild(btn2);

    navRoot.appendChild(btn0Container);
    navRoot.appendChild(btn1Container);
    navRoot.appendChild(btn2Container);

    var topNav = document.getElementsByClassName("topNav");
    document.body.prepend(navRoot);

    //On document load, add click function to 'resume-click' class elements 
    //use this to get data-resume value, which is the directory to the clicked for resume
    $('.resume-click').click(function () {
        var resumeLocation = $(this).data('resume');
        $('#embed-resume').attr({ data: resumeLocation });
    });



});
