import React from "react";
import GitHubLogin from "react-github-login";

const onSuccess = (response) => console.log(response);
const onFailure = (response) => console.error(response);

function App() {
  return (
    <div className="App">
      {/* <GitHubLogin clientId="YOUR_CLIENT_ID"
        redirectUri="YOUR_REDIRECT_URI"
        onSuccess={onSuccess}
        onFailure={onFailure}/> */}
      <div>cd-collection</div>
    </div>
  );
}

export default App;
