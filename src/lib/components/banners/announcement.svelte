<script context="module" lang="ts">
  export const key = Symbol();
</script>

<script lang="ts">
  import { getContext } from "svelte";
  import type { BannerData } from "$lib/types/banner.type";
  import Banner from "./base.svelte";

  /**
   * Each announcement must have a unique `storageKey` to ensure people who
   * dismiss announcement A will see a new banner for announcement B.
   * For simplicity, the announcement `storageKey` is the date the announcement
   * was made, in the `yyyy-mm-dd` format.
   */
  const bannerData: BannerData = getContext(key);
</script>

<div
  class:hidden={!bannerData.display}
  data-analytics={`{"position":"announcement"}`}
>
  <Banner
    storageKey="announcement-{`${bannerData.startDate}${bannerData.endDate}`}"
    display={bannerData.display}
    let:closeBanner
    class="announcement-banner border-b border-divider border-solid"
  >
    <span class="flex-1 text-lg text-right">🤝 </span>
    <p class="flex-2 px-4 md:px-2">
      Gitpod x JetBrains join forces to solve 'works on my machine' problem | <a
        href="/blog/gitpod-jetbrains"
        on:click={closeBanner}>View announcement</a
      >
    </p>
    <div class="flex-1 flex justify-end">
      <button on:click={closeBanner} class="align-middle">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.00107 1L11 11M10.9989 1L1 11"
            stroke="var(--important)"
            stroke-opacity="0.75"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>
  </Banner>
</div>
