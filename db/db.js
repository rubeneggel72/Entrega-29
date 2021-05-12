const mongoose=require('mongoose')

 class MongoDB {

    constructor(URL) {
        this.URL = URL

        process.on('exit', () => {
            this.close()
        })
    }

    async conectar(URL) {
        try {
            await mongoose.connect(this.URL, { useNewUrlParser: true, useUnifiedTopology: true })
        }
        catch(err) {
            console.log(`MongoDB: Error en conectar: ${err}`)
            throw err
        }        
    }
    close() {
        console.log('Cerrando conexión MongoDB!');
    }
}
module.exports=MongoDB