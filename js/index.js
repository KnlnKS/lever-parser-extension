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

const timestampToDate = (timestamp) => {
  let readableDate = new Date(timestamp);

  if (!isNaN(readableDate)) {
    return readableDate.toLocaleDateString(window.navigator.language, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } else {
    return "";
  }
};

const displayData = (data) => {
  console.log('data', data)
  const newChild = `
      <table id="results-overview">
        <thead>
            <tr>
                <th colspan="4">Results</th>
            </tr>
        </thead>
        <tbody>
            <!-- Summary -->
            <tr>
                <td class="category">Names</td>
                <td colspan="3">${data?.names?.join(", ") || "none"}</td>
            </tr>
            <tr>
                <td class="category">Executive Summary</td>
                <td colspan="3">${
                  data?.summary?.executiveSummary || "none"
                }</td>
            </tr>
            <tr>
                <td class="category">Skills</td>
                <td colspan="3">${data?.summary?.skills || "none"}</td>
            </tr>
            <!-- Overview -->
            <tr>
                <td class="category">Created At</td>
                <td>${timestampToDate(data?.createdAt)}</td>
                <td class="category">Last Story At</td>
                <td>${timestampToDate(data?.lastStoryAt)}</td>
            </tr>
            <tr>
                <td class="category">Emails</td>
                <td>${data?.emails?.map(email => email.value)?.join(", ") || "none"}</td>
                <td class="category">Phones</td>
                <td>${data?.phones?.map(phone => phone.value)?.join(", ") || "none"}</td>
            </tr>
            <tr>
                <td class="category">Links</td>
                <td colspan="3">${
                  data?.links?.map((link) => link.url)?.join(", ") || "none"
                }</td>
            </tr>
            <tr>
                <td class="category">Location</td>
                <td colspan="3">${data?.location?.name}</td>
            </tr>
            <tr>
                <td class="category">Work Time</td>
                <td colspan="3">${data?.summary?.workTime?.years} Years or ${
    data?.summary?.workTime?.months
  } months</td>
            </tr>
            <!-- Schools -->
            ${
              data?.schools &&
              data.schools.length > 0 &&
              (() => {
                let accum = `
                  <tr>
                    <th colspan="4">Schools</th>
                  </tr>`;
                accum += data?.schools.map((school) => {
                  return `
                  <tr>
                    <td class="category">Time Period</td>
                    <td>${timestampToDate(
                      school?.start?.timestamp
                    )} to ${timestampToDate(school?.end?.timestamp)}</td>
                    <td class="category">Is Current?</td>
                    <td>${school?.isCurrent ? "Yes" : "No"}</td>
                  </tr>
                  <tr>
                    <td class="category">Organization</td>
                    <td>${school?.org}</td>
                    <td class="category">Degree</td>
                    <td>${school?.degree}</td>
                  </tr>
                  <tr>
                    <td class="category">GPA</td>
                    <td>${school?.gpa}</td>
                    <td class="category">Summary</td>
                    <td>${school?.summary}</td>
                  </tr>`;
                });

                return accum;
              })()
            }
        </tbody>
    </table>

    <!-- Employment Results -->
    <table id="results-employment">
        <thead>
            <tr>
                <th>Company</th>
                <th>Job Title</th>
                <th>Start</th>
                <th>End</th>
                <th>Is current?</th>
               
                <th>Summary</th>
            </tr>
        </thead>
        <tbody>
            ${data?.positions.map((position) => {
              return `
                <tr>
                  <td>
                    ${position?.org}
                  </td>
                  <td>
                    ${position?.title}
                  </td>
                  <td>
                    ${timestampToDate(position?.start?.timestamp)}
                  </td>
                  <td>
                    ${timestampToDate(position?.end?.timestamp)}
                  </td>
                  <td>
                    ${position?.isCurrent ? "Yes" : "No"}
                  </td>
                  <td>
                    ${position?.summary}
                  </td>
              </tr>
              `;
            })}
        </tbody>
    </table>
    `;

  $("#results-display").empty().append(newChild);
};

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
      var parseResults = data;
      data = JSON.parse(data);
      displayData(data);
      // downloadObjectAsJson(data, "resume");
      
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
    // onData(JSON.stringify(rawDataObj));
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
      working.show();
      var formData = new FormData();
      formData.append('resume', file);

      if (req && req.readyState < 4) {
        req.abort();
      }

      req = new XMLHttpRequest();
      req.onreadystatechange = function(e) {
        if (req.readyState === 4) {
          working.hide();
          if (req.status === 200) {
            onData(req.response);
          } else if (req.status === 400 && req.responseText === 'PayloadTooLargeError') {
            oversizeFailure.show();
          } else {
            failure.show();
          }
        }
      };
      req.open('POST', POST_PATH, true);
      req.send(formData);
  });
});
