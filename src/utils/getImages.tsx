const baseExtension = `${process.env.PUBLIC_URL}/images/`;

export const getImage = (url: string = '') => {
    return `${baseExtension}${url}.png`;
}