<template>
    <li class="more">
        <button class="more-buttons">{{ name }}</button>
    </li>
</template>

<script>
export default {
  props: ['name']
}
</script>

<style lang="scss">
    .more {
        margin-right: 1rem;
        width: fit-content;

        &:last-child {
            margin-right: 0;
        }

        &-buttons {
            height: 3rem;
            padding-right: 2rem;
            padding-left: 2rem;
            border-radius: 20px;
            border: solid #CDFBF8 1px;
            color: #4AB8E8;
            background: #FFFFFF;
        }
    }
</style>
