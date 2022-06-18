

This script provides a library-catalog interface to search literature notes, i.e. annotations imported from PDF files via a plugin, for example, [Zotero Integration](https://github.com/mgmeyers/obsidian-zotero-integration). See a demonstration below.

It is a version of a more elaborate script that I use to search my historical research notes (bascially "atomic" literature notes), incorporated in my [starter vault for historians](https://github.com/erazlogo/obsidian-history-vault). If you are doing archival research, check it out.

## Search Features

`Keyword` finds text in the entire note text + note title.
`Note-title` finds text in the file name of your literature note (usually your source citekey).
For text fields, this is a case-insensitive phrase search. 
Enter dates as YYYY-MM-DD. 
Enter tag as `#tag`.  
Enter exact field title and asc/desc to change sort order.

Features coming soon(ish): 
- search by multiple tags (currently you can only search by one tag)
- opearators for date search (< > etc)
- maybe `OR` search for text fields

## Installation

Necessary plugins and settings in Obsidian:
- Live Preview: On
- Dataview (Community plugins; Settings: Javascript Queries - On, Automatic View Refreshing - On)

Your literature notes should reside in a separate folder in your vault.
Place files `search.md` and `view.js` in any folder in your vault outside of your literature notes folder. Search.md has search fields where you will enter search terms and calls the main script from `view.js`. The main script needs to be in a separate file because it is too long to work with Live Preview.

You will need to adapt the scripts to your file structure:
search.md 
- enter path to view.js instead of `your-folder/your-subfolder`
view.js 
- enter the path to your literature notes folder instead of `your-literature-folder`
- make sure you use the search fields in the script (author, title, publication, date, comment) and rename field names in the script to match your own field names

## Demonstration

![Alt Text](https://publish-01.obsidian.md/access/36bec6aea73b5930cec9761dd7c60012/00%20meta/attachments/search%20literature%20notes.gif)