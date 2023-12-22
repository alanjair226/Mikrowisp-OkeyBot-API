require('dotenv').config();

const axios = require('axios');
const funcionesHora = require('../utils/funcionesHora');
const clienteMikroWisp = axios.create({
    baseURL: process.env.MIKWISP_API_URL,
});

const obtenerCredencialesPortal = async (req, res) => {
    try {
        const idmkw = req.params.idmkw;
        const tokenmikrowisp = req.params.tokenmikrowisp;

        // Modificamos la estructura del objeto de la solicitud
        const requestData = {
            idcliente: idmkw,
            token: tokenmikrowisp,
        };

        const response = await clienteMikroWisp.post('GetClientsDetails', requestData);

        const id = response.data.datos[0].id;
        const codigo = response.data.datos[0].codigo;

        const data = {
            success: true,
            message: "Datos obtenidos correctamente",
            data: {
                id: id,
                codigo: codigo,
            },
        };

        res.send(data);
    } catch (error) {
        console.error(error);

        const data = {
            success: false,
            message: "Error interno del servidor",
            error: error.message,
        };

        res.status(500).send(data);
    }
};

const obtenerDatos = async (req, res) => {
    try {
        const idmkw = req.params.idmkw;
        const tokenmikrowisp = req.params.tokenmikrowisp;

        const response = await clienteMikroWisp.post('GetClientsDetails', {
            idcliente: idmkw,
            token: tokenmikrowisp,
        });

        const nombre = response.data.datos[0].nombre;
        const direccion = response.data.datos[0].direccion_principal;
        const nodeId = response.data.datos[0].servicios[0].nodo;
        // Obtener el nombre del nodo a partir del mapeo
        const nodeName = nodoMapping[nodeId];

        const data = {
            success: true,
            message: "Datos obtenidos correctamente",
            data: {
                nombre: nombre,
                direccion: direccion,
                node: nodeName,
            },
        };

        res.json(data);
    } catch (error) {
        console.error(error);

        const data = {
            success: false,
            message: "Error interno del servidor",
            error: error.message,
        };

        res.status(500).json(data);
    }
};

const obtenerSaldo = async (req, res) => {
    try {
        const idmw = req.params.idmw;
        const tokenmw = req.params.tokenmw;

        const response = await clienteMikroWisp.post('GetClientsDetails', {
            idcliente: idmw,
            token: tokenmw,
        });

        const totalFacturas = {
            facturas_nopagadas: response.data.datos[0].facturacion.facturas_nopagadas,
            total_facturas: response.data.datos[0].facturacion.total_facturas,
            estado: response.data.datos[0].estado,
        };

        res.json({
            success: true,
            message: "Saldo obtenido correctamente",
            data: totalFacturas,
        });
    } catch (error) {
        console.error(error);

        const data = {
            success: false,
            message: "Error interno del servidor",
            error: error.message,
        };

        res.status(500).json(data);
    }
};

const registrarPagoMW = async (req, res) => {
    try {
        const idmw = req.params.idmw;
        const idokb = req.params.idokb;
        const tokenmw = req.params.tokenmw;
        const tokenOkeyBot = req.params.tokenokeybot;

        // Obtener facturas del cliente
        const invoicesResponse = await clienteMikroWisp.post("GetInvoices", {
            idcliente: idmw,
            token: tokenmw,
        });

        const invoiceId = invoicesResponse.data.facturas[0].id;

        // Pagar la primera factura
        const paidInvoiceResponse = await clienteMikroWisp.post("PaidInvoice", {
            idfactura: invoiceId,
            pasarela: "Transferencia bancaria",
            token: tokenmw,
        });

        // Enviar mensaje al cliente usando OkeyBot
        const confirmacion = funcionesHora.confirmarSegunHora();
        const okeyBotMessageResponse = await axios.post(
            `${process.env.OKEYBOT_API_URL}contact/id:${idokb}/message`,
            {
                message: {
                    type: "text",
                    text: confirmacion,
                },
            },
            {
                headers: {
                    Authorization: `Bearer ${tokenOkeyBot}`,
                    "Content-Type": "application/json",
                },
            }
        );

        console.log(okeyBotMessageResponse.data);

        // Enviar respuesta al cliente
        res.json({
            success: true,
            message: `Mensaje enviado: ${confirmacion}`,
        });
    } catch (error) {
        console.error(error);

        const data = {
            success: false,
            message: "Error interno del servidor",
            error: error.message,
        };

        res.status(500).json(data);
    }
};

const enviarSaludo = async (req, res) => {
    try {
        const id = req.params.id;
        const token = req.params.token;
        const saludo = funcionesHora.saludarSegunHora();

        const response = await axios.post(
            `https://api.chatapi.net/v2/contact/id:${id}/message`,
            {
                message: {
                    type: "text",
                    text: saludo,
                },
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );

        console.log(response.data);
        res.json({
            success: true,
            message: `Mensaje enviado: ${saludo}`,
        });
    } catch (error) {
        console.error(error);

        const data = {
            success: false,
            message: "Error interno del servidor",
            error: error.message,
        };

        res.status(500).json(data);
    }
};





module.exports = {
    obtenerCredencialesPortal,
    obtenerDatos,
    obtenerSaldo,
    registrarPagoMW,
    enviarSaludo,
};
