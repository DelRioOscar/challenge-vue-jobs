<template>
  <article class="card-container" :class="{'--card-featured': job.featured}">
    <div class="card__header">
      <img :src="require('../assets/' + job.logo)" class="card__image" />
      <div>
        <div class="card__before-title">
          <h4 class="card__company text--primary">{{job.company}}</h4>
          <div>
            <span v-if="job.new" class="badge badge--primary text--uppercase">New!</span>
            <span v-if="job.featured" class="badge badge--secondary text--uppercase">Featured</span>
          </div>
        </div>
        <h3 class="card__title">{{job.position}}</h3>
        <div class="card__sub-title">
          <span class="card__sub-title-text text--secondary">{{job.postedAt}}</span>
          <span class="card__sub-title-text text--secondary">{{job.contract}}</span>
          <span class="card__sub-title-text text--secondary">{{job.location}}</span>
        </div>
      </div>
    </div>

    <div class="card__body">
      <span class="badge badge--square badge--cyan" v-for="(lang, index) in job.languages" :key="index" @click="addLang(lang)">{{lang}}</span>
    </div>
  </article>
</template>

<script>
export default {
  name: "Job",
  props: {
    job: Object,
  },
  methods: {
    addLang(lang) {
      this.$store.dispatch('addLang', lang);
    }
  }
};
</script>

<style>
</style>