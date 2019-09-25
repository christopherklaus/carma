<template>
  <div class="card tab-group no-border">
    <div class="card-body no-background loading-animation">
      <div class="list-group">
        <div class="m-3 loading-animation d-flex justify-content-center align-items-center w-100">
          <div class="d-flex justify-content-start align-items-center">
            <h5><i class="fas fa-user text-muted"></i></h5>
            <h6 class="link-headline ml-3 text-muted">It's you!</h6>
          </div>
          <div class="ml-5">
            <h5>127<span class="font-small">of 900</span></h5>
            <h6 class="link-headline text-muted">Environmental Impact</h6>
          </div>
          <div class="ml-auto">
            <img src="../public/qr.png" alt="join" width="150" height="150">
          </div>
        </div>
        <div class="list-group-item loading-animation d-flex justify-content-center align-items-center">
          <div class="d-flex justify-content-start align-items-center">
            <h5><i class="fas fa-user-friends text-muted"></i></h5>
            <h6 class="link-headline ml-3 text-muted">Daniel</h6>
          </div>
          <div class="ml-5">
            <h5>63<span class="font-small"> of 900</span></h5>
            <h6 class="link-headline text-muted">Environmental Impact</h6>
          </div>
          <div class="d-flex justify-content-end align-items-center ml-auto">
            <h6 class="link-headline mr-3 text-muted">Leave Car</h6>
            <h5><i class="fas fa-sign-out-alt text-muted"></i></h5>
          </div>
        </div>
        <div class="list-group-item loading-animation d-flex justify-content-center align-items-center">
          <div class="d-flex justify-content-start align-items-center">
            <h5><i class="fas fa-user-friends text-muted"></i></h5>
            <h6 class="link-headline ml-3 text-muted">Faizan</h6>
          </div>
          <div class="ml-5">
            <h5>299<span class="font-small"> of 900</span></h5>
            <h6 class="link-headline text-muted">Environmental Impact</h6>
          </div>
          <div class="d-flex justify-content-end align-items-center ml-auto">
            <h6 class="link-headline mr-3 text-muted">Leave Car</h6>
            <h5><i class="fas fa-sign-out-alt text-muted"></i></h5>
          </div>
        </div>
        <div class="list-group-item loading-animation d-flex justify-content-center align-items-center">
          <div class="d-flex justify-content-start align-items-center">
            <h5><i class="fas fa-user-friends text-muted"></i></h5>
            <h6 class="link-headline ml-3 text-muted">Oliver</h6>
          </div>
          <div class="ml-5">
            <h5>205<span class="font-small"> of 900</span></h5>
            <h6 class="link-headline text-muted">Environmental Impact</h6>
          </div>
          <div class="d-flex justify-content-end align-items-center ml-auto">
            <h6 class="link-headline mr-3 text-muted">Leave Car</h6>
            <h5><i class="fas fa-sign-out-alt text-muted"></i></h5>
          </div>
        </div>
        <div class="list-group-item loading-animation d-flex justify-content-center align-items-center">
          <div class="d-flex justify-content-start align-items-center">
            <h5><i class="fas fa-user-friends text-muted"></i></h5>
            <h6 class="link-headline ml-3 text-muted">Tszherri</h6>
          </div>
          <div class="ml-5">
            <h5>206<span class="font-small"> of 900</span></h5>
            <h6 class="link-headline text-muted">Environmental Impact</h6>
          </div>
          <div class="d-flex justify-content-end align-items-center ml-auto">
            <h6 class="link-headline mr-3 text-muted">Leave Car</h6>
            <h5><i class="fas fa-sign-out-alt text-muted"></i></h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Dashboard',
  data() {
    return {
      showCO2: true
    }
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  h1
    font-weight: 200
    font-size: 100px
    .font-small
      font-size: 1rem
  h5
    font-size: 2rem
    .font-small
      font-size: 1rem
</style>
