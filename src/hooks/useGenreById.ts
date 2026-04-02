import useGenres from "./useGenres";

const useGenreById = (id?: number) => {
    const { data } = useGenres();
    if (!id) return null;
    return data.results.find(g => g.id === id);
}

export default useGenreById;