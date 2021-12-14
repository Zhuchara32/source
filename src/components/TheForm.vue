<template>
    <li class="form">
        <input class="form-input" type="radio" :id="nameItem"
        :name="name" :value="nameItem" :checked="active" @click="itemFind(name, nameItem)">
        <label class="form-label label" :for="nameItem">
            {{ nameItem }}
        </label>
    </li>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: [
    'active',
    'nameItem',
    'name'
  ],
  methods: {
    ...mapMutations(['findItem']),
    itemFind (name, nameItem) {
      this.$store.commit('findItem', {
        name,
        nameItem
      })
    }
  }
}
</script>

<style lang="scss">
    .form {
        margin-right: 1rem;

        &:last-child {
            margin-right: 0;
        }

        &-label {
            border: solid #F2F2F2 1px;
            background: #FCFCFC;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 3rem;
            padding-right: 2rem;
            padding-left: 2rem;
            border-radius: 20px;
            cursor: pointer;
            position: relative;
        }

        &-input {
            position: absolute;
            top: 2rem;
            left: 2rem;
            visibility: hidden;
            &:checked + .label {
                background: #FCDED3;
                color: #F39284;
            }
        }
    }
</style>
