import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  // handleClickメソッドを定義してください
  handleClick(){
    this.setState({count: this.state.count + 1})
  }
  //this.setStateでこう変更しますという動き↑


  render() {
    //returnのなかはJSXで画面表示の領域javascriptは書けない。
    return (
      <div>
        <h1>
          {this.state.count}
        </h1>
        {/* <button>タグ内でonClickイベントを追加してください */}
        <button onClick={() => {this.handleClick()}}>+</button>
        {/* クリックしたら handleClick()が実行。handleClick()のメソッドに行く。{this.state.count}に+1する。*/}
      </div>
    );
  }
}

export default App;
