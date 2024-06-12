import React from 'react';
import zia from '../imgs/lady.jpg';
import sonia from '../imgs/women.jpg';
import john from '../imgs/manage.jpg'; // adjust the paths as necessary

function Team() {
  return (
    <section className="team">
      <h2>Our Team</h2>
      <div className="team-members">
        <div className="team-member">
          <img src={zia} alt="Zia Qureshi" />
          <h3>Zia Qureshi</h3>
          <p>Manager</p>
        </div>
        <div className="team-member">
          <img src={sonia} alt="Sonia Nowlan" />
          <h3>Sonia Nowlan</h3>
          <p>Team Leader</p>
        </div>
        <div className="team-member">
          <img src={john} alt="John Foky" />
          <h3>John Foky</h3>
          <p>CEO</p>
        </div>
      </div>
    </section>
  );
}

export default Team;
