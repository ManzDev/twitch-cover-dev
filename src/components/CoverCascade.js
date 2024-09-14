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
        translate: 0 8px;
      }

      .title {
        font-family: "Coda";
        font-weight: bold;
        font-size: 4.5rem;
        text-align: center;
        line-height: 100%;
        background: linear-gradient(white 20%, #33a9dc 40%, #07273e 90%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        translate: 0 -5px;
      }

      .dots {
        background: radial-gradient(circle 4px, #11588b 50%, transparent 60%);
        background-size: 8px 8px;
        width: calc(100% - 22px);
        left: 12px;
        height: 125px;
        position: absolute;
        top: 90px;
        z-index: 0;
      }

      .cascade {
        box-shadow: 0 0 25px 15px var(--bgcolor);
        width: 150px;
        margin: auto;
        height: 225px;
        background:
          linear-gradient(
            to bottom,
            var(--bgcolor) 0 20px,
            #33a9dc 20px 120px,
            var(--bgcolor) 120px 124px,
            #1572b6 124px 145px,
            var(--bgcolor) 145px 150px,
            #156dad 150px 165px,
            var(--bgcolor) 165px 171px,
            #11588b 171px 183px,
            var(--bgcolor) 183px 188px,
            #0d4269 188px 195px,
            var(--bgcolor) 195px 200px,
            #082d47 200px 205px,
            var(--bgcolor) 205px 210px,
            #07273e 210px 215px,
            var(--bgcolor) 215px 218px,
            #156dad 218px 220px,
            var(--bgcolor) 220px 225px
          );
        display: grid;
        justify-content: center;
        translate: 0 -10px;
      }

      .subtitle {
        font-family: Coda;
        font-size: 1.2rem;
        text-align: center;
        color: #fff8;
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
        CASCADA
      </header>
      <div class="dots"></div>

      <div class="cascade">
      </div>
      <div class="title">CSS</div>
      <div class="subtitle">Para tener estilo, sé específico.</div>
    </div>`;
  }
}

customElements.define("cover-cascade", CoverCascade);
