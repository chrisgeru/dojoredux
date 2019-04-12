import React from "react";

class LoanRequest extends React.Component {
  state = {
    value: "",
    instalments: ""
  };

  onChangeValue = e => {
    this.setState({
      value: e.target.value
    });
  };

  onChangeInstalments = e => {
    this.setState({
      instalments: e.target.value
    });
  };

  render() {
    const { currentAction } = this.props;
    const { value, instalments } = this.state;
    return (
      <div>
        <h1>{currentAction.name}</h1>
        <input
          type="text"
          placeholder="Digite o valor do emprestimo"
          value={value}
          onChange={this.onChangeValue}
          disabled={currentAction.complete}
        />

        <input
          type="text"
          placeholder="Digite a parcela"
          value={instalments}
          onChange={this.onChangeInstalments}
          disabled={currentAction.complete}
        />
        <button
          type="submit"
          onClick={() => {
            const { onHandleSubmit, currentAction, nextAction } = this.props;
            onHandleSubmit(currentAction, nextAction);
          }}
          disabled={currentAction.complete}
        >
          Enviar
        </button>
      </div>
    );
  }
}

export default LoanRequest;
