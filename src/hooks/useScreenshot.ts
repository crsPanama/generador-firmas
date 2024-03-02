import { toPng } from "html-to-image";
export const useScreenshot = () => {
    const generateImage = async (
        elementRef: HTMLElement | undefined,
        fileName: string
    ) => {
        const res = await toPng(<HTMLElement>elementRef);
        const link = document.createElement("a");
        link.download = `firma ${fileName}`;
        link.href = res;
        link.click();
    };

    return {
        generateImage,
    };
};
