function downloadObjectAsJson(obj, fileName) {
  // From this StackOverflow answer:
  // https://stackoverflow.com/questions/19721439/download-json-object-as-a-file-from-browser
  var downloadAnchorNode = document.createElement("a");
  downloadAnchorNode.setAttribute(
    "href",
    "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj))
  );
  downloadAnchorNode.setAttribute("download", fileName + ".json");
  document.body.appendChild(downloadAnchorNode);
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

function onData(data) {
  try {
    data = JSON.parse(data);
    downloadObjectAsJson(data, "resume");
    alert("Parsing worked 🎉");
  } catch (e) {
    alert("Parsing failed, idk y tho 🤷");
    return;
  }
  if (!data) {
    alert("Parsing failed, idk y tho 🤷");
    return;
  }
}

$(function () {
  var POST_PATH = "/parseResume";
  var MAX_FILE_SIZE = 100 * 1000 * 1000; // 100 MB
  var req;

  $("#parse-resume-upload-input").change(function () {
    var file = this.files[0];
    this.files[0] = undefined;

    if (!file || file.size == 0) {
      // File changed to nothing
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      alert("Parsing failed, file too big 🍔");
      return;
    }

    var formData = new FormData();
    formData.append("resume", file);

    if (req && req.readyState < 4) {
      req.abort();
    }

    req = new XMLHttpRequest();
    req.onreadystatechange = function (e) {
      if (req.readyState === 4) {
        if (req.status === 200) {
          onData(req.response);
        } else if (
          req.status === 400 &&
          req.responseText === "PayloadTooLargeError"
        ) {
          alert("Parsing failed, file too big 🍔");
        } else {
          alert("Parsing failed, idk y tho 🤷");
        }
      }
    };
    req.open("POST", POST_PATH, true);
    req.send(formData);
  });
});
