import React from 'react';
import './comment.scss';

export const Comment = ({comment}) => {
  return (
    <p
      className='character__comment'
    >
      <strong>Comment:</strong> {comment}
    </p>
  )
}
