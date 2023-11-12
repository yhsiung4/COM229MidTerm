import { useForm } from "react-hook-form";
import "./hookform.css";

// Employee Registration Form
function EmployeeRegistrationForm() {
 const {
  register,
  handleSubmit,
  formState: { errors },
  } = useForm();

  // Pop-up Alert with information provided + logged to console.
  const onSubmit = (data) => {
  const details = `First Name: ${data.name}\nLast Name: ${data.lastname}\nEmail ID: ${data.emailid}\nMobile Number: ${data.mobilenumber}\n
High School(10th): ${data.highschool}\nHigher School(12th): ${data.higherschool}\nGraduation(Bachelors): ${data.bachelors}\nPost Graduate(Masters): ${data.masters}\nOther: ${data.other}`;

  alert(details);
  console.log(data);
  };
  
  return (
 <div class="center-form">
   <h1>Employee Registration Form </h1>

   <form onSubmit={handleSubmit(onSubmit)} class="col-md-2" className="hook" >
   <label className="hook__text">First Name (Mininum 5 Char)</label>
   <input
    type="name"
    className="hook__input"
    {...register("name", { required: true })}
   />
   {errors.name && (
    <p className="hook__error">Your first name is required.</p>
   )}

   <label className="hook__text">Last Name</label>
   <input
    type="lastname"
    className="hook__input"
    {...register("lastname", { required: true })}
   />
   {errors.lastname && <p className="hook__error">Your last name is required.</p>}

   <label className="hook__text">Email ID</label>
   <input
    type="emailid"
    className="hook__input"
    {...register("emailid", { required: true })}
   />
   {errors.emailid && <p className="hook__error">Your Email ID is required.</p>}
   
   <label className="hook__text">Mobile Number</label>
   <input
    type="mobilenumber"
    className="hook__input"
    {...register("mobilenumber", { required: true })}
   />
   {errors.mobilenumber && <p className="hook__error">Your mobile number is required.</p>}

   <label className="hook__text">Qualification</label>

   <label className="hook__checkbox">
    High School(10th)
    <input
    type="checkbox"
    className="hook__check"
    {...register("highschool")}
    />
   </label>

   <label className="hook__checkbox">
    Higher School(12th)
    <input
    type="checkbox"
    className="hook__check"
    {...register("higherschool")}
    />
   </label>

   <label className="hook__checkbox">
    Graduation(Bachelors)
    <input
    type="checkbox"
    className="hook__check"
    {...register("bachelors")}
    />
   </label>

   <label className="hook__checkbox">
    Post Graduation(Masters)
    <input
    type="checkbox"
    className="hook__check"
    {...register("masters")}
    />
   </label>

   <label className="hook__checkbox">
    Other
    <input
    type="checkbox"
    className="hook__check"
    {...register("other")}
    />
   </label>

   <button className="hook__button" type="submit">
    Submit
   </button>
   <button className="hook__button" type="reset">
    Reset
   </button>

  </form>
 </div>
 );
}

export default EmployeeRegistrationForm;