import React from "react";
import { SignInButton } from "./sign-in";
import { Field, FieldContent, FieldGroup, FieldLegend } from "./ui/field";
import { auth } from "@/auth";
import { UserForm } from "./UserForm";
import LogoutButton from "./LogoutButton";
async function SignForm() {
  const user = await auth();

  return (
    <fieldset className="grid place-content-center mt-10">
      <FieldGroup className="border rounded-md p-5 gap-2 w-[400px] shadow-xl">
        <FieldLegend className="font-semibold">Connect with Google</FieldLegend>
        <FieldContent className="text-sm">
          This Feature Make You Login & Logout With Google Account
        </FieldContent>
        <FieldGroup className="flex items-center gap-2 mt-3">
          <Field>
            {user ? (
              <div className="flex items-center gap-2">
                <UserForm />
                <LogoutButton />
              </div>
            ) : (
              <SignInButton />
            )}
          </Field>
        </FieldGroup>
      </FieldGroup>
    </fieldset>
  );
}

export default SignForm;
