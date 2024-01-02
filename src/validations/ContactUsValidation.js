import * as yup from "yup";

export const contactUsValidation = yup.object({
  name: yup.string().required("שם פרטי הוא שדה חובה"),
  email: yup
    .string()
    .email("כתובת דואר אלקטרוני לא חוקית")
    .required("אימייל הוא שדה חובה"),
//   message: yup.string().required("הודעה היא שדה חובה"),
});
