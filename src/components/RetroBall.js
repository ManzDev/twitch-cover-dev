class RetroBall extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        position: absolute;
        top: var(--y);
        left: var(--x);
        z-index: 5;
      }

      :host(.back) {
        z-index: 2;
      }

      .ball {
        --dark-color: color-mix(in srgb, var(--color), black 25%);

        width: var(--size);
        height: var(--size);
        background: var(--color, #fff);
        background-image: linear-gradient(var(--dark-color) 65%, var(--color) 85%);
        border-radius: 50%;
        box-shadow:
          0 0 20px #0003,
          0 -10px 10px #0005 inset,
          0 -5px 25px #0006 inset,
          0 -5px 30px #0009 inset;
        transform: rotate(-15deg);

        &::before {
          --shine-size: calc(var(--size) / 10);

          content: "";
          width: var(--shine-size);
          height: var(--shine-size);
          display: block;
          background: color-mix(in srgb, #fff, transparent 60%);
          background: #fff;
          mix-blend-mode: soft-light;
          border-radius: 50%;
          position: absolute;
          transform: translate(325%, 200%);
          filter: blur(1.5px);
        }

        &::after {
          --size: 85%;
          --offset: 5%;

          content: "";
          display: block;
          width: var(--size);
          height: var(--size);
          box-shadow:
          0 10px 5px #0005,
          0 -10px 5px #0005 inset,
          0 -10px 15px #0005 inset,
          0 -10px 20px #0005 inset;
          filter: blur(2px);
          mix-blend-mode: var(--blend);
          border-radius: 50%;
          opacity: 60%;
          transform: translate(var(--offset), var(--offset));
        }
      }

      :host(.dark) {
        & .ball { box-shadow: none; }
        & .shadow { display: none; }
      }

      .shadow {
        width: calc(var(--size) * 0.8);
        height: calc(var(--size) * 0.3);
        background: #0009;
        border-radius: 50%;
        filter: blur(3.5px);
        transform: translate(30%, 30%) rotate(-15deg);
      }
    `;
  }

  enableAnimation() {
    this.shadowRoot.querySelector(":host(:not(.dark)) .ball").animate(
      [
        { translate: "0 -10px" },
        { translate: "0 20px" }
      ],
      {
        duration: 500,
        easing: "ease-in",
        iterations: Infinity,
        direction: "alternate"
      });
  }

  connectedCallback() {
    this.render();
    // this.enableAnimation();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${RetroBall.styles}</style>
    <div class="ball"></div>
    <div class="shadow"></div>`;
  }
}

customElements.define("retro-ball", RetroBall);
