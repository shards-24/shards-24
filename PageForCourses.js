// JavaScript for the STEM Education Site

// Function to handle language selection
const languageSelector = document.getElementById('language-selector');
languageSelector.addEventListener('change', function () {
    const selectedLanguage = languageSelector.value;
    // Write code here to change the language of the page content
    // You can use an external translation service or library for this.
    // This function listens for a change in the language selector and triggers actions accordingly.
});

// Function to add comments
function addComment() {
    const commentInput = document.getElementById('comment-input');
    const comment = commentInput.value;
    const commentsSection = document.getElementById('comments-section');
    const newComment = document.createElement('div'); // Create a new div element to hold the comment
    newComment.textContent = comment; // Set the text content of the new div to the comment input
    commentsSection.appendChild(newComment); // Append the new comment div to the comments section
    commentInput.value = ''; // Clear the comment input area after adding the comment
    // This function adds a new comment to the comments section when the submit button is clicked.
}

// You can add more JavaScript code here for additional functionality
// Make sure to add comments to explain each section of code clearly.
