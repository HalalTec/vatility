import { useState } from "react";

import next from '../next-bt.png';
import back from '../previous-bt.png'

const Know = ({close, msg, submit, quest}) => {
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: [
            ' Feeling lost in your job search.',
            'Lack of clarity on career goals',
            'No motivation to pursue opportunities.'
          ],
          reflectiveQuestions: [
            ' Feeling lost in your job search.',
            'Lack of clarity on career goals.',
            'No motivation to pursue opportunities.'
          ],
          aspiIndication: [
            'Minimal self-awareness about strengths, weaknesses, interests, and values related to the job search.'
          ],
          futureQuestions: [
                'Do I have a clear understanding of what excites me about my career or what my strengths are?',
                'Have I identified the key areas of growth in my professional development?'
            ]
        },
        {
            score: 2,
          indication: [
                    ' Minimal understanding of your skills and strengths.',
                    'Rarely engaging in self-reflection.',
                    'Limited support network for job searching.'
          ],
          reflectiveQuestions: [
            ' When was the last time you evaluated your professional skills?',
            'How do you typically seek feedback from others about your career?',
            'What steps can you take to expand your support network?',
          ],
          aspiIndication: [
                'Basic awareness of strengths and weaknesses but unclear on how they relate to job roles.'
          ],
          futureQuestions: [
                                'Am I aware of my core strengths but struggle to connect them to the roles I am applying for?',
                                'Can I articulate where I need to grow in order to be more effective in my job search?'
          ]
        },  

        {
            score: 3,
            indication: [
                'Some awareness of strengths but lack of confidence.',
                'Occasionally setting career goals but not following through.',
                ' Feeling somewhat disconnected from desired job roles.'
            ],
            reflectiveQuestions: [
                ' What strengths do you recognize in yourself, and how do they align with your goals?',
                'What prevents you from consistently pursuing your career objectives?',
                'How often do you reassess your job preferences and passions?'
            ],
            aspiIndication: [
                    'A growing awareness of personal traits but lacking clarity on how they align with professional goals.'
            ],
            futureQuestions: [
                'Have I begun to understand how my skills and values align with my job preferences in some areas?',
                'Have I identified a few gaps in my skills or mindset that could hinder my job search?'
            ]
        },

        {
            score: 4,
            indication: [
                ' Identifying some areas for improvement in job search skills.',
                'Setting vague goals without clear action plans.',
                'Feeling uncertain about career direction.'
            ],
            reflectiveQuestions: [
                'What specific skills do you need to develop further?',
                'How clear are you on the steps needed to achieve your goals?',
                'How often do you revisit and refine your career aspirations?'
            ],
            aspiIndication: [
                'Clear understanding of key strengths and weaknesses but not yet applying this self-knowledge strategically.'
            ],
            futureQuestions: [
                'Do I have a clear picture of what strengths and weaknesses I bring to the table, but struggle to leverage them in my job applications?',
                'Am I regularly reflecting on how my personal traits influence my job search decisions?'
            ]
        },
        {
            score: 5,
            indication: [
                'Balanced view of strengths and weaknesses.',
                'Setting achievable goals but lacking urgency.',
                'Some engagement with job search resources.'
            ],
            reflectiveQuestions: [
                'What are the key strengths that support your job search efforts?',
                'How do you prioritize your job search activities?',
                'What motivates you to improve your job search skills?'
            ],
            aspiIndication: [
                'Solid understanding of personal strengths, weaknesses, values, and interests. I can articulate these clearly to others.'                
            ],
            futureQuestions: [
                'Can I clearly state my strengths and how they will benefit my potential employer?',
                "Do I regularly reflect on my values and how they align with the job roles I'm targeting?"
            ]
        },
        {
            score: 6,
            indication: [
                ' Good understanding of personal strengths and weaknesses.',
                'Regularly setting and reviewing career goals.',
                'Engaging with mentors or networking opportunities.'
            ],
            reflectiveQuestions: [
                'How effectively do you leverage your strengths in the job market?',
                'What strategies do you use to stay accountable for your goals?',
                'Who are the key people in your network that can support your search?'
            ],
            aspiIndication: [
                'Confident in my strengths and weaknesses, and I have aligned them with my professional goals.'
            ],
            futureQuestions: [
                'Have I consciously aligned my strengths with specific roles or career directions?',
                'Am I regularly assessing how my weaknesses impact my job search and actively working to address them?'
            ]
        },
        {
            score: 7,
            indication: [
                ' Strong self-awareness regarding skills and aspirations.',
                'Proactively seeking opportunities for growth.',
                'Confidently navigating the job market.'
            ],
            reflectiveQuestions: [
                ' In what ways have you successfully utilized feedback from others?',
                'How frequently do you update your resume or LinkedIn profile based on new experiences?',
                'What accomplishments are you most proud of in your career journey?'
            ],
            aspiIndication: [
                    'Well aware of my strengths, weaknesses, and values and I use this knowledge to shape my job search strategy.'
            ],
            futureQuestions: [
                'Do I apply my self-awareness to adapt my job search approach for each role I pursue?',
                'Am I regularly evaluating my core values and how they impact my decision-making?'
            ]
        }, {
            score: 8,
            indication: [
                'Clear vision for career path and next steps.',
                'Actively pursuing skill development and networking.',
                'High level of motivation and confidence in abilities.'
            ],
            reflectiveQuestions: [
                'How does your current role align with your long-term career vision?',
                'What specific actions have led to recent successes in your job search?',
                'How do you maintain motivation during challenging times?'
            ],
            aspiIndication: [
                'Self-awareness is a key driver in my job search; I actively use my strengths and values to enhance my applications.'
            ],
            futureQuestions: [
                'Do I use my self-awareness to tailor my applications, interviews, and professional networking?',
                'Am I actively looking for roles that align with my personal values and strengths?'
            ]
        },
        {
            score: 9,
            indication: [
                ' Excellent grasp of personal brand and marketability.',
                'Consistently achieving set goals with minimal setbacks.',
                'Strong connections within industry networks.'
            ],
            reflectiveQuestions: [
                'What strategies have been most effective in enhancing your personal brand?',
                'How do you celebrate achievements in your job search process?',
                'What ongoing professional development activities are you engaged in?'
            ],
            aspiIndication: [
                'Deep understanding of how my personal traits shape my job search, and I make intentional decisions based on this knowledge.'
            ],
            futureQuestions: [
                'Do I consistently make decisions based on a deep understanding of my strengths, values, and goals?',
                'Can I foresee how my personal growth can influence my future career decisions in the job search?'
            ]
        },
        {
            score: 10,
            indication: [
                'Exceptional clarity on career objectives and strategies.',
                'Actively mentoring others in their job searches.',
                'Fully confident in navigating any job market challenges.'
            ],
            reflectiveQuestions: [
                'How do you define success for yourself at this stage in your career?',
                'In what ways are you giving back to others through mentorship or guidance?',
                'What new challenges are you seeking to further enhance your career growth?'
            ],
            aspiIndication: [
                'Mastery of self-awareness in all aspects of my job search, and it informs all of my strategic decisions.'
            ],
            futureQuestions: [
                'Can I confidently say that my job search is a reflection of my personal strengths, values, and aspirations?',
                'Am I fully utilizing my self-knowledge to create a job search strategy that feels authentic, intentional, and impactful?'
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



 
export default Know;