<template>
  <header class="header">
    <section class="search" v-if="langs.length > 0">
      <article class="search__container">
        <div class="search__badges">
           <div class="button-badge" v-for="(lang, index) in langs" :key="index">
            <span class="badge badge--square badge--cyan">{{lang}}</span>
            <button class="btn--primary" @click="deleteLang(lang)">X</button>
          </div> 
        </div>
        <button class="btn--link" @click="clear">Limpiar</button>
      </article>
    </section>
  </header>
</template>

<script>
export default {
    name: 'Header',
    methods: {
      deleteLang(lang){
        this.$store.dispatch('removeLang', lang);
      },
      clear(){
        this.$store.dispatch('clearLang');
      }
    },
    computed: {
      langs(){
        return this.$store.state.languages;
      }
    }
};
</script>

<style>
</style>