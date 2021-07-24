$("head").append(
  `
    <style>
    @font-face {
        font-family: 'Meta';
        src: url("https://cdn.lever.co/fonts/Meta/metaboldlf-webfont-2017.woff") format('woff');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'Meta';
        src: url("https://cdn.lever.co/fonts/Meta/metanormal-webfont-2017.woff") format('woff');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Meta';
        src: url("https://cdn.lever.co/fonts/Meta/metanormalitaliclf-webfont-2017.woff") format('woff');
        font-weight: 400;
        font-style: italic;
    }

    @font-face {
        font-family: 'Meta';
        src: url("https://cdn.lever.co/fonts/Meta/metabolditaliclf-webfont-2017.woff") format('woff');
        font-weight: 600;
        font-style: italic;
    }

    @font-face {
        font-family: 'Meta-Caps';
        src: url("https://cdn.lever.co/fonts/Meta/MetaScWeb-Normal.eot");
        src: url("https://cdn.lever.co/fonts/Meta/MetaScWeb-Normal.woff") format('woff');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Avenir';
        src: url("https://cdn.lever.co/fonts/Avenir/Avenir-Next-Pro-Regular.eot");
        src: url("https://cdn.lever.co/fonts/Avenir/Avenir-Next-Pro-Regular.woff") format('woff');
        src: url("https://cdn.lever.co/fonts/Avenir/Avenir-Next-Pro-Regular.ttf") format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    .caps-label,
    .classic-table th,
    h4,
    h6,
    th,
    .btn,
    .submit,
    .btn-large,
    .submit-large,
    .btn-large-secondary,
    .dark-button,
    .toggle-label,
    .gated-feature:before,
    .gated-feature-inline:before,
    .gated-feature-inline-enterprise:before,
    .gated-feature-inline-professional:before,
    .gated-feature-inline-starter:before,
    .gated-feature-block:before,
    .gated-feature-block-pro:before,
    .cc-btn {
        font: 14px/1.4em 'Meta-Caps', sans-serif;
        text-transform: lowercase;
        letter-spacing: 1px;
    }

    .label,
    body,
    input,
    select,
    textarea,
    .btn-no-style,
    .application-question input,
    .application-additional input,
    .application-question textarea,
    .application-additional textarea,
    .application-question select,
    .application-additional select,
    .eeo-light-text,
    h5.eeo-paragraph-heading,
    .list .filter-popup {
        font: 400 14px/1.4em Meta, sans-serif;
        text-transform: none;
        letter-spacing: 0;
    }

    p.larger,
    .large-input,
    .large-input.dark,
    .message-banner {
        font: 400 16px/1.4em Meta, sans-serif;
    }

    h1,
    h2,
    h3,
    h5 {
        font: 600 16px/1.4em Meta, sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    h1,
    h2,
    h3,
    h5 {
        color: #222326;
    }

    .gated-feature:after,
    .gated-feature-block:after,
    .gated-feature-block-pro:after {
        position: absolute;
        top: 0;
        bottom: 0;
    }

    .gated-feature:after,
    .gated-feature-block:after,
    .gated-feature-block-pro:after {
        position: absolute;
        right: 0;
        left: 0;
    }

    .hidden {
        display: none !important;
    }

    .fadein {
        -webkit-animation: lever-fadein 300ms ease-in;
        -moz-animation: lever-fadein 300ms ease-in;
        -o-animation: lever-fadein 300ms ease-in;
        -ms-animation: lever-fadein 300ms ease-in;
        animation: lever-fadein 300ms ease-in;
        opacity: 1;
        -ms-filter: none;
        filter: none;
    }

    .fadeout {
        -webkit-animation: lever-fadeout 300ms ease-in;
        -moz-animation: lever-fadeout 300ms ease-in;
        -o-animation: lever-fadeout 300ms ease-in;
        -ms-animation: lever-fadeout 300ms ease-in;
        animation: lever-fadeout 300ms ease-in;
        opacity: 0;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
        filter: alpha(opacity=0);
    }

    .slidedown {
        -webkit-animation: lever-slidedown 300ms ease-in;
        -moz-animation: lever-slidedown 300ms ease-in;
        -o-animation: lever-slidedown 300ms ease-in;
        -ms-animation: lever-slidedown 300ms ease-in;
        animation: lever-slidedown 300ms ease-in;
    }

    .slideup {
        -webkit-animation: lever-slideup 300ms ease-out;
        -moz-animation: lever-slideup 300ms ease-out;
        -o-animation: lever-slideup 300ms ease-out;
        -ms-animation: lever-slideup 300ms ease-out;
        animation: lever-slideup 300ms ease-out;
    }

    .face-off {
        background-color: #f0f;
    }

    .face-off-border {
        border-color: #f0f !important;
    }

    .face-off-label {
        display: block;
        position: absolute;
        top: 24px;
        font-size: 24px;
        width: 100%;
        text-align: center;
        color: #fff;
    }

    .comma-separated:after {
        content: ", ";
    }

    .comma-separated:last-of-type:after {
        content: "";
    }

    .numbers,
    .dates,
    .count {
        font-family: 'Avenir';
        font-size: 0.857em;
    }

    .numbers,
    .dates {
        font-size: 0.92em;
        text-transform: uppercase;
    }

    .label {
        font-size: 12px;
        color: #969799;
    }

    .label.dark {
        color: #6a7c83;
    }

    .caps-label,
    .classic-table th {
        font-size: 12px;
        color: #969799;
    }

    .caps-label.dark,
    .classic-table th.dark {
        color: #6a7c83;
    }

    .vert-space-1 {
        margin-top: 5px;
    }

    .vert-space-2 {
        margin-top: 10px;
    }

    .vert-space-3 {
        margin-top: 15px;
    }

    .vert-space-4 {
        margin-top: 20px;
    }

    .vert-space-5 {
        margin-top: 25px;
    }

    .vert-space-6 {
        margin-top: 30px;
    }

    .vert-space-7 {
        margin-top: 35px;
    }

    .vert-space-8 {
        margin-top: 40px;
    }

    .vert-space-9 {
        margin-top: 45px;
    }

    .vert-space-10 {
        margin-top: 50px;
    }

    .vert-space-11 {
        margin-top: 55px;
    }

    .vert-space-12 {
        margin-top: 60px;
    }

    .full-width {
        width: 100%;
    }

    .left-align {
        text-align: left;
    }

    .right-align {
        text-align: right;
    }

    .centered {
        text-align: center;
    }

    .bulleted-list,
    .numbered-list {
        margin-left: 15px;
    }

    .bulleted-list li,
    .numbered-list li {
        margin-bottom: 8px;
    }

    .classic-table.fixed {
        table-layout: fixed;
    }

    .classic-table.no-padding td,
    .classic-table.no-padding th {
        padding: initial;
    }

    .classic-table.dark td,
    .classic-table.dark th {
        border-bottom: 1px solid #536266;
    }

    .classic-table.dark th {
        color: #6a7c83;
    }

    .classic-table td,
    .classic-table th {
        border-bottom: 1px solid #e3e4e6;
        padding: 10px 15px;
        vertical-align: top;
    }

    .classic-table td:first-of-type,
    .classic-table th:first-of-type {
        padding-left: 0;
    }

    .classic-table.no-bottom-border tr:last-child>td,
    .classic-table.no-bottom-border tr:last-child>th {
        border-bottom: none;
    }

    @-moz-keyframes lever-fadein {
        0% {
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
        }

        100% {
            opacity: 1;
            -ms-filter: none;
            filter: none;
        }
    }

    @-webkit-keyframes lever-fadein {
        0% {
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
        }

        100% {
            opacity: 1;
            -ms-filter: none;
            filter: none;
        }
    }

    @-o-keyframes lever-fadein {
        0% {
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
        }

        100% {
            opacity: 1;
            -ms-filter: none;
            filter: none;
        }
    }

    @keyframes lever-fadein {
        0% {
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
        }

        100% {
            opacity: 1;
            -ms-filter: none;
            filter: none;
        }
    }

    @-moz-keyframes lever-fadeout {
        0% {
            opacity: 1;
            -ms-filter: none;
            filter: none;
        }

        100% {
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
        }
    }

    @-webkit-keyframes lever-fadeout {
        0% {
            opacity: 1;
            -ms-filter: none;
            filter: none;
        }

        100% {
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
        }
    }

    @-o-keyframes lever-fadeout {
        0% {
            opacity: 1;
            -ms-filter: none;
            filter: none;
        }

        100% {
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
        }
    }

    @keyframes lever-fadeout {
        0% {
            opacity: 1;
            -ms-filter: none;
            filter: none;
        }

        100% {
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
        }
    }

    @-moz-keyframes lever-slidedown {
        0% {
            -webkit-transform: translateY(-20px);
            -moz-transform: translateY(-20px);
            -o-transform: translateY(-20px);
            -ms-transform: translateY(-20px);
            transform: translateY(-20px);
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
        }

        100% {
            -webkit-transform: translateY(0px);
            -moz-transform: translateY(0px);
            -o-transform: translateY(0px);
            -ms-transform: translateY(0px);
            transform: translateY(0px);
            opacity: 1;
            -ms-filter: none;
            filter: none;
        }
    }

    @-webkit-keyframes lever-slidedown {
        0% {
            -webkit-transform: translateY(-20px);
            -moz-transform: translateY(-20px);
            -o-transform: translateY(-20px);
            -ms-transform: translateY(-20px);
            transform: translateY(-20px);
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
        }

        100% {
            -webkit-transform: translateY(0px);
            -moz-transform: translateY(0px);
            -o-transform: translateY(0px);
            -ms-transform: translateY(0px);
            transform: translateY(0px);
            opacity: 1;
            -ms-filter: none;
            filter: none;
        }
    }

    @-o-keyframes lever-slidedown {
        0% {
            -webkit-transform: translateY(-20px);
            -moz-transform: translateY(-20px);
            -o-transform: translateY(-20px);
            -ms-transform: translateY(-20px);
            transform: translateY(-20px);
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
        }

        100% {
            -webkit-transform: translateY(0px);
            -moz-transform: translateY(0px);
            -o-transform: translateY(0px);
            -ms-transform: translateY(0px);
            transform: translateY(0px);
            opacity: 1;
            -ms-filter: none;
            filter: none;
        }
    }

    @keyframes lever-slidedown {
        0% {
            -webkit-transform: translateY(-20px);
            -moz-transform: translateY(-20px);
            -o-transform: translateY(-20px);
            -ms-transform: translateY(-20px);
            transform: translateY(-20px);
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
        }

        100% {
            -webkit-transform: translateY(0px);
            -moz-transform: translateY(0px);
            -o-transform: translateY(0px);
            -ms-transform: translateY(0px);
            transform: translateY(0px);
            opacity: 1;
            -ms-filter: none;
            filter: none;
        }
    }

    @-moz-keyframes lever-slideup {
        0% {
            -webkit-transform: translateY(20px);
            -moz-transform: translateY(20px);
            -o-transform: translateY(20px);
            -ms-transform: translateY(20px);
            transform: translateY(20px);
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
        }

        100% {
            -webkit-transform: translateY(0px);
            -moz-transform: translateY(0px);
            -o-transform: translateY(0px);
            -ms-transform: translateY(0px);
            transform: translateY(0px);
            opacity: 1;
            -ms-filter: none;
            filter: none;
        }
    }

    @-webkit-keyframes lever-slideup {
        0% {
            -webkit-transform: translateY(20px);
            -moz-transform: translateY(20px);
            -o-transform: translateY(20px);
            -ms-transform: translateY(20px);
            transform: translateY(20px);
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
        }

        100% {
            -webkit-transform: translateY(0px);
            -moz-transform: translateY(0px);
            -o-transform: translateY(0px);
            -ms-transform: translateY(0px);
            transform: translateY(0px);
            opacity: 1;
            -ms-filter: none;
            filter: none;
        }
    }

    @-o-keyframes lever-slideup {
        0% {
            -webkit-transform: translateY(20px);
            -moz-transform: translateY(20px);
            -o-transform: translateY(20px);
            -ms-transform: translateY(20px);
            transform: translateY(20px);
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
        }

        100% {
            -webkit-transform: translateY(0px);
            -moz-transform: translateY(0px);
            -o-transform: translateY(0px);
            -ms-transform: translateY(0px);
            transform: translateY(0px);
            opacity: 1;
            -ms-filter: none;
            filter: none;
        }
    }

    @keyframes lever-slideup {
        0% {
            -webkit-transform: translateY(20px);
            -moz-transform: translateY(20px);
            -o-transform: translateY(20px);
            -ms-transform: translateY(20px);
            transform: translateY(20px);
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
        }

        100% {
            -webkit-transform: translateY(0px);
            -moz-transform: translateY(0px);
            -o-transform: translateY(0px);
            -ms-transform: translateY(0px);
            transform: translateY(0px);
            opacity: 1;
            -ms-filter: none;
            filter: none;
        }
    }

    * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    body {
        background: #f9f9f9;
        color: #555659;
    }

    th {
        text-align: left;
    }

    body,
    dd,
    dl,
    dt,
    fieldset,
    form,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    li,
    menu,
    ol,
    p,
    td,
    th,
    ul,
    .toggle-label,
    .main-footer,
    .application .application-label,
    .eeo-survey .application-label,
    .application .application-field label,
    .eeo-survey .application-field label,
    .application .application-question input[type=text],
    .eeo-survey .application-question input[type=text],
    .application .application-additional input[type=text],
    .eeo-survey .application-additional input[type=text],
    .application .application-question input[type=email],
    .eeo-survey .application-question input[type=email],
    .application .application-additional input[type=email],
    .eeo-survey .application-additional input[type=email],
    .application .application-question input[type=tel],
    .eeo-survey .application-question input[type=tel],
    .application .application-additional input[type=tel],
    .eeo-survey .application-additional input[type=tel],
    .application .application-question textarea,
    .eeo-survey .application-question textarea,
    .application .application-additional textarea,
    .eeo-survey .application-additional textarea,
    .application .application-question select,
    .eeo-survey .application-question select,
    .application .application-additional select,
    .eeo-survey .application-additional select,
    .application .application-question .application-answer-alternative,
    .eeo-survey .application-question .application-answer-alternative,
    .application .application-additional .application-answer-alternative,
    .eeo-survey .application-additional .application-answer-alternative {
        margin: 0;
        padding: 0;
    }

    ul {
        margin: 0 auto;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    fieldset,
    img {
        border: 0;
    }

    img.desaturate {
        -webkit-filter: grayscale(100%);
    }

    h1 {
        font-size: 36px;
    }

    h2,
    h5 {
        font-size: 24px;
    }

    h3 {
        font-size: 18px;
    }

    h5 {
        font-size: 16px;
    }

    h6,
    th {
        font-size: 12px;
    }

    a,
    a:visited {
        color: #579eee;
        text-decoration: none;
    }

    a:hover {
        color: #555659;
        cursor: pointer;
    }

    a:active {
        color: #0c92f3;
    }

    p>a {
        text-decoration: underline;
        color: inherit;
    }

    b {
        font-weight: 600;
        -webkit-font-smoothing: antialiased;
    }

    input,
    select,
    textarea {
        color: #555659;
        margin: 0;
    }

    input,
    select {
        height: 30px;
    }

    section {
        padding-bottom: 16px;
    }

    button {
        -webkit-appearance: button;
        -moz-appearance: button;
        appearance: button;
        cursor: pointer;
    }

    .btn,
    .submit,
    .btn-large,
    .submit-large,
    .btn-large-secondary,
    .dark-button,
    .cc-btn {
        position: relative;
        display: inline-block;
        margin: 0;
        font-size: 14px;
        font-weight: normal;
        line-height: 1.33;
        padding: 5px 15px;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        cursor: pointer;
        border: 1px solid #dcdcdc;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        color: #555659;
        background: #fcfcfc;
        background: -webkit-linear-gradient(top, #fff, #f9f9f9);
        background: -moz-linear-gradient(top, #fff, #f9f9f9);
        background: -o-linear-gradient(top, #fff, #f9f9f9);
        background: -ms-linear-gradient(top, #fff, #f9f9f9);
        background: linear-gradient(to bottom, #fff, #f9f9f9);
        -webkit-transition: background 0.15s, border-color 0.15s, color 0.15s, box-shadow 0.15s, fill 0.15s;
        -moz-transition: background 0.15s, border-color 0.15s, color 0.15s, box-shadow 0.15s, fill 0.15s;
        -o-transition: background 0.15s, border-color 0.15s, color 0.15s, box-shadow 0.15s, fill 0.15s;
        -ms-transition: background 0.15s, border-color 0.15s, color 0.15s, box-shadow 0.15s, fill 0.15s;
        transition: background 0.15s, border-color 0.15s, color 0.15s, box-shadow 0.15s, fill 0.15s;
    }

    .btn:hover,
    .submit:hover,
    .btn-large:hover,
    .submit-large:hover,
    .btn-large-secondary:hover,
    .dark-button:hover,
    .cc-btn:hover,
    .btn-invisible:hover {
        color: #1a1b1c;
        border-color: #969799;
    }

    .btn:active,
    .submit:active,
    .btn-large:active,
    .submit-large:active,
    .btn-large-secondary:active,
    .dark-button:active,
    .cc-btn:active {
        border-color: #555659;
        background: -webkit-linear-gradient(top, #f9f9f9, #fff);
        background: -moz-linear-gradient(top, #f9f9f9, #fff);
        background: -o-linear-gradient(top, #f9f9f9, #fff);
        background: -ms-linear-gradient(top, #f9f9f9, #fff);
        background: linear-gradient(to bottom, #f9f9f9, #fff);
    }

    .btn:active .icon>path,
    .submit:active .icon>path,
    .btn-large:active .icon>path,
    .submit-large:active .icon>path,
    .btn-large-secondary:active .icon>path,
    .dark-button:active .icon>path,
    .cc-btn:active .icon>path {
        fill: #555659;
    }

    .btn:focus,
    .submit:focus,
    .btn-large:focus,
    .submit-large:focus,
    .btn-large-secondary:focus,
    .dark-button:focus,
    .cc-btn:focus {
        outline: thin dotted;
        outline: 3px auto #0c92f3;
        outline-offset: -2px;
    }

    .btn.disabled,
    .submit.disabled,
    .btn-large.disabled,
    .submit-large.disabled,
    .btn-large-secondary.disabled,
    .dark-button.disabled,
    .cc-btn.disabled,
    .btn:disabled,
    .submit:disabled,
    .btn-large:disabled,
    .submit-large:disabled,
    .btn-large-secondary:disabled,
    .dark-button:disabled,
    .cc-btn:disabled,
    input.btn:disabled {
        cursor: default;
        pointer-events: none;
        -webkit-box-shadow: none;
        box-shadow: none;
        background: #e3e4e6;
        color: #555659;
        border-color: #dcdcdc;
        outline: none;
    }

    .btn.disabled.has-tip,
    .submit.disabled.has-tip,
    .btn-large.disabled.has-tip,
    .submit-large.disabled.has-tip,
    .btn-large-secondary.disabled.has-tip,
    .dark-button.disabled.has-tip,
    .cc-btn.disabled.has-tip,
    .btn:disabled.has-tip,
    .submit:disabled.has-tip,
    .btn-large:disabled.has-tip,
    .submit-large:disabled.has-tip,
    .btn-large-secondary:disabled.has-tip,
    .dark-button:disabled.has-tip,
    .cc-btn:disabled.has-tip,
    input.btn:disabled.has-tip {
        pointer-events: auto;
    }

    .btn.disabled:hover,
    .submit.disabled:hover,
    .btn-large.disabled:hover,
    .submit-large.disabled:hover,
    .btn-large-secondary.disabled:hover,
    .dark-button.disabled:hover,
    .cc-btn.disabled:hover,
    .btn:disabled:hover,
    .submit:disabled:hover,
    .btn-large:disabled:hover,
    .submit-large:disabled:hover,
    .btn-large-secondary:disabled:hover,
    .dark-button:disabled:hover,
    .cc-btn:disabled:hover,
    input.btn:disabled:hover,
    .btn.disabled:active,
    .submit.disabled:active,
    .btn-large.disabled:active,
    .submit-large.disabled:active,
    .btn-large-secondary.disabled:active,
    .dark-button.disabled:active,
    .cc-btn.disabled:active,
    .btn:disabled:active,
    .submit:disabled:active,
    .btn-large:disabled:active,
    .submit-large:disabled:active,
    .btn-large-secondary:disabled:active,
    .dark-button:disabled:active,
    .cc-btn:disabled:active,
    input.btn:disabled:active {
        color: #555659;
        background: #e3e4e6;
        border-color: #dcdcdc;
    }

    .btn.dropdown-button,
    .submit.dropdown-button,
    .btn-large.dropdown-button,
    .submit-large.dropdown-button,
    .btn-large-secondary.dropdown-button,
    .dark-button.dropdown-button,
    .cc-btn.dropdown-button {
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        padding-right: 19px;
    }

    .btn.dropdown-button.full-width,
    .submit.dropdown-button.full-width,
    .btn-large.dropdown-button.full-width,
    .submit-large.dropdown-button.full-width,
    .btn-large-secondary.dropdown-button.full-width,
    .dark-button.dropdown-button.full-width,
    .cc-btn.dropdown-button.full-width {
        width: 100%;
    }

    .btn .icon>path,
    .submit .icon>path,
    .btn-large .icon>path,
    .submit-large .icon>path,
    .btn-large-secondary .icon>path,
    .dark-button .icon>path,
    .cc-btn .icon>path {
        fill: #555659;
    }

    .btn.has-icon,
    .submit.has-icon,
    .btn-large.has-icon,
    .submit-large.has-icon,
    .btn-large-secondary.has-icon,
    .dark-button.has-icon,
    .cc-btn.has-icon {
        padding-left: 41px;
    }

    .btn.has-icon .icon,
    .submit.has-icon .icon,
    .btn-large.has-icon .icon,
    .submit-large.has-icon .icon,
    .btn-large-secondary.has-icon .icon,
    .dark-button.has-icon .icon,
    .cc-btn.has-icon .icon,
    .btn.has-icon .loading-indicator,
    .submit.has-icon .loading-indicator,
    .btn-large.has-icon .loading-indicator,
    .submit-large.has-icon .loading-indicator,
    .btn-large-secondary.has-icon .loading-indicator,
    .dark-button.has-icon .loading-indicator,
    .cc-btn.has-icon .loading-indicator {
        position: absolute;
        left: 15px;
        top: calc(50% - 8px);
    }

    .btn.has-icon .btn-content,
    .submit.has-icon .btn-content,
    .btn-large.has-icon .btn-content,
    .submit-large.has-icon .btn-content,
    .btn-large-secondary.has-icon .btn-content,
    .dark-button.has-icon .btn-content,
    .cc-btn.has-icon .btn-content {
        position: relative;
        display: inline-block;
    }

    .btn.has-icon .btn-content .icon,
    .submit.has-icon .btn-content .icon,
    .btn-large.has-icon .btn-content .icon,
    .submit-large.has-icon .btn-content .icon,
    .btn-large-secondary.has-icon .btn-content .icon,
    .dark-button.has-icon .btn-content .icon,
    .cc-btn.has-icon .btn-content .icon,
    .btn.has-icon .btn-content .loading-indicator,
    .submit.has-icon .btn-content .loading-indicator,
    .btn-large.has-icon .btn-content .loading-indicator,
    .submit-large.has-icon .btn-content .loading-indicator,
    .btn-large-secondary.has-icon .btn-content .loading-indicator,
    .dark-button.has-icon .btn-content .loading-indicator,
    .cc-btn.has-icon .btn-content .loading-indicator {
        left: -26px;
    }

    .btn.has-icon.right,
    .submit.has-icon.right,
    .btn-large.has-icon.right,
    .submit-large.has-icon.right,
    .btn-large-secondary.has-icon.right,
    .dark-button.has-icon.right,
    .cc-btn.has-icon.right {
        padding-left: 15px;
        padding-right: 41px;
    }

    .btn.has-icon.right .icon,
    .submit.has-icon.right .icon,
    .btn-large.has-icon.right .icon,
    .submit-large.has-icon.right .icon,
    .btn-large-secondary.has-icon.right .icon,
    .dark-button.has-icon.right .icon,
    .cc-btn.has-icon.right .icon {
        right: 15px;
        left: initial;
    }

    .btn small,
    .submit small,
    .btn-large small,
    .submit-large small,
    .btn-large-secondary small,
    .dark-button small,
    .cc-btn small {
        margin-left: 10px;
        font-size: 12px;
        opacity: 0.67;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=67)";
        filter: alpha(opacity=67);
    }

    .btn small.dates,
    .submit small.dates,
    .btn-large small.dates,
    .submit-large small.dates,
    .btn-large-secondary small.dates,
    .dark-button small.dates,
    .cc-btn small.dates {
        font-size: 11px;
    }

    .submit,
    .submit-large {
        color: #fff;
        background: #0c92f3;
        border: 1px solid #0c92f3;
    }

    .submit .icon>path,
    .submit-large .icon>path {
        fill: #fff;
    }

    .submit:hover,
    .submit-large:hover {
        color: #fff;
        background: #007fd9;
        border: 1px solid #0c92f3;
    }

    .submit:active,
    .submit-large:active {
        background: #1a1b1c;
        border-color: #1a1b1c;
    }

    .submit:active .icon>path,
    .submit-large:active .icon>path {
        fill: #fff;
    }

    .submit:focus,
    .submit-large:focus {
        outline-color: #064979;
    }

    .btn-large,
    .btn-large-secondary {
        padding: 10px 15px;
    }

    .submit-large {
        padding: 10px 15px;
    }

    .btn-large-secondary {
        background: #969799;
        color: #fff;
        border: 1px solid #969799;
    }

    .btn-large-secondary:hover {
        background: #555659;
        color: #fff;
        border-color: #555659;
    }

    .btn-large-secondary:active {
        background: #555659;
        color: #fff;
        border-color: #555659;
    }

    .btn-large-secondary .icon>path {
        fill: #e3e4e6;
    }

    a.btn,
    a.btn-large {
        color: #555659;
    }

    a.submit,
    a.submit-large,
    a.btn-large-secondary {
        color: #fff;
    }

    .dark-button {
        background: #2c2e2f;
        border: 1px solid rgba(106, 124, 131, 0.75);
        color: #e3e4e6;
        -webkit-transition: background-color 0.15s;
        -moz-transition: background-color 0.15s;
        -o-transition: background-color 0.15s;
        -ms-transition: background-color 0.15s;
        transition: background-color 0.15s;
    }

    .dark-button .icon>path {
        fill: #dcdcdc;
    }

    .dark-button.disabled,
    .dark-button:disabled {
        background: #3f484b;
        border: 1px solid rgba(106, 124, 131, 0.5);
        color: #555659;
        pointer-events: none;
    }

    .dark-button.disabled .icon>path,
    .dark-button:disabled .icon>path {
        fill: rgba(106, 124, 131, 0.5);
    }

    .dark-button.disabled.has-tip,
    .dark-button:disabled.has-tip {
        pointer-events: auto;
    }

    .dark-button.disabled.has-tip:hover,
    .dark-button:disabled.has-tip:hover {
        background: #3f484b;
        border: 1px solid rgba(106, 124, 131, 0.5);
        color: #555659;
    }

    .dark-button.transparent {
        background-color: transparent;
    }

    .dark-button:hover {
        background: #1a1b1c;
        border-color: #7d8f95;
        color: #fcfcfc;
    }

    .dark-button:hover .icon>path {
        fill: #fff;
    }

    .dark-button:active {
        border-color: #dcdcdc;
    }

    .icon-only {
        position: relative;
        width: 32px;
        height: 30px;
    }

    .icon-only .icon {
        position: absolute;
        left: calc(50% - 8px);
        top: calc(50% - 8px);
    }

    .icon-only:hover .icon>path {
        fill: #555659;
    }

    .icon-only:active .icon>path {
        fill: #2c2e2f;
    }

    .icon-only.dark-button:hover .icon>path {
        fill: #fff;
    }

    .btn-invisible,
    .btn-no-style {
        color: #555659;
        padding: 5px 15px;
        border-color: transparent;
        -webkit-box-shadow: inset 0 0 0 1px transparent;
        box-shadow: inset 0 0 0 1px transparent;
        background: transparent;
        -webkit-transition: background 0.15s, box-shadow 0.15s, color 0.15s;
        -moz-transition: background 0.15s, box-shadow 0.15s, color 0.15s;
        -o-transition: background 0.15s, box-shadow 0.15s, color 0.15s;
        -ms-transition: background 0.15s, box-shadow 0.15s, color 0.15s;
        transition: background 0.15s, box-shadow 0.15s, color 0.15s;
    }

    .btn-invisible.disabled,
    .btn-no-style.disabled,
    .btn-invisible:disabled,
    .btn-no-style:disabled {
        cursor: default;
    }

    .btn-no-style {
        padding: 5px 10px 5px 0;
        vertical-align: baseline;
    }

    .btn-no-style:hover {
        border-color: transparent;
        color: #555659;
    }

    .btn-no-style:focus {
        -webkit-border-radius: 0;
        border-radius: 0;
        outline: none;
    }

    .btn-no-style.dark {
        color: #7d8f95;
    }

    .btn-no-style.dark:hover {
        color: #f9f9f9;
    }

    .btn-no-style.dark:active {
        background: transparent;
        border-color: transparent;
        color: #fff;
    }

    .btn-no-style .css-icon::before {
        right: 0;
    }

    .link {
        display: inline-block;
        position: relative;
        cursor: pointer;
        -webkit-transition: all 0.15s;
        -moz-transition: all 0.15s;
        -o-transition: all 0.15s;
        -ms-transition: all 0.15s;
        transition: all 0.15s;
    }

    .link.has-icon {
        padding-left: 20px;
    }

    .link.has-icon .icon {
        position: absolute;
        left: 0;
        top: calc(50% - 8px);
    }

    .link.has-icon .icon>path {
        fill: #969799;
    }

    .link.has-icon .icon-plus,
    .link.has-icon .icon-close,
    .link.has-icon .icon-delete {
        top: calc(50% - 10px);
    }

    .link.has-icon:hover .icon>path {
        fill: #555659;
    }

    .link.has-icon:active .icon>path {
        fill: #0c92f3;
    }

    .link.dark,
    .popup-content .link {
        color: #7d8f95;
    }

    .link.dark .icon>path,
    .popup-content .link .icon>path {
        fill: #7d8f95;
    }

    .link.dark:hover,
    .popup-content .link:hover {
        color: #dcdcdc;
    }

    .link.dark:hover .icon>path,
    .popup-content .link:hover .icon>path {
        fill: #dcdcdc;
    }

    .link.dark:active,
    .popup-content .link:active {
        color: #fff;
    }

    .link.secondary {
        color: #969799;
    }

    .link.secondary:hover {
        color: #555659;
    }

    button.icon-btn {
        border: 0;
        background: none;
        padding: 0;
    }

    button.icon-btn:active {
        outline: none;
    }

    .icon-btn {
        display: inline-block;
        margin-left: 10px;
        vertical-align: middle;
    }

    .icon-btn .icon {
        display: block;
    }

    .icon-btn .icon>path {
        fill: #969799;
    }

    .icon-btn:hover .icon>path {
        fill: #555659;
    }

    .icon-btn.dark .icon>path {
        fill: #6a7c83;
    }

    .icon-btn.dark:hover .icon>path {
        fill: #f9f9f9;
    }

    .link-bar {
        display: block;
        margin-top: 16px;
        white-space: nowrap;
    }

    .link-bar.no-margin {
        margin-top: 0;
    }

    .link-bar .submit,
    .link-bar .submit-large,
    .link-bar .dark-button {
        min-width: 120px;
    }

    .link-bar a,
    .link-bar button {
        vertical-align: baseline;
    }

    .link-bar.right,
    .link-bar.center {
        text-align: right;
    }

    .link-bar.right a,
    .link-bar.center a,
    .link-bar.right button,
    .link-bar.center button {
        margin-right: 15px;
    }

    .link-bar.right .btn,
    .link-bar.center .btn,
    .link-bar.right .dark-button,
    .link-bar.center .dark-button,
    .link-bar.right .submit,
    .link-bar.center .submit {
        margin-right: 10px;
    }

    .link-bar.right *:nth-last-child(1),
    .link-bar.center *:nth-last-child(1) {
        margin-right: 0;
    }

    .link-bar.left {
        text-align: left;
    }

    .link-bar.left a,
    .link-bar.left button {
        margin-left: 15px;
    }

    .link-bar.left .btn,
    .link-bar.left .dark-button,
    .link-bar.left .submit {
        margin-left: 10px;
    }

    .link-bar.left *:first-child {
        margin-left: 0;
    }

    .link-bar.center {
        text-align: center;
    }

    input[type=radio],
    input[type=checkbox] {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width: 17px;
        height: 17px;
        position: relative;
        border: 1px solid #dcdcdc;
        margin: 0;
        background: #fff;
        cursor: pointer;
    }

    input[type=radio].disabled,
    input[type=checkbox].disabled,
    input[type=radio]:disabled,
    input[type=checkbox]:disabled {
        background: #e3e4e6;
    }

    input[type=radio].dark,
    input[type=checkbox].dark {
        background: rgba(106, 124, 131, 0.2);
        border-color: rgba(106, 124, 131, 0.8);
    }

    input[type=radio].dark:checked,
    input[type=checkbox].dark:checked {
        background: #dcdcdc;
    }

    input[type=radio].dark:focus,
    input[type=checkbox].dark:focus {
        background: #f9f9f9;
    }

    input[type=radio].dark:active,
    input[type=checkbox].dark:active {
        background: #fff;
    }

    input[type=radio].dark.disabled,
    input[type=checkbox].dark.disabled,
    input[type=radio].dark:disabled,
    input[type=checkbox].dark:disabled {
        background: rgba(106, 124, 131, 0.5);
    }

    input[type=radio] {
        -webkit-border-radius: 8.5px;
        border-radius: 8.5px;
    }

    input[type=radio]:active {
        background: #dcdcdc;
    }

    input[type=radio]:checked::after {
        position: absolute;
        content: "";
        height: 9px;
        width: 9px;
        left: calc(50% - 4.5px);
        top: calc(50% - 4.5px);
        -webkit-border-radius: 4.25px;
        border-radius: 4.25px;
        background-color: #0c92f3;
    }

    input[type=checkbox] {
        -webkit-border-radius: 3px;
        border-radius: 3px;
    }

    input[type=checkbox]:active {
        background: #dcdcdc;
    }

    input[type=checkbox]:checked::after {
        position: absolute;
        content: "";
        left: 15%;
        top: 3%;
        height: 40%;
        width: 69%;
        border-bottom: 2px solid #0c92f3;
        border-left: 2px solid #0c92f3;
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }

    input[type=submit] {
        height: inherit;
    }

    input.required-checkbox[type=checkbox]:hover::after {
        position: absolute;
        -webkit-transform: none;
        -moz-transform: none;
        -o-transform: none;
        -ms-transform: none;
        transform: none;
        top: calc(50% - 6px);
        left: calc(50% - 6px);
        content: "";
        width: 11px;
        height: 11px;
        border: none;
        -webkit-background-size: contain;
        -moz-background-size: contain;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADe0lEQVRYCe2WW0jTYRTA3V3pZRWEJJJFUQQFRtCFogt7kV7cxVkGmlBPdoHepCh6CCHoJYIIyvlgLYdzUfjQnSjoQXpIYUSZ9aZQQmNzDHVbvzPa+O/bf9sf0Tf/8PF9536+c853zt9Us4RvZGTkuMlkeqOITrrd7m0KriporsqxwgyrDqxGYDUCVnlloVBoK1vC7/fPrPCrK6gPh8P70+n0WM4Bq9XaB8VDg3nPHlpcXAzjzO8C9zIdhoeH95rN5nbUtdHINmUyGZeV29cBtICUejgmC4fuRiKRdzAMQYt4PJ5Z8Ev6MNqMUT/CfnRt0SqxWCw+bFnF+BotAUYLsAtBF/s9IvOaPRSLxSLd3d1/tbx6Zy61C71yUzFatj1Dc5tQ/pjDKT1FKi6bzc6De8WaROaSlg5thnUffDtrh5ZW6WyFuQ7BNLvcuuIHjx2GE3pM0OpZ1/Vo5XDYnTUzwdypVKoB4DyMH1jZcgLLhJcUDmCvZXx8vN6kKiV/DRRHG/k/CW2fSl8KjLEE0XnGs3tCYb/ghUkqc1+JA3mC7MFgsMlut0shSV73aGkGzkkMj8pLisfjoxRvSk+mogNaAWlWRKaLyFzV4tUzRqfAXUkkEs87OzvnVLoKG54FhE0qf62qQAduhG/KiHGRNewADaUVxT06BotQ8NhADAUCAWcRoQxgyAFqoZHQP9TT8T/kKqnJ6XQGVKQeXNUBcm+pra19xM3WqQowPsg6xNKbG62086JmpcoLXNUBWuo1+A7rCP9KJpM9Xq93mko/A72kf+DYLRlAOrIFVMVXQJs+Audbbl/kKIrT4I8ypD7mNcF7G77LeViz/1xYWGimiGMaXOFYpLiA5YDC9WwS+hIeHOjTGhc5Rngv22c5K99motiv4ApgifICpaamH+MNGjh3xPjYxMTEDRUv3Y2bSveMqzT0ePgBuaDiBdZNgTBT9Xd0BOZop80+n++7Di2HInKnMTio0nF8HvxBRk9RlEocoOq322y2LyhwqEootnMU3QMVr8I4MYCxLhWPEz9I1U7tLChJQTQaldv1wZxRFDw1YlxkaMM9yH9T5CU1vVrjQi+JQF6INLi4hRThBpRNM7J3d3R0/MnTq+3yK8bs+ASfRDJK6ryk7qsqV9YBYaQDbnQ4HEGcuEnuXqrC1WBScRGeA0TkrNHZUE3nstP/Ae08V3wBOebTAAAAAElFTkSuQmCC");
        background-position: 50% 50%;
    }

    input.required-checkbox[type=checkbox]:checked {
        border: none;
        background: #f26161;
    }

    input.required-checkbox[type=checkbox]:checked:hover {
        background: #d95757;
    }

    input.required-checkbox[type=checkbox]:checked:disabled {
        background: #f8b0b0;
        cursor: auto;
    }

    input[type=checkbox].required-checkbox:checked::after {
        position: absolute;
        -webkit-transform: none;
        -moz-transform: none;
        -o-transform: none;
        -ms-transform: none;
        transform: none;
        top: calc(50% - 6px);
        content: "";
        width: 11px;
        height: 11px;
        border: none;
        -webkit-background-size: contain;
        -moz-background-size: contain;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABtklEQVRIDe2UzStEYRSHZwxpwpSNlNQUEQsbSztK7BUmbKzITvkPWMjKjpSywlIpSc1CkWxkQ5IslCQpHwvCeM6k27nnvnfuhKyceu49H79z3vv5xmJFWi6X2wBtjcW0lhQj+onmf4HIp/c3j4hPYxjqIi+nSAGzyqAXWmIc0iD2AbswAbV2FrmCnyn1UuiGJbgDsXlZYDLv+g/vhFkYgxpZjHNgAXIJ6IQFuAVrV9K4b7MmfiPegTOTXye+MblAGCfTzwUOQg+Uw2/ZCYPWvGEslIIR2IRX+I6d0zQNbd5gl4OgGkZhG+QRFbJLirPQ7poVmaNRvoww26IQjxwSJqC5Ak7Dpn/lh8L6I/MMWDbDX4gPTO6RuDlymBXQlDGDJJyCGriWQNkxftLOCI0RN8CDGiBuFvJ7F+cukJ9R22LoQF2gQ/aRQ92Jfw/1RjdjNBJmtMbpI5pzNMrP6DM0svfsGa28jyafUAcU5dZl09O2ojXaR5QGuTttRwQJrfN8CpWwqtQX+ClP4HCo9yn9E/6AQ+ZPIRqHZ+jwV9wROtlN5X9pdSscWcT5bdpRCqTQJqEqUCDxCYHVRpVrffeeAAAAAElFTkSuQmCC");
        background-position: 50% 50%;
    }

    input::placeholder,
    textarea::placeholder {
        color: #969799;
    }

    input:-ms-input-placeholder,
    textarea:-ms-input-placeholder {
        color: #969799;
    }

    .classic-input,
    .large-input {
        -webkit-transition: border-color 0.15s, background 0.15s;
        -moz-transition: border-color 0.15s, background 0.15s;
        -o-transition: border-color 0.15s, background 0.15s;
        -ms-transition: border-color 0.15s, background 0.15s;
        transition: border-color 0.15s, background 0.15s;
        border: 1px solid #e3e4e6;
        background-color: #fff;
        padding: 4px 10px;
        -webkit-border-radius: 3px;
        border-radius: 3px;
    }

    .classic-input.invalid,
    .large-input.invalid {
        border: 1px solid #d94141;
    }

    .classic-input.invalid:focus,
    .large-input.invalid:focus {
        outline: none;
    }

    .classic-input.invalid:hover,
    .large-input.invalid:hover {
        border: 1px solid #d94141;
    }

    .classic-input:hover,
    .large-input:hover {
        background-color: #fff;
        border-color: rgba(12, 146, 243, 0.5);
    }

    .classic-input:active,
    .large-input:active,
    .classic-input:focus,
    .large-input:focus {
        outline: none;
        -webkit-box-shadow: none;
        box-shadow: none;
        background-color: #fff;
        border-color: #0c92f3;
    }

    .classic-input.disabled,
    .large-input.disabled,
    .classic-input:disabled,
    .large-input:disabled {
        background: #f9f9f9;
        color: #969799;
    }

    .classic-input.disabled:hover,
    .large-input.disabled:hover,
    .classic-input:disabled:hover,
    .large-input:disabled:hover,
    .classic-input.disabled:active,
    .large-input.disabled:active,
    .classic-input:disabled:active,
    .large-input:disabled:active {
        border-color: #e3e4e6;
    }

    .classic-input::-ms-clear,
    .large-input::-ms-clear {
        display: none;
    }

    textarea.classic-input {
        resize: vertical;
    }

    .hoverable-input {
        -webkit-transition: border-color 0.3s, background-color 0.3s;
        -moz-transition: border-color 0.3s, background-color 0.3s;
        -o-transition: border-color 0.3s, background-color 0.3s;
        -ms-transition: border-color 0.3s, background-color 0.3s;
        transition: border-color 0.3s, background-color 0.3s;
        border: 1px solid transparent;
        background-color: transparent;
        padding: 4px 10px;
        -webkit-border-radius: 3px;
        border-radius: 3px;
    }

    .hoverable-input.invalid {
        border: 1px solid #d94141;
        outline: none;
    }

    .hoverable-input:hover {
        background-color: #fff;
        border-color: #e3e4e6;
    }

    .hoverable-input:active,
    .hoverable-input:focus {
        outline: none;
        -webkit-box-shadow: none;
        box-shadow: none;
        background-color: #f9f9f9;
        border-color: #e3e4e6;
    }

    .dark-input,
    .large-input.dark {
        height: 30px;
        color: #f9f9f9;
        padding: 4px 10px;
        background: rgba(106, 124, 131, 0.5);
        border: none;
        color: #e3e4e6;
        -webkit-border-radius: 3px;
        border-radius: 3px;
    }

    .dark-input.invalid,
    .large-input.dark.invalid {
        border: 1px solid #d94141;
    }

    .dark-input.invalid:focus,
    .large-input.dark.invalid:focus {
        outline: none;
    }

    .dark-input.invalid:hover,
    .large-input.dark.invalid:hover {
        border: 1px solid #d94141;
    }

    .dark-input:hover,
    .large-input.dark:hover {
        background: #6a7c83;
    }

    .dark-input:focus,
    .large-input.dark:focus {
        background: #fff;
        color: #555659;
        outline: none;
    }

    textarea.dark-input {
        height: auto;
    }

    .large-input {
        height: 40px;
    }

    .large-input.dark {
        height: 40px;
    }

    .no-input {
        background: none;
        border: none;
        outline: none;
        -webkit-box-shadow: none;
        box-shadow: none;
        margin: 0;
        padding: 0;
        resize: none;
    }

    .no-input.dark {
        color: #f9f9f9;
    }

    .options-list {
        list-style-type: none;
    }

    .options-list li {
        margin-bottom: 8px;
    }

    .options-list li.list-padding {
        margin-bottom: 16px;
    }

    .options-list label {
        display: block;
        position: relative;
        cursor: pointer;
    }

    .options-list label input[type=checkbox],
    .options-list label input[type=radio] {
        position: absolute;
    }

    .options-list label input[type=checkbox]~span,
    .options-list label input[type=radio]~span,
    .options-list label input[type=checkbox]~p,
    .options-list label input[type=radio]~p {
        padding-left: 26px;
        display: block;
        color: #555659;
    }

    .options-list label input[type=checkbox]:checked~span,
    .options-list label input[type=radio]:checked~span,
    .options-list label input[type=checkbox]:checked~p,
    .options-list label input[type=radio]:checked~p {
        color: #555659;
    }

    .popup-content .options-list input[type="checkbox"],
    .sheets-content .options-list input[type="checkbox"],
    .modal-legacy.dark .options-list input[type="checkbox"],
    .popup-content .options-list input[type="radio"],
    .sheets-content .options-list input[type="radio"],
    .modal-legacy.dark .options-list input[type="radio"] {
        background: rgba(106, 124, 131, 0.5);
        border-color: rgba(106, 124, 131, 0.8);
    }

    .popup-content .options-list input[type="checkbox"]~span,
    .sheets-content .options-list input[type="checkbox"]~span,
    .modal-legacy.dark .options-list input[type="checkbox"]~span,
    .popup-content .options-list input[type="radio"]~span,
    .sheets-content .options-list input[type="radio"]~span,
    .modal-legacy.dark .options-list input[type="radio"]~span,
    .popup-content .options-list input[type="checkbox"]~p,
    .sheets-content .options-list input[type="checkbox"]~p,
    .modal-legacy.dark .options-list input[type="checkbox"]~p,
    .popup-content .options-list input[type="radio"]~p,
    .sheets-content .options-list input[type="radio"]~p,
    .modal-legacy.dark .options-list input[type="radio"]~p {
        color: #a4b0b4;
    }

    .popup-content .options-list input[type="checkbox"]:checked,
    .sheets-content .options-list input[type="checkbox"]:checked,
    .modal-legacy.dark .options-list input[type="checkbox"]:checked,
    .popup-content .options-list input[type="radio"]:checked,
    .sheets-content .options-list input[type="radio"]:checked,
    .modal-legacy.dark .options-list input[type="radio"]:checked {
        background: #dcdcdc;
    }

    .popup-content .options-list input[type="checkbox"]:checked~span,
    .sheets-content .options-list input[type="checkbox"]:checked~span,
    .modal-legacy.dark .options-list input[type="checkbox"]:checked~span,
    .popup-content .options-list input[type="radio"]:checked~span,
    .sheets-content .options-list input[type="radio"]:checked~span,
    .modal-legacy.dark .options-list input[type="radio"]:checked~span,
    .popup-content .options-list input[type="checkbox"]:checked~p,
    .sheets-content .options-list input[type="checkbox"]:checked~p,
    .modal-legacy.dark .options-list input[type="checkbox"]:checked~p,
    .popup-content .options-list input[type="radio"]:checked~p,
    .sheets-content .options-list input[type="radio"]:checked~p,
    .modal-legacy.dark .options-list input[type="radio"]:checked~p {
        color: #f9f9f9;
    }

    .popup-content .options-list input[type="checkbox"]:focus,
    .sheets-content .options-list input[type="checkbox"]:focus,
    .modal-legacy.dark .options-list input[type="checkbox"]:focus,
    .popup-content .options-list input[type="radio"]:focus,
    .sheets-content .options-list input[type="radio"]:focus,
    .modal-legacy.dark .options-list input[type="radio"]:focus {
        background: #f9f9f9;
    }

    .popup-content .options-list input[type="checkbox"].disabled,
    .sheets-content .options-list input[type="checkbox"].disabled,
    .modal-legacy.dark .options-list input[type="checkbox"].disabled,
    .popup-content .options-list input[type="radio"].disabled,
    .sheets-content .options-list input[type="radio"].disabled,
    .modal-legacy.dark .options-list input[type="radio"].disabled,
    .popup-content .options-list input[type="checkbox"]:disabled,
    .sheets-content .options-list input[type="checkbox"]:disabled,
    .modal-legacy.dark .options-list input[type="checkbox"]:disabled,
    .popup-content .options-list input[type="radio"]:disabled,
    .sheets-content .options-list input[type="radio"]:disabled,
    .modal-legacy.dark .options-list input[type="radio"]:disabled {
        opacity: 0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
        filter: alpha(opacity=50);
    }

    .popup-content .options-list input[type="checkbox"].disabled~span,
    .sheets-content .options-list input[type="checkbox"].disabled~span,
    .modal-legacy.dark .options-list input[type="checkbox"].disabled~span,
    .popup-content .options-list input[type="radio"].disabled~span,
    .sheets-content .options-list input[type="radio"].disabled~span,
    .modal-legacy.dark .options-list input[type="radio"].disabled~span,
    .popup-content .options-list input[type="checkbox"]:disabled~span,
    .sheets-content .options-list input[type="checkbox"]:disabled~span,
    .modal-legacy.dark .options-list input[type="checkbox"]:disabled~span,
    .popup-content .options-list input[type="radio"]:disabled~span,
    .sheets-content .options-list input[type="radio"]:disabled~span,
    .modal-legacy.dark .options-list input[type="radio"]:disabled~span,
    .popup-content .options-list input[type="checkbox"].disabled~p,
    .sheets-content .options-list input[type="checkbox"].disabled~p,
    .modal-legacy.dark .options-list input[type="checkbox"].disabled~p,
    .popup-content .options-list input[type="radio"].disabled~p,
    .sheets-content .options-list input[type="radio"].disabled~p,
    .modal-legacy.dark .options-list input[type="radio"].disabled~p,
    .popup-content .options-list input[type="checkbox"]:disabled~p,
    .sheets-content .options-list input[type="checkbox"]:disabled~p,
    .modal-legacy.dark .options-list input[type="checkbox"]:disabled~p,
    .popup-content .options-list input[type="radio"]:disabled~p,
    .sheets-content .options-list input[type="radio"]:disabled~p,
    .modal-legacy.dark .options-list input[type="radio"]:disabled~p {
        opacity: 0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
        filter: alpha(opacity=50);
    }

    .popup-content .options-list input[type="radio"],
    .sheets-content .options-list input[type="radio"],
    .modal-legacy.dark .options-list input[type="radio"] {
        -webkit-border-radius: 8.5px;
        border-radius: 8.5px;
    }

    .loading-indicator {
        display: inline-block;
        -webkit-border-radius: 30px;
        border-radius: 30px;
        -webkit-animation: loading 1.2s infinite linear;
        -moz-animation: loading 1.2s infinite linear;
        -o-animation: loading 1.2s infinite linear;
        -ms-animation: loading 1.2s infinite linear;
        animation: loading 1.2s infinite linear;
        width: 30px;
        height: 30px;
        border: 4px solid #0c92f3;
        border-top: 4px solid #e3e4e6;
        border-left: 4px solid #e3e4e6;
        vertical-align: middle;
    }

    .loading-indicator.small {
        margin-right: 10px;
        width: 16px;
        height: 16px;
        border: 2px solid #0c92f3;
        border-top: 2px solid #e3e4e6;
        border-left: 2px solid #e3e4e6;
    }

    .loading-indicator.small.completed {
        border: 2px solid #555659;
    }

    .loading-indicator.small.completed .icon {
        vertical-align: top;
        width: 10px;
        height: 10px;
    }

    .loading-indicator.completed {
        border: 4px solid #555659;
        text-align: center;
        -webkit-animation: none;
        -moz-animation: none;
        -o-animation: none;
        -ms-animation: none;
        animation: none;
    }

    .loading-indicator .icon {
        margin-left: 1px;
        height: 100%;
        vertical-align: middle;
    }

    .loading-indicator .icon>path {
        fill: #39bf87;
    }

    .loading-indicator.fadein {
        -webkit-animation: loading 1.2s linear infinite, lever-fadein 300ms ease-in 150ms;
        -moz-animation: loading 1.2s linear infinite, lever-fadein 300ms ease-in 150ms;
        -o-animation: loading 1.2s linear infinite, lever-fadein 300ms ease-in 150ms;
        -ms-animation: loading 1.2s linear infinite, lever-fadein 300ms ease-in 150ms;
        animation: loading 1.2s linear infinite, lever-fadein 300ms ease-in 150ms;
    }

    @-moz-keyframes loading {
        0% {
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            transform: rotate(0deg);
        }

        100% {
            -webkit-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @-webkit-keyframes loading {
        0% {
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            transform: rotate(0deg);
        }

        100% {
            -webkit-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @-o-keyframes loading {
        0% {
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            transform: rotate(0deg);
        }

        100% {
            -webkit-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @keyframes loading {
        0% {
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            transform: rotate(0deg);
        }

        100% {
            -webkit-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    .css-icon {
        display: inline-block;
        width: 16px;
        height: 1px;
    }

    .css-icon::before {
        position: absolute;
        display: block;
        content: "";
        right: 10px;
        top: calc(50% - 8px);
        width: 16px;
        height: 16px;
    }

    .css-icon-plus::before {
        background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16'><path d='M7.5,3h1v4.5H13v1H8.5V13h-1V8.5H3v-1h4.5V3z'></path></svg>") no-repeat 0 0;
    }

    .css-icon-caret-down::before {
        background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16'><path fill='%23979797' d='M8 12l6.8-7.3L14.1 4l-6.1 6.5L1.9 4l-0.7 0.7L8 12zM8 12l6.8-7.3L14.1 4l-6.1 6.5L1.9 4l-0.7 0.7L8 12z'></path></svg>") no-repeat 0 0;
    }

    .btn-no-style.dark:hover .css-icon-caret-down::before {
        background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16'><path fill='%23DCDCDC' d='M8 12l6.8-7.3L14.1 4l-6.1 6.5L1.9 4l-0.7 0.7L8 12zM8 12l6.8-7.3L14.1 4l-6.1 6.5L1.9 4l-0.7 0.7L8 12z'></path></svg>") no-repeat 0 0;
    }

    .toggle-label {
        clear: left;
        color: #969799;
        line-height: 22px;
    }

    .toggle-label button {
        float: left;
        margin-right: 10px;
    }

    .toggle-slider {
        margin-left: 10px;
        background: #fff;
        width: 45px;
        height: 22px;
        -webkit-border-radius: 11px;
        border-radius: 11px;
        position: relative;
        vertical-align: middle;
        border: 1px solid #dcdcdc;
        -webkit-transition: background 150ms;
        -moz-transition: background 150ms;
        -o-transition: background 150ms;
        -ms-transition: background 150ms;
        transition: background 150ms;
    }

    .toggle-slider:focus {
        outline: none;
    }

    .toggle-slider:hover {
        background-color: #f9f9f9;
    }

    .toggle-slider .ball {
        height: 16px;
        width: 16px;
        -webkit-border-radius: 8px;
        border-radius: 8px;
        position: absolute;
        background-color: #dcdcdc;
        left: 2px;
        top: 2px;
        right: auto;
        -webkit-transition: 150ms;
        -moz-transition: 150ms;
        -o-transition: 150ms;
        -ms-transition: 150ms;
        transition: 150ms;
    }

    .toggle-slider .ball:hover {
        background: #969799;
    }

    .toggle-slider.on .ball {
        left: 25px;
        background: #39bf87;
    }

    .toggle-slider.on .ball:hover {
        background: #30a272;
    }

    .message-banner {
        position: relative;
        display: inline-block;
        margin-bottom: 20px;
        padding: 9px 15px;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        background: #e1f3ff;
        color: #6a7c83;
    }

    .message-banner.full-width {
        display: block;
    }

    .message-banner.centered {
        text-align: center;
    }

    .message-banner.has-icon {
        padding-left: 41px;
    }

    .message-banner.has-dismiss {
        padding-right: 41px;
    }

    .message-banner.has-dismiss .icon-btn {
        position: absolute;
        right: 15px;
        top: 6px;
    }

    .message-banner.has-dismiss .icon-btn .icon {
        position: relative;
        left: inherit;
        top: inherit;
    }

    .message-banner.has-button {
        padding-top: 14px;
        padding-right: 180px;
        padding-bottom: 14px;
    }

    .message-banner.has-button .icon {
        top: 15px;
    }

    .message-banner.has-button .btn,
    .message-banner.has-button button {
        position: absolute;
        right: 10px;
        top: 10px;
    }

    .message-banner a,
    .message-banner a:visited {
        color: #555659;
    }

    .message-banner a:hover,
    .message-banner a:visited:hover {
        color: #1a1b1c;
    }

    .message-banner .icon {
        position: absolute;
        left: 15px;
        top: 10px;
    }

    .message-banner .icon>path {
        fill: #6a7c83;
    }

    .message-banner .label {
        color: #555659;
    }

    .message-banner .btn {
        float: right;
    }

    .message-banner.warning {
        background: #fec;
    }

    .message-banner.error {
        background: #ffe6e6;
        color: #555659;
    }

    .message-banner.error .label {
        color: #555659;
    }

    .message-banner.error .icon>path {
        fill: #555659;
    }

    .what-is-this {
        display: inline-block;
        color: #969799;
        cursor: default;
        padding-left: 4px;
        font-size: 12px;
    }

    .what-is-this.dark {
        color: #6a7c83;
    }

    .what-is-this.dark:hover {
        color: #f9f9f9;
    }

    .what-is-this .icon>path {
        fill: #969799;
    }

    .what-is-this:hover {
        color: #555659;
    }

    .what-is-this:hover .icon>path {
        fill: #555659;
    }

    .what-is-this-icon {
        display: inline-block;
        margin-left: 10px;
    }

    .what-is-this-icon .icon {
        width: 12px;
        height: 12px;
    }

    .what-is-this-icon .icon>path {
        fill: #969799;
    }

    .what-is-this-icon:hover .icon>path {
        fill: #555659;
    }

    .what-is-this-icon.no-margin {
        margin-left: 4px;
    }

    .what-is-this-icon.dark .icon>path {
        fill: #6a7c83;
    }

    .what-is-this-icon.dark:hover .icon>path {
        fill: #dde5e7;
    }

    .gated-feature,
    .gated-feature-inline,
    .gated-feature-inline-enterprise,
    .gated-feature-inline-professional,
    .gated-feature-inline-starter,
    .gated-feature-block,
    .gated-feature-block-pro {
        position: relative;
        cursor: pointer;
        background: rgba(227, 228, 230, 0.5);
    }

    .gated-feature:before,
    .gated-feature-inline:before,
    .gated-feature-inline-enterprise:before,
    .gated-feature-inline-professional:before,
    .gated-feature-inline-starter:before,
    .gated-feature-block:before,
    .gated-feature-block-pro:before {
        content: 'Enterprise';
        font-size: 12px;
        color: #fff;
        background-color: #39bf87;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        padding: 2px 10px;
        position: absolute;
        right: 15px;
    }

    .gated-feature:after,
    .gated-feature-inline:after,
    .gated-feature-inline-enterprise:after,
    .gated-feature-inline-professional:after,
    .gated-feature-inline-starter:after,
    .gated-feature-block:after,
    .gated-feature-block-pro:after {
        cursor: pointer;
        content: '';
        -webkit-border-radius: 3px;
        border-radius: 3px;
        border: 1px solid #e3e4e6;
    }

    .gated-feature-inline,
    .gated-feature-inline-enterprise,
    .gated-feature-inline-professional,
    .gated-feature-inline-starter {
        border: 1px solid #e3e4e6;
        -webkit-border-radius: 3px;
        border-radius: 3px;
    }

    .gated-feature-inline:before,
    .gated-feature-inline-enterprise:before,
    .gated-feature-inline-professional:before,
    .gated-feature-inline-starter:before {
        content: 'Enterprise';
        position: absolute;
        float: right;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        margin-left: 10px;
    }

    .gated-feature-inline:after,
    .gated-feature-inline-enterprise:after,
    .gated-feature-inline-professional:after,
    .gated-feature-inline-starter:after {
        content: none;
        display: none;
    }

    .gated-feature-inline *,
    .gated-feature-inline-enterprise *,
    .gated-feature-inline-professional *,
    .gated-feature-inline-starter * {
        pointer-events: none;
    }

    .gated-feature-inline-professional:before {
        content: 'Pro';
    }

    .gated-feature-inline-starter:before {
        content: 'Starter';
    }

    .gated-feature-block,
    .gated-feature-block-pro {
        margin-top: 32px;
        padding: 15px 15px;
    }

    .gated-feature-block:before,
    .gated-feature-block-pro:before {
        top: 15px;
        -webkit-transform: none;
        -moz-transform: none;
        -o-transform: none;
        -ms-transform: none;
        transform: none;
    }

    .gated-feature-block:after,
    .gated-feature-block-pro:after {
        pointer-events: none;
    }

    .gated-feature-block-pro:before {
        content: 'Pro';
    }

    .gated-ad {
        max-width: 600px;
        min-height: 270px;
    }

    .gated-ad .pull-left {
        float: left;
        margin-right: 70px;
    }

    .gated-ad div.pull-left,
    .gated-ad div.image {
        margin-top: 25px;
    }

    .gated-ad ul li {
        margin: 0 0 32px 0;
        list-style: none;
    }

    .gated-ad ul li .icon {
        vertical-align: sub;
        margin-right: 10px;
    }

    .gated-ad ul li .icon>path {
        fill: #969799;
    }

    .momentum-body,
    .badge,
    .theme-inverse .button.button-link,
    .button.button-link,
    .font-base {
        font-family: 'Meta', sans-serif;
        letter-spacing: 0;
        text-transform: none;
    }

    .momentum-body .icon,
    .badge .icon,
    .theme-inverse .button.button-link .icon,
    .button.button-link .icon,
    .font-base .icon,
    .momentum-body .momentum-body .icon,
    .momentum-body .badge .icon,
    .momentum-body .theme-inverse .button.button-link .icon,
    .momentum-body .button.button-link .icon,
    .momentum-body .font-base .icon {
        vertical-align: -0.15em;
    }

    .momentum-body {
        color: #555659;
        font-size: 16px;
        font-weight: normal;
        line-height: 24px;
        margin: 0;
    }

    .button,
    .mo-identicon-initials,
    .col-list-row-header,
    .nav-link,
    .font-caps {
        font-family: 'Meta-Caps', 'Meta', sans-serif;
        letter-spacing: 1px;
        text-transform: lowercase;
    }

    .button .icon,
    .mo-identicon-initials .icon,
    .col-list-row-header .icon,
    .nav-link .icon,
    .font-caps .icon,
    .momentum-body .button .icon,
    .momentum-body .mo-identicon-initials .icon,
    .momentum-body .col-list-row-header .icon,
    .momentum-body .nav-link .icon,
    .momentum-body .font-caps .icon {
        vertical-align: -0.188em;
    }

    .form-control,
    .font-inherit {
        font-family: inherit;
        letter-spacing: inherit;
        text-transform: inherit;
    }

    .theme-inverse .button {
        -moz-osx-font-smoothing: auto;
        -webkit-font-smoothing: auto;
    }

    .theme-inverse,
    .theme-inverse .text-base,
    .theme-inverse .text-small,
    .theme-inverse .text-caption {
        -moz-osx-font-smoothing: auto;
        -webkit-font-smoothing: auto;
    }

    .momentum-body h1,
    .momentum-body h2,
    .momentum-body h3,
    .momentum-body h4,
    .momentum-body h5,
    .momentum-body b,
    .momentum-body strong,
    .text-h1,
    .text-h2,
    .text-h3,
    .text-h3_5,
    .text-h4,
    .text-h5 {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
    }

    .theme-inverse h1,
    .theme-inverse h2,
    .theme-inverse h3,
    .theme-inverse h4,
    .theme-inverse h5,
    .theme-inverse b,
    .theme-inverse strong,
    .theme-inverse .text-h1,
    .theme-inverse .text-h2,
    .theme-inverse .text-h3,
    .theme-inverse .text-h3_5,
    .theme-inverse .text-h4,
    .theme-inverse .text-h5 {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
    }

    .theme-inverse {
        background-color: #3b3d3f;
        color: #d7d7d9;
    }

    .momentum-body p {
        margin-bottom: 16px;
        margin-top: 0;
    }

    .momentum-body h1,
    .momentum-body h2,
    .momentum-body h3,
    .momentum-body h4,
    .momentum-body h5 {
        color: #222326;
        font-weight: bold;
        margin-bottom: 8px;
        margin-top: 0;
        text-transform: none;
    }

    .momentum-body h1 {
        font-size: 40px;
        line-height: 48px;
    }

    .momentum-body h2 {
        font-size: 32px;
        line-height: 40px;
    }

    .momentum-body h3 {
        font-size: 24px;
        line-height: 36px;
    }

    .momentum-body h4 {
        font-size: 16px;
        letter-spacing: 0;
        font-family: 'Meta', sans-serif;
        line-height: 24px;
    }

    .momentum-body h5 {
        font-size: 14px;
        line-height: 21px;
    }

    .momentum-body small {
        font-size: 14px;
        line-height: 21px;
    }

    .momentum-body ol,
    .momentum-body ul {
        margin-bottom: 16px;
        margin-top: 0;
        padding-left: 16px;
    }

    .momentum-body ol ol,
    .momentum-body ul ol,
    .momentum-body ol ul,
    .momentum-body ul ul {
        margin-bottom: 0;
    }

    .momentum-body b,
    .momentum-body strong {
        font-weight: bolder;
    }

    .momentum-body a {
        -webkit-text-decoration-skip: objects;
        background-color: transparent;
        color: inherit;
        text-decoration: underline;
    }

    .momentum-body a:visited {
        color: inherit;
    }

    .momentum-body a:hover {
        color: #0068b3;
    }

    .momentum-body a:active {
        color: #003459;
    }

    .momentum-body a.strikethrough {
        text-decoration: line-through;
    }

    .momentum-body a.text-muted {
        color: #969799;
    }

    .momentum-body a.text-decoration-none {
        text-decoration: none;
    }

    .momentum-body a.underline-on-hover {
        text-decoration: none;
    }

    .momentum-body a.underline-on-hover:hover,
    .momentum-body a.underline-on-hover:active,
    .momentum-body a.underline-on-hover:focus {
        text-decoration: underline;
    }

    .momentum-body hr {
        background: #e3e4e6;
        border: none;
        height: 1px;
        margin-bottom: 4px;
        margin-top: 3px;
    }

    .momentum-body section {
        margin-bottom: 32px;
    }

    .momentum-body input[type=text] {
        height: auto;
    }

    .momentum-body button {
        cursor: pointer;
    }

    .momentum-body .icon {
        display: inline-block;
        height: 16px;
        margin-left: 8px;
        margin-right: 8px;
        width: 16px;
    }

    .momentum-body .icon>path {
        fill: currentColor;
    }

    .momentum-body .icon:first-child {
        margin-left: 0;
    }

    .momentum-body .icon:last-child {
        margin-right: 0;
    }

    .momentum-body .icon-small {
        height: 14px;
        width: 14px;
        margin-left: 8px;
        margin-right: 8px;
    }

    .momentum-body .icon-caption {
        height: 12px;
        width: 12px;
        margin-left: 4px;
        margin-right: 4px;
    }

    .momentum-body .icon-thumbnail {
        height: 48px;
        margin-left: $iconThumbnailMarginX;
        margin-right: $iconThumbnailMarginX;
        width: 48px;
    }

    .badge {
        -webkit-border-radius: 3px;
        border-radius: 3px;
        display: inline-block;
        font-size: 14px;
        height: 20px;
        line-height: 20px;
        margin-left: 8px;
        margin-right: 8px;
        min-width: 20px;
        padding-left: 4px;
        padding-right: 4px;
        text-align: center;
    }

    .badge:first-child {
        margin-left: 0;
    }

    .badge:last-child {
        margin-right: 0;
    }

    .badge {
        background-color: #e3e4e6;
        color: #969799;
    }

    .theme-inverse .badge {
        background-color: #555659;
        color: #d7d7d9;
    }

    .theme-inverse .badge.badge-default {
        background-color: #e3e4e6;
        color: #969799;
    }

    .badge.badge-primary {
        background-color: #0c92f3;
        color: #fff;
    }

    .badge.badge-secondary {
        background-color: #969799;
        color: #fff;
    }

    .badge.badge-positive {
        background-color: #39bf71;
        color: #fff;
    }

    .badge.badge-negative {
        background-color: #d94141;
        color: #fff;
    }

    .badge.badge-inverse {
        background-color: #555659;
        color: #d7d7d9;
    }

    .badge.badge-white {
        background-color: #fff;
        color: #555659;
    }

    .badge.badge-gray {
        background-color: #969799;
        color: #fff;
    }

    .badge.badge-black {
        background-color: #000;
        color: #fff;
    }

    .badge.badge-small {
        font-size: 12px;
        height: 18px;
        line-height: 18px;
        min-width: 18px;
    }

    .badge.badge-caption {
        font-size: 12px;
        height: 16px;
        line-height: 16px;
        min-width: 16px;
    }

    .button,
    a.button {
        background-color: #fff;
        background-image: -webkit-linear-gradient(rgba(249, 249, 249, 0) 0%, #f9f9f9 100%);
        background-image: -moz-linear-gradient(rgba(249, 249, 249, 0) 0%, #f9f9f9 100%);
        background-image: -o-linear-gradient(rgba(249, 249, 249, 0) 0%, #f9f9f9 100%);
        background-image: -ms-linear-gradient(rgba(249, 249, 249, 0) 0%, #f9f9f9 100%);
        background-image: linear-gradient(rgba(249, 249, 249, 0) 0%, #f9f9f9 100%);
        border: 1px solid rgba(215, 215, 217, 0.7);
        color: #555659;
        padding: 7px 15px;
    }

    .button:hover,
    a.button:hover,
    .button.hover,
    a.button.hover {
        background-color: #fff;
        border-color: #b1b1b3;
        color: #555659;
    }

    .button:active,
    a.button:active,
    .button.active,
    a.button.active {
        background-color: #e3e4e6;
        border-color: #b1b1b3;
        color: #555659;
    }

    .button.selected,
    a.button.selected {
        background-color: #e3e4e6;
        color: #555659;
    }

    .button[disabled],
    a.button[disabled],
    .button.disabled,
    a.button.disabled {
        cursor: default;
        opacity: 0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
        filter: alpha(opacity=50);
    }

    .button[disabled]:hover,
    a.button[disabled]:hover,
    .button.disabled:hover,
    a.button.disabled:hover,
    .button[disabled]:active,
    a.button[disabled]:active,
    .button.disabled:active,
    a.button.disabled:active {
        background-color: #fff;
        background-image: $buttonBackgroundGradient;
        border-color: rgba(215, 215, 217, 0.7);
        color: #555659;
    }

    .button.button-square,
    a.button.button-square {
        padding: 7px 11px;
    }

    .button.button-lg,
    a.button.button-lg {
        padding: 5px 15px;
    }

    .button.button-lg.button-square,
    a.button.button-lg.button-square {
        padding: 5px 14px;
    }

    .button.button-sm,
    a.button.button-sm {
        padding: 3px 15px;
    }

    .button.button-sm.button-square,
    a.button.button-sm.button-square {
        padding: 3px 8px;
    }

    .button-group .button:hover,
    .button-group a.button:hover {
        border-right-width: 1px;
    }

    .button-group .button:hover+.button,
    .button-group a.button:hover+.button {
        margin-left: 0;
        border-left-width: 0;
    }

    .button {
        -webkit-border-radius: 3px;
        border-radius: 3px;
        cursor: pointer;
        display: inline-block;
        font-size: 14px;
        line-height: 24px;
        margin-right: 8px;
        text-align: center;
        -webkit-transition: border-color 0.15s ease-in-out, background-color 0.15s ease-in-out;
        -moz-transition: border-color 0.15s ease-in-out, background-color 0.15s ease-in-out;
        -o-transition: border-color 0.15s ease-in-out, background-color 0.15s ease-in-out;
        -ms-transition: border-color 0.15s ease-in-out, background-color 0.15s ease-in-out;
        transition: border-color 0.15s ease-in-out, background-color 0.15s ease-in-out;
    }

    .button,
    .momentum-body .button {
        text-decoration: none;
    }

    .button:last-child {
        margin-right: 0;
    }

    .button .icon {
        margin-left: 12px;
        margin-right: 12px;
        opacity: 0.95;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=95)";
        filter: alpha(opacity=95);
        -webkit-transition: opacity 0.15s ease-in-out;
        -moz-transition: opacity 0.15s ease-in-out;
        -o-transition: opacity 0.15s ease-in-out;
        -ms-transition: opacity 0.15s ease-in-out;
        transition: opacity 0.15s ease-in-out;
    }

    .button .icon:first-child {
        margin-left: 0;
    }

    .button .icon:last-child {
        margin-right: 0;
    }

    .theme-inverse .button {
        background-color: #555659;
        background-image: none;
        border-color: #969799;
        border-width: 0;
        color: #fff;
        padding: 8px 16px;
    }

    .theme-inverse .button .icon {
        opacity: 0.7;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=70)";
        filter: alpha(opacity=70);
    }

    .theme-inverse .button:visited {
        color: #fff;
    }

    .theme-inverse .button:hover,
    .theme-inverse .button.hover {
        background-color: #707173;
        border-color: #969799;
        color: #fff;
    }

    .theme-inverse .button:hover .icon,
    .theme-inverse .button.hover .icon {
        opacity: 1;
        -ms-filter: none;
        filter: none;
    }

    .theme-inverse .button:active,
    .theme-inverse .button.active {
        background-color: #969799;
        border-color: #969799;
        color: #fff;
    }

    .theme-inverse .button.selected {
        background-color: #969799;
        border-color: #969799;
        color: #fff;
    }

    .theme-inverse .button[disabled]:hover,
    .theme-inverse .button.disabled:hover,
    .theme-inverse .button[disabled]:active,
    .theme-inverse .button.disabled:active {
        background-color: #555659;
        background-image: none;
        color: #fff;
    }

    .theme-inverse .button[disabled]:hover .icon,
    .theme-inverse .button.disabled:hover .icon,
    .theme-inverse .button[disabled]:active .icon,
    .theme-inverse .button.disabled:active .icon {
        opacity: 0.7;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=70)";
        filter: alpha(opacity=70);
    }

    .theme-inverse .button.button-square {
        padding: 8px 12px;
    }

    .theme-inverse .button.button-lg {
        padding: 6px 16px;
    }

    .theme-inverse .button.button-lg.button-square {
        padding: 6px 15px;
    }

    .theme-inverse .button.button-sm {
        padding: 4px 16px;
    }

    .theme-inverse .button.button-sm.button-square {
        padding: 4px 9px;
    }

    .button-group .theme-inverse .button:hover {
        border-right-width: 0;
    }

    .button-group .theme-inverse .button:hover+.button {
        margin-left: -1px;
        border-left-width: 1px;
    }

    .theme-inverse .button.button-secondary {
        background-color: #3b3d3f;
        background-image: none;
        border-color: #969799;
        border-width: 1px;
        color: #d7d7d9;
        padding: 8px 16px;
    }

    .theme-inverse .button.button-secondary .icon {
        opacity: 0.9;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=90)";
        filter: alpha(opacity=90);
    }

    .theme-inverse .button.button-secondary:visited {
        color: #d7d7d9;
    }

    .theme-inverse .button.button-secondary:hover,
    .theme-inverse .button.button-secondary.hover {
        background-color: #555659;
        border-color: #969799;
        color: #d7d7d9;
    }

    .theme-inverse .button.button-secondary:hover .icon,
    .theme-inverse .button.button-secondary.hover .icon {
        opacity: 1;
        -ms-filter: none;
        filter: none;
    }

    .theme-inverse .button.button-secondary:active,
    .theme-inverse .button.button-secondary.active {
        background-color: #707173;
        border-color: #969799;
        color: #d7d7d9;
    }

    .theme-inverse .button.button-secondary.selected {
        background-color: #707173;
        border-color: #969799;
        color: #d7d7d9;
    }

    .theme-inverse .button.button-secondary[disabled]:hover,
    .theme-inverse .button.button-secondary.disabled:hover,
    .theme-inverse .button.button-secondary[disabled]:active,
    .theme-inverse .button.button-secondary.disabled:active {
        background-color: #3b3d3f;
        background-image: none;
        color: #d7d7d9;
    }

    .theme-inverse .button.button-secondary[disabled]:hover .icon,
    .theme-inverse .button.button-secondary.disabled:hover .icon,
    .theme-inverse .button.button-secondary[disabled]:active .icon,
    .theme-inverse .button.button-secondary.disabled:active .icon {
        opacity: 0.9;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=90)";
        filter: alpha(opacity=90);
    }

    .theme-inverse .button.button-secondary.button-square {
        padding: 8px 12px;
    }

    .theme-inverse .button.button-secondary.button-lg {
        padding: 6px 16px;
    }

    .theme-inverse .button.button-secondary.button-lg.button-square {
        padding: 6px 15px;
    }

    .theme-inverse .button.button-secondary.button-sm {
        padding: 4px 16px;
    }

    .theme-inverse .button.button-secondary.button-sm.button-square {
        padding: 4px 9px;
    }

    .button-group .theme-inverse .button.button-secondary:hover {
        border-right-width: 0;
    }

    .button-group .theme-inverse .button.button-secondary:hover+.button {
        margin-left: -1px;
        border-left-width: 1px;
    }

    .theme-inverse .button.button-link {
        border: none;
        background-color: transparent;
        background-image: none;
        color: #969799;
        padding: 0;
        text-decoration: underline;
        text-transform: none;
    }

    .theme-inverse .button.button-link:visited {
        color: #969799;
    }

    .theme-inverse .button.button-link:hover {
        color: #d7d7d9;
    }

    .theme-inverse .button.button-link:active {
        color: #0c92f3;
    }

    .button.button-link {
        border: none;
        background-color: transparent;
        background-image: none;
        color: inherit;
        padding: 0;
        text-decoration: underline;
        text-transform: none;
    }

    .button.button-link:visited {
        color: inherit;
    }

    .button.button-link:hover {
        color: #0068b3;
    }

    .button.button-link:active {
        color: #003459;
    }

    .button.button-primary,
    .button.button-blue {
        background-color: #0c92f3;
        background-image: none;
        border-color: #fff;
        border-width: 0;
        color: #fff;
        padding: 8px 16px;
    }

    .button.button-primary .icon,
    .button.button-blue .icon {
        opacity: 1;
        -ms-filter: none;
        filter: none;
    }

    .button.button-primary:visited,
    .button.button-blue:visited {
        color: #fff;
    }

    .button.button-primary:hover,
    .button.button-blue:hover,
    .button.button-primary.hover,
    .button.button-blue.hover {
        background-color: #007fd9;
        border-color: #fff;
        color: #fff;
    }

    .button.button-primary:hover .icon,
    .button.button-blue:hover .icon,
    .button.button-primary.hover .icon,
    .button.button-blue.hover .icon {
        opacity: 1;
        -ms-filter: none;
        filter: none;
    }

    .button.button-primary:active,
    .button.button-blue:active,
    .button.button-primary.active,
    .button.button-blue.active {
        background-color: #0068b3;
        border-color: #fff;
        color: #fff;
    }

    .button.button-primary.selected,
    .button.button-blue.selected {
        background-color: #0068b3;
        border-color: #fff;
        color: #fff;
    }

    .button.button-primary[disabled]:hover,
    .button.button-blue[disabled]:hover,
    .button.button-primary.disabled:hover,
    .button.button-blue.disabled:hover,
    .button.button-primary[disabled]:active,
    .button.button-blue[disabled]:active,
    .button.button-primary.disabled:active,
    .button.button-blue.disabled:active {
        background-color: #0c92f3;
        background-image: none;
        color: #fff;
    }

    .button.button-primary[disabled]:hover .icon,
    .button.button-blue[disabled]:hover .icon,
    .button.button-primary.disabled:hover .icon,
    .button.button-blue.disabled:hover .icon,
    .button.button-primary[disabled]:active .icon,
    .button.button-blue[disabled]:active .icon,
    .button.button-primary.disabled:active .icon,
    .button.button-blue.disabled:active .icon {
        opacity: 1;
        -ms-filter: none;
        filter: none;
    }

    .button.button-primary.button-square,
    .button.button-blue.button-square {
        padding: 8px 12px;
    }

    .button.button-primary.button-lg,
    .button.button-blue.button-lg {
        padding: 6px 16px;
    }

    .button.button-primary.button-lg.button-square,
    .button.button-blue.button-lg.button-square {
        padding: 6px 15px;
    }

    .button.button-primary.button-sm,
    .button.button-blue.button-sm {
        padding: 4px 16px;
    }

    .button.button-primary.button-sm.button-square,
    .button.button-blue.button-sm.button-square {
        padding: 4px 9px;
    }

    .button-group .button.button-primary:hover,
    .button-group .button.button-blue:hover {
        border-right-width: 0;
    }

    .button-group .button.button-primary:hover+.button,
    .button-group .button.button-blue:hover+.button {
        margin-left: -1px;
        border-left-width: 1px;
    }

    .button.button-secondary {
        background-color: #e3e4e6;
        background-image: none;
        border-color: #d7d7d9;
        border-width: 0;
        color: #555659;
        padding: 8px 16px;
    }

    .button.button-secondary .icon {
        opacity: 0.9;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=90)";
        filter: alpha(opacity=90);
    }

    .button.button-secondary:visited {
        color: #555659;
    }

    .button.button-secondary:hover,
    .button.button-secondary.hover {
        background-color: #d7d7d9;
        border-color: #d7d7d9;
        color: #555659;
    }

    .button.button-secondary:hover .icon,
    .button.button-secondary.hover .icon {
        opacity: 1;
        -ms-filter: none;
        filter: none;
    }

    .button.button-secondary:active,
    .button.button-secondary.active {
        background-color: #b1b1b3;
        border-color: #d7d7d9;
        color: #555659;
    }

    .button.button-secondary.selected {
        background-color: #b1b1b3;
        border-color: #d7d7d9;
        color: #555659;
    }

    .button.button-secondary[disabled]:hover,
    .button.button-secondary.disabled:hover,
    .button.button-secondary[disabled]:active,
    .button.button-secondary.disabled:active {
        background-color: #e3e4e6;
        background-image: none;
        color: #555659;
    }

    .button.button-secondary[disabled]:hover .icon,
    .button.button-secondary.disabled:hover .icon,
    .button.button-secondary[disabled]:active .icon,
    .button.button-secondary.disabled:active .icon {
        opacity: 0.9;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=90)";
        filter: alpha(opacity=90);
    }

    .button.button-secondary.button-square {
        padding: 8px 12px;
    }

    .button.button-secondary.button-lg {
        padding: 6px 16px;
    }

    .button.button-secondary.button-lg.button-square {
        padding: 6px 15px;
    }

    .button.button-secondary.button-sm {
        padding: 4px 16px;
    }

    .button.button-secondary.button-sm.button-square {
        padding: 4px 9px;
    }

    .button-group .button.button-secondary:hover {
        border-right-width: 0;
    }

    .button-group .button.button-secondary:hover+.button {
        margin-left: -1px;
        border-left-width: 1px;
    }

    .button.button-positive,
    .button.button-green {
        background-color: #39bf71;
        background-image: none;
        border-color: #fff;
        border-width: 0;
        color: #fff;
        padding: 8px 16px;
    }

    .button.button-positive .icon,
    .button.button-green .icon {
        opacity: 1;
        -ms-filter: none;
        filter: none;
    }

    .button.button-positive:visited,
    .button.button-green:visited {
        color: #fff;
    }

    .button.button-positive:hover,
    .button.button-green:hover,
    .button.button-positive.hover,
    .button.button-green.hover {
        background-color: #19a654;
        border-color: #fff;
        color: #fff;
    }

    .button.button-positive:hover .icon,
    .button.button-green:hover .icon,
    .button.button-positive.hover .icon,
    .button.button-green.hover .icon {
        opacity: 1;
        -ms-filter: none;
        filter: none;
    }

    .button.button-positive:active,
    .button.button-green:active,
    .button.button-positive.active,
    .button.button-green.active {
        background-color: #0e8c42;
        border-color: #fff;
        color: #fff;
    }

    .button.button-positive.selected,
    .button.button-green.selected {
        background-color: #0e8c42;
        border-color: #fff;
        color: #fff;
    }

    .button.button-positive[disabled]:hover,
    .button.button-green[disabled]:hover,
    .button.button-positive.disabled:hover,
    .button.button-green.disabled:hover,
    .button.button-positive[disabled]:active,
    .button.button-green[disabled]:active,
    .button.button-positive.disabled:active,
    .button.button-green.disabled:active {
        background-color: #39bf71;
        background-image: none;
        color: #fff;
    }

    .button.button-positive[disabled]:hover .icon,
    .button.button-green[disabled]:hover .icon,
    .button.button-positive.disabled:hover .icon,
    .button.button-green.disabled:hover .icon,
    .button.button-positive[disabled]:active .icon,
    .button.button-green[disabled]:active .icon,
    .button.button-positive.disabled:active .icon,
    .button.button-green.disabled:active .icon {
        opacity: 1;
        -ms-filter: none;
        filter: none;
    }

    .button.button-positive.button-square,
    .button.button-green.button-square {
        padding: 8px 12px;
    }

    .button.button-positive.button-lg,
    .button.button-green.button-lg {
        padding: 6px 16px;
    }

    .button.button-positive.button-lg.button-square,
    .button.button-green.button-lg.button-square {
        padding: 6px 15px;
    }

    .button.button-positive.button-sm,
    .button.button-green.button-sm {
        padding: 4px 16px;
    }

    .button.button-positive.button-sm.button-square,
    .button.button-green.button-sm.button-square {
        padding: 4px 9px;
    }

    .button-group .button.button-positive:hover,
    .button-group .button.button-green:hover {
        border-right-width: 0;
    }

    .button-group .button.button-positive:hover+.button,
    .button-group .button.button-green:hover+.button {
        margin-left: -1px;
        border-left-width: 1px;
    }

    .button.button-negative,
    .button.button-red {
        background-color: #d94141;
        background-image: none;
        border-color: #fff;
        border-width: 0;
        color: #fff;
        padding: 8px 16px;
    }

    .button.button-negative .icon,
    .button.button-red .icon {
        opacity: 1;
        -ms-filter: none;
        filter: none;
    }

    .button.button-negative:visited,
    .button.button-red:visited {
        color: #fff;
    }

    .button.button-negative:hover,
    .button.button-red:hover,
    .button.button-negative.hover,
    .button.button-red.hover {
        background-color: #bf3939;
        border-color: #fff;
        color: #fff;
    }

    .button.button-negative:hover .icon,
    .button.button-red:hover .icon,
    .button.button-negative.hover .icon,
    .button.button-red.hover .icon {
        opacity: 1;
        -ms-filter: none;
        filter: none;
    }

    .button.button-negative:active,
    .button.button-red:active,
    .button.button-negative.active,
    .button.button-red.active {
        background-color: #a62929;
        border-color: #fff;
        color: #fff;
    }

    .button.button-negative.selected,
    .button.button-red.selected {
        background-color: #a62929;
        border-color: #fff;
        color: #fff;
    }

    .button.button-negative[disabled]:hover,
    .button.button-red[disabled]:hover,
    .button.button-negative.disabled:hover,
    .button.button-red.disabled:hover,
    .button.button-negative[disabled]:active,
    .button.button-red[disabled]:active,
    .button.button-negative.disabled:active,
    .button.button-red.disabled:active {
        background-color: #d94141;
        background-image: none;
        color: #fff;
    }

    .button.button-negative[disabled]:hover .icon,
    .button.button-red[disabled]:hover .icon,
    .button.button-negative.disabled:hover .icon,
    .button.button-red.disabled:hover .icon,
    .button.button-negative[disabled]:active .icon,
    .button.button-red[disabled]:active .icon,
    .button.button-negative.disabled:active .icon,
    .button.button-red.disabled:active .icon {
        opacity: 1;
        -ms-filter: none;
        filter: none;
    }

    .button.button-negative.button-square,
    .button.button-red.button-square {
        padding: 8px 12px;
    }

    .button.button-negative.button-lg,
    .button.button-red.button-lg {
        padding: 6px 16px;
    }

    .button.button-negative.button-lg.button-square,
    .button.button-red.button-lg.button-square {
        padding: 6px 15px;
    }

    .button.button-negative.button-sm,
    .button.button-red.button-sm {
        padding: 4px 16px;
    }

    .button.button-negative.button-sm.button-square,
    .button.button-red.button-sm.button-square {
        padding: 4px 9px;
    }

    .button-group .button.button-negative:hover,
    .button-group .button.button-red:hover {
        border-right-width: 0;
    }

    .button-group .button.button-negative:hover+.button,
    .button-group .button.button-red:hover+.button {
        margin-left: -1px;
        border-left-width: 1px;
    }

    .button.button-inverse,
    .button.button-gray {
        background-color: #555659;
        background-image: none;
        border-color: #969799;
        border-width: 0;
        color: #fff;
        padding: 8px 16px;
    }

    .button.button-inverse .icon,
    .button.button-gray .icon {
        opacity: 0.7;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=70)";
        filter: alpha(opacity=70);
    }

    .button.button-inverse:visited,
    .button.button-gray:visited {
        color: #fff;
    }

    .button.button-inverse:hover,
    .button.button-gray:hover,
    .button.button-inverse.hover,
    .button.button-gray.hover {
        background-color: #707173;
        border-color: #969799;
        color: #fff;
    }

    .button.button-inverse:hover .icon,
    .button.button-gray:hover .icon,
    .button.button-inverse.hover .icon,
    .button.button-gray.hover .icon {
        opacity: 1;
        -ms-filter: none;
        filter: none;
    }

    .button.button-inverse:active,
    .button.button-gray:active,
    .button.button-inverse.active,
    .button.button-gray.active {
        background-color: #969799;
        border-color: #969799;
        color: #fff;
    }

    .button.button-inverse.selected,
    .button.button-gray.selected {
        background-color: #969799;
        border-color: #969799;
        color: #fff;
    }

    .button.button-inverse[disabled]:hover,
    .button.button-gray[disabled]:hover,
    .button.button-inverse.disabled:hover,
    .button.button-gray.disabled:hover,
    .button.button-inverse[disabled]:active,
    .button.button-gray[disabled]:active,
    .button.button-inverse.disabled:active,
    .button.button-gray.disabled:active {
        background-color: #555659;
        background-image: none;
        color: #fff;
    }

    .button.button-inverse[disabled]:hover .icon,
    .button.button-gray[disabled]:hover .icon,
    .button.button-inverse.disabled:hover .icon,
    .button.button-gray.disabled:hover .icon,
    .button.button-inverse[disabled]:active .icon,
    .button.button-gray[disabled]:active .icon,
    .button.button-inverse.disabled:active .icon,
    .button.button-gray.disabled:active .icon {
        opacity: 0.7;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=70)";
        filter: alpha(opacity=70);
    }

    .button.button-inverse.button-square,
    .button.button-gray.button-square {
        padding: 8px 12px;
    }

    .button.button-inverse.button-lg,
    .button.button-gray.button-lg {
        padding: 6px 16px;
    }

    .button.button-inverse.button-lg.button-square,
    .button.button-gray.button-lg.button-square {
        padding: 6px 15px;
    }

    .button.button-inverse.button-sm,
    .button.button-gray.button-sm {
        padding: 4px 16px;
    }

    .button.button-inverse.button-sm.button-square,
    .button.button-gray.button-sm.button-square {
        padding: 4px 9px;
    }

    .button-group .button.button-inverse:hover,
    .button-group .button.button-gray:hover {
        border-right-width: 0;
    }

    .button-group .button.button-inverse:hover+.button,
    .button-group .button.button-gray:hover+.button {
        margin-left: -1px;
        border-left-width: 1px;
    }

    .button.button-blue-light {
        background-color: #e1f3ff;
        background-image: none;
        border-color: #e1f3ff;
        border-width: 0;
        color: #555659;
        padding: 8px 16px;
    }

    .button.button-blue-light .icon {
        opacity: 0.95;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=95)";
        filter: alpha(opacity=95);
    }

    .button.button-blue-light:visited {
        color: #555659;
    }

    .button.button-blue-light:hover,
    .button.button-blue-light.hover {
        background-color: #bfe5ff;
        border-color: #e1f3ff;
        color: #555659;
    }

    .button.button-blue-light:hover .icon,
    .button.button-blue-light.hover .icon {
        opacity: 1;
        -ms-filter: none;
        filter: none;
    }

    .button.button-blue-light:active,
    .button.button-blue-light.active {
        background-color: #a6daff;
        border-color: #e1f3ff;
        color: #555659;
    }

    .button.button-blue-light.selected {
        background-color: #a6daff;
        border-color: #e1f3ff;
        color: #555659;
    }

    .button.button-blue-light[disabled]:hover,
    .button.button-blue-light.disabled:hover,
    .button.button-blue-light[disabled]:active,
    .button.button-blue-light.disabled:active {
        background-color: #e1f3ff;
        background-image: none;
        color: #555659;
    }

    .button.button-blue-light[disabled]:hover .icon,
    .button.button-blue-light.disabled:hover .icon,
    .button.button-blue-light[disabled]:active .icon,
    .button.button-blue-light.disabled:active .icon {
        opacity: 0.95;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=95)";
        filter: alpha(opacity=95);
    }

    .button.button-blue-light.button-square {
        padding: 8px 12px;
    }

    .button.button-blue-light.button-lg {
        padding: 6px 16px;
    }

    .button.button-blue-light.button-lg.button-square {
        padding: 6px 15px;
    }

    .button.button-blue-light.button-sm {
        padding: 4px 16px;
    }

    .button.button-blue-light.button-sm.button-square {
        padding: 4px 9px;
    }

    .button-group .button.button-blue-light:hover {
        border-right-width: 0;
    }

    .button-group .button.button-blue-light:hover+.button {
        margin-left: -1px;
        border-left-width: 1px;
    }

    .button.button-turquoise {
        background-color: #1cadba;
        background-image: none;
        border-color: #1cadba;
        border-width: 0;
        color: #555659;
        padding: 8px 16px;
    }

    .button.button-turquoise .icon {
        opacity: 0.95;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=95)";
        filter: alpha(opacity=95);
    }

    .button.button-turquoise:visited {
        color: #555659;
    }

    .button.button-turquoise:hover,
    .button.button-turquoise.hover {
        background-color: #0097a6;
        border-color: #1cadba;
        color: #555659;
    }

    .button.button-turquoise:hover .icon,
    .button.button-turquoise.hover .icon {
        opacity: 1;
        -ms-filter: none;
        filter: none;
    }

    .button.button-turquoise:active,
    .button.button-turquoise.active {
        background-color: #007580;
        border-color: #1cadba;
        color: #555659;
    }

    .button.button-turquoise.selected {
        background-color: #007580;
        border-color: #1cadba;
        color: #555659;
    }

    .button.button-turquoise[disabled]:hover,
    .button.button-turquoise.disabled:hover,
    .button.button-turquoise[disabled]:active,
    .button.button-turquoise.disabled:active {
        background-color: #1cadba;
        background-image: none;
        color: #555659;
    }

    .button.button-turquoise[disabled]:hover .icon,
    .button.button-turquoise.disabled:hover .icon,
    .button.button-turquoise[disabled]:active .icon,
    .button.button-turquoise.disabled:active .icon {
        opacity: 0.95;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=95)";
        filter: alpha(opacity=95);
    }

    .button.button-turquoise.button-square {
        padding: 8px 12px;
    }

    .button.button-turquoise.button-lg {
        padding: 6px 16px;
    }

    .button.button-turquoise.button-lg.button-square {
        padding: 6px 15px;
    }

    .button.button-turquoise.button-sm {
        padding: 4px 16px;
    }

    .button.button-turquoise.button-sm.button-square {
        padding: 4px 9px;
    }

    .button-group .button.button-turquoise:hover {
        border-right-width: 0;
    }

    .button-group .button.button-turquoise:hover+.button {
        margin-left: -1px;
        border-left-width: 1px;
    }

    .button.button-yellow {
        background-color: #ffa60d;
        background-image: none;
        border-color: #ffa60d;
        border-width: 0;
        color: #fff;
        padding: 8px 16px;
    }

    .button.button-yellow .icon {
        opacity: 0.95;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=95)";
        filter: alpha(opacity=95);
    }

    .button.button-yellow:visited {
        color: #fff;
    }

    .button.button-yellow:hover,
    .button.button-yellow.hover {
        background-color: #ff9000;
        border-color: #ffa60d;
        color: #fff;
    }

    .button.button-yellow:hover .icon,
    .button.button-yellow.hover .icon {
        opacity: 1;
        -ms-filter: none;
        filter: none;
    }

    .button.button-yellow:active,
    .button.button-yellow.active {
        background-color: #e67600;
        border-color: #ffa60d;
        color: #fff;
    }

    .button.button-yellow.selected {
        background-color: #e67600;
        border-color: #ffa60d;
        color: #fff;
    }

    .button.button-yellow[disabled]:hover,
    .button.button-yellow.disabled:hover,
    .button.button-yellow[disabled]:active,
    .button.button-yellow.disabled:active {
        background-color: #ffa60d;
        background-image: none;
        color: #fff;
    }

    .button.button-yellow[disabled]:hover .icon,
    .button.button-yellow.disabled:hover .icon,
    .button.button-yellow[disabled]:active .icon,
    .button.button-yellow.disabled:active .icon {
        opacity: 0.95;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=95)";
        filter: alpha(opacity=95);
    }

    .button.button-yellow.button-square {
        padding: 8px 12px;
    }

    .button.button-yellow.button-lg {
        padding: 6px 16px;
    }

    .button.button-yellow.button-lg.button-square {
        padding: 6px 15px;
    }

    .button.button-yellow.button-sm {
        padding: 4px 16px;
    }

    .button.button-yellow.button-sm.button-square {
        padding: 4px 9px;
    }

    .button-group .button.button-yellow:hover {
        border-right-width: 0;
    }

    .button-group .button.button-yellow:hover+.button {
        margin-left: -1px;
        border-left-width: 1px;
    }

    .button.button-black {
        background-color: #000;
        background-image: none;
        border-color: #000;
        border-width: 0;
        color: #fff;
        padding: 8px 16px;
    }

    .button.button-black .icon {
        opacity: 0.7;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=70)";
        filter: alpha(opacity=70);
    }

    .button.button-black:visited {
        color: #fff;
    }

    .button.button-black:hover,
    .button.button-black.hover {
        background-color: #3b3d3f;
        border-color: #000;
        color: #fff;
    }

    .button.button-black:hover .icon,
    .button.button-black.hover .icon {
        opacity: 1;
        -ms-filter: none;
        filter: none;
    }

    .button.button-black:active,
    .button.button-black.active {
        background-color: #555659;
        border-color: #000;
        color: #fff;
    }

    .button.button-black.selected {
        background-color: #555659;
        border-color: #000;
        color: #fff;
    }

    .button.button-black[disabled]:hover,
    .button.button-black.disabled:hover,
    .button.button-black[disabled]:active,
    .button.button-black.disabled:active {
        background-color: #000;
        background-image: none;
        color: #fff;
    }

    .button.button-black[disabled]:hover .icon,
    .button.button-black.disabled:hover .icon,
    .button.button-black[disabled]:active .icon,
    .button.button-black.disabled:active .icon {
        opacity: 0.7;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=70)";
        filter: alpha(opacity=70);
    }

    .button.button-black.button-square {
        padding: 8px 12px;
    }

    .button.button-black.button-lg {
        padding: 6px 16px;
    }

    .button.button-black.button-lg.button-square {
        padding: 6px 15px;
    }

    .button.button-black.button-sm {
        padding: 4px 16px;
    }

    .button.button-black.button-sm.button-square {
        padding: 4px 9px;
    }

    .button-group .button.button-black:hover {
        border-right-width: 0;
    }

    .button-group .button.button-black:hover+.button {
        margin-left: -1px;
        border-left-width: 1px;
    }

    .button.button-lg {
        -webkit-border-radius: 3px;
        border-radius: 3px;
        font-size: 18px;
        line-height: 36px;
    }

    .button.button-lg .icon,
    .momentum-body .button.button-lg .icon {
        height: 18px;
        width: 18px;
    }

    .button.button-sm {
        -webkit-border-radius: 3px;
        border-radius: 3px;
        font-size: 14px;
        line-height: 24px;
    }

    .button.button-sm .icon,
    .momentum-body .button.button-sm .icon {
        height: 14px;
        width: 14px;
    }

    .button-group {
        margin-right: 8px;
    }

    .button-group:last-child {
        margin-right: 0;
    }

    .button-group .button {
        -webkit-border-radius: 0;
        border-radius: 0;
        margin-right: 0;
    }

    .button-group .button:first-child {
        border-bottom-left-radius: 3px;
        border-top-left-radius: 3px;
    }

    .button-group .button:last-child {
        border-bottom-right-radius: 3px;
        border-top-right-radius: 3px;
    }

    .button-group .button+.button {
        border-left-width: 1px;
        margin-left: -1px;
    }

    .card {
        background-color: #fff;
        border-bottom: 1px solid #d7d7d9;
        padding: 16px;
        width: 100%;
    }

    .centered-content {
        align-items: center;
        display: flex;
        justify-content: center;
    }

    .ol-chain-list {
        background-color: #f9f9f9;
        padding: 8px 16px;
        -webkit-border-radius: 3px;
        border-radius: 3px;
    }

    .ol-chain-list .ol-chain-separator:not(:last-child) {
        border-bottom: 1px solid #d7d7d9;
        border-color: #d7d7d9;
    }

    .ol-chain-list .ol-chain-link {
        position: relative;
        padding: 8px 0;
        margin-left: 40px;
    }

    .ol-chain-list .ol-chain-link:before {
        position: absolute;
        top: 8px;
        bottom: -8px;
        width: 1px;
        background: #d7d7d9;
        content: "";
        left: -28px;
    }

    .ol-chain-list .ol-chain-link:last-child:before {
        display: none;
    }

    .ol-chain-list .ol-chain-link .ol-chain-counter {
        position: absolute;
        left: -40px;
        width: 24px;
        height: 24px;
        border: 1px solid #d7d7d9;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        background: #fff;
        text-align: center;
        font-size: 14px;
    }

    .ol-chain-list .ol-chain-link .ol-chain-counter.optional {
        background: #f9f9f9;
        border: 1px dotted #d7d7d9;
    }

    .ol-chain-list .ol-chain-link .ol-chain-content {
        width: 70%;
    }

    .ol-chain-list .ol-chain-link .ol-chain-content-100 {
        width: 100%;
    }

    .ol-chain-list .ol-chain-link .ol-chain-content-distributed {
        display: flex;
        justify-content: space-between;
    }

    .chip {
        -webkit-border-radius: 12px;
        border-radius: 12px;
        border-style: solid;
        border-width: 1px;
        display: inline-block;
        font-size: 14px;
        line-height: 14px;
        height: 24px;
        margin: 1px 4px 3px;
        max-width: 100%;
        overflow: hidden;
        padding: 4px 7px;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        -webkit-transition: border-color 0.10s ease-in-out, background-color 0.10s ease-in-out;
        -moz-transition: border-color 0.10s ease-in-out, background-color 0.10s ease-in-out;
        -o-transition: border-color 0.10s ease-in-out, background-color 0.10s ease-in-out;
        -ms-transition: border-color 0.10s ease-in-out, background-color 0.10s ease-in-out;
        transition: border-color 0.10s ease-in-out, background-color 0.10s ease-in-out;
        vertical-align: middle;
        white-space: nowrap;
    }

    .chip,
    .momentum-body .chip {
        text-decoration: none;
    }

    .chip:first-child {
        margin-left: 0;
    }

    .chip:last-child {
        margin-right: 0;
    }

    .chip+.chip {
        margin-left: 0;
    }

    .chip .icon {
        height: 1em;
        width: 1em;
    }

    .chip .icon,
    .chip .icon.momentum-body {
        margin-left: 0.5em;
        margin-right: 0.5em;
    }

    .chip>.close {
        color: inherit;
    }

    .chip>.close::after {
        color: inherit;
        content: "✕";
        display: inline-block;
        font-size: 11px;
        margin-left: 8px;
        opacity: 0.54;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=54)";
        filter: alpha(opacity=54);
        vertical-align: text-bottom;
    }

    .chip>.close:hover {
        color: inherit;
    }

    .chip>.close:hover::after {
        opacity: 0.75;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=75)";
        filter: alpha(opacity=75);
    }

    .chip>.close:active {
        color: inherit;
    }

    .chip>.close:active::after {
        opacity: 0.96;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=96)";
        filter: alpha(opacity=96);
    }

    .chip,
    .momentum-body .chip {
        background-color: #e3e4e6;
        border-color: #e3e4e6;
        color: #555659;
    }

    a.chip:hover,
    .chip.hover {
        background-color: #d7d7d9;
        border-color: #d7d7d9;
        color: #555659;
    }

    a.chip:active,
    .chip.active {
        background-color: #b1b1b3;
        border-color: #b1b1b3;
        color: #555659;
    }

    .chip[disabled],
    .chip.disabled {
        cursor: default;
        opacity: 0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
        filter: alpha(opacity=50);
    }

    .chip[disabled]:hover,
    .chip.disabled:hover,
    .chip[disabled]:active,
    .chip.disabled:active {
        background-color: #e3e4e6;
        border-color: #e3e4e6;
        color: #555659;
    }

    .chip.chip-outlined,
    .momentum-body .chip.chip-outlined {
        background-color: #fff;
        border-color: #e3e4e6;
        color: #555659;
    }

    a.chip.chip-outlined:hover,
    .chip.chip-outlined.hover {
        background-color: #f0f1f2;
        border-color: #d7d7d9;
        color: #555659;
    }

    a.chip.chip-outlined:active,
    .chip.chip-outlined.active {
        background-color: #e3e4e6;
        border-color: #b1b1b3;
        color: #555659;
    }

    .chip.chip-outlined[disabled],
    .chip.chip-outlined.disabled {
        cursor: default;
        opacity: 0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
        filter: alpha(opacity=50);
    }

    .chip.chip-outlined[disabled]:hover,
    .chip.chip-outlined.disabled:hover,
    .chip.chip-outlined[disabled]:active,
    .chip.chip-outlined.disabled:active {
        background-color: #fff;
        border-color: #e3e4e6;
        color: #555659;
    }

    .theme-inverse .chip,
    .momentum-body .theme-inverse .chip {
        background-color: #555659;
        border-color: #555659;
        color: #f0f1f2;
    }

    .theme-inverse a.chip:hover,
    .theme-inverse .chip.hover {
        background-color: #707173;
        border-color: #707173;
        color: #f0f1f2;
    }

    .theme-inverse a.chip:active,
    .theme-inverse .chip.active {
        background-color: #969799;
        border-color: #969799;
        color: #f0f1f2;
    }

    .theme-inverse .chip[disabled],
    .theme-inverse .chip.disabled {
        cursor: default;
        opacity: 0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
        filter: alpha(opacity=50);
    }

    .theme-inverse .chip[disabled]:hover,
    .theme-inverse .chip.disabled:hover,
    .theme-inverse .chip[disabled]:active,
    .theme-inverse .chip.disabled:active {
        background-color: #555659;
        border-color: #555659;
        color: #f0f1f2;
    }

    .theme-inverse .chip.chip-outlined,
    .momentum-body .theme-inverse .chip.chip-outlined {
        background-color: #3b3d3f;
        border-color: #969799;
        color: #d7d7d9;
    }

    .theme-inverse a.chip.chip-outlined:hover,
    .theme-inverse .chip.chip-outlined.hover {
        background-color: #555659;
        border-color: #969799;
        color: #f0f1f2;
    }

    .theme-inverse a.chip.chip-outlined:active,
    .theme-inverse .chip.chip-outlined.active {
        background-color: #707173;
        border-color: #969799;
        color: #f0f1f2;
    }

    .theme-inverse .chip.chip-outlined[disabled],
    .theme-inverse .chip.chip-outlined.disabled {
        cursor: default;
        opacity: 0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
        filter: alpha(opacity=50);
    }

    .theme-inverse .chip.chip-outlined[disabled]:hover,
    .theme-inverse .chip.chip-outlined.disabled:hover,
    .theme-inverse .chip.chip-outlined[disabled]:active,
    .theme-inverse .chip.chip-outlined.disabled:active {
        background-color: #3b3d3f;
        border-color: #969799;
        color: #d7d7d9;
    }

    .chip.chip-inverse,
    .momentum-body .chip.chip-inverse {
        background-color: #555659;
        border-color: #555659;
        color: #f0f1f2;
    }

    a.chip.chip-inverse:hover,
    .chip.chip-inverse.hover {
        background-color: #707173;
        border-color: #707173;
        color: #f0f1f2;
    }

    a.chip.chip-inverse:active,
    .chip.chip-inverse.active {
        background-color: #969799;
        border-color: #969799;
        color: #f0f1f2;
    }

    .chip.chip-inverse[disabled],
    .chip.chip-inverse.disabled {
        cursor: default;
        opacity: 0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
        filter: alpha(opacity=50);
    }

    .chip.chip-inverse[disabled]:hover,
    .chip.chip-inverse.disabled:hover,
    .chip.chip-inverse[disabled]:active,
    .chip.chip-inverse.disabled:active {
        background-color: #555659;
        border-color: #555659;
        color: #f0f1f2;
    }

    .chip.chip-inverse.chip-outlined,
    .momentum-body .chip.chip-inverse.chip-outlined {
        background-color: #3b3d3f;
        border-color: #969799;
        color: #d7d7d9;
    }

    a.chip.chip-inverse.chip-outlined:hover,
    .chip.chip-inverse.chip-outlined.hover {
        background-color: #555659;
        border-color: #969799;
        color: #f0f1f2;
    }

    a.chip.chip-inverse.chip-outlined:active,
    .chip.chip-inverse.chip-outlined.active {
        background-color: #707173;
        border-color: #969799;
        color: #f0f1f2;
    }

    .chip.chip-inverse.chip-outlined[disabled],
    .chip.chip-inverse.chip-outlined.disabled {
        cursor: default;
        opacity: 0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
        filter: alpha(opacity=50);
    }

    .chip.chip-inverse.chip-outlined[disabled]:hover,
    .chip.chip-inverse.chip-outlined.disabled:hover,
    .chip.chip-inverse.chip-outlined[disabled]:active,
    .chip.chip-inverse.chip-outlined.disabled:active {
        background-color: #3b3d3f;
        border-color: #969799;
        color: #d7d7d9;
    }

    .chip.chip-blue,
    .momentum-body .chip.chip-blue {
        background-color: #e1f3ff;
        border-color: #e1f3ff;
        color: #555659;
    }

    a.chip.chip-blue:hover,
    .chip.chip-blue.hover {
        background-color: #bfe5ff;
        border-color: #bfe5ff;
        color: #555659;
    }

    a.chip.chip-blue:active,
    .chip.chip-blue.active {
        background-color: #a6daff;
        border-color: #a6daff;
        color: #555659;
    }

    .chip.chip-blue[disabled],
    .chip.chip-blue.disabled {
        cursor: default;
        opacity: 0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
        filter: alpha(opacity=50);
    }

    .chip.chip-blue[disabled]:hover,
    .chip.chip-blue.disabled:hover,
    .chip.chip-blue[disabled]:active,
    .chip.chip-blue.disabled:active {
        background-color: #e1f3ff;
        border-color: #e1f3ff;
        color: #555659;
    }

    .chip.chip-blue.chip-outlined,
    .momentum-body .chip.chip-blue.chip-outlined {
        background-color: #e1f3ff;
        border-color: #0c92f3;
        color: #555659;
    }

    a.chip.chip-blue.chip-outlined:hover,
    .chip.chip-blue.chip-outlined.hover {
        background-color: #bfe5ff;
        border-color: #0c92f3;
        color: #555659;
    }

    a.chip.chip-blue.chip-outlined:active,
    .chip.chip-blue.chip-outlined.active {
        background-color: #a6daff;
        border-color: #0c92f3;
        color: #555659;
    }

    .chip.chip-blue.chip-outlined[disabled],
    .chip.chip-blue.chip-outlined.disabled {
        cursor: default;
        opacity: 0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
        filter: alpha(opacity=50);
    }

    .chip.chip-blue.chip-outlined[disabled]:hover,
    .chip.chip-blue.chip-outlined.disabled:hover,
    .chip.chip-blue.chip-outlined[disabled]:active,
    .chip.chip-blue.chip-outlined.disabled:active {
        background-color: #e1f3ff;
        border-color: #0c92f3;
        color: #555659;
    }

    .chip.chip-blue-dark,
    .momentum-body .chip.chip-blue-dark {
        background-color: #007fd9;
        border-color: #007fd9;
        color: #f3faff;
    }

    a.chip.chip-blue-dark:hover,
    .chip.chip-blue-dark.hover {
        background-color: #0068b3;
        border-color: #0068b3;
        color: #f3faff;
    }

    a.chip.chip-blue-dark:active,
    .chip.chip-blue-dark.active {
        background-color: #004a7f;
        border-color: #004a7f;
        color: #f3faff;
    }

    .chip.chip-blue-dark[disabled],
    .chip.chip-blue-dark.disabled {
        cursor: default;
        opacity: 0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
        filter: alpha(opacity=50);
    }

    .chip.chip-blue-dark[disabled]:hover,
    .chip.chip-blue-dark.disabled:hover,
    .chip.chip-blue-dark[disabled]:active,
    .chip.chip-blue-dark.disabled:active {
        background-color: #007fd9;
        border-color: #007fd9;
        color: #f3faff;
    }

    .chip.chip-blue-dark.chip-outlined,
    .momentum-body .chip.chip-blue-dark.chip-outlined {
        background-color: #007fd9;
        border-color: #4cb5ff;
        color: #f3faff;
    }

    a.chip.chip-blue-dark.chip-outlined:hover,
    .chip.chip-blue-dark.chip-outlined.hover {
        background-color: #0068b3;
        border-color: #4cb5ff;
        color: #f3faff;
    }

    a.chip.chip-blue-dark.chip-outlined:active,
    .chip.chip-blue-dark.chip-outlined.active {
        background-color: #004a7f;
        border-color: #4cb5ff;
        color: #f3faff;
    }

    .chip.chip-blue-dark.chip-outlined[disabled],
    .chip.chip-blue-dark.chip-outlined.disabled {
        cursor: default;
        opacity: 0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
        filter: alpha(opacity=50);
    }

    .chip.chip-blue-dark.chip-outlined[disabled]:hover,
    .chip.chip-blue-dark.chip-outlined.disabled:hover,
    .chip.chip-blue-dark.chip-outlined[disabled]:active,
    .chip.chip-blue-dark.chip-outlined.disabled:active {
        background-color: #007fd9;
        border-color: #4cb5ff;
        color: #f3faff;
    }

    .chip.chip-red,
    .momentum-body .chip.chip-red {
        background-color: #ffe6e6;
        border-color: #ffe6e6;
        color: #555659;
    }

    a.chip.chip-red:hover,
    .chip.chip-red.hover {
        background-color: #ffbfbf;
        border-color: #ffbfbf;
        color: #555659;
    }

    a.chip.chip-red:active,
    .chip.chip-red.active {
        background-color: #f99;
        border-color: #f99;
        color: #555659;
    }

    .chip.chip-red[disabled],
    .chip.chip-red.disabled {
        cursor: default;
        opacity: 0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
        filter: alpha(opacity=50);
    }

    .chip.chip-red[disabled]:hover,
    .chip.chip-red.disabled:hover,
    .chip.chip-red[disabled]:active,
    .chip.chip-red.disabled:active {
        background-color: #ffe6e6;
        border-color: #ffe6e6;
        color: #555659;
    }

    .chip.chip-red.chip-outlined,
    .momentum-body .chip.chip-red.chip-outlined {
        background-color: #ffe6e6;
        border-color: #d94141;
        color: #555659;
    }

    a.chip.chip-red.chip-outlined:hover,
    .chip.chip-red.chip-outlined.hover {
        background-color: #ffbfbf;
        border-color: #d94141;
        color: #555659;
    }

    a.chip.chip-red.chip-outlined:active,
    .chip.chip-red.chip-outlined.active {
        background-color: #f99;
        border-color: #d94141;
        color: #555659;
    }

    .chip.chip-red.chip-outlined[disabled],
    .chip.chip-red.chip-outlined.disabled {
        cursor: default;
        opacity: 0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
        filter: alpha(opacity=50);
    }

    .chip.chip-red.chip-outlined[disabled]:hover,
    .chip.chip-red.chip-outlined.disabled:hover,
    .chip.chip-red.chip-outlined[disabled]:active,
    .chip.chip-red.chip-outlined.disabled:active {
        background-color: #ffe6e6;
        border-color: #d94141;
        color: #555659;
    }

    .chip.chip-red-dark,
    .momentum-body .chip.chip-red-dark {
        background-color: #bf3939;
        border-color: #bf3939;
        color: #fff7f7;
    }

    a.chip.chip-red-dark:hover,
    .chip.chip-red-dark.hover {
        background-color: #a62929;
        border-color: #a62929;
        color: #fff7f7;
    }

    a.chip.chip-red-dark:active,
    .chip.chip-red-dark.active {
        background-color: #801a1a;
        border-color: #801a1a;
        color: #fff7f7;
    }

    .chip.chip-red-dark[disabled],
    .chip.chip-red-dark.disabled {
        cursor: default;
        opacity: 0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
        filter: alpha(opacity=50);
    }

    .chip.chip-red-dark[disabled]:hover,
    .chip.chip-red-dark.disabled:hover,
    .chip.chip-red-dark[disabled]:active,
    .chip.chip-red-dark.disabled:active {
        background-color: #bf3939;
        border-color: #bf3939;
        color: #fff7f7;
    }

    .chip.chip-red-dark.chip-outlined,
    .momentum-body .chip.chip-red-dark.chip-outlined {
        background-color: #bf3939;
        border-color: #f26161;
        color: #fff7f7;
    }

    a.chip.chip-red-dark.chip-outlined:hover,
    .chip.chip-red-dark.chip-outlined.hover {
        background-color: #a62929;
        border-color: #f26161;
        color: #fff7f7;
    }

    a.chip.chip-red-dark.chip-outlined:active,
    .chip.chip-red-dark.chip-outlined.active {
        background-color: #801a1a;
        border-color: #f26161;
        color: #fff7f7;
    }

    .chip.chip-red-dark.chip-outlined[disabled],
    .chip.chip-red-dark.chip-outlined.disabled {
        cursor: default;
        opacity: 0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
        filter: alpha(opacity=50);
    }

    .chip.chip-red-dark.chip-outlined[disabled]:hover,
    .chip.chip-red-dark.chip-outlined.disabled:hover,
    .chip.chip-red-dark.chip-outlined[disabled]:active,
    .chip.chip-red-dark.chip-outlined.disabled:active {
        background-color: #bf3939;
        border-color: #f26161;
        color: #fff7f7;
    }

    .chip.chip-green,
    .momentum-body .chip.chip-green {
        background-color: #d4f5c4;
        border-color: #d4f5c4;
        color: #555659;
    }

    a.chip.chip-green:hover,
    .chip.chip-green.hover {
        background-color: #b4f0a8;
        border-color: #b4f0a8;
        color: #555659;
    }

    a.chip.chip-green:active,
    .chip.chip-green.active {
        background-color: #8ae58a;
        border-color: #8ae58a;
        color: #555659;
    }

    .chip.chip-green[disabled],
    .chip.chip-green.disabled {
        cursor: default;
        opacity: 0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
        filter: alpha(opacity=50);
    }

    .chip.chip-green[disabled]:hover,
    .chip.chip-green.disabled:hover,
    .chip.chip-green[disabled]:active,
    .chip.chip-green.disabled:active {
        background-color: #d4f5c4;
        border-color: #d4f5c4;
        color: #555659;
    }

    .chip.chip-green.chip-outlined,
    .momentum-body .chip.chip-green.chip-outlined {
        background-color: #d4f5c4;
        border-color: #39bf71;
        color: #555659;
    }

    a.chip.chip-green.chip-outlined:hover,
    .chip.chip-green.chip-outlined.hover {
        background-color: #b4f0a8;
        border-color: #39bf71;
        color: #555659;
    }

    a.chip.chip-green.chip-outlined:active,
    .chip.chip-green.chip-outlined.active {
        background-color: #8ae58a;
        border-color: #39bf71;
        color: #555659;
    }

    .chip.chip-green.chip-outlined[disabled],
    .chip.chip-green.chip-outlined.disabled {
        cursor: default;
        opacity: 0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
        filter: alpha(opacity=50);
    }

    .chip.chip-green.chip-outlined[disabled]:hover,
    .chip.chip-green.chip-outlined.disabled:hover,
    .chip.chip-green.chip-outlined[disabled]:active,
    .chip.chip-green.chip-outlined.disabled:active {
        background-color: #d4f5c4;
        border-color: #39bf71;
        color: #555659;
    }

    .chip.chip-green-dark,
    .momentum-body .chip.chip-green-dark {
        background-color: #19a654;
        border-color: #19a654;
        color: #e1fae5;
    }

    a.chip.chip-green-dark:hover,
    .chip.chip-green-dark.hover {
        background-color: #0e8c42;
        border-color: #0e8c42;
        color: #e1fae5;
    }

    a.chip.chip-green-dark:active,
    .chip.chip-green-dark.active {
        background-color: #007343;
        border-color: #007343;
        color: #e1fae5;
    }

    .chip.chip-green-dark[disabled],
    .chip.chip-green-dark.disabled {
        cursor: default;
        opacity: 0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
        filter: alpha(opacity=50);
    }

    .chip.chip-green-dark[disabled]:hover,
    .chip.chip-green-dark.disabled:hover,
    .chip.chip-green-dark[disabled]:active,
    .chip.chip-green-dark.disabled:active {
        background-color: #19a654;
        border-color: #19a654;
        color: #e1fae5;
    }

    .chip.chip-green-dark.chip-outlined,
    .momentum-body .chip.chip-green-dark.chip-outlined {
        background-color: #19a654;
        border-color: #61d086;
        color: #e1fae5;
    }

    a.chip.chip-green-dark.chip-outlined:hover,
    .chip.chip-green-dark.chip-outlined.hover {
        background-color: #0e8c42;
        border-color: #61d086;
        color: #e1fae5;
    }

    a.chip.chip-green-dark.chip-outlined:active,
    .chip.chip-green-dark.chip-outlined.active {
        background-color: #007343;
        border-color: #61d086;
        color: #e1fae5;
    }

    .chip.chip-green-dark.chip-outlined[disabled],
    .chip.chip-green-dark.chip-outlined.disabled {
        cursor: default;
        opacity: 0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
        filter: alpha(opacity=50);
    }

    .chip.chip-green-dark.chip-outlined[disabled]:hover,
    .chip.chip-green-dark.chip-outlined.disabled:hover,
    .chip.chip-green-dark.chip-outlined[disabled]:active,
    .chip.chip-green-dark.chip-outlined.disabled:active {
        background-color: #19a654;
        border-color: #61d086;
        color: #e1fae5;
    }

    .chip.chip-yellow,
    .momentum-body .chip.chip-yellow {
        background-color: #fec;
        border-color: #fec;
        color: #555659;
    }

    a.chip.chip-yellow:hover,
    .chip.chip-yellow.hover {
        background-color: #ffe5b2;
        border-color: #ffe5b2;
        color: #555659;
    }

    a.chip.chip-yellow:active,
    .chip.chip-yellow.active {
        background-color: #ffdf88;
        border-color: #ffdf88;
        color: #555659;
    }

    .chip.chip-yellow[disabled],
    .chip.chip-yellow.disabled {
        cursor: default;
        opacity: 0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
        filter: alpha(opacity=50);
    }

    .chip.chip-yellow[disabled]:hover,
    .chip.chip-yellow.disabled:hover,
    .chip.chip-yellow[disabled]:active,
    .chip.chip-yellow.disabled:active {
        background-color: #fec;
        border-color: #fec;
        color: #555659;
    }

    .chip.chip-yellow.chip-outlined,
    .momentum-body .chip.chip-yellow.chip-outlined {
        background-color: #fec;
        border-color: #ffa60d;
        color: #555659;
    }

    a.chip.chip-yellow.chip-outlined:hover,
    .chip.chip-yellow.chip-outlined.hover {
        background-color: #ffe5b2;
        border-color: #ffa60d;
        color: #555659;
    }

    a.chip.chip-yellow.chip-outlined:active,
    .chip.chip-yellow.chip-outlined.active {
        background-color: #ffdf88;
        border-color: #ffa60d;
        color: #555659;
    }

    .chip.chip-yellow.chip-outlined[disabled],
    .chip.chip-yellow.chip-outlined.disabled {
        cursor: default;
        opacity: 0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
        filter: alpha(opacity=50);
    }

    .chip.chip-yellow.chip-outlined[disabled]:hover,
    .chip.chip-yellow.chip-outlined.disabled:hover,
    .chip.chip-yellow.chip-outlined[disabled]:active,
    .chip.chip-yellow.chip-outlined.disabled:active {
        background-color: #fec;
        border-color: #ffa60d;
        color: #555659;
    }

    .chip.chip-yellow-dark,
    .momentum-body .chip.chip-yellow-dark {
        background-color: #ff9000;
        border-color: #ff9000;
        color: #fff6e5;
    }

    a.chip.chip-yellow-dark:hover,
    .chip.chip-yellow-dark.hover {
        background-color: #e67600;
        border-color: #e67600;
        color: #fff6e5;
    }

    a.chip.chip-yellow-dark:active,
    .chip.chip-yellow-dark.active {
        background-color: #cc5f00;
        border-color: #cc5f00;
        color: #fff6e5;
    }

    .chip.chip-yellow-dark[disabled],
    .chip.chip-yellow-dark.disabled {
        cursor: default;
        opacity: 0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
        filter: alpha(opacity=50);
    }

    .chip.chip-yellow-dark[disabled]:hover,
    .chip.chip-yellow-dark.disabled:hover,
    .chip.chip-yellow-dark[disabled]:active,
    .chip.chip-yellow-dark.disabled:active {
        background-color: #ff9000;
        border-color: #ff9000;
        color: #fff6e5;
    }

    .chip.chip-yellow-dark.chip-outlined,
    .momentum-body .chip.chip-yellow-dark.chip-outlined {
        background-color: #ff9000;
        border-color: #fb3;
        color: #fff6e5;
    }

    a.chip.chip-yellow-dark.chip-outlined:hover,
    .chip.chip-yellow-dark.chip-outlined.hover {
        background-color: #e67600;
        border-color: #fb3;
        color: #fff6e5;
    }

    a.chip.chip-yellow-dark.chip-outlined:active,
    .chip.chip-yellow-dark.chip-outlined.active {
        background-color: #cc5f00;
        border-color: #fb3;
        color: #fff6e5;
    }

    .chip.chip-yellow-dark.chip-outlined[disabled],
    .chip.chip-yellow-dark.chip-outlined.disabled {
        cursor: default;
        opacity: 0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
        filter: alpha(opacity=50);
    }

    .chip.chip-yellow-dark.chip-outlined[disabled]:hover,
    .chip.chip-yellow-dark.chip-outlined.disabled:hover,
    .chip.chip-yellow-dark.chip-outlined[disabled]:active,
    .chip.chip-yellow-dark.chip-outlined.disabled:active {
        background-color: #ff9000;
        border-color: #fb3;
        color: #fff6e5;
    }

    .chip.chip-lg {
        -webkit-border-radius: 16px;
        border-radius: 16px;
        font-size: 16px;
        height: 32px;
        line-height: 16px;
        padding: 7px 11px;
    }

    .chip.chip-lg>.close::after {
        font-size: 13px;
        margin-left: 8px;
    }

    .chip.chip-sm {
        -webkit-border-radius: 8px;
        border-radius: 8px;
        font-size: 12px;
        height: 16px;
        line-height: 12px;
        padding: 1px 7px;
    }

    .chip.chip-sm>.close::after {
        font-size: 9px;
        margin-left: 4px;
    }

    .display-on-hover .displayed-on-hover {
        opacity: 0;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
        filter: alpha(opacity=0);
    }

    .display-on-hover:hover .displayed-on-hover {
        opacity: 1;
        -ms-filter: none;
        filter: none;
        -webkit-transition: opacity 200ms ease-in-out;
        -moz-transition: opacity 200ms ease-in-out;
        -o-transition: opacity 200ms ease-in-out;
        -ms-transition: opacity 200ms ease-in-out;
        transition: opacity 200ms ease-in-out;
    }

    .display-on-hover:hover .displayed-on-hover.display-fast {
        -webkit-transition: opacity 100ms ease-in-out;
        -moz-transition: opacity 100ms ease-in-out;
        -o-transition: opacity 100ms ease-in-out;
        -ms-transition: opacity 100ms ease-in-out;
        transition: opacity 100ms ease-in-out;
    }

    .display-on-hover:hover .displayed-on-hover.display-slow {
        -webkit-transition: opacity 500ms ease-in-out;
        -moz-transition: opacity 500ms ease-in-out;
        -o-transition: opacity 500ms ease-in-out;
        -ms-transition: opacity 500ms ease-in-out;
        transition: opacity 500ms ease-in-out;
    }

    .text-divider {
        display: flex;
        align-items: center;
        text-align: center;
    }

    .text-divider::before,
    .text-divider::after {
        content: '';
        flex: 1;
        border-bottom: 1px solid #e3e4e6;
    }

    .text-divider:not(:empty)::before {
        margin-right: 8px;
    }

    .text-divider:not(:empty)::after {
        margin-left: 8px;
    }

    .marginless-divider {
        border-bottom: 1px solid #e3e4e6;
    }

    .form-group {
        margin-bottom: 24px;
    }

    .form-group label {
        display: block;
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 8px;
    }

    .form-control,
    .form-control[disabled]:hover,
    .form-control.disabled:hover {
        background-color: #f0f1f2;
        border-color: #f0f1f2;
        color: #555659;
    }

    .form-control::placeholder,
    .form-control[disabled]:hover::placeholder,
    .form-control.disabled:hover::placeholder,
    .form-control .form-control-placeholder,
    .form-control[disabled]:hover .form-control-placeholder,
    .form-control.disabled:hover .form-control-placeholder {
        color: #969799;
    }

    .form-control:hover,
    .form-control.hover,
    .form-control.form-control-transparent:hover,
    .form-control.form-control-transparent.hover {
        background-color: #e3e4e6;
        border-color: #b1b1b3;
        color: #555659;
    }

    .theme-inverse .form-control,
    .theme-inverse .form-control[disabled]:hover,
    .theme-inverse .form-control.disabled:hover {
        background-color: rgba(177, 177, 179, 0.4);
        border-color: rgba(177, 177, 179, 0);
        color: #d7d7d9;
    }

    .theme-inverse .form-control::placeholder,
    .theme-inverse .form-control[disabled]:hover::placeholder,
    .theme-inverse .form-control.disabled:hover::placeholder,
    .theme-inverse .form-control .form-control-placeholder,
    .theme-inverse .form-control[disabled]:hover .form-control-placeholder,
    .theme-inverse .form-control.disabled:hover .form-control-placeholder {
        color: #b1b1b3;
    }

    .theme-inverse .form-control:hover,
    .theme-inverse .form-control.hover {
        background-color: rgba(215, 215, 217, 0.4);
        border-color: rgba(215, 215, 217, 0);
        color: #d7d7d9;
    }

    .form-control.form-control-outlined,
    .form-control.form-control-outlined[disabled]:hover,
    .form-control.form-control-outlined.disabled:hover {
        background-color: #fff;
        border-color: #e3e4e6;
        color: #555659;
    }

    .form-control.form-control-outlined::placeholder,
    .form-control.form-control-outlined[disabled]:hover::placeholder,
    .form-control.form-control-outlined.disabled:hover::placeholder,
    .form-control.form-control-outlined .form-control-placeholder,
    .form-control.form-control-outlined[disabled]:hover .form-control-placeholder,
    .form-control.form-control-outlined.disabled:hover .form-control-placeholder {
        color: #969799;
    }

    .form-control.form-control-outlined:hover,
    .form-control.form-control-outlined.hover {
        background-color: #fff;
        border-color: #b1b1b3;
        color: #555659;
    }

    .form-control.invalid,
    .form-control.invalid[disabled]:hover,
    .form-control.invalid.disabled:hover {
        background-color: #fff7f7;
        border-color: #d94141;
        color: #d94141;
    }

    .form-control.invalid::placeholder,
    .form-control.invalid[disabled]:hover::placeholder,
    .form-control.invalid.disabled:hover::placeholder,
    .form-control.invalid .form-control-placeholder,
    .form-control.invalid[disabled]:hover .form-control-placeholder,
    .form-control.invalid.disabled:hover .form-control-placeholder {
        color: #f99;
    }

    .form-control.invalid:hover,
    .form-control.invalid.hover {
        background-color: #ffe6e6;
        border-color: #d94141;
        color: #d94141;
    }

    .theme-inverse .form-control.invalid,
    .theme-inverse .form-control.invalid[disabled]:hover,
    .theme-inverse .form-control.invalid.disabled:hover {
        background-color: #ffe6e6;
        border-color: #d94141;
        color: #d94141;
    }

    .theme-inverse .form-control.invalid::placeholder,
    .theme-inverse .form-control.invalid[disabled]:hover::placeholder,
    .theme-inverse .form-control.invalid.disabled:hover::placeholder,
    .theme-inverse .form-control.invalid .form-control-placeholder,
    .theme-inverse .form-control.invalid[disabled]:hover .form-control-placeholder,
    .theme-inverse .form-control.invalid.disabled:hover .form-control-placeholder {
        color: #f99;
    }

    .theme-inverse .form-control.invalid:hover,
    .theme-inverse .form-control.invalid.hover {
        background-color: #fff7f7;
        border-color: #d94141;
        color: #d94141;
    }

    .form-control.form-control-transparent,
    .form-control.form-control-transparent[disabled]:hover,
    .form-control.form-control-transparent.disabled:hover {
        background-color: transparent;
        border-color: transparent;
        color: inherit;
    }

    .form-control:focus,
    .form-control.focus,
    .form-control.form-control-transparent:focus,
    .form-control.form-control-transparent.focus,
    .theme-inverse .form-control:focus,
    .theme-inverse .form-control.focus,
    .form-control.form-control-outlined:focus,
    .form-control.form-control-outlined.focus,
    .form-control.invalid:focus,
    .form-control.invalid.focus,
    .theme-inverse .form-control.invalid:focus,
    .theme-inverse .form-control.invalid.focus {
        background-color: #fff;
        border-color: #0c92f3;
        color: #555659;
    }

    .form-control:focus::placeholder,
    .form-control.focus::placeholder,
    .form-control.form-control-transparent:focus::placeholder,
    .form-control.form-control-transparent.focus::placeholder,
    .theme-inverse .form-control:focus::placeholder,
    .theme-inverse .form-control.focus::placeholder,
    .form-control.form-control-outlined:focus::placeholder,
    .form-control.form-control-outlined.focus::placeholder,
    .form-control.invalid:focus::placeholder,
    .form-control.invalid.focus::placeholder,
    .theme-inverse .form-control.invalid:focus::placeholder,
    .theme-inverse .form-control.invalid.focus::placeholder,
    .form-control:focus .form-control-placeholder,
    .form-control.focus .form-control-placeholder,
    .form-control.form-control-transparent:focus .form-control-placeholder,
    .form-control.form-control-transparent.focus .form-control-placeholder,
    .theme-inverse .form-control:focus .form-control-placeholder,
    .theme-inverse .form-control.focus .form-control-placeholder,
    .form-control.form-control-outlined:focus .form-control-placeholder,
    .form-control.form-control-outlined.focus .form-control-placeholder,
    .form-control.invalid:focus .form-control-placeholder,
    .form-control.invalid.focus .form-control-placeholder,
    .theme-inverse .form-control.invalid:focus .form-control-placeholder,
    .theme-inverse .form-control.invalid.focus .form-control-placeholder {
        color: #969799;
    }

    .form-control-label,
    label.form-control-label {
        display: block;
        font-size: 14px;
        line-height: 21px;
        margin-bottom: 8px;
    }

    .form-control {
        -webkit-border-radius: 3px;
        border-radius: 3px;
        border-style: solid;
        border-width: 1px;
        display: block;
        font-size: 16px;
        line-height: 24px;
        padding: 7px 15px;
        resize: vertical;
        -webkit-transition: border-color 0.15s ease-in-out;
        -moz-transition: border-color 0.15s ease-in-out;
        -o-transition: border-color 0.15s ease-in-out;
        -ms-transition: border-color 0.15s ease-in-out;
        transition: border-color 0.15s ease-in-out;
        width: 100%;
    }

    .form-control:focus,
    .form-control.focus {
        outline: 0;
    }

    .form-control[disabled],
    .form-control.disabled {
        cursor: default;
        opacity: 0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
        filter: alpha(opacity=50);
    }

    .form-control.multi-select-input {
        padding: 6px 15px;
    }

    input.form-control {
        height: 40px;
    }

    .form-control-inline {
        display: inline-block;
        width: auto;
    }

    .form-control-inherit {
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box;
        color: inherit;
        font-size: inherit;
        font-weight: inherit;
        line-height: inherit;
        margin: -1px -8px;
        padding: 0 7px;
    }

    .form-control-inherit,
    input.form-control-inherit {
        height: auto;
    }

    .form-control-inherit.form-control-inline {
        margin-left: 0;
        margin-right: 0;
    }

    .form-control-lg {
        -webkit-border-radius: 3px;
        border-radius: 3px;
        font-size: 32px;
        line-height: 40px;
        padding: 3px 15px;
    }

    input.form-control-lg {
        height: 48px;
    }

    .form-control-sm {
        -webkit-border-radius: 3px;
        border-radius: 3px;
        font-size: 14px;
        line-height: 21px;
        padding: 4.5px 15px;
    }

    .form-control-sm.multi-select-input {
        padding: 3.5px 15px;
    }

    input.form-control-sm {
        height: 32px;
    }

    .form-check {
        display: block;
    }

    .form-check+.form-check {
        margin-top: 8px;
    }

    .form-check.disabled,
    .form-check [disabled] {
        opacity: 0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
        filter: alpha(opacity=50);
    }

    .form-check-label {
        display: inline-block;
        min-height: 24px;
        padding-left: 24px;
        position: relative;
        vertical-align: top;
    }

    .form-check-label .form-text {
        margin-top: 0;
    }

    .form-group label.form-check-label {
        display: inline-block;
        margin-bottom: 0;
    }

    .form-check-input,
    input[type=checkbox].form-check-input,
    input[type=radio].form-check-input {
        -moz-appearance: none;
        -webkit-appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border-style: solid;
        border-width: 1px;
        display: inline-block;
        height: 16px;
        margin: 0;
        position: relative;
        vertical-align: -0.15em;
        width: 16px;
    }

    .form-check-input,
    input[type=checkbox].form-check-input,
    input[type=radio].form-check-input {
        background: rgba(177, 177, 179, 0.4);
        border-color: rgba(177, 177, 179, 0);
    }

    .form-check-input:hover,
    input[type=checkbox].form-check-input:hover,
    input[type=radio].form-check-input:hover,
    .form-check.hover .form-check-input,
    .form-check.hover input[type=checkbox].form-check-input,
    .form-check.hover input[type=radio].form-check-input {
        background: rgba(150, 151, 153, 0.4);
        border-color: #b1b1b3;
    }

    .form-check-input:active,
    input[type=checkbox].form-check-input:active,
    input[type=radio].form-check-input:active,
    .form-check.active .form-check-input,
    .form-check.active input[type=checkbox].form-check-input,
    .form-check.active input[type=radio].form-check-input {
        background: rgba(112, 113, 115, 0.4);
        border-color: #969799;
    }

    .form-check-input:checked,
    input[type=checkbox].form-check-input:checked,
    input[type=radio].form-check-input:checked {
        background: #0c92f3;
        border-width: 0;
    }

    .form-check-input:checked:hover,
    input[type=checkbox].form-check-input:checked:hover,
    input[type=radio].form-check-input:checked:hover,
    .form-check.hover .form-check-input:checked,
    .form-check.hover input[type=checkbox].form-check-input:checked,
    .form-check.hover input[type=radio].form-check-input:checked {
        background: #007fd9;
    }

    .form-check-input:checked:active,
    input[type=checkbox].form-check-input:checked:active,
    input[type=radio].form-check-input:checked:active,
    .form-check.active .form-check-input:checked,
    .form-check.active input[type=checkbox].form-check-input:checked,
    .form-check.active input[type=radio].form-check-input:checked {
        background: #0068b3;
    }

    input[type=checkbox].form-check-input.form-check-input:indeterminate,
    input[type=checkbox].form-check-inputinput[type=checkbox].form-check-input:indeterminate,
    input[type=checkbox].form-check-inputinput[type=radio].form-check-input:indeterminate {
        background: #0c92f3;
        border-width: 0;
    }

    input[type=checkbox].form-check-input.form-check-input:indeterminate:hover,
    input[type=checkbox].form-check-inputinput[type=checkbox].form-check-input:indeterminate:hover,
    input[type=checkbox].form-check-inputinput[type=radio].form-check-input:indeterminate:hover,
    .form-check.hover input[type=checkbox].form-check-input.form-check-input:indeterminate,
    .form-check.hover input[type=checkbox].form-check-inputinput[type=checkbox].form-check-input:indeterminate,
    .form-check.hover input[type=checkbox].form-check-inputinput[type=radio].form-check-input:indeterminate {
        background: #007fd9;
    }

    input[type=checkbox].form-check-input.form-check-input:indeterminate:active,
    input[type=checkbox].form-check-inputinput[type=checkbox].form-check-input:indeterminate:active,
    input[type=checkbox].form-check-inputinput[type=radio].form-check-input:indeterminate:active,
    .form-check.active input[type=checkbox].form-check-input.form-check-input:indeterminate,
    .form-check.active input[type=checkbox].form-check-inputinput[type=checkbox].form-check-input:indeterminate,
    .form-check.active input[type=checkbox].form-check-inputinput[type=radio].form-check-input:indeterminate {
        background: #0068b3;
    }

    .form-check-input[disabled].form-check-input:indeterminate:hover,
    input[type=checkbox].form-check-input[disabled]input[type=checkbox].form-check-input:indeterminate:hover,
    input[type=radio].form-check-input[disabled]input[type=radio].form-check-input:indeterminate:hover,
    .form-check.disabled .form-check-input:hover,
    .form-check.disabled input[type=checkbox].form-check-input:hover,
    .form-check.disabled input[type=radio].form-check-input:hover,
    .form-check-input[disabled].form-check-input:indeterminate:active,
    input[type=checkbox].form-check-input[disabled]input[type=checkbox].form-check-input:indeterminate:active,
    input[type=radio].form-check-input[disabled]input[type=radio].form-check-input:indeterminate:active,
    .form-check.disabled .form-check-input:active,
    .form-check.disabled input[type=checkbox].form-check-input:active,
    .form-check.disabled input[type=radio].form-check-input:active {
        background: rgba(177, 177, 179, 0.4);
        border-color: rgba(177, 177, 179, 0);
        cursor: default;
    }

    .form-check-input[disabled].form-check-input:indeterminate:checked,
    input[type=checkbox].form-check-input[disabled]input[type=checkbox].form-check-input:indeterminate:checked,
    input[type=radio].form-check-input[disabled]input[type=radio].form-check-input:indeterminate:checked,
    .form-check.disabled .form-check-input:checked,
    .form-check.disabled input[type=checkbox].form-check-input:checked,
    .form-check.disabled input[type=radio].form-check-input:checked {
        background: #0c92f3;
        border-width: 0;
    }

    .form-check-label .form-check-input,
    .form-check-label input[type=checkbox].form-check-input,
    .form-check-label input[type=radio].form-check-input {
        left: 0;
        position: absolute;
        top: 3px;
    }

    .form-check-input:focus,
    input[type=checkbox].form-check-input:focus,
    input[type=radio].form-check-input:focus {
        outline: 0;
    }

    .theme-inverse .form-check-input,
    .theme-inverse input[type=checkbox].form-check-input,
    .theme-inverse input[type=radio].form-check-input {
        background: $formCheckOutlinedBackgroundInverse;
        border-color: $formCheckOutlinedBorderColorInverse;
    }

    .theme-inverse .form-check-input:hover,
    .theme-inverse input[type=checkbox].form-check-input:hover,
    .theme-inverse input[type=radio].form-check-input:hover,
    .theme-inverse .form-check.hover .form-check-input,
    .theme-inverse .form-check.hover input[type=checkbox].form-check-input,
    .theme-inverse .form-check.hover input[type=radio].form-check-input {
        background: $formCheckOutlinedHoverBackgroundInverse;
        border-color: $formCheckOutlinedHoverBorderColorInverse;
    }

    .theme-inverse .form-check-input:active,
    .theme-inverse input[type=checkbox].form-check-input:active,
    .theme-inverse input[type=radio].form-check-input:active,
    .theme-inverse .form-check.active .form-check-input,
    .theme-inverse .form-check.active input[type=checkbox].form-check-input,
    .theme-inverse .form-check.active input[type=radio].form-check-input {
        background: $formCheckOutlinedActiveBackgroundInverse;
        border-color: $formCheckOutlinedActiveBorderColorInverse;
    }

    .theme-inverse .form-check-input:checked,
    .theme-inverse input[type=checkbox].form-check-input:checked,
    .theme-inverse input[type=radio].form-check-input:checked {
        background: #0c92f3;
        border-width: 0;
    }

    .theme-inverse .form-check-input:checked:hover,
    .theme-inverse input[type=checkbox].form-check-input:checked:hover,
    .theme-inverse input[type=radio].form-check-input:checked:hover,
    .theme-inverse .form-check.hover .form-check-input:checked,
    .theme-inverse .form-check.hover input[type=checkbox].form-check-input:checked,
    .theme-inverse .form-check.hover input[type=radio].form-check-input:checked {
        background: #007fd9;
    }

    .theme-inverse .form-check-input:checked:active,
    .theme-inverse input[type=checkbox].form-check-input:checked:active,
    .theme-inverse input[type=radio].form-check-input:checked:active,
    .theme-inverse .form-check.active .form-check-input:checked,
    .theme-inverse .form-check.active input[type=checkbox].form-check-input:checked,
    .theme-inverse .form-check.active input[type=radio].form-check-input:checked {
        background: #0068b3;
    }

    .theme-inverse input[type=checkbox].form-check-input.form-check-input:indeterminate,
    .theme-inverse input[type=checkbox].form-check-inputinput[type=checkbox].form-check-input:indeterminate,
    .theme-inverse input[type=checkbox].form-check-inputinput[type=radio].form-check-input:indeterminate {
        background: #0c92f3;
        border-width: 0;
    }

    .theme-inverse input[type=checkbox].form-check-input.form-check-input:indeterminate:hover,
    .theme-inverse input[type=checkbox].form-check-inputinput[type=checkbox].form-check-input:indeterminate:hover,
    .theme-inverse input[type=checkbox].form-check-inputinput[type=radio].form-check-input:indeterminate:hover,
    .theme-inverse .form-check.hover input[type=checkbox].form-check-input.form-check-input:indeterminate,
    .theme-inverse .form-check.hover input[type=checkbox].form-check-inputinput[type=checkbox].form-check-input:indeterminate,
    .theme-inverse .form-check.hover input[type=checkbox].form-check-inputinput[type=radio].form-check-input:indeterminate {
        background: #007fd9;
    }

    .theme-inverse input[type=checkbox].form-check-input.form-check-input:indeterminate:active,
    .theme-inverse input[type=checkbox].form-check-inputinput[type=checkbox].form-check-input:indeterminate:active,
    .theme-inverse input[type=checkbox].form-check-inputinput[type=radio].form-check-input:indeterminate:active,
    .theme-inverse .form-check.active input[type=checkbox].form-check-input.form-check-input:indeterminate,
    .theme-inverse .form-check.active input[type=checkbox].form-check-inputinput[type=checkbox].form-check-input:indeterminate,
    .theme-inverse .form-check.active input[type=checkbox].form-check-inputinput[type=radio].form-check-input:indeterminate {
        background: #0068b3;
    }

    .theme-inverse .form-check-input[disabled].form-check-input:indeterminate:hover,
    .theme-inverse input[type=checkbox].form-check-input[disabled]input[type=checkbox].form-check-input:indeterminate:hover,
    .theme-inverse input[type=radio].form-check-input[disabled]input[type=radio].form-check-input:indeterminate:hover,
    .theme-inverse .form-check.disabled .form-check-input:hover,
    .theme-inverse .form-check.disabled input[type=checkbox].form-check-input:hover,
    .theme-inverse .form-check.disabled input[type=radio].form-check-input:hover,
    .theme-inverse .form-check-input[disabled].form-check-input:indeterminate:active,
    .theme-inverse input[type=checkbox].form-check-input[disabled]input[type=checkbox].form-check-input:indeterminate:active,
    .theme-inverse input[type=radio].form-check-input[disabled]input[type=radio].form-check-input:indeterminate:active,
    .theme-inverse .form-check.disabled .form-check-input:active,
    .theme-inverse .form-check.disabled input[type=checkbox].form-check-input:active,
    .theme-inverse .form-check.disabled input[type=radio].form-check-input:active {
        background: $formCheckOutlinedBackgroundInverse;
        border-color: $formCheckOutlinedBorderColorInverse;
        cursor: default;
    }

    .theme-inverse .form-check-input[disabled].form-check-input:indeterminate:checked,
    .theme-inverse input[type=checkbox].form-check-input[disabled]input[type=checkbox].form-check-input:indeterminate:checked,
    .theme-inverse input[type=radio].form-check-input[disabled]input[type=radio].form-check-input:indeterminate:checked,
    .theme-inverse .form-check.disabled .form-check-input:checked,
    .theme-inverse .form-check.disabled input[type=checkbox].form-check-input:checked,
    .theme-inverse .form-check.disabled input[type=radio].form-check-input:checked {
        background: #0c92f3;
        border-width: 0;
    }

    .form-check-input.form-check-input-outlined,
    input[type=checkbox].form-check-input.form-check-input-outlined,
    input[type=radio].form-check-input.form-check-input-outlined {
        background: #fff;
        border-color: #e3e4e6;
    }

    .form-check-input.form-check-input-outlined:hover,
    input[type=checkbox].form-check-input.form-check-input-outlined:hover,
    input[type=radio].form-check-input.form-check-input-outlined:hover,
    .form-check.hover .form-check-input.form-check-input-outlined,
    .form-check.hover input[type=checkbox].form-check-input.form-check-input-outlined,
    .form-check.hover input[type=radio].form-check-input.form-check-input-outlined {
        background: #fff;
        border-color: #b1b1b3;
    }

    .form-check-input.form-check-input-outlined:active,
    input[type=checkbox].form-check-input.form-check-input-outlined:active,
    input[type=radio].form-check-input.form-check-input-outlined:active,
    .form-check.active .form-check-input.form-check-input-outlined,
    .form-check.active input[type=checkbox].form-check-input.form-check-input-outlined,
    .form-check.active input[type=radio].form-check-input.form-check-input-outlined {
        background: #f0f1f2;
        border-color: #969799;
    }

    .form-check-input.form-check-input-outlined:checked,
    input[type=checkbox].form-check-input.form-check-input-outlined:checked,
    input[type=radio].form-check-input.form-check-input-outlined:checked {
        background: #0c92f3;
        border-width: 0;
    }

    .form-check-input.form-check-input-outlined:checked:hover,
    input[type=checkbox].form-check-input.form-check-input-outlined:checked:hover,
    input[type=radio].form-check-input.form-check-input-outlined:checked:hover,
    .form-check.hover .form-check-input.form-check-input-outlined:checked,
    .form-check.hover input[type=checkbox].form-check-input.form-check-input-outlined:checked,
    .form-check.hover input[type=radio].form-check-input.form-check-input-outlined:checked {
        background: #007fd9;
    }

    .form-check-input.form-check-input-outlined:checked:active,
    input[type=checkbox].form-check-input.form-check-input-outlined:checked:active,
    input[type=radio].form-check-input.form-check-input-outlined:checked:active,
    .form-check.active .form-check-input.form-check-input-outlined:checked,
    .form-check.active input[type=checkbox].form-check-input.form-check-input-outlined:checked,
    .form-check.active input[type=radio].form-check-input.form-check-input-outlined:checked {
        background: #0068b3;
    }

    input[type=checkbox].form-check-input.form-check-input.form-check-input-outlined:indeterminate,
    input[type=checkbox].form-check-inputinput[type=checkbox].form-check-input.form-check-input-outlined:indeterminate,
    input[type=checkbox].form-check-inputinput[type=radio].form-check-input.form-check-input-outlined:indeterminate {
        background: #0c92f3;
        border-width: 0;
    }

    input[type=checkbox].form-check-input.form-check-input.form-check-input-outlined:indeterminate:hover,
    input[type=checkbox].form-check-inputinput[type=checkbox].form-check-input.form-check-input-outlined:indeterminate:hover,
    input[type=checkbox].form-check-inputinput[type=radio].form-check-input.form-check-input-outlined:indeterminate:hover,
    .form-check.hover input[type=checkbox].form-check-input.form-check-input.form-check-input-outlined:indeterminate,
    .form-check.hover input[type=checkbox].form-check-inputinput[type=checkbox].form-check-input.form-check-input-outlined:indeterminate,
    .form-check.hover input[type=checkbox].form-check-inputinput[type=radio].form-check-input.form-check-input-outlined:indeterminate {
        background: #007fd9;
    }

    input[type=checkbox].form-check-input.form-check-input.form-check-input-outlined:indeterminate:active,
    input[type=checkbox].form-check-inputinput[type=checkbox].form-check-input.form-check-input-outlined:indeterminate:active,
    input[type=checkbox].form-check-inputinput[type=radio].form-check-input.form-check-input-outlined:indeterminate:active,
    .form-check.active input[type=checkbox].form-check-input.form-check-input.form-check-input-outlined:indeterminate,
    .form-check.active input[type=checkbox].form-check-inputinput[type=checkbox].form-check-input.form-check-input-outlined:indeterminate,
    .form-check.active input[type=checkbox].form-check-inputinput[type=radio].form-check-input.form-check-input-outlined:indeterminate {
        background: #0068b3;
    }

    .form-check-input.form-check-input-outlined[disabled].form-check-input.form-check-input-outlined:indeterminate:hover,
    input[type=checkbox].form-check-input.form-check-input-outlined[disabled]input[type=checkbox].form-check-input.form-check-input-outlined:indeterminate:hover,
    input[type=radio].form-check-input.form-check-input-outlined[disabled]input[type=radio].form-check-input.form-check-input-outlined:indeterminate:hover,
    .form-check.disabled .form-check-input.form-check-input-outlined:hover,
    .form-check.disabled input[type=checkbox].form-check-input.form-check-input-outlined:hover,
    .form-check.disabled input[type=radio].form-check-input.form-check-input-outlined:hover,
    .form-check-input.form-check-input-outlined[disabled].form-check-input.form-check-input-outlined:indeterminate:active,
    input[type=checkbox].form-check-input.form-check-input-outlined[disabled]input[type=checkbox].form-check-input.form-check-input-outlined:indeterminate:active,
    input[type=radio].form-check-input.form-check-input-outlined[disabled]input[type=radio].form-check-input.form-check-input-outlined:indeterminate:active,
    .form-check.disabled .form-check-input.form-check-input-outlined:active,
    .form-check.disabled input[type=checkbox].form-check-input.form-check-input-outlined:active,
    .form-check.disabled input[type=radio].form-check-input.form-check-input-outlined:active {
        background: #fff;
        border-color: #e3e4e6;
        cursor: default;
    }

    .form-check-input.form-check-input-outlined[disabled].form-check-input.form-check-input-outlined:indeterminate:checked,
    input[type=checkbox].form-check-input.form-check-input-outlined[disabled]input[type=checkbox].form-check-input.form-check-input-outlined:indeterminate:checked,
    input[type=radio].form-check-input.form-check-input-outlined[disabled]input[type=radio].form-check-input.form-check-input-outlined:indeterminate:checked,
    .form-check.disabled .form-check-input.form-check-input-outlined:checked,
    .form-check.disabled input[type=checkbox].form-check-input.form-check-input-outlined:checked,
    .form-check.disabled input[type=radio].form-check-input.form-check-input-outlined:checked {
        background: #0c92f3;
        border-width: 0;
    }

    .form-check-input.form-check-input-required,
    input[type=checkbox].form-check-input.form-check-input-required,
    input[type=radio].form-check-input.form-check-input-required {
        content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='9' height='8' viewBox='0 0 9 8'%3E%3Cpath d='M8.39561 3.4945L7.97802 2.21978L4.85714 3.27472V0H3.53846V3.27472L0.417582 2.21978L0 3.4945L3.0989 4.54945L1.18681 7.16483L2.28571 8L4.1978 5.2967L6.17583 8L7.25275 7.16483L5.2967 4.54945L8.39561 3.4945Z' fill='%23B1B1B3'/%3E%3C/svg%3E%0A");
        padding: 3px;
    }

    .form-check-input.form-check-input-required,
    input[type=checkbox].form-check-input.form-check-input-required,
    input[type=radio].form-check-input.form-check-input-required {
        background: ;
        border-color: ;
    }

    .form-check-input.form-check-input-required:hover,
    input[type=checkbox].form-check-input.form-check-input-required:hover,
    input[type=radio].form-check-input.form-check-input-required:hover,
    .form-check.hover .form-check-input.form-check-input-required,
    .form-check.hover input[type=checkbox].form-check-input.form-check-input-required,
    .form-check.hover input[type=radio].form-check-input.form-check-input-required {
        background: ;
        border-color: ;
    }

    .form-check-input.form-check-input-required:active,
    input[type=checkbox].form-check-input.form-check-input-required:active,
    input[type=radio].form-check-input.form-check-input-required:active,
    .form-check.active .form-check-input.form-check-input-required,
    .form-check.active input[type=checkbox].form-check-input.form-check-input-required,
    .form-check.active input[type=radio].form-check-input.form-check-input-required {
        background: ;
        border-color: ;
    }

    .form-check-input.form-check-input-required:checked,
    input[type=checkbox].form-check-input.form-check-input-required:checked,
    input[type=radio].form-check-input.form-check-input-required:checked {
        background: #f26161;
        border-width: 0;
    }

    .form-check-input.form-check-input-required:checked:hover,
    input[type=checkbox].form-check-input.form-check-input-required:checked:hover,
    input[type=radio].form-check-input.form-check-input-required:checked:hover,
    .form-check.hover .form-check-input.form-check-input-required:checked,
    .form-check.hover input[type=checkbox].form-check-input.form-check-input-required:checked,
    .form-check.hover input[type=radio].form-check-input.form-check-input-required:checked {
        background: #d94141;
    }

    .form-check-input.form-check-input-required:checked:active,
    input[type=checkbox].form-check-input.form-check-input-required:checked:active,
    input[type=radio].form-check-input.form-check-input-required:checked:active,
    .form-check.active .form-check-input.form-check-input-required:checked,
    .form-check.active input[type=checkbox].form-check-input.form-check-input-required:checked,
    .form-check.active input[type=radio].form-check-input.form-check-input-required:checked {
        background: #bf3939;
    }

    input[type=checkbox].form-check-input.form-check-input.form-check-input-required:indeterminate,
    input[type=checkbox].form-check-inputinput[type=checkbox].form-check-input.form-check-input-required:indeterminate,
    input[type=checkbox].form-check-inputinput[type=radio].form-check-input.form-check-input-required:indeterminate {
        background: #f26161;
        border-width: 0;
    }

    input[type=checkbox].form-check-input.form-check-input.form-check-input-required:indeterminate:hover,
    input[type=checkbox].form-check-inputinput[type=checkbox].form-check-input.form-check-input-required:indeterminate:hover,
    input[type=checkbox].form-check-inputinput[type=radio].form-check-input.form-check-input-required:indeterminate:hover,
    .form-check.hover input[type=checkbox].form-check-input.form-check-input.form-check-input-required:indeterminate,
    .form-check.hover input[type=checkbox].form-check-inputinput[type=checkbox].form-check-input.form-check-input-required:indeterminate,
    .form-check.hover input[type=checkbox].form-check-inputinput[type=radio].form-check-input.form-check-input-required:indeterminate {
        background: #d94141;
    }

    input[type=checkbox].form-check-input.form-check-input.form-check-input-required:indeterminate:active,
    input[type=checkbox].form-check-inputinput[type=checkbox].form-check-input.form-check-input-required:indeterminate:active,
    input[type=checkbox].form-check-inputinput[type=radio].form-check-input.form-check-input-required:indeterminate:active,
    .form-check.active input[type=checkbox].form-check-input.form-check-input.form-check-input-required:indeterminate,
    .form-check.active input[type=checkbox].form-check-inputinput[type=checkbox].form-check-input.form-check-input-required:indeterminate,
    .form-check.active input[type=checkbox].form-check-inputinput[type=radio].form-check-input.form-check-input-required:indeterminate {
        background: #bf3939;
    }

    .form-check-input.form-check-input-required[disabled].form-check-input.form-check-input-required:indeterminate:hover,
    input[type=checkbox].form-check-input.form-check-input-required[disabled]input[type=checkbox].form-check-input.form-check-input-required:indeterminate:hover,
    input[type=radio].form-check-input.form-check-input-required[disabled]input[type=radio].form-check-input.form-check-input-required:indeterminate:hover,
    .form-check.disabled .form-check-input.form-check-input-required:hover,
    .form-check.disabled input[type=checkbox].form-check-input.form-check-input-required:hover,
    .form-check.disabled input[type=radio].form-check-input.form-check-input-required:hover,
    .form-check-input.form-check-input-required[disabled].form-check-input.form-check-input-required:indeterminate:active,
    input[type=checkbox].form-check-input.form-check-input-required[disabled]input[type=checkbox].form-check-input.form-check-input-required:indeterminate:active,
    input[type=radio].form-check-input.form-check-input-required[disabled]input[type=radio].form-check-input.form-check-input-required:indeterminate:active,
    .form-check.disabled .form-check-input.form-check-input-required:active,
    .form-check.disabled input[type=checkbox].form-check-input.form-check-input-required:active,
    .form-check.disabled input[type=radio].form-check-input.form-check-input-required:active {
        background: ;
        border-color: ;
        cursor: default;
    }

    .form-check-input.form-check-input-required[disabled].form-check-input.form-check-input-required:indeterminate:checked,
    input[type=checkbox].form-check-input.form-check-input-required[disabled]input[type=checkbox].form-check-input.form-check-input-required:indeterminate:checked,
    input[type=radio].form-check-input.form-check-input-required[disabled]input[type=radio].form-check-input.form-check-input-required:indeterminate:checked,
    .form-check.disabled .form-check-input.form-check-input-required:checked,
    .form-check.disabled input[type=checkbox].form-check-input.form-check-input-required:checked,
    .form-check.disabled input[type=radio].form-check-input.form-check-input-required:checked {
        background: #f26161;
        border-width: 0;
    }

    .form-check-input.form-check-input-required:checked,
    input[type=checkbox].form-check-input.form-check-input-required:checked,
    input[type=radio].form-check-input.form-check-input-required:checked {
        content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='9' height='8' viewBox='0 0 9 8'%3E%3Cpath d='M8.39561 3.49451L7.97802 2.21978L4.85714 3.27473V0H3.53846V3.27473L0.417582 2.21978L0 3.49451L3.0989 4.54945L1.18681 7.16483L2.28571 8L4.1978 5.2967L6.17583 8L7.25275 7.16483L5.2967 4.54945L8.39561 3.49451Z' fill='white'/%3E%3C/svg%3E%0A");
    }

    .form-check-input.invalid,
    input[type=checkbox].form-check-input.invalid,
    input[type=radio].form-check-input.invalid {
        background: #fff7f7;
        border-color: #d94141;
    }

    .form-check-input.invalid:hover,
    input[type=checkbox].form-check-input.invalid:hover,
    input[type=radio].form-check-input.invalid:hover,
    .form-check.hover .form-check-input.invalid,
    .form-check.hover input[type=checkbox].form-check-input.invalid,
    .form-check.hover input[type=radio].form-check-input.invalid {
        background: #ffe6e6;
        border-color: #d94141;
    }

    .form-check-input.invalid:active,
    input[type=checkbox].form-check-input.invalid:active,
    input[type=radio].form-check-input.invalid:active,
    .form-check.active .form-check-input.invalid,
    .form-check.active input[type=checkbox].form-check-input.invalid,
    .form-check.active input[type=radio].form-check-input.invalid {
        background: #ffbfbf;
        border-color: #d94141;
    }

    .form-check-input.invalid:checked,
    input[type=checkbox].form-check-input.invalid:checked,
    input[type=radio].form-check-input.invalid:checked {
        background: #d94141;
        border-width: 0;
    }

    .form-check-input.invalid:checked:hover,
    input[type=checkbox].form-check-input.invalid:checked:hover,
    input[type=radio].form-check-input.invalid:checked:hover,
    .form-check.hover .form-check-input.invalid:checked,
    .form-check.hover input[type=checkbox].form-check-input.invalid:checked,
    .form-check.hover input[type=radio].form-check-input.invalid:checked {
        background: #bf3939;
    }

    .form-check-input.invalid:checked:active,
    input[type=checkbox].form-check-input.invalid:checked:active,
    input[type=radio].form-check-input.invalid:checked:active,
    .form-check.active .form-check-input.invalid:checked,
    .form-check.active input[type=checkbox].form-check-input.invalid:checked,
    .form-check.active input[type=radio].form-check-input.invalid:checked {
        background: #a62929;
    }

    input[type=checkbox].form-check-input.form-check-input.invalid:indeterminate,
    input[type=checkbox].form-check-inputinput[type=checkbox].form-check-input.invalid:indeterminate,
    input[type=checkbox].form-check-inputinput[type=radio].form-check-input.invalid:indeterminate {
        background: #d94141;
        border-width: 0;
    }

    input[type=checkbox].form-check-input.form-check-input.invalid:indeterminate:hover,
    input[type=checkbox].form-check-inputinput[type=checkbox].form-check-input.invalid:indeterminate:hover,
    input[type=checkbox].form-check-inputinput[type=radio].form-check-input.invalid:indeterminate:hover,
    .form-check.hover input[type=checkbox].form-check-input.form-check-input.invalid:indeterminate,
    .form-check.hover input[type=checkbox].form-check-inputinput[type=checkbox].form-check-input.invalid:indeterminate,
    .form-check.hover input[type=checkbox].form-check-inputinput[type=radio].form-check-input.invalid:indeterminate {
        background: #bf3939;
    }

    input[type=checkbox].form-check-input.form-check-input.invalid:indeterminate:active,
    input[type=checkbox].form-check-inputinput[type=checkbox].form-check-input.invalid:indeterminate:active,
    input[type=checkbox].form-check-inputinput[type=radio].form-check-input.invalid:indeterminate:active,
    .form-check.active input[type=checkbox].form-check-input.form-check-input.invalid:indeterminate,
    .form-check.active input[type=checkbox].form-check-inputinput[type=checkbox].form-check-input.invalid:indeterminate,
    .form-check.active input[type=checkbox].form-check-inputinput[type=radio].form-check-input.invalid:indeterminate {
        background: #a62929;
    }

    .form-check-input.invalid[disabled].form-check-input.invalid:indeterminate:hover,
    input[type=checkbox].form-check-input.invalid[disabled]input[type=checkbox].form-check-input.invalid:indeterminate:hover,
    input[type=radio].form-check-input.invalid[disabled]input[type=radio].form-check-input.invalid:indeterminate:hover,
    .form-check.disabled .form-check-input.invalid:hover,
    .form-check.disabled input[type=checkbox].form-check-input.invalid:hover,
    .form-check.disabled input[type=radio].form-check-input.invalid:hover,
    .form-check-input.invalid[disabled].form-check-input.invalid:indeterminate:active,
    input[type=checkbox].form-check-input.invalid[disabled]input[type=checkbox].form-check-input.invalid:indeterminate:active,
    input[type=radio].form-check-input.invalid[disabled]input[type=radio].form-check-input.invalid:indeterminate:active,
    .form-check.disabled .form-check-input.invalid:active,
    .form-check.disabled input[type=checkbox].form-check-input.invalid:active,
    .form-check.disabled input[type=radio].form-check-input.invalid:active {
        background: #fff7f7;
        border-color: #d94141;
        cursor: default;
    }

    .form-check-input.invalid[disabled].form-check-input.invalid:indeterminate:checked,
    input[type=checkbox].form-check-input.invalid[disabled]input[type=checkbox].form-check-input.invalid:indeterminate:checked,
    input[type=radio].form-check-input.invalid[disabled]input[type=radio].form-check-input.invalid:indeterminate:checked,
    .form-check.disabled .form-check-input.invalid:checked,
    .form-check.disabled input[type=checkbox].form-check-input.invalid:checked,
    .form-check.disabled input[type=radio].form-check-input.invalid:checked {
        background: #d94141;
        border-width: 0;
    }

    .theme-inverse .form-check-input.invalid,
    .theme-inverse input[type=checkbox].form-check-input.invalid,
    .theme-inverse input[type=radio].form-check-input.invalid {
        background: #ffe6e6;
        border-color: #d94141;
    }

    .theme-inverse .form-check-input.invalid:hover,
    .theme-inverse input[type=checkbox].form-check-input.invalid:hover,
    .theme-inverse input[type=radio].form-check-input.invalid:hover,
    .theme-inverse .form-check.hover .form-check-input.invalid,
    .theme-inverse .form-check.hover input[type=checkbox].form-check-input.invalid,
    .theme-inverse .form-check.hover input[type=radio].form-check-input.invalid {
        background: #fff7f7;
        border-color: #d94141;
    }

    .theme-inverse .form-check-input.invalid:active,
    .theme-inverse input[type=checkbox].form-check-input.invalid:active,
    .theme-inverse input[type=radio].form-check-input.invalid:active,
    .theme-inverse .form-check.active .form-check-input.invalid,
    .theme-inverse .form-check.active input[type=checkbox].form-check-input.invalid,
    .theme-inverse .form-check.active input[type=radio].form-check-input.invalid {
        background: #ffbfbf;
        border-color: #d94141;
    }

    .theme-inverse .form-check-input.invalid:checked,
    .theme-inverse input[type=checkbox].form-check-input.invalid:checked,
    .theme-inverse input[type=radio].form-check-input.invalid:checked {
        background: #d94141;
        border-width: 0;
    }

    .theme-inverse .form-check-input.invalid:checked:hover,
    .theme-inverse input[type=checkbox].form-check-input.invalid:checked:hover,
    .theme-inverse input[type=radio].form-check-input.invalid:checked:hover,
    .theme-inverse .form-check.hover .form-check-input.invalid:checked,
    .theme-inverse .form-check.hover input[type=checkbox].form-check-input.invalid:checked,
    .theme-inverse .form-check.hover input[type=radio].form-check-input.invalid:checked {
        background: #bf3939;
    }

    .theme-inverse .form-check-input.invalid:checked:active,
    .theme-inverse input[type=checkbox].form-check-input.invalid:checked:active,
    .theme-inverse input[type=radio].form-check-input.invalid:checked:active,
    .theme-inverse .form-check.active .form-check-input.invalid:checked,
    .theme-inverse .form-check.active input[type=checkbox].form-check-input.invalid:checked,
    .theme-inverse .form-check.active input[type=radio].form-check-input.invalid:checked {
        background: #a62929;
    }

    .theme-inverse input[type=checkbox].form-check-input.form-check-input.invalid:indeterminate,
    .theme-inverse input[type=checkbox].form-check-inputinput[type=checkbox].form-check-input.invalid:indeterminate,
    .theme-inverse input[type=checkbox].form-check-inputinput[type=radio].form-check-input.invalid:indeterminate {
        background: #d94141;
        border-width: 0;
    }

    .theme-inverse input[type=checkbox].form-check-input.form-check-input.invalid:indeterminate:hover,
    .theme-inverse input[type=checkbox].form-check-inputinput[type=checkbox].form-check-input.invalid:indeterminate:hover,
    .theme-inverse input[type=checkbox].form-check-inputinput[type=radio].form-check-input.invalid:indeterminate:hover,
    .theme-inverse .form-check.hover input[type=checkbox].form-check-input.form-check-input.invalid:indeterminate,
    .theme-inverse .form-check.hover input[type=checkbox].form-check-inputinput[type=checkbox].form-check-input.invalid:indeterminate,
    .theme-inverse .form-check.hover input[type=checkbox].form-check-inputinput[type=radio].form-check-input.invalid:indeterminate {
        background: #bf3939;
    }

    .theme-inverse input[type=checkbox].form-check-input.form-check-input.invalid:indeterminate:active,
    .theme-inverse input[type=checkbox].form-check-inputinput[type=checkbox].form-check-input.invalid:indeterminate:active,
    .theme-inverse input[type=checkbox].form-check-inputinput[type=radio].form-check-input.invalid:indeterminate:active,
    .theme-inverse .form-check.active input[type=checkbox].form-check-input.form-check-input.invalid:indeterminate,
    .theme-inverse .form-check.active input[type=checkbox].form-check-inputinput[type=checkbox].form-check-input.invalid:indeterminate,
    .theme-inverse .form-check.active input[type=checkbox].form-check-inputinput[type=radio].form-check-input.invalid:indeterminate {
        background: #a62929;
    }

    .theme-inverse .form-check-input.invalid[disabled].form-check-input.invalid:indeterminate:hover,
    .theme-inverse input[type=checkbox].form-check-input.invalid[disabled]input[type=checkbox].form-check-input.invalid:indeterminate:hover,
    .theme-inverse input[type=radio].form-check-input.invalid[disabled]input[type=radio].form-check-input.invalid:indeterminate:hover,
    .theme-inverse .form-check.disabled .form-check-input.invalid:hover,
    .theme-inverse .form-check.disabled input[type=checkbox].form-check-input.invalid:hover,
    .theme-inverse .form-check.disabled input[type=radio].form-check-input.invalid:hover,
    .theme-inverse .form-check-input.invalid[disabled].form-check-input.invalid:indeterminate:active,
    .theme-inverse input[type=checkbox].form-check-input.invalid[disabled]input[type=checkbox].form-check-input.invalid:indeterminate:active,
    .theme-inverse input[type=radio].form-check-input.invalid[disabled]input[type=radio].form-check-input.invalid:indeterminate:active,
    .theme-inverse .form-check.disabled .form-check-input.invalid:active,
    .theme-inverse .form-check.disabled input[type=checkbox].form-check-input.invalid:active,
    .theme-inverse .form-check.disabled input[type=radio].form-check-input.invalid:active {
        background: #ffe6e6;
        border-color: #d94141;
        cursor: default;
    }

    .theme-inverse .form-check-input.invalid[disabled].form-check-input.invalid:indeterminate:checked,
    .theme-inverse input[type=checkbox].form-check-input.invalid[disabled]input[type=checkbox].form-check-input.invalid:indeterminate:checked,
    .theme-inverse input[type=radio].form-check-input.invalid[disabled]input[type=radio].form-check-input.invalid:indeterminate:checked,
    .theme-inverse .form-check.disabled .form-check-input.invalid:checked,
    .theme-inverse .form-check.disabled input[type=checkbox].form-check-input.invalid:checked,
    .theme-inverse .form-check.disabled input[type=radio].form-check-input.invalid:checked {
        background: #d94141;
        border-width: 0;
    }

    input[type=radio].form-check-input {
        -webkit-border-radius: 8px;
        border-radius: 8px;
    }

    input[type=radio].form-check-input:checked::after {
        background-color: #fff;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        content: "";
        height: 6px;
        left: 5px;
        position: absolute;
        top: 5px;
        width: 6px;
    }

    input[type=checkbox].form-check-input {
        -webkit-border-radius: 3px;
        border-radius: 3px;
    }

    input[type=checkbox].form-check-input:indeterminate::after {
        border-bottom: 2px solid #fff;
        content: "";
        height: 4px;
        left: 26%;
        position: absolute;
        top: 20%;
        width: 7px;
    }

    input[type=checkbox].form-check-input:checked::after {
        border-bottom: 2px solid #fff;
        border-left: 2px solid #fff;
        content: "";
        height: 4px;
        left: 22%;
        position: absolute;
        top: 20%;
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg);
        width: 7px;
    }

    .form-check-inline {
        display: inline-block;
    }

    .form-check-inline+.form-check-inline {
        margin-left: 24px;
        margin-top: 0;
    }

    .col-form-label {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 0;
        padding-top: 8px;
    }

    .col-form-label-lg {
        font-size: 32px;
        line-height: 40px;
        padding-top: 4px;
    }

    .col-form-label-sm {
        font-size: 14px;
        line-height: 21px;
        padding-top: 5.5px;
    }

    .form-text {
        color: #969799;
        display: block;
        font-size: 12px;
        line-height: 18px;
        margin-top: 8px;
    }

    .form-text.invalid {
        color: #d94141;
    }

    .theme-inverse .form-text {
        color: #b1b1b3;
    }

    .theme-inverse .form-text.invalid {
        color: #f99;
    }

    .form-required::after {
        color: #d94141;
        content: "*";
        font-weight: normal;
        margin-left: 0.2em;
    }

    .chip.default-multi-select-input,
    .chip.small-multi-select-input {
        float: left;
    }

    .chip.default-multi-select-input {
        margin: 0.5px 4px 2px;
    }

    .chip.small-multi-select-input {
        margin: -1px 4px 1px;
    }

    .container-fluid,
    .container,
    .container-sm,
    .container-md,
    .container-lg,
    .container-xl,
    .col,
    .col-auto,
    .col-grow,
    .col-1,
    .col-2,
    .col-3,
    .col-4,
    .col-5,
    .col-6,
    .col-7,
    .col-8,
    .col-9,
    .col-10,
    .col-11,
    .col-12,
    .col-sm,
    .col-sm-auto,
    .col-sm-1,
    .col-sm-2,
    .col-sm-3,
    .col-sm-4,
    .col-sm-5,
    .col-sm-6,
    .col-sm-7,
    .col-sm-8,
    .col-sm-9,
    .col-sm-10,
    .col-sm-11,
    .col-sm-12,
    .col-md,
    .col-md-auto,
    .col-md-1,
    .col-md-2,
    .col-md-3,
    .col-md-4,
    .col-md-5,
    .col-md-6,
    .col-md-7,
    .col-md-8,
    .col-md-9,
    .col-md-10,
    .col-md-11,
    .col-md-12,
    .col-lg,
    .col-lg-auto,
    .col-lg-1,
    .col-lg-2,
    .col-lg-3,
    .col-lg-4,
    .col-lg-5,
    .col-lg-6,
    .col-lg-7,
    .col-lg-8,
    .col-lg-9,
    .col-lg-10,
    .col-lg-11,
    .col-lg-12,
    .col-xl,
    .col-xl-auto,
    .col-xl-1,
    .col-xl-2,
    .col-xl-3,
    .col-xl-4,
    .col-xl-5,
    .col-xl-6,
    .col-xl-7,
    .col-xl-8,
    .col-xl-9,
    .col-xl-10,
    .col-xl-11,
    .col-xl-12 {
        min-height: 1px;
        padding-left: 8px;
        padding-right: 8px;
    }

    .container-fluid,
    .container,
    .container-sm,
    .container-md,
    .container-lg,
    .container-xl {
        margin-left: auto;
        margin-right: auto;
        width: 100%;
    }

    .container {
        max-width: 100%;
    }

    .container-sm {
        max-width: 100%;
    }

    .container-md {
        max-width: 100%;
    }

    .container-lg {
        max-width: 100%;
    }

    .container-xl {
        max-width: 100%;
    }

    .row {
        display: flex;
        flex-wrap: wrap;
        margin-left: -8px;
        margin-right: -8px;
    }

    .row.no-gutters {
        margin-left: 0;
        margin-right: 0;
    }

    .row.no-gutters>.col,
    .row.no-gutters>[class*="col-"] {
        padding-left: 0;
        padding-right: 0;
    }

    a.row {
        text-decoration: none;
    }

    .col {
        flex: 1 1 0%;
        min-width: 0;
        width: 100%;
    }

    .col-auto {
        flex: 0 0 auto;
        width: auto;
    }

    .col-grow {
        flex: 1 0 auto;
    }

    .col-icon {
        align-items: center;
        display: flex;
        flex: 0 0 24px;
    }

    .col-1 {
        flex: 0 0 8.333333333333334%;
        max-width: 8.333333333333334%;
    }

    .col-2 {
        flex: 0 0 16.666666666666668%;
        max-width: 16.666666666666668%;
    }

    .col-3 {
        flex: 0 0 25%;
        max-width: 25%;
    }

    .col-4 {
        flex: 0 0 33.333333333333336%;
        max-width: 33.333333333333336%;
    }

    .col-5 {
        flex: 0 0 41.666666666666664%;
        max-width: 41.666666666666664%;
    }

    .col-6 {
        flex: 0 0 50%;
        max-width: 50%;
    }

    .col-7 {
        flex: 0 0 58.333333333333336%;
        max-width: 58.333333333333336%;
    }

    .col-8 {
        flex: 0 0 66.66666666666667%;
        max-width: 66.66666666666667%;
    }

    .col-9 {
        flex: 0 0 75%;
        max-width: 75%;
    }

    .col-10 {
        flex: 0 0 83.33333333333333%;
        max-width: 83.33333333333333%;
    }

    .col-11 {
        flex: 0 0 91.66666666666667%;
        max-width: 91.66666666666667%;
    }

    .col-12 {
        flex: 0 0 100%;
        max-width: 100%;
    }

    .mo-identicon {
        background-color: #e3e4e6;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        color: #555659;
        display: inline-block;
        font-size: 12px;
        height: 24px;
        line-height: 24px;
        overflow: hidden;
        position: relative;
        text-align: center;
        text-decoration: none;
        vertical-align: middle;
        width: 24px;
    }

    .mo-identicon img {
        height: 100%;
        width: 100%;
    }

    .mo-identicon-initials {
        background: -webkit-linear-gradient(105deg, #969799, #969799 49%, #b1b1b3 51%, #b1b1b3) #969799;
        background: -moz-linear-gradient(105deg, #969799, #969799 49%, #b1b1b3 51%, #b1b1b3) #969799;
        background: -o-linear-gradient(105deg, #969799, #969799 49%, #b1b1b3 51%, #b1b1b3) #969799;
        background: -ms-linear-gradient(105deg, #969799, #969799 49%, #b1b1b3 51%, #b1b1b3) #969799;
        background: linear-gradient(-15deg, #969799, #969799 49%, #b1b1b3 51%, #b1b1b3) #969799;
        color: #fff;
        height: 100%;
        text-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
        width: 100%;
    }

    .mo-identicon-placeholder {
        background: -webkit-linear-gradient(105deg, #969799, #969799 49%, #b1b1b3 51%, #b1b1b3) #969799;
        background: -moz-linear-gradient(105deg, #969799, #969799 49%, #b1b1b3 51%, #b1b1b3) #969799;
        background: -o-linear-gradient(105deg, #969799, #969799 49%, #b1b1b3 51%, #b1b1b3) #969799;
        background: -ms-linear-gradient(105deg, #969799, #969799 49%, #b1b1b3 51%, #b1b1b3) #969799;
        background: linear-gradient(-15deg, #969799, #969799 49%, #b1b1b3 51%, #b1b1b3) #969799;
    }

    .mo-identicon-placeholder .icon {
        color: #e3e4e6;
        height: 18px;
        width: 18px;
    }

    .mo-identicon-placeholder .icon,
    .momentum-body .mo-identicon-placeholder .icon {
        vertical-align: middle;
    }

    .mo-identicon-sm {
        font-size: 10px;
        height: 16px;
        line-height: 16px;
        width: 16px;
    }

    .mo-identicon-sm .mo-identicon-placeholder .icon {
        height: 12px;
        width: 12px;
    }

    .mo-identicon-lg {
        font-size: 14px;
        height: 32px;
        line-height: 32px;
        width: 32px;
    }

    .mo-identicon-lg .mo-identicon-placeholder .icon {
        height: 24px;
        width: 24px;
    }

    .mo-identicon-xl {
        font-size: 16px;
        height: 40px;
        line-height: 40px;
        width: 40px;
    }

    .mo-identicon-xl .mo-identicon-placeholder .icon {
        height: 30px;
        width: 30px;
    }

    .mo-identicon-initials-0 {
        background: -webkit-linear-gradient(105deg, #59676c, #59676c 49%, #7c8f95 51%, #7c8f95) #59676c;
        background: -moz-linear-gradient(105deg, #59676c, #59676c 49%, #7c8f95 51%, #7c8f95) #59676c;
        background: -o-linear-gradient(105deg, #59676c, #59676c 49%, #7c8f95 51%, #7c8f95) #59676c;
        background: -ms-linear-gradient(105deg, #59676c, #59676c 49%, #7c8f95 51%, #7c8f95) #59676c;
        background: linear-gradient(-15deg, #59676c, #59676c 49%, #7c8f95 51%, #7c8f95) #59676c;
    }

    .mo-identicon-initials-1 {
        background: -webkit-linear-gradient(105deg, #6c5c7e, #6c5c7e 49%, #9580af 51%, #9580af) #6c5c7e;
        background: -moz-linear-gradient(105deg, #6c5c7e, #6c5c7e 49%, #9580af 51%, #9580af) #6c5c7e;
        background: -o-linear-gradient(105deg, #6c5c7e, #6c5c7e 49%, #9580af 51%, #9580af) #6c5c7e;
        background: -ms-linear-gradient(105deg, #6c5c7e, #6c5c7e 49%, #9580af 51%, #9580af) #6c5c7e;
        background: linear-gradient(-15deg, #6c5c7e, #6c5c7e 49%, #9580af 51%, #9580af) #6c5c7e;
    }

    .mo-identicon-initials-2 {
        background: -webkit-linear-gradient(105deg, #7e5756, #7e5756 49%, #ae7977 51%, #ae7977) #7e5756;
        background: -moz-linear-gradient(105deg, #7e5756, #7e5756 49%, #ae7977 51%, #ae7977) #7e5756;
        background: -o-linear-gradient(105deg, #7e5756, #7e5756 49%, #ae7977 51%, #ae7977) #7e5756;
        background: -ms-linear-gradient(105deg, #7e5756, #7e5756 49%, #ae7977 51%, #ae7977) #7e5756;
        background: linear-gradient(-15deg, #7e5756, #7e5756 49%, #ae7977 51%, #ae7977) #7e5756;
    }

    .mo-identicon-initials-3 {
        background: -webkit-linear-gradient(105deg, #7e7156, #7e7156 49%, #af9d77 51%, #af9d77) #7e7156;
        background: -moz-linear-gradient(105deg, #7e7156, #7e7156 49%, #af9d77 51%, #af9d77) #7e7156;
        background: -o-linear-gradient(105deg, #7e7156, #7e7156 49%, #af9d77 51%, #af9d77) #7e7156;
        background: -ms-linear-gradient(105deg, #7e7156, #7e7156 49%, #af9d77 51%, #af9d77) #7e7156;
        background: linear-gradient(-15deg, #7e7156, #7e7156 49%, #af9d77 51%, #af9d77) #7e7156;
    }

    .mo-identicon-initials-4 {
        background: -webkit-linear-gradient(105deg, #6a7e5c, #6a7e5c 49%, #93ae80 51%, #93ae80) #6a7e5c;
        background: -moz-linear-gradient(105deg, #6a7e5c, #6a7e5c 49%, #93ae80 51%, #93ae80) #6a7e5c;
        background: -o-linear-gradient(105deg, #6a7e5c, #6a7e5c 49%, #93ae80 51%, #93ae80) #6a7e5c;
        background: -ms-linear-gradient(105deg, #6a7e5c, #6a7e5c 49%, #93ae80 51%, #93ae80) #6a7e5c;
        background: linear-gradient(-15deg, #6a7e5c, #6a7e5c 49%, #93ae80 51%, #93ae80) #6a7e5c;
    }

    .mo-identicon-initials-5 {
        background: -webkit-linear-gradient(105deg, #6a6a6a, #6a6a6a 49%, #939393 51%, #939393) #6a6a6a;
        background: -moz-linear-gradient(105deg, #6a6a6a, #6a6a6a 49%, #939393 51%, #939393) #6a6a6a;
        background: -o-linear-gradient(105deg, #6a6a6a, #6a6a6a 49%, #939393 51%, #939393) #6a6a6a;
        background: -ms-linear-gradient(105deg, #6a6a6a, #6a6a6a 49%, #939393 51%, #939393) #6a6a6a;
        background: linear-gradient(-15deg, #6a6a6a, #6a6a6a 49%, #939393 51%, #939393) #6a6a6a;
    }

    .mo-identicon-initials-6 {
        background: -webkit-linear-gradient(105deg, #7e7e7f, #7e7e7f 49%, #afafb0 51%, #afafb0) #7e7e7f;
        background: -moz-linear-gradient(105deg, #7e7e7f, #7e7e7f 49%, #afafb0 51%, #afafb0) #7e7e7f;
        background: -o-linear-gradient(105deg, #7e7e7f, #7e7e7f 49%, #afafb0 51%, #afafb0) #7e7e7f;
        background: -ms-linear-gradient(105deg, #7e7e7f, #7e7e7f 49%, #afafb0 51%, #afafb0) #7e7e7f;
        background: linear-gradient(-15deg, #7e7e7f, #7e7e7f 49%, #afafb0 51%, #afafb0) #7e7e7f;
    }

    .mo-identicon-initials-7 {
        background: -webkit-linear-gradient(105deg, #91828d, #91828d 49%, #c9b4c3 51%, #c9b4c3) #91828d;
        background: -moz-linear-gradient(105deg, #91828d, #91828d 49%, #c9b4c3 51%, #c9b4c3) #91828d;
        background: -o-linear-gradient(105deg, #91828d, #91828d 49%, #c9b4c3 51%, #c9b4c3) #91828d;
        background: -ms-linear-gradient(105deg, #91828d, #91828d 49%, #c9b4c3 51%, #c9b4c3) #91828d;
        background: linear-gradient(-15deg, #91828d, #91828d 49%, #c9b4c3 51%, #c9b4c3) #91828d;
    }

    .mo-identicon-initials-8 {
        background: -webkit-linear-gradient(105deg, #92847b, #92847b 49%, #cab7aa 51%, #cab7aa) #92847b;
        background: -moz-linear-gradient(105deg, #92847b, #92847b 49%, #cab7aa 51%, #cab7aa) #92847b;
        background: -o-linear-gradient(105deg, #92847b, #92847b 49%, #cab7aa 51%, #cab7aa) #92847b;
        background: -ms-linear-gradient(105deg, #92847b, #92847b 49%, #cab7aa 51%, #cab7aa) #92847b;
        background: linear-gradient(-15deg, #92847b, #92847b 49%, #cab7aa 51%, #cab7aa) #92847b;
    }

    .mo-identicon-initials-9 {
        background: -webkit-linear-gradient(105deg, #91917b, #91917b 49%, #c9c8aa 51%, #c9c8aa) #91917b;
        background: -moz-linear-gradient(105deg, #91917b, #91917b 49%, #c9c8aa 51%, #c9c8aa) #91917b;
        background: -o-linear-gradient(105deg, #91917b, #91917b 49%, #c9c8aa 51%, #c9c8aa) #91917b;
        background: -ms-linear-gradient(105deg, #91917b, #91917b 49%, #c9c8aa 51%, #c9c8aa) #91917b;
        background: linear-gradient(-15deg, #91917b, #91917b 49%, #c9c8aa 51%, #c9c8aa) #91917b;
    }

    .mo-identicon-initials-10 {
        background: -webkit-linear-gradient(105deg, #829188, #829188 49%, #b4c9bc 51%, #b4c9bc) #829188;
        background: -moz-linear-gradient(105deg, #829188, #829188 49%, #b4c9bc 51%, #b4c9bc) #829188;
        background: -o-linear-gradient(105deg, #829188, #829188 49%, #b4c9bc 51%, #b4c9bc) #829188;
        background: -ms-linear-gradient(105deg, #829188, #829188 49%, #b4c9bc 51%, #b4c9bc) #829188;
        background: linear-gradient(-15deg, #829188, #829188 49%, #b4c9bc 51%, #b4c9bc) #829188;
    }

    .mo-identicon-initials-11 {
        background: -webkit-linear-gradient(105deg, #735c6c, #735c6c 49%, #9f8096 51%, #9f8096) #735c6c;
        background: -moz-linear-gradient(105deg, #735c6c, #735c6c 49%, #9f8096 51%, #9f8096) #735c6c;
        background: -o-linear-gradient(105deg, #735c6c, #735c6c 49%, #9f8096 51%, #9f8096) #735c6c;
        background: -ms-linear-gradient(105deg, #735c6c, #735c6c 49%, #9f8096 51%, #9f8096) #735c6c;
        background: linear-gradient(-15deg, #735c6c, #735c6c 49%, #9f8096 51%, #9f8096) #735c6c;
    }

    .mo-identicon-initials-12 {
        background: -webkit-linear-gradient(105deg, #a29692, #a29692 49%, #e0cfca 51%, #e0cfca) #a29692;
        background: -moz-linear-gradient(105deg, #a29692, #a29692 49%, #e0cfca 51%, #e0cfca) #a29692;
        background: -o-linear-gradient(105deg, #a29692, #a29692 49%, #e0cfca 51%, #e0cfca) #a29692;
        background: -ms-linear-gradient(105deg, #a29692, #a29692 49%, #e0cfca 51%, #e0cfca) #a29692;
        background: linear-gradient(-15deg, #a29692, #a29692 49%, #e0cfca 51%, #e0cfca) #a29692;
    }

    .mo-identicon-initials-13 {
        background: -webkit-linear-gradient(105deg, #a66e8c, #a66e8c 49%, #e599c2 51%, #e599c2) #a66e8c;
        background: -moz-linear-gradient(105deg, #a66e8c, #a66e8c 49%, #e599c2 51%, #e599c2) #a66e8c;
        background: -o-linear-gradient(105deg, #a66e8c, #a66e8c 49%, #e599c2 51%, #e599c2) #a66e8c;
        background: -ms-linear-gradient(105deg, #a66e8c, #a66e8c 49%, #e599c2 51%, #e599c2) #a66e8c;
        background: linear-gradient(-15deg, #a66e8c, #a66e8c 49%, #e599c2 51%, #e599c2) #a66e8c;
    }

    .mo-identicon-initials-14 {
        background: -webkit-linear-gradient(105deg, #b3745a, #b3745a 49%, #f8a17d 51%, #f8a17d) #b3745a;
        background: -moz-linear-gradient(105deg, #b3745a, #b3745a 49%, #f8a17d 51%, #f8a17d) #b3745a;
        background: -o-linear-gradient(105deg, #b3745a, #b3745a 49%, #f8a17d 51%, #f8a17d) #b3745a;
        background: -ms-linear-gradient(105deg, #b3745a, #b3745a 49%, #f8a17d 51%, #f8a17d) #b3745a;
        background: linear-gradient(-15deg, #b3745a, #b3745a 49%, #f8a17d 51%, #f8a17d) #b3745a;
    }

    .mo-identicon-initials-15 {
        background: -webkit-linear-gradient(105deg, #8a8759, #8a8759 49%, #bfbb7b 51%, #bfbb7b) #8a8759;
        background: -moz-linear-gradient(105deg, #8a8759, #8a8759 49%, #bfbb7b 51%, #bfbb7b) #8a8759;
        background: -o-linear-gradient(105deg, #8a8759, #8a8759 49%, #bfbb7b 51%, #bfbb7b) #8a8759;
        background: -ms-linear-gradient(105deg, #8a8759, #8a8759 49%, #bfbb7b 51%, #bfbb7b) #8a8759;
        background: linear-gradient(-15deg, #8a8759, #8a8759 49%, #bfbb7b 51%, #bfbb7b) #8a8759;
    }

    .mo-identicon-initials-16 {
        background: -webkit-linear-gradient(105deg, #755a49, #755a49 49%, #a27d66 51%, #a27d66) #755a49;
        background: -moz-linear-gradient(105deg, #755a49, #755a49 49%, #a27d66 51%, #a27d66) #755a49;
        background: -o-linear-gradient(105deg, #755a49, #755a49 49%, #a27d66 51%, #a27d66) #755a49;
        background: -ms-linear-gradient(105deg, #755a49, #755a49 49%, #a27d66 51%, #a27d66) #755a49;
        background: linear-gradient(-15deg, #755a49, #755a49 49%, #a27d66 51%, #a27d66) #755a49;
    }

    .mo-identicon-initials-17 {
        background: -webkit-linear-gradient(105deg, #91534d, #91534d 49%, #c8736b 51%, #c8736b) #91534d;
        background: -moz-linear-gradient(105deg, #91534d, #91534d 49%, #c8736b 51%, #c8736b) #91534d;
        background: -o-linear-gradient(105deg, #91534d, #91534d 49%, #c8736b 51%, #c8736b) #91534d;
        background: -ms-linear-gradient(105deg, #91534d, #91534d 49%, #c8736b 51%, #c8736b) #91534d;
        background: linear-gradient(-15deg, #91534d, #91534d 49%, #c8736b 51%, #c8736b) #91534d;
    }

    .mo-identicon-initials-18 {
        background: -webkit-linear-gradient(105deg, #4d8090, #4d8090 49%, #6bb1c7 51%, #6bb1c7) #4d8090;
        background: -moz-linear-gradient(105deg, #4d8090, #4d8090 49%, #6bb1c7 51%, #6bb1c7) #4d8090;
        background: -o-linear-gradient(105deg, #4d8090, #4d8090 49%, #6bb1c7 51%, #6bb1c7) #4d8090;
        background: -ms-linear-gradient(105deg, #4d8090, #4d8090 49%, #6bb1c7 51%, #6bb1c7) #4d8090;
        background: linear-gradient(-15deg, #4d8090, #4d8090 49%, #6bb1c7 51%, #6bb1c7) #4d8090;
    }

    .mo-identicon-initials-19 {
        background: -webkit-linear-gradient(105deg, #49755f, #49755f 49%, #66a283 51%, #66a283) #49755f;
        background: -moz-linear-gradient(105deg, #49755f, #49755f 49%, #66a283 51%, #66a283) #49755f;
        background: -o-linear-gradient(105deg, #49755f, #49755f 49%, #66a283 51%, #66a283) #49755f;
        background: -ms-linear-gradient(105deg, #49755f, #49755f 49%, #66a283 51%, #66a283) #49755f;
        background: linear-gradient(-15deg, #49755f, #49755f 49%, #66a283 51%, #66a283) #49755f;
    }

    .mo-identicon-initials-20 {
        background: -webkit-linear-gradient(105deg, #4a4f75, #4a4f75 49%, #676ea2 51%, #676ea2) #4a4f75;
        background: -moz-linear-gradient(105deg, #4a4f75, #4a4f75 49%, #676ea2 51%, #676ea2) #4a4f75;
        background: -o-linear-gradient(105deg, #4a4f75, #4a4f75 49%, #676ea2 51%, #676ea2) #4a4f75;
        background: -ms-linear-gradient(105deg, #4a4f75, #4a4f75 49%, #676ea2 51%, #676ea2) #4a4f75;
        background: linear-gradient(-15deg, #4a4f75, #4a4f75 49%, #676ea2 51%, #676ea2) #4a4f75;
    }

    .mo-identicon-initials-21 {
        background: -webkit-linear-gradient(105deg, #78819e, #78819e 49%, #a6b2db 51%, #a6b2db) #78819e;
        background: -moz-linear-gradient(105deg, #78819e, #78819e 49%, #a6b2db 51%, #a6b2db) #78819e;
        background: -o-linear-gradient(105deg, #78819e, #78819e 49%, #a6b2db 51%, #a6b2db) #78819e;
        background: -ms-linear-gradient(105deg, #78819e, #78819e 49%, #a6b2db 51%, #a6b2db) #78819e;
        background: linear-gradient(-15deg, #78819e, #78819e 49%, #a6b2db 51%, #a6b2db) #78819e;
    }

    .mo-identicon-initials-22 {
        background: -webkit-linear-gradient(105deg, #641c5f, #641c5f 49%, #8b2783 51%, #8b2783) #641c5f;
        background: -moz-linear-gradient(105deg, #641c5f, #641c5f 49%, #8b2783 51%, #8b2783) #641c5f;
        background: -o-linear-gradient(105deg, #641c5f, #641c5f 49%, #8b2783 51%, #8b2783) #641c5f;
        background: -ms-linear-gradient(105deg, #641c5f, #641c5f 49%, #8b2783 51%, #8b2783) #641c5f;
        background: linear-gradient(-15deg, #641c5f, #641c5f 49%, #8b2783 51%, #8b2783) #641c5f;
    }

    .mo-identicon-initials-23 {
        background: -webkit-linear-gradient(105deg, #283774, #283774 49%, #384ca0 51%, #384ca0) #283774;
        background: -moz-linear-gradient(105deg, #283774, #283774 49%, #384ca0 51%, #384ca0) #283774;
        background: -o-linear-gradient(105deg, #283774, #283774 49%, #384ca0 51%, #384ca0) #283774;
        background: -ms-linear-gradient(105deg, #283774, #283774 49%, #384ca0 51%, #384ca0) #283774;
        background: linear-gradient(-15deg, #283774, #283774 49%, #384ca0 51%, #384ca0) #283774;
    }

    .mo-identicon-initials-24 {
        background: -webkit-linear-gradient(105deg, #458a5e, #458a5e 49%, #60bf82 51%, #60bf82) #458a5e;
        background: -moz-linear-gradient(105deg, #458a5e, #458a5e 49%, #60bf82 51%, #60bf82) #458a5e;
        background: -o-linear-gradient(105deg, #458a5e, #458a5e 49%, #60bf82 51%, #60bf82) #458a5e;
        background: -ms-linear-gradient(105deg, #458a5e, #458a5e 49%, #60bf82 51%, #60bf82) #458a5e;
        background: linear-gradient(-15deg, #458a5e, #458a5e 49%, #60bf82 51%, #60bf82) #458a5e;
    }

    .mo-identicon-initials-25 {
        background: -webkit-linear-gradient(105deg, #a7481a, #a7481a 49%, #e76425 51%, #e76425) #a7481a;
        background: -moz-linear-gradient(105deg, #a7481a, #a7481a 49%, #e76425 51%, #e76425) #a7481a;
        background: -o-linear-gradient(105deg, #a7481a, #a7481a 49%, #e76425 51%, #e76425) #a7481a;
        background: -ms-linear-gradient(105deg, #a7481a, #a7481a 49%, #e76425 51%, #e76425) #a7481a;
        background: linear-gradient(-15deg, #a7481a, #a7481a 49%, #e76425 51%, #e76425) #a7481a;
    }

    .mo-identicon-initials-26 {
        background: -webkit-linear-gradient(105deg, #515151, #515151 49%, #707070 51%, #707070) #515151;
        background: -moz-linear-gradient(105deg, #515151, #515151 49%, #707070 51%, #707070) #515151;
        background: -o-linear-gradient(105deg, #515151, #515151 49%, #707070 51%, #707070) #515151;
        background: -ms-linear-gradient(105deg, #515151, #515151 49%, #707070 51%, #707070) #515151;
        background: linear-gradient(-15deg, #515151, #515151 49%, #707070 51%, #707070) #515151;
    }

    .mo-identicon-initials-27 {
        background: -webkit-linear-gradient(105deg, #a31052, #a31052 49%, #e11772 51%, #e11772) #a31052;
        background: -moz-linear-gradient(105deg, #a31052, #a31052 49%, #e11772 51%, #e11772) #a31052;
        background: -o-linear-gradient(105deg, #a31052, #a31052 49%, #e11772 51%, #e11772) #a31052;
        background: -ms-linear-gradient(105deg, #a31052, #a31052 49%, #e11772 51%, #e11772) #a31052;
        background: linear-gradient(-15deg, #a31052, #a31052 49%, #e11772 51%, #e11772) #a31052;
    }

    .mo-identicon-initials-28 {
        background: -webkit-linear-gradient(105deg, #0c4e67, #0c4e67 49%, #116c8f 51%, #116c8f) #0c4e67;
        background: -moz-linear-gradient(105deg, #0c4e67, #0c4e67 49%, #116c8f 51%, #116c8f) #0c4e67;
        background: -o-linear-gradient(105deg, #0c4e67, #0c4e67 49%, #116c8f 51%, #116c8f) #0c4e67;
        background: -ms-linear-gradient(105deg, #0c4e67, #0c4e67 49%, #116c8f 51%, #116c8f) #0c4e67;
        background: linear-gradient(-15deg, #0c4e67, #0c4e67 49%, #116c8f 51%, #116c8f) #0c4e67;
    }

    .mo-identicon-initials-29 {
        background: -webkit-linear-gradient(105deg, #312269, #312269 49%, #442f91 51%, #442f91) #312269;
        background: -moz-linear-gradient(105deg, #312269, #312269 49%, #442f91 51%, #442f91) #312269;
        background: -o-linear-gradient(105deg, #312269, #312269 49%, #442f91 51%, #442f91) #312269;
        background: -ms-linear-gradient(105deg, #312269, #312269 49%, #442f91 51%, #442f91) #312269;
        background: linear-gradient(-15deg, #312269, #312269 49%, #442f91 51%, #442f91) #312269;
    }

    .mo-identicon-initials-30 {
        background: -webkit-linear-gradient(105deg, #491b51, #491b51 49%, #652671 51%, #652671) #491b51;
        background: -moz-linear-gradient(105deg, #491b51, #491b51 49%, #652671 51%, #652671) #491b51;
        background: -o-linear-gradient(105deg, #491b51, #491b51 49%, #652671 51%, #652671) #491b51;
        background: -ms-linear-gradient(105deg, #491b51, #491b51 49%, #652671 51%, #652671) #491b51;
        background: linear-gradient(-15deg, #491b51, #491b51 49%, #652671 51%, #652671) #491b51;
    }

    .list-row {
        border-bottom: 1px solid #d7d7d9;
        border-top: 1px solid #d7d7d9;
        display: flex;
        flex-wrap: wrap;
        font-size: 16px;
        line-height: 24px;
    }

    .list-row+.list-row {
        margin-top: -1px;
    }

    .list-row>.col,
    .list-row>[class*="col-"] {
        padding-bottom: 8px;
        padding-top: 8px;
    }

    .list-row.clickable:hover {
        background: #f0f1f2;
        cursor: pointer;
    }

    .list-row.clickable:active {
        background: #e3e4e6;
    }

    .list-row.clickable.selected {
        background: #f3faff;
    }

    .list-row.clickable.selected:hover {
        background: #e1f3ff;
    }

    .list-row.clickable.selected:active {
        background: #bfe5ff;
    }

    .list-row.hover,
    .list-row>.col.hover,
    .list-row>[class*="col-"].hover {
        background: #f0f1f2;
    }

    .list-row.active,
    .list-row>.col.active,
    .list-row>[class*="col-"].active {
        background: #e3e4e6;
    }

    .list-row.selected,
    .list-row>.col.selected,
    .list-row>[class*="col-"].selected {
        background: #f3faff;
    }

    .list-row.selected.hover,
    .list-row>.col.selected.hover,
    .list-row>[class*="col-"].selected.hover {
        background: #e1f3ff;
    }

    a.list-row,
    .momentum-body a.list-row,
    .list-row>a.col,
    .list-row>a[class*="col-"] {
        text-decoration: none;
    }

    a.list-row,
    .momentum-body a.list-row,
    .list-row>a.col,
    .list-row>a[class*="col-"],
    a.list-row:hover,
    .momentum-body a.list-row:hover,
    .list-row>a.col:hover,
    .list-row>a[class*="col-"]:hover,
    a.list-row:active,
    .momentum-body a.list-row:active,
    .list-row>a.col:active,
    .list-row>a[class*="col-"]:active,
    a.list-row:visited,
    .momentum-body a.list-row:visited,
    .list-row>a.col:visited,
    .list-row>a[class*="col-"]:visited,
    .momentum-body .momentum-body a.list-row:visited,
    .momentum-body .list-row>a.col:visited,
    .momentum-body .list-row>a[class*="col-"]:visited {
        color: #555659;
    }

    a.list-row:hover,
    .momentum-body a.list-row:hover,
    .list-row>a.col:hover,
    .list-row>a[class*="col-"]:hover {
        background: #f0f1f2;
    }

    a.list-row:active,
    .momentum-body a.list-row:active,
    .list-row>a.col:active,
    .list-row>a[class*="col-"]:active {
        background: #e3e4e6;
    }

    a.list-row.selected:active,
    .momentum-body a.list-row.selected:active,
    .list-row>a.col.selected:active,
    .list-row>a[class*="col-"].selected:active {
        background: #bfe5ff;
    }

    a.list-row.selected.selected:hover,
    .momentum-body a.list-row.selected.selected:hover,
    .list-row>a.col.selected.selected:hover,
    .list-row>a[class*="col-"].selected.selected:hover {
        background: #e1f3ff;
    }

    .list-row>.col-form-label {
        padding-top: 16px;
    }

    .list-row>.col-form-label-lg {
        padding-top: 12px;
    }

    .list-row>.col-form-label-sm {
        padding-top: 13.5px;
    }

    .list-row-head {
        border-top: 0;
    }

    .col-list-row-header {
        align-self: flex-end;
        color: #969799;
        font-size: 12px;
        line-height: 18px;
    }

    .menu-row {
        display: flex;
        flex-wrap: wrap;
        font-size: 14px;
        line-height: 21px;
        padding-left: 8px;
        padding-right: 8px;
    }

    .menu-row h3,
    .menu-row h4 {
        margin-bottom: 0;
    }

    .menu-row h3,
    .menu-row .momentum-body h3,
    .menu-row .text-h3,
    .menu-row .text-h3_5 {
        font-size: 20px;
        line-height: 24px;
    }

    .menu-row .font-size-h3 {
        font-size: 20px;
    }

    .menu-row .line-height-h3 {
        line-height: 24px;
    }

    .menu-row h4,
    .menu-row .momentum-body h4,
    .menu-row .text-h4 {
        font-size: 16px;
        line-height: 24px;
    }

    .menu-row .font-size-h4 {
        font-size: 16px;
    }

    .menu-row .line-height-h4 {
        line-height: 24px;
    }

    .menu-row>.col,
    .menu-row>[class*="col-"] {
        padding-bottom: 8px;
        padding-top: 8px;
    }

    .menu-row.hover {
        background: #f0f1f2;
    }

    .menu-row.active {
        background: #e3e4e6;
    }

    .menu-row.selected {
        background: #f3faff;
    }

    .menu-row.selected.hover {
        background: #e1f3ff;
    }

    .menu-row.selected.active {
        background: #bfe5ff;
    }

    .menu-row.disabled {
        opacity: 0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
        filter: alpha(opacity=50);
    }

    a.menu-row {
        text-decoration: none;
    }

    a.menu-row:hover,
    a.menu-row:active,
    a.menu-row:visited {
        color: inherit;
    }

    a.menu-row:hover {
        background: #f0f1f2;
    }

    a.menu-row:active {
        background: #e3e4e6;
    }

    a.menu-row.selected:hover {
        background: #e1f3ff;
    }

    a.menu-row.selected:active {
        background: #bfe5ff;
    }

    .menu-divider {
        border-top: 1px solid #e3e4e6;
        margin-bottom: 4px;
        margin-top: 3px;
    }

    .message {
        color: #555659;
        background-color: #f0f1f2;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        padding-bottom: 8px;
        padding-left: 40px;
        padding-right: 32px;
        padding-top: 8px;
        position: relative;
    }

    .message>.icon {
        position: absolute;
        left: 16px;
        top: 11px;
    }

    .message>.icon path {
        fill: #969799;
    }

    .message>p,
    .momentum-body .message>p {
        margin-bottom: 0;
    }

    .message>.close::after {
        color: #969799;
        content: "✕";
        display: block;
        font-size: 12px;
        line-height: 16px;
        height: 16px;
        position: absolute;
        right: 16px;
        text-align: center;
        top: 13px;
        width: 16px;
    }

    .message>.close:hover::after {
        color: #555659;
    }

    .message>.close:active::after {
        color: #222326;
    }

    .message>.message-buttons {
        clear: left;
        float: right;
        margin-top: -4px;
        margin-right: -16px;
        padding-left: 4px;
    }

    .message>.message-link {
        display: inline;
        padding-left: 4px;
    }

    .message.message-info {
        background-color: #e1f3ff;
    }

    .message.message-info>.icon path {
        fill: #0c92f3;
    }

    .message.message-warning {
        background-color: #fec;
    }

    .message.message-warning>.icon path {
        fill: #ff9000;
    }

    .message.message-positive {
        background-color: #d4f5c4;
    }

    .message.message-positive>.icon path {
        fill: #39bf71;
    }

    .message.message-negative {
        background-color: #ffe6e6;
    }

    .message.message-negative>.icon path {
        fill: #d94141;
    }

    .message.message-gray {
        background-color: #f0f1f2;
    }

    .message.message-blue {
        background-color: #e1f3ff;
    }

    .message.message-red {
        background-color: #ffe6e6;
    }

    .message.message-green {
        background-color: #d4f5c4;
    }

    .message.message-yellow {
        background-color: #fec;
    }

    .message.message-rose {
        background-color: #ffe0f0;
    }

    .message.message-violet {
        background-color: #f5e0ff;
    }

    .message.message-turquoise {
        background-color: #d9f7fa;
    }

    .message.message-striped-red {
        background: -webkit-repeating-linear-gradient(330deg, #ffe6e6, #ffe6e6 10px, #fff 10px, #fff 20px);
        background: -moz-repeating-linear-gradient(330deg, #ffe6e6, #ffe6e6 10px, #fff 10px, #fff 20px);
        background: -o-repeating-linear-gradient(330deg, #ffe6e6, #ffe6e6 10px, #fff 10px, #fff 20px);
        background: -ms-repeating-linear-gradient(330deg, #ffe6e6, #ffe6e6 10px, #fff 10px, #fff 20px);
        background: repeating-linear-gradient(120deg, #ffe6e6, #ffe6e6 10px, #fff 10px, #fff 20px);
    }

    .message.message-striped-blue {
        background: -webkit-repeating-linear-gradient(330deg, #e1f3ff, #e1f3ff 10px, #fff 10px, #fff 20px);
        background: -moz-repeating-linear-gradient(330deg, #e1f3ff, #e1f3ff 10px, #fff 10px, #fff 20px);
        background: -o-repeating-linear-gradient(330deg, #e1f3ff, #e1f3ff 10px, #fff 10px, #fff 20px);
        background: -ms-repeating-linear-gradient(330deg, #e1f3ff, #e1f3ff 10px, #fff 10px, #fff 20px);
        background: repeating-linear-gradient(120deg, #e1f3ff, #e1f3ff 10px, #fff 10px, #fff 20px);
    }

    .message.message-striped-green {
        background: -webkit-repeating-linear-gradient(330deg, #d4f5c4, #d4f5c4 10px, #fff 10px, #fff 20px);
        background: -moz-repeating-linear-gradient(330deg, #d4f5c4, #d4f5c4 10px, #fff 10px, #fff 20px);
        background: -o-repeating-linear-gradient(330deg, #d4f5c4, #d4f5c4 10px, #fff 10px, #fff 20px);
        background: -ms-repeating-linear-gradient(330deg, #d4f5c4, #d4f5c4 10px, #fff 10px, #fff 20px);
        background: repeating-linear-gradient(120deg, #d4f5c4, #d4f5c4 10px, #fff 10px, #fff 20px);
    }

    .message.message-inverse {
        background-color: #555659;
        color: #fff;
    }

    .message.message-inverse>.icon path {
        fill: #b1b1b3;
    }

    .message.message-inverse>.close::after {
        color: #969799;
    }

    .message.message-inverse>.close:hover::after {
        color: #b1b1b3;
    }

    .message.message-inverse>.close:active::after {
        color: #707173;
    }

    .modal-backdrop {
        background-color: rgba(0, 0, 0, 0.3);
        bottom: 0;
        display: none;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        width: 100%;
    }

    .modal-backdrop.show {
        display: flex;
    }

    .modal {
        background: #fff;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        display: flex;
        flex-direction: column;
        left: 0;
        margin: 0 auto;
        max-height: calc(100% - 96px);
        max-width: 640px;
        min-width: 480px;
        position: absolute;
        right: 0;
        top: 80px;
    }

    .modal-content {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: auto;
        padding: 0 32px;
    }

    .modal-content.no-padding {
        padding: 0;
    }

    .modal-actions {
        align-items: flex-end;
        display: flex;
        flex: auto;
        justify-content: flex-end;
        padding: 24px 32px;
    }

    .modal-actions-distributed {
        align-items: flex-end;
        display: flex;
        flex: auto;
        justify-content: space-between;
        padding: 32px 32px;
    }

    .modal-navigation {
        min-height: 48px;
        padding: 24px 32px 16px 32px;
        position: relative;
    }

    .modal-navigation.no-padding {
        padding: 0;
    }

    .modal-close {
        color: #969799;
        position: absolute;
        right: 16px;
        top: 16px;
    }

    .nav-link,
    .momentum-body .nav-link {
        color: $navLinkColor;
        font-size: $navLinkFontSize;
        text-decoration: none;
    }

    .nav-link:hover,
    .momentum-body .nav-link:hover {
        color: $navLinkHoverColor;
        text-decoration: underline;
    }

    .nav-link:active,
    .momentum-body .nav-link:active {
        color: $navLinkActiveColor;
        text-decoration: underline;
    }

    .nav-link>.icon {
        margin-left: 4px;
        margin-right: 4px;
    }

    .nav-link>.icon:first-child {
        margin-left: 0;
    }

    .nav-link>.icon:last-child {
        margin-right: 0;
    }

    .progress-bar .bar,
    .progress-bar .bar-interactive {
        align-items: center;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        display: flex;
        height: 16px;
        justify-content: center;
        -webkit-transition: width 350ms ease-out;
        -moz-transition: width 350ms ease-out;
        -o-transition: width 350ms ease-out;
        -ms-transition: width 350ms ease-out;
        transition: width 350ms ease-out;
    }

    .progress-bar {
        align-items: center;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        display: flex;
    }

    .progress-bar .bar-container {
        align-content: center;
        align-items: center;
        display: flex;
        padding: 0;
        width: 100%;
        justify-content: space-between;
        position: relative;
    }

    .progress-bar .bar-interactive:hover {
        cursor: pointer;
    }

    .progress-bar .bar-progress-text {
        display: flex;
        font-size: 12px;
        line-height: 12px;
        position: absolute;
        padding: 0 0 0 4px;
    }

    .progress-bar .bar-progress-text-inverted {
        position: static;
    }

    .progress-bar .bar-title {
        margin-right: 8px;
        text-transform: capitalize;
    }

    .score {
        background-color: #555659;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        color: #fff;
        display: inline-block;
        font-size: 16px;
        height: 24px;
        line-height: 24px;
        overflow: hidden;
        text-align: center;
        vertical-align: middle;
        width: 24px;
    }

    .score .icon {
        height: 16px;
        width: 16px;
    }

    .score .mo-identicon {
        -webkit-border-radius: 0;
        border-radius: 0;
        vertical-align: unset;
    }

    .score.score-worst {
        background-color: #555659;
        color: #d7d7d9;
    }

    .score.score-bad {
        background-color: #555659;
        color: #b1b1b3;
    }

    .score.score-good {
        background-color: #555659;
        color: #61d086;
    }

    .score.score-best {
        background-color: #555659;
        color: #8ae58a;
    }

    .score.score-unknown {
        background-color: #e3e4e6;
        color: #555659;
    }

    .score.score-sm {
        font-size: 12px;
        height: 16px;
        line-height: 16px;
        width: 16px;
    }

    .score.score-sm .icon {
        height: 12px;
        width: 12px;
    }

    .score.score-lg {
        font-size: 20px;
        height: 32px;
        line-height: 32px;
        width: 32px;
    }

    .score.score-lg .icon {
        height: 20px;
        width: 20px;
    }

    .score.score-xl {
        font-size: 24px;
        height: 40px;
        line-height: 40px;
        width: 40px;
    }

    .score.score-xl .icon {
        height: 24px;
        width: 24px;
    }

    .score-group {
        display: inline-block;
    }

    .score-group .score {
        -webkit-border-radius: 0;
        border-radius: 0;
    }

    .score-group .score:first-child {
        border-bottom-left-radius: 3px;
        border-top-left-radius: 3px;
    }

    .score-group .score:last-child {
        border-bottom-right-radius: 3px;
        border-top-right-radius: 3px;
    }

    .animation-shimmer {
        -webkit-animation: shimmer 3s infinite linear;
        -moz-animation: shimmer 3s infinite linear;
        -o-animation: shimmer 3s infinite linear;
        -ms-animation: shimmer 3s infinite linear;
        animation: shimmer 3s infinite linear;
        background-image: -webkit-linear-gradient(left, #f9f9f9 0, #f0f1f2 20%, #f9f9f9 40%, #f9f9f9 100%);
        background-image: -moz-linear-gradient(left, #f9f9f9 0, #f0f1f2 20%, #f9f9f9 40%, #f9f9f9 100%);
        background-image: -o-linear-gradient(left, #f9f9f9 0, #f0f1f2 20%, #f9f9f9 40%, #f9f9f9 100%);
        background-image: -ms-linear-gradient(left, #f9f9f9 0, #f0f1f2 20%, #f9f9f9 40%, #f9f9f9 100%);
        background-image: linear-gradient(to right, #f9f9f9 0, #f0f1f2 20%, #f9f9f9 40%, #f9f9f9 100%);
        -webkit-background-size: 1000px 100%;
        -moz-background-size: 1000px 100%;
        background-size: 1000px 100%;
    }

    @-moz-keyframes shimmer {
        0% {
            background-position: -1000px 0;
        }

        100% {
            background-position: 1000px 0;
        }
    }

    @-webkit-keyframes shimmer {
        0% {
            background-position: -1000px 0;
        }

        100% {
            background-position: 1000px 0;
        }
    }

    @-o-keyframes shimmer {
        0% {
            background-position: -1000px 0;
        }

        100% {
            background-position: 1000px 0;
        }
    }

    @keyframes shimmer {
        0% {
            background-position: -1000px 0;
        }

        100% {
            background-position: 1000px 0;
        }
    }

    .sidebar-menu {
        background-color: #f9f9f9;
        height: 100%;
        overflow-y: auto;
        width: 304px;
    }

    .sidebar-menu-width {
        width: 304px;
    }

    .sidebar-menu-row {
        color: #969799;
        display: flex;
        flex-wrap: wrap;
        padding-left: 16px;
        padding-right: 16px;
    }

    .sidebar-menu-row h4,
    .sidebar-menu-row h3 {
        margin-bottom: 0;
    }

    .sidebar-menu-row>.col,
    .sidebar-menu-row>[class*="col-"] {
        padding-bottom: 8px;
        padding-top: 8px;
    }

    .sidebar-menu-row.hover {
        background: #fff;
    }

    .sidebar-menu-row.active {
        background: #e1f3ff;
    }

    .sidebar-menu-row.selected {
        color: #555659;
        background: #fff;
        border-left: 4px solid #0c92f3;
        padding-left: 12px;
    }

    .sidebar-menu-row.selected.hover {
        background: #f3faff;
    }

    .sidebar-menu-row.selected.active {
        background: #e1f3ff;
    }

    .sidebar-menu-row.disabled {
        opacity: 0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
        filter: alpha(opacity=50);
    }

    a.sidebar-menu-row {
        color: #969799;
        text-decoration: none;
    }

    a.sidebar-menu-row:hover,
    a.sidebar-menu-row:active,
    a.sidebar-menu-row:visited {
        color: inherit;
    }

    a.sidebar-menu-row:hover {
        background: #fff;
    }

    a.sidebar-menu-row.selected {
        color: #555659;
    }

    a.sidebar-menu-row.selected:hover {
        background: #f3faff;
    }

    a.sidebar-menu-row.selected:active {
        background: #e1f3ff;
    }

    .tab-links,
    .tab-links-border-bottom {
        display: flex;
    }

    .tab-link {
        border-bottom: 4px solid transparent;
        color: #969799;
        cursor: pointer;
        margin-left: 8px;
        margin-right: 8px;
        padding-bottom: 8px;
    }

    .tab-link:first-child {
        margin-left: 0;
    }

    .tab-link:last-child {
        margin-right: 0;
    }

    .tab-link,
    .momentum-body a.tab-link {
        text-decoration: none;
        color: #969799;
    }

    .tab-link:hover,
    .momentum-body a.tab-link:hover,
    .tab-link.hover,
    .momentum-body a.tab-link.hover {
        color: #707173;
        border-bottom-color: #b1b1b3;
    }

    .tab-link:active,
    .momentum-body a.tab-link:active {
        border-bottom-color: #969799;
    }

    .tab-link.selected,
    .momentum-body a.tab-link.selected {
        border-bottom-color: #0c92f3;
        color: #555659;
    }

    .tab-links-border-bottom {
        border-bottom: 1px solid #d7d7d9;
    }

    .tab-links-border-bottom .tab-link {
        margin-bottom: -1px;
        margin-left: 0;
        margin-right: 0;
        padding-left: 8px;
        padding-right: 8px;
    }

    .tabs {
        border-bottom: 1px solid #d7d7d9;
        display: flex;
    }

    .tab {
        border-color: #d7d7d9;
        border-style: solid;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        border-width: 1px;
        cursor: pointer;
        margin-bottom: -1px;
        margin-left: 8px;
        margin-right: 8px;
        padding: 8px 16px;
        text-align: center;
    }

    .tab:first-child {
        margin-left: 0;
    }

    .tab:last-child {
        margin-right: 0;
    }

    .tab,
    .momentum-body a.tab {
        background-color: #fff;
        color: #969799;
        text-decoration: none;
    }

    .tab:hover,
    .momentum-body a.tab:hover,
    .tab.hover,
    .momentum-body a.tab.hover {
        color: #707173;
    }

    .tab.selected,
    .momentum-body a.tab.selected {
        border-bottom-color: #fff;
        color: #555659;
    }

    .toast {
        -webkit-animation: toastFadeIn 0.3s ease-out;
        -moz-animation: toastFadeIn 0.3s ease-out;
        -o-animation: toastFadeIn 0.3s ease-out;
        -ms-animation: toastFadeIn 0.3s ease-out;
        animation: toastFadeIn 0.3s ease-out;
        border-left: 4px solid #969799;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        display: inline-block;
        max-width: 480px;
        padding-bottom: 8px;
        padding-left: 48px;
        padding-right: 48px;
        padding-top: 8px;
        position: relative;
    }

    .toast>.icon {
        color: #969799;
        left: 16px;
        position: absolute;
        top: 12px;
    }

    .toast>.close::after {
        color: #969799;
        content: "✕";
        display: block;
        font-size: 12px;
        height: 16px;
        line-height: 16px;
        position: absolute;
        right: 16px;
        text-align: center;
        top: 12px;
        width: 16px;
    }

    .toast>.close:hover::after {
        color: #555659;
    }

    .toast>.close:active::after {
        color: #222326;
    }

    .toast>.toast-buttons {
        margin-bottom: 8px;
        margin-top: 16px;
    }

    .toast.toast-info {
        border-left-color: #0c92f3;
    }

    .toast.toast-warning {
        border-left-color: #ffa60d;
    }

    .toast.toast-positive {
        border-left-color: #39bf71;
    }

    .toast.toast-negative {
        border-left-color: #d94141;
    }

    .toast.theme-inverse>.icon {
        color: #969799;
    }

    .toast.theme-inverse>.close::after {
        color: #969799;
    }

    .toast.theme-inverse>.close:hover::after {
        color: #b1b1b3;
    }

    .toast.theme-inverse>.close:active::after {
        color: #707173;
    }

    @-moz-keyframes toastFadeIn {
        0% {
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
            -webkit-transform: translateX(-8px);
            -moz-transform: translateX(-8px);
            -o-transform: translateX(-8px);
            -ms-transform: translateX(-8px);
            transform: translateX(-8px);
        }

        100% {
            opacity: 1;
            -ms-filter: none;
            filter: none;
            -webkit-transform: translateX(0);
            -moz-transform: translateX(0);
            -o-transform: translateX(0);
            -ms-transform: translateX(0);
            transform: translateX(0);
        }
    }

    @-webkit-keyframes toastFadeIn {
        0% {
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
            -webkit-transform: translateX(-8px);
            -moz-transform: translateX(-8px);
            -o-transform: translateX(-8px);
            -ms-transform: translateX(-8px);
            transform: translateX(-8px);
        }

        100% {
            opacity: 1;
            -ms-filter: none;
            filter: none;
            -webkit-transform: translateX(0);
            -moz-transform: translateX(0);
            -o-transform: translateX(0);
            -ms-transform: translateX(0);
            transform: translateX(0);
        }
    }

    @-o-keyframes toastFadeIn {
        0% {
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
            -webkit-transform: translateX(-8px);
            -moz-transform: translateX(-8px);
            -o-transform: translateX(-8px);
            -ms-transform: translateX(-8px);
            transform: translateX(-8px);
        }

        100% {
            opacity: 1;
            -ms-filter: none;
            filter: none;
            -webkit-transform: translateX(0);
            -moz-transform: translateX(0);
            -o-transform: translateX(0);
            -ms-transform: translateX(0);
            transform: translateX(0);
        }
    }

    @keyframes toastFadeIn {
        0% {
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
            -webkit-transform: translateX(-8px);
            -moz-transform: translateX(-8px);
            -o-transform: translateX(-8px);
            -ms-transform: translateX(-8px);
            transform: translateX(-8px);
        }

        100% {
            opacity: 1;
            -ms-filter: none;
            filter: none;
            -webkit-transform: translateX(0);
            -moz-transform: translateX(0);
            -o-transform: translateX(0);
            -ms-transform: translateX(0);
            transform: translateX(0);
        }
    }

    .toggle {
        color: rgba(85, 86, 89, 0.7);
        background-color: rgba(177, 177, 179, 0.4);
        -webkit-border-radius: 11px;
        border-radius: 11px;
        border-width: 0;
        cursor: pointer;
        display: inline-block;
        height: 22px;
        margin: 1px 8px;
        padding: 0;
        position: relative;
        -webkit-transition: background-color 0.15s ease-in;
        -moz-transition: background-color 0.15s ease-in;
        -o-transition: background-color 0.15s ease-in;
        -ms-transition: background-color 0.15s ease-in;
        transition: background-color 0.15s ease-in;
        vertical-align: top;
        width: 40px;
    }

    .toggle:hover,
    .toggle.hover {
        background-color: rgba(177, 177, 179, 0.6);
    }

    .toggle:active,
    .toggle.active {
        background-color: #b1b1b3;
    }

    .toggle:focus,
    .toggle.focus {
        outline: none;
    }

    .toggle[disabled],
    .toggle.disabled {
        background-color: rgba(177, 177, 179, 0.4);
    }

    .toggle:first-child {
        margin-left: 0;
    }

    .toggle:last-child {
        margin-right: 0;
    }

    .toggle::after {
        background-color: #fff;
        -webkit-border-radius: 8px;
        border-radius: 8px;
        content: " ";
        display: block;
        height: 16px;
        left: 3px;
        top: 3px;
        position: absolute;
        -webkit-transition: left 0.15s linear;
        -moz-transition: left 0.15s linear;
        -o-transition: left 0.15s linear;
        -ms-transition: left 0.15s linear;
        transition: left 0.15s linear;
        width: 16px;
    }

    .toggle .icon,
    .momentum-body .toggle .icon {
        position: absolute;
        height: 12px;
        width: 12px;
        left: 23px;
        top: 5px;
    }

    .toggle.selected {
        color: rgba(255, 255, 255, 0.7);
        background-color: #0c92f3;
    }

    .toggle.selected:hover,
    .toggle.selected.hover {
        background-color: #007fd9;
    }

    .toggle.selected:active,
    .toggle.selected.active {
        background-color: #0068b3;
    }

    .toggle.selected:focus,
    .toggle.selected.focus {
        outline: none;
    }

    .toggle.selected[disabled],
    .toggle.selected.disabled {
        background-color: #0c92f3;
    }

    .toggle.selected::after {
        left: 21px;
    }

    .toggle.selected .icon,
    .momentum-body .toggle.selected .icon {
        left: 5px;
    }

    .toggle.disabled {
        cursor: default;
        pointer-events: none;
        opacity: 0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
        filter: alpha(opacity=50);
    }

    .toggle.toggle-green.selected {
        color: rgba(255, 255, 255, 0.7);
        background-color: #39bf71;
    }

    .toggle.toggle-green.selected:hover,
    .toggle.toggle-green.selected.hover {
        background-color: #19a654;
    }

    .toggle.toggle-green.selected:active,
    .toggle.toggle-green.selected.active {
        background-color: #0e8c42;
    }

    .toggle.toggle-green.selected:focus,
    .toggle.toggle-green.selected.focus {
        outline: none;
    }

    .toggle.toggle-green.selected[disabled],
    .toggle.toggle-green.selected.disabled {
        background-color: #39bf71;
    }

    .toggle.toggle-yellow.selected {
        color: rgba(255, 255, 255, 0.7);
        background-color: #fb3;
    }

    .toggle.toggle-yellow.selected:hover,
    .toggle.toggle-yellow.selected.hover {
        background-color: #ffa60d;
    }

    .toggle.toggle-yellow.selected:active,
    .toggle.toggle-yellow.selected.active {
        background-color: #ff9000;
    }

    .toggle.toggle-yellow.selected:focus,
    .toggle.toggle-yellow.selected.focus {
        outline: none;
    }

    .toggle.toggle-yellow.selected[disabled],
    .toggle.toggle-yellow.selected.disabled {
        background-color: #fb3;
    }

    .toggle.toggle-red.selected {
        color: rgba(255, 255, 255, 0.7);
        background-color: #d94141;
    }

    .toggle.toggle-red.selected:hover,
    .toggle.toggle-red.selected.hover {
        background-color: #bf3939;
    }

    .toggle.toggle-red.selected:active,
    .toggle.toggle-red.selected.active {
        background-color: #a62929;
    }

    .toggle.toggle-red.selected:focus,
    .toggle.toggle-red.selected.focus {
        outline: none;
    }

    .toggle.toggle-red.selected[disabled],
    .toggle.toggle-red.selected.disabled {
        background-color: #d94141;
    }

    .toggle-lg {
        -webkit-border-radius: 14px;
        border-radius: 14px;
        height: 28px;
        width: 48px;
        margin-top: 4px;
        margin-bottom: 4px;
    }

    .toggle-lg::after {
        -webkit-border-radius: 10px;
        border-radius: 10px;
        height: 20px;
        left: 4px;
        top: 4px;
        width: 20px;
    }

    .toggle-lg .icon,
    .momentum-body .toggle-lg .icon {
        height: 16px;
        width: 16px;
        left: 26px;
        top: 6px;
    }

    .toggle-lg.selected::after {
        left: 24px;
    }

    .toggle-lg.selected .icon,
    .momentum-body .toggle-lg.selected .icon {
        left: 6px;
    }

    .toggle-sm {
        -webkit-border-radius: 8px;
        border-radius: 8px;
        height: 16px;
        width: 32px;
        margin-top: 2.5px;
        margin-bottom: 2.5px;
    }

    .toggle-sm::after {
        -webkit-border-radius: 6px;
        border-radius: 6px;
        height: 12px;
        left: 2px;
        top: 2px;
        width: 12px;
    }

    .toggle-sm .icon,
    .momentum-body .toggle-sm .icon {
        height: 9px;
        width: 9px;
        left: 19.5px;
        top: 3.5px;
    }

    .toggle-sm.selected::after {
        left: 18px;
    }

    .toggle-sm.selected .icon,
    .momentum-body .toggle-sm.selected .icon {
        left: 3.5px;
    }

    .text-h1 {
        font-size: 40px;
        font-weight: bold;
        line-height: 48px;
    }

    .text-h2 {
        font-size: 32px;
        font-weight: bold;
        line-height: 40px;
    }

    .text-h3 {
        font-size: 24px;
        font-weight: bold;
        line-height: 36px;
    }

    .text-h3_5 {
        font-size: 20px;
        font-weight: bold;
        line-height: 24px;
    }

    .text-h4 {
        font-size: 16px;
        font-weight: bold;
        line-height: 24px;
    }

    .text-h5 {
        font-size: 14px;
        font-weight: bold;
        line-height: 21px;
    }

    .text-base {
        font-size: 16px;
        font-weight: normal;
        line-height: 24px;
    }

    .text-small {
        font-size: 14px;
        font-weight: normal;
        line-height: 21px;
    }

    .text-caption {
        font-size: 12px;
        font-weight: normal;
        line-height: 18px;
    }

    .font-size-h1 {
        font-size: 40px;
    }

    .font-size-h2 {
        font-size: 32px;
    }

    .font-size-h3 {
        font-size: 24px;
    }

    .font-size-h3_5 {
        font-size: 20px;
    }

    .font-size-h4 {
        font-size: 16px;
    }

    .font-size-base {
        font-size: 16px;
    }

    .font-size-small {
        font-size: 14px;
    }

    .font-size-caption {
        font-size: 12px;
    }

    .line-height-h1 {
        line-height: 48px;
    }

    .line-height-h2 {
        line-height: 40px;
    }

    .line-height-h3 {
        line-height: 36px;
    }

    .line-height-h3_5 {
        line-height: 24px;
    }

    .line-height-h4 {
        line-height: 24px;
    }

    .line-height-base {
        line-height: 24px;
    }

    .line-height-small {
        line-height: 21px;
    }

    .line-height-caption {
        line-height: 18px;
    }

    .text-color-heading {
        color: #222326;
    }

    .text-color-body {
        color: #555659;
    }

    .text-muted {
        color: #969799;
    }

    .text-positive {
        color: #19a654;
    }

    .text-muted-positive {
        color: #61d086;
    }

    .text-negative {
        color: #d94141;
    }

    .text-muted-negative {
        color: #f99;
    }

    .upload {
        align-items: center;
        background-color: #fff;
        border: 2px #d7d7d9;
        border-style: dashed;
        color: #969799;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 8px;
        position: relative;
    }

    .upload:hover,
    .upload.hover {
        background-color: #f3faff;
    }

    .upload .upload-file {
        cursor: pointer;
        height: 100%;
        opacity: 0;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
        filter: alpha(opacity=0);
        position: absolute;
        width: 100%;
    }

    .upload>.remove::after {
        align-items: center;
        background-color: #555659;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        color: #fff;
        content: "✕";
        display: flex;
        font-size: 12px;
        height: 18px;
        justify-content: center;
        line-height: 12px;
        position: absolute;
        right: 12px;
        top: 12px;
        width: 18px;
    }

    .upload>.remove:hover::after {
        background-color: #707173;
    }

    .upload>.remove:active::after {
        background-color: #3b3d3f;
    }

    .upload-dragging {
        background-color: #f3faff;
    }

    .upload-no-border {
        border: 0;
    }

    .upload-dropping {
        background-color: #f3faff;
        border: 2px #0c92f3;
        border-style: dashed;
    }

    .upload-error {
        border: 2px #d94141;
        border-style: dashed;
    }

    .upload-preview {
        display: inline-block;
        line-height: 0;
        padding: 0;
    }

    .upload-icon {
        color: #d7d7d9;
    }

    .upload-icon.icon {
        margin-left: 0;
        margin-right: 0;
    }

    .animation-rotate-infinite {
        -webkit-animation: rotate-infinite infinite;
        -moz-animation: rotate-infinite infinite;
        -o-animation: rotate-infinite infinite;
        -ms-animation: rotate-infinite infinite;
        animation: rotate-infinite infinite;
    }

    .animation-fade-in {
        -webkit-animation: fade-in 1 ease both;
        -moz-animation: fade-in 1 ease both;
        -o-animation: fade-in 1 ease both;
        -ms-animation: fade-in 1 ease both;
        animation: fade-in 1 ease both;
    }

    .animation-fade-out {
        -webkit-animation: fade-out 1 ease both;
        -moz-animation: fade-out 1 ease both;
        -o-animation: fade-out 1 ease both;
        -ms-animation: fade-out 1 ease both;
        animation: fade-out 1 ease both;
    }

    .animation-ease {
        -webkit-animation-timing-function: ease;
        -moz-animation-timing-function: ease;
        -o-animation-timing-function: ease;
        -ms-animation-timing-function: ease;
        animation-timing-function: ease;
    }

    .animation-linear {
        -webkit-animation-timing-function: linear;
        -moz-animation-timing-function: linear;
        -o-animation-timing-function: linear;
        -ms-animation-timing-function: linear;
        animation-timing-function: linear;
    }

    .animation-duration-100ms {
        -webkit-animation-duration: 100ms;
        -moz-animation-duration: 100ms;
        -o-animation-duration: 100ms;
        -ms-animation-duration: 100ms;
        animation-duration: 100ms;
    }

    .animation-duration-200ms {
        -webkit-animation-duration: 200ms;
        -moz-animation-duration: 200ms;
        -o-animation-duration: 200ms;
        -ms-animation-duration: 200ms;
        animation-duration: 200ms;
    }

    .animation-duration-300ms {
        -webkit-animation-duration: 300ms;
        -moz-animation-duration: 300ms;
        -o-animation-duration: 300ms;
        -ms-animation-duration: 300ms;
        animation-duration: 300ms;
    }

    .animation-duration-400ms {
        -webkit-animation-duration: 400ms;
        -moz-animation-duration: 400ms;
        -o-animation-duration: 400ms;
        -ms-animation-duration: 400ms;
        animation-duration: 400ms;
    }

    .animation-duration-500ms {
        -webkit-animation-duration: 500ms;
        -moz-animation-duration: 500ms;
        -o-animation-duration: 500ms;
        -ms-animation-duration: 500ms;
        animation-duration: 500ms;
    }

    .animation-duration-1000ms {
        -webkit-animation-duration: 1000ms;
        -moz-animation-duration: 1000ms;
        -o-animation-duration: 1000ms;
        -ms-animation-duration: 1000ms;
        animation-duration: 1000ms;
    }

    .animation-duration-2000ms {
        -webkit-animation-duration: 2000ms;
        -moz-animation-duration: 2000ms;
        -o-animation-duration: 2000ms;
        -ms-animation-duration: 2000ms;
        animation-duration: 2000ms;
    }

    .animation-count-1 {
        -webkit-animation-iteration-count: 1;
        -moz-animation-iteration-count: 1;
        -o-animation-iteration-count: 1;
        -ms-animation-iteration-count: 1;
        animation-iteration-count: 1;
    }

    .animation-count-infinite {
        -webkit-animation-iteration-count: infinite;
        -moz-animation-iteration-count: infinite;
        -o-animation-iteration-count: infinite;
        -ms-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
    }

    .animation-direction-normal {
        -webkit-animation-direction: normal;
        -moz-animation-direction: normal;
        -o-animation-direction: normal;
        -ms-animation-direction: normal;
        animation-direction: normal;
    }

    .animation-direction-reverse {
        -webkit-animation-direction: reverse;
        -moz-animation-direction: reverse;
        -o-animation-direction: reverse;
        -ms-animation-direction: reverse;
        animation-direction: reverse;
    }

    @-moz-keyframes rotate-infinite {
        0% {
            -webkit-transform: rotate(0);
            -moz-transform: rotate(0);
            -o-transform: rotate(0);
            -ms-transform: rotate(0);
            transform: rotate(0);
        }

        100% {
            -webkit-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @-webkit-keyframes rotate-infinite {
        0% {
            -webkit-transform: rotate(0);
            -moz-transform: rotate(0);
            -o-transform: rotate(0);
            -ms-transform: rotate(0);
            transform: rotate(0);
        }

        100% {
            -webkit-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @-o-keyframes rotate-infinite {
        0% {
            -webkit-transform: rotate(0);
            -moz-transform: rotate(0);
            -o-transform: rotate(0);
            -ms-transform: rotate(0);
            transform: rotate(0);
        }

        100% {
            -webkit-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @keyframes rotate-infinite {
        0% {
            -webkit-transform: rotate(0);
            -moz-transform: rotate(0);
            -o-transform: rotate(0);
            -ms-transform: rotate(0);
            transform: rotate(0);
        }

        100% {
            -webkit-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @-moz-keyframes fade-in {
        0% {
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
        }

        100% {
            opacity: 1;
            -ms-filter: none;
            filter: none;
        }
    }

    @-webkit-keyframes fade-in {
        0% {
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
        }

        100% {
            opacity: 1;
            -ms-filter: none;
            filter: none;
        }
    }

    @-o-keyframes fade-in {
        0% {
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
        }

        100% {
            opacity: 1;
            -ms-filter: none;
            filter: none;
        }
    }

    @keyframes fade-in {
        0% {
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
        }

        100% {
            opacity: 1;
            -ms-filter: none;
            filter: none;
        }
    }

    @-moz-keyframes fade-out {
        0% {
            opacity: 1;
            -ms-filter: none;
            filter: none;
        }

        100% {
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
        }
    }

    @-webkit-keyframes fade-out {
        0% {
            opacity: 1;
            -ms-filter: none;
            filter: none;
        }

        100% {
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
        }
    }

    @-o-keyframes fade-out {
        0% {
            opacity: 1;
            -ms-filter: none;
            filter: none;
        }

        100% {
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
        }
    }

    @keyframes fade-out {
        0% {
            opacity: 1;
            -ms-filter: none;
            filter: none;
        }

        100% {
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
        }
    }

    .border {
        border: 1px solid #d7d7d9;
    }

    .border-top {
        border-top: 1px solid #d7d7d9;
    }

    .border-right {
        border-right: 1px solid #d7d7d9;
    }

    .border-bottom {
        border-bottom: 1px solid #d7d7d9;
    }

    .border-left {
        border-left: 1px solid #d7d7d9;
    }

    .border-width-1 {
        border-width: 4px;
    }

    .border-width-2 {
        border-width: 8px;
    }

    .border-width-3 {
        border-width: 12px;
    }

    .border-width-4 {
        border-width: 16px;
    }

    .border-width-5 {
        border-width: 20px;
    }

    .border-width-6 {
        border-width: 24px;
    }

    .border-width-7 {
        border-width: 28px;
    }

    .border-width-8 {
        border-width: 32px;
    }

    .border-width-9 {
        border-width: 36px;
    }

    .border-width-10 {
        border-width: 40px;
    }

    .border-width-11 {
        border-width: 44px;
    }

    .border-width-12 {
        border-width: 48px;
    }

    .border-width-13 {
        border-width: 52px;
    }

    .border-width-14 {
        border-width: 56px;
    }

    .border-width-15 {
        border-width: 60px;
    }

    .border-width-16 {
        border-width: 64px;
    }

    .border-width-17 {
        border-width: 68px;
    }

    .border-width-18 {
        border-width: 72px;
    }

    .border-width-19 {
        border-width: 76px;
    }

    .border-width-20 {
        border-width: 80px;
    }

    .border-width-21 {
        border-width: 84px;
    }

    .border-width-22 {
        border-width: 88px;
    }

    .border-width-23 {
        border-width: 92px;
    }

    .border-width-24 {
        border-width: 96px;
    }

    .border-width-25 {
        border-width: 100px;
    }

    .border-width-26 {
        border-width: 104px;
    }

    .border-width-27 {
        border-width: 108px;
    }

    .border-width-28 {
        border-width: 112px;
    }

    .border-width-29 {
        border-width: 116px;
    }

    .border-width-30 {
        border-width: 120px;
    }

    .border-none {
        border: 0;
    }

    .border-top-none {
        border-top: 0;
    }

    .border-right-none {
        border-right: 0;
    }

    .border-bottom-none {
        border-bottom: 0;
    }

    .border-left-none {
        border-left: 0;
    }

    .rounded {
        -webkit-border-radius: 3px;
        border-radius: 3px;
    }

    .circle {
        -webkit-border-radius: 50%;
        border-radius: 50%;
    }

    .rounded-top {
        -webkit-border-radius: 3px 3px 0 0;
        border-radius: 3px 3px 0 0;
    }

    .rounded-right {
        -webkit-border-radius: 0 3px 3px 0;
        border-radius: 0 3px 3px 0;
    }

    .rounded-bottom {
        -webkit-border-radius: 0 0 3px 3px;
        border-radius: 0 0 3px 3px;
    }

    .rounded-left {
        -webkit-border-radius: 3px 0 0 3px;
        border-radius: 3px 0 0 3px;
    }

    .not-rounded {
        -webkit-border-radius: 0;
        border-radius: 0;
    }

    .dashed {
        border-style: dashed;
    }

    .text-white {
        color: #fff;
    }

    .bg-white {
        background-color: #fff;
    }

    .border-white {
        border-color: #fff;
    }

    .text-black {
        color: #000;
    }

    .bg-black {
        background-color: #000;
    }

    .border-black {
        border-color: #000;
    }

    .text-gray {
        color: #969799;
    }

    .bg-gray {
        background-color: #969799;
    }

    .border-gray {
        border-color: #969799;
    }

    .text-blue {
        color: #0c92f3;
    }

    .bg-blue {
        background-color: #0c92f3;
    }

    .border-blue {
        border-color: #0c92f3;
    }

    .text-red {
        color: #d94141;
    }

    .bg-red {
        background-color: #d94141;
    }

    .border-red {
        border-color: #d94141;
    }

    .text-green {
        color: #39bf71;
    }

    .bg-green {
        background-color: #39bf71;
    }

    .border-green {
        border-color: #39bf71;
    }

    .text-yellow {
        color: #ffa60d;
    }

    .bg-yellow {
        background-color: #ffa60d;
    }

    .border-yellow {
        border-color: #ffa60d;
    }

    .text-rose {
        color: #dc4c7d;
    }

    .bg-rose {
        background-color: #dc4c7d;
    }

    .border-rose {
        border-color: #dc4c7d;
    }

    .text-violet {
        color: #a452cc;
    }

    .bg-violet {
        background-color: #a452cc;
    }

    .border-violet {
        border-color: #a452cc;
    }

    .text-turquoise {
        color: #1cadba;
    }

    .bg-turquoise {
        background-color: #1cadba;
    }

    .border-turquoise {
        border-color: #1cadba;
    }

    .text-gray-50 {
        color: #f9f9f9;
    }

    .bg-gray-50 {
        background-color: #f9f9f9;
    }

    .border-gray-50 {
        border-color: #f9f9f9;
    }

    .text-gray-100 {
        color: #f0f1f2;
    }

    .bg-gray-100 {
        background-color: #f0f1f2;
    }

    .border-gray-100 {
        border-color: #f0f1f2;
    }

    .text-gray-200 {
        color: #e3e4e6;
    }

    .bg-gray-200 {
        background-color: #e3e4e6;
    }

    .border-gray-200 {
        border-color: #e3e4e6;
    }

    .text-gray-300 {
        color: #d7d7d9;
    }

    .bg-gray-300 {
        background-color: #d7d7d9;
    }

    .border-gray-300 {
        border-color: #d7d7d9;
    }

    .text-gray-400 {
        color: #b1b1b3;
    }

    .bg-gray-400 {
        background-color: #b1b1b3;
    }

    .border-gray-400 {
        border-color: #b1b1b3;
    }

    .text-gray-500 {
        color: #969799;
    }

    .bg-gray-500 {
        background-color: #969799;
    }

    .border-gray-500 {
        border-color: #969799;
    }

    .text-gray-600 {
        color: #707173;
    }

    .bg-gray-600 {
        background-color: #707173;
    }

    .border-gray-600 {
        border-color: #707173;
    }

    .text-gray-700 {
        color: #555659;
    }

    .bg-gray-700 {
        background-color: #555659;
    }

    .border-gray-700 {
        border-color: #555659;
    }

    .text-gray-800 {
        color: #3b3d3f;
    }

    .bg-gray-800 {
        background-color: #3b3d3f;
    }

    .border-gray-800 {
        border-color: #3b3d3f;
    }

    .text-gray-900 {
        color: #222326;
    }

    .bg-gray-900 {
        background-color: #222326;
    }

    .border-gray-900 {
        border-color: #222326;
    }

    .text-blue-50 {
        color: #f3faff;
    }

    .bg-blue-50 {
        background-color: #f3faff;
    }

    .border-blue-50 {
        border-color: #f3faff;
    }

    .text-red-50 {
        color: #fff7f7;
    }

    .bg-red-50 {
        background-color: #fff7f7;
    }

    .border-red-50 {
        border-color: #fff7f7;
    }

    .text-green-50 {
        color: #e1fae5;
    }

    .bg-green-50 {
        background-color: #e1fae5;
    }

    .border-green-50 {
        border-color: #e1fae5;
    }

    .text-yellow-50 {
        color: #fff6e5;
    }

    .bg-yellow-50 {
        background-color: #fff6e5;
    }

    .border-yellow-50 {
        border-color: #fff6e5;
    }

    .text-blue-100 {
        color: #e1f3ff;
    }

    .bg-blue-100 {
        background-color: #e1f3ff;
    }

    .border-blue-100 {
        border-color: #e1f3ff;
    }

    .text-red-100 {
        color: #ffe6e6;
    }

    .bg-red-100 {
        background-color: #ffe6e6;
    }

    .border-red-100 {
        border-color: #ffe6e6;
    }

    .text-green-100 {
        color: #d4f5c4;
    }

    .bg-green-100 {
        background-color: #d4f5c4;
    }

    .border-green-100 {
        border-color: #d4f5c4;
    }

    .text-yellow-100 {
        color: #fec;
    }

    .bg-yellow-100 {
        background-color: #fec;
    }

    .border-yellow-100 {
        border-color: #fec;
    }

    .text-blue-200 {
        color: #bfe5ff;
    }

    .bg-blue-200 {
        background-color: #bfe5ff;
    }

    .border-blue-200 {
        border-color: #bfe5ff;
    }

    .text-red-200 {
        color: #ffbfbf;
    }

    .bg-red-200 {
        background-color: #ffbfbf;
    }

    .border-red-200 {
        border-color: #ffbfbf;
    }

    .text-green-200 {
        color: #b4f0a8;
    }

    .bg-green-200 {
        background-color: #b4f0a8;
    }

    .border-green-200 {
        border-color: #b4f0a8;
    }

    .text-yellow-200 {
        color: #ffe5b2;
    }

    .bg-yellow-200 {
        background-color: #ffe5b2;
    }

    .border-yellow-200 {
        border-color: #ffe5b2;
    }

    .text-blue-300 {
        color: #a6daff;
    }

    .bg-blue-300 {
        background-color: #a6daff;
    }

    .border-blue-300 {
        border-color: #a6daff;
    }

    .text-red-300 {
        color: #f99;
    }

    .bg-red-300 {
        background-color: #f99;
    }

    .border-red-300 {
        border-color: #f99;
    }

    .text-green-300 {
        color: #8ae58a;
    }

    .bg-green-300 {
        background-color: #8ae58a;
    }

    .border-green-300 {
        border-color: #8ae58a;
    }

    .text-yellow-300 {
        color: #ffdf88;
    }

    .bg-yellow-300 {
        background-color: #ffdf88;
    }

    .border-yellow-300 {
        border-color: #ffdf88;
    }

    .text-blue-400 {
        color: #4cb5ff;
    }

    .bg-blue-400 {
        background-color: #4cb5ff;
    }

    .border-blue-400 {
        border-color: #4cb5ff;
    }

    .text-red-400 {
        color: #f26161;
    }

    .bg-red-400 {
        background-color: #f26161;
    }

    .border-red-400 {
        border-color: #f26161;
    }

    .text-green-400 {
        color: #61d086;
    }

    .bg-green-400 {
        background-color: #61d086;
    }

    .border-green-400 {
        border-color: #61d086;
    }

    .text-yellow-400 {
        color: #fb3;
    }

    .bg-yellow-400 {
        background-color: #fb3;
    }

    .border-yellow-400 {
        border-color: #fb3;
    }

    .text-blue-500 {
        color: #0c92f3;
    }

    .bg-blue-500 {
        background-color: #0c92f3;
    }

    .border-blue-500 {
        border-color: #0c92f3;
    }

    .text-red-500 {
        color: #d94141;
    }

    .bg-red-500 {
        background-color: #d94141;
    }

    .border-red-500 {
        border-color: #d94141;
    }

    .text-green-500 {
        color: #39bf71;
    }

    .bg-green-500 {
        background-color: #39bf71;
    }

    .border-green-500 {
        border-color: #39bf71;
    }

    .text-yellow-500 {
        color: #ffa60d;
    }

    .bg-yellow-500 {
        background-color: #ffa60d;
    }

    .border-yellow-500 {
        border-color: #ffa60d;
    }

    .text-blue-700 {
        color: #0068b3;
    }

    .bg-blue-700 {
        background-color: #0068b3;
    }

    .border-blue-700 {
        border-color: #0068b3;
    }

    .text-red-700 {
        color: #a62929;
    }

    .bg-red-700 {
        background-color: #a62929;
    }

    .border-red-700 {
        border-color: #a62929;
    }

    .text-green-700 {
        color: #0e8c42;
    }

    .bg-green-700 {
        background-color: #0e8c42;
    }

    .border-green-700 {
        border-color: #0e8c42;
    }

    .text-yellow-700 {
        color: #e67600;
    }

    .bg-yellow-700 {
        background-color: #e67600;
    }

    .border-yellow-700 {
        border-color: #e67600;
    }

    .text-turquoise-50 {
        color: #f0fbfc;
    }

    .bg-turquoise-50 {
        background-color: #f0fbfc;
    }

    .border-turquoise-50 {
        border-color: #f0fbfc;
    }

    .text-turquoise-100 {
        color: #d9f7fa;
    }

    .bg-turquoise-100 {
        background-color: #d9f7fa;
    }

    .border-turquoise-100 {
        border-color: #d9f7fa;
    }

    .text-turquoise-200 {
        color: #b8f0f5;
    }

    .bg-turquoise-200 {
        background-color: #b8f0f5;
    }

    .border-turquoise-200 {
        border-color: #b8f0f5;
    }

    .text-turquoise-300 {
        color: #91eaf2;
    }

    .bg-turquoise-300 {
        background-color: #91eaf2;
    }

    .border-turquoise-300 {
        border-color: #91eaf2;
    }

    .text-turquoise-400 {
        color: #33c0cd;
    }

    .bg-turquoise-400 {
        background-color: #33c0cd;
    }

    .border-turquoise-400 {
        border-color: #33c0cd;
    }

    .text-turquoise-500 {
        color: #1cadba;
    }

    .bg-turquoise-500 {
        background-color: #1cadba;
    }

    .border-turquoise-500 {
        border-color: #1cadba;
    }

    .text-turquoise-600 {
        color: #0097a6;
    }

    .bg-turquoise-600 {
        background-color: #0097a6;
    }

    .border-turquoise-600 {
        border-color: #0097a6;
    }

    .text-turquoise-700 {
        color: #007580;
    }

    .bg-turquoise-700 {
        background-color: #007580;
    }

    .border-turquoise-700 {
        border-color: #007580;
    }

    .text-turquoise-800 {
        color: #005e66;
    }

    .bg-turquoise-800 {
        background-color: #005e66;
    }

    .border-turquoise-800 {
        border-color: #005e66;
    }

    .text-turquoise-900 {
        color: #00464d;
    }

    .bg-turquoise-900 {
        background-color: #00464d;
    }

    .border-turquoise-900 {
        border-color: #00464d;
    }

    .bg-transparent {
        background: transparent;
    }

    .cursor-pointer {
        cursor: pointer;
    }

    .cursor-text {
        cursor: text;
    }

    .cursor-default {
        cursor: default;
    }

    .cursor-inherit {
        cursor: inherit;
    }

    .flex {
        display: flex;
    }

    .flex-column {
        flex-direction: column;
    }

    .flex-row {
        flex-direction: row;
    }

    .flex-row-reverse {
        flex-direction: row-reverse;
    }

    .flex-column-reverse {
        flex-direction: column-reverse;
    }

    .flex-wrap {
        flex-wrap: wrap;
    }

    .flex-nowrap {
        flex-wrap: nowrap;
    }

    .flex-grow {
        flex: 1 0 auto;
    }

    .flex-shrink {
        flex: 0 1 auto;
    }

    .flex-auto {
        flex: 1 1 auto;
        min-height: 0;
        min-width: 0;
    }

    .flex-none {
        flex: none;
    }

    .items-start {
        align-items: flex-start;
    }

    .items-end {
        align-items: flex-end;
    }

    .items-center {
        align-items: center;
    }

    .items-baseline {
        align-items: baseline;
    }

    .items-stretch {
        align-items: stretch;
    }

    .self-start {
        align-self: flex-start;
    }

    .self-end {
        align-self: flex-end;
    }

    .self-center {
        align-self: center;
    }

    .self-baseline {
        align-self: baseline;
    }

    .self-stretch {
        align-self: stretch;
    }

    .justify-start {
        justify-content: flex-start;
    }

    .justify-end {
        justify-content: flex-end;
    }

    .justify-center {
        justify-content: center;
    }

    .justify-between {
        justify-content: space-between;
    }

    .justify-around {
        justify-content: space-around;
    }

    .content-start {
        align-content: flex-start;
    }

    .content-end {
        align-content: flex-end;
    }

    .content-center {
        align-content: center;
    }

    .content-between {
        align-content: space-between;
    }

    .content-around {
        align-content: space-around;
    }

    .content-stretch {
        align-content: stretch;
    }

    .order-0 {
        order: 0;
    }

    .order-1 {
        order: 1;
    }

    .order-2 {
        order: 2;
    }

    .order-3 {
        order: 3;
    }

    .order-last {
        order: 99999;
    }

    .icon-size-base {
        height: 16px;
        width: 16px;
    }

    .icon-size-caption,
    .momentum-body .icon-size-caption {
        height: 12px;
        width: 12px;
    }

    .identicon-size,
    .momentum-body .identicon-size {
        height: 24px;
        width: 24px;
        line-height: 24px;
    }

    .display-none {
        display: none;
    }

    .display-inline,
    .inline {
        display: inline;
    }

    .display-block,
    .block {
        display: block;
    }

    .display-inline-block,
    .inline-block {
        display: inline-block;
    }

    .display-table,
    .table {
        display: table;
    }

    .display-table-cell,
    .table-cell {
        display: table-cell;
    }

    .visibility-hidden {
        visibility: hidden;
    }

    .overflow-hidden {
        overflow: hidden;
    }

    .overflow-scroll {
        overflow: scroll;
    }

    .overflow-auto {
        overflow: auto;
    }

    .float-left {
        float: left;
    }

    .float-right {
        float: right;
    }

    .fit-width {
        max-width: 100%;
    }

    .bulleted-list {
        margin-left: 16px;
        list-style-type: circle;
    }

    .bulleted-list li {
        margin-bottom: 8px;
    }

    .m0 {
        margin: 0;
    }

    .mt0 {
        margin-top: 0;
    }

    .mr0 {
        margin-right: 0;
    }

    .mb0 {
        margin-bottom: 0;
    }

    .ml0 {
        margin-left: 0;
    }

    .mx0 {
        margin-left: 0;
        margin-right: 0;
    }

    .my0 {
        margin-bottom: 0;
        margin-top: 0;
    }

    .m0_5 {
        margin: 4px;
    }

    .mt0_5 {
        margin-top: 4px;
    }

    .mr0_5 {
        margin-right: 4px;
    }

    .mb0_5 {
        margin-bottom: 4px;
    }

    .ml0_5 {
        margin-left: 4px;
    }

    .mx0_5 {
        margin-left: 4px;
        margin-right: 4px;
    }

    .my0_5 {
        margin-bottom: 4px;
        margin-top: 4px;
    }

    .m1 {
        margin: 8px;
    }

    .mt1 {
        margin-top: 8px;
    }

    .mr1 {
        margin-right: 8px;
    }

    .mb1 {
        margin-bottom: 8px;
    }

    .ml1 {
        margin-left: 8px;
    }

    .mx1 {
        margin-left: 8px;
        margin-right: 8px;
    }

    .my1 {
        margin-bottom: 8px;
        margin-top: 8px;
    }

    .m1_5 {
        margin: 12px;
    }

    .mt1_5 {
        margin-top: 12px;
    }

    .mr1_5 {
        margin-right: 12px;
    }

    .mb1_5 {
        margin-bottom: 12px;
    }

    .ml1_5 {
        margin-left: 12px;
    }

    .mx1_5 {
        margin-left: 12px;
        margin-right: 12px;
    }

    .my1_5 {
        margin-bottom: 12px;
        margin-top: 12px;
    }

    .m2 {
        margin: 16px;
    }

    .mt2 {
        margin-top: 16px;
    }

    .mr2 {
        margin-right: 16px;
    }

    .mb2 {
        margin-bottom: 16px;
    }

    .ml2 {
        margin-left: 16px;
    }

    .mx2 {
        margin-left: 16px;
        margin-right: 16px;
    }

    .my2 {
        margin-bottom: 16px;
        margin-top: 16px;
    }

    .m3 {
        margin: 24px;
    }

    .mt3 {
        margin-top: 24px;
    }

    .mr3 {
        margin-right: 24px;
    }

    .mb3 {
        margin-bottom: 24px;
    }

    .ml3 {
        margin-left: 24px;
    }

    .mx3 {
        margin-left: 24px;
        margin-right: 24px;
    }

    .my3 {
        margin-bottom: 24px;
        margin-top: 24px;
    }

    .m4 {
        margin: 32px;
    }

    .mt4 {
        margin-top: 32px;
    }

    .mr4 {
        margin-right: 32px;
    }

    .mb4 {
        margin-bottom: 32px;
    }

    .ml4 {
        margin-left: 32px;
    }

    .mx4 {
        margin-left: 32px;
        margin-right: 32px;
    }

    .my4 {
        margin-bottom: 32px;
        margin-top: 32px;
    }

    .m5 {
        margin: 40px;
    }

    .mt5 {
        margin-top: 40px;
    }

    .mr5 {
        margin-right: 40px;
    }

    .mb5 {
        margin-bottom: 40px;
    }

    .ml5 {
        margin-left: 40px;
    }

    .mx5 {
        margin-left: 40px;
        margin-right: 40px;
    }

    .my5 {
        margin-bottom: 40px;
        margin-top: 40px;
    }

    .m10 {
        margin: 80px;
    }

    .mt10 {
        margin-top: 80px;
    }

    .mr10 {
        margin-right: 80px;
    }

    .mb10 {
        margin-bottom: 80px;
    }

    .ml10 {
        margin-left: 80px;
    }

    .mx10 {
        margin-left: 80px;
        margin-right: 80px;
    }

    .my10 {
        margin-bottom: 80px;
        margin-top: 80px;
    }

    .mn1 {
        margin: -8px;
    }

    .mtn1 {
        margin-top: -8px;
    }

    .mrn1 {
        margin-right: -8px;
    }

    .mbn1 {
        margin-bottom: -8px;
    }

    .mln1 {
        margin-left: -8px;
    }

    .mxn1 {
        margin-left: -8px;
        margin-right: -8px;
    }

    .myn1 {
        margin-bottom: -8px;
        margin-top: -8px;
    }

    .mxn2 {
        margin-left: -16px;
        margin-right: -16px;
    }

    .mxn3 {
        margin-left: -24px;
        margin-right: -24px;
    }

    .mxn4 {
        margin-left: -32px;
        margin-right: -32px;
    }

    .mt-auto {
        margin-top: auto;
    }

    .mb-auto {
        margin-bottom: auto;
    }

    .my-auto {
        margin-top: auto;
        margin-bottom: auto;
    }

    .ml-auto {
        margin-left: auto;
    }

    .mr-auto {
        margin-right: auto;
    }

    .mx-auto {
        margin-left: auto;
        margin-right: auto;
    }

    .opacity-0 {
        opacity: 0;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
        filter: alpha(opacity=0);
    }

    .opacity-0_1 {
        opacity: 0.1;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)";
        filter: alpha(opacity=10);
    }

    .opacity-0_2 {
        opacity: 0.2;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=20)";
        filter: alpha(opacity=20);
    }

    .opacity-0_3 {
        opacity: 0.3;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)";
        filter: alpha(opacity=30);
    }

    .opacity-0_4 {
        opacity: 0.4;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)";
        filter: alpha(opacity=40);
    }

    .opacity-0_5 {
        opacity: 0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
        filter: alpha(opacity=50);
    }

    .opacity-0_6 {
        opacity: 0.6;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)";
        filter: alpha(opacity=60);
    }

    .opacity-0_7 {
        opacity: 0.7;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=70)";
        filter: alpha(opacity=70);
    }

    .opacity-0_8 {
        opacity: 0.8;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";
        filter: alpha(opacity=80);
    }

    .opacity-0_9 {
        opacity: 0.9;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=90)";
        filter: alpha(opacity=90);
    }

    .opacity-1 {
        opacity: 1;
        -ms-filter: none;
        filter: none;
    }

    .outline-none {
        outline: 0;
    }

    .p0 {
        padding: 0;
    }

    .pt0 {
        padding-top: 0;
    }

    .pr0 {
        padding-right: 0;
    }

    .pb0 {
        padding-bottom: 0;
    }

    .pl0 {
        padding-left: 0;
    }

    .px0 {
        padding-left: 0;
        padding-right: 0;
    }

    .py0 {
        padding-bottom: 0;
        padding-top: 0;
    }

    .p0_5 {
        padding: 4px;
    }

    .pt0_5 {
        padding-top: 4px;
    }

    .pr0_5 {
        padding-right: 4px;
    }

    .pb0_5 {
        padding-bottom: 4px;
    }

    .pl0_5 {
        padding-left: 4px;
    }

    .px0_5 {
        padding-left: 4px;
        padding-right: 4px;
    }

    .py0_5 {
        padding-bottom: 4px;
        padding-top: 4px;
    }

    .p1 {
        padding: 8px;
    }

    .pt1 {
        padding-top: 8px;
    }

    .pr1 {
        padding-right: 8px;
    }

    .pb1 {
        padding-bottom: 8px;
    }

    .pl1 {
        padding-left: 8px;
    }

    .py1 {
        padding-bottom: 8px;
        padding-top: 8px;
    }

    .px1 {
        padding-left: 8px;
        padding-right: 8px;
    }

    .p1_5 {
        padding: 12px;
    }

    .pt1_5 {
        padding-top: 12px;
    }

    .pr1_5 {
        padding-right: 12px;
    }

    .pb1_5 {
        padding-bottom: 12px;
    }

    .pl1_5 {
        padding-left: 12px;
    }

    .px1_5 {
        padding-left: 12px;
        padding-right: 12px;
    }

    .py1_5 {
        padding-bottom: 12px;
        padding-top: 12px;
    }

    .p2 {
        padding: 16px;
    }

    .pt2 {
        padding-top: 16px;
    }

    .pr2 {
        padding-right: 16px;
    }

    .pb2 {
        padding-bottom: 16px;
    }

    .pl2 {
        padding-left: 16px;
    }

    .py2 {
        padding-bottom: 16px;
        padding-top: 16px;
    }

    .px2 {
        padding-left: 16px;
        padding-right: 16px;
    }

    .p3 {
        padding: 24px;
    }

    .pt3 {
        padding-top: 24px;
    }

    .pr3 {
        padding-right: 24px;
    }

    .pb3 {
        padding-bottom: 24px;
    }

    .pl3 {
        padding-left: 24px;
    }

    .py3 {
        padding-bottom: 24px;
        padding-top: 24px;
    }

    .px3 {
        padding-left: 24px;
        padding-right: 24px;
    }

    .p4 {
        padding: 32px;
    }

    .pt4 {
        padding-top: 32px;
    }

    .pr4 {
        padding-right: 32px;
    }

    .pb4 {
        padding-bottom: 32px;
    }

    .pl4 {
        padding-left: 32px;
    }

    .py4 {
        padding-bottom: 32px;
        padding-top: 32px;
    }

    .px4 {
        padding-left: 32px;
        padding-right: 32px;
    }

    .p5 {
        padding: 40px;
    }

    .pt5 {
        padding-top: 40px;
    }

    .pr5 {
        padding-right: 40px;
    }

    .pb5 {
        padding-bottom: 40px;
    }

    .pl5 {
        padding-left: 40px;
    }

    .py5 {
        padding-bottom: 40px;
        padding-top: 40px;
    }

    .px5 {
        padding-left: 40px;
        padding-right: 40px;
    }

    .p10 {
        padding: 80px;
    }

    .pt10 {
        padding-top: 80px;
    }

    .pr10 {
        padding-right: 80px;
    }

    .pb10 {
        padding-bottom: 80px;
    }

    .pl10 {
        padding-left: 80px;
    }

    .py10 {
        padding-bottom: 80px;
        padding-top: 80px;
    }

    .px10 {
        padding-left: 80px;
        padding-right: 80px;
    }

    .pointer-events-none {
        pointer-events: none;
    }

    .relative {
        position: relative;
    }

    .absolute {
        position: absolute;
    }

    .top-0 {
        top: 0;
    }

    .right-0 {
        right: 0;
    }

    .bottom-0 {
        bottom: 0;
    }

    .left-0 {
        left: 0;
    }

    .height-full {
        height: 100%;
    }

    .width-full {
        width: 100%;
    }

    .max-width-full {
        max-width: 100%;
    }

    .width-auto {
        width: auto;
    }

    .min-width-1 {
        min-width: 8px;
    }

    .min-height-1 {
        min-height: 8px;
    }

    .max-width-1 {
        max-width: 8px;
    }

    .max-height-1 {
        max-height: 8px;
    }

    .min-width-2 {
        min-width: 16px;
    }

    .min-height-2 {
        min-height: 16px;
    }

    .max-width-2 {
        max-width: 16px;
    }

    .max-height-2 {
        max-height: 16px;
    }

    .min-width-3 {
        min-width: 24px;
    }

    .min-height-3 {
        min-height: 24px;
    }

    .max-width-3 {
        max-width: 24px;
    }

    .max-height-3 {
        max-height: 24px;
    }

    .min-width-4 {
        min-width: 32px;
    }

    .min-height-4 {
        min-height: 32px;
    }

    .max-width-4 {
        max-width: 32px;
    }

    .max-height-4 {
        max-height: 32px;
    }

    .min-width-5 {
        min-width: 40px;
    }

    .min-height-5 {
        min-height: 40px;
    }

    .max-width-5 {
        max-width: 40px;
    }

    .max-height-5 {
        max-height: 40px;
    }

    .min-width-6 {
        min-width: 48px;
    }

    .min-height-6 {
        min-height: 48px;
    }

    .max-width-6 {
        max-width: 48px;
    }

    .max-height-6 {
        max-height: 48px;
    }

    .min-width-7 {
        min-width: 56px;
    }

    .min-height-7 {
        min-height: 56px;
    }

    .max-width-7 {
        max-width: 56px;
    }

    .max-height-7 {
        max-height: 56px;
    }

    .min-width-8 {
        min-width: 64px;
    }

    .min-height-8 {
        min-height: 64px;
    }

    .max-width-8 {
        max-width: 64px;
    }

    .max-height-8 {
        max-height: 64px;
    }

    .min-width-9 {
        min-width: 72px;
    }

    .min-height-9 {
        min-height: 72px;
    }

    .max-width-9 {
        max-width: 72px;
    }

    .max-height-9 {
        max-height: 72px;
    }

    .min-width-10 {
        min-width: 80px;
    }

    .min-height-10 {
        min-height: 80px;
    }

    .max-width-10 {
        max-width: 80px;
    }

    .max-height-10 {
        max-height: 80px;
    }

    .min-width-11 {
        min-width: 88px;
    }

    .min-height-11 {
        min-height: 88px;
    }

    .max-width-11 {
        max-width: 88px;
    }

    .max-height-11 {
        max-height: 88px;
    }

    .min-width-12 {
        min-width: 96px;
    }

    .min-height-12 {
        min-height: 96px;
    }

    .max-width-12 {
        max-width: 96px;
    }

    .max-height-12 {
        max-height: 96px;
    }

    .min-width-13 {
        min-width: 104px;
    }

    .min-height-13 {
        min-height: 104px;
    }

    .max-width-13 {
        max-width: 104px;
    }

    .max-height-13 {
        max-height: 104px;
    }

    .min-width-14 {
        min-width: 112px;
    }

    .min-height-14 {
        min-height: 112px;
    }

    .max-width-14 {
        max-width: 112px;
    }

    .max-height-14 {
        max-height: 112px;
    }

    .min-width-15 {
        min-width: 120px;
    }

    .min-height-15 {
        min-height: 120px;
    }

    .max-width-15 {
        max-width: 120px;
    }

    .max-height-15 {
        max-height: 120px;
    }

    .min-width-16 {
        min-width: 128px;
    }

    .min-height-16 {
        min-height: 128px;
    }

    .max-width-16 {
        max-width: 128px;
    }

    .max-height-16 {
        max-height: 128px;
    }

    .min-width-17 {
        min-width: 136px;
    }

    .min-height-17 {
        min-height: 136px;
    }

    .max-width-17 {
        max-width: 136px;
    }

    .max-height-17 {
        max-height: 136px;
    }

    .min-width-18 {
        min-width: 144px;
    }

    .min-height-18 {
        min-height: 144px;
    }

    .max-width-18 {
        max-width: 144px;
    }

    .max-height-18 {
        max-height: 144px;
    }

    .min-width-19 {
        min-width: 152px;
    }

    .min-height-19 {
        min-height: 152px;
    }

    .max-width-19 {
        max-width: 152px;
    }

    .max-height-19 {
        max-height: 152px;
    }

    .min-width-20 {
        min-width: 160px;
    }

    .min-height-20 {
        min-height: 160px;
    }

    .max-width-20 {
        max-width: 160px;
    }

    .max-height-20 {
        max-height: 160px;
    }

    .min-width-21 {
        min-width: 168px;
    }

    .min-height-21 {
        min-height: 168px;
    }

    .max-width-21 {
        max-width: 168px;
    }

    .max-height-21 {
        max-height: 168px;
    }

    .min-width-22 {
        min-width: 176px;
    }

    .min-height-22 {
        min-height: 176px;
    }

    .max-width-22 {
        max-width: 176px;
    }

    .max-height-22 {
        max-height: 176px;
    }

    .min-width-23 {
        min-width: 184px;
    }

    .min-height-23 {
        min-height: 184px;
    }

    .max-width-23 {
        max-width: 184px;
    }

    .max-height-23 {
        max-height: 184px;
    }

    .min-width-24 {
        min-width: 192px;
    }

    .min-height-24 {
        min-height: 192px;
    }

    .max-width-24 {
        max-width: 192px;
    }

    .max-height-24 {
        max-height: 192px;
    }

    .min-width-25 {
        min-width: 200px;
    }

    .min-height-25 {
        min-height: 200px;
    }

    .max-width-25 {
        max-width: 200px;
    }

    .max-height-25 {
        max-height: 200px;
    }

    .min-width-26 {
        min-width: 208px;
    }

    .min-height-26 {
        min-height: 208px;
    }

    .max-width-26 {
        max-width: 208px;
    }

    .max-height-26 {
        max-height: 208px;
    }

    .min-width-27 {
        min-width: 216px;
    }

    .min-height-27 {
        min-height: 216px;
    }

    .max-width-27 {
        max-width: 216px;
    }

    .max-height-27 {
        max-height: 216px;
    }

    .min-width-28 {
        min-width: 224px;
    }

    .min-height-28 {
        min-height: 224px;
    }

    .max-width-28 {
        max-width: 224px;
    }

    .max-height-28 {
        max-height: 224px;
    }

    .min-width-29 {
        min-width: 232px;
    }

    .min-height-29 {
        min-height: 232px;
    }

    .max-width-29 {
        max-width: 232px;
    }

    .max-height-29 {
        max-height: 232px;
    }

    .min-width-30 {
        min-width: 240px;
    }

    .min-height-30 {
        min-height: 240px;
    }

    .max-width-30 {
        max-width: 240px;
    }

    .max-height-30 {
        max-height: 240px;
    }

    .min-width-40 {
        min-width: 320px;
    }

    .min-height-40 {
        min-height: 320px;
    }

    .max-width-40 {
        max-width: 320px;
    }

    .max-height-40 {
        max-height: 320px;
    }

    .min-width-50 {
        min-width: 400px;
    }

    .min-height-50 {
        min-height: 400px;
    }

    .max-width-50 {
        max-width: 400px;
    }

    .max-height-50 {
        max-height: 400px;
    }

    .min-width-60 {
        min-width: 480px;
    }

    .min-height-60 {
        min-height: 480px;
    }

    .max-width-60 {
        max-width: 480px;
    }

    .max-height-60 {
        max-height: 480px;
    }

    .min-width-70 {
        min-width: 560px;
    }

    .min-height-70 {
        min-height: 560px;
    }

    .max-width-70 {
        max-width: 560px;
    }

    .max-height-70 {
        max-height: 560px;
    }

    .min-width-80 {
        min-width: 640px;
    }

    .min-height-80 {
        min-height: 640px;
    }

    .max-width-80 {
        max-width: 640px;
    }

    .max-height-80 {
        max-height: 640px;
    }

    .min-width-90 {
        min-width: 720px;
    }

    .min-height-90 {
        min-height: 720px;
    }

    .max-width-90 {
        max-width: 720px;
    }

    .max-height-90 {
        max-height: 720px;
    }

    .min-width-100 {
        min-width: 800px;
    }

    .min-height-100 {
        min-height: 800px;
    }

    .max-width-100 {
        max-width: 800px;
    }

    .max-height-100 {
        max-height: 800px;
    }

    .min-width-110 {
        min-width: 880px;
    }

    .min-height-110 {
        min-height: 880px;
    }

    .max-width-110 {
        max-width: 880px;
    }

    .max-height-110 {
        max-height: 880px;
    }

    .min-width-120 {
        min-width: 960px;
    }

    .min-height-120 {
        min-height: 960px;
    }

    .max-width-120 {
        max-width: 960px;
    }

    .max-height-120 {
        max-height: 960px;
    }

    .min-width-36 {
        min-width: 288px;
    }

    .max-height-51 {
        max-height: 408px;
    }

    .valign-baseline {
        vertical-align: baseline;
    }

    .valign-text-top {
        vertical-align: text-top;
    }

    .valign-top {
        vertical-align: top;
    }

    .valign-middle {
        vertical-align: middle;
    }

    .valign-bottom {
        vertical-align: bottom;
    }

    .font-family-inherit {
        font-family: inherit;
    }

    .font-size-inherit {
        font-size: inherit;
    }

    .text-decoration-none {
        text-decoration: none;
    }

    .bold {
        font-weight: bold;
    }

    .regular {
        font-weight: normal;
    }

    .italic {
        font-style: italic;
    }

    .strikethrough {
        text-decoration: line-through;
    }

    .underline {
        text-decoration: underline;
    }

    .caps {
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .lowercase {
        text-transform: lowercase;
    }

    .capitalize {
        text-transform: capitalize;
    }

    .align-left {
        text-align: left;
    }

    .align-center {
        text-align: center;
    }

    .align-right {
        text-align: right;
    }

    .align-justify {
        text-align: justify;
    }

    .nowrap {
        white-space: nowrap;
    }

    .break-word {
        word-wrap: break-word;
    }

    .line-height-1 {
        line-height: 24px;
    }

    .line-height-2 {
        line-height: 48px;
    }

    .line-height-3 {
        line-height: 72px;
    }

    .line-height-4 {
        line-height: 96px;
    }

    .list-style-none {
        list-style: none;
    }

    .ellipsis {
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .list-reset {
        list-style: none;
        padding-left: 0;
    }

    .transition-property-all {
        -webkit-transition-property: all;
        -moz-transition-property: all;
        -o-transition-property: all;
        -ms-transition-property: all;
        transition-property: all;
    }

    .transition-property-opacity {
        -webkit-transition-property: opacity;
        -moz-transition-property: opacity;
        -o-transition-property: opacity;
        -ms-transition-property: opacity;
        transition-property: opacity;
    }

    .transition-duration-sec1 {
        -webkit-transition-duration: 1s;
        -moz-transition-duration: 1s;
        -o-transition-duration: 1s;
        -ms-transition-duration: 1s;
        transition-duration: 1s;
    }

    .transition-duration-sec1_5 {
        -webkit-transition-duration: 1.5s;
        -moz-transition-duration: 1.5s;
        -o-transition-duration: 1.5s;
        -ms-transition-duration: 1.5s;
        transition-duration: 1.5s;
    }

    .transition-duration-sec2 {
        -webkit-transition-duration: 2s;
        -moz-transition-duration: 2s;
        -o-transition-duration: 2s;
        -ms-transition-duration: 2s;
        transition-duration: 2s;
    }

    .transition-duration-sec2_5 {
        -webkit-transition-duration: 2.5s;
        -moz-transition-duration: 2.5s;
        -o-transition-duration: 2.5s;
        -ms-transition-duration: 2.5s;
        transition-duration: 2.5s;
    }

    .transition-duration-sec3 {
        -webkit-transition-duration: 3s;
        -moz-transition-duration: 3s;
        -o-transition-duration: 3s;
        -ms-transition-duration: 3s;
        transition-duration: 3s;
    }

    .transition-duration-sec3_5 {
        -webkit-transition-duration: 3.5s;
        -moz-transition-duration: 3.5s;
        -o-transition-duration: 3.5s;
        -ms-transition-duration: 3.5s;
        transition-duration: 3.5s;
    }

    .transition-duration-sec4 {
        -webkit-transition-duration: 4s;
        -moz-transition-duration: 4s;
        -o-transition-duration: 4s;
        -ms-transition-duration: 4s;
        transition-duration: 4s;
    }

    .transition-duration-sec4_5 {
        -webkit-transition-duration: 4.5s;
        -moz-transition-duration: 4.5s;
        -o-transition-duration: 4.5s;
        -ms-transition-duration: 4.5s;
        transition-duration: 4.5s;
    }

    .transition-duration-sec5 {
        -webkit-transition-duration: 5s;
        -moz-transition-duration: 5s;
        -o-transition-duration: 5s;
        -ms-transition-duration: 5s;
        transition-duration: 5s;
    }

    .transition-duration-sec6 {
        -webkit-transition-duration: 6s;
        -moz-transition-duration: 6s;
        -o-transition-duration: 6s;
        -ms-transition-duration: 6s;
        transition-duration: 6s;
    }

    .transition-duration-sec7 {
        -webkit-transition-duration: 7s;
        -moz-transition-duration: 7s;
        -o-transition-duration: 7s;
        -ms-transition-duration: 7s;
        transition-duration: 7s;
    }

    .transition-duration-sec8 {
        -webkit-transition-duration: 8s;
        -moz-transition-duration: 8s;
        -o-transition-duration: 8s;
        -ms-transition-duration: 8s;
        transition-duration: 8s;
    }

    .transition-duration-sec9 {
        -webkit-transition-duration: 9s;
        -moz-transition-duration: 9s;
        -o-transition-duration: 9s;
        -ms-transition-duration: 9s;
        transition-duration: 9s;
    }

    .transition-duration-sec10 {
        -webkit-transition-duration: 10s;
        -moz-transition-duration: 10s;
        -o-transition-duration: 10s;
        -ms-transition-duration: 10s;
        transition-duration: 10s;
    }

    .transition-duration-ms100 {
        -webkit-transition-duration: 100ms;
        -moz-transition-duration: 100ms;
        -o-transition-duration: 100ms;
        -ms-transition-duration: 100ms;
        transition-duration: 100ms;
    }

    .transition-duration-ms200 {
        -webkit-transition-duration: 200ms;
        -moz-transition-duration: 200ms;
        -o-transition-duration: 200ms;
        -ms-transition-duration: 200ms;
        transition-duration: 200ms;
    }

    .transition-duration-ms300 {
        -webkit-transition-duration: 300ms;
        -moz-transition-duration: 300ms;
        -o-transition-duration: 300ms;
        -ms-transition-duration: 300ms;
        transition-duration: 300ms;
    }

    .transition-duration-ms400 {
        -webkit-transition-duration: 400ms;
        -moz-transition-duration: 400ms;
        -o-transition-duration: 400ms;
        -ms-transition-duration: 400ms;
        transition-duration: 400ms;
    }

    .transition-duration-ms500 {
        -webkit-transition-duration: 500ms;
        -moz-transition-duration: 500ms;
        -o-transition-duration: 500ms;
        -ms-transition-duration: 500ms;
        transition-duration: 500ms;
    }

    .transition-duration-ms600 {
        -webkit-transition-duration: 600ms;
        -moz-transition-duration: 600ms;
        -o-transition-duration: 600ms;
        -ms-transition-duration: 600ms;
        transition-duration: 600ms;
    }

    .transition-duration-ms700 {
        -webkit-transition-duration: 700ms;
        -moz-transition-duration: 700ms;
        -o-transition-duration: 700ms;
        -ms-transition-duration: 700ms;
        transition-duration: 700ms;
    }

    .transition-duration-ms800 {
        -webkit-transition-duration: 800ms;
        -moz-transition-duration: 800ms;
        -o-transition-duration: 800ms;
        -ms-transition-duration: 800ms;
        transition-duration: 800ms;
    }

    .transition-duration-ms900 {
        -webkit-transition-duration: 900ms;
        -moz-transition-duration: 900ms;
        -o-transition-duration: 900ms;
        -ms-transition-duration: 900ms;
        transition-duration: 900ms;
    }

    .transition-tf-ease {
        -webkit-transition-timing-function: ease;
        -moz-transition-timing-function: ease;
        -o-transition-timing-function: ease;
        -ms-transition-timing-function: ease;
        transition-timing-function: ease;
    }

    .transition-tf-linear {
        -webkit-transition-timing-function: linear;
        -moz-transition-timing-function: linear;
        -o-transition-timing-function: linear;
        -ms-transition-timing-function: linear;
        transition-timing-function: linear;
    }

    .transition-tf-ease-in {
        -webkit-transition-timing-function: ease-in;
        -moz-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        -ms-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
    }

    .transition-tf-ease-out {
        -webkit-transition-timing-function: ease-out;
        -moz-transition-timing-function: ease-out;
        -o-transition-timing-function: ease-out;
        -ms-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }

    .transition-tf-ease-in-out {
        -webkit-transition-timing-function: ease-in-out;
        -moz-transition-timing-function: ease-in-out;
        -o-transition-timing-function: ease-in-out;
        -ms-transition-timing-function: ease-in-out;
        transition-timing-function: ease-in-out;
    }

    .transition-tf-step-start {
        -webkit-transition-timing-function: step-start;
        -moz-transition-timing-function: step-start;
        -o-transition-timing-function: step-start;
        -ms-transition-timing-function: step-start;
        transition-timing-function: step-start;
    }

    .transition-tf-step-end {
        -webkit-transition-timing-function: step-end;
        -moz-transition-timing-function: step-end;
        -o-transition-timing-function: step-end;
        -ms-transition-timing-function: step-end;
        transition-timing-function: step-end;
    }

    .transition-delay-sec1 {
        -webkit-transition-delay: 1s;
        -moz-transition-delay: 1s;
        -o-transition-delay: 1s;
        -ms-transition-delay: 1s;
        transition-delay: 1s;
    }

    .transition-delay-sec1_5 {
        -webkit-transition-delay: 1.5s;
        -moz-transition-delay: 1.5s;
        -o-transition-delay: 1.5s;
        -ms-transition-delay: 1.5s;
        transition-delay: 1.5s;
    }

    .transition-delay-sec2 {
        -webkit-transition-delay: 2s;
        -moz-transition-delay: 2s;
        -o-transition-delay: 2s;
        -ms-transition-delay: 2s;
        transition-delay: 2s;
    }

    .transition-delay-sec2_5 {
        -webkit-transition-delay: 2.5s;
        -moz-transition-delay: 2.5s;
        -o-transition-delay: 2.5s;
        -ms-transition-delay: 2.5s;
        transition-delay: 2.5s;
    }

    .transition-delay-sec3 {
        -webkit-transition-delay: 3s;
        -moz-transition-delay: 3s;
        -o-transition-delay: 3s;
        -ms-transition-delay: 3s;
        transition-delay: 3s;
    }

    .transition-delay-sec3_5 {
        -webkit-transition-delay: 3.5s;
        -moz-transition-delay: 3.5s;
        -o-transition-delay: 3.5s;
        -ms-transition-delay: 3.5s;
        transition-delay: 3.5s;
    }

    .transition-delay-sec4 {
        -webkit-transition-delay: 4s;
        -moz-transition-delay: 4s;
        -o-transition-delay: 4s;
        -ms-transition-delay: 4s;
        transition-delay: 4s;
    }

    .transition-delay-sec4_5 {
        -webkit-transition-delay: 4.5s;
        -moz-transition-delay: 4.5s;
        -o-transition-delay: 4.5s;
        -ms-transition-delay: 4.5s;
        transition-delay: 4.5s;
    }

    .transition-delay-sec5 {
        -webkit-transition-delay: 5s;
        -moz-transition-delay: 5s;
        -o-transition-delay: 5s;
        -ms-transition-delay: 5s;
        transition-delay: 5s;
    }

    .transition-delay-sec6 {
        -webkit-transition-delay: 6s;
        -moz-transition-delay: 6s;
        -o-transition-delay: 6s;
        -ms-transition-delay: 6s;
        transition-delay: 6s;
    }

    .transition-delay-sec7 {
        -webkit-transition-delay: 7s;
        -moz-transition-delay: 7s;
        -o-transition-delay: 7s;
        -ms-transition-delay: 7s;
        transition-delay: 7s;
    }

    .transition-delay-sec8 {
        -webkit-transition-delay: 8s;
        -moz-transition-delay: 8s;
        -o-transition-delay: 8s;
        -ms-transition-delay: 8s;
        transition-delay: 8s;
    }

    .transition-delay-sec9 {
        -webkit-transition-delay: 9s;
        -moz-transition-delay: 9s;
        -o-transition-delay: 9s;
        -ms-transition-delay: 9s;
        transition-delay: 9s;
    }

    .transition-delay-sec10 {
        -webkit-transition-delay: 10s;
        -moz-transition-delay: 10s;
        -o-transition-delay: 10s;
        -ms-transition-delay: 10s;
        transition-delay: 10s;
    }

    .transition-delay-ms100 {
        -webkit-transition-delay: 100ms;
        -moz-transition-delay: 100ms;
        -o-transition-delay: 100ms;
        -ms-transition-delay: 100ms;
        transition-delay: 100ms;
    }

    .transition-delay-ms200 {
        -webkit-transition-delay: 200ms;
        -moz-transition-delay: 200ms;
        -o-transition-delay: 200ms;
        -ms-transition-delay: 200ms;
        transition-delay: 200ms;
    }

    .transition-delay-ms300 {
        -webkit-transition-delay: 300ms;
        -moz-transition-delay: 300ms;
        -o-transition-delay: 300ms;
        -ms-transition-delay: 300ms;
        transition-delay: 300ms;
    }

    .transition-delay-ms400 {
        -webkit-transition-delay: 400ms;
        -moz-transition-delay: 400ms;
        -o-transition-delay: 400ms;
        -ms-transition-delay: 400ms;
        transition-delay: 400ms;
    }

    .transition-delay-ms500 {
        -webkit-transition-delay: 500ms;
        -moz-transition-delay: 500ms;
        -o-transition-delay: 500ms;
        -ms-transition-delay: 500ms;
        transition-delay: 500ms;
    }

    .transition-delay-ms600 {
        -webkit-transition-delay: 600ms;
        -moz-transition-delay: 600ms;
        -o-transition-delay: 600ms;
        -ms-transition-delay: 600ms;
        transition-delay: 600ms;
    }

    .transition-delay-ms700 {
        -webkit-transition-delay: 700ms;
        -moz-transition-delay: 700ms;
        -o-transition-delay: 700ms;
        -ms-transition-delay: 700ms;
        transition-delay: 700ms;
    }

    .transition-delay-ms800 {
        -webkit-transition-delay: 800ms;
        -moz-transition-delay: 800ms;
        -o-transition-delay: 800ms;
        -ms-transition-delay: 800ms;
        transition-delay: 800ms;
    }

    .transition-delay-ms900 {
        -webkit-transition-delay: 900ms;
        -moz-transition-delay: 900ms;
        -o-transition-delay: 900ms;
        -ms-transition-delay: 900ms;
        transition-delay: 900ms;
    }

    .theme-inverse h1,
    .theme-inverse h2,
    .theme-inverse h3,
    .theme-inverse h4,
    .theme-inverse h5 {
        color: #fff;
    }

    .theme-inverse a {
        color: inherit;
    }

    .theme-inverse a:hover {
        color: #a6daff;
    }

    .theme-inverse a:active {
        color: #bfe5ff;
    }

    .theme-inverse a.text-muted {
        color: #b1b1b3;
    }

    .theme-inverse hr {
        background: #555659;
    }

    .theme-inverse .mo-identicon {
        background-color: #555659;
        color: #fff;
    }

    .theme-inverse .menu-row.hover {
        background: #222326;
    }

    .theme-inverse .menu-row.active {
        color: #fff;
        background: #222326;
    }

    .theme-inverse .menu-row.disabled {
        opacity: 0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
        filter: alpha(opacity=50);
    }

    .theme-inverse a.menu-row {
        color: inherit;
    }

    .theme-inverse a.menu-row:hover {
        background: #222326;
    }

    .theme-inverse a.menu-row:active {
        color: #fff;
        background: #222326;
    }

    .theme-inverse .menu-divider {
        border-color: #555659;
    }

    .theme-inverse .text-color-heading {
        color: #fff;
    }

    .theme-inverse .text-color-body {
        color: #d7d7d9;
    }

    .theme-inverse .text-muted {
        color: #b1b1b3;
    }

    .theme-inverse .text-positive {
        color: #8ae58a;
    }

    .theme-inverse .text-muted-positive {
        color: #39bf71;
    }

    .theme-inverse .text-negative {
        color: #f99;
    }

    .theme-inverse .text-muted-negative {
        color: #f26161;
    }

    .theme-inverse .nav-link,
    .momentum-body .theme-inverse .nav-link {
        color: #b1b1b3;
    }

    .theme-inverse .nav-link:hover,
    .momentum-body .theme-inverse .nav-link:hover {
        color: #a6daff;
    }

    .theme-inverse .nav-link:active,
    .momentum-body .theme-inverse .nav-link:active {
        color: #bfe5ff;
    }

    .theme-inverse a.tab-link,
    .momentum-body .theme-inverse a.tab-link {
        color: #d7d7d9;
    }

    .theme-inverse a.tab-link:hover,
    .momentum-body .theme-inverse a.tab-link:hover {
        border-bottom-color: #969799;
        color: #fff;
    }

    .theme-inverse a.tab-link:active,
    .momentum-body .theme-inverse a.tab-link:active {
        border-bottom-color: #d7d7d9;
        color: #d7d7d9;
    }

    .theme-inverse a.tab-link.selected,
    .momentum-body .theme-inverse a.tab-link.selected {
        color: #fff;
    }

    .theme-inverse .list-row {
        border-bottom: 1px solid #555659;
        border-top: 1px solid #555659;
    }

    .theme-inverse .upload {
        background-color: #3b3d3f;
        border-color: #555659;
        color: #969799;
    }

    .theme-inverse .upload:hover,
    .theme-inverse .upload.hover {
        background-color: #707173;
    }

    .theme-inverse .border {
        border-color: #555659;
    }

    .theme-inverse .border-top {
        border-top-color: #555659;
    }

    .theme-inverse .border-right {
        border-right-color: #555659;
    }

    .theme-inverse .border-bottom {
        border-bottom-color: #555659;
    }

    .theme-inverse .border-left {
        border-left-color: #555659;
    }

    @media (max-width: 575px) {
        .display-none-xs {
            display: none;
        }

        .display-inline-xs,
        .inline-xs {
            display: inline;
        }

        .display-block-cx,
        .block-xs {
            display: block;
        }

        .display-inline-block-xs,
        .inline-block-xs {
            display: inline-block;
        }

        .display-table-xs,
        .table-xs {
            display: table;
        }

        .display-table-cell-xs,
        .table-cell-xs {
            display: table-cell;
        }

        .display-flex-xs,
        .flex-xs {
            display: flex;
        }
    }

    @media (min-width: 576px) {

        .container,
        .container-sm {
            max-width: 540px;
            width: auto;
        }

        .col-sm {
            flex: 1 1 0%;
            min-width: 0;
            width: 100%;
        }

        .col-sm-auto {
            flex: 0 0 auto;
            width: auto;
        }

        .col-sm-1 {
            flex: 0 0 8.333333333333334%;
            max-width: 8.333333333333334%;
        }

        .col-sm-2 {
            flex: 0 0 16.666666666666668%;
            max-width: 16.666666666666668%;
        }

        .col-sm-3 {
            flex: 0 0 25%;
            max-width: 25%;
        }

        .col-sm-4 {
            flex: 0 0 33.333333333333336%;
            max-width: 33.333333333333336%;
        }

        .col-sm-5 {
            flex: 0 0 41.666666666666664%;
            max-width: 41.666666666666664%;
        }

        .col-sm-6 {
            flex: 0 0 50%;
            max-width: 50%;
        }

        .col-sm-7 {
            flex: 0 0 58.333333333333336%;
            max-width: 58.333333333333336%;
        }

        .col-sm-8 {
            flex: 0 0 66.66666666666667%;
            max-width: 66.66666666666667%;
        }

        .col-sm-9 {
            flex: 0 0 75%;
            max-width: 75%;
        }

        .col-sm-10 {
            flex: 0 0 83.33333333333333%;
            max-width: 83.33333333333333%;
        }

        .col-sm-11 {
            flex: 0 0 91.66666666666667%;
            max-width: 91.66666666666667%;
        }

        .col-sm-12 {
            flex: 0 0 100%;
            max-width: 100%;
        }

        .display-none-sm {
            display: none;
        }

        .display-inline-sm {
            display: inline;
        }

        .display-block-sm {
            display: block;
        }

        .display-inline-block-sm {
            display: inline-block;
        }

        .display-table-sm {
            display: table;
        }

        .display-table-cell-sm {
            display: table-cell;
        }

        .display-flex-sm {
            display: flex;
        }
    }

    @media (min-width: 768px) {

        .container,
        .container-sm,
        .container-md {
            max-width: 720px;
            width: auto;
        }

        .col-md {
            flex: 1 1 0%;
            min-width: 0;
            width: 100%;
        }

        .col-md-auto {
            flex: 0 0 auto;
            width: auto;
        }

        .col-md-1 {
            flex: 0 0 8.333333333333334%;
            max-width: 8.333333333333334%;
        }

        .col-md-2 {
            flex: 0 0 16.666666666666668%;
            max-width: 16.666666666666668%;
        }

        .col-md-3 {
            flex: 0 0 25%;
            max-width: 25%;
        }

        .col-md-4 {
            flex: 0 0 33.333333333333336%;
            max-width: 33.333333333333336%;
        }

        .col-md-5 {
            flex: 0 0 41.666666666666664%;
            max-width: 41.666666666666664%;
        }

        .col-md-6 {
            flex: 0 0 50%;
            max-width: 50%;
        }

        .col-md-7 {
            flex: 0 0 58.333333333333336%;
            max-width: 58.333333333333336%;
        }

        .col-md-8 {
            flex: 0 0 66.66666666666667%;
            max-width: 66.66666666666667%;
        }

        .col-md-9 {
            flex: 0 0 75%;
            max-width: 75%;
        }

        .col-md-10 {
            flex: 0 0 83.33333333333333%;
            max-width: 83.33333333333333%;
        }

        .col-md-11 {
            flex: 0 0 91.66666666666667%;
            max-width: 91.66666666666667%;
        }

        .col-md-12 {
            flex: 0 0 100%;
            max-width: 100%;
        }

        .display-none-md {
            display: none;
        }

        .display-inline-md {
            display: inline;
        }

        .display-block-md {
            display: block;
        }

        .display-inline-block-md {
            display: inline-block;
        }

        .display-table-md {
            display: table;
        }

        .display-table-cell-md {
            display: table-cell;
        }

        .display-flex-md {
            display: flex;
        }
    }

    @media (min-width: 992px) {

        .container,
        .container-sm,
        .container-md,
        .container-lg {
            max-width: 960px;
            width: auto;
        }

        .col-lg {
            flex: 1 1 0%;
            min-width: 0;
            width: 100%;
        }

        .col-lg-auto {
            flex: 0 0 auto;
            width: auto;
        }

        .col-lg-1 {
            flex: 0 0 8.333333333333334%;
            max-width: 8.333333333333334%;
        }

        .col-lg-2 {
            flex: 0 0 16.666666666666668%;
            max-width: 16.666666666666668%;
        }

        .col-lg-3 {
            flex: 0 0 25%;
            max-width: 25%;
        }

        .col-lg-4 {
            flex: 0 0 33.333333333333336%;
            max-width: 33.333333333333336%;
        }

        .col-lg-5 {
            flex: 0 0 41.666666666666664%;
            max-width: 41.666666666666664%;
        }

        .col-lg-6 {
            flex: 0 0 50%;
            max-width: 50%;
        }

        .col-lg-7 {
            flex: 0 0 58.333333333333336%;
            max-width: 58.333333333333336%;
        }

        .col-lg-8 {
            flex: 0 0 66.66666666666667%;
            max-width: 66.66666666666667%;
        }

        .col-lg-9 {
            flex: 0 0 75%;
            max-width: 75%;
        }

        .col-lg-10 {
            flex: 0 0 83.33333333333333%;
            max-width: 83.33333333333333%;
        }

        .col-lg-11 {
            flex: 0 0 91.66666666666667%;
            max-width: 91.66666666666667%;
        }

        .col-lg-12 {
            flex: 0 0 100%;
            max-width: 100%;
        }

        .display-none-lg {
            display: none;
        }

        .display-inline-lg {
            display: inline;
        }

        .display-block-lg {
            display: block;
        }

        .display-inline-block-lg {
            display: inline-block;
        }

        .display-table-lg {
            display: table;
        }

        .display-table-cell-lg {
            display: table-cell;
        }

        .display-flex-lg {
            display: flex;
        }
    }

    @media (min-width: 1200px) {

        .container,
        .container-sm,
        .container-md,
        .container-lg,
        .container-xl {
            max-width: 1140px;
            width: auto;
        }

        .col-xl {
            flex: 1 1 0%;
            min-width: 0;
            width: 100%;
        }

        .col-xl-auto {
            flex: 0 0 auto;
            width: auto;
        }

        .col-xl-1 {
            flex: 0 0 8.333333333333334%;
            max-width: 8.333333333333334%;
        }

        .col-xl-2 {
            flex: 0 0 16.666666666666668%;
            max-width: 16.666666666666668%;
        }

        .col-xl-3 {
            flex: 0 0 25%;
            max-width: 25%;
        }

        .col-xl-4 {
            flex: 0 0 33.333333333333336%;
            max-width: 33.333333333333336%;
        }

        .col-xl-5 {
            flex: 0 0 41.666666666666664%;
            max-width: 41.666666666666664%;
        }

        .col-xl-6 {
            flex: 0 0 50%;
            max-width: 50%;
        }

        .col-xl-7 {
            flex: 0 0 58.333333333333336%;
            max-width: 58.333333333333336%;
        }

        .col-xl-8 {
            flex: 0 0 66.66666666666667%;
            max-width: 66.66666666666667%;
        }

        .col-xl-9 {
            flex: 0 0 75%;
            max-width: 75%;
        }

        .col-xl-10 {
            flex: 0 0 83.33333333333333%;
            max-width: 83.33333333333333%;
        }

        .col-xl-11 {
            flex: 0 0 91.66666666666667%;
            max-width: 91.66666666666667%;
        }

        .col-xl-12 {
            flex: 0 0 100%;
            max-width: 100%;
        }

        .display-none-xl {
            display: none;
        }

        .display-inline-xl {
            display: inline;
        }

        .display-block-xl {
            display: block;
        }

        .display-inline-block-xl {
            display: inline-block;
        }

        .display-table-xl {
            display: table;
        }

        .display-table-cell-xl {
            display: table-cell;
        }

        .display-flex-xl {
            display: flex;
        }
    }

    html {
        position: relative;
        min-height: 100%;
    }

    body {
        background: #f9f9f9;
        color: #515357;
        padding-top: 70px;
        padding-bottom: 250px;
    }

    a,
    a:visited {
        color: #737578;
    }

    @font-face {
        font-family: Lato;
        src: url("https://cdn.lever.co/fonts/Lato2/Lato-Bold.eot");
        src: url("https://cdn.lever.co/fonts/Lato2/Lato-Bold.eot?#iefix") format('embedded-opentype');
        src: url("https://cdn.lever.co/fonts/Lato2/Lato-Bold.woff") format('woff');
        src: url("https://cdn.lever.co/fonts/Lato2/Lato-Bold.ttf") format('truetype');
        font-style: normal;
        font-weight: bold;
        text-rendering: optimizeLegibility;
    }

    @font-face {
        font-family: Lato;
        src: url("https://cdn.lever.co/fonts/Lato2/Lato-Regular.eot");
        src: url("https://cdn.lever.co/fonts/Lato2/Lato-Regular.eot?#iefix") format('embedded-opentype');
        src: url("https://cdn.lever.co/fonts/Lato2/Lato-Regular.woff") format('woff');
        src: url("https://cdn.lever.co/fonts/Lato2/Lato-Regular.ttf") format('truetype');
        font-style: normal;
        font-weight: normal;
        text-rendering: optimizeLegibility;
    }

    body,
    .application-question input,
    .application-additional input,
    .application-question textarea,
    .application-additional textarea,
    .application-question select,
    .application-additional select,
    .eeo-light-text,
    h5.eeo-paragraph-heading,
    .list .filter-popup {
        color: #515357;
        font: normal 400 16px/1.8 Lato;
    }

    h1,
    h2,
    h3,
    h4,
    p,
    h5,
    .main-footer,
    .application .application-label,
    .eeo-survey .application-label,
    .application .application-field label,
    .eeo-survey .application-field label,
    .application .application-question input[type=text],
    .eeo-survey .application-question input[type=text],
    .application .application-additional input[type=text],
    .eeo-survey .application-additional input[type=text],
    .application .application-question input[type=email],
    .eeo-survey .application-question input[type=email],
    .application .application-additional input[type=email],
    .eeo-survey .application-additional input[type=email],
    .application .application-question input[type=tel],
    .eeo-survey .application-question input[type=tel],
    .application .application-additional input[type=tel],
    .eeo-survey .application-additional input[type=tel],
    .application .application-question textarea,
    .eeo-survey .application-question textarea,
    .application .application-additional textarea,
    .eeo-survey .application-additional textarea,
    .application .application-question select,
    .eeo-survey .application-question select,
    .application .application-additional select,
    .eeo-survey .application-additional select,
    .application .application-question .application-answer-alternative,
    .eeo-survey .application-question .application-answer-alternative,
    .application .application-additional .application-answer-alternative,
    .eeo-survey .application-additional .application-answer-alternative {
        margin: 0;
        padding: 0;
        display: block;
    }

    h1 {
        font: normal 700 48px/1.4 Lato;
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    h2,
    h5 {
        font: normal 400 36px/1.4 Lato;
        color: #515357;
        text-transform: none;
        letter-spacing: 0px;
    }

    h3 {
        font: normal 700 18px/1.4 "Lato";
        color: #515357;
    }

    h4 {
        font: normal 700 16px/1.4 Lato;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #515357;
    }

    h5 {
        font-size: 24px;
        margin-right: 115px;
        overflow: hidden;
        -webkit-transition: color 150ms;
        -moz-transition: color 150ms;
        -o-transition: color 150ms;
        -ms-transition: color 150ms;
        transition: color 150ms;
    }

    h2,
    h3,
    h4 {
        margin: 17.5px 0;
    }

    p,
    .main-footer,
    .application .application-label,
    .eeo-survey .application-label,
    .application .application-field label,
    .eeo-survey .application-field label,
    .application .application-question input[type=text],
    .eeo-survey .application-question input[type=text],
    .application .application-additional input[type=text],
    .eeo-survey .application-additional input[type=text],
    .application .application-question input[type=email],
    .eeo-survey .application-question input[type=email],
    .application .application-additional input[type=email],
    .eeo-survey .application-additional input[type=email],
    .application .application-question input[type=tel],
    .eeo-survey .application-question input[type=tel],
    .application .application-additional input[type=tel],
    .eeo-survey .application-additional input[type=tel],
    .application .application-question textarea,
    .eeo-survey .application-question textarea,
    .application .application-additional textarea,
    .eeo-survey .application-additional textarea,
    .application .application-question select,
    .eeo-survey .application-question select,
    .application .application-additional select,
    .eeo-survey .application-additional select,
    .application .application-question .application-answer-alternative,
    .eeo-survey .application-question .application-answer-alternative,
    .application .application-additional .application-answer-alternative,
    .eeo-survey .application-additional .application-answer-alternative {
        margin: 17.5px 0;
    }

    p>a,
    .postings-link {
        text-decoration: underline;
        color: #737578;
    }

    p>a:hover,
    .postings-link:hover {
        color: #579eee;
    }

    p>a:active,
    .postings-link:active,
    p>a:focus,
    .postings-link:focus {
        color: #3c6ea6;
    }

    .page-full-width {
        width: 100%;
    }

    .page-centered,
    .g-recaptcha div {
        max-width: 1080px;
        display: block;
        margin: 0 auto;
    }

    .content-wrapper {
        min-height: 100%;
    }

    .content {
        position: relative;
        width: 100%;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        min-height: 100%;
    }

    .row {
        position: absolute;
        left: 0px;
        right: 0px;
    }

    .column-wrapper {
        display: table;
        height: 100%;
        width: 100%;
    }

    .column {
        display: table-cell;
        vertical-align: middle;
        position: relative;
    }

    .third {
        width: 33.33%;
    }

    .two-thirds {
        width: 66.67%;
        padding-left: 40px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .section-wrapper {
        padding: 0px 30px;
    }

    .section {
        padding: 20px 0px;
        position: relative;
    }

    .narrow-section,
    .application .section,
    .eeo-survey .section,
    .list .section,
    .show .section {
        max-width: 760px;
        padding-left: 0px;
        padding-right: 0px;
    }

    .accent-section {
        background: #fff;
    }

    .accent-section.small-accent {
        padding: 0px 30px;
    }

    .accent-section .posting-categories {
        margin: 20px 0px;
    }

    .accent-section .posting-category {
        font-size: 14px;
        display: inline-block;
        margin-right: 10px;
    }

    .split-width-container,
    .show .posting-header {
        display: block;
    }

    .left-block,
    .right-block,
    .left-float,
    .right-float,
    .full-block {
        display: block;
        width: auto;
    }

    .left-block {
        overflow: hidden;
    }

    .right-float {
        float: right;
        margin-left: 10px;
    }

    .right-block {
        overflow: hidden;
    }

    .left-float {
        float: left;
        margin-right: 10px;
    }

    .full-block {
        width: 100%;
    }

    .template-btn,
    .template-btn-submit,
    .template-btn-utility,
    .sort-category,
    .application .application-field .upload-file-overlay,
    .eeo-survey .application-field .upload-file-overlay,
    .list .filter-button-wrapper .filter-button {
        font: normal 700 14px/1.4 Lato;
        text-transform: uppercase;
        letter-spacing: 2px;
        text-align: center;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        color: #fff;
        background: #00a1dc;
        height: auto;
        position: relative;
        display: inline-block;
        margin: 0;
        font-size: 14px;
        font-weight: normal;
        line-height: 1.33;
        padding: 10px 15px;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        cursor: pointer;
        border: 1px solid #dcdcdc;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }

    .template-btn .filename,
    .template-btn-submit .filename,
    .template-btn-utility .filename,
    .sort-category .filename,
    .application .application-field .upload-file-overlay .filename,
    .eeo-survey .application-field .upload-file-overlay .filename,
    .list .filter-button-wrapper .filter-button .filename,
    .template-btn .default-label,
    .template-btn-submit .default-label,
    .template-btn-utility .default-label,
    .sort-category .default-label,
    .application .application-field .upload-file-overlay .default-label,
    .eeo-survey .application-field .upload-file-overlay .default-label,
    .list .filter-button-wrapper .filter-button .default-label {
        line-height: 1.33;
        display: block;
        overflow: hidden;
    }

    .template-btn:visited,
    .template-btn-submit:visited,
    .template-btn-utility:visited,
    .sort-category:visited,
    .application .application-field .upload-file-overlay:visited,
    .eeo-survey .application-field .upload-file-overlay:visited,
    .list .filter-button-wrapper .filter-button:visited,
    .template-btn:focus,
    .template-btn-submit:focus,
    .template-btn-utility:focus,
    .sort-category:focus,
    .application .application-field .upload-file-overlay:focus,
    .eeo-survey .application-field .upload-file-overlay:focus,
    .list .filter-button-wrapper .filter-button:focus {
        color: #fff;
    }

    .template-btn .icon>svg,
    .template-btn-submit .icon>svg,
    .template-btn-utility .icon>svg,
    .sort-category .icon>svg,
    .application .application-field .upload-file-overlay .icon>svg,
    .eeo-survey .application-field .upload-file-overlay .icon>svg,
    .list .filter-button-wrapper .filter-button .icon>svg {
        fill: #fff;
    }

    .template-btn:hover,
    .template-btn-submit:hover,
    .template-btn-utility:hover,
    .sort-category:hover,
    .application .application-field .upload-file-overlay:hover,
    .eeo-survey .application-field .upload-file-overlay:hover,
    .list .filter-button-wrapper .filter-button:hover {
        color: #fff;
    }

    .template-btn:active,
    .template-btn-submit:active,
    .template-btn-utility:active,
    .sort-category:active,
    .application .application-field .upload-file-overlay:active,
    .eeo-survey .application-field .upload-file-overlay:active,
    .list .filter-button-wrapper .filter-button:active,
    .template-btn:focus,
    .template-btn-submit:focus,
    .template-btn-utility:focus,
    .sort-category:focus,
    .application .application-field .upload-file-overlay:focus,
    .eeo-survey .application-field .upload-file-overlay:focus,
    .list .filter-button-wrapper .filter-button:focus {
        background: #00709a;
    }

    .template-btn-submit {
        color: #fff;
        background: #00a1dc;
        border-color: #0098d1;
    }

    .template-btn-submit .icon>svg {
        fill: #fff;
    }

    .template-btn-submit:visited {
        color: #fff;
    }

    .template-btn-submit:hover {
        background: #0090c6;
    }

    .template-btn-submit:active,
    .template-btn-submit:focus {
        background: #00709a;
    }

    .template-btn-submit.cerulean {
        background-color: #0c92f3;
        border-color: #0b8ae6;
    }

    .template-btn-submit.cerulean:hover {
        background: #0a83da;
    }

    .template-btn-submit.cerulean:active,
    .template-btn-submit.cerulean:focus {
        background: #0866aa;
    }

    .template-btn-submit.teal {
        background-color: #1cadba;
        border-color: #1aa4b0;
    }

    .template-btn-submit.teal:hover {
        background: #199ba7;
    }

    .template-btn-submit.teal:active,
    .template-btn-submit.teal:focus {
        background: #137982;
    }

    .template-btn-submit.shamrock {
        background-color: #39bf71;
        border-color: #36b56b;
    }

    .template-btn-submit.shamrock:hover {
        background: #33ab65;
    }

    .template-btn-submit.shamrock:active,
    .template-btn-submit.shamrock:focus {
        background: #27854f;
    }

    .template-btn-submit.golden-poppy {
        background-color: #ffa60d;
        border-color: #f29d0c;
    }

    .template-btn-submit.golden-poppy:hover {
        background: #e5950b;
    }

    .template-btn-submit.golden-poppy:active,
    .template-btn-submit.golden-poppy:focus {
        background: #b27409;
    }

    .template-btn-submit.ruby {
        background-color: #d94141;
        border-color: #ce3d3d;
    }

    .template-btn-submit.ruby:hover {
        background: #c33a3a;
    }

    .template-btn-submit.ruby:active,
    .template-btn-submit.ruby:focus {
        background: #972d2d;
    }

    .template-btn-submit.ash {
        background-color: #969799;
        border-color: #8e8f91;
    }

    .template-btn-submit.ash:hover {
        background: #878789;
    }

    .template-btn-submit.ash:active,
    .template-btn-submit.ash:focus {
        background: #69696b;
    }

    .template-btn-submit.black {
        background-color: #000;
        border-color: #000;
    }

    .template-btn-submit.black:hover {
        background: #000;
    }

    .template-btn-submit.black:active,
    .template-btn-submit.black:focus {
        background: #000;
    }

    .template-btn-utility,
    .sort-category,
    .application .application-field .upload-file-overlay,
    .eeo-survey .application-field .upload-file-overlay,
    .list .filter-button-wrapper .filter-button {
        background: #ebecf0;
        color: #9696a2;
        border: 1px solid #dfe0e4;
    }

    .template-btn-utility>svg,
    .sort-category>svg,
    .application .application-field .upload-file-overlay>svg,
    .eeo-survey .application-field .upload-file-overlay>svg,
    .list .filter-button-wrapper .filter-button>svg {
        fill: #9696a2;
    }

    .template-btn-utility:visited,
    .sort-category:visited,
    .application .application-field .upload-file-overlay:visited,
    .eeo-survey .application-field .upload-file-overlay:visited,
    .list .filter-button-wrapper .filter-button:visited {
        color: #9696a2;
        background: #ebecf0;
    }

    .template-btn-utility:hover,
    .sort-category:hover,
    .application .application-field .upload-file-overlay:hover,
    .eeo-survey .application-field .upload-file-overlay:hover,
    .list .filter-button-wrapper .filter-button:hover {
        background: #dfe0e4;
        color: #5a5a61;
    }

    .template-btn-utility:active,
    .sort-category:active,
    .application .application-field .upload-file-overlay:active,
    .eeo-survey .application-field .upload-file-overlay:active,
    .list .filter-button-wrapper .filter-button:active,
    .template-btn-utility:focus,
    .sort-category:focus,
    .application .application-field .upload-file-overlay:focus,
    .eeo-survey .application-field .upload-file-overlay:focus,
    .list .filter-button-wrapper .filter-button:focus {
        background: #d3d4d8;
        color: #5a5a61;
    }

    .template-btn-utility.has-file,
    .sort-category.has-file,
    .application .application-field .upload-file-overlay.has-file,
    .eeo-survey .application-field .upload-file-overlay.has-file,
    .list .filter-button-wrapper .filter-button.has-file {
        background: #dadbdf;
    }

    .template-btn .icon,
    .template-btn-submit .icon,
    .template-btn-utility .icon,
    .sort-category .icon,
    .application .application-field .upload-file-overlay .icon,
    .eeo-survey .application-field .upload-file-overlay .icon,
    .list .filter-button-wrapper .filter-button .icon {
        position: absolute;
        left: 15px;
        top: calc(50% - 8px);
    }

    .posting-btn-submit {
        padding: 5px 15px;
    }

    .main-header {
        background: #fff;
        color: #515357;
    }

    .main-header.section-wrapper,
    .main-header .section {
        padding-top: 0px;
        padding-bottom: 0px;
    }

    .main-header .main-header-logo {
        margin: 17.5px 0px;
        display: inline-block;
    }

    .main-header .main-header-logo img {
        height: 35px;
    }

    .main-header .mobile-menu svg>path {
        fill: #515357;
    }

    .main-header .main-header-content {
        display: block;
        height: 100%;
        margin: 0px auto;
        color: #515357;
    }

    .main-header .main-header-content .main-header-company {
        display: inline-block;
        height: 70px;
        vertical-align: middle;
        font-family: Lato;
        color: #515357;
    }

    .main-header {
        top: 0;
        height: 70px;
    }

    .main-header .main-logo,
    .main-header .mobile-menu {
        position: absolute;
        left: 30px;
    }

    .main-header .main-logo img,
    .main-header .mobile-menu img {
        height: 100%;
        position: absolute;
    }

    .main-header .main-logo {
        top: 50%;
        margin-top: -0.175px;
        height: 0.5;
    }

    .main-header .mobile-menu {
        position: absolute;
        right: 0px;
        top: 50%;
        margin-top: -0.15px;
        height: 0.6;
        left: auto;
        right: 30px;
    }

    .main-header .mobile-menu img {
        right: 0px;
    }

    .main-header .main-header-content .main-header-company {
        line-height: 70px;
    }

    .main-header .main-header-content .main-header-company .icon,
    .main-header .main-header-content .main-header-company span {
        height: 70px;
        display: inline-block;
        float: left;
        height: 70px;
    }

    .main-header .main-header-content .main-header-company .icon {
        margin-right: 10px;
    }

    @media screen {
        .main-header {
            position: fixed;
            z-index: 100;
            top: 0;
            overflow: hidden;
        }
    }

    .header-comfortable {
        margin-top: 40px;
    }

    .header-comfortable .main-header-logo img {
        height: 77px;
    }

    .header-comfortable .main-header {
        height: 110px;
    }

    .main-footer {
        margin: 0;
        color: #7f838a;
        background: #edeef1;
    }

    .main-footer .image-link {
        display: inline-block;
        color: #7f838a;
        margin: 40px 0px;
    }

    .main-footer .image-link span,
    .main-footer .image-link img {
        display: inline-block;
        position: relative;
        height: 24px;
    }

    .main-footer .image-link span {
        margin-right: 10px;
    }

    .main-footer .image-link img {
        vertical-align: -6px;
    }

    .main-footer .image-link:hover,
    .main-footer .image-link:visited {
        color: #7f838a;
    }

    .main-footer p {
        color: #7f838a;
    }

    .main-footer a {
        color: #579eee;
        border-bottom: 1px solid #78b1f1;
        text-decoration: none;
    }

    .main-footer a:visited {
        color: #579eee;
    }

    .main-footer a:hover {
        color: #4e8ed6;
    }

    .main-footer a.image-link {
        border-bottom: none;
    }

    .main-footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 250px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .main-footer-text {
        text-align: center;
        padding: 40px 30px;
    }

    .main-footer-text p {
        display: block;
        max-width: 500px;
        margin: 0px auto;
    }

    .posting-header h2 {
        margin-top: 0px;
    }

    .posting-page .section.page-centered li {
        margin: 8px 0px 8px 17px;
        list-style-position: outside;
    }

    .posting-page .section.page-centered ul li {
        list-style-type: disc;
    }

    .medium-utility-label,
    .small-utility-label {
        color: #808080;
        font: normal 700 16px/1.4 Lato;
        letter-spacing: 1px;
        text-transform: uppercase;
    }

    .small-utility-label {
        font-size: 12px;
        line-height: 1.4;
    }

    .large-category-header {
        font: normal 700 30px/1.4 Lato;
        letter-spacing: 1px;
        margin-bottom: 25px;
        text-transform: uppercase;
    }

    .large-category-label,
    .medium-category-label,
    .small-category-label {
        color: #808080;
        font: normal 700 24px/1.4 Lato;
        letter-spacing: 1px;
        text-transform: uppercase;
    }

    .medium-category-label {
        font-size: 14px;
    }

    .small-category-label {
        font-size: 12px;
        line-height: 1.4;
    }

    .vertical-line,
    .horizontal-line {
        border-color: #e2e2e2;
    }

    .vertical-line {
        position: absolute;
        left: 0px;
        top: 30%;
        height: 40%;
        width: 1px;
        border-left-width: 1px;
        border-left-style: solid;
    }

    .horizontal-line {
        margin: 20px auto 20px auto;
        width: 80px;
        height: 1px;
        border-bottom-width: 1px;
        border-bottom-style: solid;
    }

    .confirmation-message {
        text-align: center;
    }

    .confirmation-message .template-btn-submit {
        margin-top: 16px;
    }

    .cc-window {
        opacity: 1;
        -webkit-transition: opacity 1s ease;
        transition: opacity 1s ease
    }

    .cc-window.cc-invisible {
        opacity: 0
    }

    .cc-animate.cc-revoke {
        -webkit-transition: transform 1s ease;
        -webkit-transition: -webkit-transform 1s ease;
        transition: -webkit-transform 1s ease;
        transition: transform 1s ease;
        transition: transform 1s ease, -webkit-transform 1s ease
    }

    .cc-animate.cc-revoke.cc-top {
        -webkit-transform: translateY(-2em);
        transform: translateY(-2em)
    }

    .cc-animate.cc-revoke.cc-bottom {
        -webkit-transform: translateY(2em);
        transform: translateY(2em)
    }

    .cc-animate.cc-revoke.cc-active.cc-top {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }

    .cc-animate.cc-revoke.cc-active.cc-bottom {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }

    .cc-revoke:hover {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }

    .cc-grower {
        max-height: 0;
        overflow: hidden;
        -webkit-transition: max-height 1s;
        transition: max-height 1s
    }

    .cc-revoke,
    .cc-window {
        position: fixed;
        overflow: hidden;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        font-family: Helvetica, Calibri, Arial, sans-serif;
        font-size: 16px;
        line-height: 1.5em;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
        z-index: 9999
    }

    .cc-window.cc-static {
        position: static
    }

    .cc-window.cc-floating {
        padding: 2em;
        max-width: 24em;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column
    }

    .cc-window.cc-banner {
        padding: 1em 1.8em;
        width: 100%;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row
    }

    .cc-revoke {
        padding: .5em
    }

    .cc-revoke:hover {
        text-decoration: underline
    }

    .cc-header {
        font-size: 18px;
        font-weight: 700
    }

    .cc-btn,
    .cc-close,
    .cc-link,
    .cc-revoke {
        cursor: pointer
    }

    .cc-link {
        opacity: .8;
        display: inline-block;
        padding: .2em;
        text-decoration: underline
    }

    .cc-link:hover {
        opacity: 1
    }

    .cc-link:active,
    .cc-link:visited {
        color: initial
    }

    .cc-btn {
        display: block;
        padding: .4em .8em;
        font-size: .9em;
        font-weight: 700;
        border-width: 2px;
        border-style: solid;
        text-align: center;
        white-space: nowrap
    }

    .cc-highlight .cc-btn:first-child {
        background-color: transparent;
        border-color: transparent
    }

    .cc-highlight .cc-btn:first-child:focus,
    .cc-highlight .cc-btn:first-child:hover {
        background-color: transparent;
        text-decoration: underline
    }

    .cc-close {
        display: block;
        position: absolute;
        top: .5em;
        right: .5em;
        font-size: 1.6em;
        opacity: .9;
        line-height: .75
    }

    .cc-close:focus,
    .cc-close:hover {
        opacity: 1
    }

    .cc-revoke.cc-top {
        top: 0;
        left: 3em;
        border-bottom-left-radius: .5em;
        border-bottom-right-radius: .5em
    }

    .cc-revoke.cc-bottom {
        bottom: 0;
        left: 3em;
        border-top-left-radius: .5em;
        border-top-right-radius: .5em
    }

    .cc-revoke.cc-left {
        left: 3em;
        right: unset
    }

    .cc-revoke.cc-right {
        right: 3em;
        left: unset
    }

    .cc-top {
        top: 1em
    }

    .cc-left {
        left: 1em
    }

    .cc-right {
        right: 1em
    }

    .cc-bottom {
        bottom: 1em
    }

    .cc-floating>.cc-link {
        margin-bottom: 1em
    }

    .cc-floating .cc-message {
        display: block;
        margin-bottom: 1em
    }

    .cc-window.cc-floating .cc-compliance {
        -webkit-box-flex: 1;
        -ms-flex: 1 0 auto;
        flex: 1 0 auto
    }

    .cc-window.cc-banner {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center
    }

    .cc-banner.cc-top {
        left: 0;
        right: 0;
        top: 0
    }

    .cc-banner.cc-bottom {
        left: 0;
        right: 0;
        bottom: 0
    }

    .cc-banner .cc-message {
        display: block;
        -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        max-width: 100%;
        margin-right: 1em
    }

    .cc-compliance {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-line-pack: justify;
        align-content: space-between
    }

    .cc-floating .cc-compliance>.cc-btn {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1
    }

    .cc-btn+.cc-btn {
        margin-left: .5em
    }

    @media print {

        .cc-revoke,
        .cc-window {
            display: none
        }
    }

    @media screen and (max-width:900px) {
        .cc-btn {
            white-space: normal
        }
    }

    @media screen and (max-width:414px) and (orientation:portrait),
    screen and (max-width:736px) and (orientation:landscape) {
        .cc-window.cc-top {
            top: 0
        }

        .cc-window.cc-bottom {
            bottom: 0
        }

        .cc-window.cc-banner,
        .cc-window.cc-floating,
        .cc-window.cc-left,
        .cc-window.cc-right {
            left: 0;
            right: 0
        }

        .cc-window.cc-banner {
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column
        }

        .cc-window.cc-banner .cc-compliance {
            -webkit-box-flex: 1;
            -ms-flex: 1 1 auto;
            flex: 1 1 auto
        }

        .cc-window.cc-floating {
            max-width: none
        }

        .cc-window .cc-message {
            margin-bottom: 1em
        }

        .cc-window.cc-banner {
            -webkit-box-align: unset;
            -ms-flex-align: unset;
            align-items: unset
        }

        .cc-window.cc-banner .cc-message {
            margin-right: 0
        }
    }

    .cc-floating.cc-theme-classic {
        padding: 1.2em;
        border-radius: 5px
    }

    .cc-floating.cc-type-info.cc-theme-classic .cc-compliance {
        text-align: center;
        display: inline;
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none
    }

    .cc-theme-classic .cc-btn {
        border-radius: 5px
    }

    .cc-theme-classic .cc-btn:last-child {
        min-width: 140px
    }

    .cc-floating.cc-type-info.cc-theme-classic .cc-btn {
        display: inline-block
    }

    .cc-theme-edgeless.cc-window {
        padding: 0
    }

    .cc-floating.cc-theme-edgeless .cc-message {
        margin: 2em;
        margin-bottom: 1.5em
    }

    .cc-banner.cc-theme-edgeless .cc-btn {
        margin: 0;
        padding: .8em 1.8em;
        height: 100%
    }

    .cc-banner.cc-theme-edgeless .cc-message {
        margin-left: 1em
    }

    .cc-floating.cc-theme-edgeless .cc-btn+.cc-btn {
        margin-left: 0
    }

    .cc-btn {
        border-width: 1px;
        font-weight: normal;
    }

    .cc-window,
    .cc-revoke {
        background: #3b3d3f;
        color: #d7d7d9;
        font: inherit;
    }

    .cc-link {
        color: inherit;
    }

    .cc-link:hover {
        color: #a6daff;
    }

    .error-section {
        text-align: center;
    }

    .error-section img {
        margin-top: 70px;
        margin-bottom: 16px;
    }

    .application-question input,
    .application-additional input,
    .application-question textarea,
    .application-additional textarea {
        border-color: #e2e2e2;
    }

    .application-question input:active,
    .application-additional input:active,
    .application-question textarea:active,
    .application-additional textarea:active,
    .application-question input:focus,
    .application-additional input:focus,
    .application-question textarea:focus,
    .application-additional textarea:focus {
        border-color: #7f838a;
    }

    .application-question select,
    .application-additional select {
        background: #e2e2e2;
        border-color: transparent;
    }

    .application-question select:hover,
    .application-additional select:hover {
        background: #c0c0c0;
    }

    .application-question.custom-question,
    .application-additional.custom-question {
        display: grid;
    }

    .application-question.custom-question .application-label.multiple-choice,
    .application-additional.custom-question .application-label.multiple-choice,
    .application-question.custom-question .application-label.multiple-select,
    .application-additional.custom-question .application-label.multiple-select,
    .application-question.custom-question .application-label.textarea,
    .application-additional.custom-question .application-label.textarea,
    .application-question.custom-question .application-label.dropdown,
    .application-additional.custom-question .application-label.dropdown {
        margin-bottom: 0px;
    }

    .application-question.custom-question .application-field,
    .application-additional.custom-question .application-field {
        display: inline-block;
    }

    .application-question.custom-question .application-field input[type=text],
    .application-additional.custom-question .application-field input[type=text],
    .application-question.custom-question .application-field input[type=email],
    .application-additional.custom-question .application-field input[type=email],
    .application-question.custom-question .application-field input[type=tel],
    .application-additional.custom-question .application-field input[type=tel] {
        margin-top: 0px;
    }

    .application-question.custom-question .application-field input[type=radio],
    .application-additional.custom-question .application-field input[type=radio],
    .application-question.custom-question .application-field input[type=checkbox],
    .application-additional.custom-question .application-field input[type=checkbox] {
        left: 0px;
    }

    .application-question.custom-question .application-field .upload-file-overlay,
    .application-additional.custom-question .application-field .upload-file-overlay {
        margin-bottom: 17.5px;
    }

    .application-question.custom-question .application-field ul label,
    .application-additional.custom-question .application-field ul label {
        padding-left: 30px;
    }

    .application .application-question,
    .eeo-survey .application-question {
        list-style-type: none;
        padding: 0px 0px;
    }

    .application .application-label,
    .eeo-survey .application-label {
        font-size: 16px;
        line-height: 1.4;
        vertical-align: middle;
        width: 100%;
    }

    .application .application-label .description,
    .eeo-survey .application-label .description {
        font-size: 12px;
        margin-bottom: 0;
    }

    .application .application-label label,
    .eeo-survey .application-label label {
        position: relative;
    }

    .application .application-label.multiple-choice,
    .eeo-survey .application-label.multiple-choice,
    .application .application-label.multiple-select,
    .eeo-survey .application-label.multiple-select,
    .application .application-label.textarea,
    .eeo-survey .application-label.textarea {
        vertical-align: top;
    }

    .application .application-label.text,
    .eeo-survey .application-label.text {
        vertical-align: bottom;
    }

    .application .application-field,
    .eeo-survey .application-field {
        position: relative;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .application .application-field input[type=text],
    .eeo-survey .application-field input[type=text],
    .application .application-field select,
    .eeo-survey .application-field select,
    .application .application-field input[type=email],
    .eeo-survey .application-field input[type=email],
    .application .application-field input[type=tel],
    .eeo-survey .application-field input[type=tel] {
        display: inline-block;
        width: 100%;
    }

    .application .application-field input[type=text][disabled],
    .eeo-survey .application-field input[type=text][disabled],
    .application .application-field select[disabled],
    .eeo-survey .application-field select[disabled],
    .application .application-field input[type=email][disabled],
    .eeo-survey .application-field input[type=email][disabled],
    .application .application-field input[type=tel][disabled],
    .eeo-survey .application-field input[type=tel][disabled] {
        background-color: #e2e2e2;
    }

    .application .application-field input[type=radio],
    .eeo-survey .application-field input[type=radio],
    .application .application-field input[type=checkbox],
    .eeo-survey .application-field input[type=checkbox] {
        cursor: pointer;
        outline: none;
    }

    .application .application-field .icon-caret-down,
    .eeo-survey .application-field .icon-caret-down {
        height: 16px;
        width: 16px;
        position: absolute;
        right: 10px;
        margin-top: -8px;
        top: 50%;
    }

    .application .application-field ul,
    .eeo-survey .application-field ul {
        list-style-type: none;
    }

    .application .application-field label,
    .eeo-survey .application-field label {
        padding-left: 40px;
        position: relative;
        cursor: pointer;
    }

    .application .application-field label .application-answer-alternative,
    .eeo-survey .application-field label .application-answer-alternative {
        color: #83868c;
    }

    .application .application-field input[type=radio],
    .eeo-survey .application-field input[type=radio] {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        -webkit-border-radius: 10px;
        border-radius: 10px;
        position: relative;
        border: 1px solid #e2e2e2;
    }

    .application .application-field input[type=radio]:active,
    .eeo-survey .application-field input[type=radio]:active {
        background: #ebecf0;
    }

    .application .application-field input[type=radio]:checked::after,
    .eeo-survey .application-field input[type=radio]:checked::after {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 0;
        top: 0;
        -webkit-border-radius: 10px;
        border-radius: 10px;
        background-color: #00a1dc;
    }

    .application .application-field input[type=radio]:checked+span,
    .eeo-survey .application-field input[type=radio]:checked+span,
    .application .application-field input[type=checkbox]:checked+span,
    .eeo-survey .application-field input[type=checkbox]:checked+span {
        color: #515357;
    }

    .application .application-field input[type=checkbox],
    .eeo-survey .application-field input[type=checkbox] {
        width: 20px;
        height: 20px;
        border: 1px solid #e2e2e2;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }

    .application .application-field input[type=checkbox]:active,
    .eeo-survey .application-field input[type=checkbox]:active {
        background: #ebecf0;
    }

    .application .application-field input[type=checkbox]:checked::after,
    .eeo-survey .application-field input[type=checkbox]:checked::after {
        position: absolute;
        content: "";
        left: 15%;
        top: -10%;
        height: 40%;
        width: 90%;
        border-bottom: 4px solid #00a1dc;
        border-left: 4px solid #00a1dc;
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }

    .application .application-field input[type=radio],
    .eeo-survey .application-field input[type=radio],
    .application .application-field input[type=checkbox],
    .eeo-survey .application-field input[type=checkbox] {
        position: absolute;
        left: 10px;
        top: 2px;
    }

    .application .application-field .application-university,
    .eeo-survey .application-field .application-university {
        position: relative;
    }

    .application .application-field .application-university .select2-container,
    .eeo-survey .application-field .application-university .select2-container {
        height: 40px;
    }

    .application .application-field .application-university .select2-container .select2-selection,
    .eeo-survey .application-field .application-university .select2-container .select2-selection {
        padding: 4px 4px 4px 7px;
        height: 40px;
    }

    .application .application-field .application-university .select2-container .select2-selection:active,
    .eeo-survey .application-field .application-university .select2-container .select2-selection:active,
    .application .application-field .application-university .select2-container .select2-selection:focus,
    .eeo-survey .application-field .application-university .select2-container .select2-selection:focus {
        outline: none;
        border: 1px solid #7f838a;
    }

    .application .application-field .application-university .select2-container .select2-selection span,
    .eeo-survey .application-field .application-university .select2-container .select2-selection span {
        font-size: 16px !important;
    }

    .application .application-field .application-university .select2-container .select2-selection__arrow,
    .eeo-survey .application-field .application-university .select2-container .select2-selection__arrow {
        top: 7px;
    }

    .application .application-field .application-dropdown,
    .eeo-survey .application-field .application-dropdown {
        position: relative;
    }

    .application .application-field .application-dropdown select,
    .eeo-survey .application-field .application-dropdown select {
        text-indent: 0.01px;
        -o-text-overflow: '';
        text-overflow: '';
        padding-right: 40px;
    }

    .application .application-field .application-dropdown select::-ms-expand,
    .eeo-survey .application-field .application-dropdown select::-ms-expand {
        display: none;
    }

    .application .application-field .application-dropdown::after,
    .eeo-survey .application-field .application-dropdown::after {
        position: absolute;
        content: "";
        right: 15px;
        top: 26px;
        height: 15px;
        width: 15px;
        border-bottom: 1px solid #7f838a;
        border-left: 1px solid #7f838a;
        border-color: #72767d;
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg);
        pointer-events: none;
    }

    .application .application-field .upload-file-overlay,
    .eeo-survey .application-field .upload-file-overlay {
        max-width: 100%;
        padding-left: 41px;
    }

    .application .application-field .upload-file-overlay .icon-paperclip,
    .eeo-survey .application-field .upload-file-overlay .icon-paperclip {
        position: absolute;
        left: 15px;
    }

    .application .application-field input[type=file],
    .eeo-survey .application-field input[type=file] {
        position: absolute;
        opacity: 0;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
        filter: alpha(opacity=0);
        top: 0;
        left: 0;
    }

    .application .application-question input[type=text],
    .eeo-survey .application-question input[type=text],
    .application .application-additional input[type=text],
    .eeo-survey .application-additional input[type=text],
    .application .application-question input[type=email],
    .eeo-survey .application-question input[type=email],
    .application .application-additional input[type=email],
    .eeo-survey .application-additional input[type=email],
    .application .application-question input[type=tel],
    .eeo-survey .application-question input[type=tel],
    .application .application-additional input[type=tel],
    .eeo-survey .application-additional input[type=tel],
    .application .application-question textarea,
    .eeo-survey .application-question textarea,
    .application .application-additional textarea,
    .eeo-survey .application-additional textarea,
    .application .application-question select,
    .eeo-survey .application-question select,
    .application .application-additional select,
    .eeo-survey .application-additional select,
    .application .application-question .application-answer-alternative,
    .eeo-survey .application-question .application-answer-alternative,
    .application .application-additional .application-answer-alternative,
    .eeo-survey .application-additional .application-answer-alternative {
        font-size: 16px;
        line-height: 1.4;
    }

    .application .application-question input[type=text],
    .eeo-survey .application-question input[type=text],
    .application .application-additional input[type=text],
    .eeo-survey .application-additional input[type=text],
    .application .application-question input[type=email],
    .eeo-survey .application-question input[type=email],
    .application .application-additional input[type=email],
    .eeo-survey .application-additional input[type=email],
    .application .application-question input[type=tel],
    .eeo-survey .application-question input[type=tel],
    .application .application-additional input[type=tel],
    .eeo-survey .application-additional input[type=tel],
    .application .application-question textarea,
    .eeo-survey .application-question textarea,
    .application .application-additional textarea,
    .eeo-survey .application-additional textarea,
    .application .application-question select,
    .eeo-survey .application-question select,
    .application .application-additional select,
    .eeo-survey .application-additional select {
        -webkit-border-radius: 3px;
        border-radius: 3px;
        border-width: 1px;
        border-style: solid;
        height: 40px;
        padding: 4px 4px 4px 15px;
        -webkit-transition: 1px solid #e3e4e6 150ms, background 150ms;
        -moz-transition: 1px solid #e3e4e6 150ms, background 150ms;
        -o-transition: 1px solid #e3e4e6 150ms, background 150ms;
        -ms-transition: 1px solid #e3e4e6 150ms, background 150ms;
        transition: 1px solid #e3e4e6 150ms, background 150ms;
    }

    .application .application-question input[type=text]:active,
    .eeo-survey .application-question input[type=text]:active,
    .application .application-additional input[type=text]:active,
    .eeo-survey .application-additional input[type=text]:active,
    .application .application-question input[type=email]:active,
    .eeo-survey .application-question input[type=email]:active,
    .application .application-additional input[type=email]:active,
    .eeo-survey .application-additional input[type=email]:active,
    .application .application-question input[type=tel]:active,
    .eeo-survey .application-question input[type=tel]:active,
    .application .application-additional input[type=tel]:active,
    .eeo-survey .application-additional input[type=tel]:active,
    .application .application-question textarea:active,
    .eeo-survey .application-question textarea:active,
    .application .application-additional textarea:active,
    .eeo-survey .application-additional textarea:active,
    .application .application-question select:active,
    .eeo-survey .application-question select:active,
    .application .application-additional select:active,
    .eeo-survey .application-additional select:active,
    .application .application-question input[type=text]:focus,
    .eeo-survey .application-question input[type=text]:focus,
    .application .application-additional input[type=text]:focus,
    .eeo-survey .application-additional input[type=text]:focus,
    .application .application-question input[type=email]:focus,
    .eeo-survey .application-question input[type=email]:focus,
    .application .application-additional input[type=email]:focus,
    .eeo-survey .application-additional input[type=email]:focus,
    .application .application-question input[type=tel]:focus,
    .eeo-survey .application-question input[type=tel]:focus,
    .application .application-additional input[type=tel]:focus,
    .eeo-survey .application-additional input[type=tel]:focus,
    .application .application-question textarea:focus,
    .eeo-survey .application-question textarea:focus,
    .application .application-additional textarea:focus,
    .eeo-survey .application-additional textarea:focus,
    .application .application-question select:focus,
    .eeo-survey .application-question select:focus,
    .application .application-additional select:focus,
    .eeo-survey .application-additional select:focus {
        outline: none;
    }

    .application .application-question input.invisible-resume-upload,
    .eeo-survey .application-question input.invisible-resume-upload,
    .application .application-additional input.invisible-resume-upload,
    .eeo-survey .application-additional input.invisible-resume-upload,
    .application .application-question .visible-resume-upload,
    .eeo-survey .application-question .visible-resume-upload,
    .application .application-additional .visible-resume-upload,
    .eeo-survey .application-additional .visible-resume-upload {
        width: 230px;
        height: 40px;
    }

    .application .application-question .visible-resume-upload,
    .eeo-survey .application-question .visible-resume-upload,
    .application .application-additional .visible-resume-upload,
    .eeo-survey .application-additional .visible-resume-upload {
        position: relative;
        margin-right: 15px;
        padding-left: 41px;
    }

    .application .application-question .visible-resume-upload .icon,
    .eeo-survey .application-question .visible-resume-upload .icon,
    .application .application-additional .visible-resume-upload .icon,
    .eeo-survey .application-additional .visible-resume-upload .icon {
        position: absolute;
    }

    .application .application-question .visible-resume-upload .resume-upload-name,
    .eeo-survey .application-question .visible-resume-upload .resume-upload-name,
    .application .application-additional .visible-resume-upload .resume-upload-name,
    .eeo-survey .application-additional .visible-resume-upload .resume-upload-name {
        vertical-align: middle;
        display: inline-block;
        line-height: 40px;
        white-space: nowrap;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        margin-left: 24px;
        margin-bottom: 3px;
    }

    .application .application-question .resume-upload-filename,
    .eeo-survey .application-question .resume-upload-filename,
    .application .application-additional .resume-upload-filename,
    .eeo-survey .application-additional .resume-upload-filename {
        margin: 8px 0px;
        display: inline-block;
        font-size: 14px;
    }

    .application .application-question input.invisible-resume-upload,
    .eeo-survey .application-question input.invisible-resume-upload,
    .application .application-additional input.invisible-resume-upload,
    .eeo-survey .application-additional input.invisible-resume-upload {
        position: absolute;
        top: 0px;
        left: 0px;
        opacity: 0;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
        filter: alpha(opacity=0);
        cursor: pointer;
    }

    .application .application-question input.invisible-resume-upload:hover,
    .eeo-survey .application-question input.invisible-resume-upload:hover,
    .application .application-additional input.invisible-resume-upload:hover,
    .eeo-survey .application-additional input.invisible-resume-upload:hover {
        border-color: #f00;
    }

    .application .application-question .linkedin-auth-button,
    .eeo-survey .application-question .linkedin-auth-button,
    .application .application-additional .linkedin-auth-button,
    .eeo-survey .application-additional .linkedin-auth-button {
        position: relative;
        margin-right: 15px;
        padding-left: 41px;
    }

    .application .application-question .linkedin-auth-button.added,
    .eeo-survey .application-question .linkedin-auth-button.added,
    .application .application-additional .linkedin-auth-button.added,
    .eeo-survey .application-additional .linkedin-auth-button.added {
        background: #dadbdf;
    }

    .application .application-question textarea,
    .eeo-survey .application-question textarea,
    .application .application-additional textarea,
    .eeo-survey .application-additional textarea {
        padding-top: 10px;
        resize: vertical;
        width: 100%;
        height: 130px;
    }

    .application .application-question select,
    .eeo-survey .application-question select,
    .application .application-additional select,
    .eeo-survey .application-additional select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }

    .application .required,
    .eeo-survey .required {
        display: inline-block;
        color: #ff794f;
        margin-left: 4px;
        font-size: 9px;
        padding-bottom: 0px;
        position: absolute;
    }

    .application .error-message,
    .eeo-survey .error-message {
        background: #ff794f;
        color: #fff;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        padding: 5px 15px;
        width: 700px;
        max-width: 100%;
    }

    .resume-upload-failure,
    .resume-upload-working,
    .resume-upload-success,
    .linkedin-login-success {
        display: none;
        cursor: default;
        position: absolute;
        top: 0;
        left: 260px;
    }

    .resume-upload-working {
        cursor: wait;
    }

    .resume-upload-success,
    .linkedin-login-success {
        -webkit-animation-timing-function: ease-in;
        -webkit-animation-duration: 1s;
        -webkit-animation-name: fadein;
    }

    .resume-upload-failure {
        -webkit-animation-timing-function: ease-in;
        -webkit-animation-duration: 4s;
        -webkit-animation-name: fadeout;
        opacity: 0;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
        filter: alpha(opacity=0);
        display: none;
    }

    .resume-upload-failure .resume-upload-label {
        opacity: 0.5;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
        filter: alpha(opacity=50);
    }

    .resume-upload-oversize {
        position: relative;
        display: none;
    }

    .resume-upload-label,
    .linkedin-login-label {
        position: absolute;
        line-height: 40px;
        display: inline-block;
        height: 40px;
        margin-left: 15px;
        width: 230px;
    }

    .loading-indicator {
        display: inline-block;
        opacity: 0.8;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";
        filter: alpha(opacity=80);
        -webkit-border-radius: 40px;
        border-radius: 40px;
        -webkit-animation: loading 1.5s infinite linear;
        -moz-animation: loading 1.5s infinite linear;
        -o-animation: loading 1.5s infinite linear;
        -ms-animation: loading 1.5s infinite linear;
        animation: loading 1.5s infinite linear;
        border: 6px solid #00a1dc;
        border-top: 6px solid rgba(0, 0, 0, 0);
        border-left: 6px solid rgba(0, 0, 0, 0);
        width: 40px;
        height: 40px;
    }

    .loading-indicator.completed {
        border-left: 6px solid #515357;
        border-right: 6px solid #515357;
        border-top: 6px solid #515357;
        border-bottom: 6px solid #515357;
        -webkit-animation: none;
        -moz-animation: none;
        -o-animation: none;
        -ms-animation: none;
        animation: none;
        text-align: center;
    }

    .loading-indicator .icon-checkmark {
        vertical-align: middle;
    }

    .loading-indicator .icon-checkmark>path {
        fill: #515357;
    }

    .application-form h4 {
        margin: 40px 0;
    }

    .awli-button-container {
        display: inline-block;
        overflow: hidden;
        position: relative;
        vertical-align: middle;
    }

    .awli-button-container .iframe-mask {
        position: absolute;
        left: 0;
        background-color: #f9f9f9;
        z-index: 1;
    }

    .awli-button-container .iframe-mask.disclaimer-mask {
        top: -50px;
        width: 243px;
        height: 40px;
    }

    .awli-button-container .iframe-mask.button-mask {
        pointer-events: none;
        top: 4px;
        width: 243px;
        height: 55px;
    }

    .awli-button,
    .awli-button:active,
    .awli-button:focus {
        position: relative;
        margin-right: 15px;
        padding-left: 41px;
        padding-right: 0;
        width: 243px;
        background: #0073b1;
        border-color: #0073b1;
        color: #fff;
        z-index: 10;
        outline: none;
    }

    .awli-button.button-masked,
    .awli-button:active.button-masked,
    .awli-button:focus.button-masked {
        pointer-events: none;
    }

    .awli-button.button-masked>div,
    .awli-button:active.button-masked>div,
    .awli-button:focus.button-masked>div {
        pointer-events: none;
    }

    .awli-button.button-masked>div>*,
    .awli-button:active.button-masked>div>*,
    .awli-button:focus.button-masked>div>* {
        pointer-events: none;
    }

    .awli-button.state-loading>.loading,
    .awli-button:active.state-loading>.loading,
    .awli-button:focus.state-loading>.loading {
        display: block;
    }

    .awli-button.state-loading>.ready,
    .awli-button:active.state-loading>.ready,
    .awli-button:focus.state-loading>.ready {
        display: none;
    }

    .awli-button.state-loading>.completed,
    .awli-button:active.state-loading>.completed,
    .awli-button:focus.state-loading>.completed {
        display: none;
    }

    .awli-button.state-ready>.loading,
    .awli-button:active.state-ready>.loading,
    .awli-button:focus.state-ready>.loading {
        display: none;
    }

    .awli-button.state-ready>.ready,
    .awli-button:active.state-ready>.ready,
    .awli-button:focus.state-ready>.ready {
        display: block;
    }

    .awli-button.state-ready>.completed,
    .awli-button:active.state-ready>.completed,
    .awli-button:focus.state-ready>.completed {
        display: none;
    }

    .awli-button.state-completed>.loading,
    .awli-button:active.state-completed>.loading,
    .awli-button:focus.state-completed>.loading {
        display: none;
    }

    .awli-button.state-completed>.ready,
    .awli-button:active.state-completed>.ready,
    .awli-button:focus.state-completed>.ready {
        display: none;
    }

    .awli-button.state-completed>.completed,
    .awli-button:active.state-completed>.completed,
    .awli-button:focus.state-completed>.completed {
        display: block;
    }

    .awli-button .icon-checkmark path:first-child,
    .awli-button:active .icon-checkmark path:first-child,
    .awli-button:focus .icon-checkmark path:first-child {
        fill: #fff;
    }

    .awli-button .icon-linkedin .icon-li-background,
    .awli-button:active .icon-linkedin .icon-li-background,
    .awli-button:focus .icon-linkedin .icon-li-background {
        fill: currentColor;
    }

    .awli-button .icon-linkedin .icon-li-text,
    .awli-button:active .icon-linkedin .icon-li-text,
    .awli-button:focus .icon-linkedin .icon-li-text {
        fill: #0073b1;
    }

    .awli-button:hover,
    .awli-button:active:hover,
    .awli-button:focus:hover {
        background: #006299;
        border-color: #006299;
        color: #fff;
        outline: none;
    }

    .awli-button:hover.state-loading,
    .awli-button:active:hover.state-loading,
    .awli-button:focus:hover.state-loading,
    .awli-button:hover.state-completed,
    .awli-button:active:hover.state-completed,
    .awli-button:focus:hover.state-completed {
        background: #006299;
        border-color: #006299;
        color: #fff;
    }

    .awli-button:hover.state-loading .icon-checkmark path:first-child,
    .awli-button:active:hover.state-loading .icon-checkmark path:first-child,
    .awli-button:focus:hover.state-loading .icon-checkmark path:first-child,
    .awli-button:hover.state-completed .icon-checkmark path:first-child,
    .awli-button:active:hover.state-completed .icon-checkmark path:first-child,
    .awli-button:focus:hover.state-completed .icon-checkmark path:first-child {
        fill: #fff;
    }

    .awli-button.state-loading,
    .awli-button:active.state-loading,
    .awli-button:focus.state-loading,
    .awli-button.state-completed,
    .awli-button:active.state-completed,
    .awli-button:focus.state-completed {
        background: #0073b1;
        border-color: #0073b1;
        color: #fff;
    }

    .awli-button.state-loading .icon-checkmark path:first-child,
    .awli-button:active.state-loading .icon-checkmark path:first-child,
    .awli-button:focus.state-loading .icon-checkmark path:first-child,
    .awli-button.state-completed .icon-checkmark path:first-child,
    .awli-button:active.state-completed .icon-checkmark path:first-child,
    .awli-button:focus.state-completed .icon-checkmark path:first-child {
        fill: #fff;
    }

    .awli-button-label {
        line-height: 1.33;
        display: block;
        overflow: hidden;
        text-align: left;
    }

    .awli-disclaimer {
        color: #969799;
        font-size: 12px;
        line-height: 14px;
        display: inline-block;
        padding: 10px 0;
        margin: 0;
        vertical-align: middle;
    }

    .awli-disclaimer a,
    .awli-disclaimer a:active,
    .awli-disclaimer a:focus {
        color: #707173;
    }

    .awli-disclaimer a:hover {
        color: #969799;
    }

    .IN-Awli-widget {
        display: inline-block;
        position: absolute;
        left: 6px;
        top: -33px;
        z-index: 0;
    }

    #veteran-info,
    #disability-info {
        border: 1px solid transparent;
        display: none;
        width: 100%;
    }

    .eeo-light-text {
        color: #555659;
    }

    h5.eeo-paragraph-heading {
        font-weight: bold;
        margin-top: 17.5px;
    }

    h5.eeo-paragraph-heading+p {
        margin-top: 0;
    }

    hr {
        border: 1px solid #e3e4e6;
    }

    .application .eeo-option-text.application-answer-alternative {
        margin-bottom: 0;
    }

    .eeo-option-description {
        color: #555659;
        font-size: 12px;
    }

    .eeo-two-col-list {
        -webkit-column-width: 350px;
        -moz-column-width: 350px;
        column-width: 350px;
    }

    .eeo-two-col-list>li {
        margin-left: 30px;
    }

    .eeo-more-info-button {
        display: inline-block;
        margin-left: 10px;
        vertical-align: middle;
    }

    .eeo-more-info-button>.icon-info>path {
        fill: #969799;
    }

    .eeo-more-info-button:hover>.icon-info>path {
        fill: #555659;
    }

    .eeo-expandable-description>li {
        margin-bottom: 10px;
    }

    li.select2-results__option.select2-results__option--highlighted .posting-option .posting-tags {
        color: #fff;
    }

    .posting-option {
        display: block;
    }

    .posting-option .posting-tags {
        display: block;
        line-height: 1em;
        font-size: 0.6em;
        color: #939393;
    }

    .posting-option .posting-tag {
        padding-right: 3px;
    }

    .posting-option .posting-title {
        text-align: left;
    }

    @-moz-keyframes fadein {
        0% {
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
        }

        70% {
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
        }

        100% {
            opacity: 1;
            -ms-filter: none;
            filter: none;
        }
    }

    @-webkit-keyframes fadein {
        0% {
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
        }

        70% {
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
        }

        100% {
            opacity: 1;
            -ms-filter: none;
            filter: none;
        }
    }

    @-o-keyframes fadein {
        0% {
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
        }

        70% {
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
        }

        100% {
            opacity: 1;
            -ms-filter: none;
            filter: none;
        }
    }

    @keyframes fadein {
        0% {
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
        }

        70% {
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
        }

        100% {
            opacity: 1;
            -ms-filter: none;
            filter: none;
        }
    }

    @-moz-keyframes fadeout {
        0% {
            opacity: 1;
            -ms-filter: none;
            filter: none;
        }

        80% {
            opacity: 1;
            -ms-filter: none;
            filter: none;
        }

        100% {
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
        }
    }

    @-webkit-keyframes fadeout {
        0% {
            opacity: 1;
            -ms-filter: none;
            filter: none;
        }

        80% {
            opacity: 1;
            -ms-filter: none;
            filter: none;
        }

        100% {
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
        }
    }

    @-o-keyframes fadeout {
        0% {
            opacity: 1;
            -ms-filter: none;
            filter: none;
        }

        80% {
            opacity: 1;
            -ms-filter: none;
            filter: none;
        }

        100% {
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
        }
    }

    @keyframes fadeout {
        0% {
            opacity: 1;
            -ms-filter: none;
            filter: none;
        }

        80% {
            opacity: 1;
            -ms-filter: none;
            filter: none;
        }

        100% {
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
        }
    }

    @-moz-keyframes loading {
        0% {
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            transform: rotate(0deg);
        }

        100% {
            -webkit-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @-webkit-keyframes loading {
        0% {
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            transform: rotate(0deg);
        }

        100% {
            -webkit-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @-o-keyframes loading {
        0% {
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            transform: rotate(0deg);
        }

        100% {
            -webkit-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @keyframes loading {
        0% {
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            transform: rotate(0deg);
        }

        100% {
            -webkit-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @media screen and (min-width: 800px) {

        .application .application-label,
        .eeo-survey .application-label,
        .application .application-field,
        .eeo-survey .application-field {
            display: inline-block;
        }

        .application .application-label,
        .eeo-survey .application-label {
            width: 210px;
        }

        .application .application-label.full-width,
        .eeo-survey .application-label.full-width {
            width: 100%;
        }

        .application .application-field,
        .eeo-survey .application-field {
            padding-left: 15px;
            width: 489px;
        }

        .application .application-field.full-width,
        .eeo-survey .application-field.full-width {
            padding-left: 0;
            width: 100%;
        }
    }

    .list .agency-header {
        font-size: 30px;
    }

    .list .agency-sub-header {
        color: #808080;
    }

    .list .postings-list-logo {
        max-width: 400px;
        max-height: 50px;
    }

    .list .postings-list-logo,
    .list .postings-list-title {
        display: inline-block;
        position: relative;
        min-height: 50px;
        float: left;
    }

    .list .postings-list-title {
        margin: 13px 0px 13px 0px;
    }

    .list .postings-list-logo {
        margin-right: 20px;
    }

    .list .filter-by-label {
        margin-right: 20px;
    }

    .list .filter-bar {
        line-height: 40px;
        max-width: 100%;
    }

    .list .filter-button-wrapper {
        display: inline-block;
        margin-right: 20px;
        max-width: 100%;
        outline: none;
        position: relative;
    }

    .list .filter-button-wrapper:focus .filter-button {
        border-color: #0c92f3;
    }

    .list .filter-button-wrapper:active .filter-button {
        border-color: #dcdcdc;
    }

    .list .filter-button-wrapper .filter-button {
        color: #555659;
        max-width: 100%;
        overflow: hidden;
        padding: 5px 15px;
        padding-right: 41px;
        position: relative;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
    }

    .list .filter-button-wrapper .filter-button.has-selected-filter {
        color: #555659;
        font-weight: bold;
    }

    .list .filter-button-wrapper .filter-button .filter-button-caret {
        position: absolute;
        left: auto;
        left: initial;
        right: 15px;
        vertical-align: middle;
    }

    .list .filter-popup {
        position: absolute;
        top: 110%;
        left: -1px;
        border: 1px solid #dcdcdc;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        display: none;
        font-size: 14px;
        line-height: 1;
        max-height: 300px;
        overflow-y: hidden;
        overflow-y: auto;
        text-align: left;
        white-space: nowrap;
        z-index: 1;
    }

    .list .filter-popup::-webkit-scrollbar {
        width: 10px;
    }

    .list .filter-popup::-webkit-scrollbar-track {
        background-color: #fff;
    }

    .list .filter-popup::-webkit-scrollbar-track:hover {
        background-color: #f9f9f9;
    }

    .list .filter-popup::-webkit-scrollbar-thumb {
        background-color: #d7d7d9;
        border: 1px solid #fff;
    }

    .list .filter-popup::-webkit-scrollbar-thumb:hover {
        background-color: #b1b1b3;
        border-color: #f9f9f9;
    }

    .list .filter-popup ul {
        list-style-type: none;
    }

    .list .filter-popup>ul {
        background: #fff;
        padding: 8px 0;
    }

    .list .filter-popup .group-link,
    .list .filter-popup .category-link {
        display: block;
        padding: 8px 32px;
        position: relative;
    }

    .list .filter-popup .group-link:hover,
    .list .filter-popup .category-link:hover {
        background: #f9f9f9;
    }

    .list .filter-popup .group-link:focus,
    .list .filter-popup .category-link:focus {
        background: #f3faff;
        outline: none;
    }

    .list .filter-popup .group-link .selected-filter-checkmark,
    .list .filter-popup .category-link .selected-filter-checkmark {
        position: absolute;
        left: 8px;
    }

    .list .filter-popup .group-link .selected-filter-checkmark>path,
    .list .filter-popup .category-link .selected-filter-checkmark>path {
        fill: #0c92f3;
    }

    .list .filter-popup .group-link {
        font-size: 16px;
        font-weight: bold;
    }

    .list .filter-popup .group-item {
        border-top: 1px solid #e3e4e6;
        padding: 8px 0;
    }

    .list .filter-popup .group-item:first-of-type {
        border-top: none;
        padding-top: 0;
    }

    .list .filter-popup .group-item:last-of-type {
        padding-bottom: 0;
    }

    .list .no-postings-message {
        margin-top: 80px;
        text-align: center;
    }

    .list .postings-group {
        margin: 40px 0px;
    }

    .list .horizontal-line {
        margin-left: 0px;
    }

    .list .posting {
        display: inline-block;
        position: relative;
        width: 100%;
        margin: 10px 0;
    }

    .list .posting .posting-apply {
        position: absolute;
        top: 0px;
        right: 0px;
        height: 40px;
        text-align: right;
    }

    .list .posting .posting-apply a {
        min-width: 100px;
    }

    .list .posting .posting-title:hover h5 {
        color: #579eee;
    }

    .list .posting .agency-posting-title h5 {
        margin-right: 230px;
    }

    .list .posting .posting-categories {
        height: 30px;
        vertical-align: top;
    }

    .list .posting .posting-category {
        display: inline-block;
        margin-right: 15px;
    }

    .show .section p {
        white-space: pre-wrap;
    }

    .show .posting-header {
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box;
    }

    .show .posting-header .posting-headline .posting-category {
        display: inline-block;
        margin-right: 10px;
    }

    .show .posting-header .postings-btn-wrapper .postings-btn {
        margin-top: 10px;
    }

    @media screen and (min-width: 650px) {
        .show .posting-header .posting-headline {
            display: table-cell;
            width: 100%;
        }

        .show .posting-header .postings-btn-wrapper {
            display: table-cell;
            vertical-align: top;
        }

        .show .posting-header .postings-btn-wrapper .postings-btn {
            margin-left: 30px;
        }
    }

    @media screen and (max-width: 649px) {
        .show .posting-header {
            text-align: center;
            padding-bottom: 40px;
        }
    }

    @media screen and (max-width: 480px) {
        .show .postings-btn {
            width: 100%;
        }
    }

    @media print {
        .postings-btn {
            display: none !important;
        }
    }

    .page-centered.section.last-section-apply {
        text-align: center;
        margin-bottom: 80px;
    }

    .page-centered.section.last-section-apply .btn {
        display: inline-block;
    }

    .page-centered.section.last-section-apply .template-btn-submit {
        margin: 17.5px 0px;
    }

    .invisible-resume-upload {
        position: absolute;
        top: 0px;
        left: 0px;
        opacity: 0;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
        filter: alpha(opacity=0);
        cursor: pointer;
    }
</style>
    `
);
