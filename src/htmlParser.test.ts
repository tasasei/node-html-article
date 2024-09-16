import * as fs from 'fs/promises'
import path from 'path'
import test from 'node:test'
import { htmlParser } from './htmlParser'

// http://createfeed.fivefilters.org/extract.php?url=https%3A%2F%2Fwww.lovelive-anime.jp%2Fnews%2F%3Fseries%3Dhasunosora&item=.news-contents+.c-card&item_title=.c-card__title&item_url=a.c-card__head&item_date=.c-card__date+time&item_date_format=Y.M.d&item_image=.c-card__thumb+img&order=document&guid=0
test('downloadArticles', async () => {
  const htmlStr = await fs.readFile(path.join(__dirname, 'htmlParser.test.html'), {encoding: "utf-8"})
  const item = htmlParser({
    html: htmlStr,
    item: '.news-contents .c-card',
    item_title: '.c-card__title',
    item_url: 'a.c-card__head',
  })
  console.log(item)
})
