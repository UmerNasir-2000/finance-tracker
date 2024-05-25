import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { LoaderCircle } from "lucide-react";

export default function Page() {
  return (
    <>
      <ClerkLoading>
        <LoaderCircle className="animate-spin" />
      </ClerkLoading>
      <ClerkLoaded>
        <div className="min-h-screen flex justify-center items-center">
          <SignIn />
        </div>
      </ClerkLoaded>
    </>
  );
}
