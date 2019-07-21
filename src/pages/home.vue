<template>
  <section class="home">
    <div class="home__title">
      <h1>Rooms</h1>
    </div>
    <div class="home__types">
      <a-row :gutter="20">
        <a-col :lg="8" v-for="(room, i) in roomTypes" :key="i">
          <div class="home__types--item">
            <span>{{ room.name }}</span>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="home__books">
      <div class="home__books--time">
        <a-range-picker
          size="large"
          style="width: 500px"
          :placeholder="placeholder"
        >
          <template slot="dateRender" slot-scope="current">
            <div class="ant-calendar-date" :style="getCurrentStyle(current)">
              {{ current.date() }}
            </div>
          </template>
        </a-range-picker>
      </div>
      <div class="home__books--choose">
        <a-select defaultValue="one" style="width: 250px" size="large">
          <!-- <a-icon slot="suffixIcon" type="user" /> -->
          <a-select-option value="one">1 guest</a-select-option>
          <a-select-option value="two">2 guests</a-select-option>
          <a-select-option value="three">3 guests</a-select-option>
          <a-select-option value="four">4 guests</a-select-option>
          <a-select-option value="five">5 guests</a-select-option>
          <a-select-option value="six">6 guests</a-select-option>
        </a-select>
      </div>
      <a-button type="primary" size="large" block>Book now</a-button>
    </div>
  </section>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      roomTypes: [
        { name: "private deluxe room" },
        { name: "private superior" },
        { name: "private friend room" },
        { name: "private room with share bathroom" },
        { name: "private dorm 4 beds" },
        { name: "double bed dorm 4 beds" },
        { name: "dormitory 10 beds" },
        { name: "female dorm 4 beds" }
      ],
      placeholder: ["Arrival", "Departure"]
    };
  },
  methods: {
    getCurrentStyle(current) {
      const style = {};
      if (current.date() === 1) {
        style.border = "1px solid #1890ff";
        style.borderRadius = "50%";
      }
      return style;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/home/home.scss";
</style>
