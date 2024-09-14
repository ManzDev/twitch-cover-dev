const ORIGINAL_COLORS = [
  "#482c76",
  "#3a84a8",
  "#4f8b15",
  "#e52b7e",
  "#da2818",
  "#e0551a",
  "#e6af14"
];

const COLORS = [
  "#1A5771",
  "#216D8E",
  "#F79F39",
  "#2E9AC8",
  "#39BEF7",
  "#38BDF8",
  "#134053",
].reverse();

const createGrid = (size, level) => {
  const TOTAL = size * 2 + ((size - 2) * 2);

  const newSize = size - 2;
  const currentColor = COLORS[level];
  const margin = (7 - level) / 2;
  const delay = level / 2;
  const inlineStyles = `--size: ${newSize}; --delay: ${delay}s; --color: ${currentColor}; --margin: ${margin}px`;

  const first = /* html */"<div></div>".repeat(size + 1);
  const recursion = /* html */`<div class="central grid" style="${inlineStyles}">${level < 7 ? createGrid(newSize, level + 1) : ""}</div>`;
  const last = /* html */"<div></div>".repeat(TOTAL - (size + 2) + 1);

  return first + recursion + last;
};

class CoverTailwind extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --width: var(--cover-size);
        --height: var(--cover-size);
        --cover-vinyl: linear-gradient(to bottom, #222 0% 29%, #222 80% 100%);
        --cover-padding: 10px 25px;
        --tailwind-color: #38bdf8;
      }

      .container {
        width: 100%;
        height: 100%;
        box-shadow: 0 0 80px #000c inset, 0 0 10px #0007;
        background: url(asfalt-dark.png), var(--cover-vinyl);
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 0.2fr 0.8fr;
        place-items: center;
        row-gap: 1rem;
        padding: 2rem;
        box-sizing: border-box;
      }

      .title {
        padding-left: 1.2rem;
        font-family: Minercraftory, sans-serif;
        font-size: 1.6rem;
        line-height: 110%;
        color: #fff;
      }

      .subtitle {
        font-family: Jost, sans-serif;
        font-size: 0.85rem;
        padding-right: 1.3rem;
        line-height: 100%;
        text-align: right;
        color: var(--tailwind-color);
        text-transform: uppercase;
      }

      .parent-grid {
        grid-column: span 2;
        place-content: center;
        max-width: 281px;
        max-height: 281px;
      }

      .grid {
        --block-size: 20px;
        --margin-size: 5px;

        display: grid;
        grid-template-columns: repeat(var(--size, 15), var(--block-size));
        grid-template-rows: repeat(var(--size, 15), var(--block-size));

        perspective: 600px;

        & > div:not(.central) {
          background: var(--color, ${COLORS[0]});
          /* box-shadow: 0 0 5px 1px
            color-mix(in srgb, var(--color, ${COLORS[0]}), black 30%);*/
          margin: var(--margin, 3.5px);
          border-radius: 1px;
          animation: resize 2s infinite alternate var(--delay, 0.5s);
        }

        & .central {
          grid-column-end: span calc(var(--size, 15));
          grid-row-end: span calc(var(--size, 15));
        }
      }

      @keyframes resize {
        from { transform: rotateX(0) }
        to { transform: rotateX(80deg) }
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CoverTailwind.styles}</style>
    <div class="container">
      <div class="title">TailwindCSS</div>
      <div class="subtitle">Clases de utilidad</div>
      <div class="grid parent-grid">
        ${createGrid(15, 1)}
      </div>
    </div>`;
  }
}

customElements.define("cover-tailwind", CoverTailwind);
