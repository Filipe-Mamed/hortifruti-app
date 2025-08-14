import expressSession from "express-session";

if (!process.env.SESSION_SECRET) {
  throw new Error(
    "SESSION_SECRET não está definido nas variáveis de ambiente."
  );
}

export const session = expressSession({
  name: "Cookie.Session",
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // 1 dia - Define a duração do cookie para 1 dia
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  },
});
