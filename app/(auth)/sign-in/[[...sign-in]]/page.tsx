import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { LoaderCircle } from "lucide-react";

export default function Page() {
  return (
    <>
      <ClerkLoading>
        <LoaderCircle className="animate-spin" />
      </ClerkLoading>
      <ClerkLoaded>
        <SignIn />
      </ClerkLoaded>
    </>
  );
}
