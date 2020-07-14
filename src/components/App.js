import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos?query=myterm", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID PXeMl76xxVl5z3fyfCtON6sZKuQS2-T15gRyDG_mZB0",
      },
    });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "5rem" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
