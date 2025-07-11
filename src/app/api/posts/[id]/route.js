import Post from "@/models/Post"
import { NextResponse } from "next/server"
import connect from "@/utils/db";
 

export const DELETE = async (request,{params})=>{
    const {id}= params;
    try {
       await connect() 
        await Post.findByIdAndDelete(id);
        return new NextResponse("Post deleted successfully", {status:200});
    } catch (error) {
        return new NextResponse("Database Error", {status:500});
    }
}