import { TypeAnimation } from "react-type-animation";


export default function Loader({ isExiting ,done }: { isExiting: boolean; done: () => void }) {
    return (
        <div
            className={`loader ${isExiting ? "exit" : ""}`}
            onTransitionEnd={() => {
                if (isExiting) done();
            }}
        >
            <div className="loader-content">

                <h1 className="big-text">
                <TypeAnimation
                    key="loader-name-animation"
                    sequence={[
                    "Eslam Saied",
                    () => {
                        // 🔥 trigger exit when typing finishes
                        setTimeout(() => {
                        done();
                        }, 1000); // small delay for smooth feel
                    },
                    ]}
                    speed={10}
                    cursor={true}
                    repeat={0}
                />
                </h1>

                <p className="small-text">Frontend Developer</p>
            </div>
        </div>
  );
}