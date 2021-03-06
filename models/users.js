module.exports = (sequelize, DataType) => {
	const Users = sequelize.define("Users", {
		id: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataType.STRING,
			allowNull: false,
			validade: {
				notEmpty: true
			}
		},
    password: {
			type: DataType.STRING,
			allowNull: false,
			validade: {
				notEmpty: true
			}
		},
    email: {
			type: DataType.STRING,
      unique: true,
			allowNull: false,
			validade: {
				notEmpty: true
			}
		}
	}, {
		classMethods: {
			associate: (models) => {
				Users.hasMany(models.Tasks);
			}
		}
	});
	return Users;
};
