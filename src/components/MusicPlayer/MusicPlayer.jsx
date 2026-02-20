import { useEffect, useRef, useState } from "react";
import playlist from "../../data/playlist";
import { LuArrowLeftToLine } from "react-icons/lu";
import { LuArrowRightToLine } from "react-icons/lu";
import "./MusicPlayer.css";

export default function MusicPlayer() {
    const [index, setIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    // const [volume, setVolume] = useState(0.7);

    const audioRef = useRef(new Audio(`${process.env.PUBLIC_URL}/${playlist[index].src}`));

    useEffect(() => {
        setLoading(true);

        audioRef.current.pause();
        audioRef.current = new Audio(`${process.env.PUBLIC_URL}/${playlist[index].src}`);
        // audioRef.current.volume = volume;

        audioRef.current.ontimeupdate = () => {
            const percent =
                (audioRef.current.currentTime / audioRef.current.duration) * 100;
            setProgress(percent || 0);
        };

        audioRef.current.onended = next;

        const handleCanPlay = () => {
            setLoading(false);
            if (isPlaying) audioRef.current.play();
        };

        audioRef.current.addEventListener("canplaythrough", handleCanPlay);

        return () => {
            audioRef.current.removeEventListener("canplaythrough", handleCanPlay);
        };
    }, [index, isPlaying]);

    const playPause = () => {
        if (isPlaying) audioRef.current.pause();
        else audioRef.current.play();
        setIsPlaying(!isPlaying);
    };

    const next = () =>
        setIndex((i) => (i + 1) % playlist.length);

    const prev = () =>
        setIndex((i) => (i === 0 ? playlist.length - 1 : i - 1));

    const seek = (e) => {
        const time =
            (e.target.value / 100) * audioRef.current.duration || 0;
        audioRef.current.currentTime = time;
        setProgress(e.target.value);
    };

    //   const changeVolume = (e) => {
    //     const v = e.target.value;
    //     audioRef.current.volume = v;
    //     setVolume(v);
    //   };

    return (
        <div className="player-container">
            <div className="player">
                <img
                    key={index}
                    src={`${process.env.PUBLIC_URL}/${playlist[index].cover}`}
                    className={`cover ${isPlaying && !loading ? "playing" : ""}`}
                    alt="cover"
                />

                <div className="info">
                    <h3>{playlist[index].title}</h3>
                    <p>{playlist[index].artist}</p>
                </div>

                <input
                    type="range"
                    value={progress}
                    onChange={seek}
                    className="progress"
                />

                <div className="controls">
                    <button
                        onClick={() => {
                            prev();
                            setProgress(0);
                            setIsPlaying(true);
                            setIsPlaying(true);
                        }}
                    >
                        <LuArrowLeftToLine />
                    </button>
                    <button className={`button-play ${loading ? "loading" : "play"}`} onClick={playPause} disabled={loading}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-6">
                            <path d="M15 6.75a.75.75 0 0 0-.75.75V18a.75.75 0 0 0 .75.75h.75a.75.75 0 0 0 .75-.75V7.5a.75.75 0 0 0-.75-.75H15ZM20.25 6.75a.75.75 0 0 0-.75.75V18c0 .414.336.75.75.75H21a.75.75 0 0 0 .75-.75V7.5a.75.75 0 0 0-.75-.75h-.75ZM5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L5.055 7.061Z" />
                        </svg>

                    </button>
                    <button
                        onClick={() => {
                            next()
                            setProgress(0);
                            setIsPlaying(true);
                        }}
                    >
                        <LuArrowRightToLine />
                    </button>
                </div>

                {/* <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={changeVolume}
                    className="volume"
                /> */}
            </div>
            <div className="list-music">
                {playlist.map((music, i) => (
                    <div
                        key={i}
                        className={`music-item ${i === index ? "active" : ""}`}
                        onClick={() => {
                            setIndex(i);
                            setProgress(0);
                            setIsPlaying(true);
                        }}
                    >
                        <img src={`${process.env.PUBLIC_URL}/${music.cover}`} alt={music.title} />
                        <div className="music-info">
                            <h4>{music.title}</h4>
                            <p>{music.artist}</p>
                        </div>
                    </div>
                ))}
            </div>


        </div>

    );
}
