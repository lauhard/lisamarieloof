import type { PageServerLoad } from "./$types";
import { validateFormData } from "$lib/zod/helper/forms";
import type { Actions, Config } from "@sveltejs/kit";
import nodemailer from 'nodemailer';
import { GMAIL_KEY } from "$env/static/private";
// import postmark  from 'postmark';


// export const config: Config = {
//     runtime: 'edge'
// };

export const load: PageServerLoad = async (event) => {
    console.log("loading PageServerLoad USERNAME",GMAIL_KEY)
    
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
            // const transporter = nodemailer.createTransport({
            //     service:'smtp.postmarkapp.com',
            //     port: 587,
            //     secure: false,
            //     auth: {
            //         user: `${USERNAME}`,
            //         pass: `${USERNAME}`,
            //       },

            // });
            
            const transporter = nodemailer.createTransport({
                service:'gmail',
                auth: {
                    user: 'lauhard.andreas@gmail.com',
                    pass: `${GMAIL_KEY}`,
                    },

            });
            const mailOptions = {
                from: 'praxis@lisaloof.com',
                to: 'lauhard.dev@gmail.com', // Change this to your desired email address
                subject: 'New Contact Form Submission',
                text: `
                praxis@lisaloof.com
                `,
            };
            const info = await transporter.sendMail(mailOptions);
            console.log(info);

            // const client = new postmark.ServerClient(`${POSTMARK_USERNAME}`);
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