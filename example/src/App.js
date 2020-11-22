import * as React from 'react'

import PulseDot from '../.'
import 'reactjs-pulsating-dot/dist/index.css'

const App = () => {
  return (
    <div>
      <h1 className='center'>Sample <PulseDot color='#828282'/></h1>
      <div className='sample'>
        <div>
          <pre><PulseDot/> {`<PulseDot/> or <PulseDot color='success'/>`}</pre>
        </div>
        <div>
          <pre><PulseDot color='info'/> {`<PulseDot color='info'/>`}</pre>
        </div>
        <div>
          <pre><PulseDot color='warning'/> {`<PulseDot color='warning'/>`}</pre>
        </div>
        <div>
          <pre><PulseDot color='danger'/> {`<PulseDot color='danger'/>`}</pre>
        </div>
        <div>
          <pre><PulseDot color='#6233AE'/> {`<PulseDot color='#6233AE'/>`}</pre>
        </div>
        <div>
          <pre><PulseDot style={{fontSize: '0.5em'}}/> {`<PulseDot style={{fontSize: '0.5em'}}/>`}</pre>
        </div>
        <div>
          <pre><PulseDot style={{fontSize: '2em'}}/> {`<PulseDot style={{fontSize: '2em'}}/>`}</pre>
        </div>
      </div>
    </div>
  )
}

export default App
