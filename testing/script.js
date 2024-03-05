// hello!

// This is to make sure that everything has loaded. May be paranoia.
document.addEventListener('DOMContentLoaded', function() {

// Define the strings
const prettyLanguages = ['🇺🇸 English (en-US)', '🇷🇴 Romanian (ro-RO)'];
const pageTitles = ['Elixhost.biz Terms and Conditions', 'Elixhost.biz Termeni și Condiții']
const readTimes = ['8 min. read', '8 min. citit']

// These are the internal identifiers used
const internalIdentifiers = ['content_en', 'content_ro'];

// Initial language index
let currentLanguageIndex = 0;

// convenience/shortening
const langSelector = document.querySelector('.lang_selector');

// Listen for a click event
langSelector.addEventListener('click', function() {
    // Toggle between the languages on click
    currentLanguageIndex = (currentLanguageIndex + 1) % internalIdentifiers.length;
    
    // Getting the string from the index
    const selectedLanguage = prettyLanguages[currentLanguageIndex];
    const selectedLanguageIdentifier = internalIdentifiers[currentLanguageIndex];
    const pageTitle = pageTitles[currentLanguageIndex];
    const readTime = readTimes[currentLanguageIndex];
    
    // Changing the strings
    document.querySelector('.selected_language').textContent = selectedLanguage;
    document.querySelector('.title').textContent = pageTitle;
    document.querySelector('.readtime').textContent = readTime;
    
    // Yes I did not forget the page title.
    document.title = pageTitle;
    
    // Call a function to update the big chungus page content based on the selected language
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
