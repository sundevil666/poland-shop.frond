<template>
  <div>
    <h1>{{ tittle }}</h1>
    <div v-if="products.length > 0">
      <ul>
        <li v-for="product in products" :key="product.id">
          <NuxtLink :to="'/products/' + product.id">{{ product.title }}</NuxtLink>
        </li>
      </ul>
    </div>
    <div v-else>Loading...</div>
    <button @click="$fetch">Load more...</button>
    {{ response }}
  </div>
</template>

<script>
export default {
  layout: 'default',
  name: "ProductsPage",
  data() {
    return {
      tittle: 'Shop',
      products: [],
      skip: 0,
      response: null,
    }
  },
  async fetch() {
    console.log(123);
    // const res = await this.$axios.get('/todos');
    // res.data.forEach((product) => {
    //   this.products.push(product);
    //   this.skip += 1;
    // });
    const res = await this.$axios.get('product/')
    this.response = res.data.data.index
    console.log(res.data.data);
  }
};
</script>
