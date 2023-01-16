<template>
  <div>
    <Example />
  </div>
</template>

<script>
import Example from "../components/Example.vue"
export default {
  name: "home",
  layout: "dashboard",
  components: {
    Example
  },
};
</script>
