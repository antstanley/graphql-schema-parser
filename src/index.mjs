import { parse } from 'graphql/language'

export default source => {
  try {
    return parse(source)
  } catch (error) {
    throw new Error(error)
  }
}
