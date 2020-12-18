import { Grid } from "@material-ui/core";
import React, { Component } from "react";

class Timer extends Component {
    constructor(props) {
        super(props);
        this.countDownId = null;
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    }

    componentDidMount() {
        this.countDownId = setInterval(this.timerInit, 1000);
    }

    componentWillUnmount() {
        if (this.countDownId) {
            clearInterval(this.countDownId);
        }
    }

    timerInit = () => {
        const { startDate } = this.props;
        const now = new Date().getTime();
        const countDownStartDate = new Date(startDate).getTime();
        const distance = now - countDownStartDate;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        this.setState({ days, hours, minutes, seconds });
    };

    render() {
        const { days, hours, minutes, seconds } = this.state;

        return (
            <Grid container className="timer">
                <div>
                    {days}
                    <span>d</span>
                </div>
                &emsp;
                <div>
                    {hours}
                    <span>h</span>
                </div>
                &emsp;
                <div>
                    {minutes}
                    <span>m</span>
                </div>
                &emsp;
                <div>
                    {seconds}
                    <span>s</span>
                </div>
            </Grid>
        );
    }
}
export default Timer;
