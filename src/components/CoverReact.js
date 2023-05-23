class CoverReact extends HTMLElement {
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
          linear-gradient(to bottom, #23272f 0% 29%, #23272f 80% 100%);
        --cover-padding: 10px 25px;
      }

      .container {
        width: 100%;
        height: 100%;
        background:
          url(asfalt-dark.png),
          linear-gradient(transparent, #23272f 70%),
          var(--cover-vinyl);

        display: grid;
        grid-template-columns: 70% 30%;
        height: 100%;
      }

      .container::after {
        content: "";
        display: block;
        position: absolute;
        inset: 0;
        box-shadow:
          0 0 20px #000d inset,
          0 0 10px #0007;
        z-index: 10;
      }

      .text-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .text-logo {
        font-family: Rubik;
        font-weight: 550;
        letter-spacing: -2px;
        font-size: 5rem;
        text-align: center;
        margin-top: 0.75rem;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .text-logo h1 {
        font-size: 5rem;
        margin: 0;
        margin-top: 1rem;
        line-height: 90%;
      }

      .text-logo .subtitle {
        font-size: 1.25rem;
        letter-spacing: -1px;
        line-height: 40%;
        max-width: 200px;
        line-height: 110%;
        color: #0e7696;
      }

      .bottom {
        display: flex;
        justify-content: end;
        align-items: end;
        padding: 2rem;
      }

      .bottom svg {
        width: 250px;
        height: 250px;
        clip-path: polygon(40% 0, 100% 0, 100% 65%, 40% 65%);
        opacity: 0.2;
        transform: scale(1.55);
        transform-origin: 40% 65%;
        position:absolute;
        bottom: -87px;
        left: -99px;
        filter: drop-shadow(2px 2px 6px #000c);
      }

      .bottom svg :is(path, circle) {
        fill: #374151;
      }

      .rainbow {
        display: flex;
        align-items: end;
        background-image: linear-gradient(
          to right,
          #0e7696 20%,
          #149eca 20% 40%,
          #a3c0ca 40% 60%,
          #149eca 60% 80%,
          #0e7696 80%
        );
      }

      .pixel-container {
        --size: 24px;
        --color: #23272f;

        width: 100%;
        height: calc(var(--size) * 8);
        color: var(--color);
      }

      .pixel {
        width: var(--size);
        height: var(--size);
        background: var(--color);
        box-shadow:
          calc(4 * var(--size)) 0 0,

          calc(2 * var(--size)) calc(1 * var(--size)) 0,
          calc(3 * var(--size)) calc(1 * var(--size)) 0,

          calc(1 * var(--size)) calc(2 * var(--size)) 0,
          calc(3 * var(--size)) calc(2 * var(--size)) 0,
          calc(4 * var(--size)) calc(2 * var(--size)) 0,

          calc(0 * var(--size)) calc(3 * var(--size)) 0,
          calc(2 * var(--size)) calc(3 * var(--size)) 0,
          calc(3 * var(--size)) calc(3 * var(--size)) 0,
          calc(4 * var(--size)) calc(3 * var(--size)) 0,

          calc(1 * var(--size)) calc(4 * var(--size)) 0,
          calc(2 * var(--size)) calc(4 * var(--size)) 0,
          calc(4 * var(--size)) calc(4 * var(--size)) 0,

          calc(0 * var(--size)) calc(5 * var(--size)) 0,
          calc(1 * var(--size)) calc(5 * var(--size)) 0,
          calc(2 * var(--size)) calc(5 * var(--size)) 0,
          calc(3 * var(--size)) calc(5 * var(--size)) 0,

          calc(0 * var(--size)) calc(6 * var(--size)) 0,
          calc(2 * var(--size)) calc(6 * var(--size)) 0,
          calc(3 * var(--size)) calc(6 * var(--size)) 0,
          calc(4 * var(--size)) calc(6 * var(--size)) 0,

          calc(1 * var(--size)) calc(7 * var(--size)) 0;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CoverReact.styles}</style>
    <div class="container">
      <div class="text-container">
        <div class="text-logo">
          <h1>React</h1>
          <div class="subtitle">No es un framework, es una librería</div>
        </div>
        <div class="bottom">
          <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"/><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3c.6-2.4 1.1-4.8 1.5-7.1c2.1-13.2-.2-22.5-6.6-26.1c-1.9-1.1-4-1.6-6.4-1.6c-7 0-15.9 5.2-24.9 13.9c-9-8.7-17.9-13.9-24.9-13.9c-2.4 0-4.5.5-6.4 1.6c-6.4 3.7-8.7 13-6.6 26.1c.4 2.3.9 4.7 1.5 7.1c-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3c-.6 2.4-1.1 4.8-1.5 7.1c-2.1 13.2.2 22.5 6.6 26.1c1.9 1.1 4 1.6 6.4 1.6c7.1 0 16-5.2 24.9-13.9c9 8.7 17.9 13.9 24.9 13.9c2.4 0 4.5-.5 6.4-1.6c6.4-3.7 8.7-13 6.6-26.1c-.4-2.3-.9-4.7-1.5-7.1c2.4-.7 4.7-1.4 6.9-2.3c12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3c-.3 2.1-.8 4.3-1.4 6.6c-5.2-1.2-10.7-2-16.5-2.5c-3.4-4.8-6.9-9.1-10.4-13c7.4-7.3 14.9-12.3 21-12.3c1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6c-3.7.3-7.4.4-11.2.4c-3.9 0-7.6-.1-11.2-.4c-2.2-3.2-4.2-6.4-6-9.6c-1.9-3.3-3.7-6.7-5.3-10c1.6-3.3 3.4-6.7 5.3-10c1.8-3.2 3.9-6.4 6.1-9.6c3.7-.3 7.4-.4 11.2-.4c3.9 0 7.6.1 11.2.4c2.2 3.2 4.2 6.4 6 9.6c1.9 3.3 3.7 6.7 5.3 10c-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3c-3.4.8-7 1.4-10.8 1.9c1.2-1.9 2.5-3.9 3.6-6c1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3c2.3.1 4.6.2 6.9.2c2.3 0 4.6-.1 6.9-.2c-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9c1.1-3.3 2.3-6.8 3.8-10.3c1.1 2 2.2 4.1 3.4 6.1c1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3c3.4-.8 7-1.4 10.8-1.9c-1.2 1.9-2.5 3.9-3.6 6c-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3c-2.3-.1-4.6-.2-6.9-.2c-2.3 0-4.6.1-6.9.2c2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9c-1.1 3.3-2.3 6.8-3.8 10.3c-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3c1-.6 2.2-.9 3.5-.9c6 0 13.5 4.9 21 12.3c-3.5 3.8-7 8.2-10.4 13c-5.8.5-11.3 1.4-16.5 2.5c-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4c2-.8 4.2-1.5 6.4-2.1c1.6 5 3.6 10.3 6 15.6c-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3c.3-2.1.8-4.3 1.4-6.6c5.2 1.2 10.7 2 16.5 2.5c3.4 4.8 6.9 9.1 10.4 13c-7.4 7.3-14.9 12.3-21 12.3c-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3c-1 .6-2.2.9-3.5.9c-6 0-13.5-4.9-21-12.3c3.5-3.8 7-8.2 10.4-13c5.8-.5 11.3-1.4 16.5-2.5c.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1c-1.6-5-3.6-10.3-6-15.6c2.4-5.3 4.5-10.5 6-15.5c13.8 4 22.1 10 22.1 15.6c0 4.7-5.8 9.7-15.7 13.4z"/></g></svg>
        </div>
      </div>
      <div class="rainbow">
        <div class="pixel-container">
          <div class="pixel"></div>
        </div>
      </div>
    </div>`;
  }
}

customElements.define("cover-react", CoverReact);
