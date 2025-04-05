chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      let url = new URL(details.url);
      let params = url.searchParams;
      let modified = false;
      
      ["utm_source", "ref"].forEach(param => {
        if (params.has(param) && params.get(param).toLowerCase() === "simplify") {
          params.delete(param);
          modified = true;
        }
      });
      
      if (modified) {
        let newUrl = url.origin + url.pathname;
        let newQuery = params.toString();
        if (newQuery) {
          newUrl += "?" + newQuery;
        }
        
        return { redirectUrl: newUrl };
      }
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
  );