<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="$cache.set('ccc', 333, 200)">添加 CCC 缓存</button>
    <button @click="$cache.drop('ccc')">删除 CCC 缓存</button>
    <button @click="$session.set('ccc', 333, 200)">添加 CCC 会话缓存</button>
    <button @click="$session.drop('ccc')">删除 CCC 会话缓存</button>
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