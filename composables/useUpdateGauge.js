export function useUpdateGauge(lastData, gaugeEls) {
  gaugeEls.value.forEach((el, idx) => {
    const update = {
      value: lastData[`bme_${bmeDataNames[idx]}`]
    }
    Plotly.update(gaugeEls.value[idx], update)
  })
}
