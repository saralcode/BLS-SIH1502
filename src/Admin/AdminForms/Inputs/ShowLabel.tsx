import { ReactNode } from "react";

export default function Label({ isRequired = false, children }: { isRequired?: boolean, children: ReactNode }) {
    return <label >{children}{isRequired && <span className="text-rose-600 font-extrabold"> * </span>} </label>
}