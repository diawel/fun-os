import Open from './frame-manager/Open'
import Provider from './frame-manager/Provider'
import Counter from './frames/Counter'
import { counterValidator } from './frames/Counter/validator'
import Files from './frames/Files'
import { filesValidator } from './frames/Files/validator'

import Website from './frames/Website'
import { websiteValidator } from './frames/Website/validator'

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
      <Open frame="counter">Open Counter</Open>
    </Provider>
  )
}

export default App
