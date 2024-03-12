<template>
    <section id="projects" class="bg-[#f9f9f9] antialiased">
        <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
            <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-xl text-[#0E6CC2] font-extrabold uppercase">
                    Projects
                </h2>
                <p class="mt-4 text-base font-semibold text-[#2d2e32] sm:text-xl">
                    Every project is a distinct work of development.
                </p>
            </div>

            <div class="py-16">  
                <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
    

                    <div :class="`space-y-6 lg:space-y-0 lg:flex lg:items-center lg:gap-12 ${(projectList.length - 1) > index ? 'mb-20' : ''}  text-center lg:text-start`" v-for="(project, index) in projectList" :key="`project-${index}`">
                        <div :class="`lg:w-6/12 ${(index %= 2) == 0 ? 'order-1 lg:order-2' : ''} flex justify-center bg-slate-200 rounded-lg`">
                            <!-- <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="project-img" loading="lazy" class="rounded-lg h-auto md:w-[28rem] lg:w-auto"> -->
                            <img src="../../assets/images/image-frame.png" alt="project-img" loading="lazy" class="rounded-lg h-auto md:w-[16rem] lg:w-auto">
                        </div>
                        
                        <div :class="`lg:w-6/12 ${(index %= 2) == 0 ? 'order-2 lg:order-1' : ''}`">
                            <h1 class="font-extrabold uppercase text-2xl mb-5 text-[#2d2e32]">{{ project.title }}</h1>
                            <p class="mt-2 text-gray-600 md:max-w-[32rem] mx-auto lg:mx-0"> {{ project.description }} </p>
                            <div class="mt-6 flex justify-center lg:justify-start gap-1 flex-wrap">
                                <span v-for="stack in project.tech" :key="stack.id" class="inline-flex items-center rounded-md bg-[#0E6CC2] px-2 py-1 text-xs text-white font-extrabold tracking-widest">{{ stack.name }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { projectList } from '@/constants';
</script>

<style lang="scss" scoped>

</style>