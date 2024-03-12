<template>
    <section id="contact" class="bg-inherit antialiased">
        <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
            <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-xl text-[#0E6CC2] font-extrabold uppercase">
                    Contact
                </h2>
                <p class="mt-4 text-base font-semibold text-[#2d2e32] sm:text-xl">
                    I look forward to connecting with you soon!
                </p>
            </div>
            <div class="container flex flex-col mx-auto">
                <div class="w-full">
                    <div class="container flex flex-col items-center gap-16 mx-auto my-6">
                        <div class="grid w-full grid-cols-1 gap-5 lg:grid-cols-3">
                            <div v-for="contact in contacts" :key="`contact-item-${contact.id}`" class="flex flex-col items-center gap-3 px-4 py-8 bg-white rounded-3xl shadow-main" >
                                <span>
                                    <component :is="contact.icon" class="h-9 w-9 text-[#0E6CC2]" aria-hidden="true" />
                                </span>
                                <p class="text-xl font-extrabold text-[#2d2e32]">{{contact.title}}</p>
                                <a class="text-lg text-gray-500 hover:text-[#0E6CC2]" target="_blank" :href="contact.link">{{contact.description}}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { contactList } from '@/constants';

const contacts = ref(contactList);
</script>

<style lang="scss" scoped>

</style>