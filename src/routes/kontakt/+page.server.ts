import type { PageServerLoad } from "./$types";
import { validateFormData } from "$lib/zod/helper/forms";
import type { Actions } from "@sveltejs/kit";
import nodemailer from 'nodemailer';
import postmark  from 'postmark';
import { USERNAME } from "$env/static/private";

export const load: PageServerLoad = async (event) => {
    console.log("loading bookmarks with prisma client...")
    
}

export const actions: Actions = {
    add: async ({request}):Promise<any> => {
        const formdata =  Object.fromEntries(( await request.formData()))
        const validationResponse = validateFormData(formdata);
        const response={
            success:false,
            zodError:{},
            prismaError:""
        }
        if (!validationResponse.success) response.zodError = validationResponse.error;
        else {
            const transporter = nodemailer.createTransport({
                service:'smtp.postmarkapp.com',
                port: 587,
                secure: false,
                auth: {
                    user: `${USERNAME}`,
                    pass: `${USERNAME}`,
                  },

            });
            
            
            const mailOptions = {
                from: 'praxis@lisaloof.com',
                to: 'lauhard.andreas@gmail.com', // Change this to your desired email address
                subject: 'New Contact Form Submission',
                text: `
                praxis@lisaloof.com
                `,
            };
            const info = await transporter.sendMail(mailOptions);
            console.log(info);
            // const client = new postmark.ServerClient("004c29a8-5c5d-47ce-90bb-f8d6f4795927");

            // client.sendEmail({
            //     "From": "praxis@lisaloof.com",
            //     "To": "praxis@lisaloof.com",
            //     "Subject": "Test",
            //     "TextBody": "Hello from Postmark!"
            // });

            
            response.success = true;
        }
        return response
    }
   
    
};