import { OneApiModelType, TileData } from '@/Admin/PageData/PageData';
import * as yup from 'yup';

const phoneRegExp =
    /^[7896][0-9]{9}$/;

const CommonValidators = {
    "name": yup.string().max(50).required(),
    "phone": yup.string().when({
        is: (p: string) => p.length > 0,
        then: () => yup.string().min(10).max(10).matches(phoneRegExp, "Phone number is not valid")
    })
}

export type ValidatorTypes = OneApiModelType;
const PageSchemas: Record<ValidatorTypes, { [k: string]: yup.StringSchema }> = {
  "products":{}
}

export function getSchema(name?: ValidatorTypes) {

    return yup.object().shape(name ? PageSchemas[name] : {});

}

type InputOptions = {
    text: string,
    value: string
}

export type UserInputs = {
    name: string,
    label?: string,
    required?: boolean,
    disabled?: boolean,
} & ({
    type: "date" | "daterange",
    minDate?: Date,
    maxDate?: Date,
} | {
    type: "select",
    optons: InputOptions[],
} | {
    type: "phone" | "email" | "password" | "switch" | "time" | "file" | "keywords" | "url"
} |
{
    type: "image",
    maxHeightOrWidth: "400" | "800" | "1200" | "1600" | "2000" | "2400" | "2800",
    maxSize: "0.1" | "0.2" | "0.3" | "0.4" | "0.5" | "0.6" | "0.7" | "0.8" | "0.9" | "1" | "1.1" | "1.2" | "1.3" | "1.4" | "1.5" | "1.6" | "1.7" | "1.8" | "1.9" | "2"

} |
{
    type: "text" | "textarea",
    maxLength?: number
} | {
    type: "reference",
    apiUrl: string,
    tileData: TileData
} | {
    type: "number",
    min: number,
    max: number
} | {
    type: "info",
    markdown: string
}
    )

