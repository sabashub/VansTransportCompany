import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';
import vanPhoto from '../../assets/van.webp'

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Déplacements haut de gamme avec Vans Transport Company</h1>
      <p>Des chauffeurs expérimentés et aimables qui vous accompagneront et assureront votre sécurité et bien-être durant tous vos trajets, qu’ils soient courts ou longs.
Profitez de notre environnement luxueux ainsi que le confort que nous vous offrons, toujours apprécié par nos clients.</p>
      
      
      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>Des clients toujours satisfaits par nos services
</p>
      </div>
    </div>
    <div className="gpt3__header-image">
      <img src={vanPhoto} />
    </div>
    
  </div>
);

export default Header;