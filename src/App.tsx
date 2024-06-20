import Open from './frame-manager/Open'
import Provider from './frame-manager/Provider'
import Counter from './frames/Counter'
import { counterValidator } from './frames/Counter/validator'
import Files from './frames/Files'
import { filesValidator } from './frames/Files/validator'
import Player from './frames/Player'

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
        files: {
          frame: Files,
          validator: filesValidator,
        },
        website: {
          frame: Website,
          validator: websiteValidator,
        },
        player: {
          frame: Player,
        },
      }}
    >
      <Open frame="counter">Open Counter</Open>
      <Open frame="files">Open Files</Open>
      <Open frame="website">Open Website</Open>
      <Open frame="player">Open Player</Open>
    </Provider>
  )
}

export default App
