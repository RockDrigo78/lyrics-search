import React, { useState } from "react";

const Formular = ({ addSearch }) => {
    const [inputText, addInputText] = useState({
        artist: "",
        song: "",
    });
    const [error, addError] = useState(false);
    const { artist, song } = inputText;

    const handleChange = (evt) => {
        addInputText({
            ...inputText,
            [evt.target.name]: evt.target.value,
        });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (artist.trim() === "" || song.trim() === "") {
            addError(true);
            return;
        }
        addError(false);
        addSearch(inputText);
    };

    return (
        <div className="bg-info">
            {error && (
                <p className="alert alert-danger text-center p-2">
                    Both fields are necessary
                </p>
            )}
            <div className="container">
                <div className="row">
                    <form
                        onSubmit={(e) => handleSubmit(e)}
                        className="col card text-white bg-transparent mb-5 pt5 pb-2"
                    >
                        <fieldset>
                            <legend className="h1 text-center mb-5">
                                Lyrics Search
                            </legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artist</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artist"
                                            value={artist}
                                            placeholder="Artist name"
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Song</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="song"
                                            value={song}
                                            placeholder="Song name"
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary float-right"
                            >
                                Search
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Formular;
