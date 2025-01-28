// Get the toggle and label elements
const darkModeToggle = document.getElementById('darkModeToggle');
const modeLabel = document.getElementById('modeLabel');

// Add event listener to toggle
darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        document.body.classList.add('dark-mode');
        modeLabel.textContent = 'Dark Mode';
    } else {
        document.body.classList.remove('dark-mode');
        modeLabel.textContent = 'Light Mode';
    }
});
