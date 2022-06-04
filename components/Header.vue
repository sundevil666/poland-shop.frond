<template>
  <header class="container mx-auto flex justify-between px-4">
    <a href="/">logo</a>
    <nav>
      <ul class="flex gap-3 ">
        <li><a href="/">Main</a></li>
        <li><NuxtLink to="/shop/products">Shop</NuxtLink></li>
        <li><NuxtLink to="/shop/basket">Basket</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>
