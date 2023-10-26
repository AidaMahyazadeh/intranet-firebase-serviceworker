import ICourse from "./course.model";

export default interface IUser{
    firstname : string ;
    lastname :string ;
    username : string ;
    email : string ;
    password :string ;
    role ?:string;
    enrolledCourse :ICourse[];
}