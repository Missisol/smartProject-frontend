export function useGetGauge(gaugeEls) {
  gaugeDataArr.forEach((item, idx) => {
    const trace = [
      {
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
    Plotly.newPlot(gaugeEls.value[idx], trace, plotlyLayout, {displayModeBar: false})
  })
}