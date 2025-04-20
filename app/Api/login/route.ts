import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { log } from "console";
import { NextResponse } from "next/server";

const SECRET_KEY = process.env.SECRET_KEY;

export async function POST(req: Request, res: NextApiResponse) {
  const { username, password } = await req.json();
  if (username === "admin" && password === "1234567890") {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "3h" });
    const response = NextResponse.json(
      { message: "ورود شما با موفقیت انجام شد", token },
      { status: 200 }
    );

    // response.cookies.set('token', token, {
    //   httpOnly: true,
    //   path: '/',
    //   maxAge: 3600*3,
    // });

    return response;
  } else {
    return NextResponse.json(
      {
        message:
          "اطلاعات وارد شده نادرست است. (اطلاعات تست: نام کاربری: admin، رمز عبور: 1234567890)",
      },
      { status: 401 }
    );
  }
}
