import * as functions from "firebase-functions";
import next from "next";
import * as path from "path";

const dev = process.env.NODE_ENV !== "production";
const app = next({
  dev,
  conf: {
    distDir: `${path.relative(process.cwd(), __dirname)}/../functions/next`
  }
});
const handle = app.getRequestHandler();

export const nextApp = functions// .region("europe-west1")
.https
  .onRequest((req, res) => {
    return app.prepare().then(() => handle(req, res));
  });
