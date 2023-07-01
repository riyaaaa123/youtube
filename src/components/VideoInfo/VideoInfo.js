import React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import DensityLargeIcon from '@mui/icons-material/DensityLarge';
import SidebarRow from '../Sidebarrow/SidebarRow';
import './VideoInfo.css';
import Avatar from '@mui/material/Avatar';

function VideoInfo({ title, description, publishedDate, channelTitle, channelImage, viewCount, likeCount, dislikeCount, subs }) {
    return (
        <div className='videoinfo'>
            <div className='videoinfo_headline'>
                <h1>{title}</h1>
            </div>
            <div className='videoinfo_stats'>
                <p>{viewCount} views • {publishedDate}</p>
                <div className="videoinfo_likes">
                    <SidebarRow Icon={ThumbUpIcon} title={likeCount} />
                    <SidebarRow Icon={ThumbDownIcon} title={dislikeCount} />
                    <SidebarRow Icon={ShareIcon} title='SHARE' />
                    <SidebarRow Icon={BookmarkBorderIcon} title='SAVE' />
                    <SidebarRow Icon={DensityLargeIcon} title='' />
                </div>
            </div>
            <hr />
            <div className="videoinfo_channel">
                <div>
                    <Avatar
                        className='videoinfo_avatar'
                        alt={channelTitle}
                        src={channelImage}
                    />
                    <div className='videoinfo_channelinfo'>
                        <h3 className='videoinfo_channeltitle'>{channelTitle}</h3>
                        <p className='videoinfo_channelsubs'>{subs} subscribers</p>
                    </div>

                </div>
                <div className='videoinfo_subscribe'>
                    <button color='secondary' >SUBSCRIBE</button>
                </div>
            </div>
            <div className='videoinfo_channeldesc'>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default VideoInfo;