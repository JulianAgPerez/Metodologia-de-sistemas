document.addEventListener("DOMContentLoaded", function() {
    loadSidebar("sidebar.html", "sidebarContainer");
});

function loadSidebar(url, elementId) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById(elementId).innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}
