+++

draft       = false
date        = "2020-06-16"

hasCJKLanguage = false

author      = "Wayne Ho"
keywords    = ["configuration", "config", "documentation", "docs"]
description = ""
title       = "Configuration"
linkTitle   = "Configuration"

banner      = "/images/configuration.jpg"

categories  = ["Documentation"]
tags        = ["Documentation", "Configuration", "Config"]

images      = ["/images/configuration.jpg"]

[menus.quicklinks]
    weight = 1
    parent = "documentation"

[templates.single]
    layout = 1

[widgets.content]
    [widgets.content.banner]
        isEnabled = false

[widgets.tableOfContents]
     isEnabled   = false

[widgets.related]
    isEnabled               = true
    sections                = ["documentation"]
    numberOfRecords         = 4
    isVertical              = true
    numberOfRecordsPerRow   = 4

[widgets.recently]
    isEnabled               = false

+++

# Configuration

---

How to configure your Hugo-Bulma site. Check the follow example configuration settings.

```toml
#################### 

isQuirksMode = true     # set value to true will throw error as warning when building site, or as error


########## Design

[design]
    isRadiusless = true     # disable radius global if set to `true`

    # https://clrs.cc colors
    [design.colors]
        primary = "#0074D9"
        link    = "#0074D9"
        info    = "#0074D9"
        success = "#3D9970"
        warning = "#FF851B"
        danger  = "#FF4136"
        light   = ""
        dark    = ""

    [design.favicon]
        path = "images/icon.png"    # favicon file should put in `/assets/`

    [design.logo]
        path = "images/logo.svg"    # logo file should put in `/assets/`

    [design.brand]
        title = "Hugo - Bulma"
        tagline = "The Hugo theme based on Bulma"


########## Plugins

[plugins]
    [plugins.externalLink]
        isEnabled       = true
        isOpenInNewTab  = true
        pre             = ""
        post            = "<span class=\"icon\"><i class=\"fas fa-external-link-alt\"></i></span>"

    [plugins.googleAnalytics]
        isEnabled   = true
        trackingID  = ""
        anonymizeIP = false

    [plugins.googleTagManager]
        isEnabled   = true
        containerID = ""

    [plugins.googleAdSense]
        isEnabled   = true
        clientID    = ""

    [plugins.sharethis]
        isEnabled   = true
        propertyID  = ""


########## Templates

[templates]
    [templates.list]
        layout = 1  # available values: -1, 1, 2, 3, 4
    [templates.single]
        layout = 1  # available values: 1, 2, 3, 4
    [templates.error404]
    [templates.index.xml]
        timeFormat = "2006-01-02 15:04:05 +0800"


########## Widgets

[widgets]
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

    [widgets.breadcrumb]
        isEnabled = true
        separator = ""      # available values: `arrow`,`bullet`,`dot`,`succeeds`, default is `/`
        alignment = ""      # available values: `centered`,`right`, default show on left
        size      = ""      # available values: `small`,`medium`,`large`

    [widgets.footer]
        isEnabled       = true
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
                name   = "chevron-circle-up"
                color  = "primary"

    [widgets.content]
        isEnabled       = true
        [widgets.content.banner]
            isEnabled   = true

    [widgets.tableOfContents]
        isEnabled   = true
        isSticky    = true
        top         = "3rem"    # used for sticky, unit must be rem, will calcuate "top" in main.scss by value + design.navbar.height


    [widgets.categories]
        isEnabled       = true
        [widgets.categories.icon]
            isEnabled   = true
            pack        = "fas"
            name        = "dot-circle"
            color       = "primary"

    [widgets.tags]
        isEnabled       = true
        [widgets.tags.icon]
            isEnabled   = true
            pack        = "fas"
            name        = "tag"
            color       = "primary"

    [widgets.children]
        isEnabled       = true
        pageSize        = 10            # overwrite params.paginate
        dateFormat      = "2006-01-02"  # checkout golang time format
        style           = "3"           # available values: 1, 2, 3
        numberOfRecordsPerRow = 3       # for style="3"
        [widgets.children.categories]
            isEnabled = true
        [widgets.children.tags]
            isEnabled = true

    [widgets.pagination]
        alignment   = ""    # available values: `centered`,`right`, default show on left
        style       = ""    # available values: `rounded`
        size        = ""    # available values: `small`,`medium`,`large` 

    [widgets.recently]
        isEnabled               = true
        sections                = ["documentation"]
        numberOfRecords         = 6
        isVertical              = false
        numberOfRecordsPerRow   = 3     # for horizontal view; the value should <= numberOfRecords

    [widgets.related]
        isEnabled               = true
        sections                = []
        numberOfRecords         = 6
        isVertical              = true
        numberOfRecordsPerRow   = 3     # for horizontal view; the value should <= numberOfRecords

    [widgets.allCategories]
        isEnabled = true
        [widgets.allCategories.count]
            isEnabled = false
            color = "primary"

    [widgets.allTags]
        isEnabled = true
        [widgets.allTags.count]
            isEnabled = true
            color = "primary"


#################### 
```

---
