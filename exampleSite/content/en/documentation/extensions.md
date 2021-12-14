+++

draft       = false
date        = "2020-06-16"

hasCJKLanguage = false

author      = "Wayne Ho"
keywords    = ["extensions", "documentation", "docs"]
description = ""
title       = "Extensions"
linkTitle   = "Extensions"

banner      = "/images/extensions.jpg"

categories  = ["Documentation"]
tags        = ["Documentation", "Extensions"]

images      = ["/images/extensions.jpg"]

[menus.quicklinks]
    weight = 5
    parent = "documentation"

[templates.single]
    layout = 1

[widgets.content]
    [widgets.content.banner]
        isEnabled = false

[widgets.related]
    isEnabled               = true
    sections                = ["documentation"]
    numberOfRecords         = 5
    isVertical              = true

[widgets.recently]
    isEnabled               = false

[extensions]
    math = true
    diagram = true

+++

# Extensions

---

The Hugo-Bulma add third-party libraries as Extensions.

## Data & Custom

### Data

The extensions data is defined at `/data/extensions.toml` as follow:

```toml
[1-jQuery]
    [1-jQuery.scripts.main]
        url = "https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js"
        sri = "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="

[2-FontAwesome]
    [2-FontAwesome.styles.main]
        url = "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.13.0/css/all.min.css"
        sri = "sha256-h20CPZ0QyXlBuAw7A+KluUYx/3pK+c7lYEpqLTlxjYQ="

[KaTeX]
    switches = ["extensions.KaTeX", "extensions.math"]
    [KaTeX.styles.main]
        url = "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css"
        sri = "sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq"
    [KaTeX.scripts.1-main]
        url = "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.js"
        sri = "sha384-y23I5Q6l+B6vatafAwxRu/0oK/79VlbSz7Q9aiSZUvyWYIYsd+qj+o24G5ZU2zJz"
    [KaTeX.scripts.2-AutoRender]
        url = "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/contrib/auto-render.min.js"
        sri = "sha384-kWPLUVMOks5AQFrykwIup5lo0m3iMkkHrD0uJ4H5cjeGihAutqP0yW0J6dpFiVkI"

[mermaid]
    switches = ["extensions.mermaid", "extensions.diagram"]
    [mermaid.scripts.main]
        url = "https://cdn.jsdelivr.net/npm/mermaid@8.5.0/dist/mermaid.min.js"
        sri = "sha256-bTMqpr7baOlzavIdddfmnQZsEBdfnK5p6KG8FcrwwD8="
```

### Custom

Add your definitions to `data/extensions.toml` as below rule, the Hugo-Bulma will load the extensions as you defined.

The rule of definition: 

```toml
[NUMBER-LIB]
    switches = [] 
    [NUMBER-LIB.[scripts|styles].NAME]
```

**switches**: configuration for turn on (set to true) in front matters

**NUMBER**: As you see [1-jQuery] and [2-FontAmwesome], number 1 and 2 is used to indicate the load ordering. 
The `NUMBER-` is not required if you don't care about load ordering. [KaTeX.scripts.1-main] and [KaTeX.scripts.2-AutoRender] are same thing.

**LIB**: Name of the Library, e.g.: jQuery (it does not matter what name is, as long as it is unique in the same level configuration section).

**[scripts|styles]**: Can not be changed! js file should use `scripts`, and css for `styles`.

**NAME**: Unique name at the same level configuration section (it does not matter what name is).







## Built-in Extensions

* **jQuery**: always load as Hugo-Bulma is required.
* **FontAwesome**: always load as Hugo-Bulma is required.
* **KaTeX**: for render math expressions.
* **mermaid**: for render Diagrams & Flowcharts.


## KaTeX / Math Expressions

Render math expressions by [KaTeX](https://katex.org).

---

### Configuration 

Enables in Front Matter:

```toml
[extensions]
    KaTeX = true
```
OR
```toml
[extensions]
    math = true
```

### Examples

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

## mermaid / Diagrams & Flowcharts

Generate Diagrams & Flowcharts from text by [mermaid](https://github.com/mermaid-js/mermaid).

---

### Configuration

Enables in Front Matter:

```toml
[extensions]
    mermaid = true
```
OR
```toml
[extensions]
    diagram = true
```

### Examples

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
