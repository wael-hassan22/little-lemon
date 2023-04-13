import "./styles/FormStyle.css"
import { useFormik } from "formik";
import { basicSchema } from "../schemas/schema";

const onSubmit = async (values,actions)=> {
        console.log(values)
        console.log(actions)
        await new Promise((res)=> setTimeout(res,1000))       
        actions.resetForm() 
}
const BookingForm = () => {
    const {values, errors, touched ,isSubmitting, handleChange, handleSubmit} = useFormik({
        // Form validation
        initialValues: {
            date: "",
            guest: "",
            occasion: "",
            name:"",
            phone : "",
            email : ""
        },
        validationSchema : basicSchema,
        onSubmit,
      });

  return (
    <div className="form-container"> 
        <form onSubmit={handleSubmit}>
        <fieldset>

          <div className="field">
                <label htmlFor="name" >
                        Your Name
                </label>
                <input 
                        type="text" 
                        id="name" 
                        value={values.name} 
                        onChange={handleChange}
                        className={errors.name && touched.name ? "input-error" : ""}
                        
                        />
                        {errors.name && touched.name && <span  className="error-m">{errors.name}</span>}
          </div>

          <div className="field">
                <label htmlFor="phone" >
                        Phone
                </label>
                <input 
                        type="number" 
                        id="phone" 
                        value={values.phone} 
                        onChange={handleChange}
                        className={errors.phone && touched.phone ? "input-error" : ""}
                        />
                        {errors.phone && touched.phone && <span className="error-m">{errors.phone}</span>}
          </div>    

        <div className="field">
                <label htmlFor="email" >
                        Your Email
                </label>
                <input 
                        type="email" 
                        id="email" 
                        value={values.email} 
                        onChange={handleChange}
                        className={errors.email && touched.email ? "input-error" : ""}
                        />
                        {errors.email && touched.email && <span  className="error-m">{errors.email}</span>}
        </div> 

        <div className="field">
                <label htmlFor="res-date" >
                        Date & Time
                </label>
                <input 
                        type="datetime-local" 
                        name="date"
                        id="res-date" 
                        value={values.date} 
                        onChange={handleChange}
                        // className={errors.date && touched.date ? "input-error" : ""}
                        />
                        {errors.date && touched.date && <span  className="error-m">{errors.date}</span>}
        </div>      
        
        <div className="field">
                <label 
                        htmlFor="guest">
                        Number of guests
                </label>
                <input 
                        type="number" 
                        name="guest"
                        placeholder="1" 
                        min="1" 
                        max="10" 
                        id="guest" 
                        value={values.guest} 
                        onChange={handleChange}
                        className={errors.guest && touched.guest ? "input-error" : ""}
                        />
                        {errors.guest && touched.guest && <span  className="error-m">{errors.guest}</span>}
        </div>

        <div className="field">      
                <label 
                        htmlFor="occasion">
                        Occasion
                </label>
                <select 
                        id="occasion" 
                        name="occasion"
                        value={values.occasion} 
                        onChange={handleChange}
                        className={errors.occasion && touched.occasion ? "input-error" : ""}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                </select>
                {errors.occasion && touched.occasion && <span  className="error-m">{errors.occasion}</span>}
        </div>      
                <button type="submit" disabled={isSubmitting}>Make Your Reservison</button>
                </fieldset>
        </form>
    </div>
  )
}

export default BookingForm