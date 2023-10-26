export function useGetHistoryLineChart(dataArr) {
  const lineChartArr = ref(null)

  lineChartArr.value = bmeDataArr.map((field, idx) => {
    const { x, y } = useMakeDataForLineChart(dataArr, 'date', `min_${field.name}`)
    const { x: a, y: b} = useMakeDataForLineChart(dataArr, 'date', `max_${field.name}`)
    const trace = [
      {
        x: x,
        y: y,
        name: `min ${field.text}`,
        mode: "lines+markers",
        line: {
          dash: 'dot'
        },
      },
      {
        x: a,
        y: b,
        name: `max ${field.text}`,
        mode: "lines+markers",
        line: {
          // color: field.colorway,
        },
      },
    ]
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
