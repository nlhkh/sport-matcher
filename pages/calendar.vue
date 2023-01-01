<template>
    <div class="flex flex-col mx-5 mb-3 gap-3">
        <div>
            My Calendar
        </div>
        <div class="tabs justify-between">
            <NuxtLink to="/calendar/going" class="tab tab-bordered" active-class="tab-active">Going</NuxtLink>
            <NuxtLink to="/calendar/upcoming" class="tab tab-bordered" active-class="tab-active">Upcoming</NuxtLink>
            <NuxtLink to="/calendar/past" class="tab tab-bordered" active-class="tab-active">Past</NuxtLink>
        </div>
        <NuxtPage></NuxtPage>
    </div>
</template>