class CoverCSSTools extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --line: #26262633;
        --color: transparent;
        --size: 20px;
        --width: var(--cover-size);
        --height: var(--cover-size);
        --cover-vinyl:
          repeating-linear-gradient(
            var(--line) 0px 1px,
            transparent 1px 19px
          ),
          repeating-linear-gradient(
            90deg,
            var(--line) 0px 1px,
            var(--color) 1px 19px
          ),
          linear-gradient(to bottom, #737a72 45%, #121317 45%);
        --cover-padding: 10px 25px;
      }

      .container {
        width: 100%;
        height: 100%;
        background: url(asfalt-dark.png), var(--cover-vinyl);
        box-shadow:
          0 0 80px #000c inset,
          0 0 10px #0007;
        position: relative;

        &::after {
          content: "";
          display: block;
          display: none;
          position: absolute;
          inset: 0;
          box-shadow:
            0 0 20px 10px #000d inset,
            0 0 10px #0004;
          z-index: 10;
        }
      }

      header {
        height: 50%;
        display: grid;

        & h1 {
          font-family: Jost, sans-serif;
          font-size: 1.6rem;
          text-transform: uppercase;
          width: min-content;
          line-height: 250%;
          color: #fff;
          justify-self: center;
          background: linear-gradient(
            #444 88%,
            transparent 88% 90%,
            #4449 88% 93%,
            transparent 93% 96%,
            #4446 96% 98%,
            transparent 97% 99%,
            #4443 99%
          );
          padding: 0 0.75rem;
          margin: 0;
          text-align: center;
          scale: 1;
          height: 100px;

          & span {
            font-size: 7rem;
            line-height: 50%;
            text-shadow: 0 0 5px #444d;
          }
        }

        & .barcode {
          display: grid;
          width: 125px;
          height: 50px;
          margin: auto;
          translate: 0 -10px;
          text-align: center;
          align-items: end;
          color: #fff;
          font-family: Jost;
          display: none;

          & .lines {
            background: linear-gradient(
              to right,
              #fff 0%,
              #fff 2%,
              transparent 2%,
              transparent 4%,
              #fff 4%,
              #fff 6%,
              transparent 6%,
              transparent 10%,
              #fff 10%,
              #fff 12%,
              transparent 12%,
              transparent 14%,
              #fff 14%,
              #fff 18%,
              transparent 18%,
              transparent 20%,
              #fff 20%,
              #fff 24%,
              transparent 24%,
              transparent 26%,
              #fff 26%,
              #fff 28%,
              transparent 28%,
              transparent 30%,
              #fff 30%,
              #fff 34%,
              transparent 34%,
              transparent 36%,
              #fff 36%,
              #fff 40%,
              transparent 40%,
              transparent 42%,
              #fff 42%,
              #fff 44%,
              transparent 44%,
              transparent 46%,
              #fff 46%,
              #fff 50%,
              transparent 50%,
              transparent 52%,
              #fff 52%,
              #fff 54%,
              transparent 54%,
              transparent 58%,
              #fff 58%,
              #fff 60%,
              transparent 60%,
              transparent 62%,
              #fff 62%,
              #fff 66%,
              transparent 66%,
              transparent 68%,
              #fff 68%,
              #fff 72%,
              transparent 72%,
              transparent 74%,
              #fff 74%,
              #fff 78%,
              transparent 78%,
              transparent 80%,
              #fff 80%,
              #fff 84%,
              transparent 84%,
              transparent 86%,
              #fff 86%,
              #fff 90%,
              transparent 90%,
              transparent 94%,
              #fff 94%,
              #fff 100%
            );
            width: 100%;
            height: 35px;
          }
        }
      }

      .tool {
        position: absolute;
        width: 100%;
        top: 45%;
        z-index: 20;

        & svg {
          translate: 20px -50%;
          height: 60px;
        }
      }

      .shine {
        color: white;
        font-size: 4rem;
      }

      footer {
        height: 50%;
        display: grid;
        justify-content: center;
        align-content: center;
        align-items: space-around;
        translate: 0 -15px;

        & h2 {
          color: #ccc;
          font-family: Jost;
          font-size: 1.75rem;
          text-transform: uppercase;
          margin: 0;
          margin-bottom: 0.5rem;
        }

        & table {
          --color: #554337;
          border: 2px solid var(--color);
          font-family: Jost;
          text-align: center;
          border-collapse: collapse;
          margin-top: 1rem;

          & th, td {
            border: 2px solid var(--color);
          }

          & th {
            color: #ddd;
          }

          & td {
            font-weight: bold;
            color: var(--color);
          }
        }
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CoverCSSTools.styles}</style>
    <div class="container">
      <header>
        <h1>Herramientas <span>CSS</span></h1>
        <div class="barcode">
          <div class="lines"></div>
          <span>152762-51</span>
        </div>
      </header>
      <div class="tool">
        <svg viewBox="0 0 768 128">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="50%">
            <stop offset="0%"  stop-color="#F64497"/>
            <stop offset="13%" stop-color="#F94376"/>
            <stop offset="14%" stop-color="#FF3755"/>
            <stop offset="27%" stop-color="#FF3F47"/>
            <stop offset="28%" stop-color="#E5732C"/>
            <stop offset="41%" stop-color="#CC8C2B"/>
            <stop offset="42%" stop-color="#DFBE33"/>
            <stop offset="56%" stop-color="#6DA145"/>
            <stop offset="57%" stop-color="#34773B"/>
            <stop offset="70%" stop-color="#577DA1"/>
            <stop offset="71%" stop-color="#506790"/>
            <stop offset="84%" stop-color="#46557C"/>
            <stop offset="85%" stop-color="#374665"/>
            <stop offset="100%" stop-color="#33384C"/>
          </linearGradient>
        </defs>
        <path d="M123 39a19 19 0 01-16-9C97 15 81 0 58 0 21 0 6 18 0 27c-1 2 0 4 3 4H38a8 8 0 017 4L59 60a8 8 0 010 8L45 93A8 8 0 0138 97H3c-2 0-4 3-3 4C6 110 21 128 58 128c23 0 39-15 49-31a19 19 0 0116-9h523a19 19 0 0116 9c10 16 25 31 49 31 37 0 52-18 57-27 1-2-0-4-3-4H730a8 8 0 01-7-4L709 68a8 8 0 010-8l15-25a8 8 0 017-4h35c2 0 4-3 3-4C762 18 747 0 710 0c-23 0-39 15-49 31a19 19 0 01-16 9h-523" fill="url(#gradient)"/></svg>
      </div>
      <footer>
        <div class="shine"></div>
        <h2>Mejorando tu CSS</h2>
        <table>
          <tr>
            <th>LIB/FW</th>
            <th>PreCSS</th>
            <th>CLI</th>
          </tr>
          <tr>
            <td>725KB</td>
            <td>442KB</td>
            <td>150KB</td>
          </tr>
        </table>
      </footer>
    </div>`;
  }
}

customElements.define("cover-css-tools", CoverCSSTools);
