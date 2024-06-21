import bcrypt from 'bcrypt';
import { CustomersTable } from '../common/models/tables/customer_table';
import { DokterTable } from '../common/models/tables/dokter_tables';

type payload = {
  name: string
  username: string
  email: string
  password: string
  type: string
}

export default async function RegistrationService(payload: payload) {
  const {name, username, email, password, type } = payload;

  if (type === "dokter") {

    const users = await DokterTable.findOne({
      where: {
        email: email,
        username: username
      }
    });

    if (users) {
      throw new Error(`email or username already exists`)
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await DokterTable.create({ name, username, email, password: hashedPassword })
    
  } 

  if (type === "customer") {

    const users = await CustomersTable.findOne({
      where: {
        email: email,
        username: username
      }
    });

    if (users) {
      throw new Error(`email or username already exists`)
    }



    const hashedPassword = await bcrypt.hash(password, 10);
    await CustomersTable.create({name, username, email, password: hashedPassword })
    
  }

  // if (type === "adnimin") {

  //   const users = await CustomersTable.findOne({
  //     where: {
  //       email: email,
  //       username: username
  //     }
  //   });

  //   if (users) {
  //     throw new Error(`email or username already exists`)
  //   }
  //  }

  

 




  return "Registration submitted successfully"

  
}