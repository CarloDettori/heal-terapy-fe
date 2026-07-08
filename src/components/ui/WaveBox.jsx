export default function WaveBox({ children }) {



    return (
        <>

            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className=" transition duration-300 ease-in-out delay-150"><path d="M 0,400 L 0,150 C 111.73333333333329,182.13333333333333 223.46666666666658,214.26666666666668 404,204 C 584.5333333333334,193.73333333333332 833.8666666666668,141.06666666666666 1018,125 C 1202.1333333333332,108.93333333333334 1321.0666666666666,129.46666666666667 1440,150 L 1440,400 L 0,400 Z" stroke="none" strokeWidth="0" fill="white" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
            <section>
                {children}
            </section>
            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'scaleX(-1)' }} className="transition duration-300 ease-in-out delay-150"><path d="M 0,400 L 0,150 C 178.8,115.86666666666667 357.6,81.73333333333333 535,96 C 712.4,110.26666666666667 888.4000000000001,172.93333333333334 1039,190 C 1189.6,207.06666666666666 1314.8,178.53333333333333 1440,150 L 1440,400 L 0,400 Z" stroke="none" strokeWidth="0" fill="white" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(180 720 200)"></path></svg>

        </>
    );
}