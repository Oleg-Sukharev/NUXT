<template>
  <li>
    <span class="name">{{item.name}}</span>
    <span class="count">({{item.children.length}})</span>
    <div class="children" v-if="!!item.children.length">
      <ul>
        <li v-for="(item, index) in item.children" :key="`menu_item__children_${index}`">
          <span class="name">{{item.name}}</span>
          <span class="count">({{item.children.length}})</span>
          <div class="children" v-if="!!item.children.length">
            <ol>
              <li v-for="(item, index) in item.children" :key="`menu_item__children_${index}`">
                <span class="name">{{item.name}}</span>
                <span class="count">({{item.children.length}})</span>
                <div class="children" v-if="!!item.children.length">
                  <ol>
                    <li
                      v-for="(item, index) in item.children"
                      :key="`menu_item__children_${index}`"
                    >
                      <span class="name">{{item.name}}</span>
                      <span class="count">({{item.children.length}})</span>
                    </li>
                    <br />
                  </ol>
                </div>
              </li>
              <br />
            </ol>
          </div>
        </li>
        <br />
      </ul>
    </div>
  </li>
</template>

<script>
export default {
  props: ["item"]
};
</script>

<style>
.children{
  display: none;
}
</style>
