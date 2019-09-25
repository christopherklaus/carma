<template>
  <div class="footer w-100">
    <nav>
      <div class="card-body no-background pb-0">
        <ul class="list-group d-flex justify-content-between no-border">
          <router-link
            :to="{ path: '/friends' }"
            class="list-group-item list-group-item-action cursor-pointer text-center"
            :class="{ active: $route.path === '/friends'}"><i class="fas fa-users"></i></router-link>
          <router-link
            :to="{ path: '/' }"
            class="list-group-item list-group-item-action cursor-pointer text-center"
            :class="{ active: $route.path === '/'}"><i class="fas fa-home"></i></router-link>
          <router-link
            :to="{ path: '/list' }"
            class="list-group-item list-group-item-action cursor-pointer text-center"
            :class="{ active: $route.path === '/list'}"><i class="fas fa-list-ul"></i></router-link>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="sass" scoped>
@import '../assets/stylesheets/colors.sass'
@import '../assets/stylesheets/variables.sass'

.footer
  position: fixed
  bottom: 0

  .list-group
    flex-direction: row

    .list-group-item
      font-size: 30px
      transition: all .4s ease-out

      &.active
        transform: scale(1.2)
        position: relative
        z-index: 2000
        background-color: #ecffe6
        &:hover
          background-color: darken(#ecffe6, 5) !important

      i
        color: $darkgrey
        font-shadow: 0 0 5px rgba(0, 0, 0, .4)

</style>