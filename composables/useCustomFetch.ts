import type { UseFetchOptions } from 'nuxt/app'
import { defu } from 'defu'

export function useCustomFetch<T>(url: string, options: UseFetchOptions<T> = {}) {
  const { app: config } = useRuntimeConfig()

  const defaults: UseFetchOptions<T> = {
    baseURL: config.baseUrl ?? 'http://192.168.1.122',
    key: url,

    onResponse({ response }) {
      // console.log('onResponse', response._data.results)
    },

    onResponseError({ response }) {
      throw new Error(response._data.error)
    },
  }

  const params = defu(options, defaults)
  return useFetch(url, params)
}
