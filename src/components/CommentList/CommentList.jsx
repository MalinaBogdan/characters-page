import React from 'react';
import shortid from 'shortid';
import { Comment } from "../Comment";

export const CommentList = ({comments}) => {
  return (
    comments.map(comment => (
      <Comment
        key={shortid.generate()}
        comment={comment}
      />
    ))
  )
}
