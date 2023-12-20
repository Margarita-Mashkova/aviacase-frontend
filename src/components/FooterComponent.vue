<template>
  <div class="footer-container">
    <div class="contacts">
      <label class="title">Контакты</label>
      <label>+7 (987) 633-66-88</label>
      <label>aviacase.info@mail.ru</label>
    </div>

    <div class="last">
      <label>© aviacase 2023</label>
    </div>
  </div>
</template>

<script>
</script>

<style>
.footer-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #282727;
  
}

.contacts{
    display: flex;
    flex-direction: column;
    margin: 20px 30px;
    font-size: 12pt;
}

.title{
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 16pt;
}

.last{
    align-self: center;
    margin-bottom: 10px;
    font-size: 10pt;
}
</style>
