<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ number }}</h1>
    <h3 @click="_add()">++</h3>
    <h3 @click="_jian()">--</h3>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      number: 0
    };
  },
  // ...MapActions  -----
  computed: {
    isFollow() {
      return this.$store.state.number; //需要监听的数据
    }
  },
  watch: {
    isFollow(newVal, oldVal) {
      this.number = newVal;
    }
  },
  // ...MapActions  -----
  mounted() {
    this.number = this.$store.state.number;
    this.$http.get("", "").then(res => {
      console.log(res.data);
    });
  },
  methods: {
    _jian() {
      //  this.$store.commit('countNumber','-5')   //直接应用  mutations
      this.$store.dispatch("funNumber", "-5"); //直接应用  actions
      this.number = this.$store.state.number;
    },
    _add() {
      //  this.$store.commit('countNumber','5')    //直接应用  mutations
      this.$store.dispatch("funNumber", "5"); //直接应用  actions
      this.number = this.$store.state.number;
    }
  }
};
</script>
