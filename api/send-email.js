import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // Configure o transporte do Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail', // ou qualquer outro serviço de e-mail
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: 'rafaeljoelsonifsudeste@gmail.com', // Substitua pelo seu e-mail
            subject: 'Mensagem do formulário de contato',
            text: `Nome: ${name}\nE-mail: ${email}\nMensagem:\n${message}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'E-mail enviado com sucesso!' });
        } catch (error) {
            res.status(500).json({ error: 'Ocorreu um erro ao enviar o e-mail.' });
        }
    } else {
        res.status(405).json({ error: 'Método não permitido' });
    }
}
