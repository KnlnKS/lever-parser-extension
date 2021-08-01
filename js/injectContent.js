$("title").replaceWith('<title>Lever Resume Parser - KnlnKS</title>');

$(".content").replaceWith(
  `
   <div class="content">
      <div class="main-header page-full-width section-wrapper"></div>
      <div class="section-wrapper accent-section small-accent page-full-width">
         <div class="section page-centered posting-header">
            <h2>
               Lever Resume Parser
               <div href="https://github.com/KnlnKS" class="sort-by-time posting-category medium-category-label">By KnlnKS</div>
            </h2>
            <div class="posting-categories">
               <a href="https://github.com/KnlnKS/lever-parser-extension" class="sort-by-time posting-category medium-category-label">GitHub&nbsp&nbsp&nbsp/</a>
               <a href="https://chrome.google.com/webstore/detail/lever-parser-extension/cjaebcdmenhepnpldppdeefjgbbpjjbc" class="sort-by-time posting-category medium-category-label">Chrome Webstore</a>
            </div>
         </div>
      </div>
      <div class="section-wrapper page-full-width">
         <div class="section page-centered application-form">
            <label>
               <div class="application-label">Resume/CV</div>
               <div class="application-field">
                  <a href="#" class="postings-btn template-btn-utility visible-resume-upload">
                  <span class="filename"></span><span class="default-label">ATTACH RESUME/CV</ span><input class="application-file-input invisible-resume-upload" data-qa="input-resume"  id="resume-upload-input" name="resume" tabindex="-1" type="file">
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
            <div id="results-display"></div>
         </div>
      </div>
   </div>
   `
);
