const current = dv.current();
const cdate = new Date(dv.current().date).getTime();
const cdateop = !dv.current().date ? "" : (dv.current().date.toString().includes("<") ? "<" : (dv.current().date.toString().includes(">") ? ">" : "==="));
const cnotecreated = new Date(dv.current()["note-created"]).getTime();
const cnotecreatedop = !dv.current()["note-created"] ? "" : (dv.current()["note-created"].toString().includes("<") ? "<" : (dv.current()["note-created"].toString().includes(">") ? ">" : "==="));
const cnotemodified = new Date(dv.current()["note-modified"]).getTime();
const cnotemodifiedop = !dv.current()["note-modified"] ? "" : (dv.current()["note-modified"].toString().includes("<") ? "<" : (dv.current()["note-modified"].toString().includes(">") ? ">" : "==="));
const matchtags = (a, b) => {
    for (const v of new Set(a)) {
      if (
        !b.some(e => e === v) ||
        a.filter(e => e === v).length > b.filter(e => e === v).length
      )
        return false;
    }
    return true;
};

if (current.keyword || current.author || current.title || current.publication || current.date || current["note-title"] || current["note-created"] || current["note-modified"] || current.comment || current.tags) {

    function passes(page) {
        return (!current.author || (page.author && page.author.toString().toLowerCase().includes(current.author.toLowerCase())))
            && (!current.title || (page.title && page.title.toString().toLowerCase().includes(current.title.toLowerCase())))
            && (!current.publication || (page.publication && page.publication.toString().toLowerCase().includes(current.publication.toLowerCase())))
            && (!current.date || (page.date && eval(new Date(page.date).getTime() + cdateop + cdate)))
            && (!current["note-title"] || (page.file.name && page.file.name.toLowerCase().includes(current["note-title"].toLowerCase())))
            && (!current.comment || (page.comment && page.comment.toLowerCase().includes(current.comment.toLowerCase())))
            && (!current["note-created"] || (page.file.cday && eval(new Date(page.file.cday).getTime() + cnotecreatedop + cnotecreated)))
            && (!current["note-modified"] || (page.file.mday && eval(new Date(page.file.mday).getTime() + cnotemodifiedop + cnotemodified)))
            && (!current.tags || matchtags(current.file.tags, page.file.tags))
            ;
    }

    function keyword(page) {
        return (!current.keyword || (page.content && page.content.toLowerCase().includes(current.keyword.toLowerCase()))
            || (page.notetitle && page.notetitle.toLowerCase().includes(current.keyword.toLowerCase())))
            ;
    }

    const pages = await Promise.all(
        dv.pages('"your-literature-notes-folder"')
        .where(passes)
        .sort(p => ({ "note-created": p.file.ctime, "note-modified": p.file.mtime, "note-title": p.file.name }[current.sortby] ?? p[current.sortby]), current.sortorder)
        .map(page => new Promise(async (resolve, reject) => {
            const content = await dv.io.load(page.file.path);
            resolve({
                link: page.file.link,
                author: page.author,
                title: page.title,
                publication: page.publication,
                date: page.date,
                notetitle: page.file.name,
                comment: page.comment,
                content
            });
        }))
    );

    dv.table(
        ["Note Title", "Author", "Title", "Publication", "Date", "Comment"],
            pages
            .filter(keyword)
            .map(p => [
                p.link,
                p.author,
                p.title,
                p.publication,
                p.date,
                p.comment
            ])
    );
} else {
    dv.paragraph("   Enter search terms into one or more fields to find research notes.");
}