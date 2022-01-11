class CoverWebComponents extends HTMLElement {
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
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CoverWebComponents.styles}</style>
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
    </div>`;
  }
}

customElements.define("cover-webcomponents", CoverWebComponents);
