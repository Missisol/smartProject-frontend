interface DataItem {
  id: number
  full_date: string
  humidity: number
  pressure: number
  temperature: number
}

interface Results {
  results: DataItem[]
}