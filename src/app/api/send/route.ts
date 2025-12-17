import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const EmailSchema = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email("Email is invalid!"),
  message: z.string().min(10, "Message is too short!"),
});

export async function POST(req: Request) {
  try {
    // 🔍 DEBUG
    console.log("RESEND_API_KEY:", process.env.RESEND_API_KEY);
    console.log("TO EMAIL:", config.email);

    const body = await req.json();
    console.log("BODY:", body);

    const parsed = EmailSchema.safeParse(body);
    if (!parsed.success) {
      return Response.json(
        { error: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { fullName, email, message } = parsed.data;

    // ✅ TEMPORARILY USE TEXT EMAIL (MOST STABLE)
    const { data, error } = await resend.emails.send({
      from: "Resend <onboarding@resend.dev>",
      to: [config.email],
      subject: "Contact from Portfolio",
      text: `
Name: ${fullName}
Email: ${email}

Message:
${message}
      `,
    });

    if (error) {
      console.error("RESEND ERROR:", error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (err) {
    console.error("API ERROR:", err);
    return Response.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
