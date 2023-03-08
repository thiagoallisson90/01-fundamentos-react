import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/thiagoallisson90.png" className={styles.avatar} />
          <div className={styles.authorInfo}>
            <strong>Thiago Allisson</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time 
          title="07 de fev às 08:00h"
          dateTime="2023-03-07 08:00:00">
          Publicado há 1 dia
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href="#">👉{' '}jane.design/doctorcare</a></p>
        <p>
          <a href="#">#novoprojeto</a>{' '} 
          <a>#nlw</a>{' '} 
          <a>#rocketseat</a>
        </p>
      </div>

      <form class={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder="Deixe seu comentário"
        >
        </textarea>

        <footer>
          <button type="submit">
            Publicar
          </button>
        </footer>
      </form>
    </article>
  )
}