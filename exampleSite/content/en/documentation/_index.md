+++

draft       = false
date        = "2020-06-16"

hasCJKLanguage = false

author      = "Wayne Ho"
keywords    = ["documentation"]
description = ""
title       = "Documentation"
linkTitle   = "Documentation"

tags        = ["Documentation"]
categories  = ["Documentation"]

[templates.list]
    layout = 3

[widgets.content]
    isEnabled = false

[widgets.children]
    isEnabled = true
    pageSize = 4
    style = "3"
    numberOfRecordsPerRow = 3
    [widgets.children.categories]
        isEnabled = true
    [widgets.children.tags]
        isEnabled = true

[widgets.tags]
    isEnabled = true

[widgets.categories]
    isEnabled       = false

+++

# Documentation

Everything you need to create a website with Hugo-Bulma.


{{< columns >}}

{{< columns/column >}}{{< box >}}{{< markdown >}}
![Configuration](/images/configuration.jpg)
## [Configuration]({{< relref "configuration.md" >}})

Configure your Hugo-Bulma site.
{{< /markdown >}}{{< /box >}}{{< /columns/column >}}

{{< columns/column >}}{{< box >}}{{< markdown >}}
![Layouts](/images/layouts.jpg)
## [Layouts]({{< relref "layouts.md" >}})

Built-in page layouts.
{{< /markdown >}}{{< /box >}}{{< /columns/column >}}

{{< /columns >}}


{{< columns >}}

{{< columns/column >}}{{< box >}}{{< markdown >}}
![Widgets](/images/widgets.jpg)
## [Widgets]({{< relref "widgets.md" >}})

Build pages by widgets.
{{< /markdown >}}{{< /box >}}{{< /columns/column >}}

{{< columns/column >}}{{< box >}}{{< markdown >}}
![Plugins](/images/plugins.jpg)
## [Plugins]({{< relref "plugins.md" >}})

Third-party services or Hugo's hooks.
{{< /markdown >}}{{< /box >}}{{< /columns/column >}}

{{< columns/column >}}{{< box >}}{{< markdown >}}
![Extensions](/images/extensions.jpg)
## [Extensions]({{< relref "extensions.md" >}})

Third-party libraries.
{{< /markdown >}}{{< /box >}}{{< /columns/column >}}

{{< /columns >}}
