var enumRoles;
(function (enumRoles) {
    enumRoles[enumRoles["ADMIN"] = 0] = "ADMIN";
    enumRoles[enumRoles["GUEST"] = 1] = "GUEST";
    enumRoles[enumRoles["USER"] = 2] = "USER";
})(enumRoles || (enumRoles = {}));
var user2 = {
    role: enumRoles.ADMIN,
    color: 1 /* enumColors.pink */,
};
console.log(enumRoles[enumRoles.ADMIN]);
