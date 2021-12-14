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

**Ref**: [`Hugo List Page Template`](https://gohugo.io/templates/lists/), [`Bulma Grid System`](https://bulma.io/documentation/columns/basics/)


### Configuration Example 1

```toml
[templates.list]
    [templates.list.rows.1]
        [templates.list.rows.1.columns.full]
            widgets = ["breadcrumb"]
    [templates.list.rows.2]
        [templates.list.rows.2.columns.full]
            offset = 0
            width = 12
            widgets = ["content"]
    [templates.list.rows.3]
        [templates.list.rows.3.columns.left]
            width = 8
            widgets = ["children"]
        [templates.list.rows.3.columns.right]
            width = 4
            widgets = ["recently", "allcategories", "alltags"]
```

**View**:

```html
|-------------------------------------------|
| widget:header (fixed)                     |
|-------------------------------------------|
| widget:breadcrumb                         |
|-------------------------------------------|
| widget:content                            |
|-------------------------------------------|
| widget:children   |   widget:recently     |
|                   |   widget:allcategories|
|                   |   widget:alltags      |
|-------------------------------------------|
| widget:footer (fixed)                     |
|-------------------------------------------|
```

### Configuration Example 2

```toml
[templates.list]
    [templates.list.rows.1]
        [templates.list.rows.1.columns.full]
            widgets = ["breadcrumb"]
    [templates.list.rows.2]
        [templates.list.rows.2.columns.left]
            width = 6
            widgets = ["allcategories"]
        [templates.list.rows.2.columns.right]
            width = 6
            widgets = ["alltags"]
    [templates.list.rows.3]
        [templates.list.rows.3.columns.full]
            widgets = ["content"]
    [templates.list.rows.4]
        [templates.list.rows.4.columns.full]
            widgets = ["children"]
    [templates.list.rows.5]
        [templates.list.rows.5.columns.full]
            widgets = ["recently"]
```

**View**:

```html
|-------------------------------------------|
| widget:header (fixed)                     |
|-------------------------------------------|
| widget:breadcrumb                         |
|-------------------------------------------|
| widget:allcategories  | widget:alltags    |
|-------------------------------------------|
| widget:content                            |
|-------------------------------------------|
| widget:children                           |
|-------------------------------------------|
| widget:recently                           |
|-------------------------------------------|
| widget:footer (fixed)                     |
|-------------------------------------------|
```

## Layouts of Taxonomy Page Template

Same as Above (List Page Template).

### Configuration Example

```toml
[templates.taxonomy]
        [templates.taxonomy.rows.1]
            [templates.taxonomy.rows.1.columns.full]
                widgets = ["breadcrumb"]
        [templates.taxonomy.rows.2]
            [templates.taxonomy.rows.2.columns.left]
                width = 8
                widgets = ["children"]
            [templates.taxonomy.rows.2.columns.right]
                width = 4
                widgets = ["allcategories", "alltags", "recently"]

```

## Layouts of Signle Page Template

Same as Above (List Page Template).

### Configuration Example

```toml
[templates.single]
    [templates.single.rows.1]
        [templates.single.rows.1.columns.full]
            widgets = ["breadcrumb"]
    [templates.single.rows.2]
        [templates.single.rows.2.columns.left]
            width = 8
            widgets = ["content"]
        [templates.single.rows.2.columns.right]
            width = 4
            widgets = ["tableofcontents", "related", "recently"]

```

## Layouts of Error 404 Page Template

Same as Above (List Page Template).

### Configuration Example

```toml
[templates.error404]
    [templates.error404.rows.1]
        [templates.error404.rows.1.columns.full]
            widgets = ["error404", "recently"]

```

