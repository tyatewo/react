import React from 'react';

class App extends React.Component {

　// stateの定義
  // constructorを貼り付けてください
  constructor(props) {
    super(props);
    // stateを定義してください
    this.state = {name: "にんじゃわんこ"};
  }
　// stateの定義


// handleClickメソッドを定義してください
  handleClick(name){
    this.setState({name:name});
  }
// handleClickメソッド



  //イベント
  render() {
    return (
    	<div>
            //stateの表示
    	   {/* 「こんにちは、にんじゃわんこさん！」の名前の部分をstateを使って置き換えてください */}
    	  <h1>こんにちは、{this.state.name}さん！</h1>
	　　//stateの表示

        <button onClick={() => {console.log('ひつじ仙人')}}>ひつじ仙人</button>
        <button onClick={() => {console.log('にんじゃわんこ')}}>にんじゃわんこ</button>

　　　　　　　↓

 　　 　　{/* onClickの処理に、stateを変更する処理を加えてください */}
        <button onClick={() => {this.setState({name:"ひつじ仙人"})}}>ひつじ仙人</button>

        {/* onClickの処理に、stateを変更する処理を加えてください */}
        <button onClick={() => {this.setState({name:"にんじゃわんこ"})}}>にんじゃわんこ</button>

　　　　　　　↓

 	      {/* onClickイベント内の処理を、handleClickメソッドを呼び出す処理に書き換えてください*/}
        <button onClick={() => {this.handleClick('ひつじ仙人')}}>ひつじ仙人</button>

    	  {/* onClickイベント内の処理を、handleClickメソッドを呼び出す処理に書き換えてください*/}
        <button onClick={() => {this.handleClick('にんじゃわんこ')}}>にんじゃわんこ</button>
      </div>
    );
  }
}
  //イベント

export default App;



// ・this.setStateは、コンピューターに新しい情報を伝えるための命令です。例えば、「名前を変えて！」という指示をします。
// ・this.stateは、コンピューターが持っている情報を取得するための変数です。例えば、コンピューターの「名前」を取り出して使う場合に使います。

// ・render()はこれから指示するねって意味で、
// ・returnはこれがページに表示する内容だよって意味
// ・this.handleClickはボタンクリックしたら何か特別なことをしてね（今回は名前を変えてね）って意味
// ・this.state.nameは「名前の箱」でその中ににんじゃわんこやひつじ仙人の名前が入ってる
// ・this.setState変更をお願いするもの（今回は名前を変えてねって意味）

