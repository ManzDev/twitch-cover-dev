class CoverFonts extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --bgcolor: #782daa;
        --tile-size: 25px;
        --width: var(--cover-size);
        --height: var(--cover-size);
        --cover-vinyl:
          linear-gradient(to bottom, var(--bgcolor) 0% 29%, var(--bgcolor) 80% 100%);
        --cover-padding: 10px 25px;
        --grid:
          repeating-linear-gradient(
            to bottom,
            transparent 0 var(--tile-size),
            #0006 var(--tile-size) calc(var(--tile-size) + 1px)
          ),
          repeating-linear-gradient(
            to right,
            transparent 0 var(--tile-size),
            #0006 var(--tile-size) calc(var(--tile-size) + 1px)
          );
      }

      .container {
        width: 100%;
        height: 100%;
        background-image:
          var(--grid),
          url(asfalt-dark.png),
          var(--cover-vinyl);
        box-shadow:
          0 0 80px #000c inset,
          0 0 10px #0007;

        display: grid;
        grid-template-rows: 2fr 0.5fr 0.4fr;
      }

      header {
        color: #fff;
        display: grid;
        place-items: center;
        place-content: center;
        height: 100%;

        & h1 {
          font-family: "Rubik";
          font-size: 5.5rem;
          translate: -5px;
          text-transform: uppercase;
          letter-spacing: -8px;
          margin: 0;

          & span {
            display: inline-block;
            position: relative;
            text-shadow: 10px 10px 0 #0005;
          }

          & :nth-child(1) {
            font-family: Arvo;
            font-size: 6.5rem;
            translate: -2px 12px;
            rotate: -6deg
          }
          & :nth-child(2) { font-family: "Russo One"; translate: -2px 15px; z-index: 2; rotate: 2deg }
          & :nth-child(3) { font-family: "Russo One"; font-size: 5.5rem; z-index: 3; rotate: -6deg }
          & :nth-child(4) { font-family: Arvo; translate: 0 15px; z-index: 4; rotate: 2deg }
          & :nth-child(5) { font-family: Fredoka; z-index: 5; rotate: 8deg }
        }

        & p {
          font-family: Fredoka;
          font-size: 1.75rem;
          letter-spacing: 6px;
          text-indent: 8px;
          text-shadow:
            4px 4px 2px #0004,
            -4px -4px 2px #0004,
            -4px 4px 6px #0002,
            4px -4px 6px #0002;

          margin: 0;
        }
      }

      footer {
        background: #21201c;
        min-height: 85px;
        padding-top: 1rem;
        place-items: center;

        & .gradient {
          background: linear-gradient(
            to right,
            #73234c,
            #7b254e,
            #f06e21,
            #f06e21,
            #f6bf02,
            #6b962a,
            #339dac,
            #184e76
          );
          width: 100%;
          height: 40px;
        }

        & p {
          font-family: "Rubik Italic";
          color: #fff;
          margin: 0;
          padding: 0.5rem;
        }
      }

      .logo {
        display: inline flow;
        padding: 4px 10px;
        position: absolute;
        bottom: 10px;
        right: 10px;
        letter-spacing: 1px;
        color: #fff;
        font-family: Fredoka;
        font-weight: 600;
        font-size: 1.2rem;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CoverFonts.styles}</style>
    <div class="container">
      <header>
        <p>Aprende a usar</p>
        <h1>
          <span>F</span>
          <span>O</span>
          <span>N</span>
          <span>T</span>
          <span>S</span>
        </h1>
      </header>

      <footer>
        <div class="gradient"></div>
        <p>Elimina la fuente de tus problemas</p>
      </footer>

      <div class="logo">ManzDev™</div>
    </div>`;
  }
}

customElements.define("cover-fonts", CoverFonts);
