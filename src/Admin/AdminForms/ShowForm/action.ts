"use server"

import { revalidatePath } from "next/cache"

export async function ServerAction(paths: string[]) {
    for (let index = 0; index < paths.length; index++) {
        revalidatePath(paths[index]);
    }
}