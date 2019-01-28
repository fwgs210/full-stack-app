export const loadMoreComments = number => {
    return {
        type: 'LOAD_MORE_COMMENTS',
        number
    }
}

export const loadComments = allComments => {
    return {
        type: 'LOAD_COMMENTS',
        allComments
    }
}