import * as yup from "yup";
export const prePaymentsValidation = yup.object().shape({
  selectedPaymentType: yup
    .object()
    .nullable(false).required("חובה לבחור")
    .typeError("בחירה שגויה")
    .shape({
      label: yup.string().required("שדה חובה!"),
    }),
    budget: yup
    .number("מספרים בלבד!")
    .typeError("מספרים בלבד!")
    .moreThan(0, "מספר חיובי בלבד!")
    .max(3600, "סכום הטיפ יכול להיות עד 3600 ₪")
    .required("שדה חובה!"),
});
