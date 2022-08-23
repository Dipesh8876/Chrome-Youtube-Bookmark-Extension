chrome.tabs.onUpdated.addListener((tabId, tab) => { // code to listen to any updates in our tab system and find the most recent tab or the tab that we're on currently and see if it's a yT page
    if (tab.url && tab.url.includes("youtube.com/watch")) {
      const queryParameters = tab.url.split("?")[1];  // using the Js split method which means the video value just after the = in link which is unique video value for every video on yT
      const urlParameters = new URLSearchParams(queryParameters); 
  
      chrome.tabs.sendMessage(tabId, {   // msging system that happens between extension which sends msgs to contentscript that says a new video as loaded
        type: "NEW",                // type of event // new video event
        videoId: urlParameters.get("v"),   // the video value being the unique video value on the yt video
      });
    }
  });
  