<template>
    <form class="options" @submit.prevent="showMainArr">
        <button class="options-clouse" @click.prevent="focusItput">X</button>
        <ul class="options-list">
            <OptionList
                v-for="item in mainArr"
                :key="item.name"
                :name="item.name"
                :arr="item.arr"
            />
        </ul>
        <button class="options-btn">Clear</button>
    </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import OptionList from './OptionList.vue'

export default {
  components: {
    OptionList
  },
  mounted () {
    this.showMainArr()
    this.saveMainArr()
  },
  computed: {
    ...mapGetters(['mainArr'])
  },
  methods: {
    ...mapActions(['saveMainArr', 'showMainArr', 'focusItput'])
  }
}
</script>

<style lang="scss">
    .options {
        height: 70vh;
        width: 90vw;
        position: absolute;
        top: 15rem;
        left: 5rem;
        background: #ffffff;
        border-radius: 20px;
        padding: 1.5rem;

        &::before {
            content: "";
            width: 4rem;
            height: 3rem;
            background: url('../assets/triangle-2.png') no-repeat;
            background-size: cover;
            position: absolute;
            top: -1.3rem;
            left: 48vw;
        }

        &-list {
            list-style-type: none;
        }

        &-form {
            &__list {
                list-style-type: none;
                display: flex;
                justify-content: space-around;
                width: fit-content;
            }
        }

        &-clouse {
            height: 20px;
            width: 20px;
            border-radius: 20px;
            font-size: 10px;
            border: 1px solid black;
            text-align: center;
            line-height: 18px;
            background: #ffffff;
            position: absolute;
            right: 1.5rem;
            font-weight: 700;
        }

        &-name {
            font-weight: 700;
            padding-bottom: 1rem;
        }

        &-more {
            display: none;
        }

        &-btn {
            border: 1px solid #F1F1F1;
            background: #F4F4F4;
            color: #86838D;
            height: 3rem;
            width: 6rem;
            border-radius: 20px;
            margin-top: 3rem;
        }
    }
</style>
