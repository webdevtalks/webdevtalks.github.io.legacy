//get id from github
const getSheetId = () => "1UrATDa3qAnoLDJtSCPFzawDZLoJbYAp3mNq4NKyI5wU"

const getSheetUrl = (query) => {
  const sheetsUrl = 'https://docs.google.com/spreadsheets/d/'
  const sheetsQueryPrefix = '/gviz/tq?tq='
  const id = getSheetId()

  return `${sheetsUrl}${id}${sheetsQueryPrefix}${encodeURIComponent(query)}`
}

const parseSheet = (rawSheet) => {
  const cleaned = rawSheet.replace(
    /.*google.visualization.Query.setResponse\({(.*?)}\);?/s,
    "{$1}"
  )

  // First cell, first value
  return JSON.parse(cleaned).table.rows.at().c.at().v
}

export const getSheetsData = async (query) => {
  return new Promise((resolve, reject) => {
    fetch(getSheetUrl(query))
      .then(data => data.text())
      .then(raw => resolve(parseSheet(raw)))
      .catch(reject)
  })
}