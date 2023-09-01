

export const removeDash = (text:string) => {
    let newText = ''
    const findIndex = text.lastIndexOf('-')
    if (findIndex === text.length - 1) {
        newText = text.slice(0, findIndex)
        return newText
    }
    return text
}
