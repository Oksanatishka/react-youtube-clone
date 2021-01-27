import React from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard';

const RecommendedVideos = () => {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                <VideoCard
                    image="https://i.ytimg.com/vi/vb0ZWc70gOk/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCvnBxnx5W-dok9lvPtPWdwQUa9uw"
                    title="Skyview of Ukraine • Ukraïner"
                    channel="Ukraïner"
                    views="1,361,684 Views"
                    timestamp="23 Aug 2019"
                    channelImage="https://yt3.ggpht.com/a/AATXAJyrFkFacLLVNmSwrx8WjmBAVJUeyCelJkqV65uF=s176-c-k-c0xffffffff-no-rj-mo"
                />

                <VideoCard
                    image="https://i.ytimg.com/vi/ZQWrleq-NhQ/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDkBNjffdKJyx7VzlhAMcxxQuGnxA"
                    title="Video Music"
                    channel="Ukraïner"
                    views="1,361,684 Views"
                    timestamp="23 Aug 2019"
                    channelImage="https://yt3.ggpht.com/a/AATXAJyrFkFacLLVNmSwrx8WjmBAVJUeyCelJkqV65uF=s176-c-k-c0xffffffff-no-rj-mo"
                />

                <VideoCard
                    image="https://i.ytimg.com/vi/xvY52zjV4z8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAxPrBQftFknJO8XmnEls_nTq_q1Q"
                    title="Video Study"
                    channel="Ukraïner"
                    views="1,361,684 Views"
                    timestamp="23 Aug 2019"
                    channelImage="https://yt3.ggpht.com/a/AATXAJyrFkFacLLVNmSwrx8WjmBAVJUeyCelJkqV65uF=s176-c-k-c0xffffffff-no-rj-mo"
                />

                <VideoCard
                    image="https://i.ytimg.com/vi/Gb0TQ7VeApY/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBXONfPs1uSoXG4H5ijDxPmma3P-g"
                    title="Video Japan"
                    channel="Ukraïner"
                    views="1,361,684 Views"
                    timestamp="23 Aug 2019"
                    channelImage="https://yt3.ggpht.com/a/AATXAJyrFkFacLLVNmSwrx8WjmBAVJUeyCelJkqV65uF=s176-c-k-c0xffffffff-no-rj-mo"
                />
            </div>
        </div>
    );
};

export default RecommendedVideos;
