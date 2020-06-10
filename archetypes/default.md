+++

draft       = true
date        = "{{ .Date }}"

hasCJKLanguage = false

author      = ""
keywords    = ""
description = ""
title       = "{{ replace .Name "-" " " | title }}"
linkTitle   = "{{ replace .Name "-" " " | title }}"

banner      = ""
summary     = ""

tags        = []
categories  = []

images      = []
audio       = []
videos      = []

#[menus.navbar]
#    weight = 1
#[menus.quicklinks]
#    weight = 1
#    parent = "PARENT"
#[menus.legal]
#    weight = 1

[design.tableOfContents]
    isEnabled = false

[extensions]
    math    = false
    diagram = false

+++

#{{ replace .Name "-" " " | title }}

---

WRITE CONTENT HERE

---
