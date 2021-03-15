# Introduction

This is an online Markdown editor built on Vue.

And it's my first time to use Vue as well as Markdown(I only used LaTeX before).

So I did learn many new things in this process.

---

The core code is in `src/components/Markdown`. The file consists of three parts.

The first part is HTML, marked by `<template>`, which defines the layout of this webpage.

The second is JavaScript, marked by `<script>`, which implements the main function and all the shortcuts.

And the third part is CSS, marked by `<style>`, where the display style is set as you know.

# Install
```
# install node.js modules
npm install

# install 3 dependent libs as follows

# translate Markdown into HTML
npm install marked --save

# Code Highlight in HTML
npm install highlight.js --save

# translate HTML into PDF
npm install html2canvas jspdf --save
```

# Run
Open this directory in CMD and execute
```
npm run dev
```
Then visit `http://localhost:8080/` in your browser.

# Demo
As you see, the left side is a Markdown editor and the translated HTML page is displayed on the right.

On the top are the shortcuts of common usage in case you forget it. 

Just choose the text and click the right button, the tags will be added automatically.

Finally, you can click 'Save' at the top left corner to download the HTML page into 'Markdown.pdf'.

![demo](https://github.com/CarolYeh910/tech-training-camp-frontend/blob/main/src/assets/demo.png)

# Acknowledgement
This is a frontend project of tech-training camp launched by ByteDance.

We learnt related techniques(HTML, CSS and JavaScript) in 2 weeks from the engineers in ByteDance.

They not only teached us basic grammar and usage of these programming languages,

but also showed us how to make a scalable and reusable design and optimize the scheme iteratively.

Thank you to all the organizers of this activity:heart:!!

# BTW
Due to the limited time, this project still has a lot to improve.

Meanwhile, I'm taking a course about making webpages in school this term.

I believe I'll do better when I finish that course.

BY Jingyun Ye(叶靖云),  3/14/2021
