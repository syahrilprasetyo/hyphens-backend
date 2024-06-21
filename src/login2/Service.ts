import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { CustomersTable } from '../common/models/tables/customer_table';

type payload = {
  email: string
  password: string
}

export default async function RegistrationService(payload: payload) {
  const { email, password } = payload;
  const data = {
    customerId: 0,
    email: email,
    message: "login successful",
    token: ''
  }

  // Find the user by email
  const user = await CustomersTable.findOne({ where: { email } });

  // If user does not exist, return null
  if (!user) {
    throw new Error(`User not found`);
  }

  data.customerId = user.id

  // Verify password
  const passwordMatch = await bcrypt.compare(password, user.password);

  // If password doesn't match, return null
  if (!passwordMatch) {
    throw new Error(`password doesn't match`);
  }

  // Generate JWT token
  const token = jwt.sign({ userId: user.id }, 'indomiegoreng2', { expiresIn: '1h' });

  // Return the JWT token

  data.token = token ?? '';

  
  return data

  
}