import profile from './assets/profile.jpg'
function Card() {
    return (
        <div className="card">
            <img className="card-image " src={profile} alt="profile picture"></img>
            <h2 className="card-title">Travis</h2>
            <p className="card-text">Learning react and like to play video games</p>
        </div>
    );
}
export default Card