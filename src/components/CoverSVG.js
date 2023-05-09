class CoverSVG extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --width: var(--cover-size);
        --height: var(--cover-size);
        --bgcolor: #000;
        --lines-gradient:
          repeating-linear-gradient(transparent 0 3%, #0d1015 3% 3.5%);
        --cover-vinyl:
          linear-gradient(to bottom, var(--bgcolor) 0% 29%, var(--bgcolor) 80% 100%);
        --cover-padding: 10px 25px;
        --white-gradient:
          linear-gradient(
            to bottom,
            #ffffff 0 20%,
            #dddddd 20% 40%,
            #bbbbbb 40% 60%,
            #999999 60% 80%,
            #777777 80% 100%
          );
        --rainbow-gradient:
          linear-gradient(
            to bottom,
            #fec803 0 20%,
            #ff6701 20% 40%,
            #ff0028 40% 60%,
            #b401d6 60% 80%,
            #4c00ba 80% 100%
          );
      }

      .container::after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        background:
          linear-gradient(-29deg, transparent 20%, #2225 40% 60%, transparent 80%),
          radial-gradient(transparent 70%, #2227 98%);
      }

      .container {
        --offset: 2.5rem;

        width: 100%;
        height: 100%;
        background:
          var(--lines-gradient),
          var(--cover-vinyl);
        background-blend-mode: screen;
        box-shadow:
          0 0 80px #000c inset,
          0 0 10px #0007;

        display: flex;
        flex-direction: column;

        & .top {
          width: 75%;
          height: 45%;
          position: absolute;
          z-index: 5;

          & h1 {
            font-family: "Lexend";
            font-size: 6.5rem;
            letter-spacing: -5px;
            line-height: 100%;
            color: #fff;
            margin: 0;
            margin-top: calc(var(--offset) * 0.5);
            margin-left: var(--offset);
          }

          & h2 {
            font-family: "Lexend";
            font-size: 1.2rem;
            color: #fff;
            margin: 0;
            margin-left: var(--offset);
          }

          & h3 {
            font-family: "Victor Mono";
            font-size: 1.5rem;
            font-weight: 400;
            letter-spacing: -1px;
            color: #fff;
            margin: 0;
            margin-top: 0.5rem;
            background: #4c00ba;
            padding: 0 var(--offset);
            width: 60%;
          }
        }

        & .side-rainbow {
          width: 15px;
          height: 115px;
          position: absolute;
          top: 25px;
          right: -15px;
          transform-origin: 0 0;
          background: var(--white-gradient);
          rotate: 90deg;
        }

        & .middle {
          margin-top: 36%;
          height: 33.5%;
          display: flex;
          align-items: end;
          position: relative;

          & .horizontal {
            background: var(--rainbow-gradient);
            width: 70%;
            height: 50%;
          }

          & .diagonal {
            background: var(--rainbow-gradient);
            width: 30%;
            height: 50%;
            transform-origin: 0 0;
            transform: skewY(-45deg);
          }
        }

        & .bottom {
          width: calc(100% - 75px);
          height: 30%;
          display: flex;
          justify-content: space-evenly;
          align-items: center;

          & .text {
            font-family: "Lexend";
            text-align: center;
            color: #888;
            border: 1px solid #888;
            border-radius: 5px;
            padding: 0 10px 10px;


            & h3 {
              font-size: 1.5rem;
              margin: 0;
            }

            & p {
              font-size: 1rem;
              margin: 0;
              line-height: 50%;
            }
          }
        }

        & footer {
          width: 25px;
          height: 110px;
          position: absolute;
          bottom: 0;
          right: 25px;
          background: linear-gradient(
            to top,
            #ffc900 0 20%,
            transparent 20% 30%,
            #ff6701 30% 45%,
            transparent 45% 55%,
            #ff0029 55% 65%,
            transparent 65% 75%,
            #ad0bcd 75% 80%,
            transparent 80% 90%,
            #410c94 90% 92.5%,
            transparent 92.5% 100%
          );
        }
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CoverSVG.styles}</style>
    <div class="container">
      <div class="side-rainbow"></div>
      <div class="top">
        <h1>SVG</h1>
        <h2>VECTOR IMAGES</h2>
        <h3>MANZ.DEV</h3>
      </div>
      <div class="middle">
        <div class="horizontal"></div>
        <div class="diagonal"></div>
      </div>
      <div class="bottom">
        <div class="text">
          <h3>HTML</h3>
          <p>Compatible</p>
        </div>
        <div class="text">
          <h3>W3C</h3>
          <p>Powered</p>
        </div>
        <footer></footer>
      </div>
    </div>`;
  }
}

customElements.define("cover-svg", CoverSVG);
