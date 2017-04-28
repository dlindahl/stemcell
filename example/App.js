import Button from '../src/components/Button'
import Code from '../src/components/Code'
import { css } from 'glamor'
import Heading from '../src/components/Heading'
import Image from '../src/components/Image'
import ComponentizeContent from '../src/components/ComponentizeContent'
import Paragraph from '../src/components/Paragraph'
import React from 'react'
import Rule from '../src/components/Rule'
import Text from '../src/components/Text'
import ThemeProvider from '../src/components/ThemeProvider'
import VerticalRhythm from '../src/components/VerticalRhythm'

const spin = css.keyframes('spin', {
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' }
})

const style = {
  container: css({
    textAlign: 'center'
  }),
  header: css({
    backgroundColor: '#222',
    color: 'white',
    height: 150,
    padding: 20
  }),
  intro: css({
    fontSize: 'large'
  }),
  logo: css({
    animation: `${spin} infinite 20s linear`,
    height: 80
  })
}

const App = (props) => (
  <ThemeProvider>
    <VerticalRhythm baseline>
      <div className={style.container}>
        <Heading level={1}>
          A Visual Type Scale
        </Heading>
        <Heading level={2}>
          A Visual Type Scale
        </Heading>
        <Heading level={3}>A Visual Type Scale</Heading>
        <Heading level={4}>A Visual Type Scale</Heading>
        <Heading level={5}>A Visual Type Scale</Heading>
        <Heading level={6}>A Visual Type Scale</Heading>
        <Text inline={false} size="brevier">A Visual Type Scale</Text>
        <Text inline={false} size="minion">A Visual Type Scale</Text>
        <Text inline={false}>BODY: A Visual Type Scale</Text>

        <Rule/>

        <Button backgroundColor="#0C8558" color="white" size="minion">
          Test Button
        </Button>

        <Paragraph>
          Test Paragraph
        </Paragraph>

        <Paragraph>
          <Code>inline code</Code>
        </Paragraph>

        <ComponentizeContent>
          {'<p>markdown-generated <i>HTML</i></p>'}
        </ComponentizeContent>

        <Image height={7} src="http://placehold.it/350x150" width={16}/>
        <Image
          contain
          height={10}
          src="http://placehold.it/350x150"
          srcHeight={150}
          srcWidth={350}
          width={20}
        />
        <Image
          height={3}
          scaleDown
          src="http://placehold.it/350x150"
          srcHeight={150}
          srcWidth={350}
          width={5}
        />
        <Image
          cover
          src="http://placehold.it/350x150"
          srcHeight={150}
          srcWidth={350}
        />
      </div>
    </VerticalRhythm>
  </ThemeProvider>
)

export default App
