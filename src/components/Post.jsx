import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useState } from 'react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([
    'Post muito bacana, hein?!',
  ])
  const [newCommentText, setNewCommentText] = useState('')

  /*const formattedPublishedData = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit'
  }).format(publishedAt)*/
  const formattedPublishedData = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment(event) {
    event.preventDefault()
    setComments(state => [...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewComment(event) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentToDelete) {
    const commentWithoutDeletedOne = comments.filter(comment => {
      return commentToDelete !== comment
    })
    setComments(commentWithoutDeletedOne)
  }

  function handleNewCommentInvalid(event) {{
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }}

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={formattedPublishedData} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return (<p key={line.text}>{line.text}</p>)
          } else if (line.type === 'link') {
            return (<p key={line.text}><a href="#">{line.text}</a></p>)
          } else {
            return (
              <p key={line.text.toString()}>{line.text.map(link => {
                return (
                  <span key={link}> <a href="#">{link}</a> </span>
                )
              })}</p>
            )
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          name="comment"
          placeholder="Deixe seu comentário"
          onChange={handleNewComment}
          value={newCommentText}
          onInvalid={handleNewCommentInvalid}
          required
        >
        </textarea>

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment 
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment} 
            />
          )
        })}
      </div>
    </article>
  )
}