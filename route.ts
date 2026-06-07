import { NextResponse } from "next/server";
import Product from "@/models/Product";
import { connectDB } from "@/lib/mongodb";

export async function GET() {
  try {
    await connectDB();

    const products = await Product.find();

    return NextResponse.json(products);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Ошибка получения товаров" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();

    const data = await req.json();

    const product = await Product.create(data);

    return NextResponse.json(product);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Ошибка создания товара" },
      { status: 500 }
    );
  }
}