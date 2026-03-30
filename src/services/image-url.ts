const PLACEHOLDER_IMAGE_URL = "https://via.placeholder.com/600x400?text=No+Image";

const getCroppedImageUrl = (url?: string | null) => {
    if (!url) return PLACEHOLDER_IMAGE_URL;

    const target = "media/";
    const index = url.indexOf(target);

    if (index === -1) return url;

    const cropStart = index + target.length;
    return url.slice(0, cropStart) + "crop/600/400/" + url.slice(cropStart);
}

export default getCroppedImageUrl;