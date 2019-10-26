import React from "react";
import ReactDOM from "react-dom";

import CommentDetail from "./CommentDetail.js"

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" timeAgo="Today at 4:45PM" />
      <CommentDetail author="Alex" timeAgo="Today at 2:45PM" />
      <CommentDetail author="Jane" timeAgo="Yesterday at 5:45PM" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
