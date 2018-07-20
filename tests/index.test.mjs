import definitionParse from '../dist/index.mjs'

const sampleSchema = `
{
    books {
      title,
      author
    }
  }
`

definitionParse(sampleSchema)
