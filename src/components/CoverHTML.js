class CoverHTML extends HTMLElement {
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
          145deg,
          #fff 40%,
          #D3274D 40.25% 45%,
          #DE5737 45.25% 50%,
          #EA8F26 50.25% 55%,
          #EFB631 55.25% 60%,
          #1E1F21 60%
        );
        --cover-padding: 6px 16px;
        font-size: 16px;
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

      h1 {
        font-family: "Roboto";
        font-weight: 900;
        letter-spacing: -3px;
        font-size: 5rem;
        color: #222;
        margin: 0;
        margin-bottom: -16px;
        padding: 0;
      }

      h1 span {
        font-weight: 900;
        font-size: 5rem;
        display: inline-block;
        transform: translateX(-5px);
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
        font-size: 1.1rem;
        color: #555a;
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
    <style>${CoverHTML.styles}</style>
    <div class="container">
      <div class="group">
        <h1>HTML<span>5</span></h1>
        <span>&lt;Remarkable Hits&gt;</span>
        <span class="normal">Close your <strong>tags</strong></span>
        <span class="normal">Vinyl Disc</span>
      </div>
      <footer>
        <div class="brand">W3C</div>
      </footer>
    </div>`;
  }
}

customElements.define("cover-html", CoverHTML);
