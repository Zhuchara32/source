<template>
    <section class="home">
        <h1 class="home-heading">
            It's time to find <span class="home-heading__ginger">the perfect job</span>
        </h1>
        <input class="home-search" type="search" name="q"
        aria-label="Search through site content"
        placeholder="Search by location"
        @focus="focusItput">
        <portal to="options">
            <TheOptions
                v-show="active"/>
        </portal>
    </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TheOptions from './TheOptions.vue'

export default {
  components: {
    TheOptions
  },
  computed: {
    ...mapGetters(['active'])
  },
  methods: {
    ...mapActions(['focusItput'])
  }
}
</script>

<style lang="scss">
    .home {
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: url('../assets/image.png') no-repeat;
        background-size: cover;
        background-position: center center;
        padding-top: 8vh;
        position: relative;

        &-heading {
            margin-bottom: 3vh;

            &__ginger {
                color: #D55123;
            }
        }

        &-search {
            border-radius: 50px;
            border: none;
            width: 28vw;
            height: 8vh;
            font-size: 16px;
            padding-left: 5vw;
            display: inline-flex;
            align-items: center;
            background: url('../assets/loon-icon.png') no-repeat;
            background-size: 4rem;
            background-position: left center;
            background-color: #ffffff;
        }
    }
</style>
