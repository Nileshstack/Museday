import Contact from "@/models/Contact";
import connect from "@/utils/db";
import { NextResponse } from "next/server";
import { sendMessage } from "@/utils/sendMessage";
export const POST =async(request)=>{
const {name,email,message} = await request.json();
await connect();
     const newContact = new Contact(
        {
           name,
           email,
         message,
        }
     )
try {
     await newContact.save()
    await sendMessage({name,email,message})
     return new NextResponse("User has been connected",{
        status:201,
    });
} catch (error) {
    return new NextResponse(error.message,{
        status:500,
    });
}
}