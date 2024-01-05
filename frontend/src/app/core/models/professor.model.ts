import ICourse from "./course.model";

export interface IProfessor{
    items: IProfessor[];
    id ?:number;
    name: string;
    email:string;
    gender:string;
    courses: ICourse[];
    username :string;
    registrationDate: Date
    
}
