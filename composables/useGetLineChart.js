export function useGetLineChart(dataArr) {
  const lineChartArr = ref(null)

  lineChartArr.value = bmeDataArr.map((field, idx) => {
    const { x, y } = useMakeDataForLineChart(dataArr, 'full_date', field.name)
    const trace = [{
      x: x,
      y: y,
      name: field.name,
      mode: "lines+markers",
      type: "line",
    }]
    const layout = {
      height: 300,
      title: {
        text: field.text,
      },
      font: {
        size: 14,
        color: "#808080",
      },
      colorway: [field.colorway],
    }
    return { trace, layout }
  })

  return lineChartArr
}
