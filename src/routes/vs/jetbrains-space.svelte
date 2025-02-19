<script context="module">
  export const prerender = true;
</script>

<script>
  import Hero from "$lib/components/hero.svelte";
  import { features } from "$lib/contents/jetbrains-space";
  import CalloutSecondary from "$lib/components/callout-secondary.svelte";
  import CompareFeatures from "$lib/components/jetbrains-space/compare-features.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import SectionFeatures from "$lib/components/section-features.svelte";
  import Feature from "$lib/components/feature.svelte";
</script>

<style lang="postcss">
  .gitpod-jetbrains {
    :global(.preview) {
      @apply col-start-1 row-start-1;
    }

    :global(.feature) {
      @apply flex-col-reverse;
    }

    :global(.feature) > :global(div:first-child) {
      @apply mb-0 mt-x-small md:mt-0;
    }

    :global(Section) {
      @apply mt-0;
    }
  }
</style>

<OpenGraph
  data={{
    description:
      "Gitpod is the vendor-neutral, open-source alternative that integrates with VS Code as well as all JetBrains IDEs like IntelliJ, GoLand, PhpStorm, PyCharm.",
    title: "Gitpod vs JetBrains Space - what makes Gitpod different?",
    keywords: "differences, jetbrains, Goland, Intellij, alternative",
  }}
/>

<Hero
  title="Gitpod vs JetBrains Space"
  text="Gitpod is the vendor neutral, open-source platform that integrates with
  your individual stack including all JetBrains IDEs."
  image={{
    src: "/images/jetbrains-space/git-providers.png",
    alt: "Git Providers",
    isCut: false,
  }}
  btnPrimary={{
    href: "https://www.gitpod.io/docs/ides-and-editors/jetbrains-gateway",
    text: "Try Now",
  }}
/>

<div class="gitpod-jetbrains">
  <Feature
    feature={{
      title: "Better together",
      paragraph:
        "Gitpod and JetBrains entered into a long term partnership with a deep product integration. You can work in cloud developer environments provisioned by Gitpod using your favorite desktop IDE from JetBrains.",
      image: {
        src: "/images/jetbrains-space/gitpod-jetbrains.png",
        darkSrc: "/images/jetbrains-space/gitpod-jetbrains-dark.png",
        alt: "JetBrains’ IDEs within Gitpod",
        classNames: "w-full max-w-md md:max-w-lg",
      },
      moreButton: {
        text: "Read announcement",
        href: "/blog/gitpod-jetbrains",
      },
    }}
  />
</div>

<SectionFeatures title="View the differences" {features} type="box" />

<CompareFeatures />

<CalloutSecondary
  title="Ready to launch your JetBrains IDE within Gitpod?"
  text="If you already have a Gitpod account, simply go to <a href='https://gitpod.io/preferences'>/preferences</a>, select your favourite IDE/editor and open your project."
>
  <img
    src="/images/jetbrains-space/jetbrains-ides-in-gitpod.png"
    alt="Jetbrains IDEs available to use with Gitpod"
    slot="image"
    class="max-w-3xl mx-auto mt-small w-full hidden md:block dark:shadow-highlight rounded-2xl"
  />
  <img
    src="/images/jetbrains-space/jetbrains-ides-in-gitpod-mobile.png"
    alt="Jetbrains IDEs available to use with Gitpod"
    slot="image-mobile"
    class="max-w-xs mx-auto mt-x-small w-full md:hidden dark:shadow-highlight rounded-2xl"
  />
</CalloutSecondary>
