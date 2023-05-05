---
layout: page
title: KNTC - Body and Soul
permalink: /body-and-soul
links:
  spotify: https://open.spotify.com/album/5JDRytKRcNrCRCnXMG630I
  apple: https://music.apple.com/us/album/body-and-soul-ep/1560871383
  deezer: https://www.deezer.com/fr/album/339168007
  bandcamp: https://kntcband.bandcamp.com/album/body-and-soul
---

<div class="flex flex-col md:flex-row md:mb-12 md:shadow-xl anim--cascad" data-animate="">
  <div class="relative h-app-height bg-cover bg-bottom flex-auto flex flex-col justify-center items-center mb-12 md:mb-0" style="background-image: url(assets/images/body-and-soul/bg.jpg)">
    <a href="https://store.kntcband.com/article/body-and-soul-ep">
      <img class="w-full max-w-lg" src="assets/images/body-and-soul/cd-body-and-soul.png" alt="Body and Soul" loading="lazy">
    </a>
    <div class="absolute text-white mx-auto pb-5 w-full flex justify-center bottom-0 z-20 anim-fade-up md:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>

  <div class="mb-12 md:mb-0 px-5 sm:px-24 md:px-10 text-left flex flex-col justify-center">
    <div>
      <h1 class="text-black font-extrabold z-10 tracking-widest table-caption">Body and Soul</h1>
      <a href="https://store.kntcband.com/article/body-and-soul-ep" target="_blank" rel="noopener nofollow" class="mb-5 w-full h-10 flex justify-center items-center px-10 text-lg font-bold uppercase rounded-sm shadow-sm text-white bg-red transition-colors duration-500 ease-smooth hover:bg-red-light hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red">
        <span class="mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
        </span>
        <span>Buy now</span>
      </a>
      {% for link in page.links%}
        {% if link[1] %}
          <div class="flex mb-5">
            <div class="flex-auto flex items-center">
              <img src="assets/images/streaming/{{ link[0] }}.png" class="h-8">
            </div>
            <a href="{{ link[1] }}" target="_blank" rel="noopener nofollow" class="h-10 ml-2 inline-flex items-center px-10 text-lg font-bold uppercase rounded-sm shadow-sm text-white bg-red transition-colors duration-500 ease-smooth hover:bg-red-light hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red">
              Play
            </a>
          </div>
        {% endif %}
      {% endfor %}
    </div>
  </div>
</div>
<div class="mb-5 px-5 sm:px-24 md:px-0 md:max-w-sm md:mx-auto text-left">
  <p class="text-justify mb-2">
    Like what you hear ? Subscribe to our monthly newsletter ! (In French for now)
  </p>

  {% include newsletter-form.html %}
</div>
