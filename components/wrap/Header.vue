<template>
    <header class="header">
        <div class="container">
            <nuxt-link to='/contacts'>contacts</nuxt-link>
            <nuxt-link to='/'>
              <logo-nav/>
            </nuxt-link>
            <site-navbar :menu="menu" />
        </div>
    </header>
</template>
<script>
import SiteNavbar from "@/components/wrap/Navbar";
import LogoNav from "@/components/Logo";

export default {
  props: ["count"],
  computed: {
    menu() {
      return this.$store.state.menu;
    }
  },
  components: {
    SiteNavbar,
    LogoNav
  }
};
</script>

<style lang="scss">

</style>
