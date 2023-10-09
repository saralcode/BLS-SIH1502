import mongoose, { Document } from "mongoose";

interface Student extends Document {
    name: string,
    email: string,
}

const studentSchema = new mongoose.Schema<Student>({
    name: {
        type: String,

    },
    email: {
        type: String,
    }

});

export const StudentModel: mongoose.Model<Student> = mongoose.models["student"] || mongoose.model("student", studentSchema);