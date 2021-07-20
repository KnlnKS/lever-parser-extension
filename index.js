function downloadObjectAsJson(obj, fileName) {
  // From this StackOverflow answer:
  // https://stackoverflow.com/questions/19721439/download-json-object-as-a-file-from-browser
  var downloadAnchorNode = document.createElement("a");
  downloadAnchorNode.setAttribute(
    "href",
    "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(obj))
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
    console.log(data);
  } catch (e) {
    alert("Parsing failed, idk y tho 🤷");
    return;
  }
  if (!data) {
    alert("Parsing failed, idk y tho 🤷");
    return;
  }
}

$(".resume").after(
  `
  <li class="application-question resume">
     <label>
        <div class="application-label">Parse </div>
        <div class="application-field">
           <a href="#" class="postings-btn template-btn-utility visible-resume-upload">
              <svg class=" icon icon-paperclip" width="16px" height="16px" viewBox="0 0 16 16">
                 <path d="M5 5V9C5 10.7 6.3 12 8 12C9.7 12 11 10.7 11 9V4.5C11 2 9 0 6.5 0C4 0 2 2 2 4.5V10C2 13.3 4.7 16 8 16C11.3 16 14 13.3 14 10V4H12V10C12 12.2 10.2 14 8 14C5.8 14 4 12.2 4 10V4.5C4 3.1 5.1 2 6.5 2C7.9 2 9 3.1 9 4.5V9C9 9.6 8.6 10 8 10C7.4 10 7 9.6 7 9V5H5Z"></path>
              </svg>
              <span class="filename"></span><span class="default-label">ATTACH RESUME/CV</span><input class="application-file-input-parser invisible-resume-upload" data-qa="input-resume" id="parse-resume-upload-input" name="resume" tabindex="-1" type="file">
           </a>
        </div>
     </label>
  </li>
  `
);

$(function () {
  var POST_PATH = "/parseResume";
  var MAX_FILE_SIZE = 100 * 1000 * 1000; // 100 MB
  var req;

  $("#parse-resume-upload-input").change(function () {
    var file = this.files[0];
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
