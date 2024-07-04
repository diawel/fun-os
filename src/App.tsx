import wallpaperImage from './assets/wallpaper.png'
import Desktop from './Desktop'
import Provider from './frame-manager/Provider'
import Browser from './frames/Browser'
import { browserValidator } from './frames/Browser/validator'
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
import Editor from './frames/Editor'
import { editorValidator } from './frames/Editor/validator'
import Preview from './frames/Preview'
import { previewValidator } from './frames/Preview/validator'

const App = () => {
  const style = {
    backgroundImage: `url(${wallpaperImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  }

  return (
    <div style={style}>
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
          editor: {
            frame: Editor,
            validator: editorValidator,
          },
          preview: {
            frame: Preview,
            validator: previewValidator,
          },
        }}
      >
        <Desktop />
      </Provider>
    </div>
  )
}

export default App
