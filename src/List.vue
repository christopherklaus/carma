<template>
  <div class="row">
    <div class="col-8">
      <div class="card tab-group no-border">
        <div class="card-header pb-0 loading-animation">
          <span class="font-weight-bold">Your last rides</span>
        </div>
        <div class="card-body no-background loading-animation">
          <div class="list-group">
            <div class="list-group-item d-flex justify-content-start">
              <div class="font-weight-bold">Yesterday, 4pm</div>
              <div class="ml-5">47 Carma</div>
            </div>
            <div class="list-group-item d-flex justify-content-start">
              <div class="font-weight-bold">Yesterday, 9am</div>
              <div class="ml-5">197 Carma</div>
            </div>
            <div class="list-group-item d-flex justify-content-start">
              <div class="font-weight-bold">September 12, 7am</div>
              <div class="ml-5">556 Carma</div>
            </div>
            <div class="list-group-item d-flex justify-content-start">
              <div class="font-weight-bold">August 16, 11pm</div>
              <div class="ml-5">122 Carma</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="card-body">
        <h6 class="link-headline text-muted">Your User Profile</h6>
        <h1 class="mt-3"><i class="fas fa-user text-muted"></i></h1>
        <h6 class="mb-0">Sharon Sharing</h6>
        <h6 class="link-headline">Being impactful since 1990</h6>
        <p class="mt-3">
          Your total carma is 4224. You are with us since September 18 2019. That's great!
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'List',
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
