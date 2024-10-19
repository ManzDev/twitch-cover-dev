const V=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}};V();class c extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --width: var(--cover-size);
        --height: var(--cover-size);
        --shadow-gradient: linear-gradient(to left, #0006 -3%, transparent 2% 98%, #0009 102%);
        --cover-vinyl: linear-gradient(
          145deg,
          #fff 40.1%,
          #D3274D 40.25% 45%,
          #DE5737 45.25% 50%,
          #EA8F26 50.25% 55%,
          #EFB631 55.25% 60%,
          #1E1F21 60.1%
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
    <style>${c.styles}</style>
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
    </div>`}}customElements.define("cover-html",c);class d extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --width: var(--cover-size);
        --height: var(--cover-size);
        --shadow-gradient: linear-gradient(to left, #0006 -3%, transparent 2% 98%, #0009 104%);
        --cover-vinyl:
          linear-gradient(to bottom, #222 0% 29%, transparent 29% 80%, #222 80% 100%),
          linear-gradient(to right, #222 0% 10%, transparent 10% 90%, #222 90% 100%),
          linear-gradient(
            130deg,
            #222 30%,
            #37B4F6 30.1% 35%,
            #222 35.1% 40%,
            #4D8CE9 40.1% 45%,
            #5D5EDC 45.1% 55%,
            #6B36CC 55.1% 65%,
            #C9CDD0 65.1% 75%,
            #679FB8 75.1% 76%,
            #C9CDD0 76.1% 86%,
            #679FB8 86.1% 86.5%,
            #C9CDD0 86.6% 100%
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
    <style>${d.styles}</style>
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
    </div>`}}customElements.define("cover-css",d);class p extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --width: var(--cover-size);
        --height: var(--cover-size);
        --cover-vinyl:
          linear-gradient(to bottom, #191919 0% 29%, #191919 80% 100%);
        --cover-padding: 10px 25px;

        --gray: #333;
        --blue: #99388c;
        --red: #99388c;
        --yellow: gold;
        --pink: #000;
        --green: #a7c738;
        --phaser-color: #965e97;
      }

      :host::after {
        content: "";
        inset: 0;
        display: block;
        position: absolute;
        z-index: 50;
        width: 100%;
        height: 100%;
        box-shadow: 0 0 80px #000 inset;
      }

      .container {
        width: 100%;
        height: 100%;
        background: url(asfalt-dark.png), var(--cover-vinyl);
        box-shadow:
          0 0 80px #0006 inset,
          0 0 10px #0007;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        position: relative;
        overflow: hidden;

        &::before {
          content: "";
          background: linear-gradient(
            45deg,
            var(--phaser-color) 0 50%,
            var(--phaser-color) 50% 100%
          );
          display: block;
          position: absolute;
          width: 145%;
          height: 20px;
          right: 0;
          transform-origin: 95.6% 10%;
          transform: rotate(315deg);
        }
      }

      .lines {
        grid-column-start: 2;
        background: repeating-linear-gradient(
          -45deg,
          black 0px 20px,
          var(--gray) 20px 40px
        );
      }

      .overlay {
        grid-column-start: 2;
        grid-row-start: 2;
        background-color: var(--pink);
        background-image: linear-gradient(
          -225deg,
          #6668 0px 60px,
          #6667 60px 80px,
          #6666 80px 100px,
          #6665 100px 120px,
          #6664 120px 140px,
          #6663 140px 160px,
          #6662 160px 180px,
          #6661 180px 200px
        );
        position: relative;
        display: grid;
        place-items: end;
        overflow: hidden;

        & .character {
          --size: 150px;

          border-radius: 50%;
          width: var(--size);
          height: var(--size);
          background-color: var(--phaser-color);
          border: 10px solid color-mix(in srgb, var(--phaser-color), #000 25%);
          position: absolute;
          z-index: 5;
          transform: translate(-45%, -45%);

          & .face {
            display: block;
            width: 50%;
            height: 50%;
            background-color: #fff;
            background-image:
              linear-gradient(135deg, #e3cb89 65%, transparent 65.5%),
              repeating-linear-gradient(45deg, transparent 0 20px, #ddd 20px 22px);
            position: absolute;
            left: 1rem;
            transform: translate(46%, 66%);

            &::before {
              --size: 35px;

              content: "";
              display: block;
              width: var(--size);
              height: var(--size);
              background-color: var(--phaser-color);
            }
          }
        }

        & .rocket {
          --size: 200px;

          border-radius: 50%;
          width: var(--size);
          height: var(--size);
          background-color: var(--yellow);
          background-image: linear-gradient(
            315deg,
            #f3a50e 0 60px,
            #c0820b 60px 80px,
            #8d5f08 80px 100px,
            #5a3c05 100px 120px,
            #271a02 120px 140px
          );
          position: absolute;
          z-index: 5;
          transform: translate(-50%, -50%);
          display: none;
        }
      }

      header {
        color: #fff;
        font-family: Xolonium, sans-serif;
        font-size: 3rem;
        translate: 0 15px;
        width: 100%;
        position: absolute;
        display: grid;
        margin-left: 1.5rem;
        line-height: 100%;

        & span {
          font-size: 1rem;
          display: inline-block;
          line-height: 150%;

          &::before {
            content: "";
            background: red;
            width: 88%;
            height: 2px;
            display: block;
          }
        }
      }

      footer {
        font-family: Xolonium, sans-serif;
        color: #fff;
        text-transform: uppercase;
        z-index: 5;
        position: absolute;
        bottom: 35px;
        left: 80px;
        text-align: right;
      }

      .ball {
        position: absolute;
        background-color: var(--yellow);
        background-image:
        linear-gradient(
          45deg,
          var(--phaser-color) 0 20%,
          color-mix(in srgb, var(--phaser-color), #000 15%) 20% 25%,
          transparent 25%
        ),
        linear-gradient(
          225deg,
          var(--phaser-color) 0 20%,
          color-mix(in srgb, var(--phaser-color), #000 15%) 20% 25%,
          transparent 25%
        ),
        linear-gradient(
          -45deg,
          #da422bcc 0 15%,
          #da422b88 15% 30%,
          #da422b55 30% 45%,
          #da422b33 45% 60%,
          #da422b11 60% 75%,
          #fff2 75% 100%
        );
        width: 50%;
        height: 50%;
        border-radius: 50%;
        place-self: center;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${p.styles}</style>
    <div class="container">
      <header>
        PHASER
        <span>JS GAME ENGINE</span>
      </header>
      <div class="lines"></div>
      <div class="overlay">
        <div class="rocket"></div>
        <div class="character">
          <div class="face"></div>
        </div>
      </div>
      <footer>Powered<br>by canvas</footer>
      <div class="ball"></div>
    </div>`}}customElements.define("cover-phaser",p);class h extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    <style>${h.styles}</style>
    <div class="container">
    </div>`}}customElements.define("retro-square",h);class g extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
        text-shadow: 0 0 15px #0003;
      }

      .subtitle {
        font-family: "Lexend";
        font-size: 1.15rem;
        font-weight: 900;
        letter-spacing: -1px;
        color: gold;
        position: relative;
        z-index: 5;
        text-shadow: 0 0 15px #0005;
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
    <style>${g.styles}</style>
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
    </div>`}}customElements.define("cover-postcss",g);class v extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --width: var(--cover-size);
        --height: var(--cover-size);
        --shadow-gradient: linear-gradient(to left, #fff6 -3%, transparent 2% 98%, #0009 104%);
        --cover-vinyl:
          linear-gradient(150deg,
            #403B38 20%, #FFC843 20.25% 21%,
            #403B38 21.25% 22.75%, #FFC843 23% 24%,
            #403B38 24.1% 25%, #FFC843 25.25% 27%,
            #403B38 27.1% 27.75%, #FFC843 28% 30%,
            #403B38 30.25% 31%, #FFC843 31.25% 35%,
            #403B38 35.1% 35.5%, #FFC843 35.75% 40%,
            #403B38 40.25% 40.5%,
            transparent 40.75%);
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
    <style>${v.styles}</style>
    <div class="container">
      <div class="group">
        <h1>Javascript</h1>
        <h3>ECMAScript</h3>
      </div>
      <div class="rect">TC39</div>
      <footer>
        <div class="text">Untyped language</div>
      </footer>
    </div>`}}customElements.define("cover-js",v);class f extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --width: var(--cover-size);
        --height: var(--cover-size);
        --shadow-gradient: linear-gradient(to left, #0006 0%, transparent 2% 98%, #0009 104%);
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
        text-shadow: 0 0 15px #000;
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
        font-weight: 600;
        font-style: italic;
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
        color: #aaa;
        margin: 0;
        transform: translate(-10px, 10px);
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${f.styles}</style>
    <div class="container">
      <div class="group">
        <h2>Terminal de</h2>
        <h1>Linux</h1>
      </div>
      <footer>
        <div class="text">$ su manzdev</div>
      </footer>
    </div>`}}customElements.define("cover-terminal",f);class x extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --width: var(--cover-size);
        --height: var(--cover-size);
        --bgcolor: #151515;
        --cover-vinyl:
          linear-gradient(
            to bottom,
            var(--bgcolor) 0% 29%,
            var(--bgcolor) 80% 100%
          );
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
        grid-template-rows: 0.65fr 0.35fr;
      }

      .container::after {
        content: "";
        display: block;
        position: absolute;
        inset: 0;
        box-shadow: 0 0 10px #000e inset;
      }

      .logo-container {
        overflow: hidden;
      }

      .logo-wrapper {
        display: grid;
        grid-template-rows: 0.3fr 0.7fr;
        height: 100%;
        rotate: -45deg;
      }

      .supertitle {
        font-family: Coda;
        font-size: 1.1rem;
        color: #8e7740;
        translate: 30px 50px;
      }

      .logo-wrapper h1 {
        font-family: Coda;
        font-size: 6rem;
        text-align: center;
        padding-right: 5rem;
        line-height: 130%;
        translate: 0 15px;
        margin: 0;
        color: #eee;
      }

      .logo {
        width: 200%;
      }

      .logo > div {
        height: 20px;
        margin: var(--sep-size, 3px);
        background: #42d392;
      }

      .logo > div:nth-child(2) { --sep-size: 4px }
      .logo > div:nth-child(3) { --sep-size: 5px }
      .logo > div:nth-child(4) { --sep-size: 6px }
      .logo > div:nth-child(5) { --sep-size: 7px }
      .logo > div:nth-child(6) { --sep-size: 8px }
      .logo > div:nth-child(7) { --sep-size: 9px }
      .logo > div:nth-child(8) { --sep-size: 10px }
      .logo > div:nth-child(9) { --sep-size: 11px }

      .title-container {
        font-family: "Montserrat";
        display: flex;
        flex-direction: column;
        color: #42d392;
        text-align: center;
        margin: 0.75rem 0;
      }

      .title {
        font-size: 1.25rem;
        text-align: right;
        margin-right: 1.25rem;
      }

      .subtitle {
        font-size: 1.5rem;
        background: #115134;
        color: #fff;
        padding: 0.5rem 0.5rem 0.5rem 4.5rem;
        text-transform: uppercase;
        margin: 0.5rem 0;
        clip-path: polygon(15% 0, 100% 0, 100% 100%, 4% 100%);
      }

      .caption {
        font-size: 1.2rem;
        text-align: right;
        translate: 0 4px;
        margin-right: 2.4rem;
        color: #ccc;
      }

    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${x.styles}</style>
    <div class="container">

      <div class="logo-container">
        <div class="logo-wrapper">
          <span class="supertitle">Framework progresivo</span>
          <h1>vue.js</h1>
          <div class="logo">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

      <div class="title-container">
        <div class="title">Options + Composition API</div>
        <div class="subtitle">\xA1Con reactividad!</div>
        <div class="caption">Curva de aprendizaje baja</div>
      </div>

    </div>`}}customElements.define("cover-vue",x);class m extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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

      .container::after {
        content: "";
        display: block;
        position: absolute;
        inset: 0;
        box-shadow: 0 0 10px #000e inset;
        z-index: 10;
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
    <style>${m.styles}</style>
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
    </div>`}}customElements.define("cover-webcomponents",m);class b extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    <style>${b.styles}</style>
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
    </div>`}}customElements.define("cover-fundamentos",b);class u extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
        box-shadow: 0 0 30px #000 inset;
        z-index: 10;
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
    <style>${u.styles}</style>
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
    </div>`}}customElements.define("cover-svg",u);const G=450,F=["#bbba","#aaaa","#999a","#777a","#555a"];class y extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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

        display: flex;
        flex-direction: column;
      }

      .container::after {
        content: "";
        display: block;
        position: absolute;
        inset: 0;
        box-shadow: 0 0 10px #000e inset;
        z-index: 10;
      }

      .top-banner {
        background: #c13c38;
        margin-top: 2rem;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .top-banner .text {
        color: #fff;
        font-family: Arvo;
        font-size: 1.1rem;
      }

      .content {
        height: 100%;
        display: grid;
        grid-template-rows: 0.35fr 0.65fr;
      }

      :is(.top-banner, .content) {
        z-index: 5;
      }

      .top-text-container {
        display: flex;
        justify-content: space-between;
      }

      .title {
        width: 50%;
        height: 100%;
        font-family: Arvo;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        margin-left: 2rem;
      }

      .title h2 {
        color: #7dabbc;
        font-size: 2rem;
        font-weight: 700;
        font-style: italic;
        line-height: 100%;
      }

      .title h1 {
        font-size: 4rem;
        font-weight: 700;
        line-height: 80%;
      }

      .title :is(h1, h2) {
        margin: 0;
      }

      .logo-container {
        width: 27%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .logo {
        --color: #dfc850;

        color: #796818;
        font-family: Arvo;
        font-size: 0.9rem;
        line-height: 80%;
        text-align: center;
        border: 1px solid var(--color);
        display: flex;
        flex-direction: column;
        padding: 0.5rem 0.25rem;
        margin-right: 1rem;
        background: #171717;
      }

      .logo span {
        font-size: 1rem;
        font-family: Arvo;
        line-height: 120%;
        color: var(--color);
      }

      .grid-container {
        perspective: 6px;
        overflow: hidden;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(20, 1fr);
        grid-template-rows: repeat(6, 1fr);
        gap: 4px;
        background: #222d;
        height: 100%;
        transform:
          scale(2.5)
          translateY(-45px)
          translateX(-10px)
          translateZ(-20px)
          rotateX(11deg)
          rotateY(3deg)
          rotateZ(9deg)
          skewY(9deg)
      }

      .grid > div {
        background-color: var(--color);
        background-image: repeating-linear-gradient(
          #0007 0 1%,
          transparent 1% 2%,
          #0007 2% 4%,
          transparent 4% 7%
        );
      }

      .grid > div:nth-child(n) { --color: #edb826; }
      .grid > div:nth-child(n+21) { --color: #e98b0b; }
      .grid > div:nth-child(n+41) { --color: #e97641; }
      .grid > div:nth-child(n+61) { --color: #da4749; }
      .grid > div:nth-child(n+81) { --color: #c52c2f; }
      .grid > div:nth-child(n+101) { --color: #e52f66; }

      .stars {
        width: 100%;
        height: 100%;
        position: absolute;
      }

      .star {
        width: var(--size);
        height: var(--size);
        translate: var(--x) var(--y);
        background: var(--color, #fff);
        position: absolute;
      }
    `}connectedCallback(){this.render(),this.fillGrid(),this.fillStars()}fillGrid(){const t=this.shadowRoot.querySelector(".grid-container .grid");for(let a=0;a<120;a++){const i=document.createElement("div");t.appendChild(i)}}fillStars(){const t=this.shadowRoot.querySelector(".stars");for(let a=0;a<G;a++){const i=document.createElement("div");i.classList.add("star");const e=Math.floor(Math.random()*F.length),r=F[e],o=Math.floor(Math.random()*400),s=Math.floor(Math.random()*400),l=1+Math.floor(Math.random()*2);i.style.setProperty("--y",`${s}px`),i.style.setProperty("--x",`${o}px`),i.style.setProperty("--color",r),i.style.setProperty("--size",`${l}px`),t.appendChild(i)}}render(){this.shadowRoot.innerHTML=`
    <style>${y.styles}</style>
    <div class="container">

      <div class="top-banner">
        <div class="text">NODE PACKAGE MANAGER</div>
      </div>
      <div class="content">

        <div class="top-text-container">
          <div class="title">
            <h1>NPM</h1>
            <h2>Packages</h2>
          </div>
          <div class="logo-container">
            <div class="logo">
              <span>Microsoft</span>
              powered
            </div>
          </div>
        </div>
        <div class="grid-container">
          <div class="grid"></div>
        </div>
      </div>
      <div class="stars"></div>
    </div>`}}customElements.define("cover-npm",y);class w extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --width: var(--cover-size);
        --height: var(--cover-size);
        --bgcolor: #223;
        --cover-vinyl:
          linear-gradient(to bottom, var(--bgcolor) 0% 29%, var(--bgcolor) 80% 100%);
        --cover-padding: 10px 25px;
      }

      .container {
        --sky-fade: radial-gradient(circle, transparent 10%, var(--bgcolor) 75%);
        --sky-dots: radial-gradient(#fff4 12% 13%, transparent 14%);

        width: 100%;
        height: 100%;
        background: var(--sky-fade), var(--sky-dots), url(asfalt-dark.png), var(--cover-vinyl);
        background-size: 100% 100%, 14px 14px;
        box-shadow:
          0 0 80px #000c inset,
          0 0 10px #0007;
        overflow: hidden;
        position: relative;

        &::after {
          content: "";
          display: block;
          background: url(asfalt-dark.png);
          opacity: 0.5;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          z-index: 5;
        }
      }

      header {
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;

        & h1 {
          font-family: Fredoka, sans-serif;
          font-size: 7rem;
          margin: 0;
          letter-spacing: 8px;
          text-shadow: 0 0 15px #0006;
        }

        & h2 {
          font-family: Jost, sans-serif;
          font-size: 0.9rem;
          text-transform: uppercase;
          margin: 0;
          line-height: 0;
          text-shadow: 0 0 5px #000, 0 0 20px #000;
        }
      }

      .bg {
        display: grid;
        place-items: center;
        height: 100%;
        margin-top: 2rem;
        position: relative;

        & .pyramid {
          --size: 235px;

          width: var(--size);
          height: var(--size);
          background: var(--bgcolor);
          rotate: 45deg;
          display: grid;
          place-items: center;
          position: absolute;
          top: 50px;

          &::after {
            --degrees: 165deg;

            content: "";
            display: block;
            width: 92%;
            height: 92%;
            background: var(--color);
            background-image: conic-gradient(
              from 0 at 0 0,
              transparent 0 var(--degrees),
              #c43e2244 calc(var(--degrees) + 1deg) 208deg
            );
          }
        }

        & .pyramid-1 {
          --color: #c98742;
          translate: -50% 0;
        }
        & .pyramid-2 {
          --color: #c9b842;
          z-index: 5;
        }
        & .pyramid-3 {
          --color: #c98742;
          translate: 50% 0;
        }
      }

      /*
      .circle {
        --size: 300px;

        width: var(--size);
        height: var(--size);

        position: absolute;
        border-radius: 50%;
        top: 25px;
        left: calc(50% - calc(var(--size) / 2));
      }
      */

      footer {
        background: #fff;
        background-image: linear-gradient(160deg, #fff 50%, #ccc4 50%);
        position: absolute;
        display: grid;
        justify-content: center;
        bottom: 0;
        z-index: 5;
        width: 100%;
        height: 85px;

        &::before {
          content: "";
          background: #1c1c2a;
          display: block;
          width: 100%;
          height: 6px;
          position: absolute;
          top: -6px;
          z-index: 6;
        }

        & h1 {
          font-family: Jost, sans-serif;
          font-size: 2.5rem;
          margin: 0;
          color: #224;
        }

        & h2 {
          font-family: Fredoka, sans-serif;
          font-size: 1.25rem;
          font-weight: 400;
          text-transform: uppercase;
          margin: 0;
          line-height: 0;
          color: #c98742;
          translate: 0 -75%;
        }
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${w.styles}</style>
    <div class="container">
      <header>
        <h1>DOM</h1>
        <h2>Document Object Model</h2>
      </header>

      <div class="circle"></div>

      <div class="bg">
        <div class="pyramid pyramid-1"></div>
        <div class="pyramid pyramid-2"></div>
        <div class="pyramid pyramid-3"></div>
      </div>

      <footer>
        <h1>HTML DESDE JS</h1>
        <h2>Es estructura, es contenido</h2>
      </footer>
    </div>`}}customElements.define("cover-dom",w);class z extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --width: var(--cover-size);
        --height: var(--cover-size);
        --cover-vinyl:
          linear-gradient(to bottom, #171717 0% 29%, #222 80% 100%);
        --cover-padding: 10px 25px;
        --stripes: repeating-linear-gradient(to bottom, #222 0 1px, transparent 1px 8px);
        --text-shadow:
          0 -5px 10px #0005,
          0 -5px 10px #0005,
          0 5px 10px #0005,
          0 5px 10px #0005;
      }

      .container {
        width: 100%;
        height: 100%;
        background: url(asfalt-dark.png), var(--stripes), var(--cover-vinyl);
        box-shadow:
          0 0 80px #000c inset,
          0 0 10px #0007;

        display: flex;
        flex-direction: column;
        color: #fff;
        font-family: "Roboto";
      }

      .container::after {
        content: "";
        display: block;
        position: absolute;
        inset: 0;
        box-shadow: 0 0 30px #000 inset;
        z-index: 10;
      }

      .gradient {
        background:
          linear-gradient(to right, #0009 10%, transparent 20% 80%, #0009 90%),
          linear-gradient(to right, #f92440 7%, #6a3273 25% 30%, #0c9dd4 40% 41%, #1e9d66 48% 65%, #feeb68 85%, #c9793b);
        height: 25px;
        margin: 15px 0;
        position: relative;
      }

      .big.gradient::before {
        content: "";
        display: block;
        position: absolute;
        background-image: radial-gradient(#111, #222);
        inset: 0;
        clip-path: polygon(100% 5%, 93% 25%, 93% 75%, 100% 95%);
      }

      .big.gradient {
        height: 200px;
      }

      .logo,
      .vhs {
        font-family: Arvo;
        font-size: 1rem;
        font-weight: 600;
        border: 1px solid #fff;
        display: inline-block;
        padding: 0.25rem 0.5em;
        border-radius: 3px;
        transform: skewX(-15deg);
      }

      .logo {
        font-size: 1.1rem;
        color: #d4af37;
        border-color: #d4af37;
      }

      .slogan-container {
        display: flex;
        align-items: end;
        text-shadow: var(--text-shadow);
      }

      .slogan-container,
      .subtitle-container {
        height: 125px;
      }

      .subtitle-container {
        margin-bottom: 1rem;
        line-height: 50%;
        text-shadow: var(--text-shadow);
      }

      .title-container {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: end;
        line-height: 225%;
      }

      .title-container h1 {
        font-size: 3.5rem;
        text-shadow: var(--text-shadow);
        border-bottom: 1px solid #f0db4f;
        padding-bottom: 10px;
      }

      .title-container .title {
        font-size: 1rem;
        text-transform: uppercase;
        color: #4c8ac7;
        font-weight: 600;
        text-shadow: var(--text-shadow);
      }

      .ml-small {
        margin-left: 1.5rem;
        margin-right: 1.5rem;
      }

      .vhs {
        --color: #2b7ac7;

        font-family: "Coda";
        font-size: 1rem;
        transform: none;
        padding: 0.2rem 0.5rem;
        margin-top: 8px;
        background-color: var(--color);
        color: #fff;
        border-color: var(--color);
        line-height: 120%;
        text-shadow: none;
      }

      .vhs.js {
        --color: #b0a247;

        background: var(--color);
        border-color: var(--color);
        color: #111;
      }

      h1,
      p {
        margin: 0;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${z.styles}</style>
    <div class="container">
      <div class="slogan-container ml-small">
        <div class="logo">Microsoft</div>
      </div>
      <div class="gradient"></div>
      <div class="title-container ml-small">
        <h1>TYPESCRIPT</h1>
        <p class="title">Javascript corporativo</p>
      </div>
      <div class="big gradient"></div>
      <div class="subtitle-container ml-small">
        <p>Javascript para tipos como t\xFA</p>
        <div class="logo-container">
          <div class="vhs">TS</div>
          <div class="vhs js">JS</div>
        </div>
      </div>
    </div>`}}customElements.define("cover-typescript",z);class k extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --width: var(--cover-size);
        --height: var(--cover-size);
        --cover-vinyl:
          linear-gradient(to bottom, #23272f 0% 29%, #23272f 80% 100%);
        --cover-padding: 10px 25px;
      }

      .container {
        width: 100%;
        height: 100%;
        background:
          url(asfalt-dark.png),
          linear-gradient(transparent, #23272f 70%),
          var(--cover-vinyl);

        display: grid;
        grid-template-columns: 70% 30%;
        height: 100%;
      }

      .container::after {
        content: "";
        display: block;
        position: absolute;
        inset: 0;
        box-shadow:
          0 0 20px #000d inset,
          0 0 10px #0007;
        z-index: 10;
      }

      .text-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .text-logo {
        font-family: Rubik;
        font-weight: 550;
        letter-spacing: -2px;
        font-size: 5rem;
        text-align: center;
        margin-top: 0.75rem;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .text-logo h1 {
        font-size: 5rem;
        margin: 0;
        margin-top: 1rem;
        line-height: 90%;
      }

      .text-logo .subtitle {
        font-size: 1.25rem;
        letter-spacing: -1px;
        line-height: 40%;
        max-width: 200px;
        line-height: 110%;
        color: #0e7696;
      }

      .bottom {
        display: flex;
        justify-content: end;
        align-items: end;
        padding: 2rem;
      }

      .bottom svg {
        width: 250px;
        height: 250px;
        clip-path: polygon(40% 0, 100% 0, 100% 65%, 40% 65%);
        opacity: 0.2;
        transform: scale(1.55);
        transform-origin: 40% 65%;
        position:absolute;
        bottom: -87px;
        left: -99px;
        filter: drop-shadow(2px 2px 6px #000c);
      }

      .bottom svg :is(path, circle) {
        fill: #374151;
      }

      .rainbow {
        display: flex;
        align-items: end;
        background-image: linear-gradient(
          to right,
          #0e7696 20%,
          #149eca 20% 40%,
          #a3c0ca 40% 60%,
          #149eca 60% 80%,
          #0e7696 80%
        );
      }

      .pixel-container {
        --size: 24px;
        --color: #23272f;

        width: 100%;
        height: calc(var(--size) * 8);
        color: var(--color);
      }

      .pixel {
        width: var(--size);
        height: var(--size);
        background: var(--color);
        box-shadow:
          calc(4 * var(--size)) 0 0,

          calc(2 * var(--size)) calc(1 * var(--size)) 0,
          calc(3 * var(--size)) calc(1 * var(--size)) 0,

          calc(1 * var(--size)) calc(2 * var(--size)) 0,
          calc(3 * var(--size)) calc(2 * var(--size)) 0,
          calc(4 * var(--size)) calc(2 * var(--size)) 0,

          calc(0 * var(--size)) calc(3 * var(--size)) 0,
          calc(2 * var(--size)) calc(3 * var(--size)) 0,
          calc(3 * var(--size)) calc(3 * var(--size)) 0,
          calc(4 * var(--size)) calc(3 * var(--size)) 0,

          calc(1 * var(--size)) calc(4 * var(--size)) 0,
          calc(2 * var(--size)) calc(4 * var(--size)) 0,
          calc(4 * var(--size)) calc(4 * var(--size)) 0,

          calc(0 * var(--size)) calc(5 * var(--size)) 0,
          calc(1 * var(--size)) calc(5 * var(--size)) 0,
          calc(2 * var(--size)) calc(5 * var(--size)) 0,
          calc(3 * var(--size)) calc(5 * var(--size)) 0,

          calc(0 * var(--size)) calc(6 * var(--size)) 0,
          calc(2 * var(--size)) calc(6 * var(--size)) 0,
          calc(3 * var(--size)) calc(6 * var(--size)) 0,
          calc(4 * var(--size)) calc(6 * var(--size)) 0,

          calc(1 * var(--size)) calc(7 * var(--size)) 0;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${k.styles}</style>
    <div class="container">
      <div class="text-container">
        <div class="text-logo">
          <h1>React</h1>
          <div class="subtitle">No es un framework, es una librer\xEDa</div>
        </div>
        <div class="bottom">
          <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"/><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3c.6-2.4 1.1-4.8 1.5-7.1c2.1-13.2-.2-22.5-6.6-26.1c-1.9-1.1-4-1.6-6.4-1.6c-7 0-15.9 5.2-24.9 13.9c-9-8.7-17.9-13.9-24.9-13.9c-2.4 0-4.5.5-6.4 1.6c-6.4 3.7-8.7 13-6.6 26.1c.4 2.3.9 4.7 1.5 7.1c-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3c-.6 2.4-1.1 4.8-1.5 7.1c-2.1 13.2.2 22.5 6.6 26.1c1.9 1.1 4 1.6 6.4 1.6c7.1 0 16-5.2 24.9-13.9c9 8.7 17.9 13.9 24.9 13.9c2.4 0 4.5-.5 6.4-1.6c6.4-3.7 8.7-13 6.6-26.1c-.4-2.3-.9-4.7-1.5-7.1c2.4-.7 4.7-1.4 6.9-2.3c12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3c-.3 2.1-.8 4.3-1.4 6.6c-5.2-1.2-10.7-2-16.5-2.5c-3.4-4.8-6.9-9.1-10.4-13c7.4-7.3 14.9-12.3 21-12.3c1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6c-3.7.3-7.4.4-11.2.4c-3.9 0-7.6-.1-11.2-.4c-2.2-3.2-4.2-6.4-6-9.6c-1.9-3.3-3.7-6.7-5.3-10c1.6-3.3 3.4-6.7 5.3-10c1.8-3.2 3.9-6.4 6.1-9.6c3.7-.3 7.4-.4 11.2-.4c3.9 0 7.6.1 11.2.4c2.2 3.2 4.2 6.4 6 9.6c1.9 3.3 3.7 6.7 5.3 10c-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3c-3.4.8-7 1.4-10.8 1.9c1.2-1.9 2.5-3.9 3.6-6c1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3c2.3.1 4.6.2 6.9.2c2.3 0 4.6-.1 6.9-.2c-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9c1.1-3.3 2.3-6.8 3.8-10.3c1.1 2 2.2 4.1 3.4 6.1c1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3c3.4-.8 7-1.4 10.8-1.9c-1.2 1.9-2.5 3.9-3.6 6c-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3c-2.3-.1-4.6-.2-6.9-.2c-2.3 0-4.6.1-6.9.2c2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9c-1.1 3.3-2.3 6.8-3.8 10.3c-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3c1-.6 2.2-.9 3.5-.9c6 0 13.5 4.9 21 12.3c-3.5 3.8-7 8.2-10.4 13c-5.8.5-11.3 1.4-16.5 2.5c-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4c2-.8 4.2-1.5 6.4-2.1c1.6 5 3.6 10.3 6 15.6c-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3c.3-2.1.8-4.3 1.4-6.6c5.2 1.2 10.7 2 16.5 2.5c3.4 4.8 6.9 9.1 10.4 13c-7.4 7.3-14.9 12.3-21 12.3c-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3c-1 .6-2.2.9-3.5.9c-6 0-13.5-4.9-21-12.3c3.5-3.8 7-8.2 10.4-13c5.8-.5 11.3-1.4 16.5-2.5c.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1c-1.6-5-3.6-10.3-6-15.6c2.4-5.3 4.5-10.5 6-15.5c13.8 4 22.1 10 22.1 15.6c0 4.7-5.8 9.7-15.7 13.4z"/></g></svg>
        </div>
      </div>
      <div class="rainbow">
        <div class="pixel-container">
          <div class="pixel"></div>
        </div>
      </div>
    </div>`}}customElements.define("cover-react",k);class M extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --width: var(--cover-size);
        --height: var(--cover-size);
        --cover-vinyl:
          linear-gradient(to bottom, var(--bgcolor) 0% 29%, var(--bgcolor) 80% 100%);
        --cover-padding: 10px 25px;
        --bgcolor: #1d1814;
      }

      .container {
        width: 100%;
        height: 100%;
        background: url(asfalt-dark.png), var(--cover-vinyl);
        box-shadow:
          0 0 80px #000c inset,
          0 0 10px #0007;
        overflow: hidden;

        &::after {
          --offset: 8px;
          --border: 2px;

          content: "";
          display: block;
          width: calc(100% - (var(--border) * 2) - (var(--offset) * 2));
          margin: auto;
          height: calc(100% - (var(--border) * 2) - (var(--offset) * 2));
          position: absolute;
          top: var(--offset);
          left: var(--offset);
          border: var(--border) solid #1572b666;
        }
      }

      header {
        font-family: "Coda";
        font-weight: bold;
        font-size: 2rem;
        color: #fff;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-top: 1rem;
        margin-bottom: 5px;
        line-height: 90%;
        z-index: 4;
        position: relative;
        translate: 0 12px;
      }

      .dots {
        background: radial-gradient(circle 4px, #174b6f 7px, transparent 60%);
        background-size: 14px 14px;
        width: calc(100% - 22px);
        left: 11px;
        height: 125px;
        position: absolute;
        top: 90px;
        z-index: 0;
      }

      .cascade {
        box-shadow: 0 0 25px 15px var(--bgcolor);
        width: 160px;
        margin: auto;
        height: 185px;
        background: #fff;
        background-image:
          linear-gradient(to bottom,
            #fff 0 60px,
            var(--bgcolor) 60px 65px,
            #d3d3d3 65px 97px,
            var(--bgcolor) 97px 103px,
            #bebebe 103px 128px,
            var(--bgcolor) 128px 136px,
            #a7a7a7 136px 154px,
            var(--bgcolor) 154px 164px,
            #666 164px 174px
          );
        display: grid;
        justify-content: center;
        translate: 0 18px;
      }

      .clouds {
        width: 225px;
        height: 70px;
        position: relative;
        margin: auto;
        z-index: 5;
        display: grid;
        translate: 0 -12px;

        & .center {
          display: grid;
          justify-self: center;
          background: white;
          width: 100px;
          border-radius: 100px 100px 0 0;
          height: 100%;

          &::before, &::after {
            content: "";
            display: block;
            align-self: end;
            border-radius: 100px 100px 0 0;
            width: 100px;
            height: 75%;
            position: absolute;
            left: 0;
            background: white;
          }

          &::after {
            left: auto;
            right: 0;
          }
        }
      }

      .water-container {
        width: 56%;
        margin: auto;
        height: 50px;
        display: grid;
        translate: 0 -6px;

        & .item {
          width: var(--size, 100%);
          background: var(--color, #76c0cd);
          height: 10px;
          margin: auto;
          border-radius: 4px;
        }

        & .item:nth-child(2) { --color: #5e919b; --size: 85%; }
        & .item:nth-child(3) { --color: #3c5357; --size: 60%; }
      }

      .subtitle {
        font-family: Coda;
        font-size: 1.2rem;
        text-align: center;
        color: #fff8;
        position: absolute;
        width: 100%;
        bottom: 1.2rem;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${M.styles}</style>
    <div class="container">
      <header>
        CASCADA CSS
      </header>
      <div class="dots"></div>
      <div class="cascade"></div>
      <div class="clouds">
        <div class="center"></div>
      </div>
      <div class="water-container">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
      <div class="subtitle">Para tener estilo, s\xE9 espec\xEDfico.</div>
    </div>`}}customElements.define("cover-cascade",M);class L extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --width: var(--cover-size);
        --height: var(--cover-size);
        --bgcolor: #081014;
        --cover-vinyl:
          linear-gradient(to bottom, var(--bgcolor) 0% 29%, var(--bgcolor) 80% 100%);
        --cover-padding: 10px 25px;
      }

      .container {
        display: grid;
        justify-content: center;
        width: 100%;
        height: 100%;
        background: url(asfalt-dark.png), var(--cover-vinyl);
        box-shadow:
          0 0 80px #000c inset,
          0 0 10px #0007;
      }

      h1 {
        font-family: Lexend;
        font-weight: 800;
        font-size: 4rem;
        color: #fff;
        margin: 0;
        text-align: center;
      }

      sup {
        font-size: 0.8rem;
        color: #fff;
        display: inline-block;
        transform: translateY(-75%);
      }

      .content {
        --color: #abb4b1;
        --width: 125px;

        display: grid;
        grid-template-rows: 25px 65px 170px 90px;
        justify-items: center;
      }

      .subtitle {
        font-family: Arvo;
        font-size: 0.8rem;
        text-transform: uppercase;
        color: var(--color);
        border: 1px solid var(--color);
        border-left: 0;
        border-right: 0;
        width: var(--width);
        text-align: center;

        display: grid;
        align-items: center;
      }

      .model {
        width: var(--width);
        border: 1px solid var(--color);
        border-top: 0;
        border-left: 0;
        border-right: 0;
        font-family: "Playfair Display";
        font-weight: 800;
        font-size: 1.75rem;
        color: #fff;
        text-align: center;
        display: grid;
        align-items: center;
      }

      .lines-container {
        margin-top: 0.5rem;
        width: 100%;
        height: 160px;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 0.1fr 0.2fr 0.3fr 0.4fr 0.5fr 0.6fr 0.7fr 0.8fr 0.9fr 1fr;
        gap: 4px 0;
        position: relative;
      }

      .line {
        background: var(--color);
      }

      .slogan {
        font-family: "Playfair Display";
        font-size: 1.2rem;
        font-weight: bold;
        color: var(--color);
      }

      .ball {
        --size: 100px;
        --color-1: #e3e2e9;
        --color-2: #e86d15;
        --color-3: #ac270c;
        --color-4: #ff5d01;

        position: absolute;
        width: var(--size);
        height: var(--size);
        background-image: radial-gradient(
          at 20% 10%,
          var(--color-1) 5%,
          var(--color-2) 35%,
          var(--color-3) 55% 80%,
          var(--color-4)
        );
        border-radius: 50%;
        box-shadow:
          -6px -6px 10px #671808 inset,
          8px 10px 0 #0003;
        left: 25%;
        top: 5%;
      }

      .slogan p {
        margin: 0.7rem 0;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${L.styles}</style>
    <div class="container">
      <header class="title">
        <h1>Astro<sup>TM</sup></h1>
      </header>
      <div class="content">
        <div class="subtitle">astro.build</div>
        <div class="model">SSG</div>
        <div class="lines-container">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="ball"></div>
        </div>
        <footer class="slogan">
          <p>Zero-JS framework</p>
        </footer>
      </div>
    </div>`}}customElements.define("cover-astro",L);class C extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --width: var(--cover-size);
        --height: var(--cover-size);
        --texture: url(asfalt-dark.png);
        --light-color: #ececec;
        --dark-color: #313131;
        --git-color: #f34f29;
        --cover-vinyl:
          linear-gradient(
            to bottom,
            var(--light-color) 0% 29%,
            var(--light-color) 80% 100%
          );
        --cover-padding: 10px 25px;
        --line-medium-color: color-mix(in srgb, var(--line-light-color), white 10%);
        --line-light-color: #f34f29;
        --line-dark-color: color-mix(in srgb, var(--line-medium-color), white 20%);
      }

      .container {
        font-family: Lexend, sans-serif;
        font-weight: 800;
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 35% 65%;
        background: var(--cover-vinyl);
        box-shadow:
          0 0 80px #000c inset,
          0 0 10px #0007;
      }

      .left {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        & .top {
          margin-top: 5.8rem;
          display: flex;
          flex-direction: column-reverse;
          writing-mode: vertical-lr;
          text-orientation: mixed;
          rotate: -180deg;
          color: var(--dark-color);
          mask: linear-gradient(to left, black 66%, transparent 67% 68%, black 68%);

          & .title {
            font-size: 6.5rem;
          }

          & .subtitle {
            font-size: 1.5rem;
            translate: 25px;
          }
        }

        & .bottom {
          width: min-content;
          display: flex;
          gap: 0.2rem;
          flex-direction: column;
          align-items: center;
          margin-left: 1rem;
          margin-bottom: 1rem;

          & .cmd-1 {
            background: var(--dark-color);
            color: var(--light-color);
            width: min-content;
            font-weight: 600;
            padding: 0.2rem 0.5rem;
            border-radius: 50%;
          }

          & .cmd-2 {
            border: 1px solid var(--dark-color);
            width: min-content;
            padding: 0.1rem 0.3rem;
            border-radius: 4px;
            color: var(--dark-color);
          }

          & .cmd-3 {
            font-weight: 300;
            color: var(--dark-color);
          }
        }
      }

      .right {
        --mask-gaps: linear-gradient(
          to right,
          black 0 50px,
          transparent 50px 60px,
          black 60px 110px,
          transparent 110px 120px,
          black 120px 170px,
          transparent 170px 200px
        );

        --colors-gradient: linear-gradient(
          to right,
          var(--line-light-color) 0% 30%,
          var(--line-medium-color) 30% 60%,
          var(--line-dark-color) 60% 100%
        );

        display: grid;
        grid-template-rows: 35% 5% 60%;

        & .top {
          display: grid;
          place-items: start center;

          & .lines {
            width: 70%;
            height: 95%;
            background:
              linear-gradient(
                to bottom,
                #0003 0% 75%,
                transparent 75%
              ),
              var(--colors-gradient);
            mask: var(--mask-gaps);
          }
        }

        & .medium {
          display: grid;
          place-items: end center;

          & .lines {
            width: 70%;
            height: 60%;
            background: var(--colors-gradient);
            mask: var(--mask-gaps);
            translate: 0 -2px;
          }
        }

        & .bottom {
          display: grid;
          place-items: center end;
          position: relative;
          overflow: hidden;

          & .level {
            --overlay: linear-gradient(
              to top,
              #0003 0% 85%,
              transparent 85%
            );

            position: absolute;
            width: 85%;
            height: 90%;
          }

          & .level-1 {
            background: var(--overlay), var(--line-dark-color);
            translate: 120px 0;
            height: 216px;
            clip-path: inset(0 0 115px 0);
            mask-image:
              linear-gradient(to bottom, transparent 0 50px, black 50px 300px),
              linear-gradient(to right, black 0 50px, transparent 50px 300px);
          }

          & .level-2 {
            background: var(--overlay), var(--line-medium-color);
            translate: 60px 0;
            height: 216px;
            clip-path: inset(0 0 55px 0);
            mask-image:
              linear-gradient(to bottom, transparent 0 110px, black 110px 300px),
              linear-gradient(to right, black 0 50px, transparent 50px 300px);
          }

          & .level-3 {
            background: var(--overlay), var(--line-light-color);
            mask-image:
              linear-gradient(to bottom, transparent 0 170px, black 170px 300px),
              linear-gradient(to right, black 0 50px, transparent 50px 300px);
          }
        }
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${C.styles}</style>
    <div class="container">
      <div class="left">
        <div class="top">
          <div class="title">Git</div>
          <div class="subtitle">$ git status</div>
        </div>
        <div class="bottom">
          <div class="cmd-1">add</div>
          <div class="cmd-2">commit</div>
          <div class="cmd-3">push \u25B6</div>
        </div>
      </div>
      <div class="right">
        <div class="top">
          <div class="lines"></div>
        </div>
        <div class="medium">
          <div class="lines"></div>
        </div>
        <div class="bottom">
          <div class="level level-1"></div>
          <div class="level level-2"></div>
          <div class="level level-3"></div>
        </div>
      </div>
    </div>`}}customElements.define("cover-git",C);class E extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --bgcolor: #0a1022;
        --width: var(--cover-size);
        --height: var(--cover-size);
        --cover-vinyl:
          linear-gradient(to bottom, var(--bgcolor) 0% 29%, var(--bgcolor) 80% 100%);
        --cover-padding: 10px 25px;
        overflow: hidden;
      }

      .grid {
        --line: #121c3e;

        background:
          repeating-linear-gradient(to right, var(--line) 0 1px, transparent 1px 25px),
          repeating-linear-gradient(to bottom, var(--line) 0 1px, transparent 1px 25px);
        width: 100%;
        height: 100%;
        z-index: 0;
        position: absolute;
      }

      .container {
        width: 100%;
        height: 100%;
        background: url(asfalt-dark.png), var(--cover-vinyl);
        box-shadow:
          0 0 80px #000c inset,
          0 0 10px #0007;

        &::after {
          content: "";
          display: block;
          position: absolute;
          inset: 0;
          box-shadow:
            0 0 20px 10px #000d inset,
            0 0 10px #0004;
          z-index: 10;
        }
      }

      .box-container {
        width: 80%;
        height: 120%;
        translate: 0% 6%;
      }

      svg {
        fill: none;
        stroke-width: 16px;
      }

      header {
        padding-top: 1rem;
        display: grid;
        justify-content: center;
        position: relative;
        z-index: 2;
        translate: 0.5rem 0;
      }

      .title {
        font-family: Xolonium;
        font-weight: 800;
        font-size: 3rem;
        color: white;
      }

      .subtitle {
        font-family: "Rubik";
        font-size: 1.5rem;
        letter-spacing: 1.1rem;
        color: grey;
      }

      footer {
        position: absolute;
        bottom: 1rem;
        color: #999;
        display: grid;
        justify-content: center;
        width: 100%;
        font-family: "Rubik";

        & div {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: var(--bgcolor);
          text-align: center;
        }
      }

      #road2 {
        position: absolute;
        top: 0;
        left: 0;
        translate: 84px 0;
        scale: -1 1;
        mix-blend-mode: hard-light;
        opacity: 1;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${E.styles}</style>
    <div class="grid"></div>
    <div class="container">
      <header>
        <span class="title">Asincron\xEDa</span>
        <span class="subtitle">Javascript</span>
      </header>
      <div class="box-container">
        <svg id="road" viewBox="0 0 231 414">
          <path d="M1 8h114c60 0 108 48 108 108v298" stroke="#EDE52B"/>
          <path d="M1 30h108c51 0 92 41 92 92v292" stroke="#EDCE2B" />
          <path d="M1 52h105c40 0 73 33 73 73v289" stroke="#EDB62B" />
          <path d="M1 74h102c30 0 54 24 54 54v286" stroke="#ED9F2B" />
          <path d="m1 96 98-0C119 96 135 112 135 132V414" stroke="#ED7E2B" />
        </svg>
        <svg id="road2" viewBox="0 0 231 414">
          <use href="#road" />
        </svg>
      </div>
      <footer>
        <div>Aprender\xE1s. Es una promesa.</div>
      </footer>
    </div>`}}customElements.define("cover-async",E);class H extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        position: absolute;
        top: var(--y);
        left: var(--x);
        z-index: 5;
      }

      :host(.back) {
        z-index: 2;
      }

      .ball {
        --dark-color: color-mix(in srgb, var(--color), black 25%);

        width: var(--size);
        height: var(--size);
        background: var(--color, #fff);
        background-image: linear-gradient(var(--dark-color) 65%, var(--color) 85%);
        border-radius: 50%;
        box-shadow:
          0 0 20px #0003,
          0 -10px 10px #0005 inset,
          0 -5px 25px #0006 inset,
          0 -5px 30px #0009 inset;
        transform: rotate(-15deg);

        &::before {
          --shine-size: calc(var(--size) / 10);

          content: "";
          width: var(--shine-size);
          height: var(--shine-size);
          display: block;
          background: color-mix(in srgb, #fff, transparent 60%);
          background: #fff;
          mix-blend-mode: soft-light;
          border-radius: 50%;
          position: absolute;
          transform: translate(325%, 200%);
          filter: blur(1.5px);
        }

        &::after {
          --size: 85%;
          --offset: 5%;

          content: "";
          display: block;
          width: var(--size);
          height: var(--size);
          box-shadow:
          0 10px 5px #0005,
          0 -10px 5px #0005 inset,
          0 -10px 15px #0005 inset,
          0 -10px 20px #0005 inset;
          filter: blur(2px);
          mix-blend-mode: var(--blend);
          border-radius: 50%;
          opacity: 60%;
          transform: translate(var(--offset), var(--offset));
        }
      }

      :host(.dark) {
        & .ball { box-shadow: none; }
        & .shadow { display: none; }
      }

      .shadow {
        width: calc(var(--size) * 0.8);
        height: calc(var(--size) * 0.3);
        background: #0009;
        border-radius: 50%;
        filter: blur(3.5px);
        transform: translate(30%, 30%) rotate(-15deg);
      }
    `}enableAnimation(){this.shadowRoot.querySelector(":host(:not(.dark)) .ball").animate([{translate:"0 -10px"},{translate:"0 20px"}],{duration:500,easing:"ease-in",iterations:1/0,direction:"alternate"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${H.styles}</style>
    <div class="ball"></div>
    <div class="shadow"></div>`}}customElements.define("retro-ball",H);class S extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --bgcolor: #111;
        --width: var(--cover-size);
        --height: var(--cover-size);
        --cover-vinyl:
          linear-gradient(to bottom, var(--bgcolor) 0% 29%, var(--bgcolor) 80% 100%);
        --cover-padding: 10px 25px;
      }

      .container {
        width: 100%;
        height: 100%;
        background: url(asfalt-dark.png), var(--cover-vinyl);
        box-shadow:
          0 0 80px #000c inset,
          0 0 10px #0007;

        perspective: 200px;
        overflow: hidden;

        &::before {
          content: "";
          width: calc(100% - 10px);
          height: calc(100% - 10px);
          border: 2px solid #aaa8;
          box-sizing: border-box;
          margin: 5px;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 25;
        }

        &::after {
          content: "";
          display: block;
          z-index: 30;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          box-shadow:
            0 0 25px 5px #000 inset,
            0 0 50px 5px #000 inset;
        }
      }

      .grid {
        --line-color: #111;
        --cells: 13;
        --horizontal-lines: repeating-linear-gradient(var(--line-color) 15.5px, transparent 16px 32px);
        --vertical-lines: repeating-linear-gradient(to right, var(--line-color) 15.5px, transparent 16px 32px);

        display: grid;
        background: #888;
        width: 100%;
        height: 100%;
        box-shadow: 0 0 40px #f9e10599;
        position: relative;
        z-index: 5;

        background-image:
          var(--horizontal-lines),
          var(--vertical-lines),
          linear-gradient(to bottom, #333 5%, #999 35%);
        transform: rotateX(75deg) rotatey(342deg) translate(-25px, 242px);
      }

      header {
        font-family: Jost, sans-serif;
        position: absolute;
        rotate: -17deg;
        translate: 0% 28%;
        z-index: 20;

        & .title {
          color: #fff;
          font-size: 4.25rem;
          letter-spacing: -2px;
          font-weight: 700;
        }

        & .subtitle {
          color: #aaa;
          display: block;
          font-size: 1.5rem;
          font-weight: 300;
          translate: 70% 95%;
        }
      }

      footer {
        display: flex;
        justify-content: center;
        padding: 24px;
        z-index: 5;
        position: absolute;
        width: 100%;
        bottom: -10px;
        transform: translateX(-20px);

        & .brand {
          display: inline-block;
          font-family: "Lester Bold";
          font-size: 2rem;
          border: 2px solid #222;
          background: #fff;
          border-radius: 2px;
          padding: 0 3px;
          padding-top: 1px;
          line-height: 95%;
          color: #222;
          text-shadow: 0 0 1px #872b36;
        }
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${S.styles}</style>
    <div class="container">

      <header>
        <span class="subtitle">CSS/JS</span>
        <span class="title">Animaciones</span>
        <div class="line"></div>
      </header>

      <div class="grid"></div>

      <retro-ball class="dark" style="--color:#e30dc6; --x:40px; --y: 30px; --size: 35px"></retro-ball>

      <retro-ball class="dark" style="--color:#dd0b0b; --x:130px; --y: 90px; --size: 50px"></retro-ball>

      <retro-ball style="--color:#43d7b7; --x:320px; --y: 150px; --size: 30px"></retro-ball>

      <retro-ball class="dark back" style="--color:#0e6208; --x:30px; --y: 210px; --size: 70px"></retro-ball>

      <retro-ball style="--color:#c53ed1; --x:330px; --y: 160px; --size: 45px"></retro-ball>

      <retro-ball style="--color:#038bc5; --x:120px; --y: 250px; --size: 70px"></retro-ball>

      <retro-ball style="--color:#f25d32; --x:270px; --y: 290px; --size: 90px"></retro-ball>

      <retro-ball style="--color:#fef23a; --x:10px; --y: 330px; --size: 100px"></retro-ball>

      <footer>
        <div class="brand">W3C</div>
      </footer>
    </div>`}}customElements.define("cover-animations",S);class R extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --width: var(--cover-size);
        --height: var(--cover-size);
        --bgcolor: #131418;
        --cover-vinyl:
          linear-gradient(to bottom, var(--bgcolor) 0% 29%, var(--bgcolor) 80% 100%);
        --cover-padding: 10px 25px;

        --light-color: #65d43c;
        --medium-color: #3e9737;
        --dark-color: #1b4c1b;
        --extreme-dark-color: #072407;
      }

      .container {
        width: var(--width);
        height: var(--height);
        background: url(asfalt-dark.png), var(--cover-vinyl);
        box-shadow:
          0 0 80px #000c inset,
          0 0 10px #0007;
      }

      .container::after {
        content: "";
        display: block;
        position: absolute;
        inset: 0;
        box-shadow: 0 0 30px #000 inset;
        z-index: 10;
      }

      header {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      h4, h3 {
        font-family: Roboto;
        text-transform: uppercase;
      }

      h4 {
        font-family: "Anybody";
        color: #666;
      }

      h1 {
        font-family: Anybody;
        font-weight: 700;
        font-size: 5.5rem;
        text-transform: uppercase;
        color: black;

        background-image:
          linear-gradient(
            transparent 0 15px,
            var(--bgcolor) 15px 17px,
            transparent 17px 19px,
            var(--bgcolor) 19px 21px,
            transparent 21px 23px,
            var(--bgcolor) 23px 25px,
            transparent 25px
          ),
          linear-gradient(
          to bottom,
            var(--light-color),
            var(--medium-color),
            var(--dark-color),
            var(--extreme-dark-color)
          );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      h3 {
        font-size: 2.5rem;
        line-height: 60%;
        color: #fff;
      }

      h1, h3, h4 {
        margin: 0;
      }

      .gradient {
        position: relative;
        height: 125px;
        background-image:
        linear-gradient(
          to right,
          transparent 0 14px,
          var(--bgcolor) 14px 20px,
          transparent 20px 24px,
          var(--bgcolor) 24px 28px,
          transparent 28px 34px,
          var(--bgcolor) 34px 38px,
          transparent 38px
        ),
        linear-gradient(
          to right,
          var(--light-color),
          #45c543,
          var(--medium-color),
          green,
          #13d610,
          darkgreen,
          var(--dark-color)
        );
        overflow: hidden;
      }

      .gradient svg {
        height: 165px;
      }

      .gradient svg path {
        fill: var(--bgcolor);
      }

      footer {
        display: grid;
        font-family: Arvo;
        height: 100%;
        color: #fff;
        padding: 1rem;
      }

      footer p {
        margin: 0;
        color
      }

      .square {
        display: block;
        width: 65px;
        text-align: center;
        padding: 0.25rem;
        padding-top: 0.35rem;
        border: 1px solid #444;
        font-weight: 500;
      }

      .powered {
        display: inline-block;
        padding-top: 0.5rem;
        color: #666;
      }

      .powered span {
        color: var(--medium-color);
      }

      .mini-gradient {
        background: linear-gradient(
          to bottom,
          var(--light-color) 33%,
          var(--medium-color) 33% 66%,
          var(--dark-color) 66%
        );
        width: 100%;
        height: 10px;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${R.styles}</style>
    <div class="container">
      <header>
        <h4>PROGRAMACI\xD3N BACKEND</h4>
        <h1>NodeJS</h1>
        <h3>V8 engine</h3>
      </header>
      <div class="gradient">
        <svg xmlns="http://www.w3.org/2000/svg" width="547.6" height="623.3" viewBox="0 0 144.9 164.9"><path fill="#689f63" d="M85.8 272.2c-2 0-3.9-.5-5.6-1.5l-17.7-10.5c-2.7-1.5-1.4-2-.5-2.3 3.6-1.3 4.3-1.5 8-3.7.4-.2 1-.1 1.4.1l13.6 8.1c.5.3 1.2.3 1.6 0l53.2-30.7c.5-.3.8-.8.8-1.4V169c0-.7-.3-1.2-.8-1.5l-53.1-30.7c-.5-.3-1.2-.3-1.7 0L32 167.5c-.5.3-.8.9-.8 1.4v61.4c0 .6.3 1.1.8 1.4l14.5 8.4c8 4 12.8-.7 12.8-5.4v-60.5c0-.9.6-1.5 1.5-1.5h6.7c.9 0 1.6.6 1.6 1.5v60.5c0 10.6-5.8 16.6-15.8 16.6-3 0-5.5 0-12.2-3.3l-14-8c-3.4-2-5.5-5.7-5.5-9.7v-61.4c0-4 2-7.7 5.5-9.6l53.2-30.7c3.4-2 7.9-2 11.2 0l53.2 30.7c3.4 2 5.5 5.7 5.5 9.7v61.3c0 4-2.1 7.7-5.5 9.7l-53.2 30.7c-1.7 1-3.6 1.5-5.6 1.5" style="stroke-width:1.33045" transform="translate(-14 -118.6)"/><path d="M102.2 230c-23.2 0-28.1-10.8-28.1-19.7 0-.9.7-1.5 1.5-1.5h7c.7 0 1.3.5 1.4 1.3 1 7 4.1 10.5 18.2 10.5 11.2 0 16-2.5 16-8.5 0-3.4-1.4-6-18.8-7.6C85 203 76 199.8 76 188.2c0-10.8 9-17.1 24.2-17.1 17 0 25.4 5.9 26.5 18.6a1.5 1.5 0 0 1-1.6 1.6h-6.9c-.7 0-1.3-.5-1.5-1.2-1.6-7.3-5.6-9.7-16.6-9.7-12.2 0-13.6 4.3-13.6 7.5 0 3.8 1.7 5 18.2 7.2 16.3 2.1 24 5.2 24 16.7S119 230 102.3 230" style="stroke-width:1.33045" transform="translate(-14 -118.6)"/></svg>
      </div>
      <footer>
        <p>
          <span class="square">350MB</span>
          <span class="powered">Powered by <span>node_modules</span></span>
        </p>
        <div class="mini-gradient"></div>
      </footer>
    </div>`}}customElements.define("cover-node-js",R);const T=["#1A5771","#216D8E","#F79F39","#2E9AC8","#39BEF7","#38BDF8","#134053"].reverse(),D=(n,t)=>{const a=n*2+(n-2)*2,i=n-2,e=T[t],r=(7-t)/2,o=t/2,s=`--size: ${i}; --delay: ${o}s; --color: ${e}; --margin: ${r}px`,l="<div></div>".repeat(n+1),j=`<div class="central grid" style="${s}">${t<7?D(i,t+1):""}</div>`,$="<div></div>".repeat(a-(n+2)+1);return l+j+$};class A extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --width: var(--cover-size);
        --height: var(--cover-size);
        --cover-vinyl: linear-gradient(to bottom, #222 0% 29%, #222 80% 100%);
        --cover-padding: 10px 25px;
        --tailwind-color: #38bdf8;
      }

      .container {
        width: 100%;
        height: 100%;
        box-shadow: 0 0 80px #000c inset, 0 0 10px #0007;
        background: url(asfalt-dark.png), var(--cover-vinyl);
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 0.2fr 0.8fr;
        place-items: center;
        row-gap: 1rem;
        padding: 2rem;
        box-sizing: border-box;
      }

      .title {
        padding-left: 1.2rem;
        font-family: Minercraftory, sans-serif;
        font-size: 1.6rem;
        line-height: 110%;
        color: #fff;
      }

      .subtitle {
        font-family: Jost, sans-serif;
        font-size: 0.85rem;
        padding-right: 1.3rem;
        line-height: 100%;
        text-align: right;
        color: var(--tailwind-color);
        text-transform: uppercase;
      }

      .parent-grid {
        grid-column: span 2;
        place-content: center;
        max-width: 281px;
        max-height: 281px;
      }

      .grid {
        --block-size: 20px;
        --margin-size: 5px;

        display: grid;
        grid-template-columns: repeat(var(--size, 15), var(--block-size));
        grid-template-rows: repeat(var(--size, 15), var(--block-size));

        perspective: 600px;

        & > div:not(.central) {
          background: var(--color, ${T[0]});
          /* box-shadow: 0 0 5px 1px
            color-mix(in srgb, var(--color, ${T[0]}), black 30%);*/
          margin: var(--margin, 3.5px);
          border-radius: 1px;
          animation: resize 2s infinite alternate var(--delay, 0.5s);
        }

        & .central {
          grid-column-end: span calc(var(--size, 15));
          grid-row-end: span calc(var(--size, 15));
        }
      }

      @keyframes resize {
        from { transform: rotateX(0) }
        to { transform: rotateX(80deg) }
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${A.styles}</style>
    <div class="container">
      <div class="title">TailwindCSS</div>
      <div class="subtitle">Clases de utilidad</div>
      <div class="grid parent-grid">
        ${D(15,1)}
      </div>
    </div>`}}customElements.define("cover-tailwind",A);const O={html:`
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
  </svg>`,react:`
<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"/><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3c.6-2.4 1.1-4.8 1.5-7.1c2.1-13.2-.2-22.5-6.6-26.1c-1.9-1.1-4-1.6-6.4-1.6c-7 0-15.9 5.2-24.9 13.9c-9-8.7-17.9-13.9-24.9-13.9c-2.4 0-4.5.5-6.4 1.6c-6.4 3.7-8.7 13-6.6 26.1c.4 2.3.9 4.7 1.5 7.1c-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3c-.6 2.4-1.1 4.8-1.5 7.1c-2.1 13.2.2 22.5 6.6 26.1c1.9 1.1 4 1.6 6.4 1.6c7.1 0 16-5.2 24.9-13.9c9 8.7 17.9 13.9 24.9 13.9c2.4 0 4.5-.5 6.4-1.6c6.4-3.7 8.7-13 6.6-26.1c-.4-2.3-.9-4.7-1.5-7.1c2.4-.7 4.7-1.4 6.9-2.3c12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3c-.3 2.1-.8 4.3-1.4 6.6c-5.2-1.2-10.7-2-16.5-2.5c-3.4-4.8-6.9-9.1-10.4-13c7.4-7.3 14.9-12.3 21-12.3c1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6c-3.7.3-7.4.4-11.2.4c-3.9 0-7.6-.1-11.2-.4c-2.2-3.2-4.2-6.4-6-9.6c-1.9-3.3-3.7-6.7-5.3-10c1.6-3.3 3.4-6.7 5.3-10c1.8-3.2 3.9-6.4 6.1-9.6c3.7-.3 7.4-.4 11.2-.4c3.9 0 7.6.1 11.2.4c2.2 3.2 4.2 6.4 6 9.6c1.9 3.3 3.7 6.7 5.3 10c-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3c-3.4.8-7 1.4-10.8 1.9c1.2-1.9 2.5-3.9 3.6-6c1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3c2.3.1 4.6.2 6.9.2c2.3 0 4.6-.1 6.9-.2c-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9c1.1-3.3 2.3-6.8 3.8-10.3c1.1 2 2.2 4.1 3.4 6.1c1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3c3.4-.8 7-1.4 10.8-1.9c-1.2 1.9-2.5 3.9-3.6 6c-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3c-2.3-.1-4.6-.2-6.9-.2c-2.3 0-4.6.1-6.9.2c2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9c-1.1 3.3-2.3 6.8-3.8 10.3c-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3c1-.6 2.2-.9 3.5-.9c6 0 13.5 4.9 21 12.3c-3.5 3.8-7 8.2-10.4 13c-5.8.5-11.3 1.4-16.5 2.5c-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4c2-.8 4.2-1.5 6.4-2.1c1.6 5 3.6 10.3 6 15.6c-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3c.3-2.1.8-4.3 1.4-6.6c5.2 1.2 10.7 2 16.5 2.5c3.4 4.8 6.9 9.1 10.4 13c-7.4 7.3-14.9 12.3-21 12.3c-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3c-1 .6-2.2.9-3.5.9c-6 0-13.5-4.9-21-12.3c3.5-3.8 7-8.2 10.4-13c5.8-.5 11.3-1.4 16.5-2.5c.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1c-1.6-5-3.6-10.3-6-15.6c2.4-5.3 4.5-10.5 6-15.5c13.8 4 22.1 10 22.1 15.6c0 4.7-5.8 9.7-15.7 13.4z"/></g></svg>
`,dom:"<svg></svg>",npm:`
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="540px" height="210px" viewBox="0 0 18 7">
<path fill="#CB3837" d="M0,0h18v6H9v1H5V6H0V0z M1,5h2V2h1v3h1V1H1V5z M6,1v5h2V5h2V1H6z M8,2h1v2H8V2z M11,1v4h2V2h1v3h1V2h1v3h1V1H11z"/>
<polygon fill="#FFFFFF" points="1,5 3,5 3,2 4,2 4,5 5,5 5,1 1,1 "/>
<path fill="#FFFFFF" d="M6,1v5h2V5h2V1H6z M9,4H8V2h1V4z"/>
<polygon fill="#FFFFFF" points="11,1 11,5 13,5 13,2 14,2 14,5 15,5 15,2 16,2 16,5 17,5 17,1 "/>
</svg>
`,postcss:`
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
  `,svg:`
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 300 300">

  <title>SVG Logo</title>
  <desc>Designed for the SVG Logo Contest in 2006 by Harvey Rayner, and adopted by W3C in 2009. It is available under the Creative Commons license for those who have an SVG product or who are using SVG on their site.</desc>

   <metadata id="license">
     <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://web.resource.org/cc/">
       <cc:Work rdf:about="">
         <dc:title>SVG Logo</dc:title>
         <dc:date>14-08-2009</dc:date>
         <dc:creator>
           <cc:Agent><dc:title>W3C</dc:title></cc:Agent>
           <cc:Agent><dc:title>Harvey Rayner, designer</dc:title></cc:Agent>
         </dc:creator>
         <dc:description>See document description</dc:description>
         <cc:license rdf:resource="http://creativecommons.org/licenses/by-nc-sa/2.5/"/>
         <dc:format>image/svg+xml</dc:format>
         <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
       </cc:Work>
       <cc:License rdf:about="http://creativecommons.org/licenses/by-nc-sa/2.5/">
         <cc:permits rdf:resource="http://web.resource.org/cc/Reproduction"/>
         <cc:permits rdf:resource="http://web.resource.org/cc/Distribution"/>
         <cc:requires rdf:resource="http://web.resource.org/cc/Notice"/>
         <cc:requires rdf:resource="http://web.resource.org/cc/Attribution"/>
         <cc:prohibits rdf:resource="http://web.resource.org/cc/CommercialUse"/>
         <cc:permits rdf:resource="http://web.resource.org/cc/DerivativeWorks"/>
         <cc:requires rdf:resource="http://web.resource.org/cc/ShareAlike"/>
       </cc:License>
     </rdf:RDF>
   </metadata>


   <defs>
     <g id="SVG" fill="#ffffff" transform="scale(2) translate(20,79)">
        <path id="S" d="M 5.482,31.319 C2.163,28.001 0.109,23.419 0.109,18.358 C0.109,8.232 8.322,0.024 18.443,0.024 C28.569,0.024 36.782,8.232 36.782,18.358 L26.042,18.358 C26.042,14.164 22.638,10.765 18.443,10.765 C14.249,10.765 10.850,14.164 10.850,18.358 C10.850,20.453 11.701,22.351 13.070,23.721 L13.075,23.721 C14.450,25.101 15.595,25.500 18.443,25.952 L18.443,25.952 C23.509,26.479 28.091,28.006 31.409,31.324 L31.409,31.324 C34.728,34.643 36.782,39.225 36.782,44.286 C36.782,54.412 28.569,62.625 18.443,62.625 C8.322,62.625 0.109,54.412 0.109,44.286 L10.850,44.286 C10.850,48.480 14.249,51.884 18.443,51.884 C22.638,51.884 26.042,48.480 26.042,44.286 C26.042,42.191 25.191,40.298 23.821,38.923 L23.816,38.923 C22.441,37.548 20.468,37.074 18.443,36.697 L18.443,36.692 C13.533,35.939 8.800,34.638 5.482,31.319 L5.482,31.319 L5.482,31.319 Z"/>

        <path id="V" d="M 73.452,0.024 L60.482,62.625 L49.742,62.625 L36.782,0.024 L47.522,0.024 L55.122,36.687 L62.712,0.024 L73.452,0.024 Z"/>

        <path id="G" d="M 91.792,25.952 L110.126,25.952 L110.126,44.286 L110.131,44.286 C110.131,54.413 101.918,62.626 91.792,62.626 C81.665,62.626 73.458,54.413 73.458,44.286 L73.458,44.286 L73.458,18.359 L73.453,18.359 C73.453,8.233 81.665,0.025 91.792,0.025 C101.913,0.025 110.126,8.233 110.126,18.359 L99.385,18.359 C99.385,14.169 95.981,10.765 91.792,10.765 C87.597,10.765 84.198,14.169 84.198,18.359 L84.198,44.286 L84.198,44.286 C84.198,48.481 87.597,51.880 91.792,51.880 C95.981,51.880 99.380,48.481 99.385,44.291 L99.385,44.286 L99.385,36.698 L91.792,36.698 L91.792,25.952 L91.792,25.952 Z"/>
      </g>
   </defs>

   <path id="base" fill="#000" d="M8.5,150 H291.5 V250 C291.5,273.5 273.5,291.5 250,291.5 H50 C26.5,291.5 8.5,273.5 8.5,250 Z"/>
   <g stroke-width="38.0086" stroke="#000">
     <g id="svgstar" transform="translate(150, 150)">
       <path id="svgbar" fill="#ffb13b" d="M-84.1487,-15.8513 a22.4171,22.4171 0 1 0 0,31.7026 h168.2974 a22.4171,22.4171 0 1 0 0,-31.7026 Z"/>
       <use xlink:href="#svgbar" transform="rotate(45)"/>
       <use xlink:href="#svgbar" transform="rotate(90)"/>
       <use xlink:href="#svgbar" transform="rotate(135)"/>
     </g>
   </g>
   <use xlink:href="#svgstar"/>
   <use xlink:href="#base" opacity="0.85"/>
   <use xlink:href="#SVG"/>

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
  `,typescript:`
<svg xmlns="http://www.w3.org/2000/svg" fill="none" height="380" viewBox="0 0 512 512" width="380"><rect fill="#3178c6" height="512" rx="50" width="512"/><rect fill="#3178c6" height="512" rx="50" width="512"/><path clip-rule="evenodd" d="m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z" fill="#fff" fill-rule="evenodd"/></svg>
`,async:""};class B extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.logo=this.getAttribute("logo"),this.render();const t=this.shadowRoot.querySelector(".container"),a=document.createElement(`cover-${this.logo}`);a.classList.add("box"),t.insertAdjacentElement("afterbegin",a)}render(){this.shadowRoot.innerHTML=`
    <style>${B.styles}</style>

    <div class="container">
      ${O[this.logo]}
    </div>
    `}}customElements.define("cover-box",B);
