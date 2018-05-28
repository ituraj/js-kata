`use strict`;

// Get data

function getData() {

    fetch("http://kea-alt-del.dk/twitter/api/")
    .then(response=>response.json())
    .then(show);
}

getData();

// Get template elements content

function show(tweets){
    console.log(tweets);
    let tweetTemplate = document.querySelector('.tweet-template').content;

    tweets.statuses.forEach(tweet=>{
        console.log(tweet);

// Clone template

let clone = tweetTemplate.cloneNode(true);

clone.querySelector('.name').textContent=`Author: ${tweet.user.name}`;
clone.querySelector('.date').textContent=`Created at: ${tweet.created_at}`;
clone.querySelector('.text').textContent=`Text: ${tweet.text}`;
clone.querySelector('.hashtag').textContent=`Hashtag: ${tweet.metadata.result_type}`; // ??
clone.querySelector('.followers').textContent=`Number of followers: ${tweet.user.followers_count}`;
clone.querySelector('.friends').textContent=`Number of friends: ${tweet.user.friends_count}`;

// Show in HTML
document.querySelector("section").appendChild(clone);
});
}
