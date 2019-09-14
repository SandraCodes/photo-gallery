import React from 'react'

import { storiesOf, configure, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import GalleryButton from '../components/GalleryButton'
import GalleryButtonList from '../components/GalleryButtonList' 

// To use the info decorator globally it has to be declared first
addDecorator((story, context) => withInfo('common info')(story)(context))

// Knobs allow you to edit React props dynamically using the Storybook UI
const stories = storiesOf('Gallery App/Buttons', module)
// doesn't work :\
stories.addDecorator(withKnobs)

const styles = {
  textAlign: 'center',
}
// Decorator for centering a story - to use on individual stories
const CenterDecorator = (storyFn) => (
  <div style={styles}>
    { storyFn() }
  </div>
)

// Instead it can be used like this to be applied to all stories
// addDecorator(CenterDecorator);
stories
  .addDecorator(CenterDecorator)
  .add('Single button', () => (
    <GalleryButton onClick={ action('clicked') } name={text('Label', 'Hello World')} />
  ))
  .add('Button List', () => (
    <GalleryButtonList onClick={ action('clicked') } />
  ))
