import mongoose, { Document } from "mongoose";
import { IUser } from "./model.interfaces";

export interface IToken extends Document {
    _id: mongoose.Schema.Types.ObjectId;
     userId: string;
     accessToken: string;
     refreshToken: string;
     accessTokenExpiry: Date;
     refreshTokenExpiry: Date;
     createdAt?: Date;
    }
    export interface UserDocument extends Document {
        _id:mongoose.Schema.Types.ObjectId;
          name?: string;
          email?: string;
          phone?: number;
          password?: string;
          createdAt?: Date;
          updatedAt?: Date;
        }
    export interface UserService {
        findUserByEmail(email: string, password: string): Promise<IUser | null>;
        getUserById(userId: mongoose.Schema.Types.ObjectId): Promise<UserDocument | null>; // Added getUserById
        createUser(user: UserDocument): Promise<UserDocument | null>; // Added getUserById
        getUserByID(uid: mongoose.Schema.Types.ObjectId): Promise<UserDocument[] | null>; // Added getUserById
      }
      
      export interface TokenService {
        generateAccessToken(user: UserDocument): string;
        generateRefreshToken(user: UserDocument): string;
        findTokenByUserId(userId: mongoose.Schema.Types.ObjectId): Promise<IToken | null>;
        createToken(
          userId: mongoose.Schema.Types.ObjectId,
          accessToken: string,
          refreshToken: string,
          accessTokenExpiry: Date,
          refreshTokenExpiry: Date
        ): Promise<IToken>;
        updateToken(
          tokenDocument: IToken, // Changed from refreshTokenData to tokenId, more generic
          accessToken: string,
          accessTokenExpiry: Date
        ): Promise<IToken>;
        deleteToken(tokenId: mongoose.Schema.Types.ObjectId): Promise<IToken | null>;
      }   

      export interface UserService {
        findUserByEmail(email: string, password: string): Promise<UserDocument | null>;
        getUserById(userId: mongoose.Schema.Types.ObjectId): Promise<UserDocument | null>; // Added getUserById
        createUser(user: UserDocument): Promise<UserDocument | null>; // Added getUserById
        getUserByID(uid: mongoose.Schema.Types.ObjectId): Promise<UserDocument[] | null>; // Added getUserById
      }
      export interface TokenDocument {
        _id: mongoose.Schema.Types.ObjectId;
        userId: string;
        accessToken: string;
        refreshToken: string;
        accessTokenExpiry: Date;
        refreshTokenExpiry: Date;
        // Add other token properties as necessary
      }