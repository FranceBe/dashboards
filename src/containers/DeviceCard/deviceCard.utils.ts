// To display Labels for each category this function convert
// a snake_case string into a more readable string starting with a capital letter and with spaces instead of underscores
export const convertStringForTitle = (string: string): string =>
  string.charAt(0).toUpperCase() + string.slice(1).replace(/_/g, ' ')
