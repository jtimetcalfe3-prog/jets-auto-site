import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  serviceRequests: defineTable({
    name: v.string(),
    phone: v.string(),
    vehicle: v.optional(v.string()),
    location: v.optional(v.string()),
    message: v.string(),
    status: v.string(), // "pending", "contacted", "completed"
  }),
});
