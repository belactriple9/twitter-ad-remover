// let globCounter = 0;

function checkArticlesForAds() {
    document.querySelectorAll('article').forEach(article => {
        try{
            if(article.querySelector('div > div > div > div > div > div > div > div > span').innerText == 'Ad') {
                // globCounter++;
                // console.log('ads seen: ' + globCounter);
                article.querySelector('div').remove();

            }
        }
        catch(e)
        {}
    });
}

  
// Initial check
checkArticlesForAds();

// Set up an observer for new content
const observer = new MutationObserver(() => {
  // Just call the function again when anything changes, probably not the most efficient way to do this
  checkArticlesForAds();
});

observer.observe(document.body, { childList: true, subtree: true });

  