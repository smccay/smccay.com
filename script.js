document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById("searchBar");
    const cursorSpan = document.querySelector(".search-cursor");
    const name = 'Sam McCay';
    let i = 0;
    const speed = 150; // milliseconds, increased by 50%
    let cursorVisible = true;
    let blinkInterval;

    function typeWriter() {
        if (i < name.length) {
            searchBar.value += name.charAt(i);
            moveCursor();
            i++;
            setTimeout(typeWriter, speed);
        } else {
            cursorSpan.style.display = 'none'; // Hide cursor at the end
        }
    }

    function moveCursor() {
        const textWidth = getTextWidth(searchBar.value, "16px Arial");
        // Add the padding to the text width to position the cursor correctly
        cursorSpan.style.left = `${textWidth + 60}px`; // Add the left padding of the search-bar here
    }

    function getTextWidth(text, font) {
        // re-use canvas object for better performance
        const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
        const context = canvas.getContext("2d");
        context.font = font;
        const metrics = context.measureText(text);
        return metrics.width;
    }

    function blinkCursor() {
        if (cursorVisible) {
            cursorSpan.style.visibility = 'hidden';
            cursorVisible = false;
        } else {
            cursorSpan.style.visibility = 'visible';
            cursorVisible = true;
        }
    }

    // Start blinking cursor immediately
    blinkInterval = setInterval(blinkCursor, 530);

    // Start typing after 2 seconds
    setTimeout(() => {
        clearInterval(blinkInterval); // Stop cursor blinking when typing starts
        cursorSpan.style.visibility = 'visible'; // Make sure cursor is visible when typing starts
        typeWriter();
    }, 1000); // Delay before typing starts

        // Find the search button and the about me section
        const searchButton = document.getElementById("searchButton");
    
        // Add a click event listener to the search button
        searchButton.addEventListener('click', function() {
            const searchText = searchBar.value;
            if (searchText.toLowerCase() === 'sam mccay') {
                window.location.href = 'me.html'; // Redirects to me.html if the search bar contains 'Sam McCay'
            } else {
                window.open(`https://www.google.com/search?q=${encodeURIComponent(searchText)}`, '_blank'); // Opens a new tab with a Google search for the entered text
            }
        });

});
