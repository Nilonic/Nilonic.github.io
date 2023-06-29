function toggleMenu() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.classList.toggle("show");
}

function NHref(newURL = ""){
    window.location.href = newURL;
}


function trollConsole() {
    // infrequent relentless major trolling
    var searchString = "0.0.0.0:8000";
    var href = window.location.href;

    // Find the position of the first occurrence of "//"
    var doubleSlashIndex = href.indexOf('//');

    // Find the position of the first slash after the double slash
    var firstSlashIndex = href.indexOf('/', doubleSlashIndex + 2);

    // Extract the substring before the first slash
    var substringBeforeSlash = href.substring(doubleSlashIndex + 2, firstSlashIndex);

    // Check if the search string is present in the substring
    var isPresent = substringBeforeSlash.includes(searchString);

    if(isPresent){
        return "in dev mode"
    }
    return NHref("https://www.youtube.com/watch?v=dQw4w9WgXcQ") //im sorry but it's needed :troll:
  }


