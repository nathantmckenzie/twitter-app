import React, { useState } from "react";
import TweetCard from "./TweetCard";

function CreateTweet() {
  const [tweet, setTweet] = useState("");
  const [tweets, setTweets] = useState({
    sentence1: "TEST",
    sentence2: "HEY",
    sentence3: "YUP",
    sentence4: "YEE",
    sentence5: "NOO",
  });

  return (
    <div>
      <form>
        <textarea value="a"></textarea>
        <button
          onClick={(e) => {
            setTweets((tweets) => {
              return {
                ...tweets,
                sentence2: e.target.value,
              };
            });
          }}
        >
          TWEET
        </button>
      </form>
      <TweetCard
        sentence1={tweets.sentence1}
        sentence2={tweets.sentence2}
        sentence3={tweets.sentence3}
        sentence4={tweets.sentence4}
        sentence5={tweets.sentence5}
      />
    </div>
  );
}

export default CreateTweet;
