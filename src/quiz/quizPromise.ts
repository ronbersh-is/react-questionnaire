import { Quiz } from "../model/quiz";
import { quizData,correctAnswerModel } from "../model/model";

export const fakeFetchQuiz= async()=>{
    return new Promise<Quiz>((resolve,reject)=>{
        setTimeout(()=>{
            resolve(quizData);
        },1500);
    });
}

export const fetchAsnwers= async(answersIds:string[],quizId:string)=>{
    return new Promise<any>((resolve,reject)=>{
        setTimeout(()=>{
            const quiz=correctAnswerModel?.quizId===quizId;
            if(quiz){
                const answers=correctAnswerModel?.answersIds;
                let count=0;
                answersIds.forEach((answerId)=>{
                    if(answers?.includes(answerId)){
                        count++;
                    }
                });
                resolve(count);
            }
           
            else{
                reject("No quiz found");
            }
            
        },1000);
    });
}