import { User as PrismaUser } from 'src/generated/prisma/client';

export class User implements PrismaUser {
  id: number;
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
