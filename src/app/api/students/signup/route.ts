import connectMongo from "@/backend/connection/connection"
import { StudentModel } from "@/backend/models/students";
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    await connectMongo();
    const students= await StudentModel.find();
    return NextResponse.json(students);
}

export async function POST(req:NextRequest){
    await connectMongo();
    const data = await req.json();
    const student = new StudentModel(data);
    await student.save();
    return NextResponse.json(student);

}