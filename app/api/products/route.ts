import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const color = searchParams.get("color");
  const capacity = searchParams.get("capacity");

  const filters = [];

  if (color) {
    filters.push({
      jsonPath: "color",
      equals: color,
    });
  }

  if (capacity) {
    filters.push({
      jsonPath: "capacity",
      equals: capacity,
    });
  }
  try {
    const products = await db.product.findMany({
      where:
        filters.length > 0
          ? {
              AND: filters.map((filter) => ({
                data: {
                  path: [filter.jsonPath],
                  string_contains: filter.equals,
                },
              })),
            }
          : {},
    });
    return NextResponse.json(products);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
