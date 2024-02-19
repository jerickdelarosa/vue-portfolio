<template>
    <section id="techstack">
        <div class="w-100 bg-slate-200">
            <div class="max-w-full px-16 py-8">
                <div class="px-5 py-2 text-center">
                    <p class="text-xl font-semibold">Tech Stack</p>
                </div>
                <div class="p-5 flex justify-center items-center">
                    <ul class="flex flex-wrap list-none gap-10 justify-center">
                        <li class="stack--wrapper flex justify-center gap-3">
                            <img 
                            class="object-fill w-12 h-12"
                            v-for="stack in stack1" :key="stack.id"
                            :src="stack.icon" :alt="stack.id"/>
                        </li>
                        <li class="stack--wrapper flex justify-center gap-3">
                            <img 
                            class="object-fill w-12 h-12"
                            v-for="stack in stack2" :key="stack.id"
                            :src="stack.icon" :alt="stack.id"/>
                        </li>
                        <li class="stack--wrapper flex justify-center gap-3">
                            <img 
                            class="object-fill w-12 h-12"
                            v-for="stack in stack3" :key="stack.id"
                            :src="stack.icon" :alt="stack.id"/>
                        </li>
                        <li class="stack--wrapper flex justify-center gap-3">
                            <img 
                            class="object-fill w-12 h-12"
                            v-for="stack in stack4" :key="stack.id"
                            :src="stack.icon" :alt="stack.id"/>
                        </li>
                        <li class="stack--wrapper flex justify-center gap-3">
                            <img 
                            class="object-fill w-12 h-12"
                            v-for="stack in stack5" :key="stack.id"
                            :src="stack.icon" :alt="stack.id"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { stack1, stack2, stack3, stack4, stack5 } from '@/constants/index'

</script>

<style lang="scss" scoped>
.stack--wrapper {
    transition: all .2s ease-in-out;

    &:hover {
        transform: translateY(-1rem);
    }
}
</style>