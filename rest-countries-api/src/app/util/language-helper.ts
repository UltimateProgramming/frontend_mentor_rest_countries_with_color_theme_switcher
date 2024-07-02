export function getLanguages(langageObject: object): string {
  const languages = Object.values(langageObject)
  return languages.join(', ')
}
