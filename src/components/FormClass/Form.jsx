import { Component } from 'react';
import { Button } from './Button';
import { Input } from './Input';

export class Form extends Component {
  state = {
    visible: true,
    count: 0,
    name: 'click',
  };

  componentDidMount() {
    console.log('did mount form');
  }

  handleVisible = () => {
    this.setState({ visible: !this.state.visible });
  };
  handleChangeName = (ev) => {
    this.setState({ name: ev.target.value });
  };

  render() {
    return (
      <>
        <h2>Class Component</h2>
        <button onClick={this.handleVisible}>
          {this.state.visible ? 'hide' : 'visible'}
        </button>
        {this.state.visible && <Button count={0} />}
        <br />
        <p>Name: {this.state.name}</p>
        <Input value={this.state.name} change={this.handleChangeName} />
      </>
    );
  }
}
