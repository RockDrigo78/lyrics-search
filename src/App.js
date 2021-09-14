import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Formular from "./components/Formular";
import Song from "./components/Song";
import Info from "./components/Info";

function App() {
    const [search, addSearch] = useState({});
    const [lyrics, addLyrics] = useState("");
    const [info, addInfo] = useState({});

    const { artist, song } = search;

    useEffect(() => {
        if (Object.keys(search).length === 0) return;

        const apiCall = async () => {
            const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
            const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

            const [result, result2] = await Promise.all([
                axios(url),
                axios(url2),
            ]);

            addLyrics(result.data.lyrics);
            addInfo(result2.data.artists[0]);
        };
        apiCall();
    }, [search, artist, song]);

    return (
        <Fragment>
            <Formular addSearch={addSearch} />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <Info info={info} />
                    </div>
                    <div className="col-md-6">
                        <Song lyrics={lyrics} />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
