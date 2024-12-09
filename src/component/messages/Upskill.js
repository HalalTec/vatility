import { useState } from "react";

import next from '../next-bt.png';
import back from '../previous-bt.png'

const Upskill = ({close, msg, submit, quest}) => {
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: [
            'No recent efforts to upskill.',
            'Unaware of available training or resources.',
            'Feeling overwhelmed by the idea of learning new skills.'
          ],
          reflectiveQuestions: [
            'What skills do you feel you are lacking?',
            'How do you think this lack of skills affects your job search?',
            'What barriers are preventing you from pursuing upskilling opportunities?'
          ],
          aspiIndication: [
            'No upskilling or certifications have been pursued.'
          ],
          futureQuestions: [
                'Have you actively avoided taking any steps toward developing new skills or certifications?',
                'Do you feel uncertain about the value of upskilling in your job search?'
            ]
        },
        {
            score: 2,
          indication: [
                    ' Minimal engagement in professional development activities.',
                    'Limited understanding of current industry trends.',
                    'Rarely utilize online resources for learning.'
          ],
          reflectiveQuestions: [
            'What specific skills do you want to develop, and why?',
            'How often do you seek feedback on your skills from peers or mentors?',
            'What small step can you take to begin improving your skills?',
          ],
          aspiIndication: [
                'Limited awareness of necessary skills or certifications.'
          ],
          futureQuestions: [
                                'Have you started exploring the skills and certifications relevant to your desired job but haven’t taken any significant actions yet?',
                                "Do you recognize the need for upskilling but haven't yet committed to a clear learning path?"
          ]
        },  

        {
            score: 3,
            indication: [
                'Some awareness of the need to upskill but lack a clear plan.',
                'Occasionally participate in training sessions but not consistently.',
                'Feeling slightly anxious about the job market due to skill gaps.'
            ],
            reflectiveQuestions: [
                'Have you identified any courses or certifications that interest you?',
                'How would gaining new skills impact your confidence in job applications?',
                'What is holding you back from committing to a specific upskilling opportunity?'
            ],
            aspiIndication: [
                    'You are in the early stages of identifying skills needed but have not yet taken steps to acquire them.'
            ],
            futureQuestions: [
                "Have you researched some certifications or courses but haven't committed to starting them?",
                'Do you have a general understanding of what skills are in demand but haven’t yet outlined a plan to acquire them?'
            ]
        },

        {
            score: 4,
            indication: [
                '- Engaging in some upskilling activities, but not regularly.',
                'Familiar with a few online learning platforms but not using them effectively.',
                'Acknowledging the importance of upskilling but lacking motivation.'
            ],
            reflectiveQuestions: [
                'Which skills do you believe are most relevant for your desired job role?',
                'How do you prioritize which skills to develop first?',
                'What motivates you to learn new skills, and how can you harness that motivation?'
            ],
            aspiIndication: [
                'Have identified some skills needed, but only a few certifications or courses are in progress.'
            ],
            futureQuestions: [
                "Have you enrolled in a course or signed up for a certification but haven't completed any modules?",
                'Are you unsure about which skills to prioritize but know a few that could be relevant?'
            ]
        },
        {
            score: 5,
            indication: [
                'Participating in training occasionally and recognizing its value.',
                'Setting some goals for skill development but not consistently following through.',
                'Feeling neutral about current skill levels and their impact on job prospects.'
            ],
            reflectiveQuestions: [
                '- What have been your most significant learning experiences recently?',
                'How can you create a more structured plan for your upskilling efforts?',
                'What support systems do you have in place for your learning journey?'
            ],
            aspiIndication: [
                'Active in learning and gaining certifications but still in early stages of competency.'                
            ],
            futureQuestions: [
                "Have you completed a few modules or certifications but feel you're not yet fully competent in the required skills?",
                'Are you actively working towards upskilling but feel you have room for improvement in your mastery of the subject matter?'
            ]
        },
        {
            score: 6,
            indication: [
                '- Regularly engaging in upskilling activities and courses.',
                'Actively seeking feedback on newly acquired skills from peers or mentors.',
                'Developing a clearer vision of desired career path based on skill sets.'
            ],
            reflectiveQuestions: [
                "How do you measure the effectiveness of the skills you've learned?",
                'In what ways have your new skills improved your confidence or employability?',
                'Are there additional skills that could further enhance your career prospects?'
            ],
            aspiIndication: [
                'Some certifications or upskilling are completed, and you are gaining confidence in applying these skills.'
            ],
            futureQuestions: [
                'Have you completed a certification that is relevant to your job search but feel you need more practical experience?',
                "Are you starting to see how the skills you've learned can help you in your job search, but you still feel you need to build on them further?"
            ]
        },
        {
            score: 7,
            indication: [
                'Consistently participating in relevant training and workshops.',
                'Taking initiative to learn independently through various resources.',
                'Feeling confident about applying new skills in real-world scenarios.'
            ],
            reflectiveQuestions: [
                'How do you stay updated with industry trends and necessary skills?',
                'What achievements in your upskilling journey are you most proud of?',
                'How can you leverage your current skills to explore new job opportunities?'
            ],
            aspiIndication: [
                    'Significant progress in upskilling and certifications; you have some proficiency in key areas.'
            ],
            futureQuestions: [
                'Have you completed multiple certifications or courses and now feel capable of applying those skills in the workplace?',
                'Do you have a clear idea of which additional skills are required and have already begun to work toward those?'
            ]
        }, {
            score: 8,
            indication: [
                'Actively mentoring others based on acquired skills and knowledge.',
                'Seeking advanced certifications or specialized training regularly.',
                'Frequently applying new skills effectively in current role or projects.'
            ],
            reflectiveQuestions: [
                '- How do you share your knowledge with others, and what impact does it have?',
                'What future goals do you have for further developing your skill set?',
                'How has upskilling shaped your professional identity and aspirations?'
            ],
            aspiIndication: [
                'Well-versed in required certifications and can confidently demonstrate your skills in the job market.'
            ],
            futureQuestions: [
                ' Have you completed most, if not all, of the necessary certifications and feel prepared to discuss your skills in interviews?',
                'Are you actively applying these skills in a practical setting, such as in personal projects or freelance work?'
            ]
        },
        {
            score: 9,
            indication: [
                'Highly engaged in continuous learning and professional development initiatives.',
                'Recognized by peers as a go-to resource for knowledge and expertise.',
                'Actively contributing to discussions on industry advancements and innovations.'
            ],
            reflectiveQuestions: [
                'What strategies do you use to maintain your motivation for lifelong learning?',
                'In what ways can you further challenge yourself to grow even more professionally?',
                'How can you inspire others to prioritize their own upskilling journeys?'
            ],
            aspiIndication: [
                'Highly proficient in the skills required for the job market; certifications are up to date and aligned with industry standards.'
            ],
            futureQuestions: [
                'Have you achieved a high level of mastery in the key certifications and skills needed for your job search, and do you feel prepared for advanced roles?',
                'Are you confident that the skills you possess will significantly increase your chances of landing a job'
            ]
        },
        {
            score: 10,
            indication: [
                'Mastery of multiple relevant skills with proven success in applying them.',
                ' Leading initiatives that promote skill development within the organization.',
                'Constantly exploring new areas for growth and sharing insights with others.'
            ],
            reflectiveQuestions: [
                'What does success look like for you at this level, and how did you achieve it?',
                'How do you envision utilizing your expertise to influence others positively?',
                'What legacy do you hope to leave regarding skill development in your field?'
            ],
            aspiIndication: [
                'Expert-level proficiency in relevant skills; certifications are fully aligned with long-term career goals.'
            ],
            futureQuestions: [
                'Are you recognized by peers or employers as an expert in the relevant skills and certifications for your desired job?',
                'Can you confidently take on roles that require advanced expertise in the field, and have you consistently kept your certifications up to date?'
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



 
export default Upskill;