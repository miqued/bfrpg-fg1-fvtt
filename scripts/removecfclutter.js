Hooks.on('renderCompendium', (doc, html, context) => {
    // Skip entirely if it's someone else's compendium
    if (! doc.metadata.packageName === 'bfrpg-fg1-fvtt') return
    if (game.modules.get('compendium-folders')?.active) return
    html.find('.document-name a:contains("#[CF_")').parent().parent().remove()
})
