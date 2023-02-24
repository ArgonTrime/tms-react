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
  handleDecrement = () => {
    if (this.state.countValue > 0) {
      this.setState((state) => ({
        isEven:
          state.countValue - 1 === 0 || (state.countValue - 1) % 2 === 0
            ? true
            : false,
        countValue: state.countValue - 1,
      }));
    }
  };
  handleIncrement = () => {
    this.setState((state) => ({
      isEven: (state.countValue + 1) % 2 === 0 ? true : false,
      countValue: state.countValue + 1,
    }));
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
    const { countValue, isEven } = this.state;
    const { handleIncrement, handleReset, handleDecrement } = this;
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
