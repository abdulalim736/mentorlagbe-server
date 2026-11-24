import type {Document, ObjectId } from "mongodb";

// User Roles
export type UserRole = "student" | "tutor" | "admin";

// Subscription Plans
export type PlanType = "free" | "pro";

// Tuition Status
export type ApprovalStatus =
  | "pending"
  | "approved"
  | "rejected";

// Application Status
export type ApplicationStatus =
  | "pending"
  | "accepted"
  | "rejected";

// Tuition Mode
export type TuitionMode = "Online" | "Offline";

// 1. Users Collection
export interface IUser extends Document {
  _id?: ObjectId;
  authUserId: string;
  name: string;
  email: string;
  image?: string;
  role: "student" | "tutor" | "admin";
  phone?: string;
  bio?: string;
  plan: "free" | "pro";
  savedTuitionIds?: ObjectId[];
  createdAt: Date;
  updatedAt?: Date;
}

// 2. Tuitions Collection
export interface ITuition extends Document {
  _id?: ObjectId;
  tutorId: string;
  title: string;
  subject: string;
  classLevel: string;
  mode: "Online" | "Offline";
  location: string;
  monthlyFee: number;
  daysPerWeek: number;
  bannerImage: string;
  description: string;
  tutorName: string;
  tutorEmail: string;
  approvalStatus: "pending" | "approved" | "rejected";
  isActive: boolean;
  createdAt: Date;
  updatedAt?: Date;
}


// 3. Applications Collection
export interface IApplication extends Document {
  _id?: ObjectId;
  tuitionId: ObjectId;
  tuitionTitle: string;
  subject: string;
  monthlyFee: number;
  tutorId: string;
  tutorEmail: string;
  studentId: string;
  studentName: string;
  studentEmail: string;
  studentPhone: string;
  preferredSchedule: string;
  studentNote: string;
  status: "pending" | "accepted" | "rejected";
  appliedAt: Date;
}

// 4. Payments Collection
export interface IPayment extends Document {
  _id?: ObjectId;
  userId: string;
  userEmail: string;
  userName: string;
  userRole: "student" | "tutor";
  planName: string;
  amount: number;
  currency: string;
  transactionId: string;
  stripeSessionId: string;
  paymentStatus: "paid";
  paidAt: Date;
}