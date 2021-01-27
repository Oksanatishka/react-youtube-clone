import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

const SearchPage = () => {
    return (
        <div className="searchPage">
            {/* <h2>Search</h2> */}
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow
                image="https://yt3.ggpht.com/a/AATXAJyrFkFacLLVNmSwrx8WjmBAVJUeyCelJkqV65uF=s176-c-k-c0x00ffffff-no-rj"
                channel="Ukraїner"
                verified
                subs="136K"
                noOfVideos={386}
                description="Ukraїner tells amazing stories about places, people, art, and business in Ukraine. Over 200 volunteers create for you these stories that show a different Ukraine."
            />
            <hr />
            <VideoRow 
            image="https://i.ytimg.com/vi/QVM1y0OAzEA/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA6kCpviRo4_ZWZW95114PgcAL_sA"
            title="Germans of Ukraine. Who are they?  · Ukraїner"
            channel="Ukraїner"
            timestamp='5 months ago'
            description="Ukraїner tells amazing stories ."
            subs="136K"
            views='70K'
            
            />

            <VideoRow 
            image="https://i.ytimg.com/vi/YlA4PjmEZ_w/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBQVtR91kEvKYa1zlSCtkmtPjaa0A"
            title="Video 2"
            channel="Ukraїner"
            timestamp='5 months ago'
            description="Ukraїner tells amazing stories ."
            subs="136K"
            views='70K'
            
            />

            <VideoRow 
            image="https://i.ytimg.com/vi/PtN5WkFuSFM/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA8IFGW9iq9l-FqwDoSYRe2PeSzNw"
            title="Video 3"
            channel="Ukraїner"
            timestamp='5 months ago'
            description="Ukraїner tells amazing stories ."
            subs="136K"
            views='70K'
            
            />

            <VideoRow 
            image="https://i.ytimg.com/vi/6utSrrwJZLM/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDbwCMgRdFrrt9b2KV13nRtsY_3Lg"
            title="Video 4"
            channel="Ukraїner"
            timestamp='5 months ago'
            description="Ukraїner tells amazing stories ."
            subs="136K"
            views='70K'
            
            />

            <VideoRow 
            image="https://i.ytimg.com/vi/CrWRoZyGTWw/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAw6BKLtzUp3825Nd0YniclHWJj1Q"
            title="Video 5"
            channel="Ukraїner"
            timestamp='5 months ago'
            description="Ukraїner tells amazing stories ."
            subs="136K"
            views='70K'
            
            />
        </div>
    );
};

export default SearchPage;
