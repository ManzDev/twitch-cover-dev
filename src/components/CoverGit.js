class CoverGit extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --width: var(--cover-size);
        --height: var(--cover-size);
        --texture: url(asfalt-dark.png);
        --light-color: #ececec;
        --dark-color: #313131;
        --git-color: #f34f29;
        --cover-vinyl:
          linear-gradient(
            to bottom,
            var(--light-color) 0% 29%,
            var(--light-color) 80% 100%
          );
        --cover-padding: 10px 25px;
        --line-medium-color: color-mix(in srgb, var(--line-light-color), white 10%);
        --line-light-color: #f34f29;
        --line-dark-color: color-mix(in srgb, var(--line-medium-color), white 20%);
      }

      .container {
        font-family: Lexend, sans-serif;
        font-weight: 800;
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 35% 65%;
        background: var(--cover-vinyl);
        box-shadow:
          0 0 80px #000c inset,
          0 0 10px #0007;
      }

      .left {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        & .top {
          margin-top: 5.8rem;
          display: flex;
          flex-direction: column-reverse;
          writing-mode: vertical-lr;
          text-orientation: mixed;
          rotate: -180deg;
          color: var(--dark-color);
          mask: linear-gradient(to left, black 66%, transparent 67% 68%, black 68%);

          & .title {
            font-size: 6.5rem;
          }

          & .subtitle {
            font-size: 1.5rem;
            translate: 25px;
          }
        }

        & .bottom {
          width: min-content;
          display: flex;
          gap: 0.2rem;
          flex-direction: column;
          align-items: center;
          margin-left: 1rem;
          margin-bottom: 1rem;

          & .cmd-1 {
            background: var(--dark-color);
            color: var(--light-color);
            width: min-content;
            font-weight: 600;
            padding: 0.2rem 0.5rem;
            border-radius: 50%;
          }

          & .cmd-2 {
            border: 1px solid var(--dark-color);
            width: min-content;
            padding: 0.1rem 0.3rem;
            border-radius: 4px;
            color: var(--dark-color);
          }

          & .cmd-3 {
            font-weight: 300;
            color: var(--dark-color);
          }
        }
      }

      .right {
        --mask-gaps: linear-gradient(
          to right,
          black 0 50px,
          transparent 50px 60px,
          black 60px 110px,
          transparent 110px 120px,
          black 120px 170px,
          transparent 170px 200px
        );

        --colors-gradient: linear-gradient(
          to right,
          var(--line-light-color) 0% 30%,
          var(--line-medium-color) 30% 60%,
          var(--line-dark-color) 60% 100%
        );

        display: grid;
        grid-template-rows: 35% 5% 60%;

        & .top {
          display: grid;
          place-items: start center;

          & .lines {
            width: 70%;
            height: 95%;
            background:
              linear-gradient(
                to bottom,
                #0003 0% 75%,
                transparent 75%
              ),
              var(--colors-gradient);
            mask: var(--mask-gaps);
          }
        }

        & .medium {
          display: grid;
          place-items: end center;

          & .lines {
            width: 70%;
            height: 60%;
            background: var(--colors-gradient);
            mask: var(--mask-gaps);
            translate: 0 -2px;
          }
        }

        & .bottom {
          display: grid;
          place-items: center end;
          position: relative;
          overflow: hidden;

          & .level {
            --overlay: linear-gradient(
              to top,
              #0003 0% 85%,
              transparent 85%
            );

            position: absolute;
            width: 85%;
            height: 90%;
          }

          & .level-1 {
            background: var(--overlay), var(--line-dark-color);
            translate: 120px 0;
            height: 216px;
            clip-path: inset(0 0 115px 0);
            mask-image:
              linear-gradient(to bottom, transparent 0 50px, black 50px 300px),
              linear-gradient(to right, black 0 50px, transparent 50px 300px);
          }

          & .level-2 {
            background: var(--overlay), var(--line-medium-color);
            translate: 60px 0;
            height: 216px;
            clip-path: inset(0 0 55px 0);
            mask-image:
              linear-gradient(to bottom, transparent 0 110px, black 110px 300px),
              linear-gradient(to right, black 0 50px, transparent 50px 300px);
          }

          & .level-3 {
            background: var(--overlay), var(--line-light-color);
            mask-image:
              linear-gradient(to bottom, transparent 0 170px, black 170px 300px),
              linear-gradient(to right, black 0 50px, transparent 50px 300px);
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
    <style>${CoverGit.styles}</style>
    <div class="container">
      <div class="left">
        <div class="top">
          <div class="title">Git</div>
          <div class="subtitle">$ git status</div>
        </div>
        <div class="bottom">
          <div class="cmd-1">add</div>
          <div class="cmd-2">commit</div>
          <div class="cmd-3">push ▶</div>
        </div>
      </div>
      <div class="right">
        <div class="top">
          <div class="lines"></div>
        </div>
        <div class="medium">
          <div class="lines"></div>
        </div>
        <div class="bottom">
          <div class="level level-1"></div>
          <div class="level level-2"></div>
          <div class="level level-3"></div>
        </div>
      </div>
    </div>`;
  }
}

customElements.define("cover-git", CoverGit);
