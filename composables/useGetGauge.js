export function useGetGauge(dataArr) {
  const gaugeChartArr = ref(null)

  gaugeChartArr.value =  gaugeDataArr.map((item) => {
    const trace = [
      {
        value: dataArr[item.name],
        type: "indicator",
        mode: "gauge+number",
        // mode: "gauge+number+delta",
        // delta: { reference: item.reference },
        title: { text: item.text },
        gauge: {
          axis: { range: item.range },
          bar: { color: item.color},
          steps: item.steps,
          threshold: {
            line: { color: "red", width: 4 },
            thickness: 0.75,
            value: item.value,
          },
        },
      },
    ]
    return { trace }
  })

  return gaugeChartArr
}