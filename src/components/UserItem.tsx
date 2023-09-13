import React, { FC } from "react";
import { IUser } from "../types/types";

interface UserItemProps {
  user: IUser;
}

export const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <div>
      {user.name} живет в {user.address.city} на улице
      {user.address.street}
    </div>
  );
};
