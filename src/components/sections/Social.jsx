import '../styles/Social.css';
import GitHubIcon from '../../icons/github';
import InstagramIcon from '../../icons/instagram';
import TwitterIcon from '../../icons/twitter';
import LinkedinIcon from '../../icons/linkedin';
import EmailIcon from '../../icons/email';
import PlexIcon from '../../icons/plex';

function Social() {
  return (
    <div className="socials">
      <div className="social-icons">
      <a href="https://github.com/adrohan19" className="social-icon-mobile">
          <GitHubIcon />
        </a>
        <a href="https://www.instagram.com/adityardhir">
          <InstagramIcon />
        </a>
        {/* <a href="https://www.twitter.com/ClementOu">
          <TwitterIcon />
        </a> */}
        <a href="https://www.linkedin.com/in/aditya-dhir">
          <LinkedinIcon />
        </a>
        <a href="mailto: adityadhir19@gmail.com">
          <EmailIcon />
        </a>
        {/* <a href="https://plex.clementou.com">
          <PlexIcon className="svg-icon" />
        </a> */}
      </div>
    </div>
  );
}

export default Social;