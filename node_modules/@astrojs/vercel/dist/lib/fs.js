import * as fs from "node:fs/promises";
async function writeJson(path, data) {
  await fs.writeFile(path, JSON.stringify(data), { encoding: "utf-8" });
}
async function emptyDir(dir) {
  await fs.rm(dir, { recursive: true, force: true, maxRetries: 3 });
  await fs.mkdir(dir, { recursive: true });
}
const getVercelOutput = (root) => new URL("./.vercel/output/", root);
export {
  emptyDir,
  getVercelOutput,
  writeJson
};
