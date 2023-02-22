import React from 'react';
import instagram from '../../assets/instagram.png'
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding" id='contactUs'>
    <div className="gpt3__footer-heading">
      <h1 className="footer_text">Faites confiance à Vans Transport Company</h1>
    </div>

   

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        
        <p> <br /> All Rights Reserved</p>
      </div>
      
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Adresse : <span className='info'>3 rue Hélène Loiret, Meudon</span></p>
        <p>Président de la société : <span className='info'>Mr.Akhalkatsi Tamaz</span></p>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>E-Mail: <span className='info' >vanstransportcompany@gmail.com</span></p>
        <p>Transport de personnes par VTC : <span className='info' >+33753726150</span></p>
        <p>Livraison de marchandises et déménagement: <span className='info'>+33769212818</span> </p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Social Media:</p>
        <a href='https://www.instagram.com/vans_transport_company/' target='_blank'><img className='instagram' src={instagram} /></a>
        
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 VansTransportCompany. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;