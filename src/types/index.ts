export type MovieAccess = "free" | "premium";

export type PlanDuration = "weekly" | "biweekly" | "monthly";

export type SubscriptionStatus = "active" | "expired" | "cancelled";

export type PaymentStatus = "pending" | "approved" | "rejected";

export type ActivationCodeStatus = "available" | "used" | "disabled";

export interface LandingPlan {
  name: string;
  price: string;
  duration: string;
}
