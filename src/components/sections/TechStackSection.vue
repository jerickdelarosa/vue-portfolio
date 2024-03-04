<template>
    <section id="techstack" class="bg-[#FEFBF3] antialiased">
        <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
            <div class="max-w-2xl mx-auto text-center mb-5">
                <h2 class="text-xl text-[#0E6CC2] font-extrabold uppercase">
                    Tech Stack
                </h2>
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