+++

draft           = false
date            = "2020-05-15 12:07"
lastmod         = ""
isCJKLanguage   = false

linkTitle   = "Diagrams & Flowcharts"
title       = "Diagrams & Flowcharts"
subtitle    = "Generate Diagrams & Flowcharts from text by mermaid"
description = "Generate Diagrams & Flowcharts from text by mermaid"
summary     = "Generate Diagrams & Flowcharts from text by mermaid"

authors     = []
tags        = ["mermaid", "diagrams", "flowcharts"]
categories  = []
series      = []
images      = []
audio       = []
videos      = []


[extensions]
    KaTeX   = false
    mermaid = true


+++

# Diagrams & Flowcharts

Generate Diagrams & Flowcharts from text by [mermaid](https://github.com/mermaid-js/mermaid).

---

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
