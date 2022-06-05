<template>
  <a-radio-group v-model:value="size">
    <a-radio-button value="large">Large</a-radio-button>
    <a-radio-button value="default">Default</a-radio-button>
    <a-radio-button value="small">Small</a-radio-button>
  </a-radio-group>
  <br />
  <br />
  <a-button type="primary" :size="size">Primary</a-button>
  <a-button :size="size">Normal</a-button>
  <a-button type="dashed" :size="size">Dashed</a-button>
  <a-button danger :size="size">Danger</a-button>
  <a-button type="link" :size="size">Link</a-button>
  <br />
  <a-button type="primary" :size="size">
    <template #icon>
      <DownloadOutlined />
    </template>
  </a-button>
  <a-button type="primary" shape="circle" :size="size">
    <template #icon>
      <DownloadOutlined />
    </template>
  </a-button>
  <a-button type="primary" shape="round" :size="size">
    <template #icon>
      <DownloadOutlined />
    </template>
    Download
  </a-button>
  <a-button type="primary" shape="round" :size="size">
    <template #icon>
      <DownloadOutlined />
    </template>
  </a-button>
  <a-button type="primary" :size="size">
    <template #icon>
      <DownloadOutlined />
    </template>
    Download
  </a-button>
  <br />
</template>
<script lang="ts">
import { DownloadOutlined } from '@ant-design/icons-vue'
import type { SizeType } from 'ant-design-vue/es/config-provider'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  components: {
    DownloadOutlined
  },
  setup() {
    return {
      size: ref<SizeType>('large')
    }
  }
})
</script>
