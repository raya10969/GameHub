import usePlatforms from "./usePlatforms";

const usePlatformById = (id?: number) => {
    const { data } = usePlatforms();
    if (!id) return null;
    return data?.results.find(p => p.id === id);
}

export default usePlatformById;