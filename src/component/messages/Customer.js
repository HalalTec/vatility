import { useState } from "react";

import next from '../next-bt.png';
import back from '../previous-bt.png'

const Customer = ({close, msg, submit, quest}) => {
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [

            {
              "score": 1,
              "indication": [
                "Frequent customer complaints, low or no repeat customers, poor online reviews, lack of structured customer service process."
              ],
              "reflectiveQuestions": [
                "Have I received complaints but not acted on them?",
                "Do I struggle to retain any customers beyond their first purchase?",
                "Is my customer service reactive rather than proactive?"
              ],
              "aspiIndication": [
                " Frequent customer complaints and low satisfaction scores.",
            "High churn rate with little to no repeat business.",
            "No clear customer service strategy or retention plan.",
            "Customer feedback is ignored or nonexistent."
              ],
              "futureQuestions": [
                "Are customers frequently dissatisfied with your product/service?",
                "Do you lack a structured way to handle complaints or measure customer satisfaction?",
                "Are most of your customers one-time buyers with no repeat business?"
              ]
            },
            {
              "score": 2,
              "indication": [
                "Occasional repeat customers, some positive feedback but mostly neutral or negative, inconsistent follow-ups, lack of customer engagement strategy."
              ],
              "reflectiveQuestions": [
                "Do I rarely engage with customers beyond the initial sale?",
                "Are most of my reviews or feedback neutral or negative?",
                "Do customers leave without giving a reason?"
              ],
              "aspiIndication": [
                "Some customers return, but many do not.",
                "No formal retention strategy, but occasional attempts to improve service.",
                "Response to customer concerns is slow or inconsistent.",
                "Customer experience is not a priority in business decisions."
              ],
              "futureQuestions": [
                "Are you unsure why some customers leave and others stay?",
                "Do you occasionally try to improve customer experience but lack a consistent strategy?",
                "Is customer retention mostly based on luck rather than a structured process?"
              ]
            },
            {
              "score": 3,
              "indication": [
                "Some satisfied customers but no formal loyalty program, slow response times, little to no customer feedback collection, limited personalization."
              ],
              "reflectiveQuestions": [
                "Do I respond to customers only when they reach out?",
                "Is my customer service inconsistent or slow?",
                "Do I lack a structured way to track customer satisfaction?"
              ],
              "aspiIndication": [
                "Recognize that customer experience and retention are key to business growth.",
                "Beginning to track customer feedback informally.",
                "Occasional positive customer interactions but no systematic follow-up.",
                "Some repeat customers, but no formal loyalty-building effort."
              ],
              "futureQuestions": [
                "Are you starting to track and analyze customer feedback?",
                "Do you have repeat customers but no structured effort to increase retention?",
                "Are you beginning to see the impact of customer experience on revenue?"
              ]
            },
            {
              "score": 4,
              "indication": [
                "Some loyal customers but no clear retention strategy, basic customer service processes, occasional proactive engagement, some personalized interactions."
              ],
              "reflectiveQuestions": [
                "Do I occasionally reach out to past customers but without a clear system?",
                "Is my customer retention more by chance than strategy?",
                "Do I have a small but growing number of repeat customers?"
              ],
              "aspiIndication": [
                "Customer complaints are addressed, but response time is inconsistent.",
                "Basic loyalty initiatives (discounts, referral rewards, etc.) are in place.",
                "Some effort to personalize customer interactions, but not systematic.",
                "Customer feedback collection is inconsistent."
              ],
              "futureQuestions": [
                "Are you taking steps to improve customer experience, even if inconsistently?",
                "Do you have some form of loyalty program or retention strategy?",
                "Are you starting to personalize interactions but struggling to do it at scale?"
              ]
            },
            {
              "score": 5,
              "indication": [
                "Growing base of repeat customers, occasional customer appreciation initiatives, developing feedback mechanisms, average response times."
              ],
              "reflectiveQuestions": [
                "Do I make an effort to acknowledge and appreciate loyal customers?",
                "Do I have a process for handling customer feedback?",
                "Do I collect and act on customer feedback regularly?"
              ],
              "aspiIndication": [
                "A defined process for handling customer concerns and complaints.",
                "Basic customer service training for employees.",
                "Regular feedback collection and analysis.",
                "A small but growing base of loyal customers."
              ],
              "futureQuestions": [
                "Do you have a structured process for responding to customer issues?",
                "Are you regularly analyzing customer feedback to improve your service?",
                "Do you have a growing number of repeat customers?"
              ]
            },
            {
              "score": 6,
              "indication": [
                "Steady repeat business, structured but not fully optimized customer service, consistent feedback collection, some personalized follow-ups."
              ],
              "reflectiveQuestions": [
                "Do I offer some form of incentive for repeat business?",
                "Is my customer experience predictable but not yet exceptional?",
                "Do customers praise my business for excellent service?"
              ],
              "aspiIndication": [
                " Customer satisfaction is measured and improving over time.",
                "Proactive customer service approach (resolving issues before they escalate).",
                "Retention strategies are in place and show results.",
                "Customers frequently recommend your business to others."
              ],
              "futureQuestions": [
                "Is customer satisfaction consistently improving in measurable ways?",
                "Are you resolving issues before they become major complaints?",
                "Do customers actively refer your business without being prompted?"
              ]
            },
            {
              "score": 7,
              "indication": [
                "High customer satisfaction scores, efficient response times, active engagement strategies, personalized experiences for repeat customers."
              ],
              "reflectiveQuestions": [
                "Do I actively engage customers beyond transactions?",
                "Is my customer service team (or myself) responsive and effective?",
                "Do I have a structured system that encourages repeat business?"
              ],
              "aspiIndication": [
                "Customers feel valued and actively engage with your brand.",
                "Personalized experiences based on customer preferences.",
                "High retention rates and strong referral traffic.",
                "Customer service is a competitive advantage."
              ],
              "futureQuestions": [
                "Are your customers engaged and interacting with your brand beyond just purchases?",
                "Do you tailor experiences based on customer data and preferences?",
                "Is your retention strategy bringing in consistent revenue growth?"
              ]
            },
            {
              "score": 8,
              "indication": [
                "Strong customer relationships, multiple repeat purchases per customer, structured loyalty and referral programs, active customer advocacy."
              ],
              "reflectiveQuestions": [
                "Do customers refer others to my business?",
                "Do I have a strong base of loyal advocates?",
                "Do customers enthusiastically promote my business?"
              ],
              "aspiIndication": [
                " Customers rave about their experience with your business.",
                "High Net Promoter Score (NPS) and strong word-of-mouth marketing.",
                "Customer interactions feel personal and meaningful at scale.",
                "Regularly exceed customer expectations."
              ],
              "futureQuestions": [
                "Do customers consistently express excitement about your service?",
                "Are you maintaining high referral rates and word-of-mouth marketing?",
                "Are you exceeding customer expectations in meaningful ways?"
              ]
            },
            {
              "score": 9,
              "indication": [
                "Industry-leading customer experience, customers promote the business organically, seamless service, proactive engagement, high retention rates."
              ],
              "reflectiveQuestions": [
                "Do I rarely deal with customer complaints?",
                "Do I have an efficient, seamless experience at every touchpoint?",
                "Is my business known for an outstanding customer experience?"
              ],
              "aspiIndication": [
                "Customers actively promote your brand and identify with it.",
                "Your customer experience model is studied or admired by competitors.",
                "Near-perfect retention rates for ideal customers.",
                "Continuous innovation in how customers are served."
              ],
              "futureQuestions": [
                "Do customers feel emotionally connected to your brand?",
                "Are competitors looking at your customer experience model as a benchmark?",
                "Do you have extremely high retention rates for your best customers?"
              ]
            },
            {
              "score": 10,
              "indication": [
                "Exceptional and highly personalized customer experience, nearly all customers are retained long-term, minimal to no complaints, highly scalable and effective retention strategies."
              ],
              "reflectiveQuestions": [
                "Are customers deeply loyal and willing to pay a premium for my service?",
                "Is my retention strategy so effective that it runs with minimal effort?",
                "If I step away completely, will my business continue thriving?"
              ],
              "aspiIndication": [
                "Your business is considered a gold standard for customer experience in your industry.",
                "Retention is nearly effortless due to deep customer loyalty.",
                "Customer service innovation is a core strength and recognized externally.",
                "Customers don’t just buy; they become brand ambassadors."
              ],
              "futureQuestions": [
                " Is your business known industry-wide for exceptional customer experience?",
                "Do customers stay with your brand long-term without needing retention efforts?",
                "Are your customer service innovations shaping the industry?"
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



 
export default Customer;
