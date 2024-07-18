import { ReactNode } from "react";
import { changeNameAction } from "./actions";

export function SubmitButton({
  userName,
  children,
}: {
  userName: string;
  children: ReactNode;
}) {
  return (
    <button onClick={async () => await changeNameAction(userName)}>
      {children}
    </button>
  );
}
