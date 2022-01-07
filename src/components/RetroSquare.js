class RetroSquare extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
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
          0 0 20px #000c inset;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${RetroSquare.styles}</style>
    <div class="container">

    </div>`;
  }
}

customElements.define("retro-square", RetroSquare);
