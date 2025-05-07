class CoverLayouts extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --bgcolor: #0f0135;
        --fgcolor: #eb13e3;
        --width: var(--cover-size);
        --height: var(--cover-size);
        --cover-vinyl:
          linear-gradient(to bottom, var(--bgcolor) 0% 29%, var(--bgcolor) 80% 100%);
        --cover-padding: 10px 25px;
      }

      .container {
        display: grid;
        grid-template-rows: 0.7fr 0.3fr;
        width: 100%;
        height: 100%;
        background: url(asfalt-dark.png), var(--cover-vinyl);
        box-shadow:
          0 0 80px #000c inset,
          0 0 10px #0007;
        overflow: hidden;
      }

      .sky {
        width: 100%;
        height: 100%;
        background: #13023a;
        background-image:
          linear-gradient(0deg, #440f6388 5px, transparent 80px),
          linear-gradient(82deg, #440f6388 5px, transparent 80px),
          linear-gradient(-82deg, #440f6388 5px, transparent 80px);
        display: grid;
        place-items: center;
        position: relative;

        .sun {
          width: 250px;
          height: 250px;
          border-radius: 50%;
          position: absolute;
          top: 95px;
          background: linear-gradient(
            to bottom,
            #ea13e2 20%,
            #0cc9f6 60%
          );
          mask-image: repeating-linear-gradient(
            to top,
            transparent 0 3px,
            #000 3px 32px
          );
        }

        .grid {
          --fgcolor: #5026b02e;
          --grid-line-size: 1px;
          --underlayer: linear-gradient(
            to right,
            transparent,
            transparent
          );
          background:
            var(--grid-h),
            var(--grid-v);
          width: 100%;
          height: 100%;
          position: absolute;
          transform: scale(1.04);
        }
      }

      .floor {
        height: 100%;
        perspective: 100px;
        z-index: 5;

        .grid {
          --cell-size-h: 25px;
          --grid-line-size: 2px;
          --underlayer: radial-gradient(
            circle 1200px at 50% 0,
            #2858d3 45px,
            #13023c 150px
          );
          width: 100%;
          height: 100%;
          transform: scale(1.5) translateY(-18px) rotateX(45deg);

          & .monolits {

            & .monolit {
              translate: 0 -5px;
              border: 0;
              opacity: 0.6;
              filter: blur(1px);
              mix-blend-mode: hard-light;
            }

            & .monolit:nth-child(odd) {
              translate: 0 -25px;
              height: 95px;
            }

          }
        }
      }

      header {
        position: absolute;
        top: 0;
        color: #fff;

        & h1 {
          --border-color: #fff;

          font-family: Lalezar;
          font-size: 5rem;
          margin: -0.5rem;

          background:
            linear-gradient(
              #1c4dda 32px,
              #68e1f2 40px 44px,
              #fff 50px 55px,
              #b117a0 55px 60px,
              #eb14eb 63px 66px,
              #fff 78px
            );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;

          filter:
            drop-shadow(-2px 0 0 var(--border-color))
            drop-shadow(2px 0 0 var(--border-color))
            drop-shadow(0 2px 0 var(--border-color))
            drop-shadow(0 -2px 0 var(--border-color))
            drop-shadow(0 0 4px #fff4)
            drop-shadow(0 0 4px #fff3)
            drop-shadow(0 0 4px #fff2)
            drop-shadow(5px 5px 3px #000c)
            drop-shadow(0 0 4px #0e0480);

            &::after {
              content: "";
              display: block;
              background: #10fcfa;
              width: 12px;
              height: 12px;
              position: absolute;
              top: 21px;
              right: -6px;
              corner-shape: scoop;
              border-radius: 50%;
              filter: drop-shadow(0 0 4px #fff4);
            }
        }

        & span {
          display: inline-block;
          font-family: "Grape Nuts";
          font-size: 2.5rem;
          color: white;
          font-weight: 600;
          translate: 7.5rem -2.5rem;
          rotate: -3deg;
          text-shadow:
            0 0 4px #d919c6,
            0 0 4px #d919c6,
            0 0 4px #d919c6,
            0 0 4px #d919c6,
            0 0 4px #d919c6,
            0 0 4px #d919c6,
            0 0 4px #d919c6,
            0 0 4px #d919c6,
            0 0 20px #d919c6;

            &::after {
              content: "";
              display: block;
              width: 150px;
              height: 16px;
              border: 5px solid #fff;
              border-radius: 400px 0 0 / 50px 5px 0;
              border-bottom: 0;
              border-left: 0;
              border-right: 0;
              rotate: 2deg;
              translate: 30px -5px;
              filter:
                drop-shadow(0 0 2px #d919c6)
                drop-shadow(0 0 2px #d919c6)
                drop-shadow(0 0 8px #d919c6);
            }
        }
      }

      .stars {
        width: 100%;
        height: 100%;
        position: absolute;

        &::after {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          mix-blend-mode: saturation;
          background: linear-gradient(to right, #ea13e2, #0cc9f6, #ea13e2);
        }

        & .star {
          width: var(--size);
          height: var(--size);
          background: #fff;
          translate: var(--x) var(--y);
          opacity: var(--opacity, 1);
        }
      }

      .monolits {
        display: flex;
        width: 100%;
        height: 100%;
        z-index: 2;
        width: calc(var(--cover-size) / 1.75);
        margin: auto;
        justify-content: space-evenly;
        align-items: end;

        & .monolit {
          background: #111;
          box-shadow:
            0 3px 10px #333 inset,
            0 5px 20px #222 inset,
            0 1px 10px #333 inset;
          width: 55px;
          height: 115px;
          border: 2px solid transparent;
          background:
            linear-gradient(#111, #111) padding-box,
            linear-gradient(var(--fgcolor) 5%, #111 70%) border-box;

          &:nth-child(odd) {
            height: 110px;
            translate: 0 30px;
          }

          &::after {
            content: "";
            display: block;
            background: #444;
            width: 100%;
            height: 15px;
            filter: blur(20px);
          }
        }
      }

      .grid {
        --grid-v: repeating-linear-gradient(
          to left,
          var(--fgcolor) 0 var(--grid-line-size),
          transparent var(--grid-line-size) 50px
        );
        --grid-h: repeating-linear-gradient(
          to bottom,
          var(--fgcolor) 0 var(--grid-line-size),
          transparent var(--grid-line-size) var(--cell-size-h, 50px)
        );

        background:
          linear-gradient(to top, transparent 40%, #003 95%),
          var(--grid-h),
          var(--grid-v),
          var(--underlayer);
      }
    `;
  }

  putStars() {
    const stars = this.shadowRoot.querySelector(".stars");
    const coverSize = Number.parseInt(
      getComputedStyle(this).getPropertyValue("--cover-size")
    );
    console.log(coverSize);
    for (let i = 0; i < 300; i++) {
      const star = document.createElement("div");
      const size = 1;
      const x = ~~(Math.random() * coverSize);
      const y = ~~(Math.random() * coverSize);
      const opacity = ~~(Math.random() * 100) / 100;
      star.classList.add("star", `star-${i}`);
      star.style.setProperty("--x", `${x}px`);
      star.style.setProperty("--y", `${y}px`);
      star.style.setProperty("--size", `${size}px`);
      star.style.setProperty("--opacity", opacity);
      stars.append(star);
    }
  }

  connectedCallback() {
    this.render();
    this.putStars();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CoverLayouts.styles}</style>
    <div class="container">
      <div class="sky">
        <div class="grid"></div>
        <div class="stars"></div>
        <div class="sun"></div>
        <div class="monolits">
          <div class="monolit monolit-1"></div>
          <div class="monolit monolit-2"></div>
          <div class="monolit monolit-3"></div>
        </div>
        <header>
          <h1>LAYOUTS</h1>
          <span>Flex & Grid</span>
        </header>
      </div>
      <div class="floor">
        <div class="grid">
          <div class="monolits">
            <div class="monolit monolit-1"></div>
            <div class="monolit monolit-2"></div>
            <div class="monolit monolit-3"></div>
          </div>
        </div>
      </div>
    </div>`;
  }
}

customElements.define("cover-layouts", CoverLayouts);
