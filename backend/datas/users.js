import bcrypt from 'bcryptjs';
const users = [
  {
    name: 'Admin User',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Nishan Thapa',
    email: 'thapa@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Hari Sankhar',
    email: 'hari@pari.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
