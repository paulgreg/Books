export const getParamFromUrl = (key) => {
    const params = window.location.search.replace(/\?/, '').split('&')
    const param = params.find((p) => p.startsWith(`${key}=`))
    if (param) {
        const p = param.split('=')
        return p && p.length === 2 ? p[1] : undefined
    }
}
