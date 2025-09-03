import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic } from "./vite";
import open from "open"; // npm install open
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// ESM fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env file from server folder
dotenv.config({ path: path.resolve(__dirname, ".env") });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
  });

  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  let port = parseInt(process.env.PORT || "5000", 10);
  const host = "127.0.0.1";

  const tryListen = (p: number): Promise<number> =>
    new Promise((resolve, reject) => {
      const testServer = server.listen(p, host);
      testServer.once("listening", () => resolve(p));
      testServer.once("error", (err: any) => {
        if (err.code === "EADDRINUSE" || err.code === "EACCES") {
          resolve(tryListen(p + 1)); // retry on port conflict
        } else {
          reject(err);
        }
      });
    });

  const finalPort = await tryListen(port);
  console.log(`🚀 Running at http://${host}:${finalPort}`);
  open(`http://${host}:${finalPort}`);
})();
