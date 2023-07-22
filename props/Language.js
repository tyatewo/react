import React from 'react';

class Language extends React.Component {
  render() {
    return (
      <div className='language-item'>
        <div className='language-name'>{this.props.name}</div>
        <img
          className='language-image'
          src={this.props.image}
        />
      </div>
    );
  }
}

export default Language;

// class Language extends React.Component
// React.Componentはリアクトの素材集がいっぱいはいいテルreact.jsに入ってるもの
// extendsは借りるっていう意味
// LanguageクラスはReact.Componentを借りるよっていう意味


// export default Language;でどこでも使えるようにして
// 使いたい先のファイルにimport Language from './Language';でインポートして
// 使いたい先のファイルのJSX内で<Language />って入れてあげる

// コンポーネント（Language.js）はパーツの枠組みを作る。
// データを入れれるように{this.props.image}みたいに書いておく
