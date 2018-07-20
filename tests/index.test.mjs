import definitionParse from '../dist/index.mjs'

const sampleSchema = `
{
    books {
      title,
      author
    }
  }
`

try {
  console.log(definitionParse(sampleSchema))
} catch (error) {
  console.log(error)
}
