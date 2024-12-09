import { useState } from "react";

import next from '../next-bt.png';
import back from '../previous-bt.png'

const Interview = ({close, msg, submit, quest}) => {
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: [
            ' I feel completely unprepared for interviews.',
            'I have no strategies for negotiating offers.',
            'I avoid interview situations at all costs.'
          ],
          reflectiveQuestions: [
            ' What specific aspects of interview preparation do you find most challenging?',
            'How often do you practice interview skills?',
            'What fears do you have about negotiating offers?'
          ],
          aspiIndication: [
            'Minimal to no preparation for interviews. ',
            'Has difficulty communicating qualifications clearly.', 
            'Struggles to understand the job requirements and company culture.'
          ],
          futureQuestions: [
                'Do I feel entirely unprepared or anxious when facing interviews?',
                'Do I lack confidence in answering basic interview questions?',
                'Have I avoided preparing for common interview scenarios?'
            ]
        },
        {
            score: 2,
          indication: [
                    ' I have minimal knowledge about the interview process.',
                'I struggle to articulate my strengths and experiences.',
                'I feel anxious when thinking about negotiating salary.'
          ],
          reflectiveQuestions: [
            ' What resources have you used to learn about interviews?',
            'How confident are you in discussing your qualifications?',
            'What steps can you take to reduce anxiety around negotiation?',
          ],
          aspiIndication: [
                'Some awareness of interview questions but little preparation.',
                'Limited understanding of how to research a company or position.',
                'No strategy for negotiation.'
          ],
          futureQuestions: [
                                'Do I find myself guessing answers or relying on improvisation?',
                                'Am I unsure of how to align my experience with the job description?',
                                'Have I avoided thinking about salary, benefits, or role expectations?'
          ]
        },  

        {
            score: 3,
            indication: [
                ' I have some basic understanding of interviews but lack practice.',
                'I can answer common questions but not confidently.',
                'I know negotiation is important but don’t know how to start.'
            ],
            reflectiveQuestions: [
                'How many mock interviews have you participated in recently?',
                'What feedback have you received on your interview skills?',
                'Have you researched negotiation tactics?'
            ],
            aspiIndication: [

                    'Basic research on job requirements and company.',
                    'Answers basic interview questions with some difficulty.',
                    'Occasionally tries to prepare, but no consistent approach.'
            ],
            futureQuestions: [
                'Do I have a general understanding of the job role but still feel unclear about expectations?',
                'Do I struggle to convey my strengths in a concise way during interviews?',
                'Do I sometimes fail to follow through with thorough interview prep?'
            ]
        },

        {
            score: 4,
            indication: [
                ' I prepare for interviews but still feel unconfident.',
                'I can discuss my experiences but often falter under pressure.',
                'I have a vague idea of salary expectations but lack clarity.'
            ],
            reflectiveQuestions: [
                'What specific areas do you feel less confident in during interviews?',
                'How do you handle unexpected questions during interviews?',
                'Have you practiced salary discussions with someone?'
            ],
            aspiIndication: [
                'Some preparation with a focus on typical questions and answers.',
                'Can somewhat communicate qualifications, but lacks confidence.',
                'Minimal research on company culture or industry trends.'
            ],
            futureQuestions: [
                'Have I reviewed common interview questions, but still feel uncertain in responses?',
                'Do I hesitate to discuss my qualifications or experience fully?',
                'Do I rarely customize my responses based on the company’s culture or needs?'
            ]
        },
        {
            score: 5,
            indication: [
                ' I feel somewhat prepared but still need improvement.',
                'I can answer most questions but struggle with behavioral ones.',
                'I understand negotiation basics but hesitate to apply them.'
            ],
            reflectiveQuestions: [
                'What strategies do you use to prepare for behavioral questions?',
                'How do you assess your worth before a negotiation?',
                'What has been your experience with past negotiations?'
            ],
            aspiIndication: [
                'Regular preparation with structured responses to common questions.',
                'Researches job position, but may not deeply understand the company’s vision or values.',
                'Has a basic negotiation mindset but lacks strategy.'                
                            ],
            futureQuestions: [
                'Do I prepare adequately, but still experience anxiety or self-doubt in interviews?',
                'Do I feel confident in most interviews but could still use more preparation on company specifics?',
                'Have I avoided discussions around salary or benefits?'
            ]
        },
        {
            score: 6,
            indication: [
                'I have a good grasp of interview techniques and strategies.',
                'I can articulate my value well, though not always effectively.',
                'I am beginning to negotiate but lack confidence in doing so.'
            ],
            reflectiveQuestions: [
                'How do you prepare for different types of interviews (e.g., phone, in-person)?',
                'What techniques help you communicate your value during interviews?',
                'What would make you feel more confident in negotiations?'
            ],
            aspiIndication: [
                'Consistent preparation and rehearsal for interviews.',
                'Can clearly communicate qualifications and experience.',
                'Begins researching company values, industry trends, and potential interviewers.'
            ],
            futureQuestions: [
                'Do I feel more confident in answering questions, but still have moments of uncertainty?',
                'Am I able to explain my skills and experience effectively during interviews, but sometimes struggle with complex questions?',
                'Do I spend time researching company culture and its values to align my responses?'
            ]
        },
        {
            score: 7,
            indication: [
                ' I feel competent in my interview skills and preparation.',
                'I can handle most questions with ease and confidence.',
                'I actively seek out negotiation opportunities and practice them.'
            ],
            reflectiveQuestions: [
                'How often do you seek feedback on your interview performance?',
                'What resources do you use to stay updated on negotiation trends?',
                'How do you celebrate your successes in interviews or negotiations?'
            ],
            aspiIndication: [
                    'Thorough preparation for most types of interviews.',
                    'Can tailor responses to align with company values, job descriptions, and cultural fit.',
                    'Has developed a basic negotiation strategy for salary and benefits.'
            ],
            futureQuestions: [
                'Do I feel confident answering most questions and handling situational or behavioral questions?', 
                'Can I adapt my responses to highlight my fit for the company and position?',
                'Do I have a basic strategy in mind for discussing salary and benefits, but feel unsure about negotiating?'
            ]
        }, {
            score: 8,
            indication: [
                'I am well-prepared and confident going into interviews.',
                'My responses are clear and impactful during discussions.',
                'I negotiate effectively and feel good about my outcomes.'
            ],
            reflectiveQuestions: [
                'What specific preparation techniques have worked best for you?',
                'How do you maintain composure during high-pressure situations?',
                'What are your go-to strategies for successful negotiations?'
            ],
            aspiIndication: [
           
                    'Very detailed preparation including mock interviews and company research.',
                    'Can confidently answer both common and difficult questions, with clear alignment to the job and company.',
                    'Strong understanding of negotiation tactics and able to articulate value.'
            ],
            futureQuestions: [
                'Do I prepare by simulating interviews and practicing multiple response scenarios to build confidence?', 
                'Do I feel confident addressing a wide range of questions, with clear alignment to my skills and experience?',
                'Am I prepared to negotiate salary, benefits, and other terms based on a clear understanding of my value and market standards?'
            ]
        },
        {
            score: 9,
            indication: [
                ' I excel in interviews and receive positive feedback consistently.',
                'My negotiation skills lead to favorable outcomes regularly.',
                "I'm often sought out for advice on interview preparation by peers."
            ],
            reflectiveQuestions: [
                ' How do you keep improving your interview skills over time?',
                'What advanced techniques do you use in negotiations?',
                'How do you mentor others in their job search process?'
            ],
            aspiIndication: [
                'Expert-level preparation with comprehensive research and multiple practice sessions.',
                'Can respond confidently to any interview question, even under pressure.',
                'Negotiation approach is proactive and tailored to each offer, ensuring mutual benefit.'
            ],
            futureQuestions: [
                'Do I thoroughly research the company, industry, and role, and engage in multiple practice interviews with feedback?',
                'Do I feel confident handling unexpected questions or challenging interview scenarios with ease?',
                'Am I confident in negotiating not only salary but also benefits, work-life balance, and career growth opportunities?'
            ]
        },
        {
            score: 10,
            indication: [
                'I am a master at interviewing and negotiating; it feels effortless.',
                "My preparation is thorough, and I'm always ahead of the curve.",
                'Others frequently seek my expertise in these areas.'
            ],
            reflectiveQuestions: [
                'What drives your passion for mastering interview techniques?',
                'How do you stay motivated to refine your skills continuously?',
                'In what ways do you give back to the community regarding job search support?'
            ],
            aspiIndication: [
                'Mastered the interview process, showcasing expert communication and insight into the job.',
                'Uses tailored strategies for every job application, showcasing impeccable understanding of the market.',
                'Skilled negotiator, able to secure offers that align with personal and professional goals.'
            ],
            futureQuestions: [
                'Do I consistently impress interviewers with my in-depth knowledge of the company, position, and my clear alignment with their needs?',
                'Have I perfected my ability to negotiate with confidence and tact, ensuring optimal outcomes for both myself and my employer?',
                'Am I able to negotiate every aspect of a job offer to ensure it meets my personal and professional needs in the long term?'
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


 
export default Interview;