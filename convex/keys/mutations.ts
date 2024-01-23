import { mutation } from "../_generated/server";
import { v } from "convex/values";

function generateApiKey() {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  const apiKey = Array.from(array, (byte) =>
    byte.toString(16).padStart(2, "0")
  ).join("");
  return apiKey;
}

export const createKey = mutation({
  args: {
    label: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = (await ctx.auth.getUserIdentity())?.subject;

    if (!userId) {
      throw new Error("you must be logged in to create a thumbnail");
    }

    await ctx.db.insert("keys", {
      userId,
      key: generateApiKey(),
      label: args.label,
    });
  },
});
