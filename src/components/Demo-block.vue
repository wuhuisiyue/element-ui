<template>
  <div
    class="demo-block demo-box"
    :class="[blockClass, { 'hover': hovering }]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false">
    <slot name="source"></slot>
  </div>
</template>

<style>
</style>

<script type="text/babel">
  export default {
    data() {
      return {
        hovering: false,
        isExpanded: false,
        fixedControl: false,
        scrollParent: null
      };
    },

    props: {
    },
    methods: {

    },

    computed: {

      blockClass() {
        return `demo-zh-CN demo-${this.$route.path.split('/').pop() }`;
      }
    },

    watch: {
    },

    mounted() {
      // console.log(this.$route.path)
    }
  };
</script>
