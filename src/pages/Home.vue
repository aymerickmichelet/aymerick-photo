<template>
  <div class="site-wrap">

    <div class="container-fluid" data-aos="fade" data-aos-delay="500">
      <div class="row">
        <div class="col-lg-4">
          <div class="image-wrap-2">
            <div class="image-info">
              <h2 class="mb-3">Nature</h2>
              <router-link class="btn btn-outline-white py-2 px-4" :to="{ name: 'gallery'}">
                More Photos
              </router-link>
            </div>
            <img src="@/assets/voielactee.png" alt="Image" class="img-fluid">
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
    name: "App"
}
</script>