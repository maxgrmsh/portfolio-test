import heroImg from './assets/hero.jpg'
import arrow from './assets/arrow.svg'
import case1 from './assets/case-01.jpg'
import case2 from './assets/case-02.jpg'
import case3 from './assets/case-03.jpg'

const links = ['Кейси', 'Виступи', 'Про мене', 'Контакти']

const cases = [
  { n: '01', img: case1, title: 'Тренінг для редакцій ЦЕДЕМ', text: 'як прибрати рутину з роботи журналіста' },
  { n: '02', img: case2, title: 'Система бренду в коді', text: 'тексти й рендер роблять агенти' },
  { n: '03', img: case3, title: 'Figma-плагін', text: 'український плейсхолдер-контент за клік' },
]

export default function App() {
  return (
    <div className="page">
      <div className="grid" aria-hidden="true" />
      <div className="content">
        <nav className="nav">
          <a className="logo" href="/">
            <span>maxharmash</span>
            <i className="cursor" />
          </a>
          <div className="links">
            {links.map((l) => (
              <a key={l} href="#">{l}</a>
            ))}
            <a className="btn-write" href="#">Написати</a>
          </div>
        </nav>

        <main className="hero-and-cases">
          <section className="hero-row">
            <div className="hero">
              <div className="label">
                <span className="num">01</span>
                <span className="label-text">AI-автоматизація · медіа й команди</span>
              </div>
              <h1>Автоматизую рутинні процеси медіа й невеликих команд з AI та агентами</h1>
              <p className="lead">Щоб люди ставили задачі й ухвалювали рішення, а рутину робили агенти.</p>
              <div className="cta">
                <a className="btn-primary" href="#">Розказати про задачу →</a>
                <a className="btn-secondary" href="#">Дивитись кейси</a>
              </div>
            </div>
            <div className="hero-media">
              <div className="photo"><img src={heroImg} alt="maxharmash" /></div>
              <img className="arrow" src={arrow} alt="" />
              <span className="note">це головне!</span>
            </div>
          </section>

          <section className="cases">
            <p className="cases-label">Кейси</p>
            <div className="cards">
              {cases.map((c) => (
                <article className="card" key={c.n}>
                  <img src={c.img} alt="" />
                  <div className="caption">
                    <span className="card-n">{c.n}</span>
                    <span className="card-title">{c.title}</span>
                  </div>
                  <p>{c.text}</p>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
