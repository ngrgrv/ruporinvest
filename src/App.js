import logo from './logo.svg';
import screen from './screen.jpg';
import user from './user.jpg';
import './style.css';


function MyButton() {
  return (
      <button type="button" className="btn-nav">
          <span>Получать уведомления</span>
      </button>
  );
}

function MyInput() {
    return (
        <input aria-invalid="false" aria-required="true"
               className="formfield" id="input_1"
               maxLength="524288" name="input_1" placeholder="Введи название компании или тикер" type="email" value=""></input>
    );
}

function MySubmit() {
    return (
        <button className="formsubmit"
                id="submit_button" type="submit">Submit</button>
    )
}

const myText = "i text";
const introImage = "intro-image";

const intro = {head: 'Получай новости для сделок первым', info: '<b>Мгновенная доставка новостей по нужным компаниям</b><br />Избавься от необходимости мониторить сотни каналов и новостных сайтов, активируй Telegram-бота «Рупор Инвест»'};
function Intro2() {
  return (
      <img src={screen} className={introImage} />
  )
}

const killings = [{head: 'Оперативные оповещения', info: 'Бот отслеживает новости из более чем 40 каналов и отправляет только нужные тебе'},
  {head: 'Идеи от аналитиков', info: 'Получай свежие идеи на покупку или продажу от аналитиков'},
  {head: 'Сделки инсайдеров', info: 'Следи за сделками инсайдеров, а также отслеживай уровни поддержки и сопротивления в любых акциях'}
]

function Kill() {
    let content = [];
    for (let item of killings) {
        content.push(
            <div className="kill">
                <h3>
                    {item.head}
                </h3>
                <p>
                    {item.info}
                </p>
            </div>
        )
    }
    return content;
}

const trial = {head: 'Попробуй настроить бота в один шаг', info: 'Получи больше возможностей для успешных сделок!'};

function Trial2() {
  return (
      <div>
          <div className="form">
              <MyInput />
              <MySubmit />
          </div>
        <div className="hints">
          <ul>
            <li>
              Газпром
            </li>
            <li>
              POLY
            </li>
            <li>
              AAPL
            </li>
          </ul>
        </div>
          <MyButton />
      </div>
  )
}

function Feedback() {
    return (
        <div className="feedback">
            <p>
                «Я пользуюсь ботом около 2-ух лет, за это время я успел вовремя зайти в сделку около 50 раз, только благодаря оперативным оповещениям»
            </p><br />
            <img src={user} /><br />
            <span>Роман Барсуков, пользователь</span>
        </div>
    )
}



const Full = full => {
    return (
        <div className="full">{full}</div>
    )
}

function SplitInHalf (helf, helf2) {
  return (
      <div>
        <div className="helf">
          <h2>{helf.head}</h2>
          <br />
          <p>{helf.info}</p>
        </div><div className="helf">{helf2()}</div>
      </div>
  );
}



function App() {
  return (
    <div className="App">
      <header className="App-header shownav">
          <img src={logo} className="App-logo" alt="logo" />
          <MyButton />

      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*    <MyButton />*/}
      {/*  </a>*/}
      {/*  <h2>*/}
      {/*    Попробуй настроить бота в один шаг*/}
      {/*  </h2>*/}
      {/*  <MyInput />*/}
      {/*  {myText}*/}
      </header>
      <main>

          {SplitInHalf(intro, Intro2)}

          {Full(Kill())}

          {SplitInHalf(trial, Trial2)}

          {Full(<Feedback />)}
      </main>
    </div>
  );
}

export default App;
