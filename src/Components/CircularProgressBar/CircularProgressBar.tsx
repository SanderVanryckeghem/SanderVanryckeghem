import { CircularProgress } from "@mui/joy";
import { FC, useEffect, useState, useRef } from "react";

type CircularProgressBarProps = {
    value: number;
    url : string
}

const CircularProgressBar: FC<CircularProgressBarProps> = ({ value, url }) => {

    const [progress, setProgress] = useState(0);
    const progressRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        const handleIntersection: IntersectionObserverCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    timer = setInterval(() => {
                        setProgress((prevProgress) => {
                            if (prevProgress >= value) {
                                clearInterval(timer);
                                return value;
                            }
                            return prevProgress + 1;
                        });
                    }, 30);
                } else {
                    clearInterval(timer); // Stop de timer als het element uit beeld gaat
                    setProgress(0);      // Reset de voortgang
                }
            });
        };

        const options: IntersectionObserverInit = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver(handleIntersection, options);
        if (progressRef.current) {
            observer.observe(progressRef.current);
        }

        return () => {
            if (timer) {
                clearInterval(timer);
            }
        };
    }, [value]);
    return (
        <>
            <div className="circular-progressbar-wrapper">
                <div className="circular-progressbar" ref={progressRef}>
                    <CircularProgress color="primary" value={progress} determinate={true} size="lg"
                                      sx={{'--CircularProgress-size': '100px'}}>
                        <img className="circular-progressbar-img" src={url} alt="img of techstack"/>
                    </CircularProgress>
                </div>
            </div>
            <div className="score-display" data-score={value}>{value}%</div>
        </>
    );
}

export default CircularProgressBar;
