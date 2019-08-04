---
path: '/work/bluemine'
date: 'February 2017'
title: 'Bluemine redesign'
tags: ['product', 'design', 'development']
---

The field of technology has grown increasingly competitive over the years. For IBM to stay a leader in the space, IBMers need swift access to the latest market intelligence and research. Bluemine is an IBM internal intranet that aggregates market intelligence and research from third-party vendors, allowing IBMers to access information without individual subscriptions to each vendor.

In early 2017, our team set out on the application’s first major redesign. This involved rebuilding the entire frontend and backend from legacy systems, rethinking its information architecture and the experience of the application, and auditing and migrating existing content. Our goal was to rebuild the 15-year-old intranet as a simple yet comprehensive space for consuming, monitoring, and sharing market information.

### The team
MD&I’s design team, development team, marketing team, and analytics team, located globally in the US, India, the Philippines, Brazil, and Europe.

### Role
Throughout 2017 (the MVP), I was a designer and front-end developer on the search and activation squads. In 2018, I transitioned into the co-lead of the navigation and common UI squad. As both a designer and a member of the UI development team, I participated regularly in code reviews, which often included reviewing implementation against the designs, and eventually became one of the two main code reviewers, responsible for final reviews before merging pull requests.

# Process & experience
## Team structure
In the initial phase of the project, the design team broke into five workstreams, product, research, UI/design (visual), content strategy*, and front-end*. We also split into four squads, activation*, content creation, save and share*, and search*, with overlapping representation across workstreams.

* Teams I worked on

## Starting with research
Our design team began this project with generative research, an inventory of the UI, and an audit of existing content.

Select findings from the research team early on include:
- The experience was outdated and inconsistent,
- Search results weren’t always relevant or timely, with content a few years old surfacing at the top of results at times,
- The process for publishing new content was time-consuming and often included a 1-2 day delay before content was available for others to read.

## Taking inventory of UI and content
Following Brad Frost’s [atomic design](http://atomicdesign.bradfrost.com/), the Bluemine team took inventory of the different UI patterns across the legacy application. This inventory helped our team align on the vast inconsistency of the existing experience. From there, the designers from the visual workstream worked together to streamed the UI components that we would use across Bluemine.

As a part of the content workstream, we performed the content audit and uncovered 668 pages, 126 tools, and over 1800 active internal reports. We reached out to owners of content still linked on landing pages to ask if their reports should be migrated to the new system and found that many were still protective of their past work. Many of the content owners expressed that the work was no longer necessary to publicize, but they still wanted access to view their past work.

## Working in squads
In each squad, consisting of both designers and developers, we explored some early paper prototypes. The visual designers on the squad would bring them to mid-fidelity wires in Sketch. From there, the wires were made into clickable prototypes in Invision that users could interact with through early usability testing.

As a part of the front-end workstream, which was later incorporated into the development squads, I worked with other UI developers from the development teams, first learning Angular 2, and then creating our first components in search. At first, I focused on HTML markup and CSS, areas that other UI developers on the team were less comfortable with. As the project moved foward, I grew more involved with implementing many more features and pages while also managing a few items that fell outside of the four-squad structure, such as integrating the refactored Apex component library.

## Outcome
The MVP for the redesigned application launched on December 20, 2017 with a new improved search, new publishing tool, access to around 68,000 external reports, 2000 migrated internal reports, and 30 tools, dashboards, or third-party vendor sites. In the new experience, newly created reports are indexed almost immediately after publishing, a major improvement from the original 1-2 day delay, especially valuable when authors publish time-sensitive reports.

We followed a subscription-based model that reset at the start of the calendar year. In January 2018, as users trickled back in from the holidays, our user research team began 10-10-10 testing, to see initial reactions to the product in the first 10 minutes and how users’ behaviors and habits would change over time.

Throughout 2018, we continued development in two-week iterations. I continued to support the activation and search squads. Early feedback from research and metrics resulted in some fairly large changes to our subscription language. I worked with representatives from finance and metrics to arrive at a quick solution and implemented the corresponding changes. These changes improved our conversion rates from 80-90% abandonment to about 85% conversion.

Those early changes and continued improvements to the application beyond our initial MVP allowed us to reach our yearly target of 90k users by September 2018. By the end of the year, we reached over 107k users, exceeding our target by nearly 20%.

### Lessons learned
One of the most important lessons I learned from the Bluemine redesign is that transparency for transparency’s sake does not necessarily lead to a better experience. There were occasions when we chose to be gratuitiously transparent that ended up hurting the experience, such as providing too much information at the wrong time or by providing information to the incorrect audience. Transparency can be overwhelming, especially when presenting more information than is useful or relevant.