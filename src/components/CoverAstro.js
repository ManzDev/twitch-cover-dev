class CoverAstro extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
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
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CoverAstro.styles}</style>
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
    </div>`;
  }
}

customElements.define("cover-astro", CoverAstro);
