import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js'

@customElement('ds-button')
export class DSButton extends LitElement {
  static styles = css`
    .ds-button {
      display: inline-block;
      cursor: pointer;
      border: 0;
      border-radius: var(--ds-border-radius-base);
      font-weight: var(--ds-font-weight-bold);
      line-height: var(--ds-line-height-base);
      font-size: var(--ds-font-size-base);
      padding: var(--ds-spacer-3);
      font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }

    .ds-button--primary {
      background-color: var(--ds-color-primary);
      color: var(--ds-color-light);

        &:hover {
          background-color: var(--ds-color-primary-dark);
        }
      }

      .ds-button--secondary {
        background-color: var(--ds-color-secondary);
        color: var(--ds-color-primary);

        &:hover {
          color: var(--ds-color-light);
          background-color: var(--ds-color-secondary-dark);
        }
    }

    .ds-button--small {
      padding: var(--ds-spacer-2);
      font-size: var(--ds-font-size-sm);
    }

    .ds-button--large {
      padding: var(--ds-spacer-4);
      font-size: var(--ds-font-size-lg);
    }
  `;

  @property({ type: String }) variant?: 'primary' | 'secondary';
  @property({ type: String }) size?: 'small' | 'large';
  @property({ type: Function }) onClick?: () => void;

  render() {
    return html`
    <button
      type="button"
      class=${['ds-button', `ds-button--${this.variant ? this.variant : 'primary'}`, this.size ? `ds-button--${this.size}` : ''].join(' ')}
      @click=${this.onClick}
    >
      <slot />
    </button>
  `;
}
};

declare global {
  interface HTMLElementTagNameMap {
    'ds-button': DSButton
  }
}
