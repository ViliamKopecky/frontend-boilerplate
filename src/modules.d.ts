declare module "*.pug" {
  const render: (locals?: any) => string;
  export = render;
}

declare module "*.module.sass" {
  const render: { [key: string]: string };
  export = render;
}
