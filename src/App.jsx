import './index.css'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import { useContext  } from 'react'
import { PlayerContext } from './context/PlayerContext'

const App = () => {
  const {audioRef , track } = useContext(PlayerContext);
  return (
    <div className='2xl:container mx-auto h-screen bg-black'>
      <div className='h-[90%] w-[98%] mx-auto flex '>
        <Sidebar/>
        <Display/>
      </div>
      <Player/>
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App
  