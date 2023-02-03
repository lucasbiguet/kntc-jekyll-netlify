---
layout: page
title: KNTC - Contact us
permalink: /contact
section: contact
---

<div class="relative h-app-height bg-fixed bg-cover bg-center anim--cascad flex flex-col justify-center mb-12" data-animate="" style="background-image: url(assets/images/contact-bg.jpg)">
  <h1 class="text-white z-10 tracking-wider">Contact us</h1>
  <div class="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black opacity-30"></div>
  <div class="absolute text-white mx-auto pb-5 w-full flex justify-center bottom-0 anim-fade-up">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
</div>

<div class="container max-w-5xl mx-auto sm:px-5">
  <div class="sm:bg-white sm:shadow sm:rounded-lg py-8">
    <p class="mb-5">
      Want to book us ? Make a collab ? Ask us something ? <br>
      Use the form, we'll get back to you as soon as possible !
    </p>

    {% include contact-form.html %}
  </div>
</div>
