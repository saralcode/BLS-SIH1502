// nextauth.d.ts
import { DefaultSession, DefaultUser } from "next-auth";
// Define a role enum
export type Roles =  "admin" | "student" | "faculty"|"coordinator"|"staff"| "collaborator" | "other";
// common interface for JWT and Session
interface IUser extends DefaultUser {

}
declare module "next-auth" {
  interface User extends IUser { }
  interface Session {
    user?: User;
  }
}
declare module "next-auth/jwt" {
  interface JWT extends IUser { }
}
