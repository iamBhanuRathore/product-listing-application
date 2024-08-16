import { isJson } from "@/lib/utils";
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  const { name = "Default Name", data } = await req.json();
  try {
    if (!isJson(data)) {
      return new NextResponse("Not valid Json: data", {
        status: 400,
      });
    }
    const product = await db.product.create({
      data: {
        name,
        data: JSON.parse(data),
      },
    });
    return NextResponse.json(product);
  } catch (error: any) {
    return new NextResponse("Internal server error: " + error.message, {
      status: 500,
    });
  }
}
