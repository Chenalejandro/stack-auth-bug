"use client";
import { useUser } from "@stackframe/stack";
import { useState } from "react";
import { SubmitButton } from "./submit-button";

export default function Home() {
  const user = useUser();
  const [userName, setUserName] = useState<string>("");
  return (
    <main>
      <input
        defaultValue={user?.displayName ?? ""}
        onChange={(event) => setUserName(event.target.value)}
      ></input>
      <SubmitButton userName={userName}>Change user name</SubmitButton>
    </main>
  );
}
