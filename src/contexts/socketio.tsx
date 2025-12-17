"use client";

import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { Socket } from "socket.io-client";

/* -------------------- Types -------------------- */

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

export type SocketContextType = {
  socket: Socket | null;
  users: UserMap;
  setUsers: Dispatch<SetStateAction<UserMap>>;
  msgs: Message[];
};

/* -------------------- Initial State -------------------- */

const INITIAL_STATE: SocketContextType = {
  socket: null,
  users: new Map(),
  setUsers: () => {},
  msgs: [],
};

/* -------------------- Context -------------------- */

export const SocketContext =
  createContext<SocketContextType>(INITIAL_STATE);

/* -------------------- Provider -------------------- */

const SocketContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [users, setUsers] = useState<UserMap>(new Map());
  const [msgs, setMsgs] = useState<Message[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);

  // NOTE:
  // Socket connection logic (io()) can be added later inside useEffect
  // For now, typing is fixed and build will succeed

  return (
    <SocketContext.Provider
      value={{
        socket,
        users,
        setUsers,
        msgs,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
