keyword:: 

author:: 
title:: 
publication:: 
date:: 

note-title:: 
comment:: 
tags:: 

sortby:: date
sortorder:: desc

```dataviewjs
await dv.view("your-folder/your-sub-folder", { });
```

Keyword search finds a word or phrase in the entire note text + note title.
For text fields, this is a case-insensitive phrase search. 
Enter dates as `YYYY-MM-DD`, `<YYYY-MM-DD` and `>YYYY-MM-DD`.
Enter tags as `#tag1 #tag2`.
Enter exact field title and `asc/desc` to sort by field. 
Leave sort fields blank to sort by `note-title, desc`.