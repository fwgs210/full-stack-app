export const editingComment = (id, description) => ({
    type: 'EDITING_COMMENT',
    id,
    description
})

export const updateComment = () => ({
    type: 'UPDATE_COMMENT'
    
})

export const deleteComment = id => ({
    type: 'DELETE_COMMENT',
    id
})

export const typeComment = editingComment => ({
    type: 'INPUT_EDITING_COMMENT',
    editingComment: editingComment.target.value
})