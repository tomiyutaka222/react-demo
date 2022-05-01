import React from 'react';
import axios from 'axios';
import './App.css';
// ハローリアクトコンポーネントの呼び出し
import {HelloReact} from './Components/HelloReact';
import {HelloAAAAAA} from './Components/HelloReact';

/**
 * React.jsは関数単位でコンポーネントを定義します
 * 
 * @returns Component 
 */
function HelloWorld() {
    return (
      <div>
        <h1>HelloWorld</h1>
        <p>ハローワールドコンポーネントです。</p>
      </div>
    );
}

/**
 * Styleの指定を行います
 * 
 * @returns Component 
 */
function TextStyle() {
    return (
      <div>
        <p>スタイルの指定</p>
        {/* App.cssで指定する時は基本的に共通設定に使う */}
        <h1 className='select-class'>クラス指定</h1>
        <h1 style={{color: "orange"}}>直接指定</h1>
        <h1 style={textGreen}>変数指定</h1>
        {/* 最も使うパターン */}
        <h1 style={Object.assign({}, style.textRed)}>インラインスタイル</h1>
      </div>
    );
}

/**
 * Hookについての実装をします
 * 
 * @returns Component 
 */
function ChangeText() {
  // 実体変数 changedTextに対して、SetChangeTextメソッドを使って値をセットする
  // useStateを使って変数changedTextに初期値を設定します
  const [changedText, SetChangeText] = React.useState('初期値');

  // クリックイベントを定義します
  const clicked = () => {
    // Stateを定義した変数に対して、セッターメソッドSetChangeTextを呼び出す
    SetChangeText('テキストが変更されました。');
  }
    return (
      <div>
        {/* 変数の呼び出し */}
        <h1>{changedText}</h1>
        {/* 変更ボタンにクリックイベントを定義 */}
        <button onClick={() => clicked()}>変更</button>
        <br />
      </div>
    );
}


/**
 * LIKEボタンを実装します
 * ・三項演算子を使った実装
 * 
 * @returns Component 
 */
