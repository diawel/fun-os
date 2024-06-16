import Open from './frame-manager/Open'
import Provider from './frame-manager/Provider'
import Counter from './frames/Counter'
import { counterValidator } from './frames/Counter/validator'

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
        website: {
          frame: Website,
          validator: websiteValidator,
        }
      }}
    >
      <Open frame="counter">Open Counter</Open>
      <Open frame="website">Open Website</Open>
    </Provider>
  )
}

export default App
