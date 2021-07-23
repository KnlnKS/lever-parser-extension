$("title").replaceWith(
  `
      <title>Lever Resume Parsing</title>
    `
);

$(".content").replaceWith(
  `
    <div class="content">
      <div class="section-wrapper page-full-width">
         <div class="section page-centered application-form">
            <h4>Parse Resume</h4>
            <label>
               <div class="application-label">Resume/CV</div>
               <div class="application-field">
                  <a href="#" class="postings-btn template-btn-utility visible-resume-upload">
                     <svg class=" icon icon-paperclip" width="16px" height="16px" viewBox="0 0 16 16">
                        <path d="M5 5V9C5 10.7 6.3 12 8 12C9.7 12 11 10.7 11 9V4.5C11 2 9 0 6.5 0C4 0 2 2 2 4.5V10C2 13.3 4.  7 16 8 16C11.3 16 14 13.3 14 10V4H12V10C12 12.2 10.2 14 8 14C5.8 14 4 12.2 4 10V4.5C4 3.1 5.1 2 6.5   2C7.9 2 9 3.1 9 4.5V9C9 9.6 8.6 10 8 10C7.4 10 7 9.6 7 9V5H5Z"></path>
                     </svg>
                     <span class="filename"></span><span class="default-label">&nbsp&nbsp&nbsp&nbspATTACH RESUME/CV</ span><input class="application-file-input invisible-resume-upload" data-qa="input-resume"  id="resume-upload-input" name="resume" tabindex="-1" type="file">
                  </a>
                  <span class="resume-upload-failure">
                     <div class="resume-upload-label">Couldn't auto-read resume.</div>
                  </span>
                  <span class="resume-upload-working">
                     <div class="loading-indicator"></div>
                     <div class="resume-upload-label">Analyzing resume...</div>
                  </span>
                  <span class="resume-upload-success">
                     <div class="loading-indicator completed">
                        <svg class=" icon icon-check" width="16px" height="16px" viewBox="0 0 16 16">
                           <path d="M6.2,14.4L0,8.2l2.5-2.5l3.5,3.5c0.1,0.1,0.2,0.1,0.2,0L13.5,2L16,4.5L6.2,14.4z"></path>
                        </svg>
                     </div>
                     <div class="resume-upload-label">Success!</div>
                  </span>
               </div>
            </label>
            <span class="resume-upload-oversize">
               <p class="error-message">File exceeds the maximum upload size of <b>100MB</b>. Please try a smaller size.</p>
            </span>
         </div>
      </div>
    </div>
    `
);
