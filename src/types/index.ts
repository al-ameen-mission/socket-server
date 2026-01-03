export interface StudentRequest {
    exam_group_id: string | number;
    historyId: string | number;
    studentId: string | number;
    questionId: string | number;
    answer: string;
    examdetailsId: string | number;
    endtimestamp?: number;
    
    // Context injected by controller
    answer_path: string; 
    domain: string; 
}
