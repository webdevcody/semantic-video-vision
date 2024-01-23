"use client";

import { SignedIn } from "@clerk/nextjs";
import { useAction, useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export default function Home() {
  const createApiKey = useMutation(api.keys.mutations.createKey);
  const apiKeys = useQuery(api.keys.queries.getKeys);

  return (
    <main className="">
      <SignedIn>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);
            const label = formData.get("label") as string;
            await createApiKey({
              label,
            });
            form.reset();
          }}
        >
          <label>api key label</label>
          <input required name="label" className="text-black"></input>
          <button>Create</button>
        </form>

        {apiKeys?.map((apiKey) => {
          return <div key={apiKey._id}>{apiKey.key}</div>;
        })}
      </SignedIn>
    </main>
  );
}
