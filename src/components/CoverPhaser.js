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
        --pink: #000;
        --green: #a7c738;
        --phaser-color: #965e97;
      }

      :host::after {
        content: "";
        inset: 0;
        display: block;
        position: absolute;
        z-index: 50;
        width: 100%;
        height: 100%;
        box-shadow: 0 0 80px #000 inset;
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
            var(--phaser-color) 0 50%,
            var(--phaser-color) 50% 100%
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
          #6668 0px 60px,
          #6667 60px 80px,
          #6666 80px 100px,
          #6665 100px 120px,
          #6664 120px 140px,
          #6663 140px 160px,
          #6662 160px 180px,
          #6661 180px 200px
        );
        position: relative;
        display: grid;
        place-items: end;
        overflow: hidden;

        & .character {
          --size: 150px;

          border-radius: 50%;
          width: var(--size);
          height: var(--size);
          background-color: var(--phaser-color);
          border: 10px solid color-mix(in srgb, var(--phaser-color), #000 25%);
          position: absolute;
          z-index: 5;
          transform: translate(-45%, -45%);

          & .face {
            display: block;
            width: 50%;
            height: 50%;
            background-color: #fff;
            background-image:
              linear-gradient(135deg, #e3cb89 65%, transparent 65.5%),
              repeating-linear-gradient(45deg, transparent 0 20px, #ddd 20px 22px);
            position: absolute;
            left: 1rem;
            transform: translate(46%, 66%);

            &::before {
              --size: 35px;

              content: "";
              display: block;
              width: var(--size);
              height: var(--size);
              background-color: var(--phaser-color);
            }
          }
        }

        & .rocket {
          --size: 200px;

          border-radius: 50%;
          width: var(--size);
          height: var(--size);
          background-color: var(--yellow);
          background-image: linear-gradient(
            315deg,
            #f3a50e 0 60px,
            #c0820b 60px 80px,
            #8d5f08 80px 100px,
            #5a3c05 100px 120px,
            #271a02 120px 140px
          );
          position: absolute;
          z-index: 5;
          transform: translate(-50%, -50%);
          display: none;
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
          var(--phaser-color) 0 20%,
          color-mix(in srgb, var(--phaser-color), #000 15%) 20% 25%,
          transparent 25%
        ),
        linear-gradient(
          225deg,
          var(--phaser-color) 0 20%,
          color-mix(in srgb, var(--phaser-color), #000 15%) 20% 25%,
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
        <div class="rocket"></div>
        <div class="character">
          <div class="face"></div>
        </div>
      </div>
      <footer>Powered<br>by canvas</footer>
      <div class="ball"></div>
    </div>`;
  }
}

customElements.define("cover-phaser", CoverPhaser);
