import { useReactFormState } from "../../ShowForm/formstate";

export default function SwitchInput({ name, label }: { name: string, label: string }) {
    const { formValues, loading } = useReactFormState();
    if (loading) {
        return <></>
    }
    const register = formValues?.control.register!;
    return <div className="flex items-center gap-4 my-2">
        <label className="relative flex">
            <input type="checkbox" className="sr-only peer" {...register(name)} />
            <div className="w-11 h-6 ring-4 ring-blue-400 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
        <span className="ml-3 text-sm font-medium">{label}</span>
    </div>
}