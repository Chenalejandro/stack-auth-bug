"use server";

import { stackServerApp } from "@/stack";
import { revalidatePath } from "next/cache";

export async function changeNameAction(newUserName: string) {
  const user = await stackServerApp.getUser();

  user?.setDisplayName(newUserName);
  revalidatePath("/");
}
