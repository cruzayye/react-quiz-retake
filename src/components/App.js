import React, { PureComponent } from 'react';
import Controls from './Controls.js';
import Display from './Display';



export default class App extends PureComponent {
  state = {
    title: '',
    subtitle: ''

  };

  textChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  // click() {
  //   console.log('click');
  // }

  render() {
    const { title, subtitle } = this.state;
    return (
      <>
      <Controls type='text' name='title' value={title} onChange={this.textChange}
      />
      <Controls type='text'  name='subtitle' value={subtitle} onChange={this.textChange}
      />
      <Display
        first={title}
        second={subtitle}
      />
      </>
    );
  }
}


