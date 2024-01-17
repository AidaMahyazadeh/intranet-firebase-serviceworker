import ICourse from "./course.model";

export interface IProfessor{
    id :number;
    name: string;
    email:string;
    gender:string;
    courses: ICourse[];
    username ?:string;
}