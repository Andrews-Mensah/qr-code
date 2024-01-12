
const QRCode = require('qrcode')

module.exports.createQR = async (req, res) => {

    const url = 'www.everythingsouthafrican.com'


    QRCode.toDataURL(url, (err, qrCodeURL)=>{

        if(err){
            res.status(500).send('Internal Server Error')
        }


        else {
            res.send(`
            <!DOCTYPE HTML>
            <html>
                <head>

                    <title> QR Code Generator </title>

                </head>
                <body>

                    <h1> QR Code Generator </h1>
                    <img src="${qrCodeURL}" alt = " QR Code">
                    <p> Scan the code and visit website </p>
                </body>
            </html>
            `)
        }
    })
    
}