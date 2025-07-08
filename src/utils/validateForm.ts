import type { FormContactType } from "../types/ContactType";
import { configEmail } from "../assets/config";


export function verifEmail(email: string) {
    return configEmail.regex.test(email);
};
export function htmlSpecialChar (str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};
export function validateForm (formValues: FormContactType) {
    const validateEmail= verifEmail(formValues.email);
    if(!validateEmail)
    formValues.name = htmlSpecialChar(formValues.name);
    formValues.surname = htmlSpecialChar(formValues.surname);
    formValues.email = htmlSpecialChar(formValues.email);
    formValues.society = htmlSpecialChar(formValues.society);
    formValues.message = htmlSpecialChar(formValues.message);
    
}