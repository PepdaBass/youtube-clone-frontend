import React, { useEffect, useState } from 'react';


const Home = (props) => {

    
    return ( 
        <div>
            <iframe id="ytplayer" type="text/html" width="640" height="360"
            src={`https://www.youtube.com/embed/${props.videoId}?autoplay=1`}
            frameBorder="0"></iframe>
        </div>
     );
}
 
export default Home;