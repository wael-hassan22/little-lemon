import chef1 from "../assests/Mario and Adrian A.jpg"
import chef2 from "../assests/Mario and Adrian b.jpg"
const About = () => {
  return (
        <section className='About paddining'>
              <div className="about-title">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="about-image">
                <img src={chef1} alt=""/>
                <img src={chef2} alt=""/>
            </div>
        </section>
    )
}

export default About