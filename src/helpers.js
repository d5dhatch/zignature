export function injectLegacyAttributes(elements) {
  for (const el of elements) {
    switch (el.tagName) {
      case 'TABLE':
        el.setAttribute('valign', 'center')
        el.setAttribute('border', 0)
        break
      case 'TD':
        el.setAttribute('valign', 'middle')
        break
      case 'IMG':
        el.setAttribute('nosend', '1')
        break
      default:
        break
    }
  }
}
