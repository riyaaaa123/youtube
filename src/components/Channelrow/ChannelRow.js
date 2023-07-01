import React from 'react';
import './channelrow.css';
import Avatar from'@mui/material/Avatar' ;

function ChannelRow({ image, channel, subs, noOfVideos, description }) {
    return (
        <div className='channelrow'>
            <Avatar
                className='channelrow_logo'
                alt={channel}
                src={image}
            />
            <div className="channelrow_text">
                <h4>{channel}</h4>
                <p>{subs} subscribers • {noOfVideos} videos</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow;