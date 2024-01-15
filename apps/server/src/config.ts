import * as dotenv from "dotenv";

dotenv.config({ path: __dirname + "/.env" });

export const CONFIG = {
  nodeEnv: process.env.NODE_ENV ?? "dev",
  port: process.env.PORT ?? 3000,
  ApiKey: "jmiVjlbTpSXPm6QMdg7zaitJLEMMCZgagRRlHS8M",
} as const;
