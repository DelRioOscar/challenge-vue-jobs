<template>
  <div>
    <Header />
    <main class="main">
      <section class="card">
        <Job v-for="(job, index) in jobs" :key="index" :job="job" />
      </section>
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Job from "@/components/Job.vue";

export default {
  name: "Home",
  components: {
    Header,
    Job,
  },
  async created() {
    await this.$store.dispatch("getJobs");
  },

  computed: {
    jobs() {


      return this.$store.getters.getJobsFilters;
    },
  },
};
</script>
