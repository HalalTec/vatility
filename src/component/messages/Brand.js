import { useState } from "react";

import next from '../next-bt.png';
import back from '../previous-bt.png'

const Brand = ({close, msg, submit, quest}) => {
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
            {
              "score": 1,
              "indication": [
                "No clear brand identity.",
                "No unique value proposition.",
                "No awareness of competitors or market positioning.",
                "Struggles to attract any customers."
              ],
              "reflectiveQuestions": [
                "Do you have a well-defined brand identity?",
                "Can you articulate what makes you different from competitors?",
                "Do potential customers struggle to understand what you offer?"
              ],
              "aspiIndication": [
                "No clear brand identity.",
                "No differentiation from competitors.",
                "Struggling to communicate what makes the business unique."
              ],
              "futureQuestions": [
                "Do I have a unique value proposition?",
                "Can customers easily recognize my brand?",
                "Do I have a consistent message across all channels?"
              ]
            },
            {
              "score": 2,
              "indication": [
                "Very weak or inconsistent branding.",
                "No differentiation strategy in place.",
                "Little to no online or offline visibility.",
                "No customer recognition or recall."
              ],
              "reflectiveQuestions": [
                "Does your business look and feel inconsistent across platforms?",
                "Have you struggled to explain why customers should choose you?",
                "Do customers frequently compare you to competitors without a clear reason to choose you?"
              ],
              "aspiIndication": [
                "Basic logo and name established but little brand presence.",
                "No structured approach to positioning.",
                "Brand messaging is inconsistent."
              ],
              "futureQuestions": [
                "Have I defined my brand's core values?",
                "Are my customers aware of what makes my business different?",
                "Do I have a clear brand story?"
              ]
            },
            {
              "score": 3,
              "indication": [
                "Basic logo and name but no strong branding elements.",
                "No strategic messaging or positioning.",
                "Struggles to communicate differentiation clearly."
              ],
              "reflectiveQuestions": [
                "Have you defined your brand’s core message?",
                "Do customers choose you only because of price, not unique value?",
                "Do you struggle with repeat customers or referrals due to lack of brand recognition?"
              ],
              "aspiIndication": [
                "Some brand awareness exists but not strong.",
                "Struggling to differentiate from competitors.",
                "No customer loyalty towards the brand."
              ],
              "futureQuestions": [
                "Are my brand elements (logo, colors, messaging) recognizable?",
                "Have I positioned my business uniquely in my industry?",
                "Do I know what my ideal customer thinks about my brand?"
              ]
            },
            {
              "score": 4,
              "indication": [
                "Some brand elements in place but inconsistently applied.",
                "No strong emotional or value-driven connection with customers.",
                "Low market visibility."
              ],
              "reflectiveQuestions": [
                "Do you have some branding but struggle with consistency?",
                "Do customers have trouble associating your business with a specific niche or expertise?",
                "Is your business mostly unknown in your target market?"
              ],
              "aspiIndication": [
                "Brand identity defined but weak in execution.",
                "Some differentiation efforts, but not compelling.",
                "Struggling with customer engagement."
              ],
              "futureQuestions": [
                "Do I have a brand style guide?",
                "Are my brand values clearly communicated to my audience?",
                "Is my brand message clear and consistent in all interactions?"
              ]
            },
            {
              "score": 5,
              "indication": [
                "Recognizable brand name but weak market positioning.",
                "Some customers recognize your brand but differentiation is unclear.",
                "Messaging is not clearly focused on unique strengths."
              ],
              "reflectiveQuestions": [
                "Do customers recognize your business name but not your unique strengths?",
                "Do you struggle to communicate a clear reason why people should choose you?",
                "Do you have an online presence that is not actively driving business?"
              ],
              "aspiIndication": [
                "Brand identity is somewhat known in the market.",
                "Some customer loyalty but inconsistent.",
                "Some differentiation from competitors."
              ],
              "futureQuestions": [
                "Are my products/services associated with a specific unique quality?",
                "Do customers refer others to my business because of my brand?",
                "Have I successfully positioned my business in a niche?"
              ]
            },
            {
              "score": 6,
              "indication": [
                "Clear brand identity but still refining differentiation.",
                "Some competitive advantage, but not well articulated.",
                "Some customer loyalty but mostly transactional relationships."
              ],
              "reflectiveQuestions": [
                "Can you describe what makes you different, but struggle to make it resonate with customers?",
                "Do you get repeat customers but lack strong advocacy?",
                "Do competitors overshadow your brand in recognition and trust?"
              ],
              "aspiIndication": [
                "Clear brand message and visual identity.",
                "Recognizable within the industry.",
                "Consistently generating inbound leads from brand awareness."
              ],
              "futureQuestions": [
                "Are my customers emotionally connected to my brand?",
                "Do I actively maintain and strengthen my brand perception?",
                "Have I created a brand promise that I consistently deliver on?"
              ]
            },
            {
              "score": 7,
              "indication": [
                "Strong brand identity and growing differentiation.",
                "Clearly defined value proposition but still improving messaging.",
                "Good customer recognition and some advocacy."
              ],
              "reflectiveQuestions": [
                "Do customers easily understand your unique value?",
                "Are people starting to associate your brand with a specific strength or expertise?",
                "Are you gaining traction in digital marketing or customer engagement?"
              ],
              "aspiIndication": [
                "Strong differentiation from competitors.",
                "Engaged customer base advocating for the brand.",
                "Brand positioning reflected in pricing and perceived value."
              ],
              "futureQuestions": [
                "Do people recognize and trust my brand without explanation?",
                "Am I leveraging customer testimonials and case studies effectively?",
                "Does my brand influence customer buying decisions?"
              ]
            },
            {
              "score": 8,
              "indication": [
                "Well-established brand with clear differentiation.",
                "Strong market positioning and customer recall.",
                "Loyal customer base that advocates for the brand."
              ],
              "reflectiveQuestions": [
                "Do customers immediately recognize and trust your brand?",
                "Do you receive referrals or word-of-mouth recommendations?",
                "Is your brand well-positioned in your industry or niche?"
              ],
              "aspiIndication": [
                "Brand is a trusted authority in its industry.",
                "High customer retention and loyalty.",
                "A well-crafted, compelling brand story."
              ],
              "futureQuestions": [
                "Is my brand synonymous with a key value or quality?",
                "Do I consistently attract my ideal customer profile?",
                "Are my brand values driving business decisions and growth?"
              ]
            },
            {
              "score": 9,
              "indication": [
                "Highly differentiated and dominant in its niche.",
                "Strong competitive advantage that is difficult to replicate.",
                "Industry recognition and credibility."
              ],
              "reflectiveQuestions": [
                "Do competitors acknowledge your brand as a leader?",
                "Are your customers highly engaged and loyal?",
                "Is your brand featured in industry discussions or seen as an authority?"
              ],
              "aspiIndication": [
                "Market leader in the segment with a strong brand presence.",
                "Customers identify emotionally with the brand.",
                "Strong brand equity, with pricing power."
              ],
              "futureQuestions": [
                "Does my brand inspire loyalty beyond price or promotions?",
                "Am I being sought after for partnerships or collaborations because of my brand?",
                "Do I have a strong enough brand that attracts premium customers?"
              ]
            },
            {
              "score": 10,
              "indication": [
                "Industry leader with a dominant and unique brand.",
                "Customers deeply connect with the brand and advocate for it.",
                "Brand commands premium pricing without resistance."
              ],
              "reflectiveQuestions": [
                "Is your brand a recognized leader in your industry?",
                "Do customers willingly pay more because of your brand value?",
                "Does your brand have a strong, lasting emotional connection with customers?"
              ],
              "aspiIndication": [
                "Iconic brand with an industry-wide reputation.",
                "Customers willingly pay a premium for the brand.",
                "Brand presence extends beyond the industry and influences culture."
              ],
              "futureQuestions": [
                "Is my brand considered best-in-class or a benchmark?",
                "Do customers evangelize my brand without incentives?",
                "Have I built a brand that is recognized globally or within my key markets?"
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



 
export default Brand;