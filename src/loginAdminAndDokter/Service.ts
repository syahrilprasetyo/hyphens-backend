import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { DokterTable } from '../common/models/tables/dokter_tables';
import { AdminTable } from '../common/models/tables/admin_table';

type payload = {
  email: string
  password: string
}

export default async function RegistrationService(payload: payload) {
  const { email, password } = payload;
  const data = {
    dokterId: 0,
    adminId: 0,
    email: email,
    message: "login successful",
    token: '',
    role: ''
  }

  // Find the user by email
  const dokter = await DokterTable.findOne({ where: { email } });
  const admin = await AdminTable.findOne({ where: { email } });

  let passwordMatch
  let userId

  if (dokter) {
    data.dokterId = dokter.id
    data.role = 'dokter'
    // Verify password
    passwordMatch = await bcrypt.compare(password, dokter.password);
    userId = dokter.id
  } else if (admin) {
    data.adminId = admin.id
    data.role = 'admin'
    // Verify password
    passwordMatch = await bcrypt.compare(password, admin.password);
    userId = admin.id
  }


  // If password doesn't match, return null
  if (!passwordMatch) {
    throw new Error(`password doesn't match`);
  }

  // Generate JWT token
  const token = jwt.sign({ userId: userId }, 'indomiegoreng2', { expiresIn: '1h' });

  // Return the JWT token

  data.token = token ?? '';

  
  return data

  
}