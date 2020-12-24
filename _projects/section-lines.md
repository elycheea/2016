---
layout: project
title: "Section Lines"
categories: product
date: May 2015
hero: section_lines-screenshot.png
heroColor: 176A9E
role: "Design and development of new layout for checklist section and test
attempt lines. Improve interactions and create new icons."
skills:
  - title: HTML/CSS
  - title: jQuery
  - title: Sketch
    for:   mockups and icons
  - title: Browserstack
    for:   testing browser compatibility
published: true
---

A request we often heard from our users was to add the ability to see who
responded to a line in a checklist section or test attempt and when the line was
answered. While this information is tracked in our history table, this
information was not available for users to view.

<figure class="figure--image">
  <img src="{{ site.baseurl }}/assets/projects/section_lines-old.png"
  alt="Example of checklist section lines, including a heading and attribute.">
  <figcaption>Example of checklist section lines, including a heading line and a
  line with an attribute.</figcaption>
</figure>

In order to accommodate the additional details in a compact interface, we needed
to take advantage of the horizontal space as well as improve the visual
hierarchy of the lines. The engineers using our product often emphasize the
importance of viewing as many lines at a time for scannability and efficiency.
The product manager and I discussed and sketched **[a few ideas]({{site.url}}/assets/projects/section_lines-sketches.pdf)**
that would hopefully improve readability and add more detail to each line
without taking away too much from the vertical real estate.

Additionally, in the current implementation, the fields for line notes and
attributes were both accessible via the Notes button. As attributes became more
widely used in the product, lumping them with the existing notes field no longer
felt sufficient. We decided it was time to separate notes and attributes into
two distinct fields.

<figure class="figure--image">
  <div class="figures--2x1">
    <img src="{{ site.url }}/assets/projects/section_lines-3.1.png">
    <img src="{{ site.url }}/assets/projects/section_lines-5.1.png">
  </div>
  <img src="{{ site.url }}/assets/projects/section_lines-6.2.png">
  <figcaption>Selected layouts from initial round of iterations in Sketch.</figcaption>
</figure>

After several rounds of iterations using **Sketch**, I switched to
the browser to implement a layout we felt was promising. When we demonstrated
the new layout to a few of the engineers, however, they raised concerns over the
increase in whitespace, which took away from the number of lines they could view
at once. In reducing the line descriptions to a more comfortable measure<sup
class="reference"><a id="reference-1" href="#note-1">[1]</a></sup> and
separating the line note and attribute fields, we became too liberal with our
use of whitespace.

The engineers acknowledged that the additional details of who answered the line
and when would reduce the number of lines they could view at a time, but in our
initial redesign, what used to allot them 9-13 lines was now reduced to 3-6,
depending on the level of detail in the individual lines.<sup class="reference"><a id="reference-2" href="#note-2">[2]</a></sup>

Knowing that lines in a given checklist section or test attempt are often
answered by a single user, showing respondent details on each line could grow
repetitive. Additionally, we found that users were generally more concerned
about viewing the name of the respondent and when the answer was provided in the
event of a dispute. With this information, we arrived at a new expanded lines
concept that would use progressive disclosure to show respondent details only
when users requested the information.

<figure class="figure--image">
  <img src="{{ site.url }}/assets/projects/section_lines-expanded.png">
  <figcaption>Expanded lines show details of who answered the the line, note, or
  attribute and when the answer was provided.</figcaption>
</figure>

In the final implementation, we were able to improve scannability of checklist
and test lines with clearer headings, a more comfortable measure for line
descriptions, and the separation of notes and attributes. In some cases, the new
design can even achieve more lines in the same space as the initial design.

<figure class="figure--image">
    <img src="{{ site.url }}/assets/projects/section_lines-v4.png">
    <figcaption>Checklist section lines before the redesign.</figcaption>
</figure>

<figure class="figure--image">
  <img src="{{ site.url }}/assets/projects/section_lines-final.png">
  <figcaption>The final implementation of checklist section lines.</figcaption>
</figure>

#### tl;dr
<blockquote class="quote--cited" cite="http://blog.cxalloy.com/post/132312963570/new-tq-release-tells-you-who-answered-checklist">
  <p>... any line can now be expanded to show who answered the line, who wrote the
note, and who recorded the linked attribute.</p>
</blockquote>
<p class="quote__citation">from the <cite><a href="http://blog.cxalloy.com/post/132312963570/new-tq-release-tells-you-who-answered-checklist">CxAlloy Blog</a></cite><sup class="reference"><a id="reference-3" href="#note-3">[3]</a></sup></p>

<footer class="footnotes">
  <h3>References</h3>
  <ol class="references">
    <li class="reference-note" id="note-1">
      “2.1.2 Choose a comfortable measure.”
      <a href="http://webtypography.net/2.1.2">The Elements of Typographic Style Applied to the Web</a>.
      <a class="reference-note__back" href="#reference-1">&#42779;<!--&#8629;--></a>
    </li>

    <li class="reference-note" id="note-2">
      <em>I don’t remember the actual numbers here and can’t find a screenshot,
      but it was something to this effect...</em>
      <a class="reference-note__back" href="#reference-2">&#42779;<!--&#8629;--></a>
    </li>

    <li class="reference-note" id="note-3">
      “New TQ Release Tells You Who Answered Checklist and Test Lines, Plus Much
       More.” <a href="http://blog.cxalloy.com/post/132312963570/new-tq-release-tells-you-who-answered-checklist">
    CxAlloy Blog</a>.
      <a class="reference-note__back" href="#reference-3">&#42779;<!--&#8629;--></a>
    </li>
  </ol>
</footer>
