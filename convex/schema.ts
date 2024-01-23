import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  keys: defineTable({
    label: v.string(),
    key: v.string(),
    userId: v.string(),
  })
    .index("by_userId", ["userId"])
    .index("by_key", ["key"]),
});
