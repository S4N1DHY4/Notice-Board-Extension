var widgetids=["notice","timer","form","excel","calendar","music","quote","announce"] //add widget id after adding new widget

function showWidget(showid, ids) {
    for (var i=0; i<ids.length; i++) {
        document.getElementById(ids[i]).style.display = 'none';
    }
    document.getElementById(showid).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    var timerlink = document.getElementById('timerlink');
    timerlink.addEventListener('click', function() {
        showWidget('timer',widgetids);
        return false;
    });

    var formlink = document.getElementById('formlink');
    formlink.addEventListener('click', function() {
        showWidget('form',widgetids);
        return false;
    });

    var excellink = document.getElementById('excellink');
    excellink.addEventListener('click', function() {
        showWidget('excel',widgetids);
        return false;
    });

    var homelink = document.getElementById('homelink');
    homelink.addEventListener('click', function() {
        showWidget('notice',widgetids);
        return false;
    });

    var calendarlink = document.getElementById('calendarlink');
    calendarlink.addEventListener('click', function() {
        showWidget('calendar',widgetids);
        return false;
    });

    var musiclink = document.getElementById('musiclink');
    musiclink.addEventListener('click', function() {
        showWidget('music',widgetids);
        return false;
    });

    var musiclink = document.getElementById('quotelink');
    musiclink.addEventListener('click', function() {
        showWidget('quote',widgetids);
        return false;
    });

    var announcelink = document.getElementById('announcelink');
    announcelink.addEventListener('click', function() {
        showWidget('announce',widgetids);
        return false;
    });

});