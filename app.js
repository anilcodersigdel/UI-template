 // JavaScript to adjust the height of the dotted line
 function adjustLineHeight() {
    var bodyContent = document.querySelector('.body-content');
    var dottedLine = document.querySelector('.dotted-line');
    var contentHeight = bodyContent.offsetHeight; // Get height of content
    dottedLine.style.height = contentHeight + 'px'; // Set line height to content height
}

// Call the function initially and on window resize
adjustLineHeight();
window.addEventListener('resize', adjustLineHeight);