<template>

  <ul>
    <li v-for="item in items">There are {{ item.quantity }} {{ item.name }}</li>
  </ul>

</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: "orange", frequency: 12 },
        { name: "apple", frequency: 8 },
        { name: "banana", frequency: 1 },
        { name: "pear", frequency: 3 }
      ]
    }
  }
}
</script>
