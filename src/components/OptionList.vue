<template>
    <li class="options-item">
        <fieldset class="options-form">
            <legend class="options-name">{{ name }}</legend>
            <ul class="options-form__list">
                <TheForm
                v-for="item in arr" :key="item.name"
                :nameItem="item.name"
                :active="item.active"
                :name="name" />
            </ul>
        </fieldset>
        <section class="options-more">
            <h3 class="options-name">{{ moreObj.name }}</h3>
            <ul class="options-form__list">
                <TheMore
                    v-for="item in moreObj.arr"
                    :key="item.id"
                    :name="item"
                />
            </ul>
        </section>
    </li>
</template>

<script>
import TheForm from './TheForm.vue'
import TheMore from './TheMore.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    TheForm,
    TheMore
  },
  props: [
    'name',
    'arr'
  ],
  computed: {
    ...mapGetters(['moreObj'])
  }
}
</script>

<style lang="scss">
  .options {
    &-form {
      border: none;
    }

    &-item {
      margin-bottom: 2rem;
      width: fit-content;
      display: flex;

      &:last-child {
        margin-bottom: 0;
      }

      &:last-child > .options-more {
        display: block;
        margin-left: 2rem;
        padding-left: 2rem;
        border-left: solid 3px #F5F5F5;
      }
    }
  }
</style>
