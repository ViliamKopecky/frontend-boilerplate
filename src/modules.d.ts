declare module "*.pug" {
  const render: (locals?: any) => string;
  export = render;
}
