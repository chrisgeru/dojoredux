import * as React from "react";

class StepForm extends React.Component {

    state = {
        name: "",
        email: ""
    };

    onChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    };

    onChangeEmail = (e) => {
        this.setState({
                email: e.target.value
            }
        )
    };

    render () {
        return (<div>
                <h1>{this.props.step.name}</h1>
                <input
                type="text"
                placeholder={"Digite seu nome"}
                value={this.state.name}
                onChange={this.onChangeName}
            />

            <input
                type="text"
                placeholder={"Digite seu email"}
                value={this.state.email}
                onChange={this.onChangeEmail}
            />
            <button
                onClick={() => {
                    this.props.onHandleSubmit(this.props.step)
                }}
            >
                Enviar
            </button>
        </div>
        )
    }
}

export default StepForm
