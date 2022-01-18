import React from 'react';

const CountDownTimer = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
    return (
        <>
            <section className="timer-container">
                <section className="timer">
                    <div className="clock">
                        <section>
                            <p>{timerDays}</p>
                            <small>Days</small>
                        </section>
                        <span>:</span>
                        <section>
                            <p>{timerHours}</p>
                            <small>Hours</small>
                        </section>{" "}
                        <span>:</span>
                        <section>
                            <p>{timerMinutes}</p>
                            <small>Minutes</small>
                        </section>{" "}
                        <span>:</span>
                        <section>
                            <p>{timerSeconds}</p>
                            <small>Seconds</small>
                        </section>
                    </div>
                </section>
            </section>
        </>
    );
};

CountDownTimer.defaultProps = {
    timerDays: 10,
    timerHours: 10,
    timerMinutes: 10,
    timerSeconds: 10,
  };

export default CountDownTimer;