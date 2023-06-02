---
layout: page
title: KNTC - The Great Escape - Debut Album PREORDER NOW
permalink: /the-great-escape
links:
  spotify: https://open.spotify.com/album/3FPKYukJNzS9gTxBdo4O9k
  youtube:
  apple:
  deezer: https://www.deezer.com/album/413078317
  bandcamp: https://kntcband.bandcamp.com/album/the-great-escape
  soundcloud: https://soundcloud.com/kntcband/sets/the-great-escape-promo
---

<div class="flex flex-col md:flex-row md:mb-12 md:shadow-xl anim--cascad" data-animate="">
  <div class="relative h-app-height bg-cover bg-bottom flex-auto flex flex-col justify-center items-center mb-12 md:mb-0" style="background-image: url(assets/images/the-great-escape/bg.jpg)">
    <div class="absolute w-full h-full bg-black bg-opacity-20"></div>
    <div class="z-20 h-64 hidden md:block md:w-2/3 md:mx-auto max-w-xl bg-cover bg-center" style="background-image: url(assets/images/hunting/thumbnail.jpg)">
      <iframe class="w-full h-full" src="https://www.youtube.com/embed/Cq-KCNCyRR8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="md:hidden block text-white max-w-md px-5 z-20">
      <img src="assets/images/the-great-escape/title-white.png" class="mb-2" title="The Great Escape" alt="The Great Escape">
      <h1 class="sr-only">The Great Escape</h1>
      <h2 class="uppercase text-sm sm:text-lg flex justify-between mb-12 text-grey-800">
        <span>Debut album</span>
        <span>|</span>
        <span class="text-right">Out June 2nd</span>
      </h2>
    </div>
    <div class="md:hidden z-20 max-w-md px-5">
      <a href="https://store.kntcband.com/article/the-great-escape-cd" class="flex">
        <img src="assets/images/the-great-escape/cd-the-great-escape.png" alt="The Great Escape - Digipack CD" loading="lazy">
      </a>
    </div>
    <div class="absolute text-white mx-auto pb-5 w-full flex justify-center bottom-0 z-20 anim-fade-up md:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>

  <div class="mb-12 md:mb-0 md:max-w-md px-5 sm:px-24 md:px-10 text-left flex flex-col justify-center">
    <div>
      <div class="hidden md:block">
        <img src="assets/images/the-great-escape/title-black.png" class="mb-2" title="The Great Escape" alt="The Great Escape">
        <h1 class="sr-only">The Great Escape</h1>
        <h2 class="uppercase text-gray-400 text-sm sm:text-lg flex justify-between mb-12">
          <span>Debut album</span>
          <span>|</span>
          <span class="text-right">Out now</span>
        </h2>
      </div>
      <h3 class="uppercase">Buy</h3>
      <div class="flex space-x-4 mb-12">
        <a href="https://store.kntcband.com/article/the-great-escape-cd" target="_blank" rel="noopener nofollow" class="w-full h-10 flex justify-center items-center text-lg font-bold uppercase rounded-sm shadow-sm text-white bg-red transition-colors duration-500 ease-smooth hover:bg-red-light hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red">
          <span class="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </span>
          <span>CD</span>
        </a>
        <a href="https://kntcband.bandcamp.com/album/the-great-escape" target="_blank" rel="noopener nofollow" class="w-full h-10 flex justify-center items-center text-lg font-bold uppercase rounded-sm shadow-sm text-white bg-red transition-colors duration-500 ease-smooth hover:bg-red-light hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red">
          <span class="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
            </svg>
          </span>
          <span>Digital</span>
        </a>
      </div>
      <h3 class="uppercase">Stream</h3>
      {% for link in page.links%}
        {% if link[1] %}
          <div class="flex mb-5">
            <div class="flex-auto flex items-center">
              <img src="assets/images/streaming/{{ link[0] }}.png" class="h-8">
            </div>
            <a href="{{ link[1] }}" target="_blank" rel="noopener nofollow" class="h-10 ml-2 inline-flex items-center px-5 sm:px-10 text-lg font-bold uppercase rounded-sm shadow-sm text-white bg-red transition-colors duration-500 ease-smooth hover:bg-red-light hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red">
              Listen
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
