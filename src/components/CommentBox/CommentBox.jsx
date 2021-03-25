import { useState, useEffect } from 'react';
import { CommentList } from "../CommentList";
import './commentBox.scss';

export const CommentBox = () => {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [newComment])

  const addComment = () => {
    if (newComment !== '') {
      setComments([...comments, newComment.trim()]);
      setNewComment('');
    }

    setError(true)
  }

  const handleChange = (event) => {
    setNewComment(event.target.value)
  }

  return(
    <div className='character__comment-block'>
      <CommentList
        comments={comments}
      />
      <textarea
        onChange={handleChange}
        value={newComment}
        placeholder={error ? 'Comment cannot be empty' : undefined}/>
      <button onClick={addComment}>add comment</button>
    </div>
  )
}
