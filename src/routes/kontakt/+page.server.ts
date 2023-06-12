import type { PageServerLoad } from "./$types";
import { validateFormData } from "$lib/zod/helper/forms";
import type { Actions } from "@sveltejs/kit";
import nodemailer from 'nodemailer';
import { GMAIL_KEY, HOSTINGER_MAIL, POSTMARK_USERNAME } from "$env/static/private";
// import postmark  from 'postmark';


// export const config: Config = {
//     runtime: 'edge'
// };

export const load: PageServerLoad = async (event) => {
    return {}    
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
            //         user: `${POSTMARK_USERNAME}`,
            //         pass: `${POSTMARK_USERNAME}`,
            //       },

            // });

            const transporter = nodemailer.createTransport({
                service:'smtp.hostinger.com',
                port: 587,
                secure: false,
                auth: {
                    user: 'praxis@lisaloof.com',
                    pass: `${HOSTINGER_MAIL}`,
                    },

            });

            
            
            // const transporter = nodemailer.createTransport({
            //     service:'gmail',
            //     auth: {
            //         user: 'lauhard.andreas@gmail.com',
            //         pass: `${GMAIL_KEY}`,
            //         },

            // });
            // const mailOptions = {
            //     from: 'praxis@lisaloof.com',
            //     to: 'lauhard.dev@gmail.com', // Change this to your desired email address
            //     subject: 'New Contact Form Submission',
            //     text: `
            //     praxis@lisaloof.com
            //     `,
            // };
            // const transporter = nodemailer.createTransport({
            //     service: 'gmail',
            //     auth: {
            //         user: 'lauhard.andreas@gmail.com',
            //         pass: `${GMAIL_KEY}`
            //     }
            // });
            
            
            
            const options = {
                from: 'lauhard.andreas@gmail.com',
                to: 'lisamarieloof@gmail.com',
                subject: 'hello world',
                text: `
                Email: ${formdata['email']}
                Telefon: ${formdata['phone']}
                Terminanfrage: Kostenloses Erstgespräch
                Paket: Rauchentwöhnung
                Bitte um Rückkruf: ja
                Anmerkung:
                liebe dich
                `,
            };
            const info = await transporter.sendMail(options);
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