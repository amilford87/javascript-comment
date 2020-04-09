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

document.getElementById("reply").addEventListener("click", replyClick);

// Function to show replies on click
repliesClick = () => {
    alert("This is where you would see the replies");
}

document.getElementById("replies").addEventListener("click", repliesClick);


// Functions to add or takeaway a new up or down vote
upVotesClick = () => {
        if (document.getElementById("up-votes").innerHTML === `<i class="fa fa-angle-up"></i> ${upVotes}`){
            document.getElementById("up-votes").innerHTML = `<i class="fa fa-angle-up"></i> ${upVotes + 1}`;
            if (document.getElementById("down-votes").innerHTML === `<i class="fa fa-angle-down"></i> ${downVotes + 1}`) {
                document.getElementById("down-votes").innerHTML = `<i class="fa fa-angle-down"></i> ${downVotes}`
            }
        } else {
            document.getElementById("up-votes").innerHTML = `<i class="fa fa-angle-up"></i> ${upVotes}`
        }
};

downVotesClick = () => {
    if (document.getElementById("down-votes").innerHTML === `<i class="fa fa-angle-down"></i> ${downVotes}`){
        document.getElementById("down-votes").innerHTML = `<i class="fa fa-angle-down"></i> ${downVotes + 1}`;
        if (document.getElementById("up-votes").innerHTML === `<i class="fa fa-angle-up"></i> ${upVotes + 1}`){
            document.getElementById("up-votes").innerHTML = `<i class="fa fa-angle-up"></i> ${upVotes}`
        }
    } else {
        document.getElementById("down-votes").innerHTML = `<i class="fa fa-angle-down"></i> ${downVotes}`
    }
};

// Running the up and down vote functions
document.getElementById("up-votes").addEventListener("click", upVotesClick);
document.getElementById("down-votes").addEventListener("click", downVotesClick);
 
// Filling out HTML information
document.getElementById('name').innerHTML = comment.name;
document.getElementById("author").innerHTML = author;
document.getElementById("posted").innerHTML = `<strong>&#183;</strong> ${comment.minutesAgo} MINUTES AGO`;
document.getElementById("message").innerHTML = `<p>${comment.message}</p>`;
document.getElementById("reply-num").innerHTML = comment.replies;
document.getElementById("up-votes").innerHTML = `<i class="fa fa-angle-up"></i> ${upVotes}`;
document.getElementById("down-votes").innerHTML = `<i class="fa fa-angle-down"></i> ${downVotes}`;