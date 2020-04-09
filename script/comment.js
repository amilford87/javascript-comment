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
console.log(upVotes);

let downVotes = comment.downVotes? comment.downVotes : "";

document.getElementById('name').innerHTML = comment.name;
document.getElementById("author").innerHTML = author;
document.getElementById("posted").innerHTML = `<strong>&#183;</strong> ${comment.minutesAgo} MINUTES AGO`;
document.getElementById("message").innerHTML = `<p>${comment.message}</p>`;
document.getElementById("reply-num").innerHTML = comment.replies;
document.getElementById("up-votes").innerHTML = `<i class="fa fa-angle-up"></i> ${upVotes}`;
document.getElementById("down-votes").innerHTML = `<i class="fa fa-angle-down"></i> ${downVotes}`;


console.log("I'm here")