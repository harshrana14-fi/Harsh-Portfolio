import clientPromise from "@/lib/mongodb";
export const runtime = "nodejs"; // ensure Node runtime for nodemailer
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body || {};

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ ok: false, error: "Missing fields" }), { status: 400 });
    }

    // Store in MongoDB (best-effort if URI is configured)
    try {
      if (clientPromise) {
        const client = await clientPromise;
        const db = client.db();
        await db.collection("contact_messages").insertOne({
          name,
          email,
          subject: subject || "General Inquiry",
          message,
          createdAt: new Date(),
        });
      }
    } catch (error) {
      console.log("MongoDB storage failed (optional):", error);
    }

    // Send email via SMTP if credentials provided
    const env = process.env as Record<string, string | undefined>;
    const SMTP_HOST = env.SMTP_HOST;
    const SMTP_PORT = env.SMTP_PORT;
    const SMTP_USER = env.SMTP_USER;
    const SMTP_PASS = env.SMTP_PASS;
    const EMAIL_FROM = env.EMAIL_FROM || SMTP_USER || "no-reply@localhost";
    const EMAIL_TO = env.EMAIL_TO || "ranajiharsxx14@gmail.com"; // default to your email
    const ALLOW_USER_FROM = (env.SMTP_ALLOW_USER_FROM || "false").toLowerCase() === "true";

    let sent = false;
    if (SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS) {
      try {
        const nodemailer = await import("nodemailer");
        const transporter = nodemailer.createTransport({
          host: SMTP_HOST,
          port: Number(SMTP_PORT),
          secure: Number(SMTP_PORT) === 465,
          auth: { user: SMTP_USER, pass: SMTP_PASS },
        });
        const text = `New inquiry via portfolio\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject || "General Inquiry"}\n\n${message}`;
        // Prefer using the user's email as From if allowed by your SMTP (many providers require verified senders)
        const fromAddress = ALLOW_USER_FROM ? `${name} <${email}>` : EMAIL_FROM;
        await transporter.sendMail({
          from: fromAddress,
          sender: EMAIL_FROM, // keeps a verified sender for providers that require it
          to: EMAIL_TO,
          replyTo: `${name} <${email}>`,
          subject: `Portfolio inquiry from ${name} — ${subject || "General Inquiry"}`,
          text,
        });
        sent = true;
      } catch (err) {
        console.error("Email send failed:", err);
      }
    }

    return new Response(JSON.stringify({ ok: true, sent }), { status: 200, headers: { "Content-Type": "application/json" } });
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(JSON.stringify({ ok: false, error: "Server error" }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
}


