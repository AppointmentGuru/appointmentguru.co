---
layout: page
title:  "Improved support for entering your medical aid codes - 26 January 2018"
date: 2018-01-26 10:00:00 +0200
category: announcements
published: true
tags:
  - release notes
  - invoicing
---
# Improved support for entering your medical aid codes

Today we released an update which makes it simpler, faster and easier to add medical aid details like ICD10 and process codes to your appointments. This is part of our drive to make invoicing as simple and seamless for you as possible.

Our vision is to make you better at admin while spending less time doing it - getting invoicing right is a large part of that vision. Today, we think we've taken an important step in that direction!

## What's improved

So, what exactly have we done?

### One way of doing things

Previously, we had a few different ways in which you could manage invoice details, line items and prices. We've consolidated all of those into a single interface. You can access it directly from the appointment detail page (ie. click on an appointment and open it), or from any appointment actions dropdown.

<img src='/assets/img/blog/2018-01-22-improved-support-for-medical-aid-codes-for-your-invoices/invoice-details-page.png' alt='The invoice details page' class='img-responsive img-thumbnail' />

### Add, edit and delete codes for an appointment

Managing line items is now as simple as managing a table. You can edit details by clicking on the row; delete by clicking on the trash bin, and also add a new item.

The "add and add more" option is also useful when you're adding a lot of codes. It doesn't clear the fields, so you can quickly add line items which use mostly the same data. For example, you might add a number of process codes for the same ICD10 code. Since the only data that's changing per line item is the process code, you can now simply edit the code and click "add" again - making it fast and simple to add!

<div class='block' >

  <h3>Smart process and diagnosis code search</h3>

  <div class="row my-4">
    <div class="col-xs-12 col-sm-6">
      When adding codes to your invoice, you might need to search to find the exact code. Don't worry, we've got your back with ICD10 code search <i>and</i> process code search. What's more, codes that are often used or used recently are highlighted. When it comes to process codes, the price you normally use is remembered and added automatically.

      <p><br/>
      <strong>Feature summary:</strong>

      <ul>
        <li>Search ICD10 and process codes.</li>
        <li>Detailed results are returned, including medical aid tariff rates for process codes.</li>
        <li>Suggested results let you quickly find and add what you're looking for based on codes you've used previously.</li>
        <li>Price can be populated based on prices you've used before.</li>
      </ul>
      </p>
    </div>

    <div class="col-xs-12 col-sm-6">
      <img src='/assets/img/blog/2018-01-22-improved-support-for-medical-aid-codes-for-your-invoices/icd10-code-picker.png' alt='The invoice details page' class='img-responsive img-thumbnail' />
    </div>
  </div>
</div>

### The pricing becomes more obvious

If you've specified medical aid codes and process numbers on your invoice, the price will automatically be set to the sum of those numbers, otherwise we'll just use the price specified for the appointment type by default. But you can always edit that to anything you like.

### Other small improvements

* Send the invoice to another email address when sending it to your client/yourself. Included is a list of email addresses used by Medical Aids for submitting claims. Just click on the search icon. We're going to improve this functionality over time.
* The appointment type information is now included on appointment details _and you can edit it!_ For example, if you've mistakenly made an appointment for an "Initial Consultation" but it's actually a "Followup Consultation", it's easily updated on the appointment detail page.
* The invoiceable status of an appointment is included on the list of appointments visible on the client detail page.
* Add clients from the your Contacts on your phone (a feature we had mistakenly removed, sorry Melissa!)

<div style="text-align: right">26 January 2018</div>
