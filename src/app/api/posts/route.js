import Post from "@/models/Post"
import { NextResponse } from "next/server"
import connect from "@/utils/db";

export const GET = async (request)=>{
    const url = new URL(request.url)
    const username=url.searchParams.get("username")
    try {
       await connect() 
        const posts=await Post.find(username &&{username})
        return new NextResponse(JSON.stringify(posts), {status:200});
    } catch (error) {
        return new NextResponse("Database Error", {status:500});
    }
}

export const POST = async (request)=>{
    const body =  await request.json()
    const newPost = new Post(body)
    try {
       await connect() 
       await newPost.save()
        return new NextResponse("Post Has been Created", {status:201});
    } catch (error) {
        return new NextResponse("Database Error", {status:500});
    }
}