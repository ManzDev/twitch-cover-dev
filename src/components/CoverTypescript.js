class CoverTypescript extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
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
        clip-path: polygon(100% 5%, 90% 25%, 90% 75%, 100% 95%);
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
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CoverTypescript.styles}</style>
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
        <p>Javascript para tipos como tú</p>
        <div class="logo-container">
          <div class="vhs">TS</div>
          <div class="vhs js">JS</div>
        </div>
      </div>
    </div>`;
  }
}

customElements.define("cover-typescript", CoverTypescript);
