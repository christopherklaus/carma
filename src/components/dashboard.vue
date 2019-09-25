<template>
  <div class="card tab-group no-border">
    <div class="card-header pb-0 d-flex justify-content-start">
      <MetricWheel
        :score="carmaPerMinute * 2"
        class="loading-animation" />
      <div class="carma-wrapper ml-5">
        <p class="text-muted mb-0 loading-animation">Your Carma 🌱</p>
        <h1 class="loading-animation">{{ Math.ceil(carmaPerMinute) }} <span class="font-small">per min</span></h1>
      </div>
    </div>
    <div class="card-body no-background loading-animation">
      <div class="row list-group no-border flex-row">
        <div class="col-8 list-group-item" @click="showCO2 = !showCO2">
          <div class="m-4">
            <h6 class="link-headline text-muted">You vs. the Others</h6>
            <div class="co2" v-if="showCO2">
              <h5 class="mt-4" :class="{ 'color-green': co2ToAverage > 0, 'color-yellow': co2ToAverage == 0, 'color-red': co2ToAverage < 0 }">{{ co2ToAverage }}g/<span class="font-small">km</span></h5>
              <h6 class="link-headline text-muted">less CO2 then other drivers around you</h6>
            </div>
            <div class="fuel-saving" v-else>
              <h5 class="mt-5" :class="{ 'color-green': co2ToAverage > 0, 'color-yellow': co2ToAverage == 0, 'color-red': co2ToAverage < 0 }">{{ fuelToAverage / 10 }}<span class="font-small">Liter</span></h5>
              <h6 class="link-headline text-muted">saved per 100km</h6>
            </div>
            <p class="mt-4 w-75">Thank you for helping the environment. To further reduce your carbon footprint you can compensate the current ride.</p>
            <button class="btn btn-success btn-lg mt-1">Compensate your Ride for {{ Math.round(totalCarma / 3) }} Carma</button>
          </div>
        </div>
        <div class="col-4 pl-0 d-flex flex-column">
          <div class="p-5 list-group-item">
            <div class="m-4">
              <h5>{{ Math.round(totalCarma) }} <span class="font-small">Carma</span></h5>
              <h6 class="link-headline text-muted">By driving environmently friendly <br>on this ride</h6>
            </div>
          </div>
          <div class="p-5 list-group-item">
            <div class="m-4">
              <h5>{{ rank }}/<span class="font-small">42</span></h5>
              <h6 class="link-headline text-muted">Rank within 5km</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MetricWheel from './metric_wheel.vue'

export default {
  name: 'Dashboard',
  data() {
    return {
      showCO2: true,
      speed: 120,
      totalCarma: 41
    }
  },
  computed: {
    co2ToAverage() {
      return Math.ceil(10 * (120 - this.speed))
    },
    fuelToAverage() {
      return Math.ceil(1 * (120 - this.speed))
    },
    carmaPerMinute() {
      return this.speed < 121 ? 120 - this.speed : 0
    },
    rank() {
      return this.carmaPerMinute > 10 ? 7 : 8
    }
  },
  watch: {
    carmaPerMinute(newValue, oldValue) {
      if (newValue > oldValue) {
        this.totalCarma = this.totalCarma += (newValue / 30)
      }
    }
  },
  mounted() {
    const randomValue = Math.random() * (3 - (-2)) + (-2)
    this.speed -= randomValue
    setInterval(() => {
      const randomValue = Math.random() * (3 - (-2)) + (-2)
      this.speed -= randomValue
    }, 2000)
  },
  components: {
    MetricWheel
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
  font-size: 4rem
  .font-small
    font-size: 1rem
</style>
