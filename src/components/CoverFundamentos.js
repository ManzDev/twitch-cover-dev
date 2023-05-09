class CoverFundamentos extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --width: var(--cover-size);
        --height: var(--cover-size);
        --bgcolor: #201d30;
        --primary-font: "Russo One";
        --cover-vinyl: linear-gradient(
          to bottom,
          var(--bgcolor) 0% 29%,
          var(--bgcolor) 80% 100%
        );
        --cover-padding: 10px 25px;
        --offset: 8;
        --circle-gradient: radial-gradient(
          circle at 100% 100%,
          #cf3c7b calc(var(--offset) * 0%) calc((var(--offset) * 0%) + (var(--offset) * 1%) - 0.25%),
          #9847ee calc(var(--offset) * 1%) calc((var(--offset) * 1%) + (var(--offset) * 1%) - 0.25%),
          #611bc2 calc(var(--offset) * 2%) calc((var(--offset) * 2%) + (var(--offset) * 1%) - 0.25%),
          #433884 calc(var(--offset) * 3%) calc((var(--offset) * 3%) + (var(--offset) * 1%) - 0.25%),
          #27215f calc(var(--offset) * 4%) calc((var(--offset) * 4%) + (var(--offset) * 1%) - 0.25%),
          transparent calc(var(--offset) * 5%) 100%
        );
      }

      .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background:
          var(--circle-gradient),
          url(asfalt-dark.png),
          var(--cover-vinyl);
        box-shadow:
          0 0 80px #000c inset,
          0 0 10px #0007;

        & .line {
          display: flex;
          justify-content: space-between;

          background: white;
          width: 100%;
          height: 25px;

          & .dot-container {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            margin-left: 5%;
            width: 20%;
            height: 100%;

            & .dot {
              --size: 10px;

              width: var(--size);
              height: var(--size);
              border-radius: 50%;
              background: #d0407b;
            }
          }

          & .box-container {
            display: flex;

            width: 45%;
            height: 100%;

            & .box {
              width: 100%;
              height: 100%;
              background: var(--color);
            }

            & :nth-child(1) { --color: #cf3c7a; }
            & :nth-child(2) { --color: #9847ee; }
            & :nth-child(3) { --color: #5e1bc1; }
            & :nth-child(4) { --color: #423a83; }
            & :nth-child(5) {
              width: 300%;
              --color: #272161;
            }
          }
        }

        & .middle {
          width: 75%;
          height: 75%;

          display: flex;
          flex-direction: column;
          padding-top: 1.5rem;

          & .top h1 {
            font-family: var(--primary-font);
            font-variant: small-caps;
            font-size: 3.25rem;
            font-weight: 600;
            color: #d03d7c;
            margin: 0;
            line-height: 80%;
          }

          & .top h2 {
            font-family: var(--primary-font);
            font-size: 1.75rem;
            font-weight: 300;
            letter-spacing: 0.5px;
            line-height: 100%;
            color: #e5c37f;
            margin: 0;
          }

          & .top h3 {
            font-family: "Lexend";
            font-size:1rem;
            color: #fff;
            margin: 0;
            margin-top: 1rem;
            line-height: 120%;
          }

          & .box {
            --size: 25px;

            margin-top: calc(var(--size) * 1);
            margin-left: calc(var(--size) * 2);

            width: var(--size);
            height: var(--size);
            background: #9847ee;
            box-shadow:
              calc(var(--size) * -1) calc(var(--size) * 1) #e2c478,
              calc(var(--size) * -2) calc(var(--size) * 2) #dba25d,
              calc(var(--size) * -1) calc(var(--size) * 3) #cf3c7a
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
    <style>${CoverFundamentos.styles}</style>
    <div class="container">
      <div class="line">
        <div class="dot-container">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        <div class="box-container">
          <div class="box"></div>
          <div class="box"></div>
          <div class="box"></div>
          <div class="box"></div>
          <div class="box large"></div>
        </div>
      </div>
      <div class="middle">
        <div class="top">
          <h1>Fundamentos</h1>
          <h2>de programación</h2>
          <h3>Bases y pilares de desarrollo para aprender a programar</h3>
        </div>
        <div class="bottom">
          <div class="box"></div>
        </div>
      </div>
    </div>`;
  }
}

customElements.define("cover-fundamentos", CoverFundamentos);
