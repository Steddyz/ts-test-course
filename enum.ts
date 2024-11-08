enum enumRoles {
  ADMIN,
  GUEST,
  USER,
}

const enum enumColors {
  black,
  pink,
  blue,
  red,
}

interface IUser2 {
  role: enumRoles;
  color: enumColors;
}

const user2: IUser2 = {
  role: enumRoles.ADMIN,
  color: enumColors.pink,
};
