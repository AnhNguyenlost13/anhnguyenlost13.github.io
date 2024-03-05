document.addEventListener('DOMContentLoaded', function() {

// Define the strings
const prettyLanguages = ['🇺🇸 English (en-US)', '🇷🇴 Romanian (ro-RO)'];
const pageTitles = ['Elixhost.biz Terms and Conditions', 'Elixhost.biz Termeni și Condiții']
const readTimes = ['8 min. read', '8 min. citit']

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
    const pageTitle = pageTitles[currentLanguageIndex];
    const readTime = readTimes[currentLanguageIndex];
    document.querySelector('.selected_language').textContent = selectedLanguage;
    document.querySelector('.title').textContent = pageTitle;
    docukent.querySelector('.readtime').textContent = readTime
    document.title = pageTitle;
    
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
