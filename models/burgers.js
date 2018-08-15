module.exports = function(sequelize, DataTypes) {
    let Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            validate: {
                len: [1, 30],//allows length of 1-30
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    });
    // Burger.associate = function(models) {
        
    //     Burger.belongsTo(models.Customer, {
    //         onDelete: "CASCADE",
    //         foreignKey: {
    //         allowNull: true
    //       }
    //     });
    // };

    // module.exports = function(sequelize, DataTypes) {
//     let Customer = sequelize.define("Customer", {
//         customer_name: {
//             type: DataTypes.STRING,
//             validate: {
//                 len: [1, 30],//allows length of 1-30
//             }
//         }
//     });
//     Customer.associate = function(models) {
//         Customer.hasMany(models.Burger);
//     };
//     return Customer;
// }

    return Burger;
}