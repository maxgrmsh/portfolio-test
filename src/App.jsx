import heroImg from './assets/hero.jpg'
import arrow from './assets/arrow.svg'
import case1 from './assets/case-01.jpg'
import case2 from './assets/case-02.jpg'
import case3 from './assets/case-03.jpg'

const links = ['Кейси', 'Виступи', 'Про мене', 'Контакти']

const cases = [
  { n: '01', img: case1, title: 'Тренінг для редакцій', text: 'менше рутини для журналістів' },
  { n: '02', img: case2, title: 'Бренд у коді', text: 'тексти й візуали роблять агенти' },
  { n: '03', img: case3, title: 'Figma-плагін', text: 'українські тексти в один клік' },
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

        <main className="bento">
          <section className="b-head">
            <div className="label">
              <span className="num">01</span>
              <span className="label-text">AI для медіа й команд</span>
            </div>
            <h1>Прибираю рутину з вашої роботи за допомогою AI</h1>
            <p className="lead">Ви вирішуєте, що важливо, а агенти роблять решту.</p>
            <img className="arrow" src={arrow} alt="" />
            <span className="note">це головне!</span>
          </section>

          <figure className="b-photo">
            <img src={heroImg} alt="maxharmash" />
          </figure>

          <div className="b-cta">
            <a className="btn-primary" href="#">Розкажіть про задачу →</a>
            <a className="btn-secondary" href="#">Мої кейси</a>
          </div>

          <p className="b-cases-head">Кейси</p>

          {cases.map((c) => (
            <article className="b-case" key={c.n}>
              <img src={c.img} alt="" />
              <div className="caption">
                <span className="card-n">{c.n}</span>
                <span className="card-title">{c.title}</span>
              </div>
              <p>{c.text}</p>
            </article>
          ))}
        </main>
      </div>
    </div>
  )
}
