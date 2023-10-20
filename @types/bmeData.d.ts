interface DataItem {
  id: number
  bme_date: string
  bme_humidity: number
  bme_pressure: number
  bme_temperature: number
}

interface Results {
  results: DataItem[]
}