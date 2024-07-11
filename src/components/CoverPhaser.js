const invader = /* svg */"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M7 6H5V4h2zm10 0h2V4h-2zm6 6v6h-2v-4h-2v4h-2v-2H7v2H5v-4H3v4H1v-6h2v-2h2V8h2V6h2v2h6V6h2v2h2v2h2v2zm-8-2v2h2v-2zm-8 2h2v-2H7zm4 6H7v2h4zm6 0h-4v2h4z\"/></svg>";

class CoverPhaser extends HTMLElement {
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
          linear-gradient(to bottom, #191919 0% 29%, #191919 80% 100%);
        --cover-padding: 10px 25px;

        --gray: #333;
        --blue: #99388c;
        --red: #99388c;
        --yellow: gold;
        --pink: #c85174;
        --green: #a7c738;
      }

      .container {
        width: 100%;
        height: 100%;
        background: url(asfalt-dark.png), var(--cover-vinyl);
        box-shadow:
          0 0 80px #0006 inset,
          0 0 10px #0007;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        position: relative;
        overflow: hidden;

        &::before {
          content: "";
          background: linear-gradient(
            45deg,
            var(--red) 0 50%,
            var(--blue) 50% 100%
          );
          display: block;
          position: absolute;
          width: 145%;
          height: 20px;
          right: 0;
          transform-origin: 95.6% 10%;
          transform: rotate(315deg);
        }
      }

      .lines {
        grid-column-start: 2;
        background: repeating-linear-gradient(
          -45deg,
          black 0px 20px,
          var(--gray) 20px 40px
        );
      }

      .overlay {
        grid-column-start: 2;
        grid-row-start: 2;
        background-color: var(--pink);
        background-image: linear-gradient(
          -225deg,
          #fff 0px 60px,
          #fffd 60px 80px,
          #fffb 80px 100px,
          #fff9 100px 120px,
          #fff7 120px 140px,
          #fff5 140px 160px,
          #fff3 160px 180px,
          #fff1 180px 200px
        );
        position: relative;
        display: grid;
        place-items: end;
        overflow: hidden;

        &::before {
          content: "";
          background: var(--green);
          display: block;
          position: absolute;
          width: 145%;
          height: 20px;
          transform-origin: 10% 0%;
          rotate: 45deg;
          z-index: 0;
          display: none;
        }

        & .invader {
          position: absolute;
          z-index: 5;
          fill: black;
          display: none;

          & svg {
            width: 96px;
            height: 96px;
            margin-right: 32px;
            translate: 0 -8px;
            opacity: 0.5;
          }
        }

        & .rocket {
          --size: 200px;

          border-radius: 50%;
          width: var(--size);
          height: var(--size);
          background-color: var(--green);
          background-image: linear-gradient(
            315deg,
            #0000 0 60px,
            #0002 60px 80px,
            #555 80px 100px,
            #333 100px 120px,
            #111 120px 140px
          );
          position: absolute;
          z-index: 5;
          transform: translate(-50%, -50%);
        }
      }

      header {
        color: #fff;
        font-family: Xolonium, sans-serif;
        font-size: 3rem;
        translate: 0 15px;
        width: 100%;
        position: absolute;
        display: grid;
        margin-left: 1.5rem;
        line-height: 100%;

        & span {
          font-size: 1rem;
          display: inline-block;
          line-height: 150%;

          &::before {
            content: "";
            background: red;
            width: 88%;
            height: 2px;
            display: block;
          }
        }
      }

      footer {
        font-family: Xolonium, sans-serif;
        color: #fff;
        text-transform: uppercase;
        z-index: 5;
        position: absolute;
        bottom: 35px;
        left: 80px;
        text-align: right;
      }

      .ball {
        position: absolute;
        background-color: var(--yellow);
        background-image:
        linear-gradient(
          45deg,
          var(--red) 0 20%,
          color-mix(in srgb, var(--red), #000 15%) 20% 25%,
          transparent 25%
        ),
        linear-gradient(
          225deg,
          var(--blue) 0 20%,
          color-mix(in srgb, var(--blue), #000 15%) 20% 25%,
          transparent 25%
        ),
        linear-gradient(
          -45deg,
          #da422bcc 0 15%,
          #da422b88 15% 30%,
          #da422b55 30% 45%,
          #da422b33 45% 60%,
          #da422b11 60% 75%,
          #fff2 75% 100%
        );
        width: 50%;
        height: 50%;
        border-radius: 50%;
        place-self: center;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CoverPhaser.styles}</style>
    <div class="container">
      <header>
        PHASER
        <span>JS GAME ENGINE</span>
      </header>
      <div class="lines"></div>
      <div class="overlay">
        <div class="invader">${invader}</div>
        <div class="rocket"></div>
      </div>
      <footer>Powered<br>by canvas</footer>
      <div class="ball"></div>
    </div>`;
  }
}

customElements.define("cover-phaser", CoverPhaser);
