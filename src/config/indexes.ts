import { getDB } from "./db.js";

export const createIndexes = async () => {
  const db = getDB();

  await Promise.all([

    // Users Collection
    db.collection("users").createIndex(
      { email: 1 },
      {
        unique: true,
        name: "unique_user_email"
      }
    ),

    db.collection("users").createIndex(
      { authUserId: 1 },
      {
        unique: true,
        name: "unique_auth_user_id"
      }
    ),

    // Tuitions Collection
    db.collection("tuitions").createIndex(
      {
        approvalStatus: 1,
        isActive: 1,
        createdAt: -1
      },
      {
        name: "browse_tuitions"
      }
    ),

    db.collection("tuitions").createIndex(
      {
        subject: 1,
        classLevel: 1,
        mode: 1
      },
      {
        name: "tuition_filters"
      }
    ),

    // Applications Collection
    db.collection("applications").createIndex(
      {
        tuitionId: 1,
        studentId: 1
      },
      {
        unique: true,
        name: "unique_student_tuition_application"
      }
    ),

    db.collection("applications").createIndex(
      {
        tutorId: 1,
        status: 1,
        appliedAt: -1
      },
      {
        name: "tutor_applicants"
      }
    ),

    db.collection("applications").createIndex(
      {
        studentId: 1,
        appliedAt: -1
      },
      {
        name: "student_applications"
      }
    ),

    // Payments Collection
    db.collection("payments").createIndex(
      {
        stripeSessionId: 1
      },
      {
        unique: true,
        name: "unique_stripe_session"
      }
    ),

    db.collection("payments").createIndex(
      {
        userId: 1,
        paidAt: -1
      },
      {
        name: "user_payments"
      }
    ),

  ]);

  console.log("MongoDB Indexes Created Successfully!");
};