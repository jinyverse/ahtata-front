import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

interface ProgressBarProps {
    width: number;
}
interface TimerProps {
    timeLeft: string;
}

const DivWrapper = styled.div<TimerProps>`
    width: 100%;
    height: 20px;
    border-radius: 5px;
    margin: 10px 0;
`;

const ProgressBarWrapper = styled.div`
    width: 100%;
    height: 20px;
    border-radius: 5px;
    margin: 10px 0;
`;

const ProgressBar = styled.div<ProgressBarProps>`
    height: 20px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.button.Main};
    width: ${props => props.width}%;
    transition: ${props => (props.width > 0 ? 'width 1s ease-in-out' : 'none')};
`;
const TimeCount = styled.div`
    font-size: xx-large;
    color: white;
`;

function Timer({ timeLeft }: { timeLeft: number }) {
    const [currentTimeLeft, setCurrentTimeLeft] = useState(timeLeft);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTimeLeft(prevTimeLeft => {
                const nextTimeLeft = prevTimeLeft - 1;
                return nextTimeLeft < 0 ? 0 : nextTimeLeft; // timeLeft가 음수가 되지 않도록 보호합니다.
            });
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div>
            <ProgressBarWrapper>
                <ProgressBar width={currentTimeLeft * 10} />
            </ProgressBarWrapper>
            <TimeCount>{currentTimeLeft}</TimeCount>
        </div>
    );
}

export default Timer;
