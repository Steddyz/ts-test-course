enum enumRoles {
  ADMIN = 0,
  GUEST = 1,
  USER = 2,
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

// reverse mapping

console.log(enumRoles[enumRoles.ADMIN]);
