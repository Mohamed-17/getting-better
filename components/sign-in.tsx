import { ArrowUpRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { signIn } from "@/auth";
import Image from "next/image";

export async function SignInButton() {
  return (
    <form
      className="flex flex-col items-start gap-8 sm:flex-row"
      action={async () => {
        "use server";
        await signIn("google", { callbackUrl: "/" });
      }}
    >
      <div className="flex items-start gap-2">
        <Button
          size="sm"
          variant="default"
          type="submit"
          className="cursor-pointer"
        >
          Sign In with Google
        </Button>
        <Button
          size="icon-sm"
          aria-label="Submit"
          variant="default"
          className="cursor-pointer"
        >
          <Image
            src={"/google.png"}
            alt="Google_logo"
            width={200}
            height={200}
            className="object-contain w-3.5"
          />
        </Button>
      </div>
    </form>
  );
}
