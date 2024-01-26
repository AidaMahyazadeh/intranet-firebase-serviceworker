import ICourse from "./course.model";

export interface IProfessor{
<<<<<<< HEAD
    items: IProfessor[];
    id ?:number;
=======
    id :number;
>>>>>>> 79d05ba907c8d560ab9403872de3b058181c5c46
    name: string;
    email:string;
    gender:string;
    courses: ICourse[];
    username :string;
    registrationDate: Date
    
}
