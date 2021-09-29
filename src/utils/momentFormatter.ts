import moment from 'moment'

export const momentFormatter = (date: string): string =>
  moment(date).format('MMMM Do YYYY, h:mm:ss a')
