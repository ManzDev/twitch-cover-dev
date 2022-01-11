class CoverVue extends HTMLElement {
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
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CoverVue.styles}</style>
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
    </div>`;
  }
}

customElements.define("cover-vue", CoverVue);
