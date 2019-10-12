import React from 'react';

const Video = ({title, src}) => (
    <div style={{
        position: `relative`,
        width: `80%`,
        margin: `0 auto`,
        height: 0,
        paddingBottom: `56%`}}>
        <iframe 
            style={{
                position: `absolute`,
                width: `100%`,
                height: `100%`,
                left: 0,
                top: 0
            }}
            title={title}
            width="100vw"
            height="56.25vw"
            src={src}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
    </div>
);

export default Video;