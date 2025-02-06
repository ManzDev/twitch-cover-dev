class CoverEvents extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --bgcolor: #222;
        --width: var(--cover-size);
        --height: var(--cover-size);
        --cover-vinyl:
          linear-gradient(to bottom, var(--bgcolor) 0% 29%, var(--bgcolor) 80% 100%);
        --cover-padding: 10px 25px;
        --noise: url("data:image/svg+xml,%3Csvg viewBox='0 0 2048 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.25' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
      }

      .container {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 0.3fr 0.5fr 0.2fr;
        padding: 1.5rem 1.5rem 0.5rem;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        background: url(asfalt-dark.png), var(--cover-vinyl);
        box-shadow:
          0 0 80px #000c inset,
          0 0 10px #0007;

        & header {

          & h1 {
            margin: 0;
            font-family: "Super Mario Bros 2";
            font-size: 3rem;
            text-align: center;
            color: #fff;
            z-index: 5;
            position: relative;
          }

          & p {
            font-family: Fredoka;
            font-size: 1.5rem;
            padding-left: 6px;
            letter-spacing: 3px;
            text-transform: uppercase;
            color: #fff;
            margin: 0;
          }
        }

        & .bubbles {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;

          & .bubble {
            --border-size: calc(var(--size) * 0.1);

            background: radial-gradient(#2ea1ce88 0 50%, #222c 100%);
            width: var(--size);
            height: var(--size);
            border-radius: 50%;
            border: var(--border-size) solid var(--bgcolor);
            translate: var(--x) var(--y);
          }

          & .bubble-1 { --size: 100px; --x: 50px; --y: 110px; }
          & .bubble-2 { --size: 50px; --x: 180px; --y: 110px; }
          & .bubble-3 { --size: 100px; --x: 250px; --y: -130px; }
        }

        & .layers {
          --w: round(calc(var(--width) - 2.5rem), 15px);
          --h: calc(var(--height) * 0.5);
          --colors:
            #39302E 15%,
            #5C5955 15.3% 24%,
            #55302F 24.3% 33%,
            #853B30 33.3% 42%,
            #D14234 42.3% 51%,
            #DA7C35 51.3% 60%,
            #F8DB32 60.3% 69%,
            #85AD38 69.3% 78%,
            #309EC4 78.3%;

          background-image:
            var(--noise),
            linear-gradient(-30deg, var(--colors)),
            linear-gradient(30deg, var(--colors)),
            linear-gradient(-30deg, var(--colors));
          background-blend-mode: multiply;
          background-size:
            var(--w) var(--h),
            calc(var(--w) / 3) var(--h),
            calc(var(--w) / 3) var(--h),
            calc(var(--w) / 3) var(--h);
          background-repeat: no-repeat;
          background-position:
            0 0,
            0 0,
            calc(var(--w) / 3) 0,
            calc(var(--w) * 2 / 3) 0;
        }

        & footer {
          display: grid;
          align-content: center;
          font-family: "Super Mario Bros 2";
          font-size: 0.85rem;
          color: #fff;
          line-height: 150%;

          & p {
            margin: 0;
          }

          & p:first-child {
            color: #888;
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
    <style>${CoverEvents.styles}</style>
    <div class="container">
      <header>
      <h1>EVENTOS</h1>
      <p>En Javascript</p>
      </header>

      <div class="bubbles">
        <div class="bubble bubble-1"></div>
        <div class="bubble bubble-2"></div>
        <div class="bubble bubble-3"></div>
      </div>

      <div class="layers"></div>

      <footer>
        <p>Event uso bubbling...</p>
        <p>¡Es muy efectivo!</p>
      </footer>
    </div>`;
  }
}

customElements.define("cover-events", CoverEvents);
