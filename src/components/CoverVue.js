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

    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CoverVue.styles}</style>
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
        <div class="subtitle">¡Con reactividad!</div>
        <div class="caption">Curva de aprendizaje baja</div>
      </div>

    </div>`;
  }
}

customElements.define("cover-vue", CoverVue);
