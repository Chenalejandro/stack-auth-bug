import { stackServerApp } from "@/stack";
import { ClientComponent } from "./client-component";

export default async function Home() {
  const user = await stackServerApp.getUser();
  if (!user) {
    <main>Please log in</main>;
  }
  return (
    <main>
      <ClientComponent
        user={{ displayName: user?.displayName ?? "" }}
      ></ClientComponent>
    </main>
  );
}
