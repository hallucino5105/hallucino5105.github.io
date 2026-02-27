import path from "path";
import config from "@/root/config";

export function getPublicUrl(filepath: string) {
  return path.join(config.serve.publicPath, filepath);
}

export function getAppUrl() {
  return `${config.serve.web.protocol}://${config.serve.web.host}:${config.serve.web.port}${config.serve.publicPath}`;
}
