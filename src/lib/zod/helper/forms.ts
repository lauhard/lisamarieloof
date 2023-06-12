import { contactSchema } from "$lib/zod/schemas/contactSchema";
import type { Contact } from "../types/contact";
interface ZODField {
    [key: string]:string
}

export const validate = (e:Event)=> {
    const id:string = (e?.currentTarget as HTMLFormElement).id;
    const value = (e?.currentTarget as HTMLFormElement).value;
    const fieldObj:ZODField={};
    fieldObj[id]=value;
    const res = contactSchema.safeParse(fieldObj)
    let fieldErrors:Array<string>| undefined 
    if (!res.success) {
        const formattedError= res.error.format();
        fieldErrors = formattedError[id as keyof Contact ]?._errors
        console.log("fieldErrors",fieldErrors)
        if(fieldErrors) {
            (e?.currentTarget as HTMLFormElement).setAttribute("aria-invalid", "true")
        }
        else (e?.currentTarget as HTMLFormElement).setAttribute("aria-invalid", "")
    }
    else (e?.currentTarget as HTMLFormElement).setAttribute("aria-invalid", "")
    return fieldErrors?.toString()
}

export const validateFormData = (validationResponse:any) =>{
    const response={
        success:false,
        error:{},
    }
    if (!validationResponse.success) {
        const zodError = validationResponse.error.format();
        console.log("zodError", zodError)
        response.error = zodError;
    } else {
        response.success = true;
    }
    return response;
}