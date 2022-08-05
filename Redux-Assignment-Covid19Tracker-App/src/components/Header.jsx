import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVirusCovid } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header>
      <h1>
        C<FontAwesomeIcon icon={faVirusCovid} color="teal" />
        VID-19
      </h1>
      <h2>Global and Country Wise Cases of Corona Virus</h2>
      <p>(For a Particular country, select a Country from below)</p>
    </header>
  );
}

export default Header;