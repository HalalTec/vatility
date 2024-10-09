const Career = ({question, style}) => {
    
    return ( 
        <>
        
        <div className="question-answer">
            <p style={style} className="pq">
                {question}
            </p>

        </div>
        </>
     );
}
 
export default Career;