import mongoose from "mongoose";
import { UserInputs, ValidatorTypes } from "../AdminForms/Inputs/InputTypes";

import { ProductsModel } from "@/backend/models/products";

export type TileData = {
    leading?: string | null,
    title: string,
    description: {
        type?: "date",
        key: string
    },
    newbutton?: {
        title: string,
        initialUrl?: string,
        params: {
            key: string,
            value: string
        }[]
    }[]
}


export type ModelType = "none";
export type OneApiModelType = "products";


export const getOneApiUrl = (oneApi: OneApiModelType) => {
    return `/api/admin/oneapi?model=` + oneApi;
}

export interface PageFormData {
    apiURL: string,
    title: string,
    description: string,
    paths: string[],
    folderName?: ModelType | OneApiModelType,
    currentURL: string,
    dynamicRevalidate?: {
        initial: string,
        value: string,
    }[],
    tileData?: TileData,
    validator?: ValidatorTypes,
    userInputs: UserInputs[]
}
export const Models: Record<OneApiModelType, mongoose.Model<any>> = {
    "products": ProductsModel
}

export const PageData: Record<OneApiModelType, PageFormData> = {
    "products": {
        title: "Products",
        description: "These products are shown in Retail and WholeSale page with prices",
        apiURL: getOneApiUrl("products"),
        validator: "products",
        currentURL: "/admin/products",
        dynamicRevalidate: [
            { initial: "/products/", value: "slug" }
        ],
        paths: ['/', "/products"],

        folderName: "products",
        tileData: { title: "title", description: { key: "price" }, leading: "image0" },
        userInputs: [
            { type: "text", required: true, label: "Product Title", name: "title", },
            { type: "text", required: true, label: "Short Description", name: "shortDesc" },
            { type: "textarea", label: "Description", name: "description", required: true },
            { type: "text", label: "Unique Slug", name: "slug", required: true, },

            {
                type: "select", name: "category", optons: [
                    { text: "Plate", value: "Plate" },
                    { text: "Dona", value: "Dona" },
                    { text: "Glass", value: "Glass" },
                    { text: "Thalpose", value: "Thalpose" }
                ]
            },
            {
                type: "select", label: "Product per Piece/Bundle", name: "per", required: true, optons: [
                    { text: "Bundle", value: "Bundle" },
                    { text: "Piece", value: "Piece" },
                ]
            },
            { type: "number", label: "Price", name: "price", required: true, min: 1, max: 1000 },
            {
                type: "info", required: false, markdown: `
\`\`\`


\`\`\`

====== Details of Product if it is available for **Whole Sale** ======
\`\`\`


\`\`\`
`, name: "md"
            },
            { type: "number", label: "Wholesale Price", name: "wholesale_price", required: false, min: 0, max: 1000 },
            { type: "number", label: "Min Quantity to Buy", name: "min_qty", required: false, min: 0, max: 1000 },
            {
                type: "info", required: false, markdown: `
\`\`\`


\`\`\`

================================================
\`\`\`


\`\`\`
`, name: "md"
            },

            { type: "number", label: "Size(inches)", name: "size", required: true, min: 1, max: 1000 },
            { type: "number", label: "Available Quantity", name: "quantity", required: true, min: 1, max: 1000 },
            { type: "keywords", label: "Keywords", name: "keywords", required: true },
            { type: "image", label: "Main Image", name: "image0", required: true, maxHeightOrWidth: "800", maxSize: "0.3" },
            {
                type: "info", name: "info", required: false, markdown:
                    `**Information**
> Below images will be featured in current product page
\n`,
            },
            { type: "image", label: "Featured 1", name: "image1", required: false, maxHeightOrWidth: "800", maxSize: "0.3" },
            { type: "image", label: "Featured 2", name: "image2", required: false, maxHeightOrWidth: "800", maxSize: "0.3" },
            { type: "image", label: "Featured 3", name: "image3", required: false, maxHeightOrWidth: "800", maxSize: "0.3" },
            { type: "image", label: "Featured 4", name: "image4", required: false, maxHeightOrWidth: "800", maxSize: "0.3" },
            { type: "switch", label: "Is Available for Sale?", required: true, name: "available" },

        ]
    },


};
