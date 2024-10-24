class CoverPerformance extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --width: var(--cover-size);
        --height: var(--cover-size);
        --cover-vinyl: linear-gradient(
          0.375turn,
          var(--primary-color) 34.9%,
          var(--secondary-color) 35%
        );
        --cover-padding: 10px 25px;
        --primary-color: #f9edbd;
        --secondary-color: #190e2c;
      }

      .container {
        width: 100%;
        height: 100%;
        background: url(asfalt-dark.png), var(--cover-vinyl);
        box-shadow:
          0 0 80px #000c inset,
          0 0 10px #0007;
        display: grid;
        align-content: space-between;
      }

      header {
        display: grid;
        justify-content: end;
        font-family: Jost;

        & .bars {
          width: 200px;
          height: 325px;
          position: absolute;
          display: flex;
          gap: 1rem;
          translate: 10px 0;
          clip-path: polygon(0 0, 100% 0, 100% 37%, 0 100%);

          & .bar {
            width: 40px;
            height: 100%;
            translate: 0 4.5rem;
            background: linear-gradient(
              to right,
              var(--color, grey) 50%,
              color-mix(in srgb, var(--color, grey), white 25%) 50%
            )
          }

          & .bar:nth-child(1) {
            translate: 0;
          }
        }

        & h1 {
          padding: 1rem;
          text-transform: uppercase;
          line-height: 100%;
          text-align: right;
          font-size: 2.85rem;
          width: min-content;
          margin: 0;
          background: linear-gradient(
            0.375turn,
            var(--secondary-color) 48%,
            #fff 48%
          );
          background-clip: text;
          -webkit-text-fill-color: transparent;
          z-index: 5;

          & span {
            line-height: 100%;
            font-size: 4rem;
          }
        }
      }

      .center {
        position: absolute;
        bottom: 20%;
        right: 0;

        & svg {
          --size: 200px;

          opacity: 0.3;
          color: #888;
          width: var(--size);
          height: var(--size);
        }
      }

      footer {
        display: grid;
        justify-content: end;
        font-family: Jost;

        & h2 {
          font-size: 1.4rem;
          max-width: 300px;
          text-transform: uppercase;
          color: var(--primary-color);
          margin: 0.75rem 1.25rem;
          text-align: right;
          font-weight: 600;
          line-height: 110%;
          translate: 0 -30px;

          & span {
            color: #ed8c2b;
          }
        }

      }

      .stars {
        position: absolute;
        width: 100px;
        height: 100px;
        bottom: 4rem;
        left: 4rem;

        & svg {
          scale: 0.5;
          position: absolute;

          & path {
            fill: #fff;
          }
        }

        & svg:nth-child(2) {
          scale: 0.25;
          translate: -50px -60px;
          opacity: 0.7;
        }

        & svg:nth-child(3) {
          scale: 0.1;
          translate: -10px -40px;
          opacity: 0.7;
        }
      }

      .endline {
        --color: #f83436;

        background:
          linear-gradient(
            to bottom,
            var(--color) 0 30%,
            transparent 25% 45%,
            color-mix(in srgb, var(--color), transparent 50%) 45% 55%,
            transparent 55% 75%,
            color-mix(in srgb, var(--color), transparent 75%) 75% 80%,
            transparent 80%
          );
        width: 100%;
        height: 20px;
        position: absolute;
        bottom: 5px;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CoverPerformance.styles}</style>
    <div class="container">
      <header>
        <div class="bars">
          <div class="bar" style="--color:#f83436"></div>
          <div class="bar" style="--color:#ed8c2b"></div>
          <div class="bar" style="--color:#f83436"></div>
          <div class="bar" style="--color:#ed8c2b"></div>
        </div>
        <h1>Rendimiento <span>web</span></h1>
      </header>
      <div class="center">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 16a3 3 0 0 1-3-3c0-1.12.61-2.1 1.5-2.61l9.71-5.62l-5.53 9.58c-.5.98-1.51 1.65-2.68 1.65m0-13c1.81 0 3.5.5 4.97 1.32l-2.1 1.21C14 5.19 13 5 12 5a8 8 0 0 0-8 8c0 2.21.89 4.21 2.34 5.65h.01c.39.39.39 1.02 0 1.41s-1.03.39-1.42.01A9.97 9.97 0 0 1 2 13A10 10 0 0 1 12 3m10 10c0 2.76-1.12 5.26-2.93 7.07c-.39.38-1.02.38-1.41-.01a.996.996 0 0 1 0-1.41A7.95 7.95 0 0 0 20 13c0-1-.19-2-.54-2.9L20.67 8C21.5 9.5 22 11.18 22 13"/></svg>
      </div>
      <footer>
        <h2>Alcanza mayor «Perfor<span>manz</span>»</h2>
        <div class="bars"></div>
      </footer>
      <div class="stars">
        <svg id="star" viewBox="0 0 80 106"><path d="m40 0 9 41 31 12-31 12-9 41-9-41L0 53l31-12z" fill="currentColor"/></svg>
        <svg><use href="#star" /></svg>
        <svg><use href="#star" /></svg>
      </div>
      <div class="endline"></div>
    </div>`;
  }
}

customElements.define("cover-performance", CoverPerformance);
