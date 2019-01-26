export const typeComment = comment => ({
    type: 'INPUT_COMMENT',
    comment: comment.target.value
})

export const clearComment = () => ({
    type: 'CLEAR_COMMENT'
})

export const addComment = newComment => ({
    type: 'ADD_COMMENT',
    newComment: newComment
})