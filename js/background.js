chrome.contextMenus.create({
  "title": "Parse Resume",
  "id": "my-context-item",
  "contexts": ["all"],
  "type": "normal",
  "onclick" : function(){window.open("https://jobs.lever.co/parse");}
});
