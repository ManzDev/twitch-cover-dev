class CoverDOM extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --width: var(--cover-size);
        --height: var(--cover-size);
        --bgcolor: #223;
        --cover-vinyl:
          linear-gradient(to bottom, var(--bgcolor) 0% 29%, var(--bgcolor) 80% 100%);
        --cover-padding: 10px 25px;
      }

      .container {
        --sky-fade: radial-gradient(circle, transparent 10%, var(--bgcolor) 75%);
        --sky-dots: radial-gradient(#fff4 12% 13%, transparent 14%);

        width: 100%;
        height: 100%;
        background: var(--sky-fade), var(--sky-dots), url(asfalt-dark.png), var(--cover-vinyl);
        background-size: 100% 100%, 14px 14px;
        box-shadow:
          0 0 80px #000c inset,
          0 0 10px #0007;
        overflow: hidden;
        position: relative;

        &::after {
          content: "";
          display: block;
          background: url(asfalt-dark.png);
          opacity: 0.5;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          z-index: 5;
        }
      }

      header {
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;

        & h1 {
          font-family: Fredoka, sans-serif;
          font-size: 7rem;
          margin: 0;
          letter-spacing: 8px;
          text-shadow: 0 0 15px #0006;
        }

        & h2 {
          font-family: Jost, sans-serif;
          font-size: 0.9rem;
          text-transform: uppercase;
          margin: 0;
          line-height: 0;
          text-shadow: 0 0 5px #000, 0 0 20px #000;
        }
      }

      .bg {
        display: grid;
        place-items: center;
        height: 100%;
        margin-top: 2rem;
        position: relative;

        & .pyramid {
          --size: 235px;

          width: var(--size);
          height: var(--size);
          background: var(--bgcolor);
          rotate: 45deg;
          display: grid;
          place-items: center;
          position: absolute;
          top: 50px;

          &::after {
            --degrees: 165deg;

            content: "";
            display: block;
            width: 92%;
            height: 92%;
            background: var(--color);
            background-image: conic-gradient(
              from 0 at 0 0,
              transparent 0 var(--degrees),
              #c43e2244 calc(var(--degrees) + 1deg) 208deg
            );
          }
        }

        & .pyramid-1 {
          --color: #c98742;
          translate: -50% 0;
        }
        & .pyramid-2 {
          --color: #c9b842;
          z-index: 5;
        }
        & .pyramid-3 {
          --color: #c98742;
          translate: 50% 0;
        }
      }

      /*
      .circle {
        --size: 300px;

        width: var(--size);
        height: var(--size);

        position: absolute;
        border-radius: 50%;
        top: 25px;
        left: calc(50% - calc(var(--size) / 2));
      }
      */

      footer {
        background: #fff;
        background-image: linear-gradient(160deg, #fff 50%, #ccc4 50%);
        position: absolute;
        display: grid;
        justify-content: center;
        bottom: 0;
        z-index: 5;
        width: 100%;
        height: 85px;

        &::before {
          content: "";
          background: #1c1c2a;
          display: block;
          width: 100%;
          height: 6px;
          position: absolute;
          top: -6px;
          z-index: 6;
        }

        & h1 {
          font-family: Jost, sans-serif;
          font-size: 2.5rem;
          margin: 0;
          color: #224;
        }

        & h2 {
          font-family: Fredoka, sans-serif;
          font-size: 1.25rem;
          font-weight: 400;
          text-transform: uppercase;
          margin: 0;
          line-height: 0;
          color: #c98742;
          translate: 0 -75%;
        }
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CoverDOM.styles}</style>
    <div class="container">
      <header>
        <h1>DOM</h1>
        <h2>Document Object Model</h2>
      </header>

      <div class="circle"></div>

      <div class="bg">
        <div class="pyramid pyramid-1"></div>
        <div class="pyramid pyramid-2"></div>
        <div class="pyramid pyramid-3"></div>
      </div>

      <footer>
        <h1>HTML DESDE JS</h1>
        <h2>Es estructura, es contenido</h2>
      </footer>
    </div>`;
  }
}

customElements.define("cover-dom", CoverDOM);
