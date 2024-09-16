import { parse } from 'node-html-parser';

export const htmlParser = function(p: {
  /** html string */
  html: string
  /** Look inside elements matching this CSS selector. */
  item: string
  /**
   * Extract item title from selected element.
   * This is applied within the context of each item selected by the item selector.
   */
  item_title: string
  /**
   * Extract item description from selected element.
   * This is applied within the context of each item selected by the item selector.
   */
  item_desc?: string
  /**
   * Extract item URL from selected element.
   * This is applied within the context of each item selected by the item selector.
   */
  item_url: string
  /**
   * Extract item image URL from the selected element.
   * This is applied within the context of each item selected by the item selector.
   */
  item_image?: string
}) {
  // const dom = new DOMParser().parseFromString(p.html, "text/html")
  const dom = parse(p.html)
  const items = dom.querySelectorAll(p.item)
  return Array.from(items).map(e => {
    const title = e.querySelector(p.item_title)?.textContent
    const link = e.querySelector(p.item_url)?.getAttribute('href')
    return {
      title,
      link,
    }
  })
}
