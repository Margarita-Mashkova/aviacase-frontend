<template>
    <div class="feedback-card">
        <div class="user">
            <div class="user-profile">
                 <img class="user-photo" src= "../assets/profile.png" width="50" height="50">
                <div class="user-info">
                    <label>User</label>
                    <label>12 мая в 12:47</label>                    
                </div>                
            </div>
            <div>                
                <div class="btns-bar">                
                    <img class="icon" src="../assets/edit.png" width="25" height="25">
                    <img class="icon" src="../assets/delete.png" width="25" height="25">
                </div>
            </div>            
        </div>        
        <div>
            <div class="feedback-text">
                <label>Круто</label>
            </div>            
        </div>
        <div class="rate">
            <div v-for="star in stars" v-bind:key="star">
                <img class="star-point" src="../assets/star.png" height="23" width="25">
            </div>
        </div>
    </div>
</template>

<script>

export default{
    data(){
        return {
            stars: [],
            rate: 3
        }
    },
    methods:{
        loadStars(){
            for (let i = 0; i < this.rate; i++){
                this.stars.push(i)
            }
        }
    },
    mounted(){
        this.loadStars()
    }
}
</script>

<style scoped>
.feedback-card{
    display: flex;
    flex-direction: column;
    background-color: #fcfcfc;
    font-family: Georgia, serif;
    font-size: 12pt;
    padding: 15px 30px;
    border: 1px solid;
    border-color: #128CAD;
    border-radius: 25px;
    color: black;
}

.user{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.user-profile{
    display: flex;
    flex-direction: row;
}

.user-info{
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: flex-start;
    margin-left: 15px;
}

.user-photo{
    border: 1px solid;
    border-color: #128CAD;
    border-radius: 50%;
}

.btns-bar{
    display: flex;
    align-self: self-start;
}

.feedback-text{   
    margin: 30px 0px;
    text-align: left;
    text-align: justify;
}

.icon{
    margin-right: 10px;
    cursor: pointer;
}

.rate{
    display: flex;
    flex-direction: row;
}
</style>