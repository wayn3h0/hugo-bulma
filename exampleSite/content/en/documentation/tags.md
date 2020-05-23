+++

draft           = false
date            = "2020-05-15 12:07"
lastmod         = ""
isCJKLanguage   = false

linkTitle   = "Tag "
title       = "Tag"
subtitle    = "Tag"
description = "Tag"
summary     = "Tag"

authors     = []
tags        = ["tags", "tag"]
categories  = []
series      = []
images      = []
audio       = []
videos      = []

+++

# Tag

{{< tags >}}
<--group-->
    <--addons-->
        {{< tag color="primary" text="tag1">}}
        {{< tag text="tag2">}}
    <--/addons-->
<--/group-->
<--group-->
    <--addons-->
        {{< tag text="tag3">}}
        {{< tag text="tag4">}}
    <--/addons-->
<--/group-->
{{< /tags >}}

{{< columns isGapless=true >}}
    {{< columns/column >}}
        abcdefg
    {{< /columns/column >}}
    {{< columns/column >}}
       1234567 
    {{< /columns/column >}}
    {{< columns/column >}}
        {{< columns isGapless=true >}}
            {{< columns/column >}}
                abcdefg
            {{< /columns/column >}}
            {{< columns/column >}}
               1234567 
            {{< /columns/column >}}
        {{< /columns >}}
    {{< /columns/column >}}
{{< /columns >}}

{{% table isScrollable=true isBordered=true %}}
|  表头   | 表头  |
|  ----  | ----  |
| 单元格  | 单元格 |
| 单元格  | 单元格 |
{{% /table %}}




{{< video sourceURL="1.mp4" >}}
{{< /video >}}

## heading 2

|  表头   | 表头  |
|  ----  | ----  |
| 单元格  | 单元格 |
| 单元格  | 单元格 |

