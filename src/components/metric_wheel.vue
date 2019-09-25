<template>
  <div class="metric-wheel">
    <svg width="150" height="150" viewBox="0 0 42 42" class="donut">
      <circle class="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fcfcfd"></circle>
      <circle class="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#fcfcfd" stroke-width="3"></circle>
      <circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" :stroke="color" stroke-width="3" :stroke-dasharray="`50 ${50 - score}`" stroke-dashoffset="0"></circle>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'MetricWheel',
  props: ['score'],
  components: {
  },
  data() {
    return {

    }
  },
  computed: {
    color() {
      if (this.score < 0) {
        return "yellow"
      } else if (this.score < 1) {
        return "yellow"
      }
      return "rgb(134, 205, 55)"
    }
  }
}
</script>

<style lang="sass">
@import '../assets/stylesheets/colors.sass'

svg
  circle
    transition: all 1s ease-out

.metric-wheel
  font-family: sans-serif
  text-align: center
  width: 150px
  padding-top: 150px
  position: relative
  .donut
    position: absolute
    top: 0px
    left: 0px
    z-index: 500

  .risk-score
    position: absolute
    top: 0
    width: 150px
    height: 150px
    line-height: 150px
    left: 0
    text-align: center
    z-index: 1000
    font-size: 40px
    font-weight: 300
    color: $darkgrey


</style>