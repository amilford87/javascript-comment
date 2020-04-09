const comment = {
    name: "Brad",
    author: true,
    message: "So what the German automaker is likely to focus on today is the bigger picture. This will be the first time we see the Taycan free from any prototype bodywork.",
    minutesAgo: 2
};

let name = comment.name;

let author = false;

if (comment.author === true) {
    author = true;
};

let message = comment.message;

let posted = `${comment.message} MINUTES AGO.`;


