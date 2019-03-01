<template>
  <header class="header">
    <div class="grid-container">
      <div class="top-bar">
        <div class="top-bar-left">
          <nuxt-link to="/" class="hdr-logo" rel="home">
            <svg class="logo">
              <use xlink:href="~assets/image/icons-sprite.svg#logo" />
            </svg>
            <h1 class="hdr-logo-link">
              <span>Rafał Ubysz</span>
              <span>Ultrasonografia</span>
            </h1>
          </nuxt-link>
        </div>

        <div class="top-bar-right">
          <nav id="nav-main" class="nav-main" role="navigation">
            <ul class="menu">
              <li>
                <nuxt-link to="/o-mnie">
                  O mnie
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/uslugi">
                  Usługi
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/kontakt">
                  Kontakt
                </nuxt-link>
              </li>
            </ul>
          </nav><!-- #nav -->
        </div>
      </div>
    </div>
  </header>
</template>
