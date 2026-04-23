import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const submit = mutation({
  args: {
    name: v.string(),
    phone: v.string(),
    vehicle: v.optional(v.string()),
    location: v.optional(v.string()),
    message: v.string(),
  },
  returns: v.id("serviceRequests"),
  handler: async (ctx, args) => {
    return await ctx.db.insert("serviceRequests", {
      ...args,
      status: "pending",
    });
  },
});
