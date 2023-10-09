import mongoose, { Document, Schema, now } from "mongoose";
import { FileSchema, FileType } from "./types/field_types";
import uniqueValidator from "mongoose-unique-validator";
const categories = ["Plate", "Dona", "Glass", "Thalpose"] as const;

interface Product extends Document {
    title: string,
    shortDesc: string,
    description: string,
    price: number,
    slug: string,
    category: string,
    per: string,
    size: number,
    wholesale_price?: number,
    min_qty?: number,
    quantity: number,
    keywords: string,
    image0: FileType,
    image1?: FileType,
    image2?: FileType,
    image3?: FileType
    image4?: FileType,
    available: boolean,
    createdAt: Date,
}

const productSchema = new mongoose.Schema<Product>({
    title: {
        type: String,
        required: true
    },
    shortDesc: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    wholesale_price: {
        type: Number,
        default: 0,
    },
    min_qty: {
        type: Number,
        default: 0
    },
    price: {
        type: mongoose.SchemaTypes.Number,
        max: 1000,
        min: 1,
        default: 10,
        required: true,
    },
    slug: {
        type: String,
        unique: true,
        trim: true,
        min: 10,
        max: 70,
        required: true,
    },
    category: {
        type: String,
        enum: categories,
        required: true,
    },
    per: {
        type: String,
        enum: ["Piece", "Bundle"],
        default: "Bundle"
    },
    size: {
        type: Number,
        min: 1,
        required: true,
    },
    quantity: {
        type: Number,
        min: 1,
        required: true,
    },
    keywords: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: mongoose.now()
    },

    image0: {
        type: FileSchema,
        required: true,
    },
    image1: {
        type: FileSchema,
        required: false,
    },
    image2: {
        type: FileSchema,
        required: false,
    },
    image3: {
        type: FileSchema,
        required: false,
    },
    image4: {
        type: FileSchema,
        required: false,
    }
});
productSchema.plugin(uniqueValidator);
export const ProductsModel: mongoose.Model<Product> = mongoose.models["product"] || mongoose.model("product", productSchema);

