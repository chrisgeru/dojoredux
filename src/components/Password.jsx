import React from "react";

class Password extends React.Component {
  state = {
    password: "",
    confirmPassword: ""
  };

  onChangePassword = e => {
    this.setState({
      password: e.target.value
    });
  };

  onChangeConfirmPassword = e => {
    this.setState({
      confirmPassword: e.target.value
    });
  };

  render() {
    const { currentAction } = this.props;
    const { password, confirmPassword } = this.state;
    return (
      <div>
        <h1>{currentAction.name}</h1>
        <input
          type="text"
          placeholder="Digite sua senha"
          value={password}
          onChange={this.onChangePassword}
          disabled={currentAction.complete}
        />

        <input
          type="text"
          placeholder="Confirme sua senha"
          value={confirmPassword}
          onChange={this.onChangeConfirmPassword}
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

export default Password;
