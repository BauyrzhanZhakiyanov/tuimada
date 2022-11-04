import TrackPlayer, {Event} from 'react-native-track-player'

module.exports = async function() {
  TrackPlayer.addEventListener(Event.RemotePlay, ()=>{
    return TrackPlayer.play()
  })
  TrackPlayer.addEventListener(Event.RemotePause, ()=>{
    return TrackPlayer.pause()
  })
}
