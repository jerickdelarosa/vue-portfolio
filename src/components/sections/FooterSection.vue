<template>
    <footer class="bg-gray-700 py-5">
        <div class="h-[15vh] w-100 flex items-center">
            <div class="container mx-auto flex flex-col items-center justify-center sm:flex-row sm:justify-between gap-6">
                <div>
                    <span class="text-sm text-slate-50 font-semibold">Copyright © 2024. All rights are reserved</span>
                </div>
            <div>
            <div>
                <div class="flex space-x-4 sm:justify-center sm:mt-0">
                    <a v-for="link in mediaLinks" :key="link.id" :href="link.href" class="cursor-pointer footer--icons" target="_blank">
                        <img :src="link.icon" :alt="link.id" class="w-7 h-7 object-contain" />
                    </a>
                </div>
            </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { footerLinks } from '@/constants/index'

const mediaLinks = footerLinks;

</script>

<style lang="scss" scoped>
.footer--icons {
    transition: all .2s ease-in-out;

    &:hover {
        transform: scale(1.2);
    }
}
</style>