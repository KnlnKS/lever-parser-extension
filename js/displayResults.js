const displayResults = (data) => {
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
                <td class="category">Name(s)</td>
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
                <td>${
                  data?.emails?.map((email) => email.value)?.join(", ") ||
                  "none"
                }</td>
                <td class="category">Phones</td>
                <td>${
                  data?.phones?.map((phone) => phone.value)?.join(", ") ||
                  "none"
                }</td>
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
  } months
              </td>
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
    <br />
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
            ${data?.positions
              .map((position) => {
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
              })
              .join("")}
        </tbody>
    </table>
    `;
  const downloadButton = $(
    "<button id='json-dl-button' class='postings-btn template-btn-utility visible-resume-upload'>Download JSON</button>"
  ).click(function () {
    downloadObjectAsJson(data, "resume");
  });

  $("#results-display")
    .empty()
    .append("<br/>")
    .append(downloadButton)
    .append(newChild);
};
