---
title: Avoid Azure cold start
meta_title: ""
description: "this is meta description"
image: '/images/thumbnails/avoid-azure-cold-start.png'
date: 2023-02-24
categories: ["development"]
tags: ["azure"]
author: "Thierry Langie"
draft: false
---
The best way to avoid it, is to keep it warm by pinging a health endpoint through Azure Monitor. First things first. What is a health endpoint? This is an extra API endpoint that can be interrogated any time. The implementation of the endpoint can vary from scenario to scenario.

The simplest solution is just returning an HTTP 200. Does this have value? Definitely! If you ping the health endpoint and it returns an HTTP 200, this means that:

- Your function is up and running (e.g. after a deployment)
- The API gateway, in front of it, is well configured
- Security validations, such as certificate validation and API keys, work correctly
- Network routes are configured the right way
- …


A more advanced implementation of a health endpoint also checks the availability of its dependencies, like other messaging services or databases. Via Azure Monitor’s Availability Testing feature, you can easily ping your service on frequent intervals. If the service is not available, your IT department can be alerted proactively, before small problems become big. If you leverage release annotations throughout your CI/CD pipelines, you can also link decreased availability to specific releases that happened. Talking about automated releases: if you have a health endpoint implemented, consider implementing a release gate that verifies if your deployment was successful. All this combined, is a real devops win-win situation!
