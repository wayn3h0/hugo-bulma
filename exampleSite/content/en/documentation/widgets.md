+++

draft       = false
date        = "2020-06-15"

hasCJKLanguage = false

author      = "Wayne Ho"
keywords    = []
description = ""
title       = "Widgets"
linkTitle   = "Widgets"

banner      = "/images/widgets.jpg"

categories  = ["Documentation"]
tags        = ["Documentation", "Widgets"]

images      = ["/images/widgets.jpg"]

[menus.quicklinks]
    weight = 3
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

# Widgets

---

## Widget `head`

The `head` section in HTML.

### Configuration

```toml
[widgets.head]
    # multiple config sections allowed for multiple files
    # custom SASS/SCSS/CSS file, should put in `/assets/`
    [widgets.head.styles.NAME]       # NAME: a unique name you given
        path = "styles/custom.scss"  # for local file
        url  = ""                    # for cdn file
        sri  = ""                    # for cdn file

    # multiple config sections allowed for multiple files
    # custom JS file, should put in `/assets/`
    [widgets.head.scripts.NAME]      # NAME: a unique name you given
        path = "scripts/custom.js"   # for local file 
        url  = ""                    # for cdn file
        sri  = ""                    # for cdn file
```

## Widget `header` 

The `header` section in HTML. Ref: [Bulma Component: Navbar](https://bulma.io/documentation/components/navbar/).

### Configuration

```toml

[widgets.header]
    isEnabled           = true
    isFixedTop          = true 
    isSpaced            = false     # enable paddings as 1rem (top and bottom) and 2rem (left and right) 
    isTransparent       = true      # enable navbar transparent
    hasShadow           = true      # enable navbar shadow (botoom line)
    hasTextWeightBold   = true      # enable text bold
    backgroundColor     = ""        # available values: `primary`,`link`,`info`,`success`,`warning`,`danger`,`black`,`dark`,`light`,`white`

    [widgets.header.logo]
        isEnabled   =  true
        width       = ""        # unit must be px
        height      = "60px"    # width & height required one at least

    [widgets.header.menu]
        leftMargin  = "2rem"
        rightMargin = ""
```

## Widget `footer`

The `footer` in HTML. Ref: [Bulma Layout: Footer](https://bulma.io/documentation/layout/footer/).


### Configuration

```toml
[widgets.footer]
    isEnabled       = false
    isPaddingless   = true

    [widgets.footer.logo]
        isEnabled   = true
        isLink      = false
        width       = ""        # unit must be px
        height      = "50px"    # width & height required one at least

    [widgets.footer.backToTop]
        isEnabled   = true 
        [widgets.footer.backToTop.position]
            right   = "2rem"
            bottom  = "2rem"
        [widgets.footer.backToTop.icon]
            pack   = "fas"
            name   = "chevron-up"
            color  = "dark"
```

## Widget `breadcrumb`

The breadcrub nav. Ref: [Bulma Breadcrumb](https://bulma.io/documentation/components/breadcrumb/).

### Configuration

```toml
    [widgets.breadcrumb]
        isEnabled = true
        separator = ""      # available values: `arrow`,`bullet`,`dot`,`succeeds`, default is `/`
        alignment = ""      # available values: `centered`,`right`, default show on left
        size      = ""      # available values: `small`,`medium`,`large`
```

## Widget `content`

### Configuration

```toml
    [widgets.content]
        isEnabled           = true
        isBannerEnabled     = false
        isCategoriesEnabled =  true
        isTagsEnabled       = true
```

## Widget `tableofcontents`

### Configuration

```toml
    [widgets.tableOfContents]
        isEnabled   = true
        isSticky    = true
        top         = "3rem"    # used for sticky, unit must be rem, will calcuate "top" in main.scss by value + design.navbar.height
```

## Widget `categories`

### Configuration

```toml
    [widgets.categories]
        isEnabled       = true
        [widgets.categories.icon]
            isEnabled   = true
            pack        = "fas"
            name        = "folder"
            color       = "primary"
```

## Widget `tags`

### Configuration

```toml
    [widgets.tags]
    isEnabled       = true
    [widgets.tags.icon]
        isEnabled   = true
        pack        = "fas"
        name        = "tag"
        color       = "primary"
```


## Widget `children`

### Configuration

```toml
    [widgets.children]
        isEnabled               = true
        style                   = 3             # available values: 1, 2, 3
        dateFormat              = "2006-01-02"  # checkout golang time format
        pageSize                = 12            # overwrite params.paginate
        numberOfRecordsPerRow   = 3             # for style=3
        isAuthorEnabled         = true
        isDateEnabled           = true
        isCategoriesEnabled     = true
        isTagsEnabled           = true

```

## Widget `pagination`

### Configuration

```toml
    [widgets.pagination]
    alignment   = ""    # available values: `centered`,`right`, default show on left
    style       = ""    # available values: `rounded`
    size        = ""    # available values: `small`,`medium`,`large` 
```

## Widget `allcategories`

### Configuration

```toml
    [widgets.allCategories]
        isEnabled = true
        [widgets.allCategories.count]
            isEnabled = false
            color = "info"
```

## Widget `alltags`

### Configuration

```toml
    [widgets.allTags]
        isEnabled = true
        [widgets.allTags.count]
            isEnabled = true
            color = "info"
```

## Widget `recently`

### Configuration

```toml
    [widgets.recently]
        isEnabled               = true
        sections                = ["documentation"]
        numberOfRecords         = 6
        isVertical              = false
        numberOfRecordsPerRow   = 3     # for horizontal view; the value should <= numberOfRecords
```

## Widget `related`

### Configuration

```toml
    [widgets.related]
        isEnabled               = true
        sections                = ["documentation"]
        numberOfRecords         = 6
        isVertical              = true
        numberOfRecordsPerRow   = 3     # for horizontal view; the value should <= numberOfRecords
```

## Widget `error404`

### Configuration

```toml
    [widgets.error404]
        isEnabled = true

```
