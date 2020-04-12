const comment = {
    name: "Brad",
    author: true,
    message: "So what the German automaker is likely to focus on today is the bigger picture. This will be the first time we see the Taycan free from any prototype bodywork.",
    minutesAgo: 2,
    replies: 21,
    upVotes: 123
};

let author = comment.author === true ? `<span class="badge badge-pill badge-dark" style="font-weight:500; font-size:10px; margin-left:2px;">AUTHOR</span>` : "";

let upVotes = comment.upVotes? comment.upVotes : "";

let downVotes = comment.downVotes? comment.downVotes : "";

// Function to show replies on click
replyClick = () => {
    alert("This is where you would reply");
}

document.addEventListener('DOMContentLoaded', function () {
document.getElementById("reply").addEventListener("click", replyClick);
});

// Function to show replies on click
repliesClick = () => {
    alert("This is where you would see the replies");
}

document.addEventListener('DOMContentLoaded', function () {
document.getElementById("replies").addEventListener("click", repliesClick);
});


// Functions to add or takeaway a new up or down vote
upVotesClick = () => {
        if (document.getElementById("upvote-num").innerHTML === upVotes.toString()){
            document.getElementById("upvote-num").innerHTML = upVotes + 1;
            if (document.getElementById("downvote-num").innerHTML === (downVotes + 1).toString()) {
                document.getElementById("downvote-num").innerHTML = downVotes;
            }
        } else {
            document.getElementById("upvote-num").innerHTML = upVotes;
        }
};

downVotesClick = () => {
    if (document.getElementById("downvote-num").innerHTML === downVotes.toString()){
        document.getElementById("downvote-num").innerHTML = downVotes + 1;
        if (document.getElementById("upvote-num").innerHTML === (upVotes + 1).toString()){
            document.getElementById("upvote-num").innerHTML = upVotes;
        }
    } else {
        document.getElementById("downvote-num").innerHTML = downVotes;
    }
};

// Running the up and down vote functions

document.addEventListener('DOMContentLoaded', function () {
document.getElementById("up-votes").addEventListener("click", upVotesClick);
document.getElementById("down-votes").addEventListener("click", downVotesClick);
});
 
// Filling out HTML information
document.getElementById('name').innerHTML = comment.name;
document.getElementById("author").innerHTML = author;
document.getElementById("posted").innerHTML = `<strong>&#183;</strong> ${comment.minutesAgo} MINUTES AGO`;
document.getElementById("message").innerHTML = `<p>${comment.message}</p>`;
document.getElementById("reply-num").innerHTML = comment.replies;
document.getElementById("upvote-num").innerHTML = upVotes;
document.getElementById("downvote-num").innerHTML = downVotes;

if (typeof exports !== 'undefined') {
    module.exports = {replyClick, repliesClick, upVotesClick, downVotesClick}
};
