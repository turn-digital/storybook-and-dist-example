import settings from 'carbon-components/es/globals/js/settings';
import {html, css, LitElement, property} from 'lit-element';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

const { prefix } = settings;

@customElement(`${prefix}-custom-component`)

export class SimpleGreeting extends LitElement {

  static styles = css`p { color: blue }`;

  @property() name = 'Default Name';
  @property() buttonTitle = 'Default Title'


  render() {

    return html`
    <div>
    <p>Hello, ${this.name}!</p>
    <div><input placeholder="Input"></input></div>
    <button>${this.buttonTitle}</button>
    </div>`
  }

}