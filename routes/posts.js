const express = require('express');
const router = express.Router();
const config = require('../config')
const email = require('emailjs')

const smtp = email.server.connect({
    user: "christianmota07@gmail.com",
    password: config.password,
    host: "smtp.gmail.com",
    ssl: true,
    port: 465
});

// comments
router.post('/save-comment', (req, res) => {
    let params = req.body;
    smtp.send({
        from: "christianmota07@gmail.com",
        to: "crixgaymer@gmail.com",
        subject: 'Bien!',
        attachment: [
            { data: `
                <html>
                    <table style="width: 100%; padding: 10px; margin:0 auto; border-collapse: collapse;">	
                    <tr>
                        <td style="background-color: #f2f2f2">
                            <div style="color: #34495e; margin: 4% 10% 2%; text-align: center;font-family: sans-serif">
                                <h2 style="margin: 0 0 7px; text-transform: capitalize;">${params.nombre}</h2>
                                <p style="margin: 2px; font-size: 15px">${params.articulo}</p>
                                <p style="margin: 2px; font-size: 15px">${params.modelo}</p>
                                <p style="margin: 2px; font-size: 15px">${params.colores}</p>
                                <p style="margin: 2px; font-size: 15px">${params.detalles}</p>
                                <p style="color: #b3b3b3; font-size: 12px; text-align: center;margin: 30px 0 0">Chica del formulario</p>
                            </div>
                        </td>
                    </tr>
                    </table>
                </html>
            `, alternative: true }
        ]
    }, function(err, success) {
        if (err) return res.status(500).send({ message: `error en la peticion ${err}` });
        if (success) {
            return res.status(200).send({ message: 'Gracias por usar nuestros servicios' })
        }
    });
})

module.exports = router