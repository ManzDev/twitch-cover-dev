import "./RetroBall.js";

class CoverAnimations extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --bgcolor: #111;
        --width: var(--cover-size);
        --height: var(--cover-size);
        --cover-vinyl:
          linear-gradient(to bottom, var(--bgcolor) 0% 29%, var(--bgcolor) 80% 100%);
        --cover-padding: 10px 25px;
      }

      .container {
        width: 100%;
        height: 100%;
        background: url(asfalt-dark.png), var(--cover-vinyl);
        box-shadow:
          0 0 80px #000c inset,
          0 0 10px #0007;

        perspective: 200px;
        overflow: hidden;

        &::before {
          content: "";
          width: calc(100% - 10px);
          height: calc(100% - 10px);
          border: 2px solid #aaa8;
          box-sizing: border-box;
          margin: 5px;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 25;
        }

        &::after {
          content: "";
          display: block;
          z-index: 30;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          box-shadow:
            0 0 25px 5px #000 inset,
            0 0 50px 5px #000 inset;
        }
      }

      .grid {
        --line-color: #111;
        --cells: 13;
        --horizontal-lines: repeating-linear-gradient(var(--line-color) 15.5px, transparent 16px 32px);
        --vertical-lines: repeating-linear-gradient(to right, var(--line-color) 15.5px, transparent 16px 32px);

        display: grid;
        background: #888;
        width: 100%;
        height: 100%;
        box-shadow: 0 0 40px #f9e10599;
        position: relative;
        z-index: 5;

        background-image:
          var(--horizontal-lines),
          var(--vertical-lines),
          linear-gradient(to bottom, #333 5%, #999 35%);
        transform: rotateX(75deg) rotatey(342deg) translate(-25px, 242px);
      }

      header {
        font-family: Jost, sans-serif;
        position: absolute;
        rotate: -17deg;
        translate: 0% 28%;
        z-index: 20;

        & .title {
          color: #fff;
          font-size: 4.25rem;
          letter-spacing: -2px;
          font-weight: 700;
        }

        & .subtitle {
          color: #aaa;
          display: block;
          font-size: 1.5rem;
          font-weight: 300;
          translate: 70% 95%;
        }
      }

      footer {
        display: flex;
        justify-content: center;
        padding: 24px;
        z-index: 5;
        position: absolute;
        width: 100%;
        bottom: -10px;
        transform: translateX(-20px);

        & .brand {
          display: inline-block;
          font-family: "Lester Bold";
          font-size: 2rem;
          border: 2px solid #222;
          background: #fff;
          border-radius: 2px;
          padding: 0 3px;
          padding-top: 1px;
          line-height: 95%;
          color: #222;
          text-shadow: 0 0 1px #872b36;
        }
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CoverAnimations.styles}</style>
    <div class="container">

      <header>
        <span class="subtitle">CSS/JS</span>
        <span class="title">Animaciones</span>
        <div class="line"></div>
      </header>

      <div class="grid"></div>

      <retro-ball class="dark" style="--color:#e30dc6; --x:40px; --y: 30px; --size: 35px"></retro-ball>

      <retro-ball class="dark" style="--color:#dd0b0b; --x:130px; --y: 90px; --size: 50px"></retro-ball>

      <retro-ball style="--color:#43d7b7; --x:320px; --y: 150px; --size: 30px"></retro-ball>

      <retro-ball class="dark back" style="--color:#0e6208; --x:30px; --y: 210px; --size: 70px"></retro-ball>

      <retro-ball style="--color:#c53ed1; --x:330px; --y: 160px; --size: 45px"></retro-ball>

      <retro-ball style="--color:#038bc5; --x:120px; --y: 250px; --size: 70px"></retro-ball>

      <retro-ball style="--color:#f25d32; --x:270px; --y: 290px; --size: 90px"></retro-ball>

      <retro-ball style="--color:#fef23a; --x:10px; --y: 330px; --size: 100px"></retro-ball>

      <footer>
        <div class="brand">W3C</div>
      </footer>
    </div>`;
  }
}

customElements.define("cover-animations", CoverAnimations);
