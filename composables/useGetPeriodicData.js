export async function useGetPeriodicData(url, timer) {
  const res = ref(null)
  const err = ref(null)

  const { data, error } = await useCustomFetch(url)
  res.value = data.value.results

  function getPeriodicData() {
    setTimeout(async() => {
      const { data, error } = await useCustomFetch(url)
      res.value = data.value.results
      err.value = error.value
  
      getPeriodicData(url, timer)
    }, timer)
  }

    getPeriodicData()
  return { res, err }
}