import React, { Component } from 'react';

class Rotate extends Component {
  componentDidMount() {
    var imgs = [
      "http://s3.mogucdn.com/mlcdn/c45406/171019_0glaeg9dhhlgal83e3abec9hhl27c_302x604.jpg_300x9999.v1c7E.70.webp",
      'http://s3.mogucdn.com/mlcdn/c45406/171019_1h8efhh343f7d746g6f89ige0hf0a_302x604.jpg_300x9999.v1c7E.70.webp'
    ];
    var links = [
      'http://www.baidu.com',
      'http://www.uc123.com'
    ];
    var tab = 0;
    this.btn.addEventListener('click', () => {
        tab += 1;
        tab == 2 ? (tab = 0) : '';
        this.link.href = links[tab];
        setTimeout(() => {
          this.img.src = imgs[tab];
        }, 250);
        var rotate = tab == 0 ? '0' : '-180deg';
        this.link.style.transform = `rotateY(${rotate})`;
    });
  }
  render() {
    return <div className="rotate-box">
      <a href="http://www.baidu.com" className="rotate-link" ref={(node) => {this.link = node}}>
        <img
          src="http://s3.mogucdn.com/mlcdn/c45406/171019_0glaeg9dhhlgal83e3abec9hhl27c_302x604.jpg_300x9999.v1c7E.70.webp"
          ref={(node) => {this.img = node}}
        />
      </a>
      <button id="rotate" ref={(node) => {this.btn = node}}>现在就翻她牌子</button>
    </div>
  }
}

export { Rotate };