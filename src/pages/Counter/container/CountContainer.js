import { Component } from "react";

import CounterView from "../components/CounterView";

class CounterContainder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countValue: 0,
      isEven: true,
    };
  }
  componentDidUpdate(_, prevState) {
    const countValue = this.state.countValue;
    if (prevState.countValue !== countValue) {
      this.setState({ isEven: countValue % 2 === 0 ? true : false });
    }
  }
  handleDecrement = () => {
    if (this.state.countValue > 0) {
      this.setState({ countValue: this.state.countValue - 1 });
    }
  };
  handleIncrement = () => {
    this.setState({ countValue: this.state.countValue + 1 });
  };
  handleReset = () => {
    if (this.state.countValue !== 0) {
      this.setState((state) => ({
        isEven: true,
        countValue: 0,
      }));
    }
  };

  render() {
    const { handleIncrement, handleReset, handleDecrement, state } = this;
    const { countValue, isEven } = state;

    return (
      <CounterView
        countValue={countValue}
        isEven={isEven}
        handleIncrement={handleIncrement}
        handleReset={handleReset}
        handleDecrement={handleDecrement}
      />
    );
  }
}
export default CounterContainder;
