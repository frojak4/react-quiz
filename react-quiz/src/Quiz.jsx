import {useState, useEffect} from 'react';
import questionsJSON from './questions.json';




function Quiz(){
 
    
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [points, setPoints] = useState(0);

    useEffect(() => {
        setQuestions(questionsJSON);
    }, []);

    useEffect(() => {
        if (questions.length > 0){
            let randomNumber = Math.floor(Math.random() * questions.length);
            setCurrentQuestion(questions[randomNumber]);
    }
    }, [questions])

    function answerQuestion(number){
        if(currentQuestion.correctAnswer === number){
            setPoints(p => p + 1)
        }
        newQuestion();
    }

    function newQuestion() {
        let randomNumber = Math.floor(Math.random() * questions.length);
        setCurrentQuestion(questions[randomNumber]);
    }

    if (!currentQuestion){
        return(<div>Loading...</div>)
    } else {
    return(
        <>
            <div className="container">
                <div className="question">{currentQuestion.text} {points}</div>
                <div className="answer-container">
                    <div className="answer" onClick={() => answerQuestion(1)}>{currentQuestion.answerOne}</div>
                    <div className="answer" onClick={() => answerQuestion(2)}>{currentQuestion.answerTwo}</div>
                    <div className="answer" onClick={() => answerQuestion(3)}>{currentQuestion.answerThree}</div>
                    <div className="answer" onClick={() => answerQuestion(4)}>{currentQuestion.answerFour}</div>
                </div>
            </div>
        </>
    )
}
}

export default Quiz