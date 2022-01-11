import "./RetroSquare.js";

class CoverPostCSS extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --width: var(--cover-size);
        --height: var(--cover-size);
        --cover-vinyl: linear-gradient(200deg, #070B0F 50%, #112, #224, #447 90% 100%);
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
          0 0 80px #000c inset,
          0 0 10px #0007;

        font-family: "Roboto";
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
        text-shadow: 3px 3px 0 #0005;
      }

      .subtitle {
        font-family: "Roboto Mono";
        font-size: 1.15rem;
        font-weight: 900;
        text-shadow: 2px 2px 0 #0005;
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
        background: #fff;
        width: 150px;
        height: 150px;
        border-radius: 20px;
        position: absolute;
        bottom: -100px;
        transform: scaleX(-0.7) rotate(45deg);
      }

      footer {
        font-family: "Roboto Mono";
        letter-spacing: -1px;
        color: #999;
        font-size: 0.9rem;
        position: absolute;
        bottom: 10px;
        right: 15px;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CoverPostCSS.styles}</style>
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
    </div>`;
  }
}

customElements.define("cover-postcss", CoverPostCSS);
