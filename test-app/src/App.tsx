import React from 'react';
import logo from './logo.svg';
import './App.css';

function ChangeText() {
  const [stringStatus, SetStringStatus] = React.useState(true);
  
  let string = stringStatus? "文字１": "文字２";
  let stringStyle = stringStatus? style.textRed: style.textBlue;
  
  // クリック発火メソッド
  const clicked = () => {
    console.log(stringStatus);
    if(stringStatus) {
      SetStringStatus(false);
    } else {
      SetStringStatus(true);
    }
  }
  return (
    <div>
      <h1 style={Object.assign({}, stringStyle)}>{string}</h1>
      <button onClick={() => clicked()}>文字を変更する</button>
      <br />
    </div>
  );
}

function App() {
  return (
    <div className="App">
        <header></header>
        <main>
          <section>
            <h2>1. ボタンを押したらテキストの色を変更/テキストを変更</h2>
            <ChangeText />
          </section>
        </main>
        <footer>
          <small>©2022 リアクトブートキャンプ課題</small>
        </footer>
    </div>
  );
}

const style = {
    textRed: {
      color: 'red',
    },
    textBlue: {
      color: 'blue',
    },
}

export default App;
