import React from "react";

class PersonalData extends React.Component {
  state = {
    name: "",
    email: ""
  };

  onChangeName = e => {
    this.setState({
      name: e.target.value
    });
  };

  onChangeEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  render() {
    const { currentAction } = this.props;
    const { email, name } = this.state;
    return (
      <div>
        <h1>{currentAction.name}</h1>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={name}
          onChange={this.onChangeName}
          disabled={currentAction.complete}
        />

        <input
          type="text"
          placeholder="Digite seu email"
          value={email}
          onChange={this.onChangeEmail}
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

export default PersonalData;
