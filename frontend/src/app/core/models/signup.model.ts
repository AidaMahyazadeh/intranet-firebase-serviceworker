import { FormControl } from "@angular/forms";
import ICourse from "./course.model";

// export default interface ISignUpForm {
//     firstname : FormControl<string>;
//     lastname : FormControl<string> ;
//     username :  FormControl<string> ;
//     email :  FormControl<string> ;
//     password ?: FormControl<string> ;
//     role : FormControl<'student'>;
//     enrolledCourse ?:FormControl<ICourse[]>;
// }
export default interface ISignUpForm {
    firstname :string;
    lastname : string ;
    username :  string ;
    email :  string ;
    password ?: string ;
    role : string;
    enrolledCourse ?:ICourse[];
}