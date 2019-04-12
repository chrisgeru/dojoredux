import * as React from "react";
import HomeTitle from "./HomeTitle";
import StepList from "./StepList";
import MessageOk from "./MessageOk";

class Home extends React.Component {
  state = {
    showCompleted: false
  };

  handleCompleteSteps = () => {
    this.setState({
      showCompleted: true
    });
  };

  render() {
    const { showCompleted } = this.state;
    return (
      <div>
        <HomeTitle />
        <StepList handleOnComplete={this.handleCompleteSteps} />
        {showCompleted ? <MessageOk /> : null}
      </div>
    );
  }
}

export default Home;
