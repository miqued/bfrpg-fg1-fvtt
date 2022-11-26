Hooks.on('renderCompendium', (doc, html, context) => {
    // Skip entirely if it's someone else's compendium
    if (! doc.metadata.packageName === 'bfrpg-fieldguide-volume1') return
    if (game.modules.get('compendium-folder')?.active) return
    html.find('.document-name a:contains("#[CF_")').parent().parent().remove()
})
