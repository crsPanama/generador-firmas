import { toJpeg } from 'html-to-image';

function replaceSpacesAndDots(str: string) {
  // Use a regular expression to match spaces or dots and replace them with "-"
  return str.replace(/[\s.]+/g, '-');
}

export const useScreenshot = () => {
  const generateImage = async (
    elementRef: HTMLElement | undefined,
    fileName: string
  ) => {
    const res = await toJpeg(<HTMLElement>elementRef);
    const link = document.createElement('a');
    link.download = replaceSpacesAndDots(fileName);
    link.href = res;
    link.click();
  };

  return {
    generateImage,
  };
};
