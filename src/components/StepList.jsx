import React, { Fragment } from "react";
import * as _ from "lodash";
import PersonalData from "./PersonalData";
import LoanRequest from "./LoanRequest";
import Password from "./Password";

class StepList extends React.Component {
  state = {
    personalData: {
      name: "Dados Pessoais",
      show: true,
      complete: false
    },
    loanRequest: {
      name: "Pedido de Empréstimo",
      show: false,
      complete: false
    },
    password: {
      name: "Senha",
      show: false,
      complete: false
    }
  };

  confirmStep = (current, next) => {
    current.show = true;
    current.complete = true;

    if (next !== null) {
      next.show = true;
    } else {
      const { handleOnComplete } = this.props;
      handleOnComplete();
    }

    const otherSteps = _.omit(this.state, [current, next]);

    this.setState({
      ...current,
      ...next,
      ...otherSteps
    });
  };

  render() {
    const { personalData, loanRequest, password } = this.state;
    return (
      <Fragment>
        {personalData.show ? (
          <PersonalData
            onHandleSubmit={this.confirmStep}
            currentAction={personalData}
            nextAction={loanRequest}
          />
        ) : null}
        {loanRequest.show ? (
          <LoanRequest
            onHandleSubmit={this.confirmStep}
            currentAction={loanRequest}
            nextAction={password}
          />
        ) : null}
        {password.show ? (
          <Password
            onHandleSubmit={this.confirmStep}
            currentAction={password}
            nextAction={null}
          />
        ) : null}
      </Fragment>
    );
  }
}

export default StepList;
