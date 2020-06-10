+++

draft       = false
date        = "2020-06-08"

hasCJKLanguage = true

author      = "Wayne Ho"
keywords    = "mermaid, 图表, 流程图"
description = "使用mermaid呈现图表和流程图"
title       = "图表和流程图"
linkTitle   = "图表和流程图"

banner      = "images/mermaid.png"
summary     = "使用mermaid呈现图表和流程图"

tags        = ["mermaid", "图表", "流程图"]
categories  = ["文档"]

images      = ["images/mermaid.png"]
audio       = []
videos      = []

#[menus.navbar]
#    weight = 1
[menus.quicklinks]
    weight = 2
    parent = "documentation"
#[menus.legal]
#    weight = 1

[design.tableOfContents]
    isEnabled = false

[extensions]
    KaTeX   = false
    mermaid = true

+++

# 图表和流程图

使用[mermaid](https://github.com/mermaid-js/mermaid)呈现图表和流程图。

---

Front Matter:

```toml
+++
draft       = false
date        = "2020-06-08"
hasCJKLanguage = true
author      = "Wayne Ho"
keywords    = "mermaid, 图表, 流程图"
description = "使用mermaid呈现图表和流程图"
title       = "图表和流程图"
linkTitle   = "图表和流程图"
banner      = "images/mermaid.png"
summary     = "使用mermaid呈现图表和流程图"
tags        = ["mermaid", "图表", "流程图"]
categories  = ["文档"]
images      = ["images/mermaid.png"]
audio       = []
videos      = []
#[menus.navbar]
#    weight = 1
[menus.quicklinks]
    weight = 2
    parent = "documentation"
#[menus.legal]
#    weight = 1
[design.tableOfContents]
    isEnabled = false
[extensions]
    KaTeX   = false
    mermaid = true
+++
```

Shortcode:

```markdown
{{</* diagram */>}}
pie title NETFLIX
         "Time spent looking for movie" : 90
         "Time spent watching it" : 10
{{</* /diagram */>}}
```

Render as:

{{< diagram >}}
pie title NETFLIX
         "Time spent looking for movie" : 90
         "Time spent watching it" : 10
{{< /diagram >}}

Shortcode: 

```markdown
{{</* diagram */>}}
sequenceDiagram
    Alice ->> Bob: Hello Bob, how are you?
    Bob-->>John: How about you John?
    Bob--x Alice: I am good thanks!
    Bob-x John: I am good thanks!
    Note right of John: Bob thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.

    Bob-->Alice: Checking with John...
    Alice->John: Yes... John, how are you?
{{</* /diagram */>}}
```

Render as:

{{< diagram >}}
sequenceDiagram
    Alice ->> Bob: Hello Bob, how are you?
    Bob-->>John: How about you John?
    Bob--x Alice: I am good thanks!
    Bob-x John: I am good thanks!
    Note right of John: Bob thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.

    Bob-->Alice: Checking with John...
    Alice->John: Yes... John, how are you?
{{< /diagram >}}

---
