import "./App.css";
import React from "react";

class App extends React.Component {
  state = {
    media: [],
  };

  componentDidMount = async () => {
    const apiUrl = process.env.REACT_APP_URL;
    const resp = await fetch(`${apiUrl}/media`);
    const jsonMedia = await resp.json();
    this.setState({ media: jsonMedia });
  };

  render() {
    return (
      <div className="App">
        <div>
          {this.state.media.map((media) => (
            <div key={media.id}>
              <div>{media.Title}</div>
              <img className="poster-img" alt="poster-img" src={media.Poster} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
