import remark from "remark";
import html from "remark-html";
import path from "path";

export default async function markdownToHtml(markdown) {
  if (process.platform === "win32") {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      "node_modules",
      "esbuild",
      "esbuild.exe"
    );
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      "node_modules",
      "esbuild",
      "bin",
      "esbuild"
    );
  }
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
