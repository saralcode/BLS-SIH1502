import { useReactFormState } from "../ShowForm/formstate";

export default function ShowError({name}:{name: string}) {
    const { errors } = useReactFormState();
    if (errors.hasOwnProperty(name)) {
        const error = errors[name as keyof typeof errors];
        return <p className="my-1 first-letter:uppercase text-red-600 px-2 text-lg animate-bounce rounded-md inline-block font-serif ">{error}</p>
    }
    return <></>
}