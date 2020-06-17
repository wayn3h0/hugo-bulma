+++

draft       = false
date        = "2020-06-16"

hasCJKLanguage = false

author      = "Wayne Ho"
keywords    = ["plugins", "documentation", "docs"]
description = ""
title       = "Plugins"
linkTitle   = "Plugins"

banner      = "/images/plugins.jpg"

categories  = ["Documentation"]
tags        = ["Documentation", "Plugins"]

images      = ["/images/plugins.jpg"]

[menus.quicklinks]
    weight = 4
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

# Plugins

--- 

The Hugo-Bulma add third-party services or Hugo's hooks as Plugins.

## External Link

A hook of Hugo processing external links in markdown.

### Configuration

```toml
[plugins.externalLink]
    isEnabled       = true
    isOpenInNewTab  = true
    pre             = ""
    post            = "<span class=\"icon\"><i class=\"fas fa-external-link-alt\"></i></span>"
```

## Google Analytics

[Website](https://analytics.google.com/)

### Configuration

```toml
[plugins.googleAnalytics]
    isEnabled       = true
    trackingID  = ""
    anonymizeIP = false
```

**NOTE**: Google Analytics will auto disabled if Google Tag Manager is enabled.

## Google Tag Manager

[Website](https://tagmanager.google.com/)

### Configuration

```toml
[plugins.googleTagManager]
    isEnabled   = true
    containerID = ""
```

## Google AdSense

[Website](https://www.google.com/adsense/)

### Configuration

```toml
[plugins.googleAdSense]
    isEnabled   = true
    clientID    = ""
```

## ShareThis

[Website](https://sharethis.com/)

### Configuration

```toml
[plugins.sharethis]
    isEnabled   = true
    propertyID  = ""
```

---
