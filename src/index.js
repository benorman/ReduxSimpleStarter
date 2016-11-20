import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';


const API_KEY = 'AIzaSyDufkk4gr0ILNoK8zCLZ3KqDSW53_p-IfA';

// create a new component, this component should produce some html

class App extends Component {

    constructor(props){
        super(props);

        this.state={
            videos : [ ],
            selectedVideo : null
        };

        this.videoSearch('pink fong');


    }

    videoSearch(term)
    {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            // ES6 Magic: the following line is the same as : this.setState({videos: videos});
            this.setState({

                videos: videos,
                selectedVideo: videos[0]

            });
        });
    };

    render() {

        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div>
                <SearchBar onSearchTermChange ={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                    videos={this.state.videos}/>
            </div>
        );
    }

}




// insert this component's generated HTML and put it on the page (into the dom)

ReactDOM.render(<App />, document.querySelector('.thestuff'));