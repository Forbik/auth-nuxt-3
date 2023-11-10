const apiUrl: string = import.meta.env.VITE_API_URL

type AdditionalParams = {
  [key: string]: string | number
}

export default function (path?: string, additionalParams?: AdditionalParams): string {
  const buildQueryString = (params: AdditionalParams): string => {
    const query: string = Object.keys(params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&')
    return query ? `?${query}` : ''
  }
  const queryParams: string = buildQueryString({
    ...additionalParams
  })
  const url: string = `${apiUrl}/${path}${queryParams}`
  return url
}
