import * as React from "react";
import StepForm from "./stepForm";
import * as _ from "lodash";

class StepList extends React.Component {

    state = {
        stepList: [
            {name: 'Dados Pessoais', show: true, complete: false},
            {name: "Pedido de Empréstimo", show: false, complete: false},
            {name: "Senha", show: false, complete: false}
        ]
    };

    confirmStep = (step) => {
        const updateCurrentStep = {name: step.name, show: true, complete: true};

        const nextStep = this.state.stepList[this.state.stepList.indexOf(step) + 1];
        const updatedNextStep = nextStep ? {name: nextStep.name, show: true, complete: false} : null;

        const newList = this.state.stepList.map((s) => {
            if (s.name === updateCurrentStep.name) {
                return updateCurrentStep
            }
            if (updatedNextStep && s.name === updatedNextStep.name) {
                return updatedNextStep
            }
            return s
        });

        console.log("new list is", newList);
        this.setState(
            {
                stepList: newList
            }
        )
    };

    render() {
        return (
            this.state.stepList.filter(step => step.show)
            .map(step => (<StepForm
                key={_.snakeCase(step.name)}
                step={step}
                onHandleSubmit={this.confirmStep} />)
            )
        )
    }
};

export default StepList;
