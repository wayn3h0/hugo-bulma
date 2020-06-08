+++

draft       = false
date        = "2020-06-08"

author      = "Wayne Ho"
keywords    = "mermaid, diagrams, flowcharts"
description = "Generate Diagrams & Flowcharts from text by mermaid"
title       = "Diagrams & Flowcharts"
linkTitle   = "Diagrams & Flowcharts"

banner      = ""
summary     = "Generate Diagrams & Flowcharts from text by mermaid"

tags        = ["mermaid", "diagrams", "flowcharts"]
categories  = ["Documentation"]

images      = []
audio       = []
videos      = []

[design]
    [design.tableOfContents]
        isEnabled = false

[extensions]
    KaTeX   = false
    mermaid = true

[menu.quicklinks]
    identifier = "diagrams-flowcharts"
    parent = "documentation"
    weight = 1

+++

# Diagrams & Flowcharts

Generate Diagrams & Flowcharts from text by [mermaid](https://github.com/mermaid-js/mermaid).

---

Front Matter:

```toml
+++
draft       = false
date        = "2020-06-08"
author      = "Wayne Ho"
keywords    = "mermaid, diagrams, flowcharts"
description = "Generate Diagrams & Flowcharts from text by mermaid"
title       = "Diagrams & Flowcharts"
linkTitle   = "Diagrams & Flowcharts"
banner      = ""
summary     = "Generate Diagrams & Flowcharts from text by mermaid"
tags        = ["mermaid", "diagrams", "flowcharts"]
categories  = ["Documentation"]
images      = []
audio       = []
videos      = []
[menu.quicklinks]
    identifier = "diagrams-flowcharts"
    parent = "documentation"
    weight = 1
[design]
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
