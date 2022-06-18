keyword:: 

author:: 
title:: 
publication:: 
date:: 

note-title:: 
comment:: 
tag:: 

sortby:: date
sortorder:: desc

```dataviewjs
await dv.view("your-folder/your-sub-folder", { keyword: dv.current().keyword, author: dv.current().author, title: dv.current().title, publication: dv.current().publication, date: dv.current().date, notetitle: dv.current()["note-title"], comment: dv.current().comment, tag: dv.current().tag, sortby: dv.current().sortby, sortorder: dv.current().sortorder });
```

Keyword search finds a word or phrase in the entire note text + note title.
For text fields, this is a case-insensitive phrase search. 
Enter dates as YYYY-MM-DD. 
Enter tag as `#tag`.  
Enter exact field title and asc/desc to change sort order.