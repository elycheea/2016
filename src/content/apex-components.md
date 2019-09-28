---
path: '/work/apex-components'
date: '2017-04'
title: 'Developing the Apex components package'
tags: ['development']
---

When we first released the [Apex design system](/work/apex-design-system), our focus was on making as much of the design system website reusable as possible. Within a few months of release, our understanding of the design system began to shift. As we struggled to understand how to apply our website-specific styles as reusable components, we began to see the design system website as an _instance_ of the design system — but not necessarily what housed the components themselves.

Our goal was to extract the reusable components of Apex from the design system website, and deliver them through a medium that would allow others to leverage and access updates to the components.

### Role
Development and documentation of the Apex components package. Worked with another front-end developer to deliver the package through IBM’s internal npm registry.

# Process & experience
Before beginning any development work, I worked with another front-end designer from the team to think through the best means for delivering our components. We considered directing any users of the design system components to the Github repository, but eventually settled on creating an npm package available through IBM’s internal npm registry.

In April 2017, I began extraction of the component HTML and CSS from the design system site to a separate repository. This repository would contain the basic markup and styles of our components as well as documentation on usage of the components.

To visualize the components in their new context, we used Nunjucks to create template partials for each component and Gulp to build our styles and templates into a single page we could view.

We released our first npm package for **apex-components** through IBM’s internal npm registry in June 2017. As I worked through integration of the newly released package in the [design system site](/work/apex-design-system), followed by the [Bluemine application](/work/bluemine), I found some styles and dependencies of the **apex-components** package were overly specific or opinionated and required rework.

In August 2017, I released the fully refactored package, and after updating the package in the design system site and the Bluemine application, removed styles we’d temporarily written to override the opinionated Apex styles.

# Outcome
The Apex package was the shared system of components we used both in our design system website and on Bluemine. The package included typography, colors, markup and styles for several components including:

- buttons
- cards
- dropdown menus
- form elements
- icons
- links
- lists
- modals
- pagination
- tables
- tabs
- tooltips

My colleague used the base components from the **apex-components** package to create the **apex-angular-components** package that included the more advanced implementations for autocomplete and tabs.

Beyond August 2017, development on the components slowed to prioritize a December deadline for the [rewritten and redesigned Bluemine](/work/bluemine). In December 2017, we made our last update to the package, replacing Helvetica Neue with IBM’s new typeface, IBM Plex Sans.

This latest version of the package is still in use today on the Apex website, Bluemine, and other assets created within the MD&I organization.