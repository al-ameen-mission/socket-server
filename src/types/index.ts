export interface StudentRequest {
    exam_group_id: string | number;
    historyId: string | number;
    studentId: string | number;
    questionId: string | number;
    answer: string;
    examdetailsId: string | number;
    endtimestamp?: number;
    // Context needed for multitenancy
    answer_path: string; 
    domain: string; 
}

export interface AnswerRecord {
    studentId: string | number;
    questionId: string | number;
    examId?: string | number;
    answer: string;
}
