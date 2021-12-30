class CoverTerminal extends HTMLElement {
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
        --cover-vinyl: linear-gradient(
          140deg,
          transparent 0 45%,
          #141 45.25% 50%,
          #171 50.25% 55%,
          #191 55.25% 60%,
          #1c1 60.25% 65%,
          transparent 65.25%);
        --cover-padding: 10px 25px;
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
        background-color: #111;

        overflow: hidden;
      }

      h1, h2 {
        font-family: "Roboto Mono";
        letter-spacing: -2px;
        line-height: 100%;
        text-align: left;
        color: #eee;
        margin: 0;
      }

      .group {
        margin: 25px 10px;
        padding: var(--cover-padding);
      }

      h1 {
        font-size: 3.5rem;
        font-size: 6rem;
        letter-spacing: -8px;
        color: #fff;
      }

      h2 {
        font-size: 2.25rem;
        color: #777;
      }

      footer {
        display: flex;
        justify-content: flex-end;
        padding: 40px 25px;
      }

      footer .text {
        font-family: "EnterCommand";
        letter-spacing: 0px;
        font-size: 2.2rem;
        line-height: 100%;
        text-align: left;
        color: #707070;
        margin: 0;
        transform: translate(-10px, 10px);
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CoverTerminal.styles}</style>
    <div class="container">
      <div class="group">
        <h2>Terminal de</h2>
        <h1>Linux</h1>
      </div>
      <footer>
        <div class="text">$ sudo whoami</div>
      </footer>
    </div>`;
  }
}

customElements.define("cover-terminal", CoverTerminal);
