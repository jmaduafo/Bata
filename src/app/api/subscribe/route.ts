import { transporter } from "@/nodemailer/config";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const my_email = process.env.NEXT_PUBLIC_EMAIL;

  const formData = await request.formData();

  const email = formData.get("user_email");

  try {
    await transporter.sendMail({
      from: my_email,
      to: my_email,
      subject: `BATA New Subscriber`,
      // this is the styling for the email template; test html styling in your own /template/email.html file; must use inline styles and table semantic tags because other forms are not widely supported; flexbox will not work well so must use alternative styling methods (display: flex works but other flex stylings like flex-direction, flex, gap, justify-content, etc. will not work)
      html: `
            <p>New email: ${email} </p>
        `,
    });

    return NextResponse.json({
      message: "Message was sent successfully!",
    });
  } catch (err) {
    return NextResponse.json({
      message: err,
    });
  }
}
