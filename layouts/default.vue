<template>
  <div class='wrapper'>
    <bmw-header/>
      <main>
        <nuxt />
      </main>
    <bmw-footer/>
  </div>
</template>

<script>
import BmwHeader from '@/components/wrap/Header'
import BmwFooter from '@/components/wrap/Footer'
export default {
  components: {
    BmwHeader,
    BmwFooter
  },
}
</script>
