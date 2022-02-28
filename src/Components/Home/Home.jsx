import React from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';


const Home = (props) => {

    
    return ( 
        <div>
            <VideoPlayer videoId={props.videoId}/>
        </div>
     );
}
 
export default Home;