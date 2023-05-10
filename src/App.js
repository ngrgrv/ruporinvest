import logo from './logo.svg';
import screen from './screen.jpg';
import './style.css';
import React, { useState, useEffect } from 'react';


const link = "https://t.me/RuporInvest_bot";




function MyButton() {
  return (
      <a href={link} target="_blank"><button type="button" className="btn-nav">
          <span>Попробовать</span>
      </button></a>
  );
}


const intro = {head: 'Получай новости для сделок первым', subhead: 'Мгновенная доставка новостей по нужным компаниям', info: 'Избавься от необходимости мониторить сотни каналов и новостных сайтов, активируй Telegram-бота «Рупор Инвест»'};

function Intro1(text) {
    return (
        <div>
            <h2>{text.head}</h2>
            <br />
            <p><b>{text.subhead}</b><br />
                {text.info}</p>
            <MyButton />
        </div>
    )
}
function Intro2() {
  return (
      <div className="intro-image">
          <div className="phone">
              <img src={screen} className="phone-screen" />
          </div>
      </div>
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
                {/*<img src={idea} />*/}
            </div>
        )
    }
    return content;
}


function Trial1(text) {
    return (
        <div>
            <h2>{text.head}</h2>
            <br />
            <p>{text.info}</p></div>
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
        <div className="helf">{helf}
        </div><div className="helf">{helf2()}</div>
      </div>
  );
}

let lastScroll = 0;
class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: true
        }
    }


    componentDidMount() {    window.addEventListener('scroll', this.handleScroll.bind(this));  }  componentDidUpdate() {    window.removeEventListener('scroll', this.handleScroll.bind(this));  }


    handleScroll(event) {


        if (window.scrollY < lastScroll) {
            this.setState({header: true});
        }
        else if (window.scrollY > lastScroll) {
            this.setState({header: false});
        }

        lastScroll = window.scrollY;
    }
    render() {
        return (
            <header className={this.state.header ? "shownav" : "hide"} >
                <div>
                    <img src={logo} className="App-logo" alt="logo" />
                    <MyButton />
                </div>
            </header>
        );
    }
}



function App() {
  return (
    <div className="App">

        <Example />
      <main>

          {SplitInHalf(Intro1(intro), Intro2)}

          {Full(Kill())}

      </main>
    </div>
  );
}

export default App;
