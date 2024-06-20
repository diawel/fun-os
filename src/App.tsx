import Open from './frame-manager/Open'
import Provider from './frame-manager/Provider'
import Counter from './frames/Counter'
import { counterValidator } from './frames/Counter/validator'
import Drawer from './frames/Drawer'
import { drawerValidator } from './frames/Drawer/validator'
import Files from './frames/Files'
import { filesValidator } from './frames/Files/validator'
import Player from './frames/Player'
import { playerValidator } from './frames/Player/validator'
import Website from './frames/Website'
import { websiteValidator } from './frames/Website/validator'
import Photos from './frames/Photos'
import { photosValidator } from './frames/Photos/validator'

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
        photos: {
          frame: Photos,
          validator: photosValidator,
        },
        player: {
          frame: Player,
          validator: playerValidator,
        },
        drawer: {
          frame: Drawer,
          validator: drawerValidator,
        },
      }}
    >
      <Open frame="counter">Open Counter</Open>
      <Open frame="files">Open Files</Open>
      <Open frame="website">Open Website</Open>
      <Open frame="player">Open Player</Open>
      <Open frame="drawer">Open Drawer</Open>
      <Open frame="photos">Open Photos</Open>
    </Provider>
  )
}

export default App
