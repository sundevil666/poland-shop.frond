<template>
  <div class="grid flex-col gap-4 h-screen wrapper-default">
    <Header class="header grid-rows-none" />
    <main class="container mx-auto layout-default px-4">
      <Nuxt />
    </main>
    <Footer class="footer" />
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>

<style>
.wrapper-default {
  grid-template-rows: auto 1fr auto;
}
</style>

