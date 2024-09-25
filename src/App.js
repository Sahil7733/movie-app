
import './App.css';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';

function App() {

   
    const [video, setVideo] = useState("inception");
    const [videoURL, setVideoURL] =
        useState("https://www.youtube.com/watch?v=LPhqL4DqzBg");

 
    function handleSearch() {
        movieTrailer(video).then((res) => {
            setVideoURL(res);
        });
    }

    return (
        <div className="App">
            <div className="search-box">
                <label>
                    Search for any movies/shows:{" "}
                </label>
                <input type="text" onChange=
                    {(e) => { setVideo(e.target.value) }} />

                <button onClick={() => { handleSearch() }}>
                    Search
                </button>
            </div>

      // Using 'ReactPlayer' component to
            // display the video
            <ReactPlayer url={videoURL} controls={true} />
        </div>
    );
}

export default App;
