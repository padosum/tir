<template>
  <section class="navbar">
    <div class="menu-container">
      <div>
        <nav class="navbar-links">
          <div class="categories">
            <li :class="selected('Art')">
              <router-link :to="'/Art'">
                <i class="fas fa-palette"></i> Art
              </router-link>
            </li>
            <li :class="selected('Business')">
              <router-link :to="'/Business'"
                ><i class="fas fa-briefcase"></i> Business</router-link
              >
            </li>
            <li :class="selected('Data-Science')">
              <router-link :to="'/Data-Science'"
                ><i class="fas fa-database"></i> Data Science</router-link
              >
            </li>
            <li :class="selected('Design')">
              <router-link :to="'/Design'"
                ><i class="far fa-object-ungroup"></i> Design</router-link
              >
            </li>
            <li :class="selected('Dev')">
              <router-link :to="'/Dev'"
                ><i class="fas fa-terminal"></i> Dev</router-link
              >
            </li>
            <li :class="selected('History')">
              <router-link :to="'/History'"
                ><i class="fas fa-landmark"></i> History</router-link
              >
            </li>
            <li :class="selected('Life')">
              <router-link :to="'/Life'"
                ><i class="fas fa-life-ring"></i> Life</router-link
              >
            </li>
            <li :class="selected('Study')">
              <router-link :to="'/Study'"
                ><i class="fas fa-pencil-alt"></i> Study</router-link
              >
            </li>
            <li :class="selected('Technology')">
              <router-link :to="'/Technology'"
                ><i class="fas fa-microchip"></i> Technology</router-link
              >
            </li>
            <li :class="selected('Test')">
              <router-link :to="'/Test'"
                ><i class="fas fa-vial"></i> Test</router-link
              >
            </li>
          </div>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    selected(name) {
      return this.$route.params.category === name ? 'selected' : ''
    },
  },
}
</script>

<style lang="scss" scoped>
$background-grey: #efefef;
$text-light-grey: #9f9f9f;
$background-hover-grey: #e4e4e4;

.navbar {
  position: relative;
  background: #323246;
  width: 250px;
  flex-shrink: 0;
}

.navbar-links {
  height: calc(100vh - 120px);
  font-size: 13px;
  font-weight: 700;
}

.menu-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 20px;
  padding-top: 18px;
  font-weight: 300;
}

.categories {
  margin-top: 30px;
  overflow: auto;
  height: 100%;
}

.categories li {
  padding-left: 20px;
  display: flex;
  align-items: center;
  list-style: none;
}

.categories li:hover {
  background: #755180;
}

.categories li.selected {
  background: #755180;
}

.categories li a {
  margin-right: 20px;
  color: #eee3f6;
  font-weight: 300;
}
.categories li a i {
  color: #a392a6;
}
</style>
