import cityVideo from '../assets/skyline-city.mp4';

export default function Home() {
  return (
    <section className="home-landing">
      <video
        className="home-video"
        src={cityVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="home-overlay">
        <h1 className="home-title">WatchTower</h1>
        <p className="home-tagline">Neighborhood safety at the touch of a button</p>
      </div>
    </section>
  );
}