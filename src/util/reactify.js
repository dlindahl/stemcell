import Bit from '../components/Bit'
import { createElement } from 'react'

const COMMENT_TAG = '--'
const DEFAULT_TAG = Bit

// eslint-disable-next-line max-params
function parse (buffer, doc, options, key) {
  switch (doc.type) {
    case 'text':
      return [...buffer, doc.content]
    case 'tag': {
      if (doc.name.startsWith(COMMENT_TAG)) {
        return buffer
      }
      const tag = options.mappings[doc.name] || DEFAULT_TAG
      let children = reactify(doc.children, options, key)
      if (!children.length) {
        children = null
      }
      if (tag.fromMarkup) {
        doc.attrs = tag.fromMarkup(doc.attrs)
      }
      if (tag === DEFAULT_TAG && !doc.attrs.as) {
        doc.attrs.as = doc.name
      }
      if (doc.attrs.class) {
        // Rename class to className for React compatibility
        doc.attrs.className = doc.attrs.class
        delete doc.attrs.class
      }
      return [...buffer, createElement(tag, { key, ...doc.attrs }, children)]
    }
    default:
      return buffer
  }
}

export default function reactify (doc, options, keyPrefix = '$') {
  return doc.reduce(
    (collection, rootEl, key) => [
      ...collection,
      ...parse([], rootEl, options, `${keyPrefix}.${key}`)
    ],
    []
  )
}
