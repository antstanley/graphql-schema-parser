import { parse } from 'graphql/language'

export default source => {
  try {
    console.log(JSON.stringify(parse(source)))
  } catch (error) {
    console.log(error)
  }
}
