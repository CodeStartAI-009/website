"use client";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export type User = {
  socketId: string;
  name: string;
  color: string;
  pos: { x: number; y: number };
  location: string;
  flag: string;
};

export type Message = {
  socketId: string;
  content: string;
  time: Date;
  username: string;
};

export type UserMap = Map<string, User>;

type SocketContextType = {
  socket: null;
  users: UserMap;
  setUsers: Dispatch<SetStateAction<UserMap>>;
  msgs: Message[];
};

const INITIAL_STATE: SocketContextType = {
  socket: null,
  users: new Map(),
  setUsers: () => {},
  msgs: [],
};

export const SocketContext =
  createContext<SocketContextType>(INITIAL_STATE);

const SocketContextProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<UserMap>(new Map());
  const [msgs] = useState<Message[]>([]);

  return (
    <SocketContext.Provider
      value={{ socket: null, users, setUsers, msgs }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
