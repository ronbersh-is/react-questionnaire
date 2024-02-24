export interface Answer{
    id: string;
    title:string;
}

export interface Question{
    id:string;
    title:string;
    options:Answer[];
}

export interface Quiz{
    id:string;
    title:string;
    questions:Question[];
}

export interface rightAnswers{
    quizId:string;
    aswersIds:string[];
}