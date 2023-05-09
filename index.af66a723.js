const x=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))m(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&m(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function m(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}};x();class r extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --width: var(--cover-size);
        --height: var(--cover-size);
        --shadow-gradient: linear-gradient(to left, #fff6 -3%, transparent 2% 98%, #0009 104%);
        --cover-vinyl: linear-gradient(
          145deg,
          #fff 40%,
          #D3274D 40.25% 45%,
          #DE5737 45.25% 50%,
          #EA8F26 50.25% 55%,
          #EFB631 55.25% 60%,
          #1E1F21 60%
        );
        --cover-padding: 6px 16px;
        font-size: 16px;
      }

      .container {
        width: var(--width);
        height: var(--height);
        background: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        box-shadow:
          0 0 80px #000c inset,
          0 0 10px #0007;

        background:
          url(/asfalt-dark.png),
          var(--shadow-gradient),
          var(--cover-vinyl);
      }

      h1 {
        font-family: "Roboto";
        font-weight: 900;
        letter-spacing: -3px;
        font-size: 5rem;
        color: #222;
        margin: 0;
        margin-bottom: -16px;
        padding: 0;
      }

      h1 span {
        font-weight: 900;
        font-size: 5rem;
        display: inline-block;
        transform: translateX(-5px);
      }

      span {
        font-family: "Roboto";
        font-weight: 300;
        font-size: 1.5rem;
        letter-spacing: -1px;
        color: #CC6D4D;
        padding-left: 4px;
      }

      footer {
        align-self: flex-end;
        padding: 24px;
      }

      .brand {
        font-family: "Lester Bold";
        font-size: 2rem;
        border: 1px solid #872B36;
        border-radius: 2px;
        padding: 0 3px;
        color: #872B36;
        text-shadow: 0 0 1px #872b36;
      }

      .normal {
        font-family: "Roboto";
        font-weight: 400;
        display: block;
        font-size: 1.1rem;
        color: #555a;
      }

      .group {
        padding: var(--cover-padding);
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${r.styles}</style>
    <div class="container">
      <div class="group">
        <h1>HTML<span>5</span></h1>
        <span>&lt;Remarkable Hits&gt;</span>
        <span class="normal">Close your <strong>tags</strong></span>
        <span class="normal">Vinyl Disc</span>
      </div>
      <footer>
        <div class="brand">W3C</div>
      </footer>
    </div>`}}customElements.define("cover-html",r);class n extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --width: var(--cover-size);
        --height: var(--cover-size);
        --shadow-gradient: linear-gradient(to left, #fff6 -3%, transparent 2% 98%, #0009 104%);
        --cover-vinyl:
          linear-gradient(to bottom, #222 0% 29%, transparent 29% 80%, #222 80% 100%),
          linear-gradient(to right, #222 0% 10%, transparent 10% 90%, #222 90% 100%),
          linear-gradient(
            130deg,
            #222 30%,
            #37B4F6 30% 35%,
            #222 35% 40%,
            #4D8CE9 40% 45%,
            #5D5EDC 45% 55%,
            #6B36CC 55% 65%,
            #C9CDD0 65% 75%,
            #679FB8 75% 76%,
            #C9CDD0 76% 86%,
            #679FB8 86% 86.5%,
            #C9CDD0 86.5% 100%
          );
        --cover-padding: 10px 25px;
      }

      h1 {
        font-family: "Roboto";
        font-weight: 700;
        letter-spacing: -3px;
        font-size: 5rem;
        color: #ccc;
        margin: 0;
        margin-bottom: -16px;
        padding: 0;
      }

      h1 span {
        font-size: 3.5rem;
        display: inline-block;
        transform: rotate(20deg);
        font-weight: bold;
        color: #555;
      }

      .subtitle {
        font-family: "Roboto";
        font-size: 1rem;
        font-weight: 700;
        padding-top: 3px;
        color: #795A9D;
      }

      .container {
        width: var(--width);
        height: var(--height);
        background: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        box-shadow:
          0 0 80px #000c inset,
          0 0 10px #0007;

        background:
          url(/asfalt-dark.png),
          var(--shadow-gradient),
          var(--cover-vinyl);
      }

      span {
        font-family: "Roboto";
        font-weight: 300;
        font-size: 1.5rem;
        letter-spacing: -1px;
        color: #CC6D4D;
        padding-left: 4px;
      }

      footer {
        align-self: flex-end;
        padding: 24px;
      }

      .brand {
        font-family: "Lester Bold";
        font-size: 2rem;
        border: 1px solid #872B36;
        border-radius: 2px;
        padding: 0 3px;
        color: #872B36;
        text-shadow: 0 0 1px #872b36;
      }

      .normal {
        font-family: "Roboto";
        font-weight: 400;
        display: block;
        font-size: 1rem;
        color: #444a;
      }

      .group {
        padding: var(--cover-padding);
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${n.styles}</style>
    <div class="container">
      <div class="group">
        <h1>CSS<span>3</span></h1>
        <div class="subtitle">THE JOURNING OF CENTERING</div>
      </div>
      <div class="middle">
        <span class="text"></span>
      </div>
      <footer>
        <div class="brand">W3C</div>
      </footer>
    </div>`}}customElements.define("cover-css",n);class l extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --size: 200px;

        width: var(--size);
        height: var(--size);
      }

      .container {
        width: 100%;
        height: 100%;
        background: linear-gradient(to right,
          #fff9 0 10%,
          #fff8 10% 20%,
          #fff7 20% 30%,
          #fff6 30% 40%,
          #fff5 40% 50%,
          #fff4 50% 60%,
          #fff3 60% 70%,
          #fff2 70% 80%,
          #fff1 80% 90%,
          #fff0 90% 100%
        ), linear-gradient(to top,
          #f22d 0 10%,
          #f22c 10% 20%,
          #f22b 20% 30%,
          #f22a 30% 40%,
          #f229 40% 50%,
          #f228 50% 60%,
          #f227 60% 70%,
          #f226 70% 80%,
          #f225 80% 90%,
          #f224 90% 100%
        );
        background-color: #000;
        box-shadow:
        0 0 60px #000c inset;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${l.styles}</style>
    <div class="container">
    </div>`}}customElements.define("retro-square",l);class s extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --width: var(--cover-size);
        --height: var(--cover-size);
        --cover-vinyl: linear-gradient(200deg, #0e121f 50%, #112, #282846, #1e1e41 90% 100%);
        --stripe-gradient: repeating-linear-gradient(230deg, #1116 0 1px, transparent 4px 10px);
        --cover-padding: 10px 25px;
      }

      .container {
        width: 100%;
        height: 100%;
        background:
          url(asfalt-dark.png),
          var(--stripe-gradient),
          var(--cover-vinyl);
        box-shadow:
          0 0 150px #0006 inset,
          0 0 10px #0007;

        font-family: "Lexend";
        color: #fff;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        position: relative;
        overflow: hidden;
      }

      .title {
        text-align: center;
        transform: translate(0, -75%);
      }

      h1 {
        margin: 0;
        font-size: 4.25rem;
        font-weight: 900;
        letter-spacing: -1px;
        position: relative;
        z-index: 5;
      }

      .subtitle {
        font-family: "Lexend";
        font-size: 1.15rem;
        font-weight: 900;
        letter-spacing: -1px;
        color: gold;
        position: relative;
        z-index: 5;
      }

      .subtitle em {
        color: orange;
      }

      retro-square {
        position: absolute;
        transform: translate(0%, -20%) rotate(45deg);
      }

      .triangle {
        background: #fff5ee;
        width: 150px;
        height: 150px;
        border-radius: 20px;
        position: absolute;
        bottom: -100px;
        transform: scaleX(-0.7) rotate(45deg);
      }

      footer {
        font-family: "Lexend";
        letter-spacing: -1px;
        color: #bf4040;
        font-size: 1.2rem;
        position: absolute;
        bottom: 10px;
        right: 15px;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${s.styles}</style>
    <div class="container">
      <retro-square></retro-square>
      <div class="title">
        <h1>PostCSS</h1>
        <div class="subtitle">BACK TO THE FUTURE <em>(with plugins)</em></div>
      </div>
      <div class="triangle"></div>
      <footer>
        Evil Martians
      </footer>
    </div>`}}customElements.define("cover-postcss",s);class c extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --width: var(--cover-size);
        --height: var(--cover-size);
        --shadow-gradient: linear-gradient(to left, #fff6 -3%, transparent 2% 98%, #0009 104%);
        --cover-vinyl:
          linear-gradient(150deg,
            #403B38 20%, #FFC843 20.25% 21%,
            #403B38 21.25% 22.75%, #FFC843 23% 24%,
            #403B38 24% 25%, #FFC843 25.25% 27%,
            #403B38 27% 27.75%, #FFC843 28% 30%,
            #403B38 30.25% 31%, #FFC843 31.25% 35%,
            #403B38 35% 35.5%, #FFC843 35.75% 40%,
            #403B38 40.25% 40.5%, #FFC843 40.75% 41%,
            transparent 41%);
        --cover-padding: 10px 25px;
      }

      .container {
        width: var(--width);
        height: var(--height);
        background: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        box-shadow:
          0 0 80px #000c inset,
          0 0 10px #0007;

        background:
          url(/asfalt-dark.png),
          var(--shadow-gradient),
          var(--cover-vinyl);
        background-color: #EAAD3A;

        overflow: hidden;
      }

      .group {
        transform: rotate(-30deg) translate(-50px, 130px);
      }

      h1 {
        font-family: "Roboto";
        font-weight: 900;
        font-size: 4.5rem;
        color: #332F2C;
        margin: 0;
      }

      h3 {
        font-family: "Roboto";
        font-weight: 600;
        color: #AE3514;
        letter-spacing: -2px;
        font-size: 2.25rem;
        margin: 0;
        text-align: left;
        line-height: 60%;
        padding-right: 0.5em;
      }

      .brand {
        font-family: "Lester Bold";
        font-size: 2rem;
        border: 1px solid #403B38;
        border-radius: 2px;
        padding: 0 2px;
        margin: 0.5em;
        color: #403B38;
        text-shadow: 0 0 1px #403B38;
        display: inline-block;
        float: right;
      }

      .rect {
        background: #262321;
        width: 80px;
        height: 120px;
        border-radius: 4px;
        position: absolute;
        right: 0;
        top: 175px;
        transform: translate(58px, 0) rotate(-30deg);
        color: #EAAD3A;
        font-family: Roboto;
        font-size: 1.25rem;
        padding: 8px;
      }

      .text {
        font-family: "Roboto Mono";
        font-weight: 800;
        font-size: 1.2rem;
        float: right;
        letter-spacing: -1px;
        color: #333;
        padding: 10px 15px;
      }

      .group {
        padding: var(--cover-padding);
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${c.styles}</style>
    <div class="container">
      <div class="group">
        <h1>Javascript</h1>
        <h3>ECMAScript</h3>
      </div>
      <div class="rect">TC39</div>
      <footer>
        <div class="text">Untyped language</div>
      </footer>
    </div>`}}customElements.define("cover-js",c);class d extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --width: var(--cover-size);
        --height: var(--cover-size);
        --shadow-gradient: linear-gradient(to left, #fff6 -3%, transparent 2% 98%, #0009 104%);
        --cover-vinyl: linear-gradient(
          140deg,
          transparent 0 45%,
          #141 45.25% 50%,
          #171 50.25% 55%,
          #191 55.25% 60%,
          #1c1 60.25% 65%,
          transparent 65.25%);
        --cover-padding: 10px 25px;
      }

      .container {
        width: var(--width);
        height: var(--height);
        background: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        box-shadow:
          0 0 80px #000c inset,
          0 0 10px #0007;

        background:
          url(/asfalt-dark.png),
          var(--shadow-gradient),
          var(--cover-vinyl);
        background-color: #111;

        overflow: hidden;
      }

      h1, h2 {
        font-family: "Roboto Mono";
        letter-spacing: -2px;
        line-height: 100%;
        text-align: left;
        color: #eee;
        margin: 0;
      }

      .group {
        margin: 25px 10px;
        padding: var(--cover-padding);
      }

      h1 {
        font-size: 3.5rem;
        font-size: 6rem;
        letter-spacing: -8px;
        color: #fff;
      }

      h2 {
        font-size: 2.25rem;
        color: #777;
      }

      footer {
        display: flex;
        justify-content: flex-end;
        padding: 40px 25px;
      }

      footer .text {
        font-family: "EnterCommand";
        letter-spacing: 0px;
        font-size: 2.2rem;
        line-height: 100%;
        text-align: left;
        color: #707070;
        margin: 0;
        transform: translate(-10px, 10px);
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${d.styles}</style>
    <div class="container">
      <div class="group">
        <h2>Terminal de</h2>
        <h1>Linux</h1>
      </div>
      <footer>
        <div class="text">$ su manzdev</div>
      </footer>
    </div>`}}customElements.define("cover-terminal",d);class f extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --width: var(--cover-size);
        --height: var(--cover-size);
        --cover-vinyl:
          linear-gradient(to bottom, #234 0% 29%, #234 80% 100%);
        --cover-padding: 10px 25px;
        --vue-green: #42b883;
        --vue-grey: #35495e;
      }

      .container {
        width: 100%;
        height: 100%;
        background: url(asfalt-dark.png), var(--cover-vinyl);
        box-shadow:
          0 0 80px #000c inset,
          0 0 10px #0007;
      }

      .vue-form-container {
        width: 350px;
        height: 275px;
        margin: auto;
        background: linear-gradient(#236c4b, #54efaa, #c3eedb);
        clip-path: polygon(0 0, 50% 100%, 100% 0);
      }

      .vue-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: var(--vue-grey);
        width: 200px;
        height: 225px;
        margin: auto;
        clip-path: polygon(0 0, 50% 100%, 100% 0);
      }

      .vue-form .title {
        font-family: "Kemco Smooth";
        color: #eee;
      }

      .vue-form .subtitle {
        font-family: "Roboto Mono";
        font-size: 1.75rem;
        color: #ccc;
        margin: 0;
      }

      .title {
        transform: scaleX(0.7);
        font-size: 4.75rem;
        margin: 20px 0;
      }

      .subtitle {
        font-size: 1.5rem;
        margin: 20px 0;
      }

      footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 3rem;
        color: #eee;
        position: absolute;
        bottom: 0;
        width: 100%;
        margin-bottom: 25px;
      }

      footer .subtitle {
        margin: 0;
        font-family: "squarified";
        font-size: 2rem;
        text-align: center;
        color: var(--vue-green);
        margin-bottom: 20px;
      }

      footer .subtitle span {
        color: #00d8ff;
      }

      footer .brand {
        font-family: "Inero";
        margin: 0;
        line-height: 60%;
        font-size: 2rem;
        border: 1px solid #fff;
        padding: 0 8px 8px 8px;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${f.styles}</style>
    <div class="container">
      <div class="vue-form-container">
        <div class="vue-form">
          <span class="title">Vue</span>
          <span class="subtitle">3.0</span>
        </div>
      </div>
      <footer>
        <div class="subtitle">Framework with <span>React</span>ivity</div>
        <div class="brand">Evan You</div>
      </footer>
    </div>`}}customElements.define("cover-vue",f);class h extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --width: var(--cover-size);
        --height: var(--cover-size);
        --cover-vinyl:
          linear-gradient(to bottom, #222 0% 29%, #222 80% 100%);
        --cover-padding: 10px 25px;
      }

      .container {
        width: 100%;
        height: 100%;
        background: url(asfalt-dark.png), var(--cover-vinyl);
        box-shadow:
          0 0 80px #000c inset,
          0 0 10px #0007;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 150px 1fr 100px;
        justify-content: space-between;
      }

      header {
        background: #131313;
        position: relative;
        padding: 12px;
      }

      header .title {
        font-family: "Roboto Mono";
        font-weight: 800;
        font-size: 3.2rem;
        letter-spacing: -2px;
        color: #fff;
        position: absolute;
        bottom: 0;
        transform: translate(0, 10px);
      }

      .bands {
        background: linear-gradient(to top,
          #d9ed92 20%,
          #99d98c 20% 40%,
          #52B69A 40% 60%,
          #168aad 60% 80%,
          #1e6091 80% 100%
        );
      }

      footer {
        background: #131313;
        padding: 8px 15px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
      }

      footer .subtitle {
        font-family: "Roboto Mono";
        font-weight: bold;
        font-size: 1.25rem;
        letter-spacing: -1px;
        color: #c7cfd2;
      }

      .brand {
        display: inline-block;
        font-family: "Lester Bold";
        font-size: 4.8rem;
        padding: 0 4px;
        letter-spacing: -5px;

        color: #BF4D3B;
        text-shadow: 0 0 1px #872b36;

        position: absolute;
        top: 3px;
        right: 10px;
      }

      .brand::before {
          content:'';
          width:100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          background-image: radial-gradient(5px 5px, transparent 50%, #131313 51%);
          background-size: 7px 7px;
      }

      .brand::after {
        content :"";
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        background: linear-gradient(to right, #131313 0%, transparent);
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${h.styles}</style>
    <div class="container">
      <header>
        <div class="title">WebComponents</div>
        <div class="brand">W3C</div>
      </header>
      <div class="bands">
      </div>
      <footer>
        <div class="subtitle">HTML, CSS & Javascript</div>
      </footer>
    </div>`}}customElements.define("cover-webcomponents",h);class p extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --width: var(--cover-size);
        --height: var(--cover-size);
        --bgcolor: #201d30;
        --primary-font: "Russo One";
        --cover-vinyl: linear-gradient(
          to bottom,
          var(--bgcolor) 0% 29%,
          var(--bgcolor) 80% 100%
        );
        --cover-padding: 10px 25px;
        --offset: 8;
        --circle-gradient: radial-gradient(
          circle at 100% 100%,
          #cf3c7b calc(var(--offset) * 0%) calc((var(--offset) * 0%) + (var(--offset) * 1%) - 0.25%),
          #9847ee calc(var(--offset) * 1%) calc((var(--offset) * 1%) + (var(--offset) * 1%) - 0.25%),
          #611bc2 calc(var(--offset) * 2%) calc((var(--offset) * 2%) + (var(--offset) * 1%) - 0.25%),
          #433884 calc(var(--offset) * 3%) calc((var(--offset) * 3%) + (var(--offset) * 1%) - 0.25%),
          #27215f calc(var(--offset) * 4%) calc((var(--offset) * 4%) + (var(--offset) * 1%) - 0.25%),
          transparent calc(var(--offset) * 5%) 100%
        );
      }

      .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background:
          var(--circle-gradient),
          url(asfalt-dark.png),
          var(--cover-vinyl);
        box-shadow:
          0 0 80px #000c inset,
          0 0 10px #0007;

        & .line {
          display: flex;
          justify-content: space-between;

          background: white;
          width: 100%;
          height: 25px;

          & .dot-container {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            margin-left: 5%;
            width: 20%;
            height: 100%;

            & .dot {
              --size: 10px;

              width: var(--size);
              height: var(--size);
              border-radius: 50%;
              background: #d0407b;
            }
          }

          & .box-container {
            display: flex;

            width: 45%;
            height: 100%;

            & .box {
              width: 100%;
              height: 100%;
              background: var(--color);
            }

            & :nth-child(1) { --color: #cf3c7a; }
            & :nth-child(2) { --color: #9847ee; }
            & :nth-child(3) { --color: #5e1bc1; }
            & :nth-child(4) { --color: #423a83; }
            & :nth-child(5) {
              width: 300%;
              --color: #272161;
            }
          }
        }

        & .middle {
          width: 75%;
          height: 75%;

          display: flex;
          flex-direction: column;
          padding-top: 1.5rem;

          & .top h1 {
            font-family: var(--primary-font);
            font-variant: small-caps;
            font-size: 3.25rem;
            font-weight: 600;
            color: #d03d7c;
            margin: 0;
            line-height: 80%;
          }

          & .top h2 {
            font-family: var(--primary-font);
            font-size: 1.75rem;
            font-weight: 300;
            letter-spacing: 0.5px;
            line-height: 100%;
            color: #e5c37f;
            margin: 0;
          }

          & .top h3 {
            font-family: "Lexend";
            font-size:1rem;
            color: #fff;
            margin: 0;
            margin-top: 1rem;
            line-height: 120%;
          }

          & .box {
            --size: 25px;

            margin-top: calc(var(--size) * 1);
            margin-left: calc(var(--size) * 2);

            width: var(--size);
            height: var(--size);
            background: #9847ee;
            box-shadow:
              calc(var(--size) * -1) calc(var(--size) * 1) #e2c478,
              calc(var(--size) * -2) calc(var(--size) * 2) #dba25d,
              calc(var(--size) * -1) calc(var(--size) * 3) #cf3c7a
          }
        }
      }


    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${p.styles}</style>
    <div class="container">
      <div class="line">
        <div class="dot-container">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        <div class="box-container">
          <div class="box"></div>
          <div class="box"></div>
          <div class="box"></div>
          <div class="box"></div>
          <div class="box large"></div>
        </div>
      </div>
      <div class="middle">
        <div class="top">
          <h1>Fundamentos</h1>
          <h2>de programaci\xF3n</h2>
          <h3>Bases y pilares de desarrollo para aprender a programar</h3>
        </div>
        <div class="bottom">
          <div class="box"></div>
        </div>
      </div>
    </div>`}}customElements.define("cover-fundamentos",p);class v extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --width: var(--cover-size);
        --height: var(--cover-size);
        --bgcolor: #000;
        --lines-gradient:
          repeating-linear-gradient(transparent 0 3%, #0d1015 3% 3.5%);
        --cover-vinyl:
          linear-gradient(to bottom, var(--bgcolor) 0% 29%, var(--bgcolor) 80% 100%);
        --cover-padding: 10px 25px;
        --white-gradient:
          linear-gradient(
            to bottom,
            #ffffff 0 20%,
            #dddddd 20% 40%,
            #bbbbbb 40% 60%,
            #999999 60% 80%,
            #777777 80% 100%
          );
        --rainbow-gradient:
          linear-gradient(
            to bottom,
            #fec803 0 20%,
            #ff6701 20% 40%,
            #ff0028 40% 60%,
            #b401d6 60% 80%,
            #4c00ba 80% 100%
          );
      }

      .container::after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        background:
          linear-gradient(-29deg, transparent 20%, #2225 40% 60%, transparent 80%),
          radial-gradient(transparent 70%, #2227 98%);
      }

      .container {
        --offset: 2.5rem;

        width: 100%;
        height: 100%;
        background:
          var(--lines-gradient),
          var(--cover-vinyl);
        background-blend-mode: screen;
        box-shadow:
          0 0 80px #000c inset,
          0 0 10px #0007;

        display: flex;
        flex-direction: column;

        & .top {
          width: 75%;
          height: 45%;
          position: absolute;
          z-index: 5;

          & h1 {
            font-family: "Lexend";
            font-size: 6.5rem;
            letter-spacing: -5px;
            line-height: 100%;
            color: #fff;
            margin: 0;
            margin-top: calc(var(--offset) * 0.5);
            margin-left: var(--offset);
          }

          & h2 {
            font-family: "Lexend";
            font-size: 1.2rem;
            color: #fff;
            margin: 0;
            margin-left: var(--offset);
          }

          & h3 {
            font-family: "Victor Mono";
            font-size: 1.5rem;
            font-weight: 400;
            letter-spacing: -1px;
            color: #fff;
            margin: 0;
            margin-top: 0.5rem;
            background: #4c00ba;
            padding: 0 var(--offset);
            width: 60%;
          }
        }

        & .side-rainbow {
          width: 15px;
          height: 115px;
          position: absolute;
          top: 25px;
          right: -15px;
          transform-origin: 0 0;
          background: var(--white-gradient);
          rotate: 90deg;
        }

        & .middle {
          margin-top: 36%;
          height: 33.5%;
          display: flex;
          align-items: end;
          position: relative;

          & .horizontal {
            background: var(--rainbow-gradient);
            width: 70%;
            height: 50%;
          }

          & .diagonal {
            background: var(--rainbow-gradient);
            width: 30%;
            height: 50%;
            transform-origin: 0 0;
            transform: skewY(-45deg);
          }
        }

        & .bottom {
          width: calc(100% - 75px);
          height: 30%;
          display: flex;
          justify-content: space-evenly;
          align-items: center;

          & .text {
            font-family: "Lexend";
            text-align: center;
            color: #888;
            border: 1px solid #888;
            border-radius: 5px;
            padding: 0 10px 10px;


            & h3 {
              font-size: 1.5rem;
              margin: 0;
            }

            & p {
              font-size: 1rem;
              margin: 0;
              line-height: 50%;
            }
          }
        }

        & footer {
          width: 25px;
          height: 110px;
          position: absolute;
          bottom: 0;
          right: 25px;
          background: linear-gradient(
            to top,
            #ffc900 0 20%,
            transparent 20% 30%,
            #ff6701 30% 45%,
            transparent 45% 55%,
            #ff0029 55% 65%,
            transparent 65% 75%,
            #ad0bcd 75% 80%,
            transparent 80% 90%,
            #410c94 90% 92.5%,
            transparent 92.5% 100%
          );
        }
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${v.styles}</style>
    <div class="container">
      <div class="side-rainbow"></div>
      <div class="top">
        <h1>SVG</h1>
        <h2>VECTOR IMAGES</h2>
        <h3>MANZ.DEV</h3>
      </div>
      <div class="middle">
        <div class="horizontal"></div>
        <div class="diagonal"></div>
      </div>
      <div class="bottom">
        <div class="text">
          <h3>HTML</h3>
          <p>Compatible</p>
        </div>
        <div class="text">
          <h3>W3C</h3>
          <p>Powered</p>
        </div>
        <footer></footer>
      </div>
    </div>`}}customElements.define("cover-svg",v);const b={html:`
  <svg viewBox="0 0 300 300">
    <path d="M50.362 263.638 28 12.747h245.983l-22.362 250.891L150.719 292" fill="#e34f26"/>
    <path d="m151.264 270.183 81.267-22.362 19.09-214.894H151.264" fill="#ef652a"/>
    <path d="M151.264 126.193h-40.906l-2.727-31.634h43.633V64.016H73.815l.545 8.181 7.636 85.085h69.268zm0 80.177h-.545l-34.361-9.273-2.182-24.543H83.633l3.817 48.542 63.269 17.453h.545z" fill="#ebebeb"/>
    <path d="M150.719 126.193v31.089h38.179l-3.818 39.815-34.361 9.273v32.18l63.268-17.454.546-5.454 7.09-81.267 1.09-8.182h-8.726zm0-62.177v30.543h74.722l.545-6.545 1.637-15.817.545-8.181z" fill="#fff"/>
  </svg>`,css:`
  <svg viewBox="0 0 300 300">
    <path d="M50.011 263.412 27.657 12.694h245.624L250.906 263.37l-100.587 27.886zm0 0" fill="#1572b6"/>
    <path d="m150.47 269.943 81.278-22.534L250.87 33.194h-100.4zm0 0" fill="#33a9dc"/>
    <path d="M150.47 124.028h40.69l2.809-31.489h-43.5V61.79h77.106l-.737 8.25-7.557 84.737h-68.812zm0 0" fill="#fff"/>
    <path d="m150.654 203.886-.135.037-34.246-9.247-2.19-24.523H83.217l4.307 48.28 62.988 17.486.142-.04zm0 0" fill="#ebebeb"/>
    <path d="m188.546 153.474-3.703 41.182-34.295 9.256v31.992l63.038-17.471.462-5.194 5.349-59.765zm0 0" fill="#fff"/>
    <path d="M150.576 61.79v30.75H76.303l-.618-6.912-1.401-15.588-.735-8.25zm-.106 62.242v30.749h-33.812l-.617-6.91-1.402-15.59-.735-8.25zm0 0" fill="#ebebeb"/>
  </svg>`,js:`
  <svg viewBox="0 0 126 126">
    <path d="M12.6 13h99.8v100H12.6z" fill="#f0db4f"/>
    <path d="M104.3 89c-.8-4.5-3.7-8.3-12.5-11.9-3-1.4-6.5-2.4-7.5-4.7-.4-1.4-.4-2.1-.2-3 .7-2.6 3.8-3.4 6.3-2.7a7 7 0 0 1 4 3.8l7.4-4.7a18.6 18.6 0 0 0-2.4-3.2c-2.6-2.9-6.1-4.4-11.8-4.3l-3 .4c-2.7.7-5.4 2.2-7 4.2A13 13 0 0 0 80 81.5c5.6 4.3 14 5.2 15 9.2 1 4.9-3.6 6.5-8.1 5.9-3.4-.7-5.3-2.4-7.3-5.6L72 95.4c.9 2 1.8 3 3.4 4.6 7.2 7.4 25.3 7 28.6-4 .1-.5 1-3 .3-7zM66.9 59h-9.4v24c0 5.2.2 10-.6 11.4-1.4 2.8-4.9 2.4-6.5 1.9a8 8 0 0 1-3.5-3.6l-.5-.8-7.6 4.6a15 15 0 0 0 5.5 6.3c3.6 2.2 8.4 2.8 13.4 1.7 3.2-1 6-3 7.5-6C67.3 94.7 67 90 67 84.7V59z" fill="#323330"/>
  </svg>`,postcss:`
  <svg viewBox="0 0 512 512">
    <path d="M248.32 1.895a96.6 96.6 0 0 0-.82.005 146 146 0 0 0-14.9 1.4c-4.8.5-9.5 1.4-14.2 2-5.6.8-11.3 1.1-16.9 1.8-5.3.7-10.9 1.7-16 2.6-1.9.3-3.8 1-5.7 1.3a108.4 108.4 0 0 0-12.5 2.6 336 336 0 0 0-22 7.5 201.5 201.5 0 0 0-19.4 9c-6.5 3.7-12.7 8-18.8 12-5.8 4-11.7 8.1-17.3 12.5a199.8 199.8 0 0 0-15.6 14c-2.7 2.6-5 5.9-7.5 9-4.3 5-8.6 9.7-12.7 14.8-3.4 4.3-6.5 8.8-9.7 13.2a218.3 218.3 0 0 0-15.4 24.6l-5.3 10.3c-2.6 5.1-5.3 10.1-7.7 15.4a65.2 65.2 0 0 0-4.1 11.5l-7 25.3a95.8 95.8 0 0 0-2.7 23 162.2 162.2 0 0 0 1.2 20.4c.2 1.7-.9 3.8 1.2 5.1.2 0 0 .7-.2.9a1.7 1.7 0 0 0 1 2.4.6.6 0 0 1 .2.3h-.8c-.5 1.5 1.2 2.7.5 4.5-.2.3.5 1 .8 1.5a5.8 5.8 0 0 0 0 1.7 39.5 39.5 0 0 1 .9 4.8c0 1.2 1 2.6 1.4 3.8a2 2 0 0 1-.4 1.7c-1 1.2-.8 2.2.7 2.9a2 2 0 0 1 .9 1.2 19.4 19.4 0 0 1-.5 3c.3.4.5.7.3 1-.2.4-.5 1.1-.3 1.5a22.6 22.6 0 0 1 2 8.8 6.6 6.6 0 0 0 .7 2.3 2.6 2.6 0 0 1 1 .1l-1 3.1a14.3 14.3 0 0 1 2.4-1 53.1 53.1 0 0 0 1.7 6.1 3 3 0 0 0 1 1c-.1.4-.1 1.1-.5 1.3a52 52 0 0 0 2.3 8.9l.5-.2-1.4-9.4v-1a1.8 1.8 0 0 1 .5-.2 11.9 11.9 0 0 1 .5 2c1.4 0 3.4.9 4.8.9a16 16 0 0 1 .5-1.6c-1-1-1.8-2.6-3-3.6a5.3 5.3 0 0 1 0 2.4c-.6-.4-1.5-.7-2.3-1a30.4 30.4 0 0 1 2.4-2.8c0-1.5-.9-2.9-3.3-2.7 1-.4 2-.9 3.3-1.2a11.8 11.8 0 0 0 .5 1.4c1.4-2.4-.7-4.3-.7-6.7a44.4 44.4 0 0 0-2-9c-.9-4.7-.7-11.9-1.2-16.7 0-.3-.5-.7-.9-1l-1.2 2.6 1.4 12.3c-.2 0-.3 0-.3.2l-2.3-11.5a19.8 19.8 0 0 0-.3 2.4l-1.6-.7 1.9 3.8a5.6 5.6 0 0 0-2.6-.4v4.8a23.2 23.2 0 0 1-3-4.3l-1-4 .6-.2a9.2 9.2 0 0 1-.5-1.7l-.5-4.2c.1-.1.8-.3 1.1-.6l-1.3-2a28 28 0 0 0 3 .3c0-.4.2-.6 0-.7-1.7-1.6-.5-3 .2-4.3.4-.7 1.5-.9 1.8-1.5 1.4-2.6 3.6-4.7 3.6-8a46.4 46.4 0 0 1 .7-4.7l.9-8.7a78.9 78.9 0 0 1 1-11 234.5 234.5 0 0 1 9.6-30.7 199 199 0 0 1 8.2-19.7c4.6-9.2 9.9-18 15-27.1 3.3-5.7 6.7-10.9 10.3-16.4 3.6-5.6 6.8-10.9 10.9-15.8a138.8 138.8 0 0 1 18-19.3c6.9-6.2 13.4-12.5 20.8-18.1a209.3 209.3 0 0 1 30.3-19.6 231.7 231.7 0 0 1 27-11.6c5.7-2.3 12-3.3 18-5.2a72 72 0 0 1 20.9-3.4c4.6-.2 9-.7 13.7-1.2l12.6-1.2a7.5 7.5 0 0 0-.8 1.4c-1.8 2.7-4 5.4-5.8 8.2l-4.8 6.8c-2.8 3.7-5.7 7.3-8.2 10.9-4 5.6-7.6 11.5-11.7 17.1-4 5.6-8.5 10.6-12.8 16-5.7 7.3-10.9 14.8-16.6 22.1-5.1 7-10.6 13.7-15.6 20.8-4.4 6.1-8.4 12.6-12.6 19l-19 28-15 21.4a4.1 4.1 0 0 1-1.5 1c-.3.4-1 .7-1 1a19.7 19.7 0 0 1-.8 3.5c-1.4 2.5-2.8 5.1-4.3 7.5-.9 1.4-2 2.6-3 4-.4-.2-.6-.4-1-.4.7-1.7 3.7-2.8 2.3-5.3l-2.6 4-2 4c.7.5 1.8.9.7 1.8l-1.6 2.8.4.1 1.5-1.8.5.2a25 25 0 0 1-2.4 4.8 13.8 13.8 0 0 1-3.6 3.4c.2.2 1.4.7 1.5.9.5-.7.7-.4 1.2-1 .4.4.9-.4 1 0a8 8 0 0 0 1.3-1.6 6.2 6.2 0 0 1 3.4-3.8 6.7 6.7 0 0 0 1.8-1.2c5-5.3 10.4-10.5 15-16.1 7.2-8.7 13.7-17.8 20.5-26.7 3-3.8 6.4-7.5 9.4-11.1l.9.3a230 230 0 0 0-.9 10.9l-1.3 19.1c-.2 2.6 0 5.2-.2 7.7 0 .7-.5 1.2-.5 1.8 0 1.8.5 3.7.5 5.4l-1.7 18.8a10.2 10.2 0 0 0 .8 3.9 4.7 4.7 0 0 0-.8-.7 188 188 0 0 1 .3 29.4c.7-.1 1-.3 1-.6a26 26 0 0 0 .6-3.7 20.5 20.5 0 0 0 0-3.2v-1.7a57.7 57.7 0 0 0 .5-9.4 32.1 32.1 0 0 1 .3-10c.4-1.3-.1-3 .7-4.7v2.5a239.4 239.4 0 0 1-1.2 29.3c-.2.8.5 2.4-1.4 2.2l-.7 1.4c-.8 1.7 1 3.9-.6 5.6-.4.4.3 1.8.5 3 0 .3.1.6 0 .8-.7 1.2-.7 1.2.3 1.4l.7 10.8h.5a127.8 127.8 0 0 0 2-19.9 67.8 67.8 0 0 1 .2 8.4l-.3 13.2a13.3 13.3 0 0 1-.4 2.5 46.3 46.3 0 0 1-1.5 7 19.2 19.2 0 0 0-.3 6.4v6.5c0 .2.5.7.5 1.4.1 1.5-.7 3-.2 4.8.2.3-.2.8-.4 1.2a2.4 2.4 0 0 0-.1 1.5l.5 2.6.3.7a5.4 5.4 0 0 0 .2-1.4c3 .3 1.4 2.9 2.7 4.2l-1.1.7a7.7 7.7 0 0 1 .5 1.8 39.1 39.1 0 0 1-.4 4.5l-.2 11.6.2 1.6-.2 1.2v3.6h.7a9.4 9.4 0 0 1-1.2 1.5l-.7-.1v-21.4H144a180.4 180.4 0 0 1-1.4 29 44 44 0 0 1-5 .6l-15.8.1-18.8.2-9.5.3c-4 0-8.3-.5-12.4-.5-6.4 0-12.5.5-18.9.7l-13.8.4c-3.1.1-6.2.3-9.3.7A27.9 27.9 0 0 0 35 360a14.5 14.5 0 0 0-2.8 0c-1.7.3-3.2 1.3-5 1.7-2.5.5-3.2 1.2-2.8 3.7v1.7a5.1 5.1 0 0 0-1.2-.8.6.6 0 0 0-.4.2l.7 1.3c.7-.3 1.6-1.2 2.2-1.2H28c-.3 0-.5 1-1 1.8l3-1.2a4.9 4.9 0 0 1 .2 1.4 22.4 22.4 0 0 1 6.7-.3 136 136 0 0 0 20.4 3c4.4.4 8.7.6 13.2.7 6.3.4 12.6.7 19 .7 5.2 0 10.4-.5 15.7-.5 7.3 0 14.7.4 22 .5l5-.1h12.5l33.3-.9 19.2-.7 19.5-.5 22.4-.3c5.7 0 11.1-.2 16.8-.4 6.3-.2 12.8-.7 19.1-1 3.5-.2 6.9-.5 10.3-.9 4.1-.3 8.4-.8 12.5-1l18.6-.8c7.7-.6 15.4-1.2 23.3-1.4 7.2-.4 14.5-.2 21.7-.4 6.3-.1 12.7-.5 19.2-.7l10.8-.5s7.3-.1 10.9-.5c6.1-.3 12.3-1 18.5-1.2l11.8-.1c6.3-.2 12.8-.5 19.1-.5 2.4 0 5 .3 8 .5l-3.2 2.7a10.6 10.6 0 0 1 2 .9l-.1.6-2.6.2a10.9 10.9 0 0 0-1 3h3c-1.1 0-2.2 1.5-3.3 2.5l.5.4c-1.8-.7-3.1-.4-3.8 1.5a3.8 3.8 0 0 0 1.4.2c-.2.5-.4 1-.5 1.7a2.5 2.5 0 0 0-.4 1.2l-.5-.6a2.2 2.2 0 0 0-.1-1c-1 1-2.6 1.7-1.8 4l-2.4 1.1a7.5 7.5 0 0 1 .7 1.2c-1.5.2-3 .5-2.7 2.4l1.8.7c-.8.4-1.7.9-2.6 1.2-.1.3-.3 1.2-.7 1.4-2.3.5-1 1.4-.3 2.2a6.9 6.9 0 0 1-1.5.9 2.8 2.8 0 0 1 1.2.6 10.2 10.2 0 0 1-1.2.7 5.6 5.6 0 0 0 1 .5l-2.6 2a1.6 1.6 0 0 0 .2 1 15 15 0 0 0-2 2.3 33.7 33.7 0 0 1-1.9 3.4 63.1 63.1 0 0 1-10.8 11.7 37.3 37.3 0 0 0-4.8 4.3c-3.1 2.9-5.8 6.1-9 8.9-4.3 3.6-8.8 6.8-13.4 10-5.7 4-11.3 8-17 11.7-3 2-6.4 3.6-9.7 5.4l-9.6 5.5a49.4 49.4 0 0 1-6.1 4.2c-5.7 2.4-11.7 4.5-17.5 6.7l-1.4.5c-4.2 1.8-8.3 4-12.6 5.4a97.7 97.7 0 0 1-12.2 3.3 37 37 0 0 1-4.4.2c-3 .5-5.8 1.2-8.7 1.5-7.6 1-15.1 1.7-22.6 2.7-4.5.5-8.8 1.4-13.2 1.8-3 .2-6.3-.1-9.4-.1a45.7 45.7 0 0 1-6.9.1c-3.6-.5-7.2-1.3-10.8-2a5 5 0 0 0-2.8-.2c-1.3.7-2.5-.3-3.9 0-.8.2-1.7-.5-2.5-.5-1 0-1.6.2-2.4 0a15.7 15.7 0 0 0-5.7-1 22.2 22.2 0 0 1-6.3-1.4l-9-2a15 15 0 0 1-3.5-1.6 3.3 3.3 0 0 1-1.5.5 47.2 47.2 0 0 1-8.6-1.7 15.3 15.3 0 0 0-7.2-1.7c-.7.2-1.2-.1-1.8-.1-.5-.7-1-2-1.6-2-3.4 0-5.4-2.8-8.4-3.7-1.5-.5-2.7-2.2-4.2-2.7-3.8-1.6-6.9-4.8-11.1-5.3a24.5 24.5 0 0 1-4.3-1.4 15 15 0 0 0 1.4 1.7l-.4.3-13.8-8c-.7-.2-1.2-.8-1.8-1.2l-4.6-3c-.5-.4-1.5-1-1.5-.7-1 1.1-2 .1-2.7-.2-4.7-3.3-10-5.3-14.4-9a28.2 28.2 0 0 1-5.4-4.4 27 27 0 0 0-8.6-6.6c-2.6-1.4-5-3-7.4-4.5a4.5 4.5 0 0 1-2.3-3.8c0-1.2-.6-2.4-2-1.7-.8-1-1.5-2.2-2.3-2.5a18.1 18.1 0 0 1-5-3.8c-1.5-1.4-2.7-3.3-4.6-4a20.4 20.4 0 0 1-7.5-6.6c-4.8-5.7-9-11.8-13.5-17.8a12.3 12.3 0 0 0-1.6-1.4l-.2.2 2.6 5-.7.5-3.2-3.6-.5.3 12.1 19.8c1 1.5 1.8 3 3 4.6a2.3 2.3 0 0 1-.7.5 6.7 6.7 0 0 1-4.5-3.2 6.4 6.4 0 0 0-6.7-4.1 29.6 29.6 0 0 1-.8-3.8 14 14 0 0 1-2.4-.2l6.6 11-1.7-1c3 3.2 5.3 7.3 9.2 9.4.9 3.9 5.3 5.8 6.3 9.5l-2.4-.5-4.4-5.3a8.7 8.7 0 0 0 1.5 3.1 65.3 65.3 0 0 0 6.4 7.4c.8.8 2 1.1 2 2.7a4.8 4.8 0 0 1 1.4-.9 10.7 10.7 0 0 0-.7 1.6l1.7.1c.4 1-.2 2.6 1.8 2.3.2 0 .4.1.5.3.9 2.2 2.3 2.2 4.1 1.4a1.3 1.3 0 0 1 1.4.3c.9 1.8 2 2 3.6.7l.2 2.4h.8c0-.3-.2-.8-.2-1.7.9.7 1.4 1 1.7 1.4a29.1 29.1 0 0 0 5.7 6.5c3.2 2.7 6.1 5.6 9.2 8.2a130.6 130.6 0 0 0 19.3 12.8c8.3 4.6 16.1 9.6 24.5 14a132.1 132.1 0 0 0 32 11.5l12.2 2.7c3.6 1 7.2 2.6 10.8 3.5 5.4 1.2 11.1 2.2 16.6 3.2l3.8.5v.4c1.5 0 3.4-.7 3.7-.2.9 1.4 1.6.7 2.6.5a14.7 14.7 0 0 1 4-.3 131.9 131.9 0 0 0 14.1.8c1 0 2.6-.8 3.5.9l.8-.6c.7-.1 1.6-.1 2.2-.3v.3a8 8 0 0 1-1.3.4 13.7 13.7 0 0 1 1.797.5 2.3 2.3 0 0 1-.896.5 7.5 7.5 0 0 0-1.5.8 38.4 38.4 0 0 0 17 0v-1h.799a2.4 2.4 0 0 0 .3 1 54.7 54.7 0 0 0 23-2.9c.6.9 1.2 2 2.2.4.3-.5 1.2-.7 1.8-.9a9.4 9.4 0 0 1 4.8-.6c1.5.5 2-.8 3.2-.8a32 32 0 0 0 5.8-.5l3.3-1a.6.6 0 0 0-.2-.6 28.3 28.3 0 0 0-3.6-.3c2-1 4-1.8 5.8-2.8l.2.4c-.5.2-.9.8-1.6.8h2.4c-.5 0-1.2 1.6-2 2.6l17.3-4.3v-.3l-1.7.3c-.2-3.6 3.7-2.3 5.1-4.4l-5.1 1.4v-.4l17.6-7.7.2.4c-1 .7-2 1.2-3.7 2a21.5 21.5 0 0 1 2.3.4c0 .5 0 .8-.2 1 3-.2 2.2-2.7 3-4.3.6.2 1.3.5 1.8.4a44.4 44.4 0 0 0 4.5-1.4 57 57 0 0 0 5.1-1.7c2.7-1.2 5.3-2.8 8-4.1a8.3 8.3 0 0 1 2 0 1.8 1.8 0 0 0 1.3-.7c.7-.5 1.3-1.6 1.8-1.4a3.9 3.9 0 0 0 4.8-2.7c.2 0 .2-.2.3-.2a24.9 24.9 0 0 1 2.6-1.8c3.8-2 7.3-4.1 11.1-6.2h.9a4.3 4.3 0 0 0 1.5-.1c2.2-1 4.3-2.3 6.3-3.5-.5-.1 0-.3-1.7-.5v-.3a21 21 0 0 0 3.3-.9l-.4-.3c4.5-4.5 10.1-7.7 14.4-11.5a9.9 9.9 0 0 0 1.7.4 4.2 4.2 0 0 0 .2-1.4 15.9 15.9 0 0 1 2.2-2.6c3.8-3.4 8-6.3 11.3-9.9 5-5 9.8-10.1 14.2-15.4a139.2 139.2 0 0 0 11.7-14.9c4.8-7.3 8.9-14.9 13.2-22.6l8.9-16.4c.3-.5 1-1.2 1.5-1.2 4.6-.5 9.2-.8 13.7-1.4a13.2 13.2 0 0 0 3.2-1.3l-1.3-2.8c-.6-.9-1.7-1.8-2.4-2.9a16.4 16.4 0 0 1-1.7-2.9l-1.6-2.4a61.8 61.8 0 0 1-2.9-5.8 3.6 3.6 0 0 1-.3-1.8c3-6.7 4.2-13.9 7.2-20.5a104.7 104.7 0 0 0 5.1-22c1.2-7 1.8-14 2.8-21 .5-5 1.2-9.7 1.3-14.7a143.8 143.8 0 0 0 .6-22.6h.1c-.2-6.5-.5-13.2-.9-19.7-.3-6.5-.5-13.4-1.2-20-1.2-9-2.4-18.3-4.4-27.2a155 155 0 0 0-6.7-21.4 257.3 257.3 0 0 0-10.6-24.4 378 378 0 0 0-23.5-35.8C456 85.7 449 79.5 444 71.8a52.8 52.8 0 0 0-11.5-11.6c-6.8-5.4-14-10.4-21.2-15.2a193 193 0 0 0-16.8-10.6c-4.6-2.6-9.5-4.6-14.3-6.9a73.1 73.1 0 0 0-17-6.8 44.4 44.4 0 0 1-4.4-1.4c-4-1.4-7.7-2.9-11.7-4.1-6-1.8-11.8-4.1-18-5.6A164 164 0 0 0 311 6c-6.8-1-13.9-1.3-20.7-2-4.5-.5-9-1-13.2-1.2-6.5-.3-13.2-.3-19.7-.5a96.6 96.6 0 0 0-9.08-.405zM262.1 22c2.2.3 4.3.7 6.4.8l8.2.5c6.1.5 12.3.9 18.4 1.7 5.2.7 10.3 1.8 15.6 2.6a219.6 219.6 0 0 1 33.2 8.6c6.3 2 12.5 4.8 18.6 7.3A377 377 0 0 1 402.7 63a40.2 40.2 0 0 1 9.5 9c4.5 4.7 9 9.3 13.2 14 5 5.7 9.6 11.6 14.4 17.4l13 15.4a54.8 54.8 0 0 1 3.6 5.1c2.7 4.1 5.8 8 8.2 12.5a71 71 0 0 1 4 10.6l5 15.8c1.3 3.9 2.3 8 3.2 12.1.7 2.7.5 5.7 1.3 8.4 1 3.6 0 7.5 1 11.1l.6 1.2c.7.7 1.2 1.4.2 2.4a1.8 1.8 0 0 0 0 1.4 7.2 7.2 0 0 0 .8-1.2l.2.7a8.3 8.3 0 0 0 0 2 3.6 3.6 0 0 0 .5 1.2 13.8 13.8 0 0 1 1.4-1 67.8 67.8 0 0 1 1.7 17.6 39.8 39.8 0 0 1-1.4 16.7c.482-1.737-.604-3.475-.23-5.123a8.6 8.6 0 0 1-1.37-1.177c-.2.5 0 1-.3 1.7-.2-.5-1.4-.3-1.4-.8-.2 2.4 1 4.8.9 7.2.5-.3 2.5-.5 3-1a1.3 1.3 0 0 0 .7.3c-3.4 2.6-2.5 5.2-1 8 .3.8 1.4 2.1.3 3.5-.3.3.2 1.4.4 2.2h.5v.4l-1.5.5c-.4-.5-2.4-1.6-2.4-2.4v8.7c1.7.5 1.7 3 2.4 4.1a5.1 5.1 0 0 0 .6-1.4l.2.2a20 20 0 0 1-.7 3 40.5 40.5 0 0 0-.8 4.5l.3.7a51.2 51.2 0 0 0-1.5 13.5c-.5 3.3.001 6.7-.4 10.1a81.3 81.3 0 0 1-1.7 9c-.1.5-.5.6-1.3 1a13.8 13.8 0 0 0-.2-5.3l-2.6-1.2a57.5 57.5 0 0 0 1.8 8.4l-2.7-1.4c-.4 2-.4 4.8-.5 7-.2 1.7-1.7 3.3-1.8 5.1 0 1 1.2 1.7 1 3.5h1.4c0-3.5 1.5-6.5 1.5-10.1h.5c.2.3.7.7.5.8a22.8 22.8 0 0 0-.9 5.8c0 1 .9 2 .6 3.3a16.7 16.7 0 0 0-.7 3.6 9.7 9.7 0 0 1-.4-1.7l-1.8-.2c-.2 1 1.2 2 1 3l-.6.3-5.7-8.2c-4.4-6.5-8.9-13-13.3-19.7a40.8 40.8 0 0 1-3.1-5.1 241.4 241.4 0 0 0-17.6-26.2c-5-6.3-9-13.2-13.6-20L407.8 225c-1.5-2-3.4-4-4.8-6.2-4.4-7-8.4-14.2-12.8-21.2-3.8-5.8-7.9-11.5-11.8-17.1-1.4-1.8-2.7-4-4.1-6a2.5 2.5 0 0 1-.4-1.2c-.3-3.8-.7-7.5-.8-11.1-.2-3.6.3-6.8.3-10.4v-3.1l.2-2.4.5-.7c-5 0-10.1-.2-15 0a8.3 8.3 0 0 1-7.3-3.6 283.7 283.7 0 0 1-17-23.5c-5.2-7.6-10.8-15-16.2-22.3l-13.4-17.8c-5-6.8-9.7-13.7-14.8-20.5l-18.9-24.6c-2.9-3.8-6.1-7.4-9.4-11.3zm220.77 208.277a8.6 8.6 0 0 0 .03.024v-.201c-.017.058-.018.118-.03.177zM246.312 30.775c.362.05.688.325.988.725l14 17.7c3.3 4.2 6.8 8.4 10 12.8 4 5.4 7.7 10.9 11.6 16.4 4.5 6.4 8.999 12.7 13.199 19.2 6.5 9.6 12.7 19.2 19.2 28.7 4.8 7 9.6 13.9 14.2 20.9h-8.7c-8-.2-16.3-.9-24.3-.5-10.9.5-22 1.7-33 2.6a487.3 487.3 0 0 1-41.8 1.3c-5 0-9.9.7-14.8 1-6 .4-11.8.8-17.8 1l-20.9.6c-4 .2-8 0-12.3 0h-.1c5.5-7.5 11.2-15 16.6-22.7l4.8-6.9a10.9 10.9 0 0 1 2-1.7l-.1-.3a15.7 15.7 0 0 0 1.7-2.3 35 35 0 0 0 2-4.4 2.4 2.4 0 0 1 .7-.7c2.4 1.2 2.4-1.4 3.3-2.2l4.4-5.3a35.4 35.4 0 0 0 3-4.1c.1-.5-.4-1.4-.5-2h-.6c.6-.4 1-1 1.6-1.3l.3-.1c1-1.6 2-3.1 3.1-4.5a73.6 73.6 0 0 1 6.7-7.9l-1 2.4c.1 0 .1.2.3.2l6.3-8c-.2-.2-.3-.4-.5-.4l-2.4 2.6c-.1-.2-.3-.3-.5-.3l5.2-7a26.2 26.2 0 0 1 1.3 2.5l1.9-4.1-1.8 1.5-.5-.5 3.1-4.6 9.8-14c1.2-1.8 2.7-3.1 3.7-4.9A180.7 180.7 0 0 1 242 34.6a28 28 0 0 1 3.1-3.2c.45-.5.85-.675 1.213-.625zM198.6 98.2 195.7 100v.1l-.2.1.4 2.8 3-4.5zm144.109 69.989a3.4 3.4 0 0 1 2.99 1.812c1.5 2.6 3.001 5.2 4.801 7.7a3.2 3.2 0 0 1 .5 1.4c0 3.8 0 7.7.2 11.5.1 3.7.5 7.6.7 11.6.1 4-.4 8-.2 12.1.2 5.8.3 11.8.3 17.8v1.5l-.7.1c-.6-2.4-1.3-5-2.2-7.3a57.7 57.7 0 0 0-6.7-14.4c-3.4-4.8-6.5-9.8-9.9-14.7a27.7 27.7 0 0 0-3-3.3 59.8 59.8 0 0 0-11.9-10.8 140 140 0 0 0-21.3-10.9 49.6 49.6 0 0 1-6-3h4l29.3-.6c6.4-.2 12.5-.2 18.8-.5a3.4 3.4 0 0 1 .309-.012zm-129.045 4.316a36.8 36.8 0 0 1 4.035.195 58.2 58.2 0 0 0-8 4.4c-3 2-5.9 4.8-9 7A52 52 0 0 0 192.4 192c-3.3 4-6.9 7.3-10.3 11.1a107.4 107.4 0 0 0-7.2 8.2c-3 3.8-5.5 7.9-8.3 12.2.9-16.3 1.9-32.4 1.2-48.8h.2c8-.3 15.7-.9 23.5-1.2l18.6-.8a36.8 36.8 0 0 1 3.564-.196zm43.094 8.797a14.2 14.2 0 0 1 .043 0c5.1.2 10.298.2 15.398.5a26.1 26.1 0 0 1 6.301 1.398 61 61 0 0 1 7.7 3.301 84.6 84.6 0 0 1 8.4 5.1c5 3.3 9.6 6.8 14.5 9.8a38.6 38.6 0 0 1 11.6 11.3 52.5 52.5 0 0 1 9.8 16.5l2.5 11.3a13.8 13.8 0 0 1 1.2 6.5l-2.2 13a17.5 17.5 0 0 0-.5 5.2 31.9 31.9 0 0 1-3.8 14.7c-.6 1.5-1.7 3-2.5 4.8a5.1 5.1 0 0 0 1.3.7l1.6-3.1c.2 0 .2 0 .3.2-.8 2.3-1.5 5-2.4 7.3-2 5.3-4 10.9-6.6 16a83.4 83.4 0 0 1-5.5 8c-1.7 2.3-3 5-4.8 7.2a24.3 24.3 0 0 1-5 5.1 131.5 131.5 0 0 1-14.5 9.6 36 36 0 0 1-10 3.8l.1-.2a139.4 139.4 0 0 1-16.8 3.6 104.7 104.7 0 0 1-14.7.5c-4.5 0-8.7-.2-13.2-.5a44.6 44.6 0 0 1-14.7-3.3c-4.1-1.8-8.4-3.6-12.5-5.6a33 33 0 0 1-11.3-8.2 66.2 66.2 0 0 0-8-7.4 8 8 0 0 0 3.6 5c-.8 1-2 .5-3.8-2.2a10.1 10.1 0 0 1-1.3.6l1.5-3.4-2.2-4.3-4-6.8-.6-1.5a37.3 37.3 0 0 1-2.4-3.1 69 69 0 0 0-4.3-6.3l.2 1.7a.6.6 0 0 0-.4.1l-3.6-8.7c-.2 0-.2 0-.3.2l3 11.3-.5.2a9.8 9.8 0 0 1-1.3-2.3c-.4-1.3-1.4-1.3-2.3-.8a2.4 2.4 0 0 0-.7 2c1.2 3 2.6 5.8 4 8.7a21 21 0 0 0 1.2 3c.1.3.7.6.7 1.2a28.6 28.6 0 0 0 2 3.9c1.5 2 3.3 4 4.8 6.1 1.5 2 3 4.3 4.3 6.4.1.3.7.3.8.5.9 2.5 3.8 4.4 5.8 3.4.5 4 4.8 5.3 6.5 9l-5-2.2-.3.7a66.3 66.3 0 0 1 6 3.3 49.2 49.2 0 0 1 5 3.2 15.7 15.7 0 0 0 7.3 3.6 1.8 1.8 0 0 0-.3-.6c4.8 2.2 9.7 4.6 13.5 6.5l-56.4 1-.2-9.6a30 30 0 0 0 .2-4c-.5-7.8-.5-15.7-1.6-23.4a166.8 166.8 0 0 1-.8-24.4c.1-4.5-.2-9-.4-13.5 0-6 0-11.8.2-17.8a6.3 6.3 0 0 1 .7-2.4h.5c.2.3 0 .8.3 1 .5.5 1.4 1.4 1.8 1.2 1-.7 2.5-1.4 2.9-2.4a16.6 16.6 0 0 0 1.2-6.3 6.2 6.2 0 0 1 1.3-3.6 15.8 15.8 0 0 0 .9-1.7l-2.2-1.6c.6-1.8.5-4 3-5.1.4-.2.4-1 .5-1.6l.6-4.2a5.4 5.4 0 0 0 .8 1 2.1 2.1 0 0 1 .3-.5v-2c2-.4 1.2-2.6 2.3-3.7.1-.1-.2-.7-.2-1 0-.3 0-.9.2-.9 2.4-.5 2-3 3.6-4.2.5-.4.7-.9 1.4-1.7 1.3 2.4-1 3.6-1.2 5.3 2.9-1.7 3.7-5.8 2-7a9.8 9.8 0 0 0 1.8-1.9c1.8-2 4-3.9 5.7-6 1.2-1.5 1.8-3.4 3-4.9a9.7 9.7 0 0 1 3.1-2 21 21 0 0 0 7.9-6.5 9.4 9.4 0 0 1 1.4-1c.5-.4 1.5-.4 1.7-1 .1-.4-.4-1.1-.7-1.6.7-.4 1.4-1 2.7-1.7l-1 2.4.8.8c1.6-1.2 4-2.6 5.5-3.6 0-.2-.9-.9-.9-.9l-4 2c.3-.4.3-.8.4-1a63.3 63.3 0 0 1 7.4-4.2c6-2.8 12-5.5 18-8a8.4 8.4 0 0 1 3.5-.2 3.8 3.8 0 0 0 1.4-.2c2.7-.8 5.4-1.7 8.2-2.4a14.2 14.2 0 0 1 3.758-.5zm-6.059 3-5 2.199h.102c0 .2-.901 1.6-.701 1.6.8-.2 2.7-1.6 3.7-1.7a6 6 0 0 1 1.8.3 13 13 0 0 1 .1-2.4zm123.102 28.5a52.8 52.8 0 0 1 4.799 6.5 178.6 178.6 0 0 0 13.9 20c4 5.6 7.9 11.8 11.6 17.6 4.6 7 9 14 13.7 21 3.4 5.3 7 10.598 10.6 15.798 3.3 4.6 6.7 9 10.1 13.5L447.4 319c3.4 4.8 6.8 9.6 10.3 14.2l5.4 7.2a20.5 20.5 0 0 0 3.6 3.3 1.3 1.3 0 0 1-.7-.2 16.4 16.4 0 0 0 1.2 1.6c1.8 1 2 2 1 3.6l.2-.2-.7 1a10.6 10.6 0 0 1-.4-1.5c-1 2.8-3.2 1.4-4.8 1.4-9.2.2-18.6.2-27.8.2l-26.9.1c-3 0-6 .7-9 .9l-21 .7c-.5 0-1-.9-1.8-1.6a11.3 11.3 0 0 1-1 1.6l-.9-1.2a11.8 11.8 0 0 1-.5 1.4h-.6a49.5 49.5 0 0 1-1-7c0-5.2.5-10.3.7-15.5v-6.8l1.8 1.4a14.9 14.9 0 0 1 1-1.7 3 3 0 0 1-.7-.5c.4-.2.7-.6.7-.7a7 7 0 0 0 .5-1.4 18.4 18.4 0 0 0-.5-3.3.6.6 0 0 0 .5-.1l1 5h.6c-.7-1.1 1.5-2.1-.4-3.5-.1-.2.2-1.2.2-1.7a36 36 0 0 1-1.4-3.5 4.1 4.1 0 0 1 1.2-.5 16 16 0 0 0-1.7-.8c1.7-1.5 1.7-2.4.2-4.1.3-.2.7-.2.7-.4a21 21 0 0 0-.4-4.6c-.3-1.7.6-3.7-2-4.8a5.1 5.1 0 0 0 .7 1.4 4.8 4.8 0 0 0-1 .5c-2.3-2-.9-4.8-1.4-7.9a28.1 28.1 0 0 1 2.9 1c-.3-1.1-1.2-2.5-1.7-4h-.7v-11.3l1.8.3.2-.5-1.8-2.2.3-.3a6.1 6.1 0 0 1-.7-4.7v-12c1.7 1.8-.8 4 1.7 5v-1.7h-.1l-.4-7.7h-.3l-.4.8h-.3zM86.199 227.3A192 192 0 0 0 80.4 234.5c.4.1.9 1.3 1.2 1.7 1.9-2.6 4.5-5.9 6.4-8.2-.2-.2-1.6-.6-1.8-.7zm-11.398 8.398c-1 1.6-3.602 4.301-4.602 5.801.2.2 2.001-.6 2.201-.5l3.1-4.7v-.1a2.3 2.3 0 0 1-.7-.5zm3.6 2.602-3.1 2.199a1 1 0 0 1 .299.8c-1.3-.1-1.8.6-2.5 2.4-.2.5-1 .7-1.8 1.4l-.7 2 .2.2a2.5 2.5 0 0 1-.9.5c-1 1-2.2 1.9-3.2 3a5 5 0 0 0-.4 1.5l4.8-4.8.2.2c.7-1 1.2-2 1.8-3.1l.3.5-1.5 4.3c-.4.1-.9.5-.9.3-.7.5-1.2 1.2-1.8 1.7l-3 2-5.4 4.5-3.7 5.8c2-.5 2.5.4 2.4 2 2.4.4 2.5-1.5 3.2-2.8.2-.4.4-1 .7-1.2 1.5-1.4 3.3-2.6 5-4a2.3 2.3 0 0 0 .3-1.5c0-.2-.8-.2-1.4-.3 1.6-1.8 3.8-4.7 5.3-6.5.9-.5 1.7-1.2 1.7-1.8-.085-1.543.729-2.13 1.839-2.707A10.2 10.2 0 0 1 70.8 252.4a2.9 2.9 0 0 0 1.799.6c.5-.2.8-1 1.2-1.6l4.6-6.7 1.4-2.5-.638-.638L77.2 244.9l-.549-.275.05-.025a1.8 1.8 0 0 1-.8-1.2v-.1a7 7 0 0 1 .8-1.4 3.5 3.5 0 0 0 .8-.2c.7-1.2.7-2 1.4-3zm.761 3.262.037-.063h-.1zm270.139 52.136a387.7 387.7 0 0 0 4.5 58l-58.801 2h-.1a69.2 69.2 0 0 0 19.9-13.199 18.3 18.3 0 0 1 2.7-2.4 60 60 0 0 0 17.3-17.5 237.3 237.3 0 0 0 13.5-25 18.6 18.6 0 0 1 1-1.9zM25.1 297.9a4.2 4.2 0 0 0-1.5.7l2.2 5.3a5.1 5.1 0 0 1 1.4-.7l-2-5.3zm452 6.7c0 .3.2.8 0 1.2zm-456.7.2c-.6.9-.9 1.9-.9 2.4s.9 1 1.4 1.5l.3-.5zm8.9 3.9a6.1 6.1 0 0 0-1.5.7l4 8.9a13.6 13.6 0 0 0 1.5-.6 59.5 59.5 0 0 0-4-9zm-3.5 6.9c0 .7-.8.5-.8 1.2l-2.697-.193c-.09.21.498 1.194.697 1.393h3.5l-.2-2.4zm-3.497 1.007c0-.002-.003-.006-.002-.008h-.102zm160.297 5.194c1.9 3 3.8 5.698 5.9 8.398v.102h-.2a4.3 4.3 0 0 1-1.2-.602L183 323.5a2 2 0 0 1-.4-1.7zm191.5 9.799c-.2 2.1-.4 3.6-.4 5.1 0 .4.2.9.5 1 .4.2 1.1-.1 1.4-.3a1.3 1.3 0 0 0 .4-.7l-1.6-.8c3.3-1.7 0-2.6-.3-4.3zM75.6 427.8l5.6 6.3 1.6-.3c.5.8.8 1.8 1.3 2.9-2.4-.2-3.6-1.2-2.9-2.6a8.2 8.2 0 0 1-2.7-1.5c-1.2-1.4-2.2-3-3.4-4.3zm333.6 32.8a28.5 28.5 0 0 0-3.3.8v.1l-1 1.8c.2 0 .4.2.5.3a40.4 40.4 0 0 1 3.8-3zm-8.7 4.7-5.8 3.6.3.4a16 16 0 0 0 6.2-3zm-17.3 7.8c-.1 0-.1.2-.3.2.6 1.6 2 1.7 4.3.2a28 28 0 0 1-4-.4zm-67.1 24.1c-7.9 2.2-10.4 2.5-11.3 1.3zm-11.6 1.5.4 1a11.4 11.4 0 0 0-2.6.5h-.1c-2.3.6-5 .9-7.3 1.2-.9.2-1.8 1-2.2-.5l-1 .4c.8 2.6 2.9.5 4.6 1.5l-11 1.4v-.3l3.4-.6v-.5a51.4 51.4 0 0 0-5.2-.3c-.5 0-1.2.7-1.7.8a8.7 8.7 0 0 1-2.2.4c-3 .1-5.8.1-8.6.3l-.7-.2v-.5zm-35.8 4.6v.4a91 91 0 0 1-9.5.995v-.394z" style="fill: #dd3735; fill-opacity: 1;"/>
  </svg>`,terminal:`
  <svg viewBox="0 0 24 24">
    <path style="fill: var(--icon-color, transparent); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-opacity: 1;" d="M.327 1.763h23.51v20.18H.327z"/>
    <path style="fill: #000; fill-opacity: 1; stroke: none; stroke-width: 0.190008; stroke-miterlimit: 4; stroke-dasharray: none; stroke-opacity: 1;" d="M.96 2.495v18.686h22.218V2.495z"/>
    <path style="fill: #fff; stroke: none; stroke-width: 1px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1; fill-opacity: 1;" d="m7.119 6.802 4.088 4.092-4.088 4.093-1.261-1.263 2.826-2.83-2.826-2.83zM11.74 15.324v1.447h5.677v-1.447z"/>
  </svg>
  `,vue:`
  <svg viewBox="0 0 512 512">
    <path d="m309.725 17.443-56.65 98.695L196.424 17H7l246.074 426.204L498.264 17z" fill="#41b883" style="stroke-width: 5;" transform="translate(3 26)"/><path d="m309.725 17.443-56.65 98.695L196.424 17h-91.172l147.821 256.696L400.454 17z" fill="#34495e" style="stroke-width: 5;" transform="translate(3 26)"/>
  </svg>
  `,webcomponents:`
  <svg viewBox="0 0 128 128">
    <path style="fill-opacity: 1; stroke: none; stroke-width: 0; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1; fill: #fff" d="m31.03 11.902-.536.93c-9.626 16.685-19.253 33.37-28.878 50.056l29.41 50.977c22.206.046 44.41.096 66.616.143 5.056-8.797 10.114-17.592 15.169-26.39-.49-.36-.367-.766-.022-1.18 4.644-7.828 9.29-15.653 13.932-23.481-4.822-8.104-9.647-16.205-14.468-24.308.65-.422.028-.937-.198-1.422L97.653 11.982c-22.208-.028-44.415-.052-66.622-.08zM52.174 41.58h20.995c4.255 7.113 8.505 14.231 12.76 21.342L73.264 84.259H51.93L39.712 62.906z"/>
    <g style="fill: none; fill-rule: evenodd;">
      <path d="m160.6 65.9-17.4 29.3-24.4-29.7 24.4-28.9z" style="fill: #166da5;" transform="matrix(.72726 0 0 .72726 5.608 15.034)"/>
      <path d="m141.3 100.2-26.5-31.7-15.9 26.6 24.7 36.1z" style="fill: #8fdb69;" transform="matrix(.72726 0 0 .72726 5.608 15.034)"/>
      <path d="m141 31.4-26.2 31.8-15.9-26.6L123.6.9z" style="fill: #166da5;" transform="matrix(.72726 0 0 .72726 5.608 15.034)"/>
      <path d="M78.6 130.8 41 65.8 79.1.8H37.9L.4 65.8l37.5 65z" style="fill: #000; stroke: none; stroke-width: 2.55025; stroke-miterlimit: 4; stroke-dasharray: none; stroke-opacity: 1;" transform="matrix(.72726 0 0 .72726 5.608 15.034)"/>
    </g>
    <path style="fill: #287bbe; fill-opacity: 1; stroke: none; stroke-width: 0.927342px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1;" d="m50.043 37.87 13.091-22.254 32.363.073 12.654 22.181zM77.534 41.652l32.145-.073 11.563 19.49-32.145-.072z"/>
    <path style="fill: #ddf021; fill-opacity: 0.952941; stroke: none; stroke-width: 0.927342px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1;" d="m50.043 88.114 13.091 22.254 32.363-.073 12.654-22.181zM77.534 84.332l32.145.073 11.563-19.49-32.145.072z"/>
</svg>
  `};class g extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --cover-size: 400px;
      }

      .container {
        width: var(--cover-size);
        height: var(--cover-size);
        position: relative;
      }

      .container svg {
        width: var(--cover-size);
        height: var(--cover-size);
        transition: transform 0.5s;
      }

      .container .box {
        width: var(--cover-size);
        height: var(--cover-size);
        z-index: 5;
      }

      .container svg,
      .container .box {
        position: absolute;
      }

      .container .box:hover + svg {
        transform: translateX(250px);
      }
    `}connectedCallback(){this.logo=this.getAttribute("logo"),this.render();const a=this.shadowRoot.querySelector(".container"),o=document.createElement(`cover-${this.logo}`);o.classList.add("box"),a.insertAdjacentElement("afterbegin",o)}render(){this.shadowRoot.innerHTML=`
    <style>${g.styles}</style>

    <div class="container">
      ${b[this.logo]}
    </div>
    `}}customElements.define("cover-box",g);
