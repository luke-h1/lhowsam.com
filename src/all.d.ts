declare module '*module.css' {
  const styles: {
    [className: string]: string;
  };
  export default styles;
}

declare module '*module.scss' {
  const styles: {
    [className: string]: string;
  };
  export default styles;
}

declare module 'mdx-prism';
