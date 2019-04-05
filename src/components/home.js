import * as React from "react";
import HomeTitle from "./hometitle";
import StepList from "./steplist";
import MessageOk from "./messageok";

class Home extends React.Component {

    state = {
        showCompleted: false
    };

    render() {
        return (
            <div>
                <HomeTitle/>
                <StepList/>
                {this.state.showCompleted ? <MessageOk /> : null}
            </div>

        )
    }
}


export default Home;
