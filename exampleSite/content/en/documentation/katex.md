+++

draft       = false
date        = "2020-06-08"

author      = "Wayne Ho"
keywords    = "katex, math"
description = "Render math expression with KaTeX"
title       = "KaTeX"
linkTitle   = "KaTeX"

banner      = ""
summary     = "Render math expression with KaTeX"

tags        = ["katex", "math"]
categories  = ["Documentation"]

images      = []
audio       = []
videos      = []

[design]
    [design.tableOfContents]
        isEnabled = false

[extensions]
    math    = true
    diagram = false

[menu.quicklinks]
    identifier = "katex"
    parent = "documentation"
    weight = 2

+++

# KaTeX

Render math expressions by [KaTeX](https://katex.org).

---

Front Matter:

```toml
+++
draft       = true
date        = "2020-06-08"
author      = "Wayne Ho"
keywords    = ""
description = "Render math expression with KaTeX"
title       = "KaTeX"
linkTitle   = "KaTeX"
banner      = ""
summary     = ""
tags        = ["katex", "math"]
categories  = ["Documentation"]
images      = []
audio       = []
videos      = []
[menu.quicklinks]
    identifier = "katex"
    parent = "documentation"
    weight = 2
[design]
    [design.tableOfContents]
        isEnabled = false
[extensions]
    math    = true
    diagram = false
+++
```

Mardown:

```markdown
$$
\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.
$$
```

Render as: 

$$
\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.
$$

---

Mardown:

```markdown
$$\gamma_{n} = \frac{ 
\left | \left (\mathbf x_{n} - \mathbf x_{n-1} \right )^T 
\left [\nabla F (\mathbf x_{n}) - \nabla F (\mathbf x_{n-1}) \right ] \right |}
{\left \|\nabla F(\mathbf{x}_{n}) - \nabla F(\mathbf{x}_{n-1}) \right \|^2}$$
```

Render as:

$$\gamma_{n} = \frac{ 
\left | \left (\mathbf x_{n} - \mathbf x_{n-1} \right )^T 
\left [\nabla F (\mathbf x_{n}) - \nabla F (\mathbf x_{n-1}) \right ] \right |}
{\left \|\nabla F(\mathbf{x}_{n}) - \nabla F(\mathbf{x}_{n-1}) \right \|^2}$$

---
