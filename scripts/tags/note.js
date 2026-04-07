/**
 * note.js
 * transplant from hexo-theme-butterfly
 * Modify bytoadXtech64
 */

'use strict'

// {% note [class] [style] %}
const postNote = (args, content) => {
  const styleConfig = hexo.theme.config.note.style
  const noteTag = ['win7', 'disabled']
  if (!noteTag.includes(args[args.length - 1])) {
    args.push(styleConfig)
  }
  // icon 留着先，因为我想用 win7 的图标说真的
  
  // const t1 = "Info"
  // const title = ""
  // if (args[args.length - 2] == "info") { t1 == "Info" }
  
  
  return `<div class="note ${args.join(' ')}">
           ${hexo.render.renderSync({ text: content, engine: 'markdown' })}
         </div>`
}

hexo.extend.tag.register('note', postNote, { ends: true })
hexo.extend.tag.register('subnote', postNote, { ends: true })