import { useState } from 'react'
import { FieldValues, UseFormReturn, useForm } from 'react-hook-form'
import { create } from 'zustand'
interface StringMap { [key: string]: string; }

interface ReactFormState {
    loading: boolean,
    errors: StringMap,

    formValues: UseFormReturn<FieldValues, any, undefined> | null,
    setFormValues: (data: UseFormReturn<FieldValues, any, undefined>) => void;
    setErrors: (errors: StringMap) => void;

}

export const useReactFormState = create<ReactFormState>()((set) => ({
    formValues: null, errors: {}, loading: true, setFormValues(data) {
        set({ formValues: data, loading: false }, false);
    },
    setErrors(errors) {
        set({ errors: errors }, false);
    },

}))