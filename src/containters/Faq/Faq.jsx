import React from 'react'
import {useState} from 'react'
import './Faq.css'

const Faq = () => {
    
    const[selected, setSelected] = useState(null)
    
    
    
    const toggle = (i) => {
        if(selected == i){
            return setSelected(null)
        }

        setSelected(i)
    }


  return (
    <div className='wrapper' id='faq'>
        <div className='accordion'>
            {data.map((item, i) =>(
                <div className='item'>
                    <div className='title' onClick ={() => toggle(i)} >
                        <h2 className='question'>{item.question}</h2>
                        <span className='plus_minus'>{selected === i ? '-' : '+'}</span>
                    </div>
                    <div className={selected === i ? 'show' : 'content'}>
                            <h2>{item.answer}</h2>
                    </div>
                </div>
                
            ))}
        </div>
    </div>
  )
}



const data = [
    {
        question: 'Peut-on bénéficier de vos services dans toute la France ?',
        answer: "Oui, basée dans la région parisienne, Vans Transport company assure vos voyages dans la capitale ainsi que dans toute la France et va au delà des frontières dans toute l’Europe."

        

    },
    {
        question: 'Comment peut on réserver une course ?',
        answer: 'Vous pouvez nous contacter par mail ou par téléphone afin de réserver un voyage. Notre priorité est de vous répondre dans les meilleurs délais. (vanstransportcompany@gmail.com, Transport de personnes par VTC : 0753726150, Livraison de marchandises et déménagement : 0769212818)'
    },
    {
        question: 'Cette compagnie assure-t’elle tout type de déplacement ?',
        answer: 'Oui, que vos trajets soient courts ou longs, vous pouvez faire appel à notre société.'
    },
    {
        question: 'Quels sont les différents services proposés par la société ?',
        answer: 'La société vous propose le transport de personnes ainsi que les déménagements et le transport de marchandises. Disposant de différents véhicules, notre société s’adapte à vos besoins'
    },
]

export default Faq