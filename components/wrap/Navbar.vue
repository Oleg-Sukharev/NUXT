<template>
  <div>
    <ul class="nav_ul_1">
      <navbar-menu-li v-for="(item, index) in menu" :key="`menu_item_${index}`" :item="item" />
    </ul>
  </div>
</template>

<script>
  import NavbarMenuLi from "@/components/wrap/NavbarLi";

  export default {
    name: "Menu",
    props: ["menu"],
    components: {
      NavbarMenuLi
    }
  };
</script>

<style lang="scss">
  .nav_ul_1{
    display: flex;
    li{
      display: block;
    }
  }
</style>
