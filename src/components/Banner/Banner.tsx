import "./Banner.css";
const Banner=({bannerUser}: {bannerUser: string})=>{
    return(
    <div className="welcome-banner">
        <h2>Welcome, {bannerUser} to CodeAnt AI</h2>
        <p>Where technology meets brilliance!</p>
    </div>
    );
}

export default Banner;