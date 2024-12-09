import { useState } from "react";

import next from '../next-bt.png';
import back from '../previous-bt.png'

const Research = ({close, msg, submit, quest}) => {
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: [
            'Minimal understanding of job search strategies.',
            'No active research on potential employers or industries.',
            'Lack of engagement in networking opportunities.'
          ],
          reflectiveQuestions: [
            ' How often do you actively seek information about job opportunities?',
            'Are you aware of the skills and qualifications required for your desired roles?',
            'Do you feel overwhelmed by the job search process?'
          ],
          aspiIndication: [
            'I have not started researching job opportunities.'
          ],
          futureQuestions: [
                'Have I explored potential industries or roles I could consider?',
                'Do I have a basic understanding of the companies or job positions I am interested in?'
            ]
        },
        {
            score: 2,
          indication: [
                    '  Limited research conducted on job roles.',
                    'Rarely updates resume or LinkedIn profile.',
                    'Few connections in relevant professional networks.'
          ],
          reflectiveQuestions: [
            ' What specific job roles have you researched recently?',
            'How confident do you feel about your online professional presence?',
            'Are you leveraging your network to gather job market insights?',
          ],
          aspiIndication: [
                'I have started looking into job openings but have not conducted detailed research.'
          ],
          futureQuestions: [
                                'Have I identified a few companies or job positions that align with my skills?',
                                'How well do I know the key skills required for the roles I am exploring?'
          ]
        },  

        {
            score: 3,
            indication: [
                'Some basic research done but lacks depth.',
                'Infrequent participation in industry-related events.',
                'Limited awareness of job market trends.'
            ],
            reflectiveQuestions: [
                'What resources do you use to gather information about job opportunities?',
                'How often do you attend networking events or webinars?',
                'Are you following industry leaders or organizations on social media?'
            ],
            aspiIndication: [
                    'I have done some basic research on job roles but still need to refine my focus.'
            ],
            futureQuestions: [
                'Do I have a general idea of the industries I’m interested in?',
                'Have I explored basic job descriptions and requirements for my field?'
            ]
        },

        {
            score: 4,
            indication: [
                'Conducts research occasionally but not systematically.',
                'Engages with some professional groups online.',
                'Understands basic job market dynamics.'
            ],
            reflectiveQuestions: [
                'How regularly do you set aside time for job research each week?',
                'What tools or platforms do you find most useful for your research?',
                'Are you comfortable discussing your findings with others?'
            ],
            aspiIndication: [
                'I’ve begun identifying industries and roles, but I need to dive deeper into specific companies.'
            ],
            futureQuestions: [
                'How familiar am I with the companies I want to apply to?',
                'Have I made a list of key organizations where I could potentially work?'
            ]
        },
        {
            score: 5,
            indication: [
                'Regularly researches potential employers and roles.',
                'Participates in some networking activities.',
                'Has a general understanding of market demands.'
            ],
            reflectiveQuestions: [
                'What specific companies are you interested in and why?',
                "How do you track the information you've gathered about job opportunities?",
                'Are you reaching out to professionals in your field for insights?'
            ],
            aspiIndication: [
                'I’ve started researching key companies and the job market in my field, but there’s room to improve.'                
            ],
            futureQuestions: [
                'Do I understand the market trends and demands for my field?',
                'How well do I know the major players in my industry?'
            ]
        },
        {
            score: 6,
            indication: [
                ' Proactively seeks out information about industries and roles.',
                'Actively engages in networking and informational interviews.',
                'Keeps resume and LinkedIn updated regularly.'
            ],
            reflectiveQuestions: [
                'How do you prioritize which companies or roles to research first?',
                'What feedback have you received from networking contacts regarding your approach?',
                "Are there particular challenges you've encountered during your research?"
            ],
            aspiIndication: [
                'I’ve conducted research into specific companies and roles and understand the key trends and expectations in my field.'
            ],
            futureQuestions: [
                'Have I researched the values and culture of companies I am targeting?',
                'Do I have a list of resources, reports, or websites that provide up-to-date industry news?'
            ]
        },
        {
            score: 7,
            indication: [
                'Conducts thorough research on multiple companies and roles.',
                'Regularly attends industry events and webinars.',
                'Actively engages with professional communities online.'
            ],
            reflectiveQuestions: [
                ' What methods do you use to evaluate potential employers?',
                'How often do you update your research based on new information?',
                'Have you identified any gaps in your knowledge about your target industry?'
            ],
            aspiIndication: [
                    'I am actively researching top companies and understanding their hiring processes.'
            ],
            futureQuestions: [
                'Have I tailored my research to include insights on company cultures, leadership, and key stakeholders?',
                'How familiar am I with the hiring timelines and strategies of companies I’m interested in?'
            ]
        }, {
            score: 8,
            indication: [
                'Deep understanding of various industries and roles.',
                'Strong network of contacts for information gathering.',
                'Actively shares insights with peers'
            ],
            reflectiveQuestions: [
                'How do you ensure that your research remains relevant and up-to-date?',
                'In what ways do you contribute to discussions within your professional network?',
                'What strategies have helped improve your research effectiveness?'
            ],
            aspiIndication: [
                'I am consistently researching job opportunities, company cultures, and the trends shaping my industry.'
            ],
            futureQuestions: [
                'Am I regularly updating my research on potential employers and positions?',
                'Have I identified key networking opportunities or informational interviews that will deepen my understanding of the market?'
            ]
        },
        {
            score: 9,
            indication: [
                'Comprehensive knowledge of job market trends and employer expectations.',
                'Regularly mentors others in effective job search strategies.',
                'Consistently engages with industry thought leaders.'
            ],
            reflectiveQuestions: [
                'How do you stay informed about changes in your field or industry?',
                'What impact has your research had on your job search success so far?',
                "Are there areas where you'd like to deepen your knowledge further?"
            ],
            aspiIndication: [
                'I have a comprehensive understanding of my target industry, companies, and roles, including their challenges and opportunities.'
            ],
            futureQuestions: [
                'Can I confidently speak about the challenges and opportunities within my target companies and industry?',
                'Have I used my research to tailor my resume and cover letters to specific companies or roles?'
            ]
        },
        {
            score: 10,
            indication: [
                'Expert-level understanding of the job market and strategic networking.',
                'Actively contributes to industry discussions and thought leadership.',
                'Highly sought after for insights on job search strategies.'
            ],
            reflectiveQuestions: [
                'How do you leverage your expertise to help others in their job searches?',
                'What innovative approaches have you developed for researching opportunities?',
                'How do you measure the success of your research efforts?'
            ],
            aspiIndication: [
                'I am deeply knowledgeable about the job market, including specific employers, industry trends, and hiring processes, and am actively applying my insights.'
            ],
            futureQuestions: [
                ' Do I know where to find the latest industry reports and trends?',
                'Have I mapped out my next steps based on deep insights into the companies and roles I am targeting?'
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



 
export default Research;