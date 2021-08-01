$("head").append(
  `
    <style>
    @font-face{
        font-family:Meta;
        src:url(https://cdn.lever.co/fonts/Meta/metaboldlf-webfont-2017.woff) format('woff');
        font-weight:600;
        font-style:normal
    }
    @font-face{
        font-family:Meta;
        src:url(https://cdn.lever.co/fonts/Meta/metanormal-webfont-2017.woff) format('woff');
        font-weight:400;
        font-style:normal
    }
    @font-face{
        font-family:Meta;
        src:url(https://cdn.lever.co/fonts/Meta/metanormalitaliclf-webfont-2017.woff) format('woff');
        font-weight:400;
        font-style:italic
    }
    @font-face{
        font-family:Meta;
        src:url(https://cdn.lever.co/fonts/Meta/metabolditaliclf-webfont-2017.woff) format('woff');
        font-weight:600;
        font-style:italic
    }
    @font-face{
        font-family:Meta-Caps;
        src:url(https://cdn.lever.co/fonts/Meta/MetaScWeb-Normal.eot);
        src:url(https://cdn.lever.co/fonts/Meta/MetaScWeb-Normal.woff) format('woff');
        font-weight:400;
        font-style:normal
    }
    @font-face{
        font-family:Avenir;
        src:url(https://cdn.lever.co/fonts/Avenir/Avenir-Next-Pro-Regular.eot);
        src:url(https://cdn.lever.co/fonts/Avenir/Avenir-Next-Pro-Regular.woff) format('woff');
        src:url(https://cdn.lever.co/fonts/Avenir/Avenir-Next-Pro-Regular.ttf) format('truetype');
        font-weight:400;
        font-style:normal
    }
    .btn,h4,h6{
        font:14px/1.4em Meta-Caps,sans-serif;
        text-transform:lowercase;
        letter-spacing:1px
    }
    .label,body,input{
        font:400 14px/1.4em Meta,sans-serif;
        text-transform:none;
        letter-spacing:0
    }
    h1,h2,h3,h5{
        font:600 16px/1.4em Meta,sans-serif;
        -webkit-font-smoothing:antialiased
    }
    h1,h2,h3,h5{
        color:#222326
    }
    .label{
        font-size:12px;
        color:#969799
    }
    .full-width{
        width:100%
    }
    .centered{
        text-align:center
    }
    @-moz-keyframes lever-fadein{
        0%{
            opacity:0
        }
        100%{
            opacity:1;
            -ms-filter:none;
            filter:none
        }
    }
    @-webkit-keyframes lever-fadein{
        0%{
            opacity:0
        }
        100%{
            opacity:1;
            -ms-filter:none;
            filter:none
        }
    }
    @-o-keyframes lever-fadein{
        0%{
            opacity:0
        }
        100%{
            opacity:1;
            -ms-filter:none;
            filter:none
        }
    }
    @keyframes lever-fadein{
        0%{
            opacity:0
        }
        100%{
            opacity:1;
            -ms-filter:none;
            filter:none
        }
    }
    @-moz-keyframes lever-fadeout{
        0%{
            opacity:1;
            -ms-filter:none;
            filter:none
        }
        100%{
            opacity:0
        }
    }
    @-webkit-keyframes lever-fadeout{
        0%{
            opacity:1;
            -ms-filter:none;
            filter:none
        }
        100%{
            opacity:0
        }
    }
    @-o-keyframes lever-fadeout{
        0%{
            opacity:1;
            -ms-filter:none;
            filter:none
        }
        100%{
            opacity:0
        }
    }
    @keyframes lever-fadeout{
        0%{
            opacity:1;
            -ms-filter:none;
            filter:none
        }
        100%{
            opacity:0
        }
    }
    @-moz-keyframes lever-slidedown{
        0%{
            -webkit-transform:translateY(-20px);
            -moz-transform:translateY(-20px);
            -o-transform:translateY(-20px);
            -ms-transform:translateY(-20px);
            transform:translateY(-20px);
            opacity:0
        }
        100%{
            -webkit-transform:translateY(0);
            -moz-transform:translateY(0);
            -o-transform:translateY(0);
            -ms-transform:translateY(0);
            transform:translateY(0);
            opacity:1;
            -ms-filter:none;
            filter:none
        }
    }
    @-webkit-keyframes lever-slidedown{
        0%{
            -webkit-transform:translateY(-20px);
            -moz-transform:translateY(-20px);
            -o-transform:translateY(-20px);
            -ms-transform:translateY(-20px);
            transform:translateY(-20px);
            opacity:0
        }
        100%{
            -webkit-transform:translateY(0);
            -moz-transform:translateY(0);
            -o-transform:translateY(0);
            -ms-transform:translateY(0);
            transform:translateY(0);
            opacity:1;
            -ms-filter:none;
            filter:none
        }
    }
    @-o-keyframes lever-slidedown{
        0%{
            -webkit-transform:translateY(-20px);
            -moz-transform:translateY(-20px);
            -o-transform:translateY(-20px);
            -ms-transform:translateY(-20px);
            transform:translateY(-20px);
            opacity:0
        }
        100%{
            -webkit-transform:translateY(0);
            -moz-transform:translateY(0);
            -o-transform:translateY(0);
            -ms-transform:translateY(0);
            transform:translateY(0);
            opacity:1;
            -ms-filter:none;
            filter:none
        }
    }
    @keyframes lever-slidedown{
        0%{
            -webkit-transform:translateY(-20px);
            -moz-transform:translateY(-20px);
            -o-transform:translateY(-20px);
            -ms-transform:translateY(-20px);
            transform:translateY(-20px);
            opacity:0
        }
        100%{
            -webkit-transform:translateY(0);
            -moz-transform:translateY(0);
            -o-transform:translateY(0);
            -ms-transform:translateY(0);
            transform:translateY(0);
            opacity:1;
            -ms-filter:none;
            filter:none
        }
    }
    @-moz-keyframes lever-slideup{
        0%{
            -webkit-transform:translateY(20px);
            -moz-transform:translateY(20px);
            -o-transform:translateY(20px);
            -ms-transform:translateY(20px);
            transform:translateY(20px);
            opacity:0
        }
        100%{
            -webkit-transform:translateY(0);
            -moz-transform:translateY(0);
            -o-transform:translateY(0);
            -ms-transform:translateY(0);
            transform:translateY(0);
            opacity:1;
            -ms-filter:none;
            filter:none
        }
    }
    @-webkit-keyframes lever-slideup{
        0%{
            -webkit-transform:translateY(20px);
            -moz-transform:translateY(20px);
            -o-transform:translateY(20px);
            -ms-transform:translateY(20px);
            transform:translateY(20px);
            opacity:0
        }
        100%{
            -webkit-transform:translateY(0);
            -moz-transform:translateY(0);
            -o-transform:translateY(0);
            -ms-transform:translateY(0);
            transform:translateY(0);
            opacity:1;
            -ms-filter:none;
            filter:none
        }
    }
    @-o-keyframes lever-slideup{
        0%{
            -webkit-transform:translateY(20px);
            -moz-transform:translateY(20px);
            -o-transform:translateY(20px);
            -ms-transform:translateY(20px);
            transform:translateY(20px);
            opacity:0
        }
        100%{
            -webkit-transform:translateY(0);
            -moz-transform:translateY(0);
            -o-transform:translateY(0);
            -ms-transform:translateY(0);
            transform:translateY(0);
            opacity:1;
            -ms-filter:none;
            filter:none
        }
    }
    @keyframes lever-slideup{
        0%{
            -webkit-transform:translateY(20px);
            -moz-transform:translateY(20px);
            -o-transform:translateY(20px);
            -ms-transform:translateY(20px);
            transform:translateY(20px);
            opacity:0
        }
        100%{
            -webkit-transform:translateY(0);
            -moz-transform:translateY(0);
            -o-transform:translateY(0);
            -ms-transform:translateY(0);
            transform:translateY(0);
            opacity:1;
            -ms-filter:none;
            filter:none
        }
    }
    *{
        -webkit-box-sizing:border-box;
        -moz-box-sizing:border-box;
        box-sizing:border-box
    }
    body{
        background:#f9f9f9;
        color:#555659
    }
    .application .application-field label,.application .application-label,body,form,h1,h2,h3,h4,h5,h6,p{
        margin:0;
        padding:0
    }
    h1{
        font-size:36px
    }
    h2,h5{
        font-size:24px
    }
    h3{
        font-size:18px
    }
    h5{
        font-size:16px
    }
    h6{
        font-size:12px
    }
    a,a:visited{
        color:#579eee;
        text-decoration:none
    }
    a:hover{
        color:#555659;
        cursor:pointer
    }
    a:active{
        color:#0c92f3
    }
    p>a{
        text-decoration:underline;
        color:inherit
    }
    b{
        font-weight:600;
        -webkit-font-smoothing:antialiased
    }
    input{
        color:#555659;
        margin:0
    }
    input{
        height:30px
    }
    section{
        padding-bottom:16px
    }
    .btn{
        position:relative;
        display:inline-block;
        margin:0;
        font-size:14px;
        font-weight:400;
        line-height:1.33;
        padding:5px 15px;
        text-align:center;
        white-space:nowrap;
        vertical-align:middle;
        cursor:pointer;
        border:1px solid #dcdcdc;
        -webkit-border-radius:3px;
        border-radius:3px;
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
        -webkit-appearance:none;
        -moz-appearance:none;
        appearance:none;
        color:#555659;
        background:#fcfcfc;
        background:-webkit-linear-gradient(top,#fff,#f9f9f9);
        background:-moz-linear-gradient(top,#fff,#f9f9f9);
        background:-o-linear-gradient(top,#fff,#f9f9f9);
        background:-ms-linear-gradient(top,#fff,#f9f9f9);
        background:linear-gradient(to bottom,#fff,#f9f9f9);
        -webkit-transition:background .15s,border-color .15s,color .15s,box-shadow .15s,fill .15s;
        -moz-transition:background .15s,border-color .15s,color .15s,box-shadow .15s,fill .15s;
        -o-transition:background .15s,border-color .15s,color .15s,box-shadow .15s,fill .15s;
        -ms-transition:background .15s,border-color .15s,color .15s,box-shadow .15s,fill .15s;
        transition:background .15s,border-color .15s,color .15s,box-shadow .15s,fill .15s
    }
    .btn-invisible:hover,.btn:hover{
        color:#1a1b1c;
        border-color:#969799
    }
    .btn:active{
        border-color:#555659;
        background:-webkit-linear-gradient(top,#f9f9f9,#fff);
        background:-moz-linear-gradient(top,#f9f9f9,#fff);
        background:-o-linear-gradient(top,#f9f9f9,#fff);
        background:-ms-linear-gradient(top,#f9f9f9,#fff);
        background:linear-gradient(to bottom,#f9f9f9,#fff)
    }
    .btn:active .icon>path{
        fill:#555659
    }
    .btn:focus{
        outline:thin dotted;
        outline:3px auto #0c92f3;
        outline-offset:-2px
    }
    .btn:disabled,input.btn:disabled{
        cursor:default;
        pointer-events:none;
        -webkit-box-shadow:none;
        box-shadow:none;
        background:#e3e4e6;
        color:#555659;
        border-color:#dcdcdc;
        outline:0
    }
    .btn:disabled.has-tip,input.btn:disabled.has-tip{
        pointer-events:auto
    }
    .btn:disabled:active,.btn:disabled:hover,input.btn:disabled:active,input.btn:disabled:hover{
        color:#555659;
        background:#e3e4e6;
        border-color:#dcdcdc
    }
    .btn .icon>path{
        fill:#555659
    }
    .btn small{
        margin-left:10px;
        font-size:12px;
        opacity:.67
    }
    a.btn{
        color:#555659
    }
    .btn-invisible{
        color:#555659;
        padding:5px 15px;
        border-color:transparent;
        -webkit-box-shadow:inset 0 0 0 1px transparent;
        box-shadow:inset 0 0 0 1px transparent;
        background:0 0;
        -webkit-transition:background .15s,box-shadow .15s,color .15s;
        -moz-transition:background .15s,box-shadow .15s,color .15s;
        -o-transition:background .15s,box-shadow .15s,color .15s;
        -ms-transition:background .15s,box-shadow .15s,color .15s;
        transition:background .15s,box-shadow .15s,color .15s
    }
    .btn-invisible:disabled{
        cursor:default
    }
    .icon-btn{
        display:inline-block;
        margin-left:10px;
        vertical-align:middle
    }
    .icon-btn .icon{
        display:block
    }
    .icon-btn .icon>path{
        fill:#969799
    }
    .icon-btn:hover .icon>path{
        fill:#555659
    }
    input[type=checkbox],input[type=radio]{
        -webkit-appearance:none;
        -moz-appearance:none;
        appearance:none;
        width:17px;
        height:17px;
        position:relative;
        border:1px solid #dcdcdc;
        margin:0;
        background:#fff;
        cursor:pointer
    }
    input[type=checkbox]:disabled,input[type=radio]:disabled{
        background:#e3e4e6
    }
    input[type=radio]{
        -webkit-border-radius:8.5px;
        border-radius:8.5px
    }
    input[type=radio]:active{
        background:#dcdcdc
    }
    input[type=radio]:checked::after{
        position:absolute;
        content:"";
        height:9px;
        width:9px;
        left:calc(50% - 4.5px);
        top:calc(50% - 4.5px);
        -webkit-border-radius:4.25px;
        border-radius:4.25px;
        background-color:#0c92f3
    }
    input[type=checkbox]{
        -webkit-border-radius:3px;
        border-radius:3px
    }
    input[type=checkbox]:active{
        background:#dcdcdc
    }
    input[type=checkbox]:checked::after{
        position:absolute;
        content:"";
        left:15%;
        top:3%;
        height:40%;
        width:69%;
        border-bottom:2px solid #0c92f3;
        border-left:2px solid #0c92f3;
        -webkit-transform:rotate(-45deg);
        -moz-transform:rotate(-45deg);
        -o-transform:rotate(-45deg);
        -ms-transform:rotate(-45deg);
        transform:rotate(-45deg)
    }
    input[type=submit]{
        height:inherit
    }
    input::placeholder{
        color:#969799
    }
    input:-ms-input-placeholder{
        color:#969799
    }
    .loading-indicator{
        display:inline-block;
        -webkit-border-radius:30px;
        border-radius:30px;
        -webkit-animation:loading 1.2s infinite linear;
        -moz-animation:loading 1.2s infinite linear;
        -o-animation:loading 1.2s infinite linear;
        -ms-animation:loading 1.2s infinite linear;
        animation:loading 1.2s infinite linear;
        width:30px;
        height:30px;
        border:4px solid #0c92f3;
        border-top:4px solid #e3e4e6;
        border-left:4px solid #e3e4e6;
        vertical-align:middle
    }
    .loading-indicator.small{
        margin-right:10px;
        width:16px;
        height:16px;
        border:2px solid #0c92f3;
        border-top:2px solid #e3e4e6;
        border-left:2px solid #e3e4e6
    }
    .loading-indicator.small.completed{
        border:2px solid #555659
    }
    .loading-indicator.small.completed .icon{
        vertical-align:top;
        width:10px;
        height:10px
    }
    .loading-indicator.completed{
        border:4px solid #555659;
        text-align:center;
        -webkit-animation:none;
        -moz-animation:none;
        -o-animation:none;
        -ms-animation:none;
        animation:none
    }
    .loading-indicator .icon{
        margin-left:1px;
        height:100%;
        vertical-align:middle
    }
    .loading-indicator .icon>path{
        fill:#39bf87
    }
    @-moz-keyframes loading{
        0%{
            -webkit-transform:rotate(0);
            -moz-transform:rotate(0);
            -o-transform:rotate(0);
            -ms-transform:rotate(0);
            transform:rotate(0)
        }
        100%{
            -webkit-transform:rotate(360deg);
            -moz-transform:rotate(360deg);
            -o-transform:rotate(360deg);
            -ms-transform:rotate(360deg);
            transform:rotate(360deg)
        }
    }
    @-webkit-keyframes loading{
        0%{
            -webkit-transform:rotate(0);
            -moz-transform:rotate(0);
            -o-transform:rotate(0);
            -ms-transform:rotate(0);
            transform:rotate(0)
        }
        100%{
            -webkit-transform:rotate(360deg);
            -moz-transform:rotate(360deg);
            -o-transform:rotate(360deg);
            -ms-transform:rotate(360deg);
            transform:rotate(360deg)
        }
    }
    @-o-keyframes loading{
        0%{
            -webkit-transform:rotate(0);
            -moz-transform:rotate(0);
            -o-transform:rotate(0);
            -ms-transform:rotate(0);
            transform:rotate(0)
        }
        100%{
            -webkit-transform:rotate(360deg);
            -moz-transform:rotate(360deg);
            -o-transform:rotate(360deg);
            -ms-transform:rotate(360deg);
            transform:rotate(360deg)
        }
    }
    @keyframes loading{
        0%{
            -webkit-transform:rotate(0);
            -moz-transform:rotate(0);
            -o-transform:rotate(0);
            -ms-transform:rotate(0);
            transform:rotate(0)
        }
        100%{
            -webkit-transform:rotate(360deg);
            -moz-transform:rotate(360deg);
            -o-transform:rotate(360deg);
            -ms-transform:rotate(360deg);
            transform:rotate(360deg)
        }
    }
    .centered-content{
        align-items:center;
        display:flex;
        justify-content:center
    }
    .form-check{
        display:block
    }
    .form-check+.form-check{
        margin-top:8px
    }
    .form-check [disabled]{
        opacity:.5
    }
    .form-check-label{
        display:inline-block;
        min-height:24px;
        padding-left:24px;
        position:relative;
        vertical-align:top
    }
    .form-check-input,input[type=checkbox].form-check-input,input[type=radio].form-check-input{
        -moz-appearance:none;
        -webkit-appearance:none;
        -webkit-appearance:none;
        -moz-appearance:none;
        appearance:none;
        border-style:solid;
        border-width:1px;
        display:inline-block;
        height:16px;
        margin:0;
        position:relative;
        vertical-align:-.15em;
        width:16px
    }
    .form-check-input,input[type=checkbox].form-check-input,input[type=radio].form-check-input{
        background:rgba(177,177,179,.4);
        border-color:rgba(177,177,179,0)
    }
    .form-check-input:hover,input[type=checkbox].form-check-input:hover,input[type=radio].form-check-input:hover{
        background:rgba(150,151,153,.4);
        border-color:#b1b1b3
    }
    .form-check-input:active,input[type=checkbox].form-check-input:active,input[type=radio].form-check-input:active{
        background:rgba(112,113,115,.4);
        border-color:#969799
    }
    .form-check-input:checked,input[type=checkbox].form-check-input:checked,input[type=radio].form-check-input:checked{
        background:#0c92f3;
        border-width:0
    }
    .form-check-input:checked:hover,input[type=checkbox].form-check-input:checked:hover,input[type=radio].form-check-input:checked:hover{
        background:#007fd9
    }
    .form-check-input:checked:active,input[type=checkbox].form-check-input:checked:active,input[type=radio].form-check-input:checked:active{
        background:#0068b3
    }
    input[type=checkbox].form-check-input.form-check-input:indeterminate{
        background:#0c92f3;
        border-width:0
    }
    input[type=checkbox].form-check-input.form-check-input:indeterminate:hover{
        background:#007fd9
    }
    input[type=checkbox].form-check-input.form-check-input:indeterminate:active{
        background:#0068b3
    }
    .form-check-input[disabled].form-check-input:indeterminate:active,.form-check-input[disabled].form-check-input:indeterminate:hover{
        background:rgba(177,177,179,.4);
        border-color:rgba(177,177,179,0);
        cursor:default
    }
    .form-check-input[disabled].form-check-input:indeterminate:checked{
        background:#0c92f3;
        border-width:0
    }
    .form-check-label .form-check-input,.form-check-label input[type=checkbox].form-check-input,.form-check-label input[type=radio].form-check-input{
        left:0;
        position:absolute;
        top:3px
    }
    .form-check-input:focus,input[type=checkbox].form-check-input:focus,input[type=radio].form-check-input:focus{
        outline:0
    }
    input[type=radio].form-check-input{
        -webkit-border-radius:8px;
        border-radius:8px
    }
    input[type=radio].form-check-input:checked::after{
        background-color:#fff;
        -webkit-border-radius:3px;
        border-radius:3px;
        content:"";
        height:6px;
        left:5px;
        position:absolute;
        top:5px;
        width:6px
    }
    input[type=checkbox].form-check-input{
        -webkit-border-radius:3px;
        border-radius:3px
    }
    input[type=checkbox].form-check-input:indeterminate::after{
        border-bottom:2px solid #fff;
        content:"";
        height:4px;
        left:26%;
        position:absolute;
        top:20%;
        width:7px
    }
    input[type=checkbox].form-check-input:checked::after{
        border-bottom:2px solid #fff;
        border-left:2px solid #fff;
        content:"";
        height:4px;
        left:22%;
        position:absolute;
        top:20%;
        -webkit-transform:rotate(-45deg);
        -moz-transform:rotate(-45deg);
        -o-transform:rotate(-45deg);
        -ms-transform:rotate(-45deg);
        transform:rotate(-45deg);
        width:7px
    }
    .message{
        color:#555659;
        background-color:#f0f1f2;
        -webkit-border-radius:3px;
        border-radius:3px;
        padding-bottom:8px;
        padding-left:40px;
        padding-right:32px;
        padding-top:8px;
        position:relative
    }
    .message>.icon{
        position:absolute;
        left:16px;
        top:11px
    }
    .message>.icon path{
        fill:#969799
    }
    .message>p{
        margin-bottom:0
    }
    @-moz-keyframes shimmer{
        0%{
            background-position:-1000px 0
        }
        100%{
            background-position:1000px 0
        }
    }
    @-webkit-keyframes shimmer{
        0%{
            background-position:-1000px 0
        }
        100%{
            background-position:1000px 0
        }
    }
    @-o-keyframes shimmer{
        0%{
            background-position:-1000px 0
        }
        100%{
            background-position:1000px 0
        }
    }
    @keyframes shimmer{
        0%{
            background-position:-1000px 0
        }
        100%{
            background-position:1000px 0
        }
    }
    @-moz-keyframes toastFadeIn{
        0%{
            opacity:0;
            -webkit-transform:translateX(-8px);
            -moz-transform:translateX(-8px);
            -o-transform:translateX(-8px);
            -ms-transform:translateX(-8px);
            transform:translateX(-8px)
        }
        100%{
            opacity:1;
            -ms-filter:none;
            filter:none;
            -webkit-transform:translateX(0);
            -moz-transform:translateX(0);
            -o-transform:translateX(0);
            -ms-transform:translateX(0);
            transform:translateX(0)
        }
    }
    @-webkit-keyframes toastFadeIn{
        0%{
            opacity:0;
            -webkit-transform:translateX(-8px);
            -moz-transform:translateX(-8px);
            -o-transform:translateX(-8px);
            -ms-transform:translateX(-8px);
            transform:translateX(-8px)
        }
        100%{
            opacity:1;
            -ms-filter:none;
            filter:none;
            -webkit-transform:translateX(0);
            -moz-transform:translateX(0);
            -o-transform:translateX(0);
            -ms-transform:translateX(0);
            transform:translateX(0)
        }
    }
    @-o-keyframes toastFadeIn{
        0%{
            opacity:0;
            -webkit-transform:translateX(-8px);
            -moz-transform:translateX(-8px);
            -o-transform:translateX(-8px);
            -ms-transform:translateX(-8px);
            transform:translateX(-8px)
        }
        100%{
            opacity:1;
            -ms-filter:none;
            filter:none;
            -webkit-transform:translateX(0);
            -moz-transform:translateX(0);
            -o-transform:translateX(0);
            -ms-transform:translateX(0);
            transform:translateX(0)
        }
    }
    @keyframes toastFadeIn{
        0%{
            opacity:0;
            -webkit-transform:translateX(-8px);
            -moz-transform:translateX(-8px);
            -o-transform:translateX(-8px);
            -ms-transform:translateX(-8px);
            transform:translateX(-8px)
        }
        100%{
            opacity:1;
            -ms-filter:none;
            filter:none;
            -webkit-transform:translateX(0);
            -moz-transform:translateX(0);
            -o-transform:translateX(0);
            -ms-transform:translateX(0);
            transform:translateX(0)
        }
    }
    .upload{
        align-items:center;
        background-color:#fff;
        border:2px #d7d7d9;
        border-style:dashed;
        color:#969799;
        cursor:pointer;
        display:flex;
        flex-direction:column;
        justify-content:center;
        padding:8px;
        position:relative
    }
    .upload:hover{
        background-color:#f3faff
    }
    .upload .upload-file{
        cursor:pointer;
        height:100%;
        opacity:0;
        position:absolute;
        width:100%
    }
    .upload-error{
        border:2px #d94141;
        border-style:dashed
    }
    .upload-icon{
        color:#d7d7d9
    }
    .upload-icon.icon{
        margin-left:0;
        margin-right:0
    }
    @-moz-keyframes rotate-infinite{
        0%{
            -webkit-transform:rotate(0);
            -moz-transform:rotate(0);
            -o-transform:rotate(0);
            -ms-transform:rotate(0);
            transform:rotate(0)
        }
        100%{
            -webkit-transform:rotate(360deg);
            -moz-transform:rotate(360deg);
            -o-transform:rotate(360deg);
            -ms-transform:rotate(360deg);
            transform:rotate(360deg)
        }
    }
    @-webkit-keyframes rotate-infinite{
        0%{
            -webkit-transform:rotate(0);
            -moz-transform:rotate(0);
            -o-transform:rotate(0);
            -ms-transform:rotate(0);
            transform:rotate(0)
        }
        100%{
            -webkit-transform:rotate(360deg);
            -moz-transform:rotate(360deg);
            -o-transform:rotate(360deg);
            -ms-transform:rotate(360deg);
            transform:rotate(360deg)
        }
    }
    @-o-keyframes rotate-infinite{
        0%{
            -webkit-transform:rotate(0);
            -moz-transform:rotate(0);
            -o-transform:rotate(0);
            -ms-transform:rotate(0);
            transform:rotate(0)
        }
        100%{
            -webkit-transform:rotate(360deg);
            -moz-transform:rotate(360deg);
            -o-transform:rotate(360deg);
            -ms-transform:rotate(360deg);
            transform:rotate(360deg)
        }
    }
    @keyframes rotate-infinite{
        0%{
            -webkit-transform:rotate(0);
            -moz-transform:rotate(0);
            -o-transform:rotate(0);
            -ms-transform:rotate(0);
            transform:rotate(0)
        }
        100%{
            -webkit-transform:rotate(360deg);
            -moz-transform:rotate(360deg);
            -o-transform:rotate(360deg);
            -ms-transform:rotate(360deg);
            transform:rotate(360deg)
        }
    }
    @-moz-keyframes fade-in{
        0%{
            opacity:0
        }
        100%{
            opacity:1;
            -ms-filter:none;
            filter:none
        }
    }
    @-webkit-keyframes fade-in{
        0%{
            opacity:0
        }
        100%{
            opacity:1;
            -ms-filter:none;
            filter:none
        }
    }
    @-o-keyframes fade-in{
        0%{
            opacity:0
        }
        100%{
            opacity:1;
            -ms-filter:none;
            filter:none
        }
    }
    @keyframes fade-in{
        0%{
            opacity:0
        }
        100%{
            opacity:1;
            -ms-filter:none;
            filter:none
        }
    }
    @-moz-keyframes fade-out{
        0%{
            opacity:1;
            -ms-filter:none;
            filter:none
        }
        100%{
            opacity:0
        }
    }
    @-webkit-keyframes fade-out{
        0%{
            opacity:1;
            -ms-filter:none;
            filter:none
        }
        100%{
            opacity:0
        }
    }
    @-o-keyframes fade-out{
        0%{
            opacity:1;
            -ms-filter:none;
            filter:none
        }
        100%{
            opacity:0
        }
    }
    @keyframes fade-out{
        0%{
            opacity:1;
            -ms-filter:none;
            filter:none
        }
        100%{
            opacity:0
        }
    }
    .m0{
        margin:0
    }
    .mb0{
        margin-bottom:0
    }
    .m0_5{
        margin:4px
    }
    .mb0_5{
        margin-bottom:4px
    }
    .m1{
        margin:8px
    }
    .mb1{
        margin-bottom:8px
    }
    .m1_5{
        margin:12px
    }
    .mb1_5{
        margin-bottom:12px
    }
    .m2{
        margin:16px
    }
    .mb2{
        margin-bottom:16px
    }
    .m3{
        margin:24px
    }
    .mb3{
        margin-bottom:24px
    }
    .m4{
        margin:32px
    }
    .mb4{
        margin-bottom:32px
    }
    .m5{
        margin:40px
    }
    .mb5{
        margin-bottom:40px
    }
    .m10{
        margin:80px
    }
    .mb10{
        margin-bottom:80px
    }
    .mb-auto{
        margin-bottom:auto
    }
    .p0{
        padding:0
    }
    .px0{
        padding-left:0;
        padding-right:0
    }
    .p0_5{
        padding:4px
    }
    .px0_5{
        padding-left:4px;
        padding-right:4px
    }
    .p1{
        padding:8px
    }
    .px1{
        padding-left:8px;
        padding-right:8px
    }
    .p1_5{
        padding:12px
    }
    .px1_5{
        padding-left:12px;
        padding-right:12px
    }
    .p2{
        padding:16px
    }
    .px2{
        padding-left:16px;
        padding-right:16px
    }
    .p3{
        padding:24px
    }
    .px3{
        padding-left:24px;
        padding-right:24px
    }
    .p4{
        padding:32px
    }
    .px4{
        padding-left:32px;
        padding-right:32px
    }
    .p5{
        padding:40px
    }
    .px5{
        padding-left:40px;
        padding-right:40px
    }
    .p10{
        padding:80px
    }
    .px10{
        padding-left:80px;
        padding-right:80px
    }
    .height-full{
        height:100%
    }
    .width-full{
        width:100%
    }
    .width-auto{
        width:auto
    }
    html{
        position:relative;
        min-height:100%
    }
    body{
        background:#f9f9f9;
        color:#515357;
        padding-top:70px;
        padding-bottom:250px
    }
    a,a:visited{
        color:#737578
    }
    @font-face{
        font-family:Lato;
        src:url(https://cdn.lever.co/fonts/Lato2/Lato-Bold.eot);
        src:url(https://cdn.lever.co/fonts/Lato2/Lato-Bold.eot?#iefix) format('embedded-opentype');
        src:url(https://cdn.lever.co/fonts/Lato2/Lato-Bold.woff) format('woff');
        src:url(https://cdn.lever.co/fonts/Lato2/Lato-Bold.ttf) format('truetype');
        font-style:normal;
        font-weight:700;
        text-rendering:optimizeLegibility
    }
    @font-face{
        font-family:Lato;
        src:url(https://cdn.lever.co/fonts/Lato2/Lato-Regular.eot);
        src:url(https://cdn.lever.co/fonts/Lato2/Lato-Regular.eot?#iefix) format('embedded-opentype');
        src:url(https://cdn.lever.co/fonts/Lato2/Lato-Regular.woff) format('woff');
        src:url(https://cdn.lever.co/fonts/Lato2/Lato-Regular.ttf) format('truetype');
        font-style:normal;
        font-weight:400;
        text-rendering:optimizeLegibility
    }
    body{
        color:#515357;
        font:normal 400 16px/1.8 Lato
    }
    .application .application-field label,.application .application-label,h1,h2,h3,h4,h5,p{
        margin:0;
        padding:0;
        display:block
    }
    h1{
        font:normal 700 48px/1.4 Lato;
        color:#fff;
        text-transform:uppercase;
        letter-spacing:1px
    }
    h2,h5{
        font:normal 400 36px/1.4 Lato;
        color:#515357;
        text-transform:none;
        letter-spacing:0
    }
    h3{
        font:normal 700 18px/1.4 Lato;
        color:#515357
    }
    h4{
        font:normal 700 16px/1.4 Lato;
        text-transform:uppercase;
        letter-spacing:1px;
        color:#515357
    }
    h5{
        font-size:24px;
        margin-right:115px;
        overflow:hidden;
        -webkit-transition:color 150ms;
        -moz-transition:color 150ms;
        -o-transition:color 150ms;
        -ms-transition:color 150ms;
        transition:color 150ms
    }
    h2,h3,h4{
        margin:17.5px 0
    }
    .application .application-field label,.application .application-label,p{
        margin:17.5px 0
    }
    p>a{
        text-decoration:underline;
        color:#737578
    }
    p>a:hover{
        color:#579eee
    }
    p>a:active,p>a:focus{
        color:#3c6ea6
    }
    .page-full-width{
        width:100%
    }
    .page-centered{
        max-width:1080px;
        display:block;
        margin:0 auto
    }
    .content-wrapper{
        min-height:100%
    }
    .content{
        position:relative;
        width:100%;
        -webkit-box-sizing:border-box;
        -moz-box-sizing:border-box;
        box-sizing:border-box;
        min-height:100%
    }
    .section-wrapper{
        padding:0 30px
    }
    .section{
        padding:20px 0;
        position:relative
    }
    .application .section{
        max-width:760px;
        padding-left:0;
        padding-right:0
    }
    .accent-section{
        background:#fff
    }
    .accent-section.small-accent{
        padding:0 30px
    }
    .accent-section .posting-categories{
        margin:20px 0
    }
    .accent-section .posting-category{
        font-size:14px;
        display:inline-block;
        margin-right:10px
    }
    .sort-category,.template-btn,.template-btn-utility{
        font:normal 700 14px/1.4 Lato;
        text-transform:uppercase;
        letter-spacing:2px;
        text-align:center;
        -webkit-border-radius:3px;
        border-radius:3px;
        color:#fff;
        background:#00a1dc;
        height:auto;
        position:relative;
        display:inline-block;
        margin:0;
        font-size:14px;
        font-weight:400;
        line-height:1.33;
        padding:10px 15px;
        text-align:center;
        white-space:nowrap;
        vertical-align:middle;
        cursor:pointer;
        border:1px solid #dcdcdc;
        -webkit-border-radius:3px;
        border-radius:3px;
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
        -webkit-appearance:none;
        -moz-appearance:none;
        appearance:none
    }
    .sort-category .default-label,.sort-category .filename,.template-btn .default-label,.template-btn .filename,.template-btn-utility .default-label,.template-btn-utility .filename{
        line-height:1.33;
        display:block;
        overflow:hidden
    }
    .sort-category:focus,.sort-category:visited,.template-btn-utility:focus,.template-btn-utility:visited,.template-btn:focus,.template-btn:visited{
        color:#fff
    }
    .sort-category .icon>svg,.template-btn .icon>svg,.template-btn-utility .icon>svg{
        fill:#fff
    }
    .sort-category:hover,.template-btn-utility:hover,.template-btn:hover{
        color:#fff
    }
    .sort-category:active,.sort-category:focus,.template-btn-utility:active,.template-btn-utility:focus,.template-btn:active,.template-btn:focus{
        background:#00709a
    }
    .sort-category,.template-btn-utility{
        background:#ebecf0;
        color:#9696a2;
        border:1px solid #dfe0e4
    }
    .sort-category>svg,.template-btn-utility>svg{
        fill:#9696a2
    }
    .sort-category:visited,.template-btn-utility:visited{
        color:#9696a2;
        background:#ebecf0
    }
    .sort-category:hover,.template-btn-utility:hover{
        background:#dfe0e4;
        color:#5a5a61
    }
    .sort-category:active,.sort-category:focus,.template-btn-utility:active,.template-btn-utility:focus{
        background:#d3d4d8;
        color:#5a5a61
    }
    .sort-category .icon,.template-btn .icon,.template-btn-utility .icon{
        position:absolute;
        left:15px;
        top:calc(50% - 8px)
    }
    .main-header{
        background:#fff;
        color:#515357
    }
    .main-header .section,.main-header.section-wrapper{
        padding-top:0;
        padding-bottom:0
    }
    .main-header .main-header-content{
        display:block;
        height:100%;
        margin:0 auto;
        color:#515357
    }
    .main-header{
        top:0;
        height:70px
    }
    @media screen{
        .main-header{
            position:fixed;
            z-index:100;
            top:0;
            overflow:hidden
        }
    }
    .posting-header h2{
        margin-top:0
    }
    .medium-utility-label,.small-utility-label{
        color:grey;
        font:normal 700 16px/1.4 Lato;
        letter-spacing:1px;
        text-transform:uppercase
    }
    .small-utility-label{
        font-size:12px;
        line-height:1.4
    }
    .medium-category-label,.small-category-label{
        color:grey;
        font:normal 700 24px/1.4 Lato;
        letter-spacing:1px;
        text-transform:uppercase
    }
    .medium-category-label{
        font-size:14px
    }
    .small-category-label{
        font-size:12px;
        line-height:1.4
    }
    .error-section{
        text-align:center
    }
    .application .application-label{
        font-size:16px;
        line-height:1.4;
        vertical-align:middle;
        width:100%
    }
    .application .application-label label{
        position:relative
    }
    .application .application-field{
        position:relative;
        -webkit-box-sizing:border-box;
        -moz-box-sizing:border-box;
        box-sizing:border-box
    }
    .application .application-field input[type=email],.application .application-field input[type=tel],.application .application-field input[type=text]{
        display:inline-block;
        width:100%
    }
    .application .application-field input[type=email][disabled],.application .application-field input[type=tel][disabled],.application .application-field input[type=text][disabled]{
        background-color:#e2e2e2
    }
    .application .application-field input[type=checkbox],.application .application-field input[type=radio]{
        cursor:pointer;
        outline:0
    }
    .application .application-field label{
        padding-left:40px;
        position:relative;
        cursor:pointer
    }
    .application .application-field input[type=radio]{
        -webkit-appearance:none;
        -moz-appearance:none;
        appearance:none;
        width:20px;
        height:20px;
        -webkit-border-radius:10px;
        border-radius:10px;
        position:relative;
        border:1px solid #e2e2e2
    }
    .application .application-field input[type=radio]:active{
        background:#ebecf0
    }
    .application .application-field input[type=radio]:checked::after{
        position:absolute;
        content:"";
        height:20px;
        width:20px;
        left:0;
        top:0;
        -webkit-border-radius:10px;
        border-radius:10px;
        background-color:#00a1dc
    }
    .application .application-field input[type=checkbox]:checked+span,.application .application-field input[type=radio]:checked+span{
        color:#515357
    }
    .application .application-field input[type=checkbox]{
        width:20px;
        height:20px;
        border:1px solid #e2e2e2;
        -webkit-appearance:none;
        -moz-appearance:none;
        appearance:none
    }
    .application .application-field input[type=checkbox]:active{
        background:#ebecf0
    }
    .application .application-field input[type=checkbox]:checked::after{
        position:absolute;
        content:"";
        left:15%;
        top:-10%;
        height:40%;
        width:90%;
        border-bottom:4px solid #00a1dc;
        border-left:4px solid #00a1dc;
        -webkit-transform:rotate(-45deg);
        -moz-transform:rotate(-45deg);
        -o-transform:rotate(-45deg);
        -ms-transform:rotate(-45deg);
        transform:rotate(-45deg)
    }
    .application .application-field input[type=checkbox],.application .application-field input[type=radio]{
        position:absolute;
        left:10px;
        top:2px
    }
    .application .application-field input[type=file]{
        position:absolute;
        opacity:0;
        top:0;
        left:0
    }
    .application .error-message{
        background:#ff794f;
        color:#fff;
        -webkit-border-radius:3px;
        border-radius:3px;
        padding:5px 15px;
        width:700px;
        max-width:100%
    }
    .resume-upload-failure,.resume-upload-success,.resume-upload-working{
        display:none;
        cursor:default;
        position:absolute;
        top:0;
        left:260px
    }
    .resume-upload-working{
        cursor:wait
    }
    .resume-upload-success{
        -webkit-animation-timing-function:ease-in;
        -webkit-animation-duration:1s;
        -webkit-animation-name:fadein
    }
    .resume-upload-failure{
        -webkit-animation-timing-function:ease-in;
        -webkit-animation-duration:4s;
        -webkit-animation-name:fadeout;
        opacity:0;
        display:none
    }
    .resume-upload-failure .resume-upload-label{
        opacity:.5
    }
    .resume-upload-oversize{
        position:relative;
        display:none
    }
    .resume-upload-label{
        position:absolute;
        line-height:40px;
        display:inline-block;
        height:40px;
        margin-left:15px;
        width:230px
    }
    .loading-indicator{
        display:inline-block;
        opacity:.8;
        -webkit-border-radius:40px;
        border-radius:40px;
        -webkit-animation:loading 1.5s infinite linear;
        -moz-animation:loading 1.5s infinite linear;
        -o-animation:loading 1.5s infinite linear;
        -ms-animation:loading 1.5s infinite linear;
        animation:loading 1.5s infinite linear;
        border:6px solid #00a1dc;
        border-top:6px solid transparent;
        border-left:6px solid transparent;
        width:40px;
        height:40px
    }
    .loading-indicator.completed{
        border-left:6px solid #515357;
        border-right:6px solid #515357;
        border-top:6px solid #515357;
        border-bottom:6px solid #515357;
        -webkit-animation:none;
        -moz-animation:none;
        -o-animation:none;
        -ms-animation:none;
        animation:none;
        text-align:center
    }
    .application-form h4{
        margin:40px 0
    }
    @-moz-keyframes fadein{
        0%{
            opacity:0
        }
        70%{
            opacity:0
        }
        100%{
            opacity:1;
            -ms-filter:none;
            filter:none
        }
    }
    @-webkit-keyframes fadein{
        0%{
            opacity:0
        }
        70%{
            opacity:0
        }
        100%{
            opacity:1;
            -ms-filter:none;
            filter:none
        }
    }
    @-o-keyframes fadein{
        0%{
            opacity:0
        }
        70%{
            opacity:0
        }
        100%{
            opacity:1;
            -ms-filter:none;
            filter:none
        }
    }
    @keyframes fadein{
        0%{
            opacity:0
        }
        70%{
            opacity:0
        }
        100%{
            opacity:1;
            -ms-filter:none;
            filter:none
        }
    }
    @-moz-keyframes fadeout{
        0%{
            opacity:1;
            -ms-filter:none;
            filter:none
        }
        80%{
            opacity:1;
            -ms-filter:none;
            filter:none
        }
        100%{
            opacity:0
        }
    }
    @-webkit-keyframes fadeout{
        0%{
            opacity:1;
            -ms-filter:none;
            filter:none
        }
        80%{
            opacity:1;
            -ms-filter:none;
            filter:none
        }
        100%{
            opacity:0
        }
    }
    @-o-keyframes fadeout{
        0%{
            opacity:1;
            -ms-filter:none;
            filter:none
        }
        80%{
            opacity:1;
            -ms-filter:none;
            filter:none
        }
        100%{
            opacity:0
        }
    }
    @keyframes fadeout{
        0%{
            opacity:1;
            -ms-filter:none;
            filter:none
        }
        80%{
            opacity:1;
            -ms-filter:none;
            filter:none
        }
        100%{
            opacity:0
        }
    }
    @-moz-keyframes loading{
        0%{
            -webkit-transform:rotate(0);
            -moz-transform:rotate(0);
            -o-transform:rotate(0);
            -ms-transform:rotate(0);
            transform:rotate(0)
        }
        100%{
            -webkit-transform:rotate(360deg);
            -moz-transform:rotate(360deg);
            -o-transform:rotate(360deg);
            -ms-transform:rotate(360deg);
            transform:rotate(360deg)
        }
    }
    @-webkit-keyframes loading{
        0%{
            -webkit-transform:rotate(0);
            -moz-transform:rotate(0);
            -o-transform:rotate(0);
            -ms-transform:rotate(0);
            transform:rotate(0)
        }
        100%{
            -webkit-transform:rotate(360deg);
            -moz-transform:rotate(360deg);
            -o-transform:rotate(360deg);
            -ms-transform:rotate(360deg);
            transform:rotate(360deg)
        }
    }
    @-o-keyframes loading{
        0%{
            -webkit-transform:rotate(0);
            -moz-transform:rotate(0);
            -o-transform:rotate(0);
            -ms-transform:rotate(0);
            transform:rotate(0)
        }
        100%{
            -webkit-transform:rotate(360deg);
            -moz-transform:rotate(360deg);
            -o-transform:rotate(360deg);
            -ms-transform:rotate(360deg);
            transform:rotate(360deg)
        }
    }
    @keyframes loading{
        0%{
            -webkit-transform:rotate(0);
            -moz-transform:rotate(0);
            -o-transform:rotate(0);
            -ms-transform:rotate(0);
            transform:rotate(0)
        }
        100%{
            -webkit-transform:rotate(360deg);
            -moz-transform:rotate(360deg);
            -o-transform:rotate(360deg);
            -ms-transform:rotate(360deg);
            transform:rotate(360deg)
        }
    }
    @media screen and (min-width:800px){
        .application .application-field,.application .application-label{
            display:inline-block
        }
        .application .application-label{
            width:210px
        }
        .application .application-label.full-width{
            width:100%
        }
        .application .application-field{
            padding-left:15px;
            width:489px
        }
        .application .application-field.full-width{
            padding-left:0;
            width:100%
        }
    }
    @media print{
        .postings-btn{
            display:none!important
        }
    }
    .invisible-resume-upload{
        position:absolute;
        top:0;
        left:0;
        opacity:0;
        cursor:pointer
    }
    table,
    td {
        border: 1px solid #333;
        padding: 4px;
    }

    th {
        font-size: 20px;
        text-align: center;
        font-family: unset;
        text-transform: capitalize;
    }

    #results-employment th {
        font-size: 18px;
    }

    .category {
        background: lightgray;
    }
</style>
    `
);
