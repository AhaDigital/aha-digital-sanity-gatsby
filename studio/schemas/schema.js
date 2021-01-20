// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import pages from './documents/pages'
import siteSettings from './documents/siteSettings'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import mainImage from './objects/mainImage'
import seo from './objects/seo'
import mainMenu from './objects/mainMenu'
import mainMenuPage from './objects/mainMenuPage'
import content from './objects/content'
import textBlock from './objects/textBlock'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'site',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    pages,
    mainImage,
    bodyPortableText,
    seo,
    mainMenu,
    mainMenuPage,
    content,
    textBlock,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
