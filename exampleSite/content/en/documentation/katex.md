+++

draft           = false
date            = "2020-05-15"
lastmod         = "2020-05-15"
publishDate     = "2020-05-15"
expiryDate      = ""

isCJKLanguage   = false

linkTitle   = "KaTeX "
title       = "KaTeX"
subtitle    = "Render math expression with KaTeX"
description = "Render math expression with KaTeX"
summary     = "Render math expression with KaTeX"

authors     = []
tags        = ["katex", "math"]
categories  = []
series      = []
images      = []
audio       = []
videos      = []

[extensions]
    math    = true
    diagram = false

+++

# KaTeX

Render math expressions by [KaTeX](https://katex.org).

---

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

