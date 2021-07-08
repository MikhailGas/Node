const EventEmitter = require('events')

class Timer {

    
    
    static flag = true

    static getDelta(payload){
        if (payload - new Date() > 0){
            this.flag = false
            
        }
        if(this.flag){
            
            console.log('Таймер ' + ' завершился')
        }
        const date = new Date(payload - new Date())
        console.log ('До завершения осталось ', `${(date.getFullYear() - 1970)} лет ${date.getMonth()} месяц(а)(ов) ${date.getDay()} дня(ей) ${date.getHours()} час(а)(ов) ${date.getMinutes()} минут(а)(ы) `)
    }

}



const emitterObject = new EventEmitter()

emitterObject.on('getDelta', Timer.getDelta)

const time = process.argv[2]

const reg = new RegExp('[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}-[0-9]{1,2}-[0-9]{1,2}$')

if(reg.test(time)){
    let date = time.split('-')
    let timer = new Date(date[0], date[1], date[2], date[3], date[4])
    setInterval(() => {
        status = emitterObject.emit('getDelta', timer)
        
    }, 1000)
}






