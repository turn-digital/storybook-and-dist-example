import { html } from 'lit-html';
import './custom-component'
import storyDocs from  './custom-component-story.mdx'

export const Default = (args)=>{
  const {
  } = args?.['bx-custom-component'] ?? {};
    return html `
    <bx-custom-component name="Default Name" buttonTitle="Default Title" />
    ` 
} 

Default.storyName = 'Default';

export const Propsed = (args)=>{
  const {
  } = args?.['bx-custom-component'] ?? {};
    return html `
    <bx-custom-component name="Propsed Name" buttonTitle="Propsed Title" />
    ` 
} 

Propsed.storyName = 'Propsed';

export default {
    title: 'Components/Custom-component',
    parameters: {
      ...storyDocs.parameters,
    },
  };