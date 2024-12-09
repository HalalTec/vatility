import { useState } from "react";

import next from '../next-bt.png';
import back from '../previous-bt.png'

const Linkedin = ({close, msg, submit, quest}) => {
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: [
            ' Resume is outdated or poorly formatted.',
            'LinkedIn profile lacks a professional photo.',
            'No tailored applications for job positions.'
          ],
          reflectiveQuestions: [
            'How often do you update your resume?',
            'Does your profile accurately reflect your current skills?',
            'Have you received any feedback on your resume or profile?'
          ],
          aspiIndication: [
            'Resume/LinkedIn profile is incomplete or very basic. No effort has been made to tailor it for job search.'
          ],
          futureQuestions: [
                'Is your resume/LinkedIn profile missing important sections (e.g., experience, skills, summary)?',
                'Have you tailored your profile for specific job roles or industries?',
                'Is the information outdated or irrelevant?'
            ]
        },
        {
            score: 2,
          indication: [
                    '- Few relevant keywords in resume and profile.',
                    'Limited networking or engagement on LinkedIn.',
                    'Lack of quantifiable achievements listed.'
          ],
          reflectiveQuestions: [
            '- Are you aware of the key skills employers are looking for?',
            'How often do you connect with professionals in your field?',
            'Do you struggle to articulate your accomplishments?',
          ],
          aspiIndication: [
                'Minimal content on resume/LinkedIn, with few details on experience or skills. No customization for targeted roles.'
          ],
          futureQuestions: [
                                ' Does your resume/LinkedIn have minimal content or are several sections missing?',
                                'Have you provided limited or unclear descriptions of your past experiences or skills?',
                                "Have you failed to customize your profile for roles you're targeting?"
          ]
        },  

        {
            score: 3,
            indication: [
                'Resume has basic structure but lacks detail.',
                'LinkedIn profile is incomplete or sparse.',
                'Few connections or endorsements on LinkedIn.'
            ],
            reflectiveQuestions: [
                '- What specific areas of your experience do you find hard to express?',
                'Do you regularly post or share content related to your field?',
                'How do you feel about the visibility of your professional brand?'
            ],
            aspiIndication: [
                    'Basic resume and LinkedIn with some job experience listed. Some key skills are included, but the profile lacks a clear narrative or focus.'
            ],
            futureQuestions: [
                'Does your resume/LinkedIn list some job experiences but fail to provide context or focus?',
                "Have you included key skills but have not yet linked them to your achievements?",
                "Do you feel your profile doesn't fully highlight your strengths for the roles you're targeting?"
            ]
        },

        {
            score: 4,
            indication: [
                'Resume includes some relevant information but needs improvement.',
                'LinkedIn profile somewhat reflects your career path.',
                'Some connections, but limited engagement with them.'
            ],
            reflectiveQuestions: [
                'What feedback have you received about your resume?',
                'Are there sections of your profile that you feel need more work?',
                'How often do you reach out to your network for opportunities?'
            ],
            aspiIndication: [
                "Resume/LinkedIn has most sections filled but lacks depth and clarity. The layout is professional, but it's not well-tailored for specific job applications."
            ],
            futureQuestions: [
                'Is your resume/LinkedIn well-organized but lacking detailed descriptions or clarity?',
                'Does your profile need more customization to be aligned with your desired career direction?',
                'Are you still unsure whether your profile represents you well to employers?'
            ]
        },
        {
            score: 5,
            indication: [
                '- Resume is well-structured but could use more personalization.',
                'LinkedIn profile has a professional photo and summary.',
                'Moderate activity on LinkedIn, with some endorsements.'
            ],
            reflectiveQuestions: [
                '- How effectively does your resume convey your unique value?',
                'Does your summary clearly communicate your career goals?',
                'Are you actively seeking endorsements from colleagues?'
            ],
            aspiIndication: [
                'Resume and LinkedIn profile include all necessary sections and are somewhat tailored to targeted roles. Still requires improvement in branding and story.'                
            ],
            futureQuestions: [
                'Is your resume/LinkedIn profile fully filled out but still requires better customization for the roles you want?',
                'Does your profile describe your job experience but could do more to highlight your impact or achievements?',
                'Do you feel your story is not yet as compelling or cohesive as it could be?'
            ]
        },
        {
            score: 6,
            indication: [
                'Resume effectively highlights key skills and experiences.',
                'LinkedIn profile is mostly complete and updated regularly.',
                'Good number of connections and some recommendations.'
            ],
            reflectiveQuestions: [
                'What aspects of your resume do you feel most confident about?',
                'How often do you engage with content on LinkedIn?',
                ' Do you feel comfortable reaching out to connections for advice?'
            ],
            aspiIndication: [
                'Strong resume/LinkedIn with a clear and consistent personal brand, but still lacks measurable achievements. Profile is starting to stand out but lacks polish.'
            ],
            futureQuestions: [
                'Does your resume/LinkedIn have a clear personal brand but lack specific achievements or numbers to back it up?',
                'Have you made significant improvements to the structure and flow of your profile?',
                'Is your profile starting to feel polished but could still be more compelling?'
            ]
        },
        {
            score: 7,
            indication: [
                'Resume tailored for specific job applications with clear achievements.',
                'LinkedIn profile showcases a strong personal brand.',
                'Active participation in relevant groups and discussions on LinkedIn.'
            ],
            reflectiveQuestions: [
                'How do you ensure that each application is tailored to the job description?',
                'What feedback have you received from recruiters about your profile?',
                'How do you utilize LinkedIn to expand your professional network?'
            ],
            aspiIndication: [
                    'Well-rounded, tailored resume and LinkedIn profile with quantifiable achievements. Clear branding, but profile still lacks a strong emotional connection'
            ],
            futureQuestions: [
                'Have you incorporated quantifiable achievements or results in your experience descriptions?',
                'Does your resume/LinkedIn reflect a well-tailored approach to the roles you’re targeting?',
                'Do you feel your profile might still lack an emotional hook that connects with recruiters?'
            ]
        }, {
            score: 8,
            indication: [
                '- Resume consistently receives positive feedback from peers and mentors.',
                'LinkedIn profile includes rich media (e.g., presentations, articles).',
                'Strong network with frequent interactions and collaborations.'
            ],
            reflectiveQuestions: [
                'What strategies do you use to keep your resume current and impactful?',
                'How does your profile reflect your professional journey and aspirations?',
                'In what ways have connections helped advance your career goals?'
            ],
            aspiIndication: [
                'Highly polished, well-branded resume/LinkedIn with a clear focus on value proposition and achievements. Profile is tailored for the exact types of roles you’re seeking.'
            ],
            futureQuestions: [
                'Does your resume/LinkedIn have a highly focused narrative with clear examples of value added to past employers?',
                'Is your profile consistently customized to reflect your target roles and companies?',
                "Are you confident that your resume/LinkedIn speaks directly to the employers you're targeting?"
            ]
        },
        {
            score: 9,
            indication: [
                ' Resume is polished, visually appealing, and highly effective in job applications.',
                'LinkedIn profile is fully optimized for search visibility and engagement.',
                'Regularly mentors others on resume building and networking strategies.'
            ],
            reflectiveQuestions: [
                ' What unique elements set your resume apart from others in your field?',
                'How do you measure the effectiveness of your LinkedIn presence?',
                'What impact have you had on others through sharing your expertise?'
            ],
            aspiIndication: [
                'Exceptional resume and LinkedIn profile that clearly reflects your professional journey, value, and goals. Branding and messaging are aligned with specific industries and roles.'
            ],
            futureQuestions: [
                'Is your resume/LinkedIn exceptional, fully aligning with your career goals and the roles you are targeting?',
                'Does your profile reflect a unique personal brand that sets you apart from other candidates?',
                "Are you confident that your profile will attract the exact types of opportunities you're seeking?"
            ]
        },
        {
            score: 10,
            indication: [
                '- Resume consistently leads to interviews and job offers.',
                'LinkedIn profile reflects a comprehensive professional narrative that attracts opportunities.',
                'Actively contributes to industry discussions, showcasing thought leadership.'
            ],
            reflectiveQuestions: [
                '- What best practices do you follow that contribute to this success?',
                'How do you stay ahead in optimizing your online professional presence?',
                'In what ways have you leveraged LinkedIn for career advancement beyond job searching?'
            ],
            aspiIndication: [
                'Outstanding resume and LinkedIn profile that consistently attracts high-level interest and opportunities. The narrative is flawless, and every section highlights strengths and fits the targeted roles perfectly.'
            ],
            futureQuestions: [
                ' Is your resume/LinkedIn profile consistently attracting high-level interest or opportunities?',
                'Do you feel your personal brand and value proposition are flawlessly conveyed?',
                "Can you confidently say that every section of your profile perfectly aligns with your career aspirations and the roles you're targeting?"
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



 
export default Linkedin;