

This [Dataview](https://github.com/blacksmithgu/obsidian-dataview) script provides a library-catalog interface in [Obdisian](https://obsidian.md/) to search literature notes, i.e. source metadata and PDF annotations imported via a plugin, for example, [Zotero Integration](https://github.com/mgmeyers/obsidian-zotero-integration). 

View a [demonstration](https://github.com/erazlogo/obsidian-lit-notes-search#demonstration) below.

This is a version of a more elaborate script that I use to search my own research notes, incorporated in my [starter vault for historians](https://github.com/erazlogo/obsidian-history-vault). 

## Search Features

- `keyword` finds text in the entire note text + note title.
- `note-title` finds text in the file name of your literature note (usually your source citekey).
- For text fields, this is a case-insensitive phrase search. 
- Enter dates as `YYYY-MM-DD`, `<YYYY-MM-DD` and `>YYYY-MM-DD`.
- Enter tags as `#tag1 #tag2`.
- Enter exact field title and `asc/desc` to sort by field.
- Leave sort fields blank to sort by `note-title, desc`.

## Installation

Necessary plugins and settings in Obsidian:
- Live Preview: On
- Dataview (Community plugins; Settings: Enable Javascript Queries - On, Automatic View Refreshing - On)
- A plugin or script to import your source metadata from a reference manager or bibtex file

Your literature notes should reside in a separate folder in your vault.
Place files `search.md` and `view.js` in any folder in your vault outside of your literature notes folder. Search.md has search fields where you will enter search terms and calls the main script from `view.js`. The main script needs to be in a separate file because it is too long to work with Live Preview.

You will need to adapt the scripts to your file structure:
- search.md 
    - enter path in your vault to view.js instead of `your-folder/your-subfolder`. 
- view.js 
    - enter the path to your literature notes folder instead of `your-literature-notes-folder`
    - make sure you use the search fields in the script (author, title, publication, date, comment) and rename field names in the script to match your own field names

## Demonstration

![Alt Text](https://publish-01.obsidian.md/access/36bec6aea73b5930cec9761dd7c60012/00%20meta/attachments/search%20literature%20notes.gif)