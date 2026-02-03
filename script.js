let messageIndex = 0;
const messages = [
    "Are you sure?",
    "Really sure??",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You're breaking my heart ;("
];

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    // Change the main question text
    document.getElementById('question').textContent = "Are you sure, Sanu?";
    
    // Change "No" button text from the list above
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    // Make "Yes" button grow
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
    
    // Adjust padding so the button scales correctly with the text
    yesButton.style.padding = `${currentSize * 0.8}px ${currentSize * 1.2}px`;
}

function handleYesClick() {
    // This sends Sanu to the success page
    window.location.href = "yes_page.html";
}
