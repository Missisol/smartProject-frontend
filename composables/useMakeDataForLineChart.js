export function useMakeDataForLineChart(dataArr, field) {
  const x = ref([])
  const y = ref([])

    dataArr.map((item) => {
    x.value.push(item['full_date'])
    y.value.push(item[field])
  })

  return { x, y }
}