<template>
  <div class="hello">
    <h1>{{ number }}</h1>
    <h3>Installed CLI Plugins</h3>
    <h3>Essential Links</h3>
    <h3 @click="_add('10')">++</h3>
    <h3 @click="_jian('-10')">--</h3>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
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
  },
  methods: {
    // ...MapActions  -----
    ...mapActions({
      _jian: "curNumber",
      _add: "curNumber"
    })
    // ...MapActions  -----
    // _jian(){
    //   //  this.$store.commit('countNumber','-5')   //直接应用  mutations
    //   this.$store.dispatch('funNumber','-5')       //直接应用  actions
    //   this.number = this.$store.state.number
    // },
    // _add(){
    //   //  this.$store.commit('countNumber','5')    //直接应用  mutations
    //   this.$store.dispatch('funNumber','5')        //直接应用  actions
    //   this.number = this.$store.state.number
    // },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
