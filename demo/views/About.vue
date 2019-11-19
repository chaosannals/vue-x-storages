<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="$cache.set('ccc', 333, 2000)">添加 CCC 缓存</button>
    <button @click="$cache.drop('ccc')">删除 CCC 缓存</button>
    <button @click="cacheHasC = $cache.has('ccc')">{{cacheHasC ? '有' : '无'}} 缓存</button>
    <button @click="$cache.drop($cache.tag('c'))">清除标签组</button>
    <button @click="$session.set('ccc', 333, 2000)">添加 CCC 会话缓存</button>
    <button @click="$session.drop('ccc')">删除 CCC 会话缓存</button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      cacheHasC: false,
    }
  },
  created() {
    this.$cache.set('aaa', 111);
    this.$cache.set('bbb', { bbb: 222 });
    this.$cache.tag('c', 'aaa');
    this.$cache.tag('c', 'bbb');
    this.$session.set('aaa', 'aaa111aaa');
    this.$session.set('bbb', { bbb: '222' });
  }
}
</script>