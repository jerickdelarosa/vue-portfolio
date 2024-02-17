<template>
    <section id="techstack">
        <div class="h-[20vh] w-100 bg-slate-600 flex items-center">
            <div class="container mx-auto flex flex-col items-center justify-center sm:flex-row sm:justify-between gap-6">
                <div>
                    <span class="text-md text-slate-50 font-semibold">Copyright © 2024. All rights are reserved</span>
                </div>
                <div>
                    <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
				
				
				<a v-for="link in footerLinks" :key="link.id" :href="link.href" class="text-white">
                    <img :src="link.icon" :alt="link.id" class="w-[25px] h-[25px] object-contain" />
				</a>
				
			</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { mediaLinks } from '@/constants/index'

const footerLinks = mediaLinks;


</script>

<style lang="scss" scoped>

</style>