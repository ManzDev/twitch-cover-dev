class CoverCascade extends HTMLElement {
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
          linear-gradient(to bottom, var(--bgcolor) 0% 29%, var(--bgcolor) 80% 100%);
        --cover-padding: 10px 25px;
        --bgcolor: #1d1814;
      }

      .container {
        width: 100%;
        height: 100%;
        background: url(asfalt-dark.png), var(--cover-vinyl);
        box-shadow:
          0 0 80px #000c inset,
          0 0 10px #0007;
        overflow: hidden;

        &::after {
          --offset: 8px;
          --border: 2px;

          content: "";
          display: block;
          width: calc(100% - (var(--border) * 2) - (var(--offset) * 2));
          margin: auto;
          height: calc(100% - (var(--border) * 2) - (var(--offset) * 2));
          position: absolute;
          top: var(--offset);
          left: var(--offset);
          border: var(--border) solid #1572b666;
        }
      }

      header {
        font-family: "Coda";
        font-weight: bold;
        font-size: 2rem;
        color: #fff;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-top: 1rem;
        margin-bottom: 5px;
        line-height: 90%;
        z-index: 4;
        position: relative;
        translate: 0 12px;
      }

      .dots {
        background: radial-gradient(circle 4px, #174b6f 7px, transparent 60%);
        background-size: 14px 14px;
        width: calc(100% - 22px);
        left: 11px;
        height: 125px;
        position: absolute;
        top: 90px;
        z-index: 0;
      }

      .cascade {
        box-shadow: 0 0 25px 15px var(--bgcolor);
        width: 160px;
        margin: auto;
        height: 185px;
        background: #fff;
        background-image:
          linear-gradient(to bottom,
            #fff 0 60px,
            var(--bgcolor) 60px 65px,
            #d3d3d3 65px 97px,
            var(--bgcolor) 97px 103px,
            #bebebe 103px 128px,
            var(--bgcolor) 128px 136px,
            #a7a7a7 136px 154px,
            var(--bgcolor) 154px 164px,
            #666 164px 174px
          );
        display: grid;
        justify-content: center;
        translate: 0 18px;
      }

      .clouds {
        width: 225px;
        height: 70px;
        position: relative;
        margin: auto;
        z-index: 5;
        display: grid;
        translate: 0 -12px;

        & .center {
          display: grid;
          justify-self: center;
          background: white;
          width: 100px;
          border-radius: 100px 100px 0 0;
          height: 100%;

          &::before, &::after {
            content: "";
            display: block;
            align-self: end;
            border-radius: 100px 100px 0 0;
            width: 100px;
            height: 75%;
            position: absolute;
            left: 0;
            background: white;
          }

          &::after {
            left: auto;
            right: 0;
          }
        }
      }

      .water-container {
        width: 56%;
        margin: auto;
        height: 50px;
        display: grid;
        translate: 0 -6px;

        & .item {
          width: var(--size, 100%);
          background: var(--color, #76c0cd);
          height: 10px;
          margin: auto;
          border-radius: 4px;
        }

        & .item:nth-child(2) { --color: #5e919b; --size: 85%; }
        & .item:nth-child(3) { --color: #3c5357; --size: 60%; }
      }

      .subtitle {
        font-family: Coda;
        font-size: 1.2rem;
        text-align: center;
        color: #fff8;
        position: absolute;
        width: 100%;
        bottom: 1.2rem;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CoverCascade.styles}</style>
    <div class="container">
      <header>
        CASCADA CSS
      </header>
      <div class="dots"></div>
      <div class="cascade"></div>
      <div class="clouds">
        <div class="center"></div>
      </div>
      <div class="water-container">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
      <div class="subtitle">Para tener estilo, sé específico.</div>
    </div>`;
  }
}

customElements.define("cover-cascade", CoverCascade);
