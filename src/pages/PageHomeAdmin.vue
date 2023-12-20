<template>
    <HeaderAdmin />
    <div class="heading">
        <label>Панель администратора сайта <br>AVIACASE</label>
    </div>
</template>
  
<script>
import HeaderAdmin from "@/components/HeaderAdmin.vue";

export default {
    name: "PageHomeAdmin",
    components: {
        HeaderAdmin
    },
};
</script>
  
<style>
.heading {
    text-align: -webkit-center;
    font-weight: bold;
    font-size: 22pt;
    margin: 20px 0px;
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
}
</style>
  