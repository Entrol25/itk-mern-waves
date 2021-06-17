import React from 'react';
//import cl from './ContentOne.module.css'
import { bloggersIds } from "./data";

// const ContentOne = () => 

class ContentOne extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bloggersIds: [],
      votes: {}
    };
    this.authFunc = this.authFunc.bind(this);
  }

  componentWillMount() {
    fetch(`/api/votes`)
      .then(res => res.json())
      .then(body => {
        const votes = body.reduce(function (acc, item) {
          if (acc[item.value]) {
            acc[item.value] += 1;
          } else {
            acc[item.value] = 1;
          }

          return acc;
        }, {});
        this.setState({ votes });
      });
  }

  authFunc() {
    const authData = { data: "IT Bloggers Contest" };
    if (window.WavesKeeper) {
      window.WavesKeeper.auth(authData)
        .then(auth => {
          console.log(auth);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      alert("Пожалуйста, установите WavesKeeper.");
    }
  }

  handleVote(bloggerId) {
    const txData = {
      type: 16,
      data: {
        fee: {
          tokens: "0.01",// 0.05 - 0.01 
          assetId: "WAVES"
        },
        dApp: "3N8zSfXh8RJTC5dUToydUBJ7HpK5qVzWeZf",
        call: {
          function: "vote",
          args: [
            {
              type: "string",
              value: bloggerId
            }
          ]
        },
        payment: []
      }
    };
    window.WavesKeeper.signAndPublishTransaction(txData)
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-4">
          <h1 className="display-4">Лучший АйТи блоггер!</h1>
          <p className="lead">
            Голосуй за лучшего айти блоггера! Победитель не получит ничего!
          </p>
          <hr className="my-4" />
          <p>
            QWERTY 5<br />
            Голосование открытое на блокчейн платформе Waves. Чтобы голосовать
            установи{" "}
            <a href="https://docs.wavesplatform.com/en/waves-keeper/about-waves-keeper.html">
              WaveKeeper
            </a>
            .
          </p>
          <p className="lead">
            <button
              className="btn btn-primary"
              type="button"
              onClick={this.authFunc}
            >
              Авторизовать WaveKeeper
            </button>
          </p>
        </div>

        <div className="media-body">
          <input
            className="btn btn-light"
            type="button"
            value={bloggersIds[0] + "Голосовать"}
            onClick={this.handleVote.bind(null, bloggersIds[0])}
          />
          {this.state.votes[bloggersIds[0]]}
        </div>
        <div className="media-body">
          <input
            className="btn btn-light"
            type="button"
            value={bloggersIds[1]}
            onClick={this.handleVote.bind(null, bloggersIds[1])}
          />
          {this.state.votes[bloggersIds[1]]}
        </div>
        <div className="media-body">
          <input
            className="btn btn-light"
            type="button"
            value={bloggersIds[2]}
            onClick={this.handleVote.bind(null, bloggersIds[2])}
          />
          {this.state.votes[bloggersIds[2]]}
        </div>
        <div className="media-body">
          <input
            className="btn btn-light"
            type="button"
            value={bloggersIds[3]}
            onClick={this.handleVote.bind(null, bloggersIds[3])}
          />
          {this.state.votes[bloggersIds[3]]}
        </div>
        <div className="media-body">
          <input
            className="btn btn-light"
            type="button"
            value={bloggersIds[4]}
            onClick={this.handleVote.bind(null, bloggersIds[4])}
          />
          {this.state.votes[bloggersIds[4]]}
        </div>
      </div>
    );
  }
}

export default ContentOne
/*
return (
        <div className={cl.content_one}>

      <h1>ContentOne</h1>
      {console.log("zxcvb")}
      {t.testFunc("qwerty")}

      <p>
            Голосование открытое на блокчейн платформе Waves.<br /> Чтобы голосовать
            установи{" "}
            <a href="https://docs.wavesplatform.com/en/waves-keeper/about-waves-keeper.html">
              WaveKeeper
            </a>
            .<br /><br />
        </p>
        <p className="lead">
            <button
              className="btn btn-primary"
              type="button"
              onClick={t.authFunc()}
            >
              Авторизовать WaveKeeper
            </button>
        </p>
        <br />
        <input
                  className="btn btn-light"
                  type="button"
                  value="Голосовать"
                  onClick={t.handleVote.bind(null, "blogger.id = qwerty")} //onClick={this.handleVote.bind(null, blogger.id)}
                />
        <br /><br />

        <div className="list">
          {
            <h1>- t.renderCars() -</h1>
            //t.renderCars()
          }
        </div>

    </div>
    )
*/

/*
<p>
            Голосование открытое на блокчейн платформе Waves.<br /> Чтобы голосовать
            установи{" "}
            <a href="https://docs.wavesplatform.com/en/waves-keeper/about-waves-keeper.html">
              WaveKeeper
            </a>
            .<br /><br />
        </p>
        <p className="lead">
            <button
              className="btn btn-primary"
              type="button"
              onClick={authFunc()}
            >
              Авторизовать WaveKeeper
            </button>
        </p>
        <br />
        <input
                  className="btn btn-light"
                  type="button"
                  value="Голосовать"
                  onClick={this.handleVote.bind(null, "blogger.id = qwerty")} //onClick={this.handleVote.bind(null, blogger.id)}
                />
        <br /><br />

        <div className="list">
          {this.renderCars()}
        </div>
        */