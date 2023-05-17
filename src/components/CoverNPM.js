const NUM_STARS = 450;
const COLORS = ["#bbba", "#aaaa", "#999a", "#777a", "#555a"];

class CoverNPM extends HTMLElement {
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
      }

      .container {
        width: 100%;
        height: 100%;
        background: url(asfalt-dark.png), var(--cover-vinyl);
        box-shadow:
          0 0 80px #000c inset,
          0 0 10px #0007;

        display: flex;
        flex-direction: column;
      }

      .container::after {
        content: "";
        display: block;
        position: absolute;
        inset: 0;
        box-shadow: 0 0 10px #000e inset;
        z-index: 10;
      }

      .top-banner {
        background: #c13c38;
        margin-top: 2rem;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .top-banner .text {
        color: #fff;
        font-family: Arvo;
        font-size: 1.1rem;
      }

      .content {
        height: 100%;
        display: grid;
        grid-template-rows: 0.35fr 0.65fr;
      }

      :is(.top-banner, .content) {
        z-index: 5;
      }

      .top-text-container {
        display: flex;
        justify-content: space-between;
      }

      .title {
        width: 50%;
        height: 100%;
        font-family: Arvo;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        margin-left: 2rem;
      }

      .title h2 {
        color: #7dabbc;
        font-size: 2rem;
        font-weight: 700;
        font-style: italic;
        line-height: 100%;
      }

      .title h1 {
        font-size: 4rem;
        font-weight: 700;
        line-height: 80%;
      }

      .title :is(h1, h2) {
        margin: 0;
      }

      .logo-container {
        width: 27%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .logo {
        --color: #dfc850;

        color: #796818;
        font-family: Arvo;
        font-size: 0.9rem;
        line-height: 80%;
        text-align: center;
        border: 1px solid var(--color);
        display: flex;
        flex-direction: column;
        padding: 0.5rem 0.25rem;
        margin-right: 1rem;
        background: #171717;
      }

      .logo span {
        font-size: 1rem;
        font-family: Arvo;
        line-height: 120%;
        color: var(--color);
      }

      .grid-container {
        perspective: 6px;
        overflow: hidden;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(20, 1fr);
        grid-template-rows: repeat(6, 1fr);
        gap: 4px;
        background: #222d;
        height: 100%;
        transform:
          scale(2.5)
          translateY(-45px)
          translateX(-10px)
          translateZ(-20px)
          rotateX(11deg)
          rotateY(3deg)
          rotateZ(9deg)
          skewY(9deg)
      }

      .grid > div {
        background-color: var(--color);
        background-image: repeating-linear-gradient(
          #0007 0 1%,
          transparent 1% 2%,
          #0007 2% 4%,
          transparent 4% 7%
        );
      }

      .grid > div:nth-child(n) { --color: #edb826; }
      .grid > div:nth-child(n+21) { --color: #e98b0b; }
      .grid > div:nth-child(n+41) { --color: #e97641; }
      .grid > div:nth-child(n+61) { --color: #da4749; }
      .grid > div:nth-child(n+81) { --color: #c52c2f; }
      .grid > div:nth-child(n+101) { --color: #e52f66; }

      .stars {
        width: 100%;
        height: 100%;
        position: absolute;
      }

      .star {
        width: var(--size);
        height: var(--size);
        translate: var(--x) var(--y);
        background: var(--color, #fff);
        position: absolute;
      }
    `;
  }

  connectedCallback() {
    this.render();
    this.fillGrid();
    this.fillStars();
  }

  fillGrid() {
    const grid = this.shadowRoot.querySelector(".grid-container .grid");
    for (let i = 0; i < 120; i++) {
      const div = document.createElement("div");
      grid.appendChild(div);
    }
  }

  fillStars() {
    const stars = this.shadowRoot.querySelector(".stars");
    for (let i = 0; i < NUM_STARS; i++) {
      const div = document.createElement("div");
      div.classList.add("star");
      const colorRandomIndex = Math.floor(Math.random() * COLORS.length);
      const color = COLORS[colorRandomIndex];
      const x = Math.floor(Math.random() * 400);
      const y = Math.floor(Math.random() * 400);
      const size = 1 + Math.floor(Math.random() * 2);
      div.style.setProperty("--y", `${y}px`);
      div.style.setProperty("--x", `${x}px`);
      div.style.setProperty("--color", color);
      div.style.setProperty("--size", `${size}px`);
      stars.appendChild(div);
    }
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CoverNPM.styles}</style>
    <div class="container">

      <div class="top-banner">
        <div class="text">NODE PACKAGE MANAGER</div>
      </div>
      <div class="content">

        <div class="top-text-container">
          <div class="title">
            <h1>NPM</h1>
            <h2>Packages</h2>
          </div>
          <div class="logo-container">
            <div class="logo">
              <span>Microsoft</span>
              powered
            </div>
          </div>
        </div>
        <div class="grid-container">
          <div class="grid"></div>
        </div>
      </div>
      <div class="stars"></div>
    </div>`;
  }
}

customElements.define("cover-npm", CoverNPM);
