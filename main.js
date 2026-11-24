window.addEventListener("load", () => {
    // Favourite urls, this list can contain evert valid URL.
    const appsUrl = [
        "instagram.com",
        "threads.com",
        "discord.com/channels/@me",
        "gemini.google.com/app",
        "youtube.com",
        "pinterest.com",
        "tasks.google.com",
        "mail.google.com",
        "calendar.google.com",
        "translate.google.com",
        "github.com/iasonasTan?tab=repositories",
        "www.alphatv.gr/series/to-soi-soy/episodes/",
        "github.com/issues/assigned?q=state%3Aopen%20archived%3Afalse%20user%3AiasonasTan%20is%3Aissue",
        "music.youtube.com/",
        "chatgpt.com",
    ];

    // Indexes of appsUrl marking the favourite utils
    // These urls can be oppened by typing '@utils' in searchbar and pressing enter
    const utils_idxs = [0, 2, 3, 4, 8];

    // Views that will be used.
    const input = document.querySelector("#input");
    const appsList = document.querySelector("#apps");

    // If given text is related to a favourite url, this url gets returned.
    // If given text is NOT related to a favourite url, url to google search gets returned.
    function relationOrSearch(text) {
        // Iterate through all urls
        for (let i = 0; i < appsUrl.length; i++) {
            let url = appsUrl[i];
            // Checks for almost any relation between url[n] and given text.
            if (url.includes(text) || text.includes(url)) {
                // Complete and return related url
                return "https://" + url;
            }
        }
        // Return google search url
        return "https://google.com/search?q=" + text;
    }

    // Iterates through all favourite urls and puts a link in html
    // for each one that is related with the given text.
    function updateAppsList(text) {
        // Message to show when there's no apps.
        const NO_APPS_MSG = "No apps.";

        // Default HTML to put.
        let appsViews = `<a class="app" href="https://instagram.com/iasonas_tan">${NO_APPS_MSG}</a>`;
        // Iterate through all urls.
        for (let i = 0; i < appsUrl.length; i++) {
            let url = appsUrl[i];
            // Check for almost any relation between url[n] and text.
            if (url.includes(text) || text.includes(url)) {
                // Clear default text IF it is still there.
                if (appsViews.includes(NO_APPS_MSG)) {
                    appsViews = "";
                }
                // Create a link view with the url and put in in appViews
                const fullURL = "https://" + url;
                appsViews += `<a class="app" href="${fullURL}">${fullURL}</a>`;
            }
        }
        // Upate appsList html.
        appsList.innerHTML = appsViews;
    }

    // Opens all utils in new tabs
    function openUtils() {
        // Loop through each util app URL and open it in a new tab
        utils_idxs.forEach((url_idx, index) => {
            // Get url from appsUrl and open it in a new tab
            window.open(
                "https://" + appsUrl[url_idx],
                `_blank_${index}`,
            );
        });
        window.close();
    }

    // Update apps list whenever main input text is changed
    input.addEventListener("input", (event) => {
        updateAppsList(event.target.value);
    });

    // When Enter is pressed, open most related url.
    window.addEventListener("keydown", (event) => {
        // Check if pressed key is 'Enter'
        if (event.key == "Enter") {
            const text = input.value;
            if (text == "@utils") {
                openUtils();
            } else {
                let url = relationOrSearch(text);
                window.location.href = url;
            }
        }
    });

    // Show all apps
    updateAppsList("");

    // Wait a few millis and:
    // Waiting because browsers will give focus to url-bar after window.onLoad is executed.
    setTimeout(() => {
        // Give focus to main input
        input.focus();
    }, 250);
});
