import { useState } from "react";

import next from '../next-bt.png';
import back from '../previous-bt.png'

const Energized = ({close, msg, submit, quest}) => {
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: [
            'Feeling overwhelmed by the job search process.',
            'Lack of motivation to apply for jobs.',
            "Frequently doubting one's abilities and worth."
          ],
          reflectiveQuestions: [
            'How often do I feel motivated to pursue job opportunities?',
            'Do I find myself avoiding job search activities?',
            'Am I struggling to recognize my strengths?'
          ],
          aspiIndication: [
            'Struggles to maintain energy and motivation. Frequently feels overwhelmed or discouraged'
          ],
          futureQuestions: [
                'Do I often feel mentally exhausted or demotivated during my job search?',
                'Do I find myself giving up easily when faced with setbacks?',
                'Am I struggling to focus on my job search tasks for more than short bursts?'
            ]
        },
        {
            score: 2,
          indication: [
                    'Rarely engaging in job search activities.',
                    'Limited energy or enthusiasm for networking.',
                    'Often feeling defeated by setbacks.'
          ],
          reflectiveQuestions: [
            'How often do I actively seek out job opportunities?',
            'Do I feel drained after networking or applying for jobs?',
            'How do I react to rejection or lack of responses?',
          ],
          aspiIndication: [
                'Occasionally lacks energy or persistence, but still tries to push through.'
          ],
          futureQuestions: [
                                'Do I sometimes feel emotionally drained but still manage to take some action?',
                                'How often do I feel completely disconnected from the process of applying for jobs?',
                                'Am I able to persist through challenges, but not always in a balanced way?'
          ]
        },  

        {
            score: 3,
            indication: [
                'Occasionally attempts to stay positive but often feels discouraged.',
                'Limited persistence in following up on applications.',
                'Struggles to maintain a routine in job searching.'
            ],
            reflectiveQuestions: [
                'Do I have a consistent schedule for job searching?',
                'How often do I follow up on my applications?',
                'What strategies do I use to stay positive during this process?'
            ],
            aspiIndication: [
                    'Has difficulty staying mentally strong for extended periods but can gather energy for short bursts.'
            ],
            futureQuestions: [
                'Do I often find it hard to stay motivated over a longer period, even if I occasionally get inspired?',
                'How frequently do I find myself needing breaks because of burnout or lack of mental strength?',
                'Am I able to start tasks but struggle to finish them consistently?'
            ]
        },

        {
            score: 4,
            indication: [
                ' Some engagement in job search activities, but motivation fluctuates.',
                'Mildly persistent in pursuing opportunities.',
                'Occasionally seeks support from others.'
            ],
            reflectiveQuestions: [
                'How do I keep myself accountable in my job search?',
                'What motivates me to keep going even when things get tough?',
                'Do I reach out for help when needed?'
            ],
            aspiIndication: [
                'Can maintain focus and energy for a moderate amount of time, but motivation dips frequently'
            ],
            futureQuestions: [
                'How often do I feel a lack of motivation, and how long does it take for me to regain it?',
                'Do I find it challenging to keep my energy levels up during repetitive or less rewarding tasks?',
                'Do I notice fluctuations in my persistence depending on the type of job application?'
            ]
        },
        {
            score: 5,
            indication: [
                ' Regularly applies for jobs but lacks follow-through on leads.',
                'Maintains a somewhat positive outlook but can be easily discouraged.',
                'Engages with peers but not consistently.'
            ],
            reflectiveQuestions: [
                ' How often do I apply for jobs each week?',
                'What helps me maintain a positive attitude during setbacks?',
                'Am I actively networking or just passively waiting for opportunities?'
            ],
            aspiIndication: [
                'Occasionally experiences mental fatigue but is generally able to keep moving forward with determination.'
            ],
            futureQuestions: [
                'Can I manage to get back on track after setbacks, even if my energy dips?',
                'How well do I recover from periods of low energy and refocus on my job search?',
                'Am I able to push through challenging times and complete key tasks?'
            ]
        },
        {
            score: 6,
            indication: [
                'Generally persistent in applying and following up on leads.',
                'Starts to develop a support network for encouragement.',
                'Manages stress better but still experiences fluctuations in energy levels.'
            ],
            reflectiveQuestions: [
                ' How do I manage stress during my job search?',
                'Who can I rely on for support and encouragement?',
                'What steps can I take to enhance my persistence?'
            ],
            aspiIndication: [
                'Regularly manages energy, staying focused on the job search, though occasional dips in motivation occur.'
            ],
            futureQuestions: [
                'How do I maintain momentum even when facing rejection or a lack of feedback?',
                'Do I actively plan rest or recovery periods to stay productive in the long run?',
                'How do I ensure my motivation remains steady despite setbacks or long gaps without responses?'
            ]
        },
        {
            score: 7,
            indication: [
                ' Actively engages in networking and job applications.',
                'Maintains a positive mindset and learns from setbacks.',
                'Regularly reflects on personal strengths and areas for growth.'
            ],
            reflectiveQuestions: [
                'How effectively am I networking with others?',
                'What have I learned from past rejections or challenges?',
                'How can I leverage my strengths more effectively in my search?'
            ],
            aspiIndication: [
                    'Has a clear routine for managing energy and persistence, able to stay mentally strong through setbacks.'
            ],
            futureQuestions: [
                'How often do I experience dips in motivation, and how do I address them?',
                'How well do I balance my energy to avoid burnout throughout the job search?',
                'When setbacks occur, do I have strategies to regain focus and motivation quickly?'
            ]
        }, {
            score: 8,
            indication: [
                'Consistently applies for jobs and follows up diligently.',
                'Proactively seeks feedback and adjusts strategies accordingly.',
                'Exhibits resilience and determination in the face of challenges.'
            ],
            reflectiveQuestions: [
                'How often do I seek feedback on my applications or interviews?',
                'In what ways have I adapted my approach based on past experiences?',
                'How do I stay motivated during long stretches without responses?'
            ],
            aspiIndication: [
                'Has a strong sense of mental resilience and focus, with the ability to remain energized through long periods of effort.'
            ],
            futureQuestions: [
                'How well do I cope with long periods of uncertainty or rejection?',
                'Am I able to maintain a consistent level of energy and enthusiasm even when things aren’t going well?',
                'How often do I practice self-care and mindfulness to maintain my mental strength?'
            ]
        },
        {
            score: 9,
            indication: [
                'Highly motivated and energized throughout the job search process.',
                'Actively contributes to others’ job searches as well.',
                'Demonstrates strong mental strength and persistence even during tough times.'
            ],
            reflectiveQuestions: [
                'What drives my motivation during this process?',
                'How can I support others while also focusing on my own search?',
                'What strategies do I use to maintain high energy levels consistently?'
            ],
            aspiIndication: [
                'Maintains high energy and mental focus, even when job search progress is slow, and can navigate emotional challenges effectively.'
            ],
            futureQuestions: [
                'How effectively do I navigate stress and frustration without letting it derail my efforts?',
                'How do I stay energized and motivated when facing continuous rejections or long wait times?',
                'Do I feel in control of my mental strength and energy levels during the job search process?'
            ]
        },
        {
            score: 10,
            indication: [
                'Fully engaged, proactive, and enthusiastic about the job search process.',
                'Mentors others and shares strategies for success.',
                'Exhibits exceptional resilience and mental strength, viewing challenges as opportunities for growth.'
            ],
            reflectiveQuestions: [
                'What specific practices keep me energized and motivated every day?',
                'How can I continue to grow while helping others in their searches?',
                'What mindset shifts have helped me maintain such high levels of persistence and positivity?'
            ],
            aspiIndication: [
                'Fully energized, persistent, and mentally strong, able to remain focused and proactive throughout the job search journey.'
            ],
            futureQuestions: [
                'Do I consistently maintain mental clarity, energy, and focus throughout the entirety of my job search?',
                'How well do I handle setbacks, and do I use them as learning experiences rather than discouragements?',
                'Have I developed long-term strategies for staying mentally strong and persistent, no matter the job search challenges?'
            ]
        },
        {
            score: 10,
            indication: 'Exceptional spiritual connection, profound inner peace, complete alignment with purpose, deeply fulfilling spiritual practices, strong sense of transcendence.',
            reflectiveQuestions: [
                'Do you feel a profound, unbreakable connection to your spirituality and purpose?',
                'Are you consistently at peace, with a deep sense of fulfillment and clarity?',
                'Does your spirituality define and elevate your daily life?'


            ]
        }

      ];

      const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
      };
    
      const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length);
      };
      

      
      if (quest < 1) {
        return ( 
            <>
                       <div className="message" >
                    <div className="card"> 
                    <div className="confirm">
                    <h2> Confirm Your Selection of: {categories[currentIndex].score} </h2>
                    <button onClick={close} style={{color:"red"}} className="close">X</button>
                    </div>  
                    <h5 style={{color:"red"}}>Go through the description below and confirm your selection, or use the page controls to make changes</h5>
                    <h3>Indicators for level {currentIndex+1}:</h3>
                    <p style={{fontSize:"15px"}}> {categories[currentIndex].indication} </p>
                    <h3> Reflective Questions:</h3>
                    <ul style={{textAlign:"left"}}>
                    <li style={{listStyle:"disc"}}> {categories[currentIndex].reflectiveQuestions[0]}</li>
                    <li style={{listStyle:"disc"}}> {categories[currentIndex].reflectiveQuestions[1]}</li>
                    <li style={{listStyle:"disc"}}> {categories[currentIndex].reflectiveQuestions[2]}</li>
                    </ul>
                    <div className="ref-button">
                    <button onClick={prevSlide} className=" prev" style={{marginTop:"0px"}}><img src={back}  /></button> <button  id="myButton" onClick={submit} >{currentIndex+1}</button>
                    
                    <label htmlFor="myButton" className="select"> Confirm {currentIndex+1}</label> <button onClick={nextSlide} className=" prev" style={{marginTop:"0px"}}><img src={next} /></button>
                    </div>
                    </div>
                </div>
                </>
        )
      }else {
        return (<> 
        
            {/* future */}
                  <div className="message" >
               <div className="card"> 
               <div className="confirm">
               <h2> Confirm Your Selection of: {categories[currentIndex].score} </h2>
               <button onClick={close} style={{color:"red"}} className="close">X</button>
               </div>
               <h5 style={{color:"red"}}>Go through the description below and confirm your selection, or use the page controls to make changes</h5>
               <h3>Aspirational Indicators {currentIndex+1}:</h3>
               <ul style={{textAlign:"left"}}>
               {categories[currentIndex].aspiIndication.map((indication, index) => (
                   <li key={index} style={{ listStyle: "disc" }}>
                   {indication}
                   </li>
               ))}
               </ul>
               <h3> Reflective Questions:</h3>
               <ul style={{textAlign:"left"}}>
               {categories[currentIndex].futureQuestions.map((indication, index) => (
                   <li key={index} style={{ listStyle: "disc" }}>
                   {indication}
                   </li>
               ))}
               </ul>                
               <div className="ref-button">
               <button onClick={prevSlide} className=" prev" style={{marginTop:"0px"}}><img src={back}  /></button> <button  id="myButton" onClick={submit} >{currentIndex+1}</button>
               
               <label htmlFor="myButton" className="select"> Confirm {currentIndex+1}</label> <button onClick={nextSlide} className=" prev" style={{marginTop:"0px"}}><img src={next} /></button>
               </div>
               </div>
           </div>
           </>
           
       
    );
     }
   

          
}



 
export default Energized;