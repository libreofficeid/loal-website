---
title: "{{ replace .Name "-" " " | title }}"
image: "assets/images/img-activities-promoting.svg"
date: {{ .Date }}
tags: 
    - "tag1"
    - "tag2"
categories:
    - "examplecategory"
draft: true
---

## Set post thumbnail
- Define image field above to set post thumbnail. 
- Place your images on `assets` folder
- Recommended image size for post thumbnail is 400x300px.

## Tags and Categories
- You can set tags and categories using that format,
- Always using double quotes to wrap your desired tags or categories,

## Other Documents
- You can add some documents by placing it to assets folder relative to this file