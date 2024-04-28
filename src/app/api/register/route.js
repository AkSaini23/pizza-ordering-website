import mongoose, { connect } from "mongoose";
import { NextResponse } from "next/server";
import Register from "@/app/models/register";
import connectDB from "@/app/lib/mongodb";

export async function POST(req){
  const body = await req.json();

  try{
    await connectDB();
    const createdUser = await Register.create(body)

    return NextResponse.json(createdUser)
  }
  catch(error){
    if (error instanceof mongoose.Error.ValidationError){
      let errorList = [];
      for (let e in error.errors){
        errorList.push(e.message);
      }
      return NextResponse.json({msg: errorList})
    }else{
    return NextResponse.json( "Unable to Add User")
    }
  }
}