// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import pages from './documents/pages'
import news from './documents/news'
import siteSettings from './documents/siteSettings'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import bodyPortableRollingText from './objects/bodyPortableRollingText'
import bodyPortableRollingTextWord from './objects/bodyPortableRollingTextWord'
import bodyPortableFeaturedLink from './objects/bodyPortableFeaturedLink'
import mainImage from './objects/mainImage'
import simpleImage from './objects/simpleImage'
import seo from './objects/seo'
import mainMenu from './objects/mainMenu'
import mainMenuPage from './objects/mainMenuPage'
import content from './objects/content'
import textBlock from './objects/textBlock'
import textImageBlock from './objects/textImageBlock'
import listBlock from './objects/listBlock'
import listBlockItem from './objects/listBlockItem'
import listContentBlock from './objects/listContentBlock'
import columnsBlock from './objects/columnsBlock'
import columnsBlockItem from './objects/columnsBlockItem'
import salesPitch from './objects/salesPitch'
import inlineText from './objects/inlineText'
import inlineTextListItem from './objects/inlineTextListItem'
import contactInfo from './objects/contactInfo'
import contactPerson from './objects/contactPerson'


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
    news,
    mainImage,
    simpleImage,
    bodyPortableText,
    bodyPortableRollingText,
    bodyPortableRollingTextWord,
    bodyPortableFeaturedLink,
    seo,
    mainMenu,
    mainMenuPage,
    content,
    textBlock,
    textImageBlock,
    listBlock,
    listBlockItem,
    listContentBlock,
    columnsBlock,
    columnsBlockItem,
    salesPitch,
    inlineText,
    inlineTextListItem,
    contactInfo,
    contactPerson
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
