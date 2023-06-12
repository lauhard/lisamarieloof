import { b as bookmarkSchema } from "../../../chunks/bookmarkSchema.js";
import nodemailer from "nodemailer";
import "postmark";
const validateFormData = (formdata) => {
  const validationResponse = bookmarkSchema.safeParse(formdata);
  const response = {
    success: false,
    error: {}
  };
  if (!validationResponse.success) {
    const zodError = validationResponse.error.format();
    console.log("zodError", zodError);
    response.error = zodError;
  } else {
    response.success = true;
  }
  return response;
};
const USERNAME = "lauha";
const load = async (event) => {
  console.log("loading bookmarks with prisma client...");
};
const actions = {
  add: async ({ request }) => {
    const formdata = Object.fromEntries(await request.formData());
    const validationResponse = validateFormData(formdata);
    const response = {
      success: false,
      zodError: {},
      prismaError: ""
    };
    if (!validationResponse.success)
      response.zodError = validationResponse.error;
    else {
      const transporter = nodemailer.createTransport({
        service: "smtp.postmarkapp.com",
        port: 587,
        secure: false,
        auth: {
          user: `${USERNAME}`,
          pass: `${USERNAME}`
        }
      });
      const mailOptions = {
        from: "praxis@lisaloof.com",
        to: "lauhard.andreas@gmail.com",
        // Change this to your desired email address
        subject: "New Contact Form Submission",
        text: `
                praxis@lisaloof.com
                `
      };
      const info = await transporter.sendMail(mailOptions);
      console.log(info);
      response.success = true;
    }
    return response;
  }
};
export {
  actions,
  load
};
