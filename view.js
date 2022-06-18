const current = dv.current();
const cdate = new Date(dv.current().date).getTime();
const searchterm = dv.current().tag === null ? '"your-notes-folder"' : '"your-notes-folder" and '+dv.current().tag;

if (current.keyword || current.author || current.title || current.publication || current.date || current["note-title"] || current.comment || current.tag) {

    function passes(page) {
        return (!current.author || (page.author && page.author.toLowerCase().includes(current.author.toLowerCase())))
            && (!current.title || (page.title && page.title.toLowerCase().includes(current.title.toLowerCase())))
            && (!current.publication || (page.publication && page.publication.toLowerCase().includes(current.publication.toLowerCase())))
	        && (!current.date || (page.date && new Date(page.date).getTime()===cdate))
            && (!current["note-title"] || (page.file.name && page.file.name.toLowerCase().includes(current["note-title"].toLowerCase())))
            && (!current.comment || (page.comment && page.comment.toLowerCase().includes(current.comment.toLowerCase())))
            ;
    }

function keyword(page) {
        return (!current.keyword || (page.content && page.content.toLowerCase().includes(current.keyword.toLowerCase()))
        || (page.notetitle && page.notetitle.toLowerCase().includes(current.keyword.toLowerCase())))

}

const pages = await Promise.all(
    dv.pages(searchterm)
    .where(passes)
    .sort(p => p[current.sortby], current.sortorder)
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
        ["Note", "Author", "Title", "Publication", "Date", "Comment"],
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