document.addEventListener('DOMContentLoaded', function() {

// Define the languages
const prettyLanguages = ['🇺🇸 English (en-US)', '🇷🇴 Romanian (ro-RO)'];

// These are the internal identifiers used
const internalIdentifiers = ['content_en', 'content_ro'];

// Initial language index
let currentLanguageIndex = 0;

const langSelector = document.querySelector('.lang_selector');

// Listen for click event on lang_selector
langSelector.addEventListener('click', function() {
    // Toggle between the languages on click
    currentLanguageIndex = (currentLanguageIndex + 1) % internalIdentifiers.length;
    const selectedLanguage = prettyLanguages[currentLanguageIndex];
    const selectedLanguageIdentifier = internalIdentifiers[currentLanguageIndex];
    document.querySelector('.selected_language').textContent = selectedLanguage;
    // Call a function to update the page content based on the selected language
    updateContent(selectedLanguageIdentifier);
});

// Function to update the page content based on the selected language
function updateContent(selectedLanguageIdentifier) {
    var translations = document.getElementsByClassName('localized');
    for (var i = 0; i < translations.length; i++) {
        if (translations[i].id === selectedLanguageIdentifier) {
            translations[i].style.display = 'block';
        } else {
            translations[i].style.display = 'none';
        }
    }
}
});
