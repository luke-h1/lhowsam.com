declare module '*module.css' {
  const styles: {
    [className: string]: string;
  };
  export default styles;
}

declare module '@mapbox/rehype-prism';
