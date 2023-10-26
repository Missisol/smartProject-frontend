export function useMakeDataForLineChart(dataArr, fieldX, fieldY) {
  const x = ref([])
  const y = ref([])

    dataArr.map((item) => {
    x.value.push(item[fieldX])
    y.value.push(item[fieldY])
  })

  return { x, y }
}