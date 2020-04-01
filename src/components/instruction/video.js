import React from 'react';

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
    <div>
        <iframe
            width="100%" //590
            height="350" //345
            src={videoSrcURL}
            title={videoTitle}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
        />
    </div>
);

export default Video;
