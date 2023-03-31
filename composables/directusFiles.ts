export function getThumbnail(fileId: string, opt: {fit: "cover" | "contain" | "inside" | "outside", width: number, format: "jpg"| "png" | "webp" |"tiff"}) {
    const {fit, width, format} = opt
    return `${baseURL()}/assets/${fileId}?fit=${fit}&width=${width}&format=${format}`
}
