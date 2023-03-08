import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/thiagoallisson90.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Thiago Allisson</strong>
              <time
                title="07 de março às 08:00"
                dateTime="2023-03-07 09:00:10s"
              >
                Publicado há 1 dia
              </time>
            </div>

            <button title="">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom, Devon, parabéns!{' '}👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}