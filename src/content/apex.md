---
path: "/work/apex-design-system"
date: "2016-12"
title: "Apex design system"
tags: ['branding']
---

### Role
Co-develop the Apex design system website and develop and deliver the Apex components package through npm.

### Skills & tools
HTML/CSS, Gulp, Nunjucks, npm

# Goal
Define the MD&I brand mssion and develop the design system website and components to be used across internal communications, landing pages, tools, and intranets.

# tl;dr
We created the first design system for the internal Market Development & Insights organization, including the brand mission, voice, and tone. We built a component package maintained on Github and available through IBM’s internal npm registry.

# Background
As a new design team in Market Development & Insights, we were tasked with writing the new mission statement and redefining the sub-brand of the internal organization while aligning to IBM Design. MD&I’s existing branding was several years old and no longer aligned with the current IBM Design Language released in 2014. <!-- The dated branding also felt inconsistent with MD&I’s role in keeping up with the latest market information. -->

# Process
We interviewed our executive leadership as well as professionals working under the MD&I umbrella to better understand the organization goals and expectations. Many expressed interest in a clear, comprehensive mission statement that was also short enough to be memorable.

Once we defined a mission statement and brand principles for the organization, we chose color palettes that we felt would help communicate those concepts.

Once our colors were established, we began exploring identifiers (logos) and creating the initial components of our design system. Without an existing context for our components, we baed our intiial components on common patterns that would feel familiar but in our own brand colors.

# Outcomes
We released the initial site for our design system in January 2017, leveraging npm, Gulp, and Nunjucks as build tools and Express for basic routing.

In the coming months, we identified a need to separate our basic components from the website itself. In April 2017, I began extraction of the component HTML and CSS from the design system site to a separate repository. We released our first npm package `apex-components` through IBM’s internal NPM registry in June 2017.

We would go on to integrate the Apex component packages back to the design system website and the Bluemine application.

The design system website would continue to be the living language of our organization, providing communication guidelines and best practices. The components and styles were available to others within the organization to adopt or extend when building internal tools.