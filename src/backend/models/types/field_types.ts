import mongoose from "mongoose";

export interface FileType extends Document {
    url: string,
    name: string,
    fileType: string,
}
export type PublicFileType = {
    url: string,
    name: string,
    fileType: string,
};
export const FileSchema = new mongoose.Schema<FileType>({
    url: {
        type: String,
        required: true
    },
    fileType: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
});