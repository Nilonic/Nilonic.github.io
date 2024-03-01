        // Variables
        let _curPage = "loading.html";

        // Function to preload HTML document
        function preloadHTMLDocument(url) {
            fetch(url)
                .then(response => response.text())
                .then(html => {
                    // Update _curPage variable
                    _curPage = url;

                    // Change src attribute of the iframe
                    document.getElementById("mcb").srcdoc = html;
                })
                .catch(error => console.error('Error loading HTML document:', error));
        }

        // Event listener for DOMContentLoaded
        document.addEventListener("DOMContentLoaded", () => {
            console.log("Showing Loading Screen...");
            document.getElementById("mcb").src = _curPage;
            
            // Example usage to preload another HTML document
            preloadHTMLDocument('mainPage.html');
            document.title = "home | nilon's github page"
        });

        console.log("loaded main.js");