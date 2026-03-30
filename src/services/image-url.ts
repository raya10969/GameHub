import noImage from '../assets/no-image-placeholder.webp'

const getCroppedImageUrl = (url?: string | null) => {
    if (!url) return noImage;

    const target = "media/";
    const index = url.indexOf(target);

    if (index === -1) return url;

    const cropStart = index + target.length;
    return url.slice(0, cropStart) + "crop/600/400/" + url.slice(cropStart);
}

export default getCroppedImageUrl;