export const addComment = newComment => ({
    type: 'ADD_COMMENT',
    newComment
})

export const loadComments = allComments => {
    console.log('haha',allComments)
    return {
    type: 'LOAD_COMMENT',
    allComments: allComments
    }
}

export const finishLoading = () => ({
    type: 'SET_LOADED_TRUE'
})

export const startLoading = () => ({
    type: 'SET_LOADED_FALSE'
})