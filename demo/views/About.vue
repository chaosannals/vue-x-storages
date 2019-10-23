<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  created() {
    this.$cache.set('aaa', 111);
    this.$cache.set('bbb', { bbb: 222 });
    this.$session.set('aaa', 'aaa111aaa');
    this.$session.set('bbb', { bbb: '222' });
  }
}
</script>