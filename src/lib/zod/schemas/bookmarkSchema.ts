import { z } from "zod";

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
  );

export const bookmarkSchema = z.object({
    lastname: z.string({
        required_error: "Nachname ist ein Pflichtfeld",
        invalid_type_error: "Nachname darf keine Zahlen beinhalten",
    }).min(2,{ message: "Geben Sie mindesten 2 Zeichen ein" }),
    firstname: z.string({
        required_error: "Nachname ist ein Pflichtfeld",
        invalid_type_error: "Nachname darf keine Zahlen beinhalten",
    }).min(2,{ message: "Geben Sie mindesten 2 Zeichen ein" }),
    email: z.string({
        required_error: "Email ist ein Pflichtfeld",
    }).email({ message: "Keine gültige Emailadresse" }).min(5, {message: "Minimum 5 Zeichen"}),
    phone: z.string({
        required_error: "Telefon ist ein Pflichtfeld",
    }).regex(phoneRegex, 'Telefonnummer nicht gültig'),
})