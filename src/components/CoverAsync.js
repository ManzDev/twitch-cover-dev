class CoverAsync extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
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
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CoverAsync.styles}</style>
    <div class="grid"></div>
    <div class="container">
      <header>
        <span class="title">Asincronía</span>
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
        <div>Aprenderás. Es una promesa.</div>
      </footer>
    </div>`;
  }
}

customElements.define("cover-async", CoverAsync);
