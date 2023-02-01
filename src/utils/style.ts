export const font_size = (px: number) => `${(px * 100 / 1080).toFixed(3)}vh`;
export const height_size = (px: number) => `${(px * 100 / 1080).toFixed(3)}vh`;
export const width_size = (px: number) => `${(px * 100 / 1920).toFixed(3)}vw`;

type AppColor = {
  [key: string]: string,
}

export const appColor: AppColor = {
  'white': '#FFFFFF',
  'black': '#000000',
  'purple': '#6449F3',
  'purpleLight': '#EEEBFB',
  'purpleBright': '#FAF9FF',
  'gray': '#888888',
  'grayLight': '#E2E0E0',
};
