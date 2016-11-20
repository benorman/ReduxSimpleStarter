import React from 'react';

const VideoDetail = ({video}) => {

//this functional component could be called before the parent app has called
//YouTube and executed the first search, as such we need to handle the case
//where we have no video props passed in first

    if(!video){
        return <div>One Moment...Loading.....</div>
    }
    const videoId = video.id.videoId;

    //ES6 Magic: String interpolation use inside backticks
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src ={url}></iframe>
            </div>
            <div className="details">
                <div className="videoTitle">{video.snippet.title}</div>
                <p />
                <div>{video.snippet.description}</div>
            </div>
        </div>


    );

};

export default VideoDetail;