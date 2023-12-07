export const BlogDate = (data) => {
    if (data) {
        return (data.replaceAll("-", ""))
    }
}