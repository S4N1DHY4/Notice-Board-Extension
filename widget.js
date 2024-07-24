var widgetids=["notice","timer","form","excel"] //add widget id after adding new widget

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

});