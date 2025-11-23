import aboutimage from '../pages/stl-arch.jpg';

export default function About() {
    return (
        <section className="about-page">
            <h1>About Watchtower</h1>

            <div className="about-image-wrapper">
            <img
            src={aboutimage}
            alt="St. Louis Architecture"
            className="about-image"
            />
            </div>
            <p>Watchtower is a community-driven platform dedicated to enhancing public safety by enabling users to report and track safety incidents and stay informed.
                it's mission is to empower individuals with the tools and information they need to make safer choices in their daily lives. along with reporting incidents in real time so everyone can stay informed and vigilant.
            </p>
        </section>
    )
}