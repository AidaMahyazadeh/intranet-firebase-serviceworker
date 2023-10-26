import ILesson from "./lesson.model";

export default interface ICourse {
    id :number;
    name:string;
    author:string;
    duration :string;
    image :string;
    description :string;
    lessons :ILesson[]
    students ?: number;
}