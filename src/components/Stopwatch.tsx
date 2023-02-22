import { Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { State, StopWatchProps } from "../types";
import audio from '../assets/are-you-focussing.mp3';

const StopWatch: React.FC<StopWatchProps> = ({ state, setState }) => {

    let alertSound = new Audio(audio);
    let [myInterval, setMyInterval] = useState<any>();

    let [playInterval, setPlayInteval] = useState<any>();
    let [totalTime, setTotalTime] = useState<number>(0);
    let [time, setTime] = useState({
        seconds: 0,
        minutes: 0,
        hours: 0
    })

    useEffect(() => {
        if (state.start === true) {
            setPlayInteval(() => {
                var interval = setInterval(() => {
                    alertSound.play();
                }, 1500000)
                return interval;
            })
        }
        else {
            setPlayInteval(() => {
                clearInterval(playInterval);
            })
        }
    }, [state.start])
    function handleStart() {
        setState(() => {
            return {
                start: !state.start,
                show: false
            }
        })
        setMyInterval(() => {
            var x = setInterval(() => {

                setTime((prevState) => {
                    let seconds = prevState.seconds + 1;
                    let minutes = prevState.minutes;
                    let hours = prevState.hours;
                    if (seconds >= 60) {
                        seconds = 0;
                        minutes += 1;
                    }
                    if (minutes >= 60) {
                        seconds = 0
                        minutes = 0;
                        hours += 1;
                    }
                    time.seconds += 1;
                    return {
                        ...prevState,
                        seconds,
                        minutes,
                        hours
                    }
                })
                setTotalTime((prevState) => {
                    return prevState + 1
                })
            }, 1000)
            return x
        })

    }

    function handlePause() {
        setState(() => {
            return {
                start: !state.start,
                show: state.show
            }
        })
        setMyInterval(() => {
            clearInterval(myInterval);
        })
    }

    function handleStop() {
        setState(() => {
            return {
                start: !state.start,
                show: true
            }
        })
        setMyInterval(() => {
            clearInterval(myInterval);
        })

        let focus_time_history = localStorage.getItem('focus_time_history');
        if (!focus_time_history) {
            if (totalTime != 0) {
                let ft: Array<number> = [];
                ft.push(totalTime);
                localStorage.setItem("focus_time_history", JSON.stringify(ft));
            }
        }
        else {
            if (totalTime != 0) {
                let ft: Array<number> = JSON.parse(focus_time_history);
                ft.push(totalTime);
                localStorage.setItem("focus_time_history", JSON.stringify(ft));
            }
        }
        setTotalTime(() => 0);
        setTime((prevState) => {
            return {
                seconds: 0,
                hours: 0,
                minutes: 0
            }
        })

    }
    return (
        <div className="stopwatch">
            <p>{(Math.floor(time.hours / 10)).toString() + (time.hours % 10).toString() + ":" +
                (Math.floor(time.minutes / 10)).toString() + (time.minutes % 10).toString() + ":" +
                (Math.floor(time.seconds / 10)).toString() + (time.seconds % 10).toString()}</p>
            {state.start === false && <Button colorScheme={'teal'} onClick={handleStart}>Start Working</Button>}
            {state.start === true && <Button colorScheme={'teal'} onClick={handlePause}>Pause</Button>}
            {state.start === true && <Button colorScheme={'teal'} onClick={handleStop}>Stop</Button>}
        </div>
    )
}

export default StopWatch;   