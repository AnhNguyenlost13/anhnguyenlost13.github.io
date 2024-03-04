document.addEventListener('DOMContentLoaded', function() {

// Define the languages
const languages = ['🇺🇸 English (en-US)', '🇷🇴 Romanian (ro-RO)'];

// Initial language index
let currentLanguageIndex = 0;

const langSelector = document.querySelector('.lang_selector');

// Listen for click event on lang_selector
langSelector.addEventListener('click', function() {
    // Toggle between the languages on click
    currentLanguageIndex = (currentLanguageIndex + 1) % languages.length;
    const selectedLanguage = languages[currentLanguageIndex];
    document.querySelector('.selected_language').textContent = selectedLanguage;
    // Call a function to update the page content based on the selected language
    updateContent(currentLanguageIndex);
});

// Function to update the page content based on the selected language
function updateContent(currentLanguageIndex) {
    var translations = document.getElementsByClassName('localized');
    for (var i = 0; i < translations.length; i++) {
        if (translations[i].id === selectedLanguage) {
            translations[i].style.display = 'block';
        } else {
            translations[i].style.display = 'none';
        }
    }
});
