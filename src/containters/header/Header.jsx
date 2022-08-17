import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';
import vanPhoto from '../../assets/van.webp'

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Best Vans Rental Company In France</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
      
      
      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600+ people uses our cars around the world  </p>
      </div>
    </div>
    <div className="gpt3__header-image">
      <img src={vanPhoto} />
    </div>
    <div className='black_cube'></div>
  </div>
);

export default Header;