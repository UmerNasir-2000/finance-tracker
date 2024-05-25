import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { ClerkLoading, ClerkLoaded, SignIn } from "@clerk/nextjs";
import type { PropsWithChildren } from "react";

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <>
      <ClerkLoading>
        <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-[400px] w-[400px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[400px]" />
                <Skeleton className="h-4 w-[400px]" />
              </div>
            </div>
          </div>
          <div className="hidden bg-blue-600 text-white lg:block">
            <div className="h-full flex flex-col justify-center items-center gap-y-4">
              <Image src="/logo.svg" alt="Logo" width={150} height={150} />
              <p className="text-sm">One place to manage it all.</p>
            </div>
          </div>
        </section>
      </ClerkLoading>
      <ClerkLoaded>
        <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center items-center">
            {children}
          </div>
          <div className="hidden bg-blue-600 text-white lg:block">
            <div className="h-full flex flex-col justify-center items-center gap-y-4">
              <Image src="/logo.svg" alt="Logo" width={150} height={150} />
              <p className="text-sm">One place to manage it all.</p>
            </div>
          </div>
        </section>
      </ClerkLoaded>
    </>
  );
}
