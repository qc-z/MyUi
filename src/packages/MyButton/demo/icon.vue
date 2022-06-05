<template>
  <a-button type="primary" shape="circle">
    <template #icon><SearchOutlined /></template>
  </a-button>
  <a-button type="primary" shape="circle">A</a-button>
  <a-button type="primary">
    <template #icon><SearchOutlined /></template>
    Search
  </a-button>
  <a-button shape="circle">
    <template #icon><SearchOutlined /></template>
  </a-button>
  <a-button>
    <template #icon><SearchOutlined /></template>
    Search
  </a-button>
  <a-button shape="circle">
    <template #icon><SearchOutlined /></template>
  </a-button>
  <a-button>
    <template #icon><SearchOutlined /></template>
    Search
  </a-button>
  <a-button type="dashed" shape="circle">
    <template #icon><SearchOutlined /></template>
  </a-button>
  <a-button type="dashed">
    <template #icon><SearchOutlined /></template>
    Search
  </a-button>
  <a-button href="https://www.google.com">
    <template #icon><SearchOutlined /></template>
  </a-button>
  <br />
  <br />
  <a-tooltip title="search">
    <a-button type="primary" shape="circle" size="large">
      <template #icon><SearchOutlined /></template>
    </a-button>
  </a-tooltip>
  <a-button type="primary" shape="circle" size="large">A</a-button>
  <a-button type="primary" size="large">
    <template #icon><SearchOutlined /></template>
    Search
  </a-button>
  <a-tooltip title="search">
    <a-button shape="circle" size="large">
      <template #icon><SearchOutlined /></template>
    </a-button>
  </a-tooltip>
  <a-button size="large">
    <template #icon><SearchOutlined /></template>
    Search
  </a-button>
  <br />
  <a-tooltip title="search">
    <a-button shape="circle" size="large">
      <template #icon><SearchOutlined /></template>
    </a-button>
  </a-tooltip>
  <a-button size="large">
    <template #icon><SearchOutlined /></template>
    Search
  </a-button>
  <a-tooltip title="search">
    <a-button type="dashed" shape="circle" size="large">
      <template #icon><SearchOutlined /></template>
    </a-button>
  </a-tooltip>
  <a-button type="dashed" size="large">
    <template #icon><SearchOutlined /></template>
    Search
  </a-button>
  <a-button size="large" href="https://www.google.com">
    <template #icon><SearchOutlined /></template>
  </a-button>
</template>
<script>
import { SearchOutlined } from '@ant-design/icons-vue'
export default {
  components: {
    SearchOutlined
  }
}
</script>
