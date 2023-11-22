import { Heading } from '@radix-ui/themes';
import "@radix-ui/themes/styles.css";
import TrackList from '../components/trackList/TrackList';

const list = [1,1,1,1]

const Tracks = () => {
  return (
    <div>
      <Heading >Треки</Heading>
      <TrackList/>
    </div>
  )
}

export default Tracks;