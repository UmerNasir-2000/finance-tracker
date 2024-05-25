import { ClerkLoaded, ClerkLoading, SignUp } from "@clerk/nextjs";
import { LoaderCircle } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <ClerkLoading>
        <LoaderCircle className="animate-spin" />
      </ClerkLoading>
      <ClerkLoaded>
        <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center items-center">
            <SignUp />
          </div>
          <div className="hidden bg-blue-600 text-white lg:block">
            <div className="h-full flex flex-col justify-center items-center gap-y-4">
              <Image src="/logo.svg" alt="Logo" width={200} height={200} />
              <p className="text-sm">One place to manage it all.</p>
            </div>
          </div>
        </section>
      </ClerkLoaded>
    </>
  );
}
