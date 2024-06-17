import Open from './frame-manager/Open'
import Provider from './frame-manager/Provider'
import Counter from './frames/Counter'
import { counterValidator } from './frames/Counter/validator'
import Files from './frames/Files'
import { filesValidator } from './frames/Files/validator'

const App = () => {
  return (
    <Provider
      frames={{
        counter: {
          frame: Counter,
          validator: counterValidator,
        },
        files: {
          frame: Files,
          validator: filesValidator,
        },
      }}
    >
      <Open frame="counter">Open Counter</Open>
      <Open frame="files">Open Files</Open>
    </Provider>
  )
}

export default App
