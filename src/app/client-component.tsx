"use client";

import { useState } from "react";
import { SubmitButton } from "./submit-button";

export function ClientComponent({ user }: { user: { displayName: string } }) {
  const [userName, setUserName] = useState<string>("");
  return (
    <>
      <input
        defaultValue={user?.displayName ?? ""}
        onChange={(event) => setUserName(event.target.value)}
      ></input>
      <SubmitButton userName={userName}>Change user name</SubmitButton>
    </>
  );
}
