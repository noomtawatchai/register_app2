Vue.component('item-componennt',{
    props: ['data'],
    template: '<p>This is {{ data }}</p>'
})

Vue.component('student-component',{
    props: ['name','lastneme','student','tel'],
    template: `
    <div>
        <p>ชื่อ : {{ name }}</p>
        <p>นามสกุล : {{ lastneme }}</p>
        <p>รหัสนักศึกษา : {{ student }}</p>
        <p>โทรศัพท์ : {{ tel }}</p>
        <hr>
    </div>
    `
    
})

var app = new Vue({
    el: '#app',
    data: {
        message: 'RMUTL',
        number: 1
    },
    filters: {
        cap: function(value){
            if(!value){
                return ''
            }
            value = value.toString()
            return value.toUpperCase()
        
    },
        cap2: function(value){
            if(!value){
                return ''
            }
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        },
    },
    methods: {
        reMessage: function(){
            this.message = this.message.split('').reverse().join('')
        },
        plusNumber: function(){
            this.number = this.number + 1
            // this.number++
        }
    }
})