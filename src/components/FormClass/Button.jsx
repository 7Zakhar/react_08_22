import { Component } from 'react';

export class Button extends Component {
  constructor(props) {
    super(props);
    this.interval = null;
    this.state = { count: 1 };
  }

  componentDidMount() {
    console.log('button did mount');
    // this.interval = setInterval(() => console.log(1),1000)
  }
  componentDidUpdate() {
    console.log('button did update');
  }
  componentWillUnmount() {
    console.log('button Will unmount');
    clearInterval(this.interval);
  }
  shouldComponentUpdate(nextProps) {
    if (nextProps.count !== this.props.count) {
      return true;
    }
    return false;
  }
  render() {
    return (
      <>
        <p>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          click my
        </button>
      </>
    );
  }
}
