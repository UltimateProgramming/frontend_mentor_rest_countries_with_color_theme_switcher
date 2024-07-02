export function getCurrenciesFromObject(currencyObject: object): string {
  let currencies: string[] = []
  Object.values(currencyObject).forEach((value) => {
    currencies.push(value.name)
  })

  return currencies.join(', ')
}
