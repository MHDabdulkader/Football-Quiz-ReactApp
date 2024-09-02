import { useState } from 'react'

import DataSet from './DataSet'

function App() {

    const CurrentDataset = DataSet();
    const [index, setIndex] = useState(0);
    const [select, SetSelected] = useState([]);
    const [choose, setChoose] = useState("");
    const [correct, setCorrect] = useState(0);
    const [wrong, setWrong] = useState(0);
    const [result, setResult] = useState(false);

    function handleChoose(option) {
        setChoose(option);
    }
    console.log(choose)
    const currentQuestion = CurrentDataset[index];
    // console.log(currentQuestion);

    function handleQuestionDisplay() {
        if (index < CurrentDataset.length - 1) {
            SetSelected([
                ...select,
                {
                    question: currentQuestion.question,
                    correctAnswer: currentQuestion.answer,
                    explain: currentQuestion.explanation,
                    selectAnswer: choose,
                    isCorrectd: choose === currentQuestion.answer
                }
            ])

            if (choose === currentQuestion.answer) {
                console.log("Correct");
                setCorrect(correct + 1);
            }
            else {
                console.log("wrong");
                setWrong(wrong + 1);
            }
            // setChoose("");
            // console.log("Handle " ,currentQuestion.answer ===choose)
            setIndex(index + 1);
        }
        else {
            setResult(true);
        }

    }
    console.log(select);
    // console.log(CurrentDataset.options);
    return (
        <div className='bg-gray-50 p-10 space-y-1'>
            {result === true ?
                <div className='max-w-xl mx-auto space-y-1'>
                    <h1 className='bg-green-300 flex justify-center content-center py-2 border-green-500 border'>Correct Answer: {correct}</h1>
                    <h1 className='bg-red-300 flex justify-center content-center py-2 border-red-500 border'>Wrong Answer: {wrong}</h1>
                    {/* Explaination */}
                    <div>
                        {
                            select.map((item, i) => (
                                <div
                                    className='bg-orange-200 space-y-1 border border-orange-400 p-3'
                                    key={i}>
                                    <h1 className='bg-slate-50 px-1 py-2 font-semibold'> <span className='text-red-600 font-bold'>{i + 1}</span> {item.question}</h1>
                                    <h1 className='bg-blue-200 p-1 flex justify-center content-center'>{item.correctAnswer}</h1>
                                    <h1 className='bg-blue-200 p-1 flex justify-center content-center'>{item.selectAnswer}</h1>
                                    {item.isCorrectd === true ?
                                        <h1 className='bg-green-300 p-1 flex justify-center content-center'>Correct</h1>

                                        :
                                        <h1 className='bg-red-300 p-1 flex justify-center content-center'> Wrong</h1>
                                    }
                                    <h1 className='text-gray-950 p-1 font-bold'>Explanation:</h1>
                                    <p className='bg-white p-2 text-gray-600'>{item.explain}</p>
                                    {/* <h1 className='{item.isCorrectd === true? "b}'>{item.isCorrectd === true ?"Correct": "Wrong"}</h1> */}

                                </div>
                            ))
                        }

                    </div>
                </div>

                :

                <div className='max-w-xl mx-auto'>
                    <div>
                        <h1>{currentQuestion.question}</h1>
                        <ul className='mt-2 space-y-1'>
                            {currentQuestion.options.map((option, i) => (
                                <li
                                    onClick={
                                        (() => handleChoose(option))
                                    }
                                    className='bg-green-200 border border-green-400 px-3 py-2 rounded-lg hover:bg-green-500 cursor-pointer' key={i}>{option}</li>
                            ))}
                        </ul>
                    </div>


                    <div className='flex'>
                        {/* <button className='bg-'> Previous</button> */}
                        <button

                            onClick={handleQuestionDisplay}
                            className='bg-yellow-600 px-1 py-2 w-full mt-2 rounded-md'>Next</button>
                    </div>
                </div>
            }



        </div>
    )
}

export default App
