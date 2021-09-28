export const convertStringForTitle = (string: string): string =>
  string.charAt(0).toUpperCase() + string.slice(1).replace(/_/g, ' ')
