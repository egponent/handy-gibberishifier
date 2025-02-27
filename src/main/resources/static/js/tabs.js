// Show the Encrypt tab by default when page loads
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.tablinks').click();
});

function openTab(evt, tabName) {
    // Hide all tab content
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove active class from all tab buttons
    let tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the selected tab and mark it as active
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}