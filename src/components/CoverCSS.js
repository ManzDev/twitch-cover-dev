class CoverCSS extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
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
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CoverCSS.styles}</style>
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
    </div>`;
  }
}

customElements.define("cover-css", CoverCSS);
