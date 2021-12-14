+++

draft       = false
date        = "2020-06-16"

hasCJKLanguage = false

author      = "Wayne Ho"
keywords    = ["configuration", "config", "documentation", "docs"]
description = ""
title       = "Configuration of Theme"
linkTitle   = "Configuration"

banner      = "/images/configuration.jpg"

categories  = ["Documentation"]
tags        = ["Documentation", "Configuration", "Config"]

images      = ["/images/configuration.jpg"]

[menus.quicklinks]
    weight = 1
    parent = "documentation"

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
        trackingID  = "UA-169816164-1"
        anonymizeIP = false

    [plugins.googleTagManager]
        isEnabled   = false
        containerID = ""

    [plugins.googleAdSense]
        isEnabled   = true
        clientID    = ""

    [plugins.sharethis]
        isEnabled   = true
        propertyID  = ""

########## Widgets

[widgets]
    [widgets.head]
        # multiple config sections allowed for multiple files
        # custom SASS/SCSS/CSS file, should put in `/assets/`
        #[widgets.head.styles.NAME]       # NAME: a unique name you given
        #    path = "styles/custom.scss"  # for local file
        #    url  = ""                    # for cdn file
        #    sri  = ""                    # for cdn file

        # multiple config sections allowed for multiple files
        # custom JS file, should put in `/assets/`
        #[widgets.head.scripts.NAME]      # NAME: a unique name you given
        #    path = "scripts/custom.js"   # for local file 
        #    url  = ""                    # for cdn file
        #    sri  = ""                    # for cdn file

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
        isEnabled           = true
        isBannerEnabled     = false
        isCategoriesEnabled =  true
        isTagsEnabled       = true

    [widgets.tableOfContents]
        isEnabled   = true
        isSticky    = true
        top         = "3rem"    # used for sticky, unit must be rem, will calcuate "top" in main.scss by value + design.navbar.height

    [widgets.categories]
        isEnabled       = true
        [widgets.categories.icon]
            isEnabled   = true
            pack        = "fas"
            name        = "folder"
            color       = "primary"

    [widgets.tags]
        isEnabled       = true
        [widgets.tags.icon]
            isEnabled   = true
            pack        = "fas"
            name        = "tag"
            color       = "primary"

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
        sections                = ["documentation"]
        numberOfRecords         = 6
        isVertical              = true
        numberOfRecordsPerRow   = 3     # for horizontal view; the value should <= numberOfRecords

    [widgets.allCategories]
        isEnabled = true
        [widgets.allCategories.count]
            isEnabled = false
            color = "info"

    [widgets.allTags]
        isEnabled = true
        [widgets.allTags.count]
            isEnabled = true
            color = "info"

    [widgets.error404]
        isEnabled = true


########## Templates

[templates]
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
    [templates.error404]
    [templates.error404.rows.1]
            [templates.error404.rows.1.columns.full]
                widgets = ["error404", "recently"]
    [templates.index.xml]
        timeFormat = "2006-01-02 15:04:05 +0800"

#################### 
```
