<template>

<div class="xl:container xl:mx-auto px-4 flex flex-col md:items-center justify-between md:flex-row">
    <div class="md:w-1/2 w-full mb-14 md:mb-0">
        <div class="pl-4 border-l border-gray-800 mb-4">
            <h5 class="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-gray-800">{{title}}</h5>
        </div>
        <p class="text-base leading-normal text-gray-600 lg:w-2/3 md:w-10/12 w-full">{{description}}</p>
    </div>
    <div class="md:w-1/2">
        <div role="list" aria-label="Features" class="grid grid-cols-1 sm:grid-cols-2 lg:gap-20 gap-6 flex-wrap justify-center items-start">

            <div
              v-for='feature in features' :key='feature.title'
              role="listitem" class="flex items-start">

                <img src="https://cdn.tuk.dev/assets/components/26May-update/features-1.png" :alt="feature.title" />
                <div class="pl-5">
                    <h5 class="text-base font-semibold leading-none text-gray-800 mb-2">{{feature.title}}</h5>
                    <p class="md:w-auto w-44 text-base leading-normal text-gray-600">{{feature.description}}</p>
                </div>

            </div>

        </div>
    </div>
</div>

</template>
<script>
export default {
  name: 'Features',
  data () {
    return {
      title: 'Why choose AppointmentGuru',
      description: 'AppointmentGuru gives you everything your need to build and grow your appointment based business',
      features: [
        {
          title: 'Run your business',
          description: 'Whether article spirits new her covered.'
        },
        {
          title: 'Promote your business',
          description: 'Whether article spirits new her covered.'
        },
        {
          title: 'Grow your business',
          description: 'Whether article spirits new her covered.'
        },
        {
          title: 'Make your business more profitable',
          description: 'Whether article spirits new her covered.'
        }
      ]
    }
  }
}
</script>