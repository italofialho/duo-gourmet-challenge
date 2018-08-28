const functions = require('firebase-functions');
const admin = require("firebase-admin");
const cors = require('cors')({ origin: true });
admin.initializeApp();

const db = admin.database();

exports.addRestaurant = functions.https.onRequest((request, response) => {
    const parameters = request.body;
    const { restaurant } = parameters;
    db
        .ref("Restaurants/")
        .push(restaurant)
        .once("value")
        .then(snap => {
            snap
                .ref
                .update({ id: snap.key })
                .then((updatedSnapshot) => {
                    cors(request, response, () => {
                        response.json({
                            data: updatedSnapshot.val(),
                            success: true,
                            message: "Restaurante cadastrado com sucesso!"
                        });
                    });
                })
                .catch((error) => {
                    cors(request, response, () => {
                        response.json({
                            data: error,
                            success: false,
                            message: "Tivemos um problema para atualizar o id do restaurante!"
                        });
                    });
                });
        })
        .catch((error) => {
            cors(request, response, () => {
                response.json({
                    data: error,
                    success: false,
                    message: "Tivemos um problema para cadastrar o restaurante!"
                });
            });
        });
});

exports.updateRestaurant = functions.https.onRequest((request, response) => {
    const parameters = request.body;
    const { restaurant } = parameters;

    if(!restaurant.id){
        cors(request, response, () => {
            response.json({
                data: "restaurant id not found!",
                success: false,
                message: "Tivemos um problema para atualizar o restaurante!"
            });
        });

        return;
    }

    db
        .ref(`Restaurants/${restaurant.id}`)
        .once("value")
        .then(snap => {
            cors(request, response, () => {
                response.json({
                    data: snap.val(),
                    success: true,
                    message: "Restaurante atualizado com sucesso!"
                });
            });
        })
        .catch((error) => {
            cors(request, response, () => {
                response.json({
                    data: error,
                    success: false,
                    message: "Tivemos um problema para atualizar o restaurante!"
                });
            });
        });
    response.send("AddRestaurant");
});

exports.deleteRestaurant = functions.https.onRequest((request, response) => {
    const paramters = request.body;
    const { restaurantId } = paramters;
    db
        .ref("Resturants/")
        .orderByChild("id")
        .equalTo(restaurantId)
        .once("value")
        .then((restaurantSnapshot) => {
            if (restaurantSnapshot.val()) {
                restaurantSnapshot
                    .ref
                    .remove()
                    .then(() => {
                        cors(request, response, () => {
                            response.json({
                                data: {},
                                success: true,
                                message: "Resturante excluido com sucesso!"
                            });
                        });
                    })
                    .catch(error => {
                        cors(request, response, () => {
                            response.json({
                                data: error,
                                success: false,
                                message: "Erro ao excluir o restaurante selecionado!"
                            });
                        });
                    })
            } else {
                cors(request, response, () => {
                    response.json({
                        data: {},
                        success: false,
                        message: "Não foi possivel encontrar o restaurante com o id informado!"
                    });
                });
            }
        })
        .catch((error) => {
            cors(request, response, () => {
                response.json({
                    data: error,
                    success: false,
                    message: "Erro ao encontrar o restaurante com o id informado!"
                });
            });
        })
});

exports.getRestaurants = functions.https.onRequest((request, response) => {
    db
        .ref("Restaurants/")
        .once("value")
        .then((restaurantsSnapshot) => {
            if (restaurantsSnapshot.val()) {
                cors(request, response, () => {
                    response.json({
                        data: restaurantsSnapshot.val(),
                        success: true,
                        message: "Lista de restaurantes carregado com sucesso!"
                    });
                });
            } else {
                cors(request, response, () => {
                    response.json({
                        data: {},
                        success: true,
                        message: "Nenhum resturante cadastrado ainda!"
                    });
                });
            }
        })
        .catch((error) => {
            cors(request, response, () => {
                cors(request, response, () => {
                    response.json({
                        data: error,
                        success: false,
                        message: "Erro ao buscar lista de restaurantes!"
                    });
                });
            });
        });
});