import S from '@sanity/desk-tool/structure-builder'
import { MdSettings } from "react-icons/md";
import {
  MdPerson,
  MdDescription,
  MdLocalOffer
} from "react-icons/md"
import IframePreview from '../previews/IframePreview'

// Web preview configuration
const remoteURL = 'https://aha-digital-sanity-gatsby.netlify.app'
const localURL = 'http://localhost:8000'
const previewURL =
  window.location.hostname === 'localhost' ? localURL : remoteURL

/**
 * This defines how documents are grouped and listed out in the Studio.
 * Relevant documentation:
 * - https://www.sanity.io/guides/getting-started-with-structure-builder
 * - https://www.sanity.io/docs/structure-builder-introduction
 * - https://www.sanity.io/docs/structure-builder-typical-use-cases
 * - https://www.sanity.io/docs/structure-builder-reference
 */

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Inställningar')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.divider(),
      S.listItem()
        .title('Sidor')
        .icon(MdDescription)
        .schemaType('pages')
        .child(S.documentTypeList('pages').title('Sidor')),
      // `S.documentTypeListItems()` returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above.
      ...S.documentTypeListItems().filter(
        listItem =>
          !['siteSettings', 'pages'].includes(
            listItem.getId()
          )
      )
    ])
