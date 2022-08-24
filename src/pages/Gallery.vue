<template>
    <div class="site-section"  data-aos="fade">
      <div class="container-fluid">
        <div class="row justify-content-center">

          <div class="col-md-7">
            <div class="row mb-5">
              <div class="col-12 ">
                <h2 class="site-section-heading text-center">Gallery</h2>
              </div>
            </div>
          </div>

        </div>

        <div class="row" id="lightgallery">
          <div class="col-sm-6 col-md-4 col-lg-3 col-xl-3 item" data-aos="fade" data-src="src/assets/voielactee.png" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque hic excepturi fugit, sunt impedit fuga tempora, ad amet aliquid?</p>">
            <a href="#"><img src="@/assets/voielactee.png" alt="IMage" class="img-fluid"></a>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 col-xl-3 item" data-aos="fade" data-src="src/assets/voielactee.png" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam omnis quaerat molestiae, praesentium. Ipsam, reiciendis. Aut molestiae animi earum laudantium.</p>">
            <a href="#"><img src="@/assets/voielactee.png" alt="IMage" class="img-fluid"></a>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 col-xl-3 item" data-aos="fade" data-src="src/assets/voielactee.png" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem reiciendis, dolorum illo temporibus culpa eaque dolore rerum quod voluptate doloribus.</p>">
            <a href="#"><img src="@/assets/voielactee.png" alt="IMage" class="img-fluid"></a>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 col-xl-3 item" data-aos="fade" data-src="src/assets/voielactee.png" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim perferendis quae iusto omnis praesentium labore tempore eligendi quo corporis sapiente.</p>">
            <a href="#"><img src="@/assets/voielactee.png" alt="IMage" class="img-fluid"></a>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 col-xl-3 item" data-aos="fade" data-src="src/assets/voielactee.png" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, voluptatum voluptate tempore aliquam, dolorem distinctio. In quas maiores tenetur sequi.</p>">
            <a href="#"><img src="@/assets/voielactee.png" alt="IMage" class="img-fluid"></a>
          </div>
        </div>
      </div>
    </div>
</template>



<script>
export default {
    name: "App",
    mounted() {
      $('#lightgallery').lightGallery();
    }
}
</script>