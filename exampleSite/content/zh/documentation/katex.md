+++

draft       = false
date        = "2020-06-08"

hasCJKLanguage = true

author      = "Wayne Ho"
keywords    = "katex,数学公式"
description = "使用KaTeX呈现数学公式"
title       = "数学公式"
linkTitle   = "数学公式"

banner      = ""
summary     = "使用KaTeX呈现数学公式"

tags        = ["katex", "数学公式"]
categories  = ["文档"]

images      = []
audio       = []
videos      = []

#[menus.navbar]
#    weight = 1
[menus.quicklinks]
    weight = 1
    parent = "documentation"
#[menus.legal]
#    weight = 1

[design.tableOfContents]
    isEnabled = false

[extensions]
    math    = true
    diagram = false

+++

# 数学公式

使用[KaTeX](https://katex.org)呈现数学公式。

---

Front Matter:

```toml
+++
draft       = false
date        = "2020-06-08"
hasCJKLanguage = true
author      = "Wayne Ho"
keywords    = "katex,数学公式"
description = "使用KaTeX呈现数学公式"
title       = "数学公式"
linkTitle   = "数学公式"
banner      = ""
summary     = "使用KaTeX呈现数学公式"
tags        = ["katex", "数学公式"]
categories  = ["文档"]
images      = []
audio       = []
videos      = []
#[menus.navbar]
#    weight = 1
[menus.quicklinks]
    weight = 1
    parent = "documentation"
#[menus.legal]
#    weight = 1
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
