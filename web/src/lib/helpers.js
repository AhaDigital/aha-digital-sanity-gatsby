import {format, isFuture} from 'date-fns'

export function cn (...args) {
  return args.filter(Boolean).join(' ')
}

export function mapEdgesToNodes (data) {
  if (!data.edges) return []
  return data.edges.map(edge => edge.node)
}

export function filterOutDocsWithoutSlugs ({slug}) {
  return (slug || {}).current
}

export function filterOutDocsPublishedInTheFuture ({publishedAt}) {
  return !isFuture(publishedAt)
}

export function getBlogUrl (publishedAt, slug) {
  return `/blog/${format(publishedAt, 'YYYY/MM')}/${slug.current || slug}/`
}

export function buildImageObj(source) {
  return {
    asset: {
      _ref: source.asset && (source.asset._ref || source.asset._id)
    },
    // Doesn't add these props if they are empty
    ...(source.crop && { crop: source.crop }),
    ...(source.hotspot && { hotspot: source.hotspot })
  };
}

export function toPlainText (blocks) {
  if (!blocks) {
    return ''
  }
  return blocks
    .map(block => {
      if (block._type !== 'block' || !block.children) {
        return ''
      }
      return block.children.map(child => child.text).join('')
    })
    .join('\n\n')
}

export function iconAnimation(direction) {
  switch(direction) {
    case 'top':
      return 'translateY(-3px)'
    case 'right':
      return 'translateX(3px)'
    case 'bottom':
      return 'translateY(3px)'
    case 'left':
      return 'translateX(-3px)'
    default:
      return 'translate(5px, 5px)'
  }
}

export function debounce(func, wait, immediate) {
	let timeout;
	return function() {
		const context = this, args = arguments;
		const later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
