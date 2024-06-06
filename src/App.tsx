import Open from './frame-manager/Open'
import Provider from './frame-manager/Provider'
import Counter from './frames/Counter'
import { counterValidator } from './frames/Counter/validator'

const App = () => {
  return (
    <Provider
      frames={{
        counter: {
          frame: Counter,
          validator: counterValidator,
        },
      }}
    >
      <Open frame="counter" params={['0']}>
        Open Counter
      </Open>
    </Provider>
  )
}

export default App
