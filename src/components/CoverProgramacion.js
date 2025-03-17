class CoverProgramacion extends HTMLElement {
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
        --arrow-ribbon-shape: polygon(0 0, 93% 0, 100% 50%, 93% 100%, 0 100%);
      }

      .container {
        width: 100%;
        height: 100%;
        background: url(asfalt-dark.png), var(--cover-vinyl);
        box-shadow:
          0 0 80px #000c inset,
          0 0 10px #0007;
      }

      .arrow-ribbons-container {
        padding-top: 1rem;
        overflow: hidden;
        filter: drop-shadow(5px 5px 5px #0005);
      }

      hgroup {
        display: grid;
        place-items: center;
        color: #ddd;

        & h1 {
          font-family: "Russo One";
          font-size: 3.75rem;
          text-transform: uppercase;
          margin-top: 1rem;
          margin-bottom: 0;
          border-bottom: 1px solid red;

          mask-image: linear-gradient(
            to bottom,
            black 50%,
            transparent 50% 55%,
            black 55% 65%,
            transparent 65% 68%,
            black 68% 75%,
            transparent 75% 78%,
            black 78% 100%
          );
        }

        & p {
          font-family: "Russo One";
          font-weight: 500;
          font-size: 1.5rem;
          letter-spacing: 12px;
          text-indent: 10px;
          text-transform: uppercase;
          margin: 0;
          padding-top: 0.5rem;
          color: #666;
        }
      }

      footer > p {
        color: #eee;
        text-align: center;
        font-family: "Rubik Italic";
        font-size: 1.2rem;
        margin-top: 2rem;
      }

      .arrow-ribbon {
        --dark-color: color-mix(in srgb, var(--color), white 5%);

        width: 95%;
        height: 55px;
        background-image:
          url(asfalt-dark.png),
          linear-gradient(
            to right,
            var(--dark-color) var(--start-gradient, 35% 40%),
            var(--color) 150%
          );
        clip-path: var(--arrow-ribbon-shape);
        translate: var(--offset) 0;
        filter: saturate(120%);

        &.first {
          --color: #f0db4f;
          --offset: -1rem;
          --start-gradient: 0% 25%;
        }
        &.second  {
          --color: #974ff0;
          --offset: -6rem;
          --start-gradient: 0% 35%;
        }
        &.third   {
          --color: #f0874f;
          --offset: -12rem;
          --start-gradient: 0% 55%;
        }

        &::before {
          content: "";
          display: block;
          position: absolute;
          inset: 0;
          background-image: linear-gradient(#0006, transparent);
          translate: 0 25px;
        }
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CoverProgramacion.styles}</style>
    <div class="container">

      <div class="arrow-ribbons-container">
        <div class="arrow-ribbon first"></div>
        <div class="arrow-ribbon second"></div>
        <div class="arrow-ribbon third"></div>
      </div>

      <footer>
        <hgroup>
          <h1>Aprender</h1>
          <p>Programación</p>
        </hgroup>

        <p>Transforma café en código</p>

      </footer>

    </div>`;
  }
}

customElements.define("cover-programacion", CoverProgramacion);
