import React from 'react';

import savvy_logo from '../../assets/svg/savvy-logo.svg';
import rocket_logo from '../../assets/svg/Rocket.svg';
import './styles.scss';

/**
 * Description Component
 * @constructor
 */
function Description() {
  return (
    <div className="description-container">
      <img src={savvy_logo} alt="Savvy Logo" className="sv_logo" />
      <h2>Be a Boss. Save up for anything</h2>
      <h3>The money you save is growing every day, so you can smash your goals even faster.</h3>
      <p>With savvy, nothing can come between you and your goals. We help you easily put money aside so you always have enough for the things you want.</p>
      <p>Your money will be stashed away in the ICICI Prudential mutual fund. Not only will this ensure it's safe, but your savings will grow so that you can reach your goals faster. We trust it so
much that even our money is in it.</p>
      <img src={rocket_logo} alt="rocket Logo" className="rocket_logo" />
    </div>
  );
}

export default Description;