function LikeButton() {
  // 実体変数 likedに対して、SetLikeメソッドを使って値をセットする
  // useStateを使って変数likedに初期値を設定します
  const [liked, SetLike] = React.useState(false);

  // クリックイベントを定義します
  const clicked = () => {
    const change = !liked;
    // Stateを定義した変数に対して、セッターメソッドSetLikeを呼び出す    
    SetLike(change);
  }

  const buttonStyle = liked? style.liked: style.like;

    return (
      <div>
        {/* 変更ボタンにクリックイベントを定義 */}
        {/* Style用のCSS変数を読み込みます */}
        <button onClick={() => clicked()} style={Object.assign({}, buttonStyle)}>お気に入り</button>
        <br />
      </div>
    );
  }

  /**
   * propsの呼び出し
   * ・親コンポーネントを定義します
   * ・コンポーネントに値を受け渡します
   * 
   * @returns Component 
   */
  function CountButton() {
    // 実体変数 textCountに対して、SetTextCountメソッドを使って値をセットする
    // useStateを使って変数textCountに初期値を設定します
    const [textCount, SetTextCount] = React.useState(100);

    // クリックイベントを定義します
    const clicked = () => {
      // Stateを定義した変数に対して、セッターメソッドSetTextCountを呼び出す
      SetTextCount(textCount + 1);
    }
    return (
      <div>
        {/* 変数の呼び出し */}
        <CountText textCount={textCount} />
        <h1>{textCount}</h1>
        {/* 変更ボタンにクリックイベントを定義 */}
        <button onClick={() => clicked()}>足すよ！</button>
        <br />
      </div>
    );
  }

  /**
   * propsの呼び出し
   * ・子コンポーネントを定義します
   * ・propsでデータを受け取り、そのpropsにアクセスして変数を読み込みます
   * 
   * @param props 
   * @returns Component
   */
  function CountText(props: any) {
    return (
      // propsで受け取った変数にアクセスする
      <p>子要素 {props.textCount}</p>
    )
  }

  // クラスコンポーネントと関数コンポーネント
  // constructor：this.state にオブジェクトを代入して ローカル state を初期化
  // state の初期化もメソッドのバインドもしないのであれば、React コンポーネントのコンストラクタを実装する必要はありません。
  // superは親クラス（この場合はReact.Component）の関数呼び出しのキーワードで特にコンストラクタで
  // 親クラスのコンストラクタがちゃんと呼ばれないと、親クラスのコンストラクタ内での処理がなされないので、親クラスの機能が使えなくなります。
  // super(props)を定義してからでないとthis.state等でprops内の値を新規追加出来ない。
  // コンストラクタ：オブジェクト指向のプログラミング言語で新たなオブジェクトを生成する際に呼び出されて内容の初期化などを行なう関数あるいはメソッドのこと
  type State = {
    count: any;
  }
  class ClassComponent extends React.Component<{}, State> {
    constructor(props:any) {
      super(props);
      this.state = {
        count: 0
      };
    }
    render() {
      return (
        <div>
          <p>count: {this.state.count}</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Click
          </button>
        </div>
      );
    }
  }

  /**
   * useEffectを使用した関数
   * 
   */
  function Timer(){
    const [countText, setCount] = React.useState(0);
    
    // レンダリングと関係ない処理はuseEffect内に記入。
    // ここでは1秒ずつ+1していく処理はレンダリングと関係ない。
    React.useEffect(() => {
      // setIntervalで1000msごとにcountTextに+1
      const timer = setInterval(()=>{
        setCount(countText + 1)
      },1000);
      
      // 新しいtimerが発行されるため、古いtimerはclearIntervalで破棄していく
      // 破棄しないとtimerが溜まっていくため処理が重くなっていく
      return () => {
        clearInterval(timer)
      }
    // 第二引数の変数に変更があった場合のみ指定された処理が実行される。
    // 第二引数は省略可能
    }, [countText]);
    
    return (
      <div>
       <h1>カウント：{countText}s</h1>
      </div>
    )
  }

    // Reduxを使わずに親子コンポーネント間以外の値のやり取りをしやすくする
    // Contextとは？：同じコード記述やプログラム上の要素が、その置かれているプログラム内での位置や、実行される際の内部状態などによって異なる振る舞いをしたり、異なる制約を受けたりすることを指してコンテキストということがある。


    // 1.まずはここでコンテキストを作成。
    const TextContext = React.createContext("");

    // 親要素
    function Parrents() {
      const [changeText, setText] = React.useState('');

      const inputText = (event: any) => {
        console.log(event.target.value);
        setText(event.target.value);
      }

      return (
      // 2. 1 で生成した `Context` オブジェクトの `Provider` をコンポーネントツリーの上方に差し込む
      // 3.valueで値を渡す
        <TextContext.Provider value={changeText}>
          <p>useContextを使って子要素を通さずにデータを共有する</p>
          <div className="parent-wrap">
            <p>親要素 : 
              <input type="text" value={changeText} onChange={inputText}>
              </input>
            </p>
            <Child/>
          </div>
        </TextContext.Provider>
      );
    }

    // 子要素
    function Child(){
    return(
      <div className="child-wrap">
        <p>子要素</p>
        <Grandchild/>
      </div>
    );
    }

    // 孫要素
    function Grandchild(){
    // 4.差し込んだ `Provider` の子孫にあたるコンポーネントで `useContext()` を使って値を取得する
    const text = React.useContext(TextContext);

    // 5.出力
    return(
      <div className="grand-child-wrap">
        <p>孫要素：{text}</p>
      </div>
    );
    }

  //ES6 const, let
  //ES6 Destructuring 
  const { Component } = React;

  function NameForm(){
    // inputに入力されたテキストのstate
    const [inputText, setText] = React.useState("");
    
    const changeText = (e: any) => {
      setText(e.target.value);
    }
    
    return (
      <form>
        <input type="text" value={inputText} onChange={changeText} />
        <h1>入力された値：{inputText}</h1>
      </form>
    );
  }

  function FetchFruits() {
  
    const fruits = ["りんご", "ばなな", "みかん", "ぱんだ", "もも", "ぶどう"];
    // forEachで改行
                                
    return (
      <div>
        <p>配列をそのまま表示</p>
        <h2>{fruits}</h2>
        <br></br>
        <p>mapで新しい要素を作成</p>
        {
          fruits.map((list, index) => (
              <h1>{index}：{list}</h1>
            )
          )
      
        }
      
      </div>
    );
  }

  const ChildComponent = () => (
    <div>deliverr</div>
  );
  
  function FetchAllJson(){
    // apiの情報をstate管理
    const [statusTxt, setStatus] = React.useState('loading');
    const [statusBody, setBody] = React.useState('loading');
    const [statusAnswer, setAnswer] = React.useState('loading');
    
    const clicked = () =>{
  
      // axios.get(URL)でapiからgetしてjsonを取得
      axios.get('https://yesno.wtf/api')
      // thenで成功した場合の処理をかける
      .then(response => {
        console.log('status:', response.status); // 200
        console.log('body:', response.data);     // response body. 
        console.log('image:', response.data.image);     // response body. 
        setStatus(response.status.toString());
        setBody(response.data.image);
        setAnswer(response.data.answer);
  
        // catchでエラー時の挙動を定義する
      }).catch(err => {
        console.log('err:', err);
      });
      
  
      }
      return (
        <div>
          <p>下のボタンをクリックしてください。</p>
              <button onClick={()=>clicked()}>Click</button>
          <h1>answer:{statusAnswer}</h1>
          <img src={statusBody}></img>
          <h1>status:{statusTxt}</h1>
          <h1>body:{statusBody}</h1>
        </div>
      );
    }

    







  /**
   * 
   * @returns 
   */
  function App() {
    return (
      <div className="App">
        <p>1. コンポーネントを作ってみよう</p>
        {/* コンポーネントの呼び出し */}
        <HelloWorld />
        <HelloReact />
        <HelloAAAAAA />
        <TextStyle />
        <ChangeText />  
        <LikeButton />
        <CountButton />
        <ClassComponent />
        <Timer />
        <Parrents />
        <NameForm/>
        <FetchFruits />
        <FetchAllJson />
      </div>
    );
  }



/**
 * TSX JSX でCSSを書く場合は、プロパティはキャメルケースで指定する
 * 基本は変数styleに次々にCSSの記述を行っていく
 * また、基本は変数styleを
 */
const textGreen = {
  color: 'green'
};

const style = {
  textRed: {
    color: 'red',
    marginTop: 1000
  },
  liked: {
    backgroundColor: 'red'
  },
  like: {
    backgroundColor: 'blue'
  }
};

export default App;
