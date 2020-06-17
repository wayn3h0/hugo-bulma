+++

draft       = false
date        = "2020-06-16"

hasCJKLanguage = false

author      = "Wayne Ho"
keywords    = ["layouts", "templates", "documentation", "docs"]
description = ""
title       = "Layouts"
linkTitle   = "Layouts"

banner      = "/images/layouts.jpg"

categories  = ["Documentation"]
tags        = ["Documentation", "Layouts", "Page Template"]

images      = ["/images/layouts.jpg"]

[menus.quicklinks]
    weight = 2
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

+++

# Layouts

---

## Layouts of List Page Template

**Ref**: [`Hugo List Page Template`](https://gohugo.io/templates/lists/)


### Configuration `layout = -1`

```toml
[templates.list]
    layout = -1
```

**Set layout as -1 if you does not use any widgets in content block.**

**View**:

```html
|-------------------------------------------|
| widget:header                             |
|-------------------------------------------|
| widget:breadcrumb                         |
|-------------------------------------------|
| widget:content                            |
|-------------------------------------------|
| widget:footer                             |
|-------------------------------------------|
```



### Configuration `layout = 1`


```toml
[templates.list]
    layout = 1
```

**View**:

```html
|-------------------------------------------|
| widget:header                             |
|-------------------------------------------|
| widget:breadcrumb                         |
|-------------------------------------------|
| widget:content                            |
|-------------------------------------------|
| widget:children   |   widget:recently     |
|                   |                       |
|                   |                       |
|-------------------------------------------|
| widget:footer                             |
|-------------------------------------------|
```

**View (recently widget is disabled)**:

```html
|-------------------------------------------|
| widget:header                             |
|-------------------------------------------|
| widget:breadcrumb                         |
|-------------------------------------------|
| widget:content                            |
|-------------------------------------------|
| widget:children                           |
|                                           |
|                                           |
|-------------------------------------------|
| widget:footer                             |
|-------------------------------------------|
```

### Configuration `layout = 2`

```toml
[templates.list]
    layout = 2
```

**View**:

```html
|-------------------------------------------|
| widget:header                             |
|-------------------------------------------|
| widget:breadcrumb                         |
|-------------------------------------------|
| widget:content                            |
|-------------------------------------------|
| widget:recently   |   widget:children     |
|                   |                       |
|                   |                       |
|-------------------------------------------|
| widget:footer                             |
|-------------------------------------------|
```

**View (recently widget is disabled)**:

```html
|-------------------------------------------|
| widget:header                             |
|-------------------------------------------|
| widget:breadcrumb                         |
|-------------------------------------------|
| widget:content                            |
|-------------------------------------------|
| widget:children                           |
|                                           |
|                                           |
|-------------------------------------------|
| widget:footer                             |
|-------------------------------------------|
```

### Configuration `layout = 3`

```toml
[templates.list]
    layout = 3
```

**View**:

```html
|-------------------------------------------|
| widget:header                             |
|-------------------------------------------|
| widget:breadcrumb                         |
|-------------------------------------------|
| widget:content                            |
|-------------------------------------------|
| widget:children                           |
|                                           |
|                                           |
|-------------------------------------------|
| widget:recently                           |
|-------------------------------------------|
| widget:footer                             |
|-------------------------------------------|
```

### Configuration `layout = 4`

```toml
[templates.list]
    layout = 4
```

**View**:

```html
|-------------------------------------------|
| widget:header                             |
|-------------------------------------------|
| widget:breadcrumb                         |
|-------------------------------------------|
| widget:recently                           |
|-------------------------------------------|
| widget:content                            |
|-------------------------------------------|
| widget:children                           |
|                                           |
|                                           |
|-------------------------------------------|
| widget:footer                             |
|-------------------------------------------|
```


## Layouts of Signle Page Template

> **Ref**: [`Hugo Single Page Template`](https://gohugo.io/templates/single-page-templates/)

### Configuration `layout = 1`

```toml
[templates.single]
    layout = 1
```

**View:**

```html
|-------------------------------------------|
| widget:header                             |
|-------------------------------------------|
| widget:breadcrumb                         |
|-------------------------------------------|
| widget:content                            |
|-------------------------------------------|
| widget:children   | widget:tableofcontents|
|                   | widget:related        |
|                   | widget:recently       |
|-------------------------------------------|
| widget:footer                             |
|-------------------------------------------|
```

**View (tableofcontents, related and recently widgets are all disabled)**:

```html
|-------------------------------------------|
| widget:header                             |
|-------------------------------------------|
| widget:breadcrumb                         |
|-------------------------------------------|
| widget:content                            |
|-------------------------------------------|
| widget:children                           |
|                                           |
|                                           |
|-------------------------------------------|
| widget:footer                             |
|-------------------------------------------|
```

### Configuration `layout = 2`

```toml
[templates.single]
    layout = 2
```

**View:**

```html
|-------------------------------------------|
| widget:header                             |
|-------------------------------------------|
| widget:breadcrumb                         |
|-------------------------------------------|
| widget:content                            |
|-------------------------------------------|
| widget:tableofcontents | widget:children  |
| widget:related         |                  |
| widget:recently        |                  |
|-------------------------------------------|
| widget:footer                             |
|-------------------------------------------|
```

**View (tableofcontents, related and recently widgets are all disabled)**:

```html
|-------------------------------------------|
| widget:header                             |
|-------------------------------------------|
| widget:breadcrumb                         |
|-------------------------------------------|
| widget:content                            |
|-------------------------------------------|
| widget:children                           |
|                                           |
|                                           |
|-------------------------------------------|
| widget:footer                             |
|-------------------------------------------|
```

### Configuration `layout = 3`

```toml
[templates.single]
    layout = 3
```
**View:**

```html
|-------------------------------------------|
| widget:header                             |
|-------------------------------------------|
| widget:breadcrumb                         |
|-------------------------------------------|
| widget:content                            |
|-------------------------------------------|
| widget:children   | widget:tableofcontents|
|                   |                       |
|                   |                       |
|-------------------------------------------|
| widget:related                            |
|-------------------------------------------|
| widget:recently                           |
|-------------------------------------------|
| widget:footer                             |
|-------------------------------------------|
```

**View (tableofcontents widget is disabled)**:

```html
|-------------------------------------------|
| widget:header                             |
|-------------------------------------------|
| widget:breadcrumb                         |
|-------------------------------------------|
| widget:content                            |
|-------------------------------------------|
| widget:children                           |
|                                           |
|                                           |
|-------------------------------------------|
| widget:related                            |
|-------------------------------------------|
| widget:recently                           |
|-------------------------------------------|
| widget:footer                             |
|-------------------------------------------|
```
### Configuration `layout = 4`

```toml
[templates.single]
    layout = 4
```
**View:**

```html
|-------------------------------------------|
| widget:header                             |
|-------------------------------------------|
| widget:breadcrumb                         |
|-------------------------------------------|
| widget:content                            |
|-------------------------------------------|
| widget:related                            |
|-------------------------------------------|
| widget:recently                           |
|-------------------------------------------|
| widget:children   | widget:tableofcontents|
|                   |                       |
|                   |                       |
|-------------------------------------------|
| widget:footer                             |
|-------------------------------------------|
```

**View (tableofcontents widget is disabled)**:

```html
|-------------------------------------------|
| widget:header                             |
|-------------------------------------------|
| widget:breadcrumb                         |
|-------------------------------------------|
| widget:content                            |
|-------------------------------------------|
| widget:children                           |
|                                           |
|                                           |
|-------------------------------------------|
| widget:related                            |
|-------------------------------------------|
| widget:recently                           |
|-------------------------------------------|
| widget:footer                             |
|-------------------------------------------|
```



---
