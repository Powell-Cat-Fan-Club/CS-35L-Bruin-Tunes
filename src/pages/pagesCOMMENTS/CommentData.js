let comments = [
    {
      comment: "Love this site!"
    },
    {
        comment: "Awesome songs"

    },
    {
        comment: "Any good recommendations?"

    },
]



export function addComment(comment) {
    var newComment = {
        setComment: comment,
    }
    userData.push(newComment);
}