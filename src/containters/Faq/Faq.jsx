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
                        <h2>{item.question}</h2>
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
        question: 'Question 1',
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

        

    },
    {
        question: 'Question 2',
        answer: 'answer 2'
    },
    {
        question: 'Question 3',
        answer: 'answer 3'
    },
    {
        question: 'Question 4',
        answer: 'answer 4'
    },
]

export default Faq