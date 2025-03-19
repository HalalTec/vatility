import { useState } from "react";

import next from '../next-bt.png';
import back from '../previous-bt.png'

const Lead = ({close, msg, submit, quest}) => {
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [

        {
            "score": 1,
            "indication": [
              "No structured lead generation process.",
              "No leads coming in consistently.",
              "No defined sales funnel or process."
            ],
            "reflectiveQuestions": [
              "Do you have a predictable way to generate leads?",
              "Are you relying purely on word-of-mouth or luck for sales?",
              "Have you documented any sales process?"
            ],
            "aspiIndication": [
              "No structured lead generation process.",
              "Sales occur sporadically and depend on referrals or chance encounters.",
              "No clear strategy for acquiring new customers."
            ],
            "futureQuestions": [
              "Am I currently struggling to generate any consistent leads?",
              "In the defined timeframe, do I expect to build a basic system for lead generation?"
            ]
          },
          {
            "score": 2,
            "indication": [
              "Revenue is unpredictable or nonexistent.",
              "Few sporadic leads, mostly referrals.",
              "No clear lead qualification criteria.",
              "No automation or tracking in place."
            ],
            "reflectiveQuestions": [
              "Are your leads coming from a reliable source?",
              "Do you know which leads are most likely to convert?",
              "Are you measuring the success of your lead generation efforts?"
            ],
            "aspiIndication": [
              "Some lead generation efforts exist but are inconsistent.",
              "No automation or predictable sales process.",
              "Heavily dependent on a small network."
            ],
            "futureQuestions": [
              "Do I have any form of lead generation, even if it’s irregular?",
              "In the defined timeframe, do I plan to introduce at least one structured method for attracting new customers?"
            ]
          },
          {
            "score": 3,
            "indication": [
              "Some inconsistent marketing efforts.",
              "Occasional campaigns but no follow-up process.",
              "Sales happen but unpredictably.",
              "No CRM or structured tracking system."
            ],
            "reflectiveQuestions": [
              "Do you actively reach out to new potential customers?",
              "Is your lead pipeline active, or do you have dry spells?",
              "Do you have a follow-up process for potential leads?"
            ],
            "aspiIndication": [
              "Some structured approach to lead generation is in place.",
              "Basic sales tracking exists, but conversion rates are low.",
              "Lead nurturing is limited."
            ],
            "futureQuestions": [
              "Do I currently have a rough idea of how leads come into my business?",
              "In the defined timeframe, do I expect to refine my approach and improve lead tracking?"
            ]
          },
          {
            "score": 4,
            "indication": [
              "Leads come in but are mostly unqualified.",
              "No systematic outreach strategy.",
              "Sales process exists but is inefficient.",
              "Struggle to close deals due to poor lead nurturing."
            ],
            "reflectiveQuestions": [
              "Do you have a process to filter and prioritize leads?",
              "Are you tracking conversion rates?",
              "Is your sales process repeatable and structured?"
            ],
            "aspiIndication": [
              "A few lead generation channels are in place (e.g., social media, networking, partnerships).",
              "Sales process is somewhat defined but inconsistently followed.",
              "Follow-ups are sporadic."
            ],
            "futureQuestions": [
              "Do I have at least two channels for bringing in leads, even if they are not yet optimized?",
              "In the defined timeframe, do I plan to refine my sales process for better results?"
            ]
          },
          {
            "score": 5,
            "indication": [
              "Basic lead generation strategies in place.",
              "Some use of digital marketing or networking.",
              "A simple CRM or tracking system exists.",
              "Inconsistent sales closing rates."
            ],
            "reflectiveQuestions": [
              "Do you know where most of your leads come from?",
              "Are your marketing efforts producing reliable results?",
              "Do you have a method to follow up with leads systematically?"
            ],
            "aspiIndication": [
              "Reliable lead generation channels exist, but conversion is inconsistent.",
              "Some automation tools may be used, but they aren’t fully optimized.",
              "The sales process is repeatable but not scalable."
            ],
            "futureQuestions": [
              "Do I have a sales process that works but is not yet fully predictable or scalable?",
              "In the defined timeframe, do I expect to improve conversion rates and automate some tasks?"
            ]
          },
          {
            "score": 6,
            "indication": [
              "Consistent lead flow but quality varies.",
              "Regular marketing campaigns but limited analytics.",
              "Sales team (or self) has a repeatable process."
            ],
            "reflectiveQuestions": [
              "Are you consistently bringing in new leads?",
              "Do you measure which marketing channels work best?",
              "Are you confident in your ability to close deals?"
            ],
            "aspiIndication": [
              "Lead generation brings in a steady flow of prospects.",
              "Sales team (if applicable) or process is structured.",
              "Follow-ups and nurturing are done consistently."
            ],
            "futureQuestions": [
              "Can I say that I have a steady stream of leads coming in regularly?",
              "In the defined timeframe, do I expect to refine my lead qualification process and optimize my sales pipeline?"
            ]
          },
          {
            "score": 7,
            "indication": [
              "Established lead generation channels.",
              "Sales team (if applicable) follows a structured process.",
              "Lead nurturing and follow-ups in place.",
              "Data-driven improvements are being made."
            ],
            "reflectiveQuestions": [
              "Are you tracking customer journey stages effectively?",
              "Do you have a predictable way to convert leads into sales?",
              "Are you optimizing your sales process based on data?"
            ],
            "aspiIndication": [
              "Multiple lead sources generate consistent prospects.",
              "The sales process is well-documented and followed.",
              "There is a clear sales funnel, and conversion rates are improving."
            ],
            "futureQuestions": [
              "Do I have at least three reliable sources generating quality leads?",
              "In the defined timeframe, do I expect to enhance my conversion rates with more structured follow-ups?"
            ]
          },
          {
            "score": 8,
            "indication": [
              "Strong lead generation strategy with automation.",
              "High conversion rates from leads to customers.",
              "Multiple lead sources (organic, paid, referral, partnerships)."
            ],
            "reflectiveQuestions": [
              "Do you feel confident that your lead generation will sustain your growth?",
              "Are you refining your sales strategies based on insights?",
              "Do you have a clear roadmap for scaling your sales efforts?"
            ],
            "aspiIndication": [
              "High-quality leads are consistently coming in.",
              "Sales process is highly optimized, and automation tools are effectively used.",
              "The business is scaling with a predictable revenue model."
            ],
            "futureQuestions": [
              "Do I have a well-structured sales pipeline with automated components?",
              "In the defined timeframe, do I expect to scale my lead generation efforts without significantly increasing effort?"
            ]
          },
          {
            "score": 9,
            "indication": [
              "Highly efficient lead generation engine.",
              "Sales conversions are high and predictable.",
              "Continuous testing and optimization of marketing strategies.",
              "Strong retention and referral system."
            ],
            "reflectiveQuestions": [
              "Are your sales processes nearly effortless and scalable?",
              "Can you confidently project revenue based on lead flow?",
              "Is your sales process refined for maximum efficiency?"
            ],
            "aspiIndication": [
              "Lead generation is a competitive advantage.",
              "High conversion rates and strong client retention.",
              "The business has predictable revenue and strong sales efficiency."
            ],
            "futureQuestions": [
              "Can I say my sales process is one of the strengths of my business?",
              "In the defined timeframe, do I expect to fine-tune my process to maximize profitability and sustainability?"
            ]
          },
          {
            "score": 10,
            "indication": [
              "Fully optimized lead generation and sales process.",
              "Scalable, automated, and predictable revenue generation.",
              "Industry-leading conversion rates.",
              "High customer retention and word-of-mouth referrals."
            ],
            "reflectiveQuestions": [
              "Have you built a self-sustaining sales engine?",
              "Can you scale your sales without major operational changes?",
              "Are you consistently exceeding sales targets?"
            ],
            "aspiIndication": [
              "Lead generation and sales process are industry-leading.",
              "A proven, scalable model drives business growth.",
              "Sales performance is predictable, and new customers are acquired at an optimal cost."
            ],
            "futureQuestions": [
              "Do I already have a fully optimized and scalable sales engine?",
              "In the defined timeframe, do I expect to dominate my market with an outstanding lead generation and sales system?"
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



 
export default Lead;