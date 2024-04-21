import { Formik } from "formik"
import styles from "./FormSubmit.module.css"
import * as Yup from "yup"
import { Notify } from "notiflix"
// import sprite from "../images/sprite.svg"

export const FormSubmit = () => {
    return (
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    bookingDate: '',
                    comment: '',
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string()
                        .min(3, "Must be at least 3 characters")
                        .max(20, "Must be less or equal 20 characters")
                        .required("Name is required"),
                    email: Yup.string().email("Invalid email adress").required("Email is required"),
                    bookingDate: Yup.date().required("Required"),
                    comment: Yup.string().min(3)
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    Notify.success(`Data is successfully submit))))`)
                    resetForm();
                }}>
                
               {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
          isValid,
        } = formik;
        return (
            <div className={styles.container}>
                <h2 className={styles.title_form}>Book your campervan now</h2>
                <p className={styles.text_form}>Stay connected! We are always ready to help you.</p>
                <form onSubmit={handleSubmit} className={styles.form_box}>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    className={errors.name && touched.name ? styles.error_input : styles.input_form}
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.name && touched.name && (
                    <span className={styles.error}>{errors.name}</span>
                  )}
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className={errors.email && touched.email ? styles.error_input : styles.input_form}
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && (
                    <span className={styles.error}>{errors.email}</span>
                    )}
                    <input
                    type="date"
                    name="bookingDate"
                    id="bookingDate"
                    className={errors.bookingDate && touched.bookingDate ? `${styles.error_input} ${styles.date_input}` : `${styles.input_form} ${styles.date_input}`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                        />
                    {errors.bookingDate && touched.bookingDate && (
                    <span className={styles.error}>{errors.bookingDate}</span>
                  )}
                    <input
                    type="textaria"
                    name="comment"
                    id="comment"
                    className={errors.comment && touched.comment ? styles.error_input : styles.input_form}
                    placeholder="Comment"
                    value={values.comment}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                  {errors.comment && touched.comment && (
                    <span className={styles.error}>{errors.comment}</span>
                  )}

                <button
                  type="submit"
                  className={styles.send_button}
                  disabled={!(isValid)}>
                  Send
                </button>
              </form>
            </div>
        );
      }}
                </Formik>
        
    )
}