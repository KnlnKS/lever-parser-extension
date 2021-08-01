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

$(function () {
  var POST_PATH = "/parseResume";
  var MAX_FILE_SIZE = 100 * 1000 * 1000; // 100 MB
  var req;

  var failure = $(".resume-upload-failure");
  var success = $(".resume-upload-success");
  var working = $(".resume-upload-working");
  var oversizeFailure = $(".resume-upload-oversize");

  function onData(data) {
    try {
      data = JSON.parse(data);
      displayResults(data);

      success.show();
    } catch (e) {
      failure.show();
      return;
    }
    if (!data) {
      failure.show();
      return;
    }
  }

  $("#resume-upload-input").change(function () {
    failure.hide();
    success.hide();
    working.hide();
    oversizeFailure.hide();

    var file = this.files[0];
    if (!file || file.size == 0) {
      // File changed to nothing
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      oversizeFailure.show();
      return;
    }

    // Remove the button if it exists so that the user doesn't get confused between new and old data
    $("#json-dl-button")?.remove();

    // Removes old data
    $("#results-display")?.empty();

    working.show();
    var formData = new FormData();
    formData.append("resume", file);

    if (req && req.readyState < 4) {
      req.abort();
    }

    req = new XMLHttpRequest();
    req.onreadystatechange = function (e) {
      if (req.readyState === 4) {
        working.hide();
        if (req.status === 200) {
          onData(req.response);
        } else if (
          req.status === 400 &&
          req.responseText === "PayloadTooLargeError"
        ) {
          oversizeFailure.show();
        } else {
          failure.show();
        }
      }
    };
    req.open("POST", POST_PATH, true);
    req.send(formData);
  });
});
