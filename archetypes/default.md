+++

draft           = false
date            = "{{ .Date }}"
lastmod         = "{{ .Date }}"
publishDate     = "{{ .Date }}"
expiryDate      = ""

isCJKLanguage   = false

linkTitle   = "{{ replace .Name "-" " " | title }}"
title       = "{{ replace .Name "-" " " | title }}"
subtitle    = ""
description = ""
summary     = ""

authors     = []
tags        = []
categories  = []
series      = []
images      = []
audio       = []
videos      = []

+++

#{{ replace .Name "-" " " | title }}
