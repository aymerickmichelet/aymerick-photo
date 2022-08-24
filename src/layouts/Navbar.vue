<template>
    <div class="site-mobile-menu">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close mt-3">
          <span class="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div>

    <header class="site-navbar py-3" role="banner">

      <div class="container-fluid">
        <div class="row align-items-center">
            
          <div class="col-6 col-xl-2" data-aos="fade-down">
            <h1 class="mb-0">
                <router-link class="text-white h2 mb-0" :to="{ name: 'home'}">Aymerick Michelet</router-link>
            </h1>
          </div>
          <div class="col-10 col-md-8 d-none d-xl-block" data-aos="fade-down">
            <nav class="site-navigation position-relative text-right text-lg-center" role="navigation">

              <ul class="site-menu js-clone-nav mx-auto d-none d-lg-block">
                <li class="active"><router-link :to="{ name: 'home'}">Home</router-link></li>
                <li class="has-children">
                    <router-link :to="{ name: 'gallery'}">Gallery</router-link>
                    <ul class="dropdown">
                        <li><router-link to="#">Nature</router-link></li>
                        <li class="has-children"><router-link to="#">Wesh</router-link>
                        <ul class="dropdown">
                            <li><router-link to="#">Alors</router-link></li>
                        </ul>
                        </li>
                        <li class="has-children"><router-link to="#">Hola</router-link>
                        <ul class="dropdown">
                            <li><router-link to="#">Quetal</router-link></li>
                        </ul>
                        </li>
                    </ul>
                </li>
              </ul>

            </nav>
          </div>

          <div class="col-6 col-xl-2 text-right" data-aos="fade-down">
            <div class="d-none d-xl-inline-block">
              <ul class="site-menu js-clone-nav ml-auto list-unstyled d-flex text-right mb-0" data-class="social">
                  <li><a href="https://aymerickmichelet.fr" class="pl-3 pr-3"><span class="icon-globe"></span></a></li>
                  <li><a href="https://www.instagram.com/aymnms" class="pl-3 pr-3"><span class="icon-instagram"></span></a></li>
                  <li><a href="https://www.youtube.com/aymnms" class="pl-3 pr-3"><span class="icon-youtube-play"></span></a></li>
              </ul>
            </div>

            <div class="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style="position: relative; top: 3px;"><a href="#" class="site-menu-toggle js-menu-toggle text-black"><span class="icon-menu h3"></span></a></div>

          </div>

        </div>
      </div>
      
    </header>
</template>