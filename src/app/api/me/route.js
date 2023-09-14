import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Suphakorn Komod",
    studentId: "650610811",
  });
};
