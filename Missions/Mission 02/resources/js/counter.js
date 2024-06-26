document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the current count from localStorage
    let count = parseInt(localStorage.getItem('page_view_count')) || 0;

    // Increment the count
    count++;

    // Demonstrate the use of a loop and arithmetic operators
    let newCount = 0;
    for (let i = 0; i < count; i++) {
        newCount = i + 1;
    }

    // Store the new count back to localStorage
    localStorage.setItem('page_view_count', newCount);

    // Demonstrate the use of comparative operators
    if (newCount > 0) {
        document.querySelector('.website-counter').innerText = newCount;
    } else {
        document.querySelector('.website-counter').innerText = 'Error';
    }

    // Triple-click event listener to reset the count
    let clickCount = 0;
    const counterDiv = document.querySelector('.website-counter');

    counterDiv.addEventListener('click', () => {
        clickCount++;

        if (clickCount === 3) {
            // Reset the count to 0
            newCount = 0;
            localStorage.setItem('page_view_count', newCount);
            counterDiv.innerText = newCount;
            clickCount = 0; // Reset the click count
        }

        // Reset click count after a short delay to avoid multiple triple-clicks
        setTimeout(() => {
            clickCount = 0;
        }, 500);
    });
});
