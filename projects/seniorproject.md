---
layout: page
title: "Contextual Dashboard"
---


We created an Angular application that displayed data that our Django API listened for, which was then 
stored in a Postgres database. Our application was framed around maintaining a modular design that would allow
for future enhancements with minimal code changes. Users were able to view all security alerts, and in the case
of critical alerts, a wehbook was used to send a notification the security team for immediate feedback. Users were
then able to modify the status or leave comments on reports from our dashboard application.

You can download our final [write-up](SeniorDesignFinalReport.docx) and [presentation](SeniorDesignPresentation.pptx) for more explanation.

After the conclusion of the course, I began to modify the frontend of the application to make it more user friendly, and 
based on the standards set in Angular2 (now intended to be called only Angular). You can view the source code of the entire
application in my [repository](https://github.com/balassit/seniorproject).