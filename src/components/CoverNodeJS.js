class CoverNodeJS extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
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
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CoverNodeJS.styles}</style>
    <div class="container">
      <header>
        <h4>PROGRAMACIÓN BACKEND</h4>
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
    </div>`;
  }
}

customElements.define("cover-node", CoverNodeJS);
