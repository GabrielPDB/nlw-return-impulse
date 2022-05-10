import nodemailer from 'nodemailer'

import { MailAdapter, SendMailData } from '../mails-adapter'

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'c308a9c20b32a5',
    pass: '014ff0ebdac4d6'
  }
})

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Gabriel Dal Bó <gabrielpdalbo@gmail.com>',
      subject,
      html: body
    })
  }
}
