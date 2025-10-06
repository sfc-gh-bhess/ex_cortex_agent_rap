import { NextResponse } from "next/server";
import { isValidDemoCredential } from "@/lib/auth/demoUsers";

export async function POST(request: Request) {
	try {
		const { username, password } = await request.json();
		if (!isValidDemoCredential(username, password)) {
			return NextResponse.json({ ok: false, error: "Invalid credentials" }, { status: 401 });
		}

		const res = NextResponse.json({ ok: true });
		res.cookies.set("demo_username", encodeURIComponent(username), {
			path: "/",
			httpOnly: false,
			sameSite: "lax",
			maxAge: 60 * 60 * 24 * 7,
		});
		return res;
	} catch (e) {
		return NextResponse.json({ ok: false, error: "Bad request" }, { status: 400 });
	}
}
