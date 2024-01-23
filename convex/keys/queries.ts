import { query } from "../_generated/server";

export const getKeys = query({
  args: {},
  handler: async (ctx, args) => {
    const userId = (await ctx.auth.getUserIdentity())?.subject;

    if (!userId) {
      return [];
    }

    return await ctx.db
      .query("keys")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .collect();
  },
});
