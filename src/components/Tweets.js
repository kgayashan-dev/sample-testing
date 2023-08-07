import react from "react";
import Tweet from "./Tweet";

const Tweets = (props) => {

    const tweets = [
        { name: "deveme", tweet: "react application" },
        { name: "John", tweet: "Heare we aare " },
        { name: "Camel", tweet: "Bro bror broro" },
        { name: "Misra", tweet: "asdnkfdaf kasmnf " }

    ];

    return (

        <section className = "b" > {
            tweets.map((tweet) => (
                   <Tweet name={tweet.name} tweet = {tweet.tweet}/>
        
            ))} </section>


    );
};

export default Tweets;