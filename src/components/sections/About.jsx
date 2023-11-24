import '../styles/About.css';
import headshot from '../../assets/images/headshot.png';
import arrow from '../../assets/images/arrow.png';

const skills = ['R', 'Python', 'C', 'C++', 'Java', 'JavaScript', 'HTML', 'Matlab', 'React', 'Pytorch', 'Docker', 'Kubernetes'];

function About() {
  return (
    <section id="About" className="about">
      <div className="about-left">
        <img src={headshot} alt="Headshot" className="headshot" />
      </div>
      <div className="about-right">
        <div className="about-title">
          <h2 className="about-num">01</h2>
          <h2 className="about-title-text">About Me</h2>
          <div className="about-line-box">
            <div className="about-line" />
          </div>
        </div>
        <p className='about-text'>
          
          {'Aditya Dhir'} • he/him
        </p>
        <p className="about-text">
          Hi! My name is Aditya Dhir and I am a student at University of Michigan passionate about data science, machine learning, and software engineering. I have experience with full-stack development, data science, as well as ML engineering. I hope to use my skills to build a better future.
        </p>
        <p className="about-text">
          Outside of academics, I have a variety of interests and hobbies I like to pursue, including rock climbing, film, basketball, and travel.
        </p>
        <h3 className="skills-title">Languages and Technologies</h3>
        <div className="langs-box">
          {skills.map((skill, index) => (
            <div key={skill} className={`lang-box ${index < 4 ? 'first-row' : index < 8 ? 'second-row' : 'third-row'}`}>
              <img src={arrow} alt={`${skill} icon`} className="lang-logo" />
              <p className="lang-text">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
