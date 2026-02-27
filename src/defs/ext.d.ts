declare module "*.json" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const value: any;
  export default value;
}

declare module "*.yaml" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const value: any;
  export default value;
}

declare module "*.svg" {
  import type { FC, SVGProps } from "react";
  const content: FC<SVGProps<SVGElement>>;
  export default content;
}

declare module "*.svg?url" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any;
  export default content;
}

declare module "*.css";
declare module "*.scss";
declare module "*.sass";

declare module "*.png";
declare module "*.jpg";
declare module "*.gif";

declare module "*.mp4";
declare module "*.mkv";
declare module "*.mov";

declare module "*.csr";
declare module "*.crt";
declare module "*.key";
declare module "*.pem";

