export interface StudentRequest {
    egId: string | number;
    hId: string | number;
    sId: string | number;
    qId: string | number;
    ans: string;
    eId: string | number;
    edId: string | number;
    endtimestamp?: number;
    
    // Context injected by controller
    answer_path: string; 
    domain: string; 
}
